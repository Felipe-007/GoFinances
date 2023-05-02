//Botão enviar
import { Container, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

//faz a tipagem do TouchableOpacityProps para o Props
interface Props extends TouchableOpacityProps{
  title: string;
}

export function Button({ title, ...rest }: Props) {
  return (
    <Container {...rest}>
      <Title>
        {title}
      </Title>
    </Container>
  )
}