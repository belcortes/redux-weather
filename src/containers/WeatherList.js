import React, { Component } from 'react'
import { connect } from 'react-redux'
import _ from 'lodash'

import Chart from '../components/Chart'
import GoogleMap from '../components/GoogleMap'

class WeatherList extends Component {
	renderWeather(cityData) {
		const name = cityData.city.name
		const temps = cityData.list.map((weather) => weather.main.temp - 273.15)
		const pressures = cityData.list.map((weather) => weather.main.pressure)
		const humidities = cityData.list.map((weather) => weather.main.humidity)
		// es6 syntax v
		const {lat, lon} = cityData.city.coord

		return(
			<tr key={name}>
				<td><GoogleMap lat={lat} lon={lon} /></td>
				<td><Chart data={temps} color='red' unit='C' /></td>
				<td><Chart data={pressures} color='orange' unit='hPa' /></td>
				<td><Chart data={humidities} color='green' unit='%' /></td>
			</tr>
		)
	}

	render() {
		return(
			<table className='table table-hover'>
				<thead>
					<tr>
						<th>City</th>
						<th>Temperature (C)</th>
						<th>Pressure (hPa)</th>
						<th>Humidity (%)</th>
					</tr>
				</thead>
				<tbody>
					{this.props.weather.map(this.renderWeather)}
					
				</tbody>
			</table>
		)
	}
}

function mapStateToProps({weather}) {
	return {weather}
}

export default connect(mapStateToProps)(WeatherList)