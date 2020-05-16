import React from 'react';
import { View, StyleSheet } from 'react-native';
//using some react native paper api
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Paragraph,
    Drawer,
    Text,
    TouchableRipple,
    Switch
} from 'react-native-paper';  
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
//import { mdiCharity } from '@mdi/js'

import{ AuthContext } from '../components/context';

export function DrawerContent(props) {

   // const paperTheme = useTheme();

    const { signOut, toggleTheme } = React.useContext(AuthContext);

    return(
        <View style={{flex:1}}>
            <DrawerContentScrollView {...props}>
            <View style={styles.drawerContent}>
                    <View style={styles.userInfoSection}
                    //userInfoSection for user image and maybe name
                    >  
                        <View style={{flexDirection:'row',marginTop: 15}}>
                            <Avatar.Image 
                                source={{
                                    uri: 'https://avatars0.githubusercontent.com/u/46739754?s=400&u=8d855cb76bfe3a0d536a5cfcbccdc3df94318980&v=4'//GitHub profile image url ;-)
                                }}
                                size={50}
                            />
                            
                            <View style={{marginLeft:15, flexDirection:'column'}}
                            //distance between username and userphoto
                            >  
                                <Title style={styles.title}>Aakarshit Agarwal</Title>
                                <Caption style={styles.caption}>@aakarshitagarwal</Caption>
                            </View>
                        </View>
                    </View>
                        
                        
                    <Drawer.Section style={styles.drawerSection}>
                        <DrawerItem   //from internet *reference pradip debnath*
                            icon={({color, size}) => (
                                <Icon 
                                name="home-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Home"
                            onPress={() => {props.navigation.navigate('Home')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Profile"
                            onPress={() => {props.navigation.navigate('ProfileScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="car" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Your Rides"
                            onPress={() => {props.navigation.navigate('YourRidesScreen')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="human-handsdown" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="About NGOS"
                            onPress={() => {props.navigation.navigate('AboutNGOS')}}
                        />
                        <DrawerItem 
                            icon={({color, size}) => (
                                <Icon 
                                name="account-check-outline" 
                                color={color}
                                size={size}
                                />
                            )}
                            label="Support"
                            onPress={() => {props.navigation.navigate('SupportScreen')}}
                        />
                    </Drawer.Section>
                    
            </View>            
            </DrawerContentScrollView>
            
        <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem 
                    icon={({color, size}) => (
                        <Icon 
                        name="exit-to-app" 
                        color={color}
                        size={size}
                        />
                    )}
                    label="Sign Out"
                    onPress={() => {signOut()}}
                />
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      flex: 1,
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
      marginTop: 15,
    },
    bottomDrawerSection: {
        marginBottom: 15,
        borderTopColor: '#f4f4f4',
        borderTopWidth: 1
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
  });