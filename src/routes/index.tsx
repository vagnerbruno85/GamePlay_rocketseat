import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

//Rotas
import { AuthRoutes } from './auth.routes';

export function Routes(){
    return(
        
            <NavigationContainer>

                <AuthRoutes/>
                
            </NavigationContainer>
      
    )
}