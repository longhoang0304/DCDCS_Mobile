import moment from 'moment';
import React, { Component } from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import { Button, Text } from 'react-native-elements';

import { H1, H6, WhiteText } from '../components/Text';
import WeatherImage from '../components/Common/WeatherImage';
import WallpaperBackground from '../components/Common/WallpaperBackground';
import DryerSettingDialog from '../components/Common/DryerSettingDialog';
import LoadingDialog from '../components/Common/LoadingDialog';
// import styles from './styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().tz('Asia/Ho_Chi_Minh').format('ddd, DD MMM YYYY'),
      time: moment().tz('Asia/Ho_Chi_Minh').format('HH:mm:ss'),
      showModal: false,
      showCombobox: false,
      dcState: 0,
      dryerState: 0,
      dryerMinute: 5,
      selected: '',
    };
    this.mounted = false;
  }

  componentDidMount() {
    const { getUserInfo } = this.props;
    getUserInfo();
    this.mounted = true;
    const intervalId = setInterval(this.updateTime.bind(this), 1000);
    this.setState({ intervalId });
  }

  clearInterval = () => {
    const { intervalId } = this.state;
    if (!intervalId) {
      clearInterval(intervalId);
      this.mounted = false;
    }
  }

  componentWillUnmount() {
    this.clearInterval();
  }

  handleDC(dcState) {
    this.setState({ dcState });
  }

  handleDryer(dryerState) {
    this.setState({ dryerState });
    this.toggleModal();
  }

  alertDCControl() {
    const { dcState } = this.state;
    const $this = this;
    Alert.alert(
      'CONFIRM',
      `Do you want to ${dcState ? 'collect' : 'dry'} your clothes?`,
      [
        {
          text: 'Yes, do it',
          onPress: () => $this.handleDC(!dcState),
        },
        {
          text: 'No',
        },
      ],
      {
        cancelable: false,
      },
    );
  }

  toggleModal() {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
  }

  static genGreeting() {
    const hour = moment().tz('Asia/Ho_Chi_Minh').hour();
    const greetngs = [
      'Good morning',
      'Have a great day',
      'Good afternoon',
      'Good evening',
      'Good night',
    ];
    if (hour >= 4 && hour <= 8) return greetngs[0];
    if (hour >= 9 && hour <= 12) return greetngs[1];
    if (hour >= 13 && hour <= 17) return greetngs[2];
    if (hour >= 18 && hour <= 20) return greetngs[3];
    return greetngs[4];
  }

  updateTime() {
    const { mounted } = this;
    if (!mounted) return;
    this.setState({
      date: moment().tz('Asia/Ho_Chi_Minh').format('ddd, DD MMM YYYY'),
      time: moment().tz('Asia/Ho_Chi_Minh').format('HH:mm:ss'),
    });
  }

  render() {
    const {
      date,
      time,
      dcState,
      dryerState,
      showModal,
      dryerMinute,
    } = this.state;
    const { navigation, isLoading, info } = this.props;

    return (
      <WallpaperBackground>
        <LoadingDialog isShow={isLoading} >
          <Text style={{ fontSize: 16 }}>Gathering information</Text>
        </LoadingDialog>
        <DryerSettingDialog
          state={dryerState}
          minute={dryerMinute}
          isShow={showModal}
          onChange={_minute => this.setState({ dryerMinute: _minute })}
          toggleDialog={() => this.toggleModal()}
          handleDryer={() => this.handleDryer()}
        />
        {/* =============== END POPUP DIALOG ================= */}
        <View style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: 'rgba(0, 0, 0, 0.3)',
          }}
        >
          <View style={{
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              paddingLeft: 15,
              paddingTop: 15,
              paddingRight: 15,
              flexDirection: 'row',
            }}
          >
            <View style={{
                flex: 1,
                flexDirection: 'column',
                alignItems: 'flex-start',
              }}
            >
              <H1><WhiteText>35°</WhiteText></H1>
              <H6><WhiteText>IDLING</WhiteText></H6>
            </View>
            <View style={{
                flex: 1,
                flexDirection: 'column',
                justifyContent: 'flex-start',
                alignItems: 'flex-end',
              }}
            >
              <WeatherImage />
              <WhiteText style={{ fontSize: 18 }}>{date}</WhiteText>
              <WhiteText style={{ fontSize: 24, fontWeight: 'bold' }}>{time}</WhiteText>
            </View>
          </View>
          <View style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
            }}
          >
            <View style={{
              flex: 1,
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'flex-start',
              paddingBottom: 15,
            }}>
              <Button
                buttonStyle={{
                  backgroundColor: 'rgba(0, 242, 255, 0.6)',
                  marginHorizontal: 0,
                  marginVertical: 0,
                  marginBottom: 15,
                }}
                rounded={true}
                title={`${dcState ? 'Collect' : 'Dry'} clothes`}
                onPress={() => this.alertDCControl()}
              />
              <Button
                buttonStyle={{
                  backgroundColor: 'rgba(0, 255, 187, 0.6)',
                  marginHorizontal: 0,
                  marginVertical: 0,
                  marginBottom: 15,
                }}
                rounded={true}
                title='Dryer setting'
                onPress={() => this.toggleModal()}
              />
              <Button
                buttonStyle={{
                  backgroundColor: 'rgba(194, 96, 255, 0.6)',
                  marginHorizontal: 0,
                  marginVertical: 0,
                }}
                rounded={true}
                title={`${dcState ? 'Collect' : 'Dry'} clothes`}
                onPress={() => this.alertDCControl()}
              />
            </View>
            <View
              style={{
                flex: 1,
                paddingBottom: 15,
                paddingRight: 15,
              }}
            >
              <View style={{
                flexGrow: 2,
              }}/>
              <TouchableOpacity
                style={{
                  flex: 1,
                  flexGrow: 1,
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                }}
                onPress={() => navigation.navigate('UserInfo')}
              >
                <WhiteText style={{
                  fontSize: 18,
                }}>
                  {`${Home.genGreeting()},`}
                </WhiteText>
                <H6>
                  <WhiteText>{info.fullName}</WhiteText>
                </H6>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </WallpaperBackground>
    );
  }
}

export default Home;