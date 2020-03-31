import React, { Component } from 'react';
import {
  View, 
  Text,
  Button
  } from 'react-native';
  import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
    render() {
    return (
      <View>
        <Text>This is App Component </Text>
        <Button onPress={()=>this.props.navigation.navigate('test')} title="Go to Test"></Button>
      </View>
    );
  }                     //props.navigation.navigate('KEEEYYY')
}

class Test extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
    render() {
    return (
      <View>
        <Text>This is Test Component </Text>
         <Button onPress={()=>this.props.navigation.navigate('home')} title="Go to App"></Button>
      </View>
    );
  }
}

export default createStackNavigator({
  home: App,
  test: Test
})
