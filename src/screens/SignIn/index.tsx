import React, { useState} from 'react';
import { View, Text, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';


import { styles } from './styles';
import Illustration from  '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';



export function SignIn () {
    const navigation = useNavigation();
    
    function handleSignIn() {
        navigation.navigate('Home');
    }
    return (
        <View style={styles.container}>
            
            <Image 
                source={Illustration} 
                style={styles.image} 
                resizeMode='stretch'/>
            
            
            <View style={styles.content}>
                <Text style={styles.title}>Conecte-se Organize{`\n`} seus jogos{`\n`} facilmente</Text>
                <Text style={styles.subtitle}>Crie grupos para jogar seus games {`\n`}favoritos com seus amigos.</Text>
                
            <ButtonIcon 
                title="Entrar com Discord" 
                onPress={handleSignIn}
                />
            
            </View>
          
         </View>
    );
}