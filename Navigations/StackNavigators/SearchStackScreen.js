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
            initialRouteName="SearchItems"
            screenOptions={{
                gestureEnabled: true,
                cardOverlayEnabled: true,
                ...TransitionPresets.ModalPresentationIOS,
                ...TransitionPresets.FadeFromBottomAndroid ,
            }}
            presentation="modal"
        >

            <SearchStack.Screen 
                name="Universities" 
                component={SearchScreen}
            />

            <SearchStack.Screen name="SearchItemDetails" component={SearchDetailsScreen}
                
            />
            

            
            
        </SearchStack.Navigator>  
    );
}

export default SearchStackScreen;