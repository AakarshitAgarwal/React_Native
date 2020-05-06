/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useEffect } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
// import { createDrawerNavigator } from '@react-navigation/drawer';

// import { DrawerContent } from './screens/DrawerContent';

// import MainTabScreen from './screens/MainTabScreen';
// import SupportScreen from './screens/SupportScreen';
// import SettingsScreen from './screens/SettingsScreen';
// import BookmarkScreen from './screens/BookmarkScreen';

import { AuthContext } from './components/context';
import RootStackScreen from './screens/RootStackScreen';

//const Drawer = createDrawerNavigator();


const App = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [userToken, setUserToken] = React.useState(null); 
 
  //useMemo is used to speed up the execution,in which we define the functions for the screen for the execution
  const authContext = React.useMemo(() => ({
    signIn: () => {
       setUserToken('fgkj');
       setIsLoading(false);
    },
    signIn: () => {
      setUserToken(null);
      setIsLoading(false);
   },
   signIn: () => {
    setUserToken('fgkj');
    setIsLoading(false);
 },
}));
  //import useEffect
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      // let userToken;
      // userToken = null;
      // try {
      //   userToken = await AsyncStorage.getItem('userToken');
      // } catch(e) {
      //   console.log(e);
      // }
      // // console.log('user token: ', userToken);
      // dispatch({ type: 'RETRIEVE_TOKEN', token: userToken });
    }, 1000); //it's is actually loader screen 1000ms, in btw we check wheater the user has login or not
  }, []);

  if( isLoading ) {
    return(
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large"/>   
      </View> //ActivityIndicator is used for loading ,plus js import view
      
    );
  }
  return (
    <AuthContext.Provider value={authContext}> 
    <NavigationContainer>
      <RootStackScreen/>
      {/* <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
        <Drawer.Screen name="HomeDrawer" component={MainTabScreen} />
        <Drawer.Screen name="SupportScreen" component={SupportScreen} />
        <Drawer.Screen name="SettingsScreen" component={SettingsScreen} />
        <Drawer.Screen name="BookmarkScreen" component={BookmarkScreen} />
      </Drawer.Navigator> */}
    </NavigationContainer>
    </AuthContext.Provider>
  );
}

export default App;