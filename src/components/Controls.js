import React, { Component } from 'react'

export default class Controls extends React.Component {
	render() {
		return (
			<div>
				<div className="controls">
					<label>Height(inch):</label> 
					<input type="range" min="50" max="90" step="1" id="heightInput" defaultValue={this.props.h} onChange={this.props.onHChange} />
					<input type="text" id="heightTextInput" value={this.props.h} readOnly />
					<br />
					<br />
					<label>Weight(lb):</label> 
					<input type="range" min="50" max="300" step="1" id="weightInput" defaultValue={this.props.h} onChange={this.props.onWChange} />				
					<input type="text" id="weightTextInput" value={this.props.w} readOnly />
				</div>
			</div>
		)
	}
}