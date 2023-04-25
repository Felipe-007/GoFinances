import { Container, Header, UserInfo, Photo, User, UserGreetings, UserName, UserWrapper, Icon, HighlightCards } from "./styles";
import HighlightCard from "../../components/HighlightCard";

export default function Dashboard() {
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
        <HighlightCard title="Entrada" amount="R$ 17.000,00" lastTransaction="Última entrada dia 13 de abril" type="up"
          //os detalhes vem do HighlightCard/index.tsx
        />

        <HighlightCard title="Saídas" amount="R$ 1.259,00" lastTransaction="Última entrada dia 03 de abril" type="down" />
      
        <HighlightCard title="Total" amount="R$ 16.141,00" lastTransaction="01 à 16 de abril" type="total" />
      </HighlightCards>
    </Container>
  )
}