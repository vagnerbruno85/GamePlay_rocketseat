import React, { useEffect, useState} from 'react';
import { View,Text} from 'react-native';

import { styles } from './styles';
import { Profile } from '../../components/Profile'; 
import { ButtonAdd } from '../../components/ButtonAdd';
import { CategorySelect } from '../../components/categorySelect';
import { ListHeader } from '../../components/ListHeader';
import { FlatList } from 'react-native-gesture-handler';

export function Home(){
    const [category, setCategory] = useState('');

    const appointments = [
        {
            id:'1',
            guild:{
                id:'1',
                name:'Lendários',
                icon: null,
                owner: true 
            },
            category:'1',
            date: '22/06 às 20:40h',
            description:'É hoje que vamos chegar ao challenger sem perder uma partida da md10'
        }
    ]

    function handleCategorySelect(categoryId: string) {
        categoryId === category ? setCategory('') : setCategory(categoryId);
      } 
    
    return (
        <View style={styles.container}>
            <View style={styles.header}>    
                <Profile/>
                <ButtonAdd/>
            </View>
            <View>
                 {/* <CategorySelect
                    categorySelected={category}
                    setCategory={handleCategorySelect}
                 /> */}

                <View style={styles.content}>
                    <ListHeader 
                        title="Partidas agendadas"
                        subtitle='Total 6'
                    />
                    <FlatList
                        data={appointments}
                        keyExtractor={item =>item.id}
                        renderItem={({item}) =>(
                            <Text>{item.guild.name}</Text>
                        )}
                    />
                </View>
            </View>
        </View>
    );
}