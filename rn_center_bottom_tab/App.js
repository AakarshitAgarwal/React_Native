import React  from 'react';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View, Text, TouchableOpacity ,Dimensions} from 'react-native';



import  HomeScreen  from "./src/home_screen";
import  SettingScreen  from "./src/settings_screen";
import  ScanQRScreen  from "./src/scan_qr_screen";


const Tab = createBottomTabNavigator();
const {width} = Dimensions.get('window')



function MyTabBar({ state, descriptors, navigation }) {
  const focusedOptions = descriptors[state.routes[state.index].key].options;

  if (focusedOptions.tabBarVisible === false) {
    return null;
  }

  return (
    <View style={{ flexDirection: 'row' }}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        if(index===1){
          return(
          <TouchableOpacity
          activeOpacity={0.8}
          accessibilityRole="button"
          accessibilityStates={isFocused ? ['selected'] : []}
          accessibilityLabel={options.tabBarAccessibilityLabel}
          testID={options.tabBarTestID}
          onPress={onPress}
          onLongPress={onLongPress}
          style={{ flex: 1 ,justifyContent:'center',alignItems:'center',height:60,width:60,backgroundColor:"#5CC6FE",position:'absolute',left: (width / 2)-30,bottom:30 ,borderRadius:30,zIndex:99 }}
        >
          <Text style={{ color: isFocused ? '#673ab7' : '#222' }}>
          +
          </Text>
        </TouchableOpacity>
          )
        }

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityStates={isFocused ? ['selected'] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1 ,justifyContent:'center',alignItems:'center',height:56,backgroundColor:"#172D45"}}
          >
            <Text style={{ color: isFocused ? '#673ab7' : '#FFFFFF' }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}





const App = () => {
return(
  <NavigationContainer>
    <Tab.Navigator
    tabBar={props =><MyTabBar {...props}/>}
    >
      <Tab.Screen
       name="Home"
       component={HomeScreen}
      />
      <Tab.Screen
       name="OR"
       component={ScanQRScreen}
      />
      <Tab.Screen
       name="Setting"
       component={SettingScreen}
      />
    </Tab.Navigator>
  </NavigationContainer>
 )
}


export default App