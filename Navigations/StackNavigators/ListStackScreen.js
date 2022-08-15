import { createStackNavigator } from '@react-navigation/stack';
import ListScreen from '../../ListScreens/ListScreen';
import ListDetailsScreen from '../../ListScreens/ListDetailsScreen';
import React  from 'react';


const ListStack = createStackNavigator();
  
function ListStackScreen() {
  return (
    <ListStack.Navigator initialRouteName="Links" >

      <ListStack.Screen name="Links" component={ListScreen} />
      <ListStack.Screen name="details" component={ListDetailsScreen} />
      
    </ListStack.Navigator>
    
  );
}

export default ListStackScreen;