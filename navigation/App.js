/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import { View,Text,Button, ActivityIndicator } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';
//import { Button } from 'react-native-elements'
//import Icon from 'react-native-vector-icons/Ionicons'; //isse hamburger wala nh a rh h icon
import Icon from 'react-native-vector-icons/Octicons';  //isse hamburger wala nh a rh h icon


//import Icon from 'react-native-vector-icons';  //npm i react-native-vector-icons
//import Icon from 'react-native-ionicons';
import { DrawerContent } from './screens/DrawerContent';
//import { Button } from 'react-native-paper';
import { createStackNavigator } from '@react-navigation/stack';

import { createDrawerNavigator } from '@react-navigation/drawer';

import MainTabScreen from './screens/MainTabScreen';
import SupportScreen from './screens/SupportScreen';
import NGOScreen from './screens/NGOScreen';
import YourRidesScreen from './screens/YourRidesScreen';
import ProfileScreen from './screens/ProfileScreen';

import { AuthContext } from './components/context';

import RootStackScreen from './screens/RootStackScreen';
 
//import { createDrawerNavigator } from '@react-navigation/drawer'; //npm install @react-navigation/drawer
//import { DrawerContent } from './screens/DrawerContent';


const Drawer = createDrawerNavigator();
  
 
//import {Working} from './screens/Working';
/*
 import MainTabScreen from './screens/MainTabScreen';
 import SupportScreen from './screens/SupportScreen';
 import SettingsScreen from './screens/SettingsScreen';
 import BookmarkScreen from './screens/BookmarkScreen';
import { createDrawerNavigator } from '@react-navigation/drawer'; //npm install @react-navigation/drawer
import { AuthContext } from './components/context';
import RootStackScreen from './screens/RootStackScreen';*/

//import { DrawerContent } from './screens/DrawerContent';

 //const App = () => {
  // const [isLoading, setIsLoading] = React.useState(true);
  // const [userToken, setUserToken] = React.useState(null);  //usertoken is used in functions
 
//   const initialLoginState = {
//     isLoading: true,
//     userName: null,
//     userToken: null,
//   };
/*
  const HomeScreen= ({navigation}) => {
    return(
      <View style={{ flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>Home Screen</Text>
        <Button
         title="Go to detail screen"
         onPress={()=>navigation.navigate("Details")}/>

      </View>
          );

  };

  const DetailsScreen= () => {
    return(
      <View style={{ flex:1,alignItems:'center',justifyContent:'center'}}>
        <Text>DetailsScreen</Text>
      </View>
    );

  };*/

  const App= ()=>{

    // const [isLoading, setIsLoading] = React.useState(true);
    // const [userToken, setUserToken] = React.useState(null);  //usertoken is used in functions
    
    
   const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
   };

   //reducer will accept states
  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN':  //if user had already login once
        return {
          ...prevState,
          userToken: action.token,  //to retrive token
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };
  
  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

    //useMemo is used to speed up the execution,in which we define the functions for the screen for the execution
  const authContext = React.useMemo(() => ({
    signIn: (userName,password) => {
      //  setUserToken('fgkj');
      //  setIsLoading(false);
      let userToken;
      userToken=null;
      if( userName=='user' && password =='pass'){
        userToken='dfgdfg';
      }
      // console.log('user token: ', userToken);
      dispatch({type:'LOGIN',id:userName,token:userToken});
    },
    signOut: () => {
    //  setUserToken(null);
    //   setIsLoading(false);
    dispatch({type:'LOGOUT'});
    },
    signUp: () => {
    // setUserToken('fgkj');
    // setIsLoading(false);
   },
  }), []);

  useEffect(() => {
  setTimeout(() => {
   //setIsLoading(false);
   let userToken;
      userToken = 'fgg:';
      
  //  console.log('user token: ', userToken);    
   dispatch({ type: 'REGISTER', token: userToken });
   },1000);
  },[]); 


    if( loginState.isLoading ) {
      return(
        <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
          <ActivityIndicator size="large"/>   
        </View> //ActivityIndicator is used for loading ,plus js import view
        
      );
    }
        


    return(
      <AuthContext.Provider value={authContext}>
      <NavigationContainer>
      { loginState.userToken !==null? (
      
     <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component ={MainTabScreen}/>
        <Drawer.Screen name="SupportScreen" component ={SupportScreen}/>
        <Drawer.Screen name="ProfileScreen" component ={ProfileScreen}/>
        <Drawer.Screen name="YourRidesScreen" component ={YourRidesScreen}/>
      
    </Drawer.Navigator>
  )
  :
    <RootStackScreen/>
  }
      </NavigationContainer>
    </AuthContext.Provider>
  );
}

  //const Drawer = createDrawerNavigator();
/*
  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'RETRIEVE_TOKEN':  //if user had already login once
        return {
          ...prevState,
          userToken: action.token,  //to retrive token
          isLoading: false,
        };
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          userToken: null,
          isLoading: false,
        };
      case 'REGISTER': 
        return {
          ...prevState,
          userName: action.id,
          userToken: action.token,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  //useMemo is used to speed up the execution,in which we define the functions for the screen for the execution
  const authContext = React.useMemo(() => ({
    signIn: (userName,password) => {
      //  setUserToken('fgkj');
      //  setIsLoading(false);
      let userToken;
      userName=null;
      if( userName=='user' && password =='pass'){
         userToken='dfgdfg';
      }
      dispatch({type:'LOGIN',id:userName,token:userToken});
    },
    signIn: () => {
     // setUserToken(null);
      //setIsLoading(false);
   },
   signIn: () => {
    //setUserToken('fgkj');
    //setIsLoading(false);
 },
}));
  //import useEffect
  useEffect(() => {
    setTimeout(() => {
      //setIsLoading(false);
      // let userToken;
      // userToken = null;
      // try {
      //   userToken = await AsyncStorage.getItem('userToken');
      // } catch(e) {
      //   console.log(e);
      // }
      // // console.log('user token: ', userToken);
       dispatch({ type: 'REGISTER', token: 'dfklj' });
    }, 1000); //it's is actually loader screen 1000ms, in btw we check wheater the user has login or not
  }, []); //empty array?

  if( loginState.isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>   
      </View> //ActivityIndicator is used for loading ,plus js import view
      
    );
  }
  */
 /*
  return (

    <NavigationContainer>
      <Drawer.Navigator initialRouteName="Home">
        <Drawer.Screen name="Home" component ={HomeScreen}/>
        <Drawer.Screen name="Details" component ={DetailsScreen}/>
        
      </Drawer.Navigator>
    </NavigationContainer>
  );*/
  //}
//     <AuthContext.Provider value={authContext}> 
//     <NavigationContainer>
//     { loginState.userToken !==null?(

// <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>  
// <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />

//           <Drawer.Screen name="SupportScreen" component={SupportScreen} />
//           <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
//           <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />

// </Drawer.Navigator>

//   )

//     :
//     <RootStackScreen/>
//   }
//       </NavigationContainer>
//     </AuthContext.Provider>
//   );
// }

export default App;