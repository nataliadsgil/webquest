import React, { Component } from 'react'
import {
	Modal,
	Button
} from '@material-ui/core'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as modalActions from '../actions/modal'
import * as wordIndexActions from '../actions/wordindex'
import * as questionActions from '../actions/question'
import * as timeActions from '../actions/time'
import * as resultActions from '../actions/result'

class TimeoutModal extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};

	  console.log(props)
	}

	componentDidUpdate() {
		if(this.props.result == "LOSE") {
			this.handleOpen()
		}
		else if(this.props.result == "PLAY") {
			this.handleClose()
		}
	}

	handleOpen = () => {
	    this.props.openModal()
	};

	handleClose = () => {
	    this.props.closeModal()
	};

	nextWord = async () => {
	    this.props.userPlaying()
	    await this.props.nextWord()
	   // setTimeout(() => {
	    await this.props.getQuestion(this.props.wordindex)
	    await this.props.returnZero()	    	
	    //}, 1000)
	    //let add = index + 1
	    //console.log(add)
	    //setIndex(add)
	    //setWord('')
	    //setArrayLetter([])
	    //setColor('#555');
	    //initTimer()
  	}

	render() {
		return (
			<Modal
	        aria-labelledby="simple-modal-title"
	        aria-describedby="simple-modal-description"
	        open={this.props.modal}
	        onClose={this.handleClose}
	      >
	        <div className="modal">
	          <h2 id="simple-modal-title">Tempo Esgotado!</h2>
	          <p id="simple-modal-description">
	            A palavra correta era:
	          </p>
	          <h3>{this.props.question.translate}</h3>
	          <Button classes={{root: 'continue-button'}} onClick={this.nextWord}>Continuar</Button>
	        </div>
	      </Modal>
		)
	}
}

const mapStateToProps = state => ({
	modal: state.modal,
	question: state.question,
	wordindex: state.wordindex,
	result: state.result
})

const mapDispatchToProps = dispatch => bindActionCreators({
	...modalActions, ...wordIndexActions, ...questionActions, ...timeActions, ...resultActions}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TimeoutModal)