import React, { Component } from 'react'
import CanvasJSReact from './utils/canvasjs.react'
const CanvasJSChart = CanvasJSReact.CanvasJSChart

class Chart extends Component {
    render() {
        const { data } = this.props
        const recovered = []
        const confirmed = []
        const dead = []

        Object.keys(data).forEach(index => {
            const date = new Date(data[index].date + " 2020")
            recovered.push({ x: date, y: parseInt(data[index].totalrecovered) })
            confirmed.push({ x: date, y: parseInt(data[index].totalconfirmed) })
            dead.push({ x: date, y: parseInt(data[index].totaldeceased) })
        })

        const options = {
            theme: "light",
            animationEnabled: true,
            title: {
                text: "Covid-19 Statistics"
            },
            axisY: {
                includeZero: false,
            },
            toolTip: {
                shared: true
            },
            data: [
                {
                    type: "area",
                    name: "Confirmed",
                    color: 'rgb(242, 191, 7)',
                    showInLegend: true,
                    xValueFormatString: "MMM YYYY",
                    dataPoints: confirmed
                },
                {
                    type: "area",
                    name: "Recovered",
                    color: 'green',
                    showInLegend: true,
                    xValueFormatString: "MMM YYYY",
                    dataPoints: recovered
                },
                {
                    type: "area",
                    name: "Deceased",
                    color: 'rgb(224, 44, 0)',
                    showInLegend: true,
                    xValueFormatString: "MMM YYYY",
                    dataPoints: dead
                }
            ]
        }

        return (
            <div>
                <CanvasJSChart options={options}
                /* onRef={ref => this.chart = ref} */
                />
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        )
    }
}

export default Chart