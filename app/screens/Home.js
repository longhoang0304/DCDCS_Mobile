import moment from 'moment';
import React, { Component } from 'react';
import { View, TouchableOpacity, Alert } from 'react-native';
import { Button, Text } from 'react-native-elements';

import { H1, H6, WhiteText } from '../components/Text';
import WeatherImage from '../components/Common/WeatherImage';
import WallpaperBackground from '../components/Common/WallpaperBackground';
import DryerSettingDialog from '../components/Common/DryerSettingDialog';
import LoadingDialog from '../components/Common/LoadingDialog';
import ProductSelectDialog from '../components/Common/ProductSelectDialog';
import * as RequestAction from '../constants/RequestActions';
// import styles from './styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().tz('Asia/Ho_Chi_Minh').format('ddd, DD MMM YYYY'),
      time: moment().tz('Asia/Ho_Chi_Minh').format('HH:mm:ss'),
      showDryerSettingDialog: false,
      showProductDialog: false,
      dcState: 0,
      dryerState: 0,
      dryerMinute: 5,
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

  componentDidUpdate() {
    const { updateSelection, productList, selected } = this.props;
    if (selected < 0 && productList.length !== 0) {
      updateSelection(0);
    }
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

  handleDC = (dcState) => {
    const { publishAction } = this.props;
    this.setState({ dcState });
    const payload = {
      action: RequestAction.CONTROL_DC,
    };
    publishAction(payload); // eslint-disable-line
  }

  handleDryer = (timer) => {
    const { publishAction } = this.props;
    const payload = {
      action: RequestAction.CONTROL_DRYER,
      timer,
    };
    publishAction(payload); // eslint-disable-line
    this.toggleDryerSettingDialog();
  }

  alertDCControl() {
    const { dcState } = this.state;
    Alert.alert(
      'CONFIRM',
      `Do you want to ${dcState ? 'collect' : 'dry'} your clothes?`,
      [
        {
          text: 'Yes, do it',
          onPress: () => this.handleDC(!dcState),
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

  toggleDryerSettingDialog = () => {
    const { showDryerSettingDialog } = this.state;
    this.setState({ showDryerSettingDialog: !showDryerSettingDialog });
  }

  toggleProductDialog = () => {
    const { showProductDialog } = this.state;
    this.setState({ showProductDialog: !showProductDialog });
  }

  handleSelection = (index) => {
    const { updateSelection } = this.props;
    updateSelection(index);
    this.toggleProductDialog();
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
      dryerMinute,
      showProductDialog,
      showDryerSettingDialog,
    } = this.state;
    const {
      navigation,
      isLoadingUser,
      isLoadingProduct,
      isPublishingAction,
      info,
      productList,
      selected,
    } = this.props;
    const isLoading = isLoadingProduct || isLoadingUser || isPublishingAction;

    return (
      <WallpaperBackground>
        <LoadingDialog isShow={isLoading} >
          <Text style={{ fontSize: 16 }}>Gathering information</Text>
        </LoadingDialog>
        <ProductSelectDialog
          isShow={showProductDialog}
          selected={selected}
          productList={productList}
          onPress={this.handleSelection}
          toggleDialog={this.toggleProductDialog}
        />
        <DryerSettingDialog
          state={dryerState}
          minute={dryerMinute}
          isShow={showDryerSettingDialog}
          onChange={_minute => this.setState({ dryerMinute: _minute })}
          toggleDialog={this.toggleDryerSettingDialog}
          handleDryer={(timer) => this.handleDryer(timer)}
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
              <WhiteText style={{ fontSize: 24, fontWeight: 'bold' }}>
                {productList[selected] && productList[selected].name}
              </WhiteText>
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
                onPress={() => this.toggleDryerSettingDialog()}
              />
              <Button
                buttonStyle={{
                  backgroundColor: 'rgba(194, 96, 255, 0.6)',
                  marginHorizontal: 0,
                  marginVertical: 0,
                }}
                rounded={true}
                title='Change device'
                onPress={() => this.toggleProductDialog()}
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