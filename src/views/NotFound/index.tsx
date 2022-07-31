import React from "react";
import { Container } from "react-bootstrap";
import Layout from "../../components/Layout";

export function NotFoundView () {
    return (
        <Layout>
            <Container className="text-center my-5">
                <h1 className="mb-4">Página não encontrada</h1>
                <p>A página que você está tentando acessar não existe ou foi movida.</p>
                <p>Utilize o menu superior para encontrar o que deseja.</p>
            </Container>
        </Layout>
    )
}