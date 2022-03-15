import { NextRouter, useRouter } from 'next/router';
import { FormEvent } from 'react';
import operators from './operators'
import { Container, Title, Form, Text, Input, Button } from './styles/addStyles'

const AddPage = () => {
    const router: NextRouter = useRouter();

    const newOperator = {
        name: "",
        pictureURL: ""
    }

    const createOperator = (e: FormEvent) => {
        e.preventDefault();
        operators.push(newOperator);
        router.push("/");
    }

    return (
        <Container>
            <Title>
                Добавление оператора
            </Title>
            <Form onSubmit={(e) => createOperator(e)}>
                <Text>
                    Название оператора
                </Text>
                <Input
                    required
                    onChange={(op) => newOperator.name = op.target.value}
                />
                <Text>
                    Ссылка на картинку
                </Text>
                <Input
                    required
                    type="link"
                    pattern="https?:\/\/(www.)?(\w*\W*)*"
                    placeholder="URL"
                    onChange={(url) => newOperator.pictureURL = url.target.value}
                />
                <Button
                    type="submit"
                >
                    Создать
                </Button>
            </Form>
        </Container>
    )
}
export default AddPage;