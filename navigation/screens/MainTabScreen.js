import React from 'react';

import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';  //install it's dependencies
import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/Octicons';
//import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import DetailsScreen from './DetailsScreen';
import ExploreScreen from './ExploreScreen';
import ProfileScreen from './ProfileScreen';

const HomeStack = createStackNavigator();
const DetailsStack = createStackNavigator();

const Tab = createMaterialBottomTabNavigator();   //for material bottom screen

const MainTabScreen = () => (
    <Tab.Navigator
      initialRouteName="Home"   //intial screen details
      activeColor="#fff"
    >
      <Tab.Screen
        name="Home"
        component={HomeStackScreen}
        options={{
          tabBarLabel: 'Home',
          tabBarColor: '#009387',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-home" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Notifications"
        component={DetailsStackScreen}
        options={{
          tabBarLabel: 'Updates',
          tabBarColor: '#1f65ff',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-notifications" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarLabel: 'Profile',
          tabBarColor: '#694fad',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-person" color={color} size={26} />
          ),
        }}
      />
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarLabel: 'Explore',
          tabBarColor: '#d02860',
          tabBarIcon: ({ color }) => (
            <Icon name="ios-aperture" color={color} size={26} />
          ),
        }}
      />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen =({navigation}) =>(
  <HomeStack.Navigator screenOptions={{
    headerStyle:{
      backgroundColor:'#009387',
    },
    headerTintColor:'#fff',
    headerTitleStyle:{
      fontWeight:'bold'
    }
  }}>
    <HomeStack.Screen name="Home" component={HomeScreen} options={{
    
      headerLeft:()=>(
        <Icon.Button name='three-bars' size={25}
        backgroundColor="#009387" onPress={() => navigation.openDrawer()}/> )
    }}/>
  </HomeStack.Navigator>
   ); 
   
  const DetailsStackScreen =({navigation}) =>(
  <DetailsStack.Navigator screenOptions={{
   headerStyle:{
   backgroundColor:'#1f65ff',
  },
   headerTintColor:'#fff',
   headerTitleStyle:{
   fontWeight:'bold'
  }
  }}>
  <DetailsStack.Screen name="Details" component={DetailsScreen} options={{

  headerLeft:()=>(
   <Icon.Button name='three-bars' size={25}
    backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}/> )  //openDrawer() to open the drawer
  }}/>
   </DetailsStack.Navigator>
  );
