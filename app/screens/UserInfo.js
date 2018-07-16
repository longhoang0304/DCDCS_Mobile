import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Button, Text, Divider } from 'react-native-elements';
import styles from './styles';
import InfoItem from '../components/Common/InfoItem';
import { H6 } from '../components/Text';
import LoadingDialog from '../components/Common/LoadingDialog';

class UserInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newInfo: {
        username: '',
        password: '',
        email: '',
        phone: '',
        address: '',
        products: [],
      },
    };
  }

  componentDidMount() {
    const { info } = this.props;
    this.setState({ newInfo: { ...info, password: '******' } });
  }

  componentDidUpdate() {
    const { navigation, isLogin } = this.props;
    if (!isLogin) {
      navigation.navigate('Welcome');
    }
  }

  handleTextChange = (key) => (value) => {
    const { newInfo } = this.state;
    const info = { ...newInfo };
    info[key] = value;
    this.setState({ newInfo: info });
  }

  render() {
    const { newInfo } = this.state;
    const { logout, isLoading } = this.props;

    return (
      <ScrollView
        contentContainerStyle={styles.userInfoContainer}
      >
        <LoadingDialog isShow={isLoading} >
          <Text style={{ fontSize: 16 }}>Goodbye!</Text>
        </LoadingDialog>
        <View style={{
          flex: 1,
          justifyContent: 'flex-end',
        }}>
          <Text style={{
            width: '100%',
            textAlign: 'center',
            color: '#333',
          }}>
            <H6>
              PROFILE
            </H6>
          </Text>
        </View>
        <View style={{
          flex: 1,
          flexGrow: 4,
          justifyContent: 'center',
          width: '90%',
        }}>
          <InfoItem
            label='Username:'
            value={newInfo.username}
            onChange={this.handleTextChange('username')}
          />
          <Divider />
          <InfoItem
            label='Password:'
            value={newInfo.password}
            onChange={this.handleTextChange('password')}
            isPassword={true}
          />
          <Divider />
          <InfoItem
            label='Name:'
            value={newInfo.fullName}
            onChange={this.handleTextChange('fullName')}
          />
          <Divider />
          <InfoItem
            label='Address:'
            value={newInfo.address}
            onChange={this.handleTextChange('address')}
            multiLine
          />
          <Divider />
          <InfoItem
            label='Phone:'
            value={newInfo.phone}
            onChange={this.handleTextChange('phone')}
          />
          <Divider />
          <InfoItem
            label='Email:'
            value={newInfo.email}
            onChange={this.handleTextChange('email')}
          />
          <Divider />
        </View>
        <View style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}>
          <View style={{
            flex: 1,
          }}>
          <Button
            rounded
            title='Save Changes'
            buttonStyle={{
              backgroundColor: '#006aff',
            }}
            textStyle={{
              color: '#fff',
            }}
          />
          </View>
          <View style={{
            flex: 1,
          }}>
          <Button
            rounded
            title='Logout'
            buttonStyle={{
              backgroundColor: 'rgba(0, 0, 0, 0)',
              borderColor: '#f44245',
              borderWidth: 1,
            }}
            textStyle={{
              color: '#f44245',
            }}
            onPress={logout}
          />
          </View>
        </View>
      </ScrollView>
    );
  }
}

export default UserInfo;