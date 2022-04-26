import { operators } from '../operators/operators'
import DrawOperator from './drawOperator'
import { Container, Title, Grid, Button } from '../styles/indexStyles'
import Link from 'next/link'

const HomePage = () =>
(
  <Container>
    <Title>
      Выберите оператора
    </Title>
    <Grid>
      {operators.map(operator =>
        <DrawOperator name={operator.name} pictureURL={operator.pictureURL} key={operator.name} />,
      )}
      <Link href={"/add"}>
        <Button>
          Добавить оператора
        </Button>
      </Link>
    </Grid>
  </Container>
)
export default HomePage;