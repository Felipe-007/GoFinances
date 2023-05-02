//Formulario de preenchimento
import { Container } from "./styles";
import { TextInputProps } from "react-native";

//faz a tipagem do TextInputProps para o Props, pegando todas as propriedades dela atraves do ...rest
type Props = TextInputProps

export function Input({...rest}: Props) {
  return (
    <Container {...rest} />
  )
}