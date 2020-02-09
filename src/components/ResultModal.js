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

const ContentModal = (props) => {

	if(props.data == "COMPLETE") {
		return (
			<div className="modal">
				<h1>:)</h1>
	          <h2 id="simple-modal-title">Parabéns!</h2>
	          <p id="simple-modal-description">
	            Muito bem! Você completou esta fase.
	          </p>

	          <h3>Vamos continuar?</h3>
	          <Button classes={{root: 'continue-button'}}>PRÓXIMA FASE</Button>
	        </div>
		)
	}
	
	if(props.data == "FAIL") {
		return (
			<div className="modal">
				<h1>:(</h1>
	          <h2 id="simple-modal-title">Ah não!</h2>
	          <p id="simple-modal-description">
	            Parece que você precisa praticar mais, mas tudo bem!
	          </p>

	          <h3>Não desista!</h3>
	          <Button classes={{root: 'continue-button'}}>TENTAR NOVAMENTE</Button>
	        </div>
		)
	}

	console.log("PROPS: ", props.data)

}	

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
			this.props.userFail()
		}

		if(this.props.wordindex === 12 && prevProps.wordindex === 11) {
			this.handleOpen()
			this.props.userComplete()
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
	        <ContentModal data={this.props.result}/>
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