import { useNavigation } from "@react-navigation/native";
import { BackIcon, Container, Logo, BackButton } from "./styles";
import logoImg from '@assets/logo.png';

type Props = {
    showBackButton?: boolean;
}

export function Header({showBackButton = false}: Props){

    const navigation = useNavigation();

    function handleGoBack(){
        navigation.navigate("groups")
    }

    return (
        <Container>
            {
                showBackButton &&
                <BackButton onPress={handleGoBack}>
                    <BackIcon />
                </BackButton>
            }
            <Logo source={logoImg}/>
        </Container>
    );
}