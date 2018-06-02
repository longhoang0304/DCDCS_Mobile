import React, {Component} from 'react';
import {StyleSheet, Text, View, ImageBackground} from 'react-native';
import {RkButton, RkText} from 'react-native-ui-kitten';
// import LinearGradient from 'react-native-linear-gradient';

class Welcome extends Component {
  render() {
    return (
      <ImageBackground style={styles.imgContainer} source={require("../assets/images/welcome.jpg")}>
        <View style={[styles.container, styles.flexBox]}>
            <RkText rkType='large' style={styles.appTitle}>
              DCDCS
            </RkText>
          <View style={styles.buttonGroup}>
            <RkButton style={[styles.btn, styles.buttonLogin]}>
              <Text style={styles.txt}>
                LOG IN
              </Text>
            </RkButton>
            <RkButton style={[styles.buttonHelp, styles.btn]}>
              <Text style={[styles.txt, styles.txtHelp]}>
                HELP
              </Text>
            </RkButton>
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  flexBox: {
    flex: 1,
    alignItems: 'stretch',
    justifyContent: 'center',
    marginLeft: '5%',
    marginRight: '5%'
  },
  imgContainer: {
    width: '100%',
    height:' 100%'
  },
  container: {

  },
  buttonGroup: {
    // flexDirection: 'row'
  },
  btn: {
    width: '100%',
    borderRadius: 50,
  },
  txt: {
    width: '100%',
    color: '#fff',
    textAlign: 'center',
    fontSize: 16
  },
  buttonLogin: {
    backgroundColor: 'rgba(30, 161, 255, 0.6)'
  },
  buttonHelp: {
    marginTop: 15,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderWidth: 2,
    borderColor: '#fff'
  },
  txtHelp: {
    color: '#fff',
  },
  appTitle: {
    width: '100%',
    fontSize: 64,
    marginBottom: 50,
    textAlign: 'center',
    color: 'rgba(255, 255, 255, 1)'
  }
});


export default Welcome;