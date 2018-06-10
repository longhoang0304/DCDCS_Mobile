import React, {Component} from 'react';
import {Text, View, ScrollView, ImageBackground} from 'react-native';
import {RkButton, RkText} from 'react-native-ui-kitten';
import styles from './styles';

class RemoteControl extends Component {
  state = {
    isFontLoaded: false
  }

  render() {
    const {isFontLoaded} = this.state;
    const Gentona_Bold = {
      fontFamily: 'gentona-bold'
    };
    const titleStyle = [styles.headerText, Gentona_Bold];
    const {navigation} = this.props;

    return (
      <View style={{flex: 1, backgroundColor: '#fff', flexGrow: 1, justifyContent: 'center', alignItems: 'center'}}>
        <RkButton onPress={() => navigation.goBack()}>PULL IN</RkButton>
        <Text>{'\n'}</Text>
        <RkButton onPress={() => navigation.goBack()}>SET UP DRYER</RkButton>
        {/* <Text>DRY</Text> */}
      </View>
    );
  }
}

export default RemoteControl;