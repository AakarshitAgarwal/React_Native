import React, { Component } from 'react';
import { View, 
    Text ,
    Header} from 'react-native';

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <View>
        <Text> Hey there </Text>
      </View>
    );
  }
}
