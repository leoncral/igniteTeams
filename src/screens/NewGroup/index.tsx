import { Header } from '@components/Header';
import {Container, Content, Icon} from './styles';
import { Highlight } from '@components/Highlight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';
import { useNavigation } from '@react-navigation/native';
import { useState } from 'react';
import { groupCreate } from '@storage/group/groupCreate';
import { AppError } from '@utils/AppErros';
import { Alert } from 'react-native';


export function NewGroup(){

    const [group, setGroup] = useState('')

    const navigation = useNavigation();

    async function handleNewGroup(){
        try{
            if(group.trim().length === 0){
                return Alert.alert('Novo grupo', 'Digite alguma coisa')
            }
            await groupCreate(group);
            navigation.navigate('players', {group: group})
        } catch(error){
            if(error instanceof AppError) {
                Alert.alert('Novo grupo', error.message);
            }
            else {
                Alert.alert('Novo grupo', 'Não foi possível criar novo grupo.')
                console.log(error);
            }
        }
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