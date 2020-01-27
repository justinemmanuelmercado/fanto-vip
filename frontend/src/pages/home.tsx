import React from 'react';
import { Container, Button, Icon, Grid, Form, Divider, Checkbox, Segment, Header, } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export const Home: React.FC<{}> = () => {
    return (
        <Container text>
            <Grid textAlign='center' style={{ height: '100vh' }} verticalAlign='middle'>
                <Grid.Column style={{ maxWidth: 450 }}>
                    <Link to="/">
                        <Header as="h1">LOGO!</Header>
                    </Link>
                    <Segment basic>
                            <Segment style={{ padding: 0, margin: 0}} basic>Turn your fans into VIP members</Segment>
                            <Segment style={{ padding: 0, margin: 0}} basic>Interact with them</Segment>
                            <Segment style={{ padding: 0, margin: 0}} basic>Make money!</Segment>
                    </Segment>
                    <Button color='blue' fluid size='big'>
                        <Grid>
                            <Grid.Column verticalAlign="middle" textAlign="right" width="11">Continue with Twitter</Grid.Column>
                            <Grid.Column verticalAlign="middle" textAlign="right" width="5" floated="right"><Icon size="large" name="twitter"></Icon></Grid.Column>
                        </Grid>
                    </Button>
                    <Divider horizontal>OR</Divider>
                    <Form size='large'>
                        <Form.Input fluid placeholder='Email' />
                        <Form.Input
                            fluid
                            placeholder='Password'
                            type='password'
                        />
                        <Form.Input
                            fluid
                            placeholder='Name'
                            type='text'
                        />
                        <Segment textAlign="center" basic>
                            <Checkbox label="I agree to the " /> <Link to="#">Terms of Use and Privacy Policy</Link>
                        </Segment>
                        <Button color='blue' fluid size='big'>
                            Sign-up
                        </Button>
                    </Form>
                    <Segment textAlign="center" basic>
                        Already joined? <a href='/sign-in'>Click here!</a>
                    </Segment>
                </Grid.Column>
            </Grid>
        </Container>
    )
}