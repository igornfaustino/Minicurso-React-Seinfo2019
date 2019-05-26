import React, { Component } from 'react'
import { Image, Row, Col } from 'react-bootstrap'
import StatsRadar from '../StatsRadar'

export class PokeInfo extends Component {
    render() {
        return (
            <div>
                <Row>
                    <Col> <Image src={this.props.infoPoke.img} height="100%"/> </Col>
                    <Col style ={{
                        textAlign: "left"
                    }}>
                        <h4>{this.props.infoPoke.nome} - {this.props.infoPoke.id}</h4>
                        <p>Peso: {this.props.infoPoke.pesoKg} KG</p>
                        <p>Altura: {this.props.infoPoke.alturaM} M</p>
                        <p>Tipo: {this.props.infoPoke.tipo && this.props.infoPoke.tipo.join(", ")}</p>
                    </Col>
                    <Col> 
                        <StatsRadar status={this.props.infoPoke.status} />
                    </Col>
                </Row>
            </div>
        )
    }
}

export default PokeInfo
