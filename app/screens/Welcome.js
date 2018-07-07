import React, { Component } from 'react';
import { TouchableOpacity } from 'react-native';
import { Font } from 'expo';
import { WhiteText } from '../components/Text';
import WallpaperBackground from '../components/Common/WallpaperBackground';
import styles from './styles';

class Welcome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFontLoaded: false,
    };
  }

  async componentDidMount() {
    await Font.loadAsync({
      'gentona-bold': require('../assets/fonts/Gentona_Bold.otf'),
    });
    this.setState({ isFontLoaded: true });
  }

  render() {
    // const { isFontLoaded } = this.state;
    // const Gentona_Bold = {
    //   fontFamily: 'gentona-bold',
    // };
    const titleStyle = [styles.appTitle];
    const { navigation } = this.props;

    // if (isFontLoaded) {
    //   titleStyle.push(Gentona_Bold);
    // }

    return (
      <WallpaperBackground>
        <TouchableOpacity
          style={[styles.fullscreen, styles.flexBox]}
          onPress={() => navigation.navigate('LoginScreen')}
        >
          <WhiteText style={titleStyle}>
            DCDCS App
          </WhiteText>
          <WhiteText>
            Tap to continue
          </WhiteText>
        </TouchableOpacity>
      </WallpaperBackground>
    );
  }
}

export default Welcome;