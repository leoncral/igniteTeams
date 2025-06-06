import { Header } from '@components/Header';
import {Container, Content, Icon} from './styles';
import { Hihtlight } from '@components/Highlight';
import { Button } from '@components/Button';
import { Input } from '@components/Input';


export function NewGroup(){
    return(
        <Container>
            <Header showBackButton />

            <Content>
                <Icon/>
                <Hihtlight 
                    title='Nova tumar' 
                    subtitle='Crie a turma para adicionar as pessoas' 
                />
                <Input 
                    placeholder='Nome da turma'
                
                />
                <Button 
                    title='Criar'
                    activeOpacity={.5}
                    style={{marginTop: 20}}
                />                    
            </Content>
        </Container>
    );
}