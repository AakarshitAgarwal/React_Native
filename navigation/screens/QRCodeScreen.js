import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const QRCodeScreen = () => {
    return (
      <View style={styles.container}>
        <Text>QRCode Screen under progress</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default QRCodeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});