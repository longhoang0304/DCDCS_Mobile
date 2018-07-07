import React, { Component } from 'react';
import { View } from 'react-native';
import moment from 'moment';
import WallpaperBackground from '../components/Common/WallpaperBackground';
import WeatherImage from '../components/Common/WeatherImage';
import { H1, H6, WhiteText } from '../components/Text';
// import styles from './styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: moment().format('ddd, DD MMM YYYY'),
      mounted: false,
    };
  }

  componentDidMount() {
    this.setState({ mounted: true, date: moment().format('ddd, DD MMM YYYY') });
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
    this.setState({ date: moment().format('ddd, DD MMM YYYY') });
  }

  render() {
    // const Gentona_Bold = {
    //   fontFamily: 'gentona-bold',
    // };
    // const titleStyle = [styles.headerText, Gentona_Bold];
    // const { navigation } = this.props;
    const { date } = this.state;

    return (
      <WallpaperBackground>
        <View style={{
            flex: 1,
            justifyContent:
            'space-between',
            alignItems: 'flex-start',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            paddingLeft: 25,
            paddingTop: 25,
            flexDirection: 'row',
          }}
        >
        <View>
          <H1><WhiteText>35°</WhiteText></H1>
          <WhiteText style={{ fontSize: 18 }}>{date}</WhiteText>
          <H6><WhiteText>DRYING</WhiteText></H6>
        </View>
        <View>
          <WeatherImage />
        </View>
        </View>
        {/*
          <RkButton style={{ width: '90%' }} onPress={() => navigation.navigate('RemoteControl')}>
            Remote Control
          </RkButton>
        */}
      </WallpaperBackground>
    );
  }
}

export default Home;