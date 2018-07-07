import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { RkButton } from 'react-native-ui-kitten';
import WallpaperBackground from '../components/Common/WallpaperBackground';
// import styles from './styles';

class RemoteControl extends Component {
  render() {
    // const Gentona_Bold = {
    //   fontFamily: 'gentona-bold'
    // };
    // const titleStyle = [styles.headerText, Gentona_Bold];
    const { navigation } = this.props;

    return (
      <WallpaperBackground>
        <View style={{
            flex: 1, flexGrow: 1, justifyContent: 'center', alignItems: 'center',
          }}
        >
          <RkButton onPress={() => navigation.goBack()}>PULL IN</RkButton>
          <Text>{'\n'}</Text>
          <RkButton onPress={() => navigation.goBack()}>SET UP DRYER</RkButton>
          {/* <Text>DRY</Text> */}
        </View>
      </WallpaperBackground>
    );
  }
}

export default RemoteControl;