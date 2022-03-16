import { NextRouter, useRouter } from 'next/router'
import { operators } from './operators'
import DrawOperator from './drawOperator'
import { Container, Title, Grid, Button } from './styles/indexStyles'

const HomePage = () => {
  const router: NextRouter = useRouter();

  return (
    <Container>
      <Title>
        Выберите оператора
      </Title>
      <Grid>
        {operators.map(operator =>
          <DrawOperator operator={operator} key={operator.name} />,
        )}
        <Button onClick={() =>
          router.push({
            pathname: "/add",
          })}>
          Добавить оператора
        </Button>
      </Grid>
    </Container>
  )
}
export default HomePage;