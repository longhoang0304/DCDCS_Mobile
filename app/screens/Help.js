import React, {Component} from 'react';
import {Text, View, ScrollView, ImageBackground} from 'react-native';
import {RkButton, RkText} from 'react-native-ui-kitten';
import styles from './styles';

class Help extends Component {
  state = {
    isFontLoaded: false
  }

  render() {
    const {isFontLoaded} = this.state;
    const Gentona_Bold = {
      fontFamily: 'gentona-bold'
    };
    const titleStyle = [styles.headerText, Gentona_Bold];

    return (
      <ScrollView contentContainerStyle={styles.scrollViewBox}>
        <ImageBackground style={styles.helpImg} source={require("../assets/images/helpdesk.jpg")}>
          <View style={[styles.helpHeader, styles.flexBox]}>
              <RkText rkType='large' style={titleStyle}>
                  INFORMATION
              </RkText>
            
          </View>
        </ImageBackground>
        <View>
          <RkText>
              SSix started far placing saw respect females old. Civilly why how end viewing attempt related enquire visitor. Man particular insensible celebrated conviction stimulated principles day. Sure fail or in said west. Right my front it wound cause fully am sorry if. She jointure goodness interest debating did outweigh. Is time from them full my gone in went. Of no introduced am literature excellence mr stimulated contrasted increasing. Age sold some full like rich new. Amounted repeated as believed in confined juvenile. 
Oh he decisively impression attachment friendship so if everything. Whose her enjoy chief new young. Felicity if ye required likewise so doubtful. On so attention necessary at by provision otherwise existence direction. Unpleasing up announcing unpleasant themselves oh do on. Way advantage age led listening belonging supposing. 
            </RkText>
        </View>
      </ScrollView>
    );
  }
}

export default Help;