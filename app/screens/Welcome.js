import React, {Component} from 'react';
import {Text, View, ImageBackground} from 'react-native';
import {RkButton, RkText} from 'react-native-ui-kitten';
import {InfoButton, PrimaryButton} from '../components/Button';
import {Font} from 'expo';
import styles from './styles';

class Welcome extends Component {
  state = {
    isFontLoaded: false
  }

  async componentWillMount() {
    await Font.loadAsync({
      'gentona-bold': require('../assets/fonts/Gentona_Bold.otf'),
    });
    this.setState({isFontLoaded: true});
  }

  render() {
    const {isFontLoaded} = this.state;
    const Gentona_Bold = {
      fontFamily: 'gentona-bold'
    };
    const titleStyle = [styles.appTitle];
    isFontLoaded && titleStyle.push(Gentona_Bold);
    const {navigation} = this.props;

    return (
      <ImageBackground style={styles.fullscreen} source={require("../assets/images/welcome.jpg")}>
        <View style={[ styles.fullscreen, styles.flexBox]}>
          <View style={styles.appTitleContainer}>
            <RkText style={titleStyle}>
              CAPSTONE{'\n'}PROJECT
            </RkText>
          </View>
          <View style={styles.buttonGroup}>
            <PrimaryButton fullWidth rounded onPress={() => navigation.navigate('LoginScreen')}>
              LOGIN
            </PrimaryButton>
            <InfoButton fullWidth rounded marginTop={15} onPress={() => navigation.navigate('Help')}>
              INFORMATION
            </InfoButton>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

export default Welcome;