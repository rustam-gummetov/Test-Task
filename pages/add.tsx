import Link from 'next/link';
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
            <Link href={"/"}>
                <ButtonBack>
                    Назад
                </ButtonBack>
            </Link>
        </Container>
    )
}
export default AddPage;