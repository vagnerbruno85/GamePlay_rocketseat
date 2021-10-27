import React, { useState} from 'react';
import { View, Text, TextInput } from 'react-native';
import { styles } from './style';

export default function SignIn () {
    const [text, setText] = useState ("");
    return (
        <View style={styles.container}>
            <Text>Hellooooo</Text>
            <TextInput 
            style={styles.input}
            onChangeText={(value) => setText(value)  }
            
            />
            <Text>Você digitou: { text }</Text>
             
         </View>
    );
}