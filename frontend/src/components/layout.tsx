import React from "react";
import { Container } from 'semantic-ui-react';
import { Header } from './header';

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div>
            <Header />
            <Container>
                {children}
            </Container>
        </div>
    )
}