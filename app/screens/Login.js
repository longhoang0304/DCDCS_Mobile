import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { RkTextInput, RkText, RkTheme } from 'react-native-ui-kitten';
import { LinkButton, PrimaryButton } from '../components/Button';
import styles from './styles';
import WallpaperBackground from '../components/WallpaperBackground';

RkTheme.setType('RkTextInput', 'rounded2', {
  borderRadius: 100,
  borderWidth: 2,
  borderBottomWidth: 2,
  borderColor: '#fff',
  underlineColor: '#fff',
  input: {
    placeholderTextColor: '#fff',
  },
});

class Login extends PureComponent {
  render() {
    const Gentona_Bold = {
      fontFamily: 'gentona-bold',
    };
    const titleStyle = [styles.appTitle];
    titleStyle.push(Gentona_Bold);
    const { navigation } = this.props;

    return (
      <WallpaperBackground>
        <View style={[styles.fullscreen, styles.flexBox]}>
          <View style={styles.appTitleContainer}>
            <RkText style={titleStyle}>
              LOG IN
            </RkText>
          </View>
          <View style={styles.inputGroup}>
            <RkTextInput
              placeholder='Please enter provied username'
              rkType='rounded2'
              style={styles.inputBlock}
              inputStyle={styles.inputEle}
              labelStyle={styles.labelEle}
            />
            <RkTextInput
              placeholder='Please enter your password'
              rkType='rounded2'
              style={styles.inputBlock}
              secureTextEntry={true}
              autoCorrect={false}
              inputStyle={styles.inputEle}
              labelStyle={styles.labelEle}
            />
          </View>
          <View style={styles.buttonGroup}>
            <PrimaryButton fullWidth rounded onPress={() => navigation.navigate('HomeStack')}>
              LOGIN
            </PrimaryButton>
            <LinkButton fullWidth rounded marginTop={15} onPress={() => navigation.navigate('Help')}>
              HOW TO LOGIN?
            </LinkButton>
          </View>
        </View>
      </WallpaperBackground>
    );
  }
}

export default Login;