import React, { Component } from 'react'

import Form from "../../components/Forms/SearchForm"
import { Image, Row, Col } from 'react-bootstrap';

export class SearchPage extends Component {
    state = {
        nomePoke: ""
    }

    onChange = e => {
        this.setState({
            nomePoke: e.target.value
        })
    }

    onClick = () => {
        alert("cliquei... :)")
    }

    render() {
        return (
            <div style={{
                padding: "50px",
                textAlign: "center"
            }}>
                <Image src={require("../../images/pokeball.png")} height="130px" style={{marginBottom: "20px"}}/>
                <Form nomePoke={this.state.nomePoke} onChange={this.onChange} onClick={this.onClick} />
            </div>
        )
    }
}

export default SearchPage
