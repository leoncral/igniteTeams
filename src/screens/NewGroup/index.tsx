import { Header } from '@components/Header';
import {Container, Content, Icon} from './styles';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';


export function NewGroup(){

    const [group, setGroup] = useState('')

    const navigation = useNavigation();

    function handleNewGroup(){
        navigation.navigate('players', {group: group})
    }

    return(
        <Container>
            <Header showBackButton />

            <Content>
                <Icon/>
                <Highlight 
                    title='Nova tumar' 
                    subtitle='Crie a turma para adicionar as pessoas' 
                />
                <Input 
                    placeholder='Nome da turma'
                    onChangeText={setGroup}
                
                />
                <Button 
                    title='Criar'
                    activeOpacity={.5}
                    style={{marginTop: 20}}
                    onPress={handleNewGroup}
                />                    
            </Content>
        </Container>
    );
}