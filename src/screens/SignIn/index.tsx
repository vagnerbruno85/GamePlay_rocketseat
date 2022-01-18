import React, { useState} from 'react';
import { 
    View, 
    Text,  
    Image,
    StatusBar,
} from 'react-native';
import { styles } from './styles';
import Illustration from  '../../assets/illustration.png';
import { ButtonIcon } from '../../components/ButtonIcon';

export default function SignIn () {

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
                activeOpacity={0.7}
                />
            </View>
         </View>
    );
}