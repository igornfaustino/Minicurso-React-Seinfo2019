import React, { Component } from 'react'

import Form from "../../components/Forms/SearchForm"
import { Image, Row, Col } from 'react-bootstrap'
import { getPokeByName } from '../../utils/API'
import PokeInfo from "../../components/PokeInfo"

export class SearchPage extends Component {
    state = {
        nomePoke: "",
        infoPoke: {}
    }

    onChange = e => {
        this.setState({
            nomePoke: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        getPokeByName(this.state.nomePoke.toLowerCase()).then(res => {
            const infoPoke = {}
            infoPoke.nome = res.data.name
            infoPoke.pesoKg = res.data.weight / 10
            infoPoke.alturaM = res.data.height / 10
            infoPoke.id = res.data.id
            infoPoke.status = {}
            res.data.stats.forEach(status => {
                infoPoke.status[status.stat.name.replace("-", "")] = status.base_stat
            })
            infoPoke.tipo = res.data.types.map(value => (value.type.name))
            infoPoke.img = res.data.sprites.front_default
            this.setState({
                infoPoke
            })
            this.props.addToHistorico(infoPoke);
        }).catch(ex => {
            console.log(ex)
            alert("Pokémon não encontrado!")
        }).finally(() => {
            this.setState({
                nomePoke: ""
            })
        })
    }

    render() {
        return (
            <div style={{
                padding: "50px",
                textAlign: "center"
            }}>
                <Image src={require("../../images/pokeball.png")} height="130px" style={{ marginBottom: "20px" }} />
                <Form nomePoke={this.state.nomePoke} onChange={this.onChange} onSubmit={this.onSubmit} />
                <hr />
                {Object.keys(this.state.infoPoke).length !== 0 && <PokeInfo infoPoke={this.state.infoPoke} />}
            </div>
        )
    }
}



export default SearchPage
