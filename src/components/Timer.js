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
import * as resultActions from '../actions/result'

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


var stop = false
var timer = null


class Timer extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	time: 0,
		timer: null,
		count: 0,
		stop: false
	  };


	  console.log("TIMER: ", props);
	}
	
	componentDidMount() {
	   this.initTimer()
	}

	componentDidUpdate(prevProps, prevState) {
		if(this.props.time >= 100) {

			this.stopTimer()

			this.timeExceded()
		}

		if(this.props.result == "PLAY" && this.props.time == 0 && timer == null) {
			setTimeout(() => {
				this.initTimer()	
			}, 1000)
		}

	}

	timeExceded = async () => {
		await setTimeout(() => {
			if(this.props.result == "PLAY" && this.props.time >= 100) {
				this.props.userLose()
			}	
		}, 1000)
	}

	initTimer = () => {

		let total = 0;
		let seconds = 0;
		let myCount = 0;

		timer = setInterval(() => {
			total = 100 * 0.1 / 5
		  	this.props.increaseTime(total)
		}, 100)
	}

	stopTimer = async () => {
		await clearInterval(timer)
		timer = null
	}


	render() {
		return (
			<BorderLinearProgress variant="determinate" className="time" value={this.props.time} />
		)
	}
}

const mapStateToProps = state => ({
	time: state.time,
	result: state.result
})

const mapDispatchToProps = dispatch => bindActionCreators({
	...timeActions, ...modalActions, ...resultActions}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Timer);