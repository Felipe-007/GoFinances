//icone de receita ou despesa
import { Container, Icon, Title } from "./styles";
import { TouchableOpacityProps } from "react-native";

//o Props recebera todas as propriedades do TouchableOpacityProps
interface Props extends TouchableOpacityProps {
  title: string;
  type: 'up' | 'down';
  isActive: boolean;
}

//define os icones
const icons = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle'
}

export function TransactionTypeButton({ title, type, isActive, ...rest }: Props) {  //o Props recebera todas as propriedades do TouchableOpacityProps atraves do ...rest
  return (
    <Container
      {...rest}
      isActive={isActive}
      type={type}>
      <Icon name={icons[type]} type={type} />
      <Title>
        {title}
      </Title>
    </Container>
  )
}