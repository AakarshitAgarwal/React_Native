import React from 'react';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';  //install it's dependencies
import {createStackNavigator} from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/FontAwesome5';
//import Icon from 'react-native-vector-icons/Ionicons';

import HomeScreen from './HomeScreen';
import QRCodeScreen from './QRCodeScreen';
import PaymentsScreen from './PaymentsScreen';
import ProfileScreen from './ProfileScreen';
import NGOScreen from './NGOScreen';
import Payment from "./Payment";
//import paymentsuccess from './paymentsuccess';
import  paymentbill  from "./paymentbill";

const HomeStack = createStackNavigator();
const QRCodeStack = createStackNavigator();
const PaymentStack = createStackNavigator();



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
                tabBarIcon: ({color}) => (
                    <Icon name="home" color={color} size={26}/>
                ),
            }}
        />
        <Tab.Screen
            name="Notifications"
            component={QRCodeStackScreen}
            options={{
                tabBarLabel: 'QR Code',
                tabBarColor: '#1f65ff',
                tabBarIcon: ({color}) => (
                    <Icon name="qrcode" color={color} size={26}/>
                ),
            }}
        />
        <Tab.Screen
            name="AboutNGOS"
            component={NGOScreen}
            options={{
                tabBarLabel: 'NGOS',
                tabBarColor: '#694fad',
                tabBarIcon: ({color}) => (
                    <Icon name="hands-helping" color={color} size={26}/>
                ),
            }}
        />
        <Tab.Screen
            name="Payments"
            component={PaymentStackScreen}
            options={{
                tabBarLabel: 'Payments',
                tabBarColor: '#d02860',
                tabBarIcon: ({color}) => (
                    <Icon name="money-check" color={color} size={26}/>
                ),
            }}
        />
    </Tab.Navigator>
);

export default MainTabScreen;

const HomeStackScreen = ({navigation}) => (
    <HomeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#009387',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <HomeStack.Screen name="Home" component={HomeScreen} options={{
            //make sure u have a separate name for the home screen as it is used for the maintab and drawcontent both,that is why changed to drawercontent name
            headerLeft: () => (
                <Icon.Button name='bars' size={25}
                             backgroundColor="#009387" onPress={() => navigation.openDrawer()}/>)
        }}/>
    </HomeStack.Navigator>
);

const QRCodeStackScreen = ({navigation}) => (
    <QRCodeStack.Navigator screenOptions={{
        headerStyle: {
            backgroundColor: '#1f65ff',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            fontWeight: 'bold'
        }
    }}>
        <QRCodeStack.Screen name="QRCode Screen" component={QRCodeScreen} options={{

            headerLeft: () => (
                <Icon.Button name='bars' size={25}
                             backgroundColor="#1f65ff" onPress={() => navigation.openDrawer()}/>)  //openDrawer() to open the drawer
        }}/>
        <QRCodeStack.Screen name={'Payment'} component={Payment} />
    </QRCodeStack.Navigator>
);

const PaymentStackScreen = ({navigation}) => (
    <PaymentStack.Navigator headerMode='none'>
        <PaymentStack.Screen name="PaymentsHistory" component={PaymentsScreen}/>
        <PaymentStack.Screen name={'paymentbill'} component={paymentbill} />
    </PaymentStack.Navigator>
);
