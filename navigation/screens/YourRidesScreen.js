import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const YourRidesScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Your Rides Screen under progress</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default YourRidesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});
