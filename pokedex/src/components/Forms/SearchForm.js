import React, { Component } from 'react'

// Components
import Input from "./Input"
import { Container, Button } from 'react-bootstrap';

export class SearchForm extends Component {
    render() {
        return (
            <div>
                <Container className="text-center" >
                    <Input placeholder="Digite o nome do pokemon..." value={this.props.nomePoke} onChange={this.props.onChange} />
                    <Button variant="dark" style={{marginTop: "15px"}} size="lg" onClick={this.props.onClick} disabled={this.props.nomePoke === ""}>Buscar</Button>
                </Container>
            </div>
        )
    }
}

export default SearchForm
