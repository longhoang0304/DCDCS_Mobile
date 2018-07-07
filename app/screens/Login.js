import React, { PureComponent } from 'react';
import { View } from 'react-native';
import { FormLabel, FormInput, FormValidationMessage, Button, Text } from 'react-native-elements';
import styles from './styles';
import WallpaperBackground from '../components/Common/WallpaperBackground';
import { WhiteText, H4 } from '../components/Text';


class Login extends PureComponent {
  render() {
    // const Gentona_Bold = {
    //   fontFamily: 'gentona-bold',
    // };
    // titleStyle.push(Gentona_Bold);
    const { navigation } = this.props;

    return (
      <WallpaperBackground>
        <View style={[styles.fullscreen, styles.flexBox]}>
          <View style={{
            flex: 1,
            justifyContent: 'flex-end',
          }}>
            <Text style={{
              textAlign: 'center',
              fontWeight: 'bold',
            }}>
            <H4>
              <WhiteText>LOG IN</WhiteText>
            </H4>
            </Text>
          </View>
          <View style={{
            width: '90%',
          }}>
            <FormLabel>
              <WhiteText>Username</WhiteText>
            </FormLabel>
            <FormInput
              inputStyle={{
                color: '#fff',
                paddingLeft: 5,
              }}
              placeholder='Please enter your username'
              placeholderTextColor='#ddd'
              onChangeText={() => console.log()}
              underlineColorAndroid='#fff'
            />
            <FormLabel>
              <WhiteText>Password</WhiteText>
            </FormLabel>
            <FormInput
              inputStyle={{
                color: '#fff',
                paddingLeft: 5,
              }}
              secureTextEntry={true}
              placeholder='Please enter your password'
              placeholderTextColor='#ddd'
              onChangeText={() => console.log()}
              underlineColorAndroid='#fff'
            />
            <FormValidationMessage>Wrong password</FormValidationMessage>
          </View>
          <View
            style={{
              flex: 1,
              justifyContent: 'space-between',
              alignItems: 'stretch',
              marginTop: 15,
              width: '90%',
            }}
          >
            <Button
              rounded
              backgroundColor='rgba(255, 255, 255, 0.2)'
              onPress={() => navigation.navigate('HomeStack')}
              title='LOGIN'
            />
            <Button
              textStyle={{
                textDecorationLine: 'underline',
              }}
              rounded
              backgroundColor='rgba(0, 0, 0, 0)'
              onPress={() => navigation.navigate('Help')}
              title='Need a help?'
            />
          </View>
        </View>
      </WallpaperBackground>
    );
  }
}

export default Login;