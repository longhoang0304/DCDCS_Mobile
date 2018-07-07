import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { Button } from 'react-native-elements';
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
          <Button onPress={() => navigation.goBack()}>PULL IN</Button>
          <Text>{'\n'}</Text>
          <Button onPress={() => navigation.goBack()}>SET UP DRYER</Button>
          {/* <Text>DRY</Text> */}
        </View>
      </WallpaperBackground>
    );
  }
}

export default RemoteControl;