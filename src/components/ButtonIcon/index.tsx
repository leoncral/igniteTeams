import { TouchableOpacityProps } from "react-native";
import {MaterialIcons} from '@expo/vector-icons';

import { Container, Icon } from "./styles";
import { ButtonTypeStyleProps } from "@components/Button/styles";

type Props = TouchableOpacityProps & {
    icon: keyof typeof MaterialIcons.glyphMap;
    type?: ButtonTypeStyleProps;
}

export function ButtonIcon({icon, type = 'PRIMARY', ...rest}: Props){
    return(
        <Container {...rest}>
          <Icon 
            name={icon}
            type={type}         
          
          />
        </Container>
    );
}