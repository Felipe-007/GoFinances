//tela de registro
import { Container, Header, Title, Form, Fields, TransactionsTypes } from "./styles";
import { Input } from "../../components/Form/Input";
import { Button } from "../../components/Form/Button";
import { TransactionTypeButton } from "../../components/Form/TransactionTypeButton";
import { useState } from "react";
import { CategorySelect } from "../../components/Form/CategorySelect";

export function Register() {

  const [transactionType, setTransactionType] = useState('');  //armazena o estado da cor de fundo do icone receita ou despesa

  //a função ja receberá os tipos up e dowm
  function handleTransactionsTypeSelect(type: 'up' | 'down'){
    setTransactionType(type)
  }

  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>

      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Preço" />

          <TransactionsTypes>
            <TransactionTypeButton
              title="Renda"
              type="up"
              onPress={() => handleTransactionsTypeSelect('up')}
              isActive={transactionType === 'up'}  //pega do TransactionTypeButton/index.tsx
            />
            <TransactionTypeButton
              title="Despesa"
              type="down"
              onPress={() => handleTransactionsTypeSelect('down')}
              isActive={transactionType === 'down'}
            />
          </TransactionsTypes>

          <CategorySelect title="Categoria" />
        </Fields>
        <Button title="Enviar" />
      </Form>
    </Container>
  )
}