 import React from 'react';
 import {CardStyleInterpolators, createStackNavigator} from '@react-navigation/stack';

 import {Home} from '../screens/home';
 import {SignIn} from '../screens/SignIn';

    const { Navigator, Screen } = createStackNavigator();
    // const Stack = createStackNavigator()

 export function AuthRoutes() {
    return(

        <Navigator 
            headerMode='none'
            screenOptions={{
                cardStyle:{
                    backgroundColor: "transparent"
                }
            }}
        >
            <Screen
                name='SignIn'
                component={SignIn}
            />
            <Screen
                name='Home'
                component={Home}
            />
          
        </Navigator>
    )
 }