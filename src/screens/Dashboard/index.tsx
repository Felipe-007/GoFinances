import { Container, Header, UserInfo, Photo, User, UserGreetings, UserName, UserWrapper, Icon } from "./styles";

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
    </Container>
  )
}