import React from 'react';

import { 
    View, 
    Text, 
    Button, 
    TouchableOpacity, 
    Dimensions,
    TextInput,
    Platform,
    StyleSheet ,
    StatusBar
} from 'react-native';
import * as Animatable from 'react-native-animatable';    //from npm install react-native-animatable --save
import LinearGradient from 'react-native-linear-gradient';     //from npm install react-native-linear-gradient --save and npm i react-native-linear-gradient
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import { AuthContext } from '../components/context';


const SignInScreen =({navigation})=>{

  //for password eye and security
  const [data, setData] = React.useState({
    email: '',
    password: '',
    check_textInputChange: false,
    secureTextEntry: true
});

const { signIn } = React.useContext(AuthContext);

//for email
const textInputChange = (val) => {
  if( val.length !== 0 ) {  //if field is not empty then we will update our state
      setData({

        //added destructuring operator to get existing state
          ...data,   //this will access the data array created above
         
          email: val,
          check_textInputChange: true
      });
  } 
  else {
      setData({
          ...data,
          email: val,
          check_textInputChange: false    //false*
      });
    }
}
//for password
const handlePasswordChange = (val) => {
  setData({
      ...data,
      password: val
  });
}
//for toggling the icon
const updateSecureTextEntry = () => {
  setData({
      ...data,
      secureTextEntry: !data.secureTextEntry  //if it is true than it will be false and vice-versa
  });
}


  return(
    <View style={styles.container}>
      
          <StatusBar backgroundColor='#009387' barStyle="light-content"   //this will change status acc to phones
          />  
        <View style={styles.header}>
            <Text style={styles.text_header}>Welcome!</Text>
        </View>
        <Animatable.View 
            animation="fadeInUpBig"
            style={styles.footer}
        >
        <Text style={styles.text_footer}>Email</Text>
        <View style={styles.action}>
        <FontAwesome   //icon on the email
                    name="user-o"
                    color="#05375a"
                    size={20}
                />
                <TextInput
                  placeholder="Your Email"
                  style={styles.textInput}
                  autoCapitalize="none"

                />

                <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                {/* {data.check_textInputChange ? 
                <Animatable.View
                    animation="bounceIn"
                >
                    <Feather 
                        name="check-circle"
                        color="green"
                        size={20}
                    />
                </Animatable.View>
                : null} */}
           
        </View>
        <Text style={[styles.text_footer, {
                marginTop: 35
            }]}>Password</Text>
        <View style={styles.action}>
        <Feather   //icon on the email
                    name="lock"
                    color="#05375a"
                    size={20}
                />
                <TextInput
                  placeholder="Your Password"
                  secureTextEntry={data.secureTextEntry ? true : false}   //if it is true than it will be true otherwise it will be false
                  style={styles.textInput}
                  autoCapitalize="none"
                  onChangeText={(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity   //for eye ion it will be better
                    onPress={updateSecureTextEntry}
                >
                  
                    {data.secureTextEntry ? 
                    //this feature will make eye off-on
                    <Feather 
                        name="eye-off"
                        color="grey"
                        size={20}
                    />
                    :
                    <Feather 
                        name="eye"
                        color="grey"
                        size={20}
                    />
                    }
                </TouchableOpacity>
        </View>
      
        <TouchableOpacity    >  
                <Text style={{color: '#009387', marginTop:15}}>Forgot password?</Text>
            </TouchableOpacity>
            <View style={styles.button}>
            <TouchableOpacity
                style={styles.signIn}
                //onpress pr signin pr hi rahunga
                onPress={() => {signIn()}}
            >

                
                <LinearGradient
                    colors={['#08d4c4', '#01ab9d']}
                    style={styles.signIn}
                >
                    <Text style={[styles.textSign, {
                        color:'#fff'
                    }]}>Sign In</Text>
                </LinearGradient>
                </TouchableOpacity>
                
                <TouchableOpacity
                    onPress={() => navigation.navigate('SignUpScreen')}
                    style={[styles.signIn, {
                        borderColor: '#009387',
                        borderWidth: 1,
                        marginTop: 15
                    }]}
                >
                    <Text style={[styles.textSign, {
                        color: '#009387'
                    }]}>Sign Up</Text>
                </TouchableOpacity>
            </View>

      </Animatable.View>
   
    </View>

  );
};
export default SignInScreen;

//styles
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: '#009387'
  },
  header: {
      flex: 1,   // 1/4 screen is for header
      justifyContent: 'flex-end',
      paddingHorizontal: 20,
      paddingBottom: 50
  },
  footer: {
      flex: 3,    // 3/4 screen is for footer
      backgroundColor: '#fff',
      borderTopLeftRadius: 30,
      borderTopRightRadius: 30,
      paddingHorizontal: 20,
      paddingVertical: 30
  },
  text_header: {
      color: '#fff',
      fontWeight: 'bold',
      fontSize: 30
  },
  text_footer: {
      color: '#05375a',
      fontSize: 18
  },
  action: {
      flexDirection: 'row',
      marginTop: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f2f2f2',
      paddingBottom: 5
  },
  textInput: {
      flex: 1,
      marginTop: Platform.OS === 'ios' ? 0 : -12,
      paddingLeft: 10,
      color: '#05375a',
  },
  button: {
      alignItems: 'center',
      marginTop: 50
  },
  signIn: {
      width: '100%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 10
  },
  textSign: {
      fontSize: 18,
      fontWeight: 'bold'
  }
});