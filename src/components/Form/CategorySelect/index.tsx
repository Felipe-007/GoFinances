//Seleção de categoria
import { Container, Category, Icon } from "./styles";
import { TouchableOpacityProps } from "react-native";

//faz a tipagem do TouchableOpacityProps para o Props
interface Props extends TouchableOpacityProps{
  title: string;
}

export function CategorySelect({ title }: Props) {
  return (
    <Container>
      <Category>
        {title}
      </Category>

      <Icon name="chevron-down"/>
    </Container>
  )
}