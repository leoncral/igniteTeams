import {TouchableOpacityProps} from 'react-native';
import {Container, Icon, Title} from './styles';

type Props = TouchableOpacityProps &{
    title: string;
}

export function GrooupCard({title, ...rest}: Props){
    return(
        <Container {...rest} activeOpacity={.5}>
            <Icon />
            <Title>
                {title}
            </Title>
        </Container>
    );
}