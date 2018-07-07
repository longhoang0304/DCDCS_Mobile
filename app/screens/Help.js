import React from 'react';
import { View, ScrollView, ImageBackground } from 'react-native';
import { RkText } from 'react-native-ui-kitten';
import styles from './styles';

const Help = () => {
  const Gentona_Bold = {
    fontFamily: 'gentona-bold',
  };
  const titleStyle = [styles.headerText, Gentona_Bold];

  return (
    <ScrollView contentContainerStyle={styles.scrollViewBox}>
      <ImageBackground style={styles.helpImg} source={require('../assets/images/helpdesk.jpg')}>
        <View style={[styles.helpHeader, styles.flexBox]}>
            <RkText rkType='large' style={titleStyle}>
                INFORMATION
            </RkText>
        </View>
      </ImageBackground>
      <View>
        <RkText>
            Text
        </RkText>
      </View>
    </ScrollView>
  );
};

export default Help;