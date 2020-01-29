import React, { Component } from 'react'
import { 
  TextField,
  Grid
 } from '@material-ui/core/';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as typedwordActions from '../actions/typedword'
import * as questionsActions from '../actions/questions'
import * as wordindexActions from '../actions/wordindex'

class TypedWord extends Component {

	constructor(props) {
	  super(props);
	
	 console.log(props)
	}
	
	state = {
		arrayLetter: [],
		word: ''
	}

	updateWord = (word) => {
	    if(word.split("").length <= 8){
	      this.setState({word: word})
	      this.setState({arrayLetter: word.split("")})

	      this.props.typeWord(word)
	    }
  	}

	render(){
		return(
			<>
			<Grid container item md={12} justify="center">
			<div className="container-word">
	            {this.state.arrayLetter.map(letter => (
	              <div className="letter">{letter}</div>
	            ))}
	        </div>
	        </Grid>

	        <TextField 
          value={this.state.word}
          onChange={(e) => this.updateWord(e.target.value)}></TextField>
          </>
		)
	}
}

const mapStateToProps = state => ({
	questions: state.questions,
	wordindex: state.wordindex
})

const mapDispatchToProps = dispatch => bindActionCreators(
{
	...typedwordActions,
	...questionsActions
}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(TypedWord)