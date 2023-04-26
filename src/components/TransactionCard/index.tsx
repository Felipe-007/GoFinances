//listagem das entradas e saídas
import { Container, Title, Amount, Footer, Category, Icon, CategoryName, Date } from "./styles";

//define o tipo da categoria, nome e o icone 
interface Category {
  name: string;
  icon: string;
}

//define os tipos
interface Props {
  data: {
    type: 'positive' | 'negative';
    title: string;
    amount: string;
    category: Category;  //vem do interface Category
    date: string;
  }
}

export default function TransactionCard({ data }: Props) {
  return (
    <Container>
      <Title>
        {data.title}
      </Title>

      <Amount type={data.type}>
        {  //apresenta o - para os negativos
          data.type === 'negative' && '- '
        }
        { data.amount }
      </Amount>

      <Footer>
        <Category>
          <Icon name={data.category.icon} />
          <CategoryName>
            {data.category.name}
          </CategoryName>
        </Category>

        <Date>
          {data.date}
        </Date>
      </Footer>
    </Container>
  )
}