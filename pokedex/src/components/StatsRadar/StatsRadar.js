import React, { Component } from 'react'
import Chart from 'chart.js'

export class StatsRadar extends Component {
    state={
        chart: null,
        id: '',
    }

    componentWillMount() {
        this.setState({
            id: Date.now()
        })
    }
    

    componentDidMount() {
        var radar = document.getElementById(this.state.id)
        const chart = new Chart(radar, {
            type: 'radar',
            data: {
                labels: ['hp', 'Attack', 'Defense', 'Speed', 'Sp. Def', 'Sp. Atk'],
                datasets: [{
                    backgroundColor: 'rgba(0,240,0,0.41)',
                    borderColor: 'green',
                    pointRadius: 0,
                    data: [this.props.status.hp, this.props.status.attack, this.props.status.defense, this.props.status.speed, this.props.status.specialattack, this.props.status.specialdefense]
                }]
            },
            options: {
                legend: {
                    display: false
                },
                scale: {
                    ticks: {
                        max: 255,
                        min: 0,
                        display: false
                    }
                }
            }
        })
        this.setState({
            chart
        })
    }

    componentDidUpdate() {
        this.state.chart.data.datasets[0].data = [this.props.status.hp, this.props.status.attack, this.props.status.defense, this.props.status.speed, this.props.status.specialattack, this.props.status.specialdefense]
        this.state.chart.update()
    }
    

    render() {
        return (
            <div>
                <canvas id={this.state.id}>

                </canvas>
            </div>
        )
    }
}

export default StatsRadar
