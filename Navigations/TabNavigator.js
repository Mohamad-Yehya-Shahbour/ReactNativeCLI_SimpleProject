import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchStackScreen from "./StackNavigators/SearchStackScreen";
import ListStackScreen from "./StackNavigators/ListStackScreen";
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';


const Tab = createBottomTabNavigator();

function TabNavigator() {
    return (

      <Tab.Navigator initialRouteName="Search" screenOptions={{ headerShown: false }} >
          
        <Tab.Screen
            options={{
                tabBarLabel:"Search",
                tabBarLabelStyle:{color:"black"},
                tabBarIcon: ({color,size}) => (
                    <FontAwesome name='search' 
                    color={"black"} size={size}
                     />
                ),
                tabBarActiveBackgroundColor:"#cdcfd1"
            }}
            color="black"
            name="Search" 
            component={SearchStackScreen} 
        />

        
        
      </Tab.Navigator>

    );
}

export default TabNavigator;