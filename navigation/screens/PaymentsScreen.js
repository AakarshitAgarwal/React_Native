import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const PaymentsScreen = () => {
    return (
      <View style={styles.container}>
        <Text>Payments Screen under progress</Text>
        <Button
          title="Click Here"
          onPress={() => alert('Button Clicked!')}
        />
      </View>
    );
};

export default PaymentsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});