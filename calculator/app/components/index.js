import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Header from './Header'

export default class MainComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
       <Header/>
      </View>
    );
  }
}
