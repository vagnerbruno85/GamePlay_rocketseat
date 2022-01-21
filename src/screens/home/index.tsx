import React from 'react';
import { View} from 'react-native';

import { styles } from './styles';
import { Profile } from '../../components/Profile'; 
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/categorySelect';

export default function Home(){
    return (
        <View style={styles.container}>
            <View style={styles.header}>    
                <Profile/>
                <ButtonAdd/>
            </View>
            <View>
                 <CategorySelect/>
            </View>
        </View>
    );
}