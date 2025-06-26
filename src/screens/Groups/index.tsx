import { useState, useEffect, useCallback } from 'react';
import { Alert, FlatList } from 'react-native';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GrooupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { useNavigation, useFocusEffect } from '@react-navigation/native';

import { Container } from './styles';
import { Button } from '@components/Button';
import { groupsGetAll } from '@storage/group/groupGetAll';
import { Loading } from '@components/Loading';

export function Groups() {

  const [isLoading, setIsloading] = useState(true);
  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup(){
    navigation.navigate('new');
  }

  async function fetchGroups() {
    try{
      const data = await groupsGetAll();
      setGroups(data);
    }catch(error){
      Alert.alert('Turmas', 'Não foi possível carregar as turmas');
    } finally{
      setIsloading(false);
    }
  }

  function handleOpenGroup(group: string){
    navigation.navigate('players', { group });
  }

  useFocusEffect(useCallback(() => {
    fetchGroups();
  },[]));

  return (
    <Container >
      <Header />

      <Highlight 
        title='Turmas'
        subtitle='jogue com a sua turma'
      />
    {isLoading ? <Loading /> :  
        <FlatList 
          data={groups}
          keyExtractor={item => item}
          renderItem={({item}) => (
            <GrooupCard 
              title={item}
              onPress={() => handleOpenGroup(item)}
            />
          )}
          contentContainerStyle={groups.length === 0 && {flex: 1}}
          ListEmptyComponent={() => (
            <ListEmpty message="Cadastre a primeira turma!" />
          )}
        />
      }
      <Button 
        title='Criar nova turma' 
        activeOpacity={.5}
        onPress={handleNewGroup}
      />
    </Container>
  );
}