import React, { Component } from 'react'
import logo from './logo.svg'
import './styles/App.css'
import Gauge from './lib/Gauge'
import Controls from './components/Controls'

class App extends Component {
	constructor() {
		super()
		this.state = {
			w: 60,
			h: 68,
			bmi: null,
			hidden: true
		}
	}
	
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<img src={logo} className="App-logo" alt="logo" />
				</header>
				<section className="App-intro">
					<Gauge 
						label="BMI Calculator" 
						value={this.state.h ? this.state.h : 40} 
					/>
					<Controls 
						onWChange={this.onWChange.bind(this)} 
						onHChange={this.onHChange.bind(this)}
						h={this.state.h}
						w={this.state.w} 
					/>
				</section>
			</div>
		)
	}
	
	onWChange() {
		let val = document.getElementById('weightInput').value		
		this.setState({
			w: val
		})	
	}
	
	onHChange() {
		let val = document.getElementById('heightInput').value
		this.setState({
			h: val
		})	
	}
}

export default App;
