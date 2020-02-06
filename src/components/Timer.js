import React, { Component } from 'react'

import { 
  LinearProgress,
  withStyles,
  lighten
 } from '@material-ui/core/';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as timeActions from '../actions/time'
import * as modalActions from '../actions/modal'

const BorderLinearProgress = withStyles({
    root: {
      height: 10,
      backgroundColor: lighten('#4EC059', 0.8)
    },
    bar: {
      borderRadius: 20,
      backgroundColor: '#4EC059'
    },
  })(LinearProgress);

class Timer extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	time: 0,
		timer: null,
		count: 0
	  };

	  console.log("TIMER: ", props);
	}
	
	componentDidMount() {
	   this.initTimer()
	}

	componentDidUpdate() {
		if(this.props.time >= 100) {

			clearInterval(this.state.timer)

			setTimeout(() => {
				this.props.openModal()
			}, 1000)
		}
	}

	initTimer = () => {

		let total = 0;
		let seconds = 0;
		let myCount = 0;

		this.setState({timer: setInterval(() => {

		  total = 100 * 0.1 / 5

		  this.props.increaseTime(total)

		}, 100)})
	}


	render() {
		return (
			<BorderLinearProgress variant="determinate" className="time" value={this.props.time} />
		)
	}
}

const mapStateToProps = state => ({
	time: state.time
})

const mapDispatchToProps = dispatch => bindActionCreators({
	...timeActions, ...modalActions}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Timer);