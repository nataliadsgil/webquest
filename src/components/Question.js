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

import api from '../services/api'

class Question extends Component { 
	constructor(props) {
	  	super(props);
		
		this.state = {
			questions: [],
			color: '#555'
		}
	}

	getAllQuestions = async () => {
		const response = await api.get('/question/' + this.props.currentLevel.item._id)

		if(response.status == 200) {
			if(response.data){
				this.setState({questions: response.data})
				this.props.getQuestion(this.props.wordindex, response.data)
			}	
		}
	}

	componentDidMount() {
		console.log(this.props)

		this.getAllQuestions()

	}

	componentDidUpdate(prevProps, prevState) {
		if(this.props.result == "WIN" && this.state.color == "#555") {
			this.userWin()
		}

		if(this.props.result == "PLAY" && this.state.color == "#4EC059") {
			this.setState({color: "#555"})
		}

		if(this.props.result === "PLAY" && prevProps.result === "LOSE") {
			this.props.getQuestion(this.props.wordindex, this.state.questions)
		}
	}

	userWin = async () => {
		this.setState({color: "#4EC059"})
		
		setTimeout( async () => {
			await this.props.nextWord()
			this.props.getQuestion(this.props.wordindex, this.state.questions)
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
	          <h1>{this.props.currentLevel.item.mainQuestion}</h1>
	          <h1 style={{color: this.state.color}}>
	          	{this.props.question.text}
	          </h1>
	        </Grid>
		)
	}
}

const mapStateToProps = state => ({
	typedword: state.typedword,
	question: state.question,
	wordindex: state.wordindex,
	result: state.result,
	currentLevel: state.currentLevel
})

const mapDispatchToProps = dispatch => bindActionCreators(
	{
		...typedwordActions,
		...questionActions,
		...wordIndexActions,
		...resultActions }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Question)