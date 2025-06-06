import { useState } from 'react';
import { FlatList } from 'react-native';

import { Header } from '@components/Header';
import { Hihtlight } from '@components/Highlight';
import { GrooupCard } from '@components/GroupCard';
import { ListEmpty } from '@components/ListEmpty';

import { Container } from './styles';
import { Button } from '@components/Button';

export function Groups() {

  const [groups, setGroups] = useState<string[]>([]);

  return (
    <Container >
      <Header />

      <Hihtlight 
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

      <Button title='Criar nova turma' activeOpacity={.5}/>
    </Container>
  );
}