import React, { PureComponent } from 'react';
import {StyleSheet, Text} from 'react-native';
import {RkButton} from 'react-native-ui-kitten';
import styles from './styles';

class InfoButton extends PureComponent {
  render() {
    const {children, fullWidth} = this.props;
    const btnStyle = [styles.buttonInfo];
    const txtStyle = [styles.txtInfo];
    fullWidth && (btnStyle.push(styles.btnFullWidth), txtStyle.push(styles.txtFullWidth));
    return (
      <RkButton style={btnStyle} {...this.props}>
        <Text style={txtStyle}>
          {children}
        </Text>
      </RkButton>
    );
  }
}

export default InfoButton;