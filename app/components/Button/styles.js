import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  txtFullWidth: {
    width: '100%',
    color: '#fff',
    textAlign: 'center',
    fontSize: 16
  },
  txtInfo: {
    color: '#fff',
  },
  txtLink: {
    color: '#fff',
    textDecorationLine: 'underline'
  },
  btnFullWidth: {
    width: '100%',
  },
  btnRounded: {
    borderRadius: 100,
  },
  buttonInfo: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderWidth: 2,
    borderColor: '#fff'
  },
  buttonPrimary: {
    backgroundColor: 'rgba(30, 161, 255, 0.6)'
  },
  buttonLink: {
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderWidth: 0,
    height: '125%',
    alignSelf: 'flex-end'
  }
});
