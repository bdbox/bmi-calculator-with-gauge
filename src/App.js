import React, { Component } from 'react'
import logo from './logo.svg'
import './styles/App.css'
import Gauge from './lib/Gauge'
import Controls from './components/Controls'

class App extends Component {
	constructor() {
		super()
		this.state = {
			w: 142,
			h: 66,
			bmi: 22.9
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
						value={this.state.bmi} 
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
	
	onWChange = () => {
		let valW = document.getElementById('weightInput').value	
		let valH = document.getElementById('heightInput').value		
		this.setState({
			w: valW,
			bmi: this.calcBmi(valW, valH)
		})	
	}
	
	onHChange = () => {
		let valW = document.getElementById('weightInput').value	
		let valH = document.getElementById('heightInput').value
		this.setState({
			h: valH,
			bmi: this.calcBmi(valW, valH)
		})	
	}
	
	calcBmi = (w, h) => {
		let kg = w * 0.45359237
		let m = h * 0.0254
		
		return Math.floor(kg / m / m * 10) / 10;
	}
}

export default App;
