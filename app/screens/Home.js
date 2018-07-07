import React, { Component } from 'react';
import { Text, View } from 'react-native';
import { RkButton } from 'react-native-ui-kitten';
import { Ionicons } from '@expo/vector-icons'
import WallpaperBackground from '../components/WallpaperBackground';
// import styles from './styles';

class Home extends Component {
  render() {
    // const Gentona_Bold = {
    //   fontFamily: 'gentona-bold',
    // };
    // const titleStyle = [styles.headerText, Gentona_Bold];
    const { navigation } = this.props;

    return (
      <WallpaperBackground>
        <View style={{ flexGrow: 1 }}>
          <View style={{ flex: 1, flexDirection: 'row' }}>
            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
              <Text style={{ color: '#f45042', fontSize: 30, fontWeight: 'bold' }}>Temperature</Text>
              <Text style={{ color: '#333', fontSize: 72 }}>35 <Ionicons name='temperature-celsius' /></Text>
            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end', alignItems: 'center' }}>
              <Text style={{ color: '#41f49b', fontSize: 30, fontWeight: 'bold' }}>Huminity</Text>
              <Text style={{ color: '#333', fontSize: 72 }}>55%</Text>
            </View>
          </View>
          <View style={{ flex: 1, justifyContent: 'flex-start', alignItems: 'center' }}>
            <Text style={{ color: '#32c5ff', fontSize: 30, fontWeight: 'bold' }}>Status</Text>
            <Text style={{ color: '#333', fontSize: 72 }}>OUTSIDE</Text>
            <RkButton style={{ width: '90%' }} onPress={() => navigation.navigate('RemoteControl')}>Remote Control</RkButton>
          </View>
        </View>
      </WallpaperBackground>
    );
  }
}

export default Home;