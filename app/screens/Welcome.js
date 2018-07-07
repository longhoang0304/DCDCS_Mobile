import React, { Component } from 'react';
import { View } from 'react-native';
import { RkText } from 'react-native-ui-kitten';
import { Font } from 'expo';
import { InfoButton, PrimaryButton } from '../components/Button';
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
        <View style={[styles.fullscreen, styles.flexBox]}>
          <View style={styles.appTitleContainer}>
            <RkText style={titleStyle}>
              DCDCS App
            </RkText>
          </View>
          <View style={styles.buttonGroup}>
            <PrimaryButton fullWidth rounded onPress={() => navigation.navigate('LoginScreen')}>
              {'login'.toUpperCase()}
            </PrimaryButton>
            <InfoButton fullWidth rounded marginTop={15} onPress={() => navigation.navigate('Help')}>
              {'INFORMATION'.toUpperCase()}
            </InfoButton>
          </View>
        </View>
      </WallpaperBackground>
    );
  }
}

export default Welcome;