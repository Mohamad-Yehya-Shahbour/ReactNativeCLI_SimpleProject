//import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createStackNavigator, TransitionPresets  } from '@react-navigation/stack';
import SearchScreen from '../../SearchScreens/SearchScreen';
import SearchDetailsScreen from '../../SearchScreens/SearchDetailsScreen';
import React from 'react';



const SearchStack = createStackNavigator();

const config = {
    animation: 'timing',
    config: {
        duration: 750,
    },
};

function SearchStackScreen() {
    return (
        <SearchStack.Navigator 
            
        >

            
            
        </SearchStack.Navigator>  
    );
}

export default SearchStackScreen;