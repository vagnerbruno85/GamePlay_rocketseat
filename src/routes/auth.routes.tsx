 import React from 'react';
 import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';

 import Home from '../screens/home';
 import SignIn from '../screens/SignIn';

    //const { Navigator, Screen } = createStackNavigator();
    const Stack = createStackNavigator()

 export function AuthRoutes() {
    return(
        <Stack.Navigator 
        >
            <Stack.Screen
                name='SignIn'
                component={SignIn}
            />
            <Stack.Screen
                name='Home'
                component={Home}
            />
          
        </Stack.Navigator>
    )
 }