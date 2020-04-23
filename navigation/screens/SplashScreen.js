import React from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    Dimensions,
    StyleSheet,
    Image,
    Button
} from 'react-native';

import * as Animatable from 'react-native-animatable';    //from npm install react-native-animatable --save
import LinearGradient from 'react-native-linear-gradient';     //from npm install react-native-linear-gradient --save and npm i react-native-linear-gradient
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';  //from npm i react-native-vector-icons

const SplashScreen =({navigation})=>{
    return(
<View style={styles.container}>
        <View style={styles.header}>
          
        </View>
        <Animatable.View 
            style={styles.footer}
            animation="fadeInUpBig"
        >  
            <Text style={styles.title}>Stay connected with everyone!</Text>
            <Text style={styles.text}>Sign in with account</Text>
            <View style={styles.button}  //this view is created so that button moves right in bottom?             
                 > 
         
            <TouchableOpacity onPress={()=>navigation.navigate('SignInScreen')}>
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={styles.textSign}>Get Started</Text>
                    <MaterialIcons 
                        name="navigate-next"
                        color="#fff"
                        size={20}
                    />

                </LinearGradient>
            </TouchableOpacity>
            </View>       
            
            </Animatable.View>
     
      </View>
    );
};

export default SplashScreen;

const {height} = Dimensions.get("screen");
const height_logo = height * 0.28;   //logo heigth will be 28% of device height

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header: {
      flex: 2,     //getting 2/3 of the screen
      justifyContent: 'center',
      alignItems: 'center'
  },
  footer: {
      flex: 1,     //it is getting 1/3 of the screen
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,   //for curves
      paddingVertical: 50,
      paddingHorizontal: 30
  },
  logo: {
      width: height_logo,
      height: height_logo
  },
  title: {
      color: '#05375a',
      fontSize: 30,
      fontWeight: 'bold'
  },
  text: {
      color: 'grey',
      marginTop:5
  },
  button: {
      alignItems: 'flex-end',
      marginTop: 30
  },
  signIn: {
      width: 150,
      height: 40,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 50,
      flexDirection: 'row'
  },
  textSign: {
      color: 'white',
      fontWeight: 'bold'
  }
});