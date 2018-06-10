import React, { PureComponent } from 'react';
import {StyleSheet, Text} from 'react-native';
import {RkButton} from 'react-native-ui-kitten';
import styles from './styles';

class LinkButton extends PureComponent {
  render() {
    const {children, fullWidth, rounded, marginTop, width} = this.props;
    const btnStyle = [styles.buttonLink];
    const txtStyle = [styles.txtLink];
    fullWidth && (btnStyle.push(styles.btnFullWidth), txtStyle.push(styles.txtFullWidth));
    rounded && (btnStyle.push(styles.btnRounded));
    marginTop && btnStyle.push({marginTop});
    width && btnStyle.push({width});

    return (
      <RkButton style={btnStyle} {...this.props}>
        <Text style={txtStyle}>
          {children}
        </Text>
      </RkButton>
    );
  }
}

export default LinkButton;