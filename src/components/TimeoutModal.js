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

class TimeoutModal extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {};

	  console.log(props)
	}

	handleOpen = () => {
	    this.props.openModal()
	};

	handleClose = () => {
	    this.props.closeModal()
	};

	nextWord = () => {
	    this.props.closeModal()
	    this.props.nextWord()

	    setTimeout(() => {
	    	this.props.getQuestion(this.props.wordindex)	    	
	    }, 1000)
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
	wordindex: state.wordindex
})

const mapDispatchToProps = dispatch => bindActionCreators({
	...modalActions, ...wordIndexActions, ...questionActions}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TimeoutModal)