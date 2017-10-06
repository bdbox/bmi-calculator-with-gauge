import React, { Component } from 'react'

export default class Controls extends React.Component {
	render() {
		return (
			<div>
				<div className="controls">
					<label>Height:</label> 
					<input type="range" min="50" max="90" step="1" id="heightInput" defaultValue={this.props.h} onChange={this.props.onHChange} />
					<input type="text" id="heightTextInput" value={this.props.h + ' inches'} readOnly />
					<br />
					<br />
					<label>Weight:</label> 
					<input type="range" min="50" max="300" step="1" id="weightInput" defaultValue={this.props.w} onChange={this.props.onWChange} />				
					<input type="text" id="weightTextInput" value={this.props.w + ' lbs'} readOnly />
				</div>
				<ul>
					<li>Very severely underweight: &lt; 15</li>
					<li>Severely underweight: 15 - 16</li>
					<li>Underweight: 16 - 18.5</li>
					<li>Normal (healthy weight): 18.5 - 25</li>
					<li>Overweight: 25 - 30</li>
					<li>Obese Class I (Moderately obese): 30 - 35</li>
					<li>Obese Class II (Severely obese): 35 - 40</li>
					<li>Obese Class III (Very severely obese): &gt; 40</li>
				</ul>
			</div>
		)
	}
}