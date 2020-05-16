import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const NGOScreen = () => {
    return (
      <View style={styles.container}>
        <Text>NGOS Screen under progress</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default NGOScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});