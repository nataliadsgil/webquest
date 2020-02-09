import React, { Component } from 'react'
import { 
  Grid
 } from '@material-ui/core/';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as typedwordActions from '../actions/typedword'
import * as questionActions from '../actions/question'
import * as wordIndexActions from '../actions/wordindex'
import * as resultActions from '../actions/result'

class Question extends Component { 
	constructor(props) {
	  	super(props);
		this.props.getQuestion(this.props.wordindex)
	}

	getQuestion = () => {
		return this.props.getQuestion(this.props.wordindex)
	}

	componentDidUpdate(prevProps, prevState) {
		if(this.props.result == "WIN" && this.state.color == "#555") {
			this.userWin()
		}

		if(this.props.result == "PLAY" && this.state.color == "#4EC059") {
			this.setState({color: "#555"})
		}
	}

	userWin = async () => {
		this.setState({color: "#4EC059"})
		
		setTimeout( async () => {
			await this.props.nextWord()
			this.props.getQuestion(this.props.wordindex)
		}, 1000)
	}

	state = {
		questWords: [
		    {word: "red", translate: "vermelho"},
		    {word: "green", translate: "verde"},
		    {word: "blue", translate: "azul"},
		    {word: "yellow", translate: "amarelo"},
		    {word: "purple", translate: "roxo"},
		    {word: "gray", translate: "cinza"},
		    {word: "orange", translate: "laranja"},
		    {word: "pink", translate: "rosa"},
		    {word: "brown", translate: "marrom"},
		    {word: "black", translate: "preto"},
		    {word: "white", translate: "branco"},
		    {word: "cian", translate: "ciano"}
		],
		index: 0,
		color: '#555'
	}

	render(){
		return(
			<Grid container item md={12} justify="center" direction="column">
	          <h1>Traduza:</h1>
	          <h1 style={{color: this.state.color}}>
	          	{this.props.question.word}
	          </h1>
	        </Grid>
		)
	}
}

const mapStateToProps = state => ({
	typedword: state.typedword,
	question: state.question,
	wordindex: state.wordindex,
	result: state.result
})

const mapDispatchToProps = dispatch => bindActionCreators(
	{
		...typedwordActions,
		...questionActions,
		...wordIndexActions,
		...resultActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Question)