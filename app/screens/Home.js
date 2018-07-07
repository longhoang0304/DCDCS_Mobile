import React, { Component } from 'react';
import { View, TouchableOpacity } from 'react-native';
import moment from 'moment';
import WallpaperBackground from '../components/Common/WallpaperBackground';
import WeatherImage from '../components/Common/WeatherImage';
import { H1, H6, WhiteText } from '../components/Text';
import { Button } from '../../node_modules/react-native-elements';
// import styles from './styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().tz('Asia/Ho_Chi_Minh').format('ddd, DD MMM YYYY'),
      time: moment().tz('Asia/Ho_Chi_Minh').format('HH:mm:ss'),
      mounted: false,
    };
  }

  componentDidMount() {
    this.setState({ mounted: true });
    const intervalId = setInterval(this.updateTime.bind(this), 1000);
    this.setState({ intervalId });
  }

  componentWillUnmount() {
    const { intervalId } = this.state;
    if (!intervalId) {
      clearInterval(intervalId);
      this.setState({ mounted: false });
    }
  }

  updateTime() {
    const { mounted } = this.state;
    if (!mounted) return;
    this.setState({
      date: moment().tz('Asia/Ho_Chi_Minh').format('ddd, DD MMM YYYY'),
      time: moment().tz('Asia/Ho_Chi_Minh').format('HH:mm:ss'),
    });
  }

  render() {
    // const Gentona_Bold = {
    //   fontFamily: 'gentona-bold',
    // };
    // const titleStyle = [styles.headerText, Gentona_Bold];
    // const { navigation } = this.props;
    const { date, time } = this.state;

    return (
      <WallpaperBackground>
        <View style={{
            flex: 1,
            flexDirection: 'column',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
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
                title='Dry clothes'
                onPress={() => console.log('ABC')}
              />
              <Button
                buttonStyle={{
                  backgroundColor: 'rgba(0, 255, 187, 0.6)',
                  marginHorizontal: 0,
                  marginVertical: 0,
                }}
                rounded={true}
                title='Setup dryer'
                onPress={() => console.log('ABC')}
              />
            </View>
            <TouchableOpacity
              style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  alignItems: 'flex-end',
                  paddingBottom: 15,
                  paddingRight: 15,
                }}
              onPress={() => console.log('ABC')}
            >
              <WhiteText style={{
                fontSize: 18,
              }}>
                Good evening,
              </WhiteText>
              <H6>
                <WhiteText>Long Hoàng</WhiteText>
              </H6>
            </TouchableOpacity>
          </View>
        </View>
      </WallpaperBackground>
    );
  }
}

export default Home;