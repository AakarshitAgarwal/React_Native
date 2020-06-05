//JUST A TEMPORARY SCREEN FOR PAYMENT SUCCESS!!

import React from 'react';
import { View, Text, Button, StyleSheet ,ImageBackground} from 'react-native';

const paymentsuccess = () => {
    return (
      // <View style={styles.MainContainer}>
        
      // </View>
      <ImageBackground
        source={require('../src/B1NEW.png')}
        style={styles.container}>
      
      <View style={styles.overlaycontainer}>

      </View>

      </ImageBackground>
    );
};

export default paymentsuccess;

const styles = StyleSheet.create({

  MainContainer: {
  flex: 1,
  // Set content's vertical alignment.
  justifyContent: 'center',
  // Set content's horizontal alignment.
  alignItems: 'center', 
  // Set hex color code here.
  backgroundColor: '#FFEB3B',
  },
 
  container: {
    flex: 1, 
    width:'100%',
    height:'100%',
  },
  overlaycontainer:{
    flex:1,
    backgroundColor:'rgba(255, 72, 88,0.1)'

  },
});