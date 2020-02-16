import React, { Component } from 'react'
import {
	Modal,
	Button
} from '@material-ui/core'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as resultActions from '../actions/result'

class InitModal extends Component {
	
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	open: true
	  };

	  console.log(props)
	}

	componentDidMount() {
		console.log(this.props)
	}

	handleOpen = () => {
	    this.setState({open: true})
	};

	handleClose = () => {
		this.setState({open: false})
	};

	initGame = () => {
		this.handleClose()
		this.props.userInit()
	}

	render() {
		return (
			<Modal
	        aria-labelledby="simple-modal-title"
	        aria-describedby="simple-modal-description"
	        open={this.state.open}
	        onClose={this.handleClose}
	      >
	        <div className="modal">
	          <h2 id="simple-modal-title">{this.props.currentLevel.name}</h2>
	          <h3>Vamos Começar?</h3>
	          <p id="simple-modal-description">
	            Este nível contém {this.props.currentLevel.qtdQuest} perguntas, responda-as antes do temporizador terminar.
	          </p>
	          <Button classes={{root: 'continue-button'}} onClick={this.initGame}>Ok, Entendi!</Button>
	        </div>
	      </Modal>
		)
	}
}

const mapStateToProps = state => ({
	result: state.result,
	currentLevel: state.currentLevel
})

const mapDispatchToProps = dispatch => bindActionCreators({
	...resultActions
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(InitModal)