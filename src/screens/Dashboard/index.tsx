import { Container, Header, UserInfo, Photo, User, UserGreetings, UserName, UserWrapper } from "./styles";

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
        </UserWrapper>
      </Header>
    </Container>
  )
}