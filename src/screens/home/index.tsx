import React from 'react';
import { View} from 'react-native';

import SignIn from '../SignIn';
import { styles } from './styles';
import { Profile } from '../../components/Profile'; 


export default function Home(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>    
              {/* <SignIn/> */}
              <Profile/>
            </View>
            
        </View>
    );
}