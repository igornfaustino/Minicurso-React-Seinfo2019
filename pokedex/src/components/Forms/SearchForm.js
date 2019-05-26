import React, { Component } from 'react'

// Components
import Input from "./Input"
import { Container, Row, Col } from 'react-bootstrap';
import Button from './Button'

export class SearchForm extends Component {
    render() {
        return (
            <form onSubmit={this.props.onSubmit}>
                <Container className="text-center" >
                    <Row>
                        <Col xs="11">
                            <Input placeholder="Digite o nome do pokemon..." value={this.props.nomePoke} onChange={this.props.onChange} />
                        </Col>
                        <Col xs="1">
                            <Button type="submit" variant="dark" size="md" disabled={this.props.nomePoke === ""}>Buscar</Button>
                        </Col>
                    </Row>
                </Container>
            </form>
        )
    }
}

export default SearchForm
