import React, { Component } from 'react'
import PokeInfo from '../../components/PokeInfo'

export class HistoryPage extends Component {
    state = {
        historico: []
    }

    componentWillMount() {
        this.setState({
            historico: this.props.getHistorico()
        })
    }
    

    render() {
        const historico = this.state.historico.map((pokeInfo, idx) => (<div key={idx}><PokeInfo infoPoke={pokeInfo} /><hr/></div>))
        return (
            <div>
                <h3 className="text-center" style ={{
                    marginTop: "40px"
                }}>Histórico de Pokémons</h3>

                {historico}
            </div>
        )
    }
}

export default HistoryPage
