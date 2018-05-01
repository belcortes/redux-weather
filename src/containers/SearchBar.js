import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { fetchWeather } from '../actions/index'

class SearchBar extends Component {
	state = {
		term: ''
	}

	handleInputChange = (e) => {
		this.setState({term: e.target.value})
	}

	handleFormSubmit = (e) => {
		e.preventDefault()
		this.props.fetchWeather(this.state.term)
		this.setState({term: ''})
	}

	render() {
		return (
			<form className='input-group' onSubmit={this.handleFormSubmit}>
				<input 
					placeholder='Get a 5 day forecast in your favorite cities'
					className='form-control'
					value={this.state.term}
					onChange={this.handleInputChange} />
				<span className='input-group-btn'>
					<button type='submit' className='btn btn-secondary'>Submit</button>
				</span>
			</form>
		)
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({fetchWeather}, dispatch)
}



export default connect(null, mapDispatchToProps)(SearchBar)