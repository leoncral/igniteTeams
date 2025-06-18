import { useState } from 'react';
import { FlatList } from 'react-native';

import { Header } from '@components/Header';
import { Highlight } from '@components/Highlight';
import { GrooupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';
import { useNavigation } from '@react-navigation/native';

import { Container } from './styles';
import { Button } from '@components/Button';

export function Groups() {

  const [groups, setGroups] = useState<string[]>([]);

  const navigation = useNavigation();

  function handleNewGroup(){
    navigation.navigate('new');
  }

  return (
    <Container >
      <Header />

      <Highlight 
        title='Turmas'
        subtitle='jogue com a sua turma'
      />

      <FlatList 
        data={groups}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <GrooupCard 
            title={item}
          />
        )}
        contentContainerStyle={groups.length === 0 && {flex: 1}}
        ListEmptyComponent={() => <ListEmpty message="Cadastre a primeira turma!" />}
      />

      <Button 
        title='Criar nova turma' 
        activeOpacity={.5}
        onPress={handleNewGroup}
      />
    </Container>
  );
}