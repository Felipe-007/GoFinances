//pagina principal com os dados do usuário
import { Container, Header, UserInfo, Photo, User, UserGreetings, UserName, UserWrapper, Icon, HighlightCards, Transactions, Title, TransactionsList } from "./styles";
import HighlightCard from "../../components/HighlightCard";
import { TransactionCard,  TransactionCardProps } from '../../components/TransactionCard';

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export function Dashboard() {

  //define as propriedades do data, para serem usadas no TransactionCard
  const data: DataListProps[] = [
    {
      id: '1',
      type: 'positive',
      title: "Desenvolvimento de site",
      amount: "R$ 12.000,00",
      category: { name: 'Vendas', icon: 'dollar-sign' },
      date: "25/04/2023"
    },
    {
      id: '2',
      type: 'negative',
      title: "Hamburgeria pizzy",
      amount: "R$ 59,00",
      category: { name: 'Alimentação', icon: 'coffee' },
      date: "25/04/2023"
    },
    {
      id: '3',
      type: 'negative',
      title: "Aluguel do apartamento",
      amount: "R$ 1.200,00",
      category: { name: 'Casa', icon: 'shopping-bag' },
      date: "25/04/2023"
    }
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo source={{ uri: 'https://avatars.githubusercontent.com/u/83180302?v=4' }} />

            <User>
              <UserGreetings>Olá, </UserGreetings>
              <UserName>Felipe</UserName>
            </User>
          </UserInfo>

          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          title="Entrada"
          amount="R$ 17.000,00"
          lastTransaction="Última entrada dia 13 de abril"
          type="up"
        //os detalhes vem do HighlightCard/index.tsx
        />

        <HighlightCard
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última entrada dia 03 de abril"
          type="down"
        />

        <HighlightCard
          title="Total"
          amount="R$ 16.141,00"
          lastTransaction="01 à 16 de abril"
          type="total"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>

        <TransactionsList
          data={data}
          keyExtractor={item => item.id}
          renderItem={({ item }) => <TransactionCard data={item} />}
        />

      </Transactions>
    </Container>
  )
}