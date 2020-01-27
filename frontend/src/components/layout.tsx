import React from "react";
import { Container } from 'semantic-ui-react';

interface Props {
    children: JSX.Element | JSX.Element[];
}

export const Layout: React.FC<Props> = ({ children }) => {
    return (<Container>
        {children}
    </Container>)
}