import { combineReducers } from 'redux'
import typedword from './typedword'
import questions from './questions'
import wordindex from './wordindex'

export default combineReducers({
	typedword,
	questions,
	wordindex
})