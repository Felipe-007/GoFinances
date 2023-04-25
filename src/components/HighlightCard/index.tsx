//Cartões de Destaque
import { Container, Header, Title, Icon, Footer, Amount, LastTransaction } from "./styles";

//define os tipos
interface Props {
  title: string;
  amount: string;
  lastTransaction: string;
  type: 'up' | 'down' | 'total';
}

//define os tipos dos icones
const icon = {
  up: 'arrow-up-circle',
  down: 'arrow-down-circle',
  total: 'dollar-sign'
}

export default function HighlightCard({ title, amount, lastTransaction, type }: Props) {
  return (
    <Container type={type}>
      <Header>
        <Title type={type}>
          {title}
        </Title>
        <Icon name={icon[type]}
          //o icone sera de acordo com o seu tipo definido em Dashboard/index.tsx
          type={type}
          //define o tipo referenciando ele ao type 'up' | 'down' | 'total'
        />
      </Header>

      <Footer>
        <Amount type={type}>
          {amount}
        </Amount>

        <LastTransaction type={type}>
          {lastTransaction}
        </LastTransaction>
      </Footer>
    </Container>
  )
}