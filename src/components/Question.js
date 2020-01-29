import React, { Component } from 'react'
import { 
  Grid
 } from '@material-ui/core/';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import * as typedwordActions from '../actions/typedword'


class Question extends Component { 
	constructor(props) {
	  super(props);
		
		console.log(props)
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
	          	{this.state.questWords[this.state.index].word}
	          </h1>
	        </Grid>
		)
	}
}

const mapStateToProps = state => ({
	typedword: state.typedword,
	questions: state.questions
})

const mapDispatchToProps = dispatch => bindActionCreators(typedwordActions, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Question)