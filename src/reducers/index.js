import { combineReducers } from 'redux'
import typedword from './typedword'
import question from './question'
import wordindex from './wordindex'
import result from './result'
import time from './time'
import modal from './modal'

export default combineReducers({
	typedword,
	question,
	wordindex,
	result,
	time,
	modal
})