import React from 'react';

import {
    View,
    Text,
    Button,
    TouchableOpacity,
    Dimensions,
    TextInput,
    Platform,
    StyleSheet,
    StatusBar,
    Alert
} from 'react-native';
import * as Animatable from 'react-native-animatable';    //from npm install react-native-animatable --save
import LinearGradient from 'react-native-linear-gradient';     //from npm install react-native-linear-gradient --save and npm i react-native-linear-gradient
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';

import {AuthContext} from '../components/context';

import Users from '../model/users';
import axios from 'axios';

const SignInScreen = ({navigation}) => {

    //states of the screen
    const [data, setData] = React.useState({
        username: '',
        password: '',
        check_textInputChange: false,
        secureTextEntry: true,
        isValidUser: true,
        isValidPassword: true,
    });


    const {signIn} = React.useContext(AuthContext); //accessing signin function fom app.js

//for Username

    const textInputChange = (val) => {
        if (val.trim().length >= 8) {  //if field is not empty then we will update our state
            setData({   //with this val.trim().length >= 4 user will expericence validtion on dynamic!

                //added destructuring operator to get existing state
                ...data,   //this will access the data array created above

                username: val,
                check_textInputChange: true,
                isValidUser: true
            });
        } else if (val.trim().length === 0) {
            setData({
                ...data,
                isValidUser: true,
            })
        } else {
            setData({
                ...data,
                username: val,
                check_textInputChange: false,   //false*
                isValidUser: false
            });
        }
    }
//for password
    const handlePasswordChange = (val) => {
        if (val.trim().length >= 8) {
            setData({
                ...data,
                password: val,
                isValidPassword: true
            });
        } else if (val.trim().length === 0) {
            setData({
                ...data,
                isValidPassword: true,
            })
        } else {
            setData({
                ...data,
                password: val,
                isValidPassword: false
            });
        }
    }

//for toggling the icon
    const updateSecureTextEntry = () => {
        setData({
            ...data,
            secureTextEntry: !data.secureTextEntry  //if it is true than it will be false and vice-versa
        });
    }

//valid user function
//     const handleValidUser = (val) => {
//         if (val.trim().length >= 4) {//if length is greater than 4 than we will update our state
//             setData({  //trim??
//                 ...data,  //fetch previous state
//                 isValidUser: true
//             });
//         } else {
//             setData({
//                 ...data,
//                 isValidUser: false
//             });
//         }
//     }

    //loginHandle handled in App.js file
    const loginHandle = () => {
        if (data.username.length === 0 || data.password.length === 0) {//if nothing is inserted and signIn
            Alert.alert('Wrong Input!', 'Username or password field cannot be empty.', [
                {text: 'Okay'}
            ]);
            return;
        }
        axios.post('http://192.168.29.77:8000/login/', {
            "password": data.password,
            "username": data.username,
        }).then((response) => {
            let authToken = response.data.auth_token;
            let foundUser = {
                userToken: authToken,
            }
            signIn(foundUser)       //because of this signIN happens and it navigate to other screens
            setData({
                ...data,
                isValidUser: true
            })
        }).catch(
            (e) => {
                Alert.alert('Invalid User!', 'Username or password is incorrect.', [
                    {text: 'Okay'}
                ])
                setData({
                    ...data,
                    isValidUser: false,
                })
            }
        );
    }

    return (
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
                <Text style={styles.text_footer}>Username</Text>
                <View style={styles.action}>
                    <FontAwesome   //icon on the Username
                        name="user-o"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Username"
                        style={styles.textInput}
                        autoCapitalize="none"
                        onChangeText={(val) => textInputChange(val)}
                        // onEndEditing={(e) => handleValidUser(e.nativeEvent.text)}  //this is for validation ,nativeEvent-->for getting actual value from function
                    />

                    {data.check_textInputChange ?
                        <Animatable.View
                            animation="bounceIn"
                        >
                            <Feather
                                name="check-circle"
                                color="green"
                                size={20}
                            />
                        </Animatable.View>
                        : null}
                </View>
                {data.isValidUser ? null :
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text>Username must be 8 characters long.</Text>
                    </Animatable.View>
                }


                <Text style={[styles.text_footer, {
                    marginTop: 35
                }]}>Password</Text>
                <View style={styles.action}>
                    <Feather   //icon on the Username
                        name="lock"
                        color="#05375a"
                        size={20}
                    />
                    <TextInput
                        placeholder="Your Password"
                        secureTextEntry={data.secureTextEntry}   //if it is true than it will be true otherwise it will be false
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
                {data.isValidPassword ? null :
                    <Animatable.View animation="fadeInLeft" duration={500}>
                        <Text style={styles.errorMsg}>Password must be 8 characters long.</Text>
                    </Animatable.View>
                }


                <TouchableOpacity>
                    <Text style={{color: '#009387', marginTop: 15}}>Forgot password?</Text>
                </TouchableOpacity>
                <View style={styles.button}>
                    <TouchableOpacity
                        style={styles.signIn}
                        //onpress pr signin pr hi rahunga
                        //onPress={()=>{signIn()}}
                        onPress={() => {
                            loginHandle()
                        }}>
                        <LinearGradient
                            colors={['#08d4c4', '#01ab9d']}
                            style={styles.signIn}
                        >
                            <Text style={[styles.textSign, {
                                color: '#fff'
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