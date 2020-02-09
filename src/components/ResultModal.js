import React, { Component } from 'react'
import {
	Modal,
	Button
} from '@material-ui/core'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as wordIndexActions from '../actions/wordindex'
import * as questionActions from '../actions/question'
import * as timeActions from '../actions/time'
import * as resultActions from '../actions/result'
import * as lifeActions from '../actions/life'

class ResultModal extends Component {
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	open: false,
	  	title: "Completo",

	  };
	}

	componentDidUpdate(prevProps, prevState) {
		if(this.props.life === 0 && prevProps.life === 1) {
			this.handleOpen()
			this.userFail()
		}
	}

	handleOpen = () => {
	   	this.setState({open: true})
	};

	handleClose = () => {
	    this.setState({open: false})
	};

	render() {
		return (
			<Modal
	        aria-labelledby="simple-modal-title"
	        aria-describedby="simple-modal-description"
	        open={this.state.open}
	        onClose={this.handleClose}
	      >
	        <div className="modal">
	          <h2 id="simple-modal-title">{this.state.title}</h2>
	          <p id="simple-modal-description">
	            Texto aleatória aqui dentro
	          </p>
	          <Button classes={{root: 'continue-button'}}>Continuar</Button>
	        </div>
	      </Modal>
		)
	}
}

const mapStateToProps = state => ({
	question: state.question,
	wordindex: state.wordindex,
	result: state.result,
	life: state.life
})

const mapDispatchToProps = dispatch => bindActionCreators(
	{	
		...wordIndexActions, 
		...questionActions, 
		...timeActions, 
		...resultActions,
		...lifeActions
	}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(ResultModal)