import { NextRouter, useRouter } from 'next/router';
import { FormEvent } from 'react';
import { operators } from '../operators/operators'
import { Container, Title, Form, Text, Input, Button, ButtonBack } from '../styles/addStyles'

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
                    // maxLength={10}
                    // pattern="/([^\s-]{5})([^\s-]{5})/ → $1&shy;$2"
                    pattern="^[^\s]+(\s.*)?$"
                    onChange={(op) => newOperator.name = op.target.value}
                />
                <Text>
                    Ссылка на картинку
                </Text>
                <Input
                    required
                    type="link"
                    pattern="https?:\/\/(www.)?(\w*\W*)*\.(jpg|png|jpeg|gif)"
                    placeholder="URL"
                    onChange={(url) => newOperator.pictureURL = url.target.value}
                />
                <Button
                    type="submit"
                >
                    Создать
                </Button>
            </Form>
            <ButtonBack
                type="button"
                alt="назад"
                value="Назад"
                onClick={() => router.push("/")}
            />
        </Container>
    )
}
export default AddPage;