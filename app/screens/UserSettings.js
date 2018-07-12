import React, { Component } from 'react';
import { FlatList } from 'react-native';

class UserSettings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newUsername: '',
      newPassword: '',
      newEmail: '',
      newAddress: '',
      newPhone: '',
      newSSN: '',
    };
  }
  render() {
    return (
      <FlatList
      />
    );
  }
};

export default UserSettings;