/* eslint-disable react/prop-types */
import React from 'react';
import { TypeChooser } from "react-stockcharts/lib/helper";
import Chart from './Chart';
import { getData } from "./utils"

class ChartComponent extends React.Component {
	componentDidMount() {
		let symbol = this.props.selected; // eslint-disable-line
		getData(symbol).then(data => {
			this.setState({ data })
		})
	}

	componentDidUpdate(prevProps) {
		  if (this.props.selected !== prevProps.selected) {
			    let symbol = this.props.selected; // eslint-disable-line
					getData(symbol).then(data => {
						this.setState({ data })
					})
			}
		}
	render() {
		if (this.state == null) {
			return <div>Loading...</div>
		}
		return (
			<TypeChooser>
				{type => <Chart type={type} data={this.state.data} />}
			</TypeChooser>
		)
	}
}



export default ChartComponent;