import { Async } from 'redux-tools/types'
import { generateActionsAndTypes } from 'redux-tools'

const { actions, types } = generateActionsAndTypes('user', [new Async('SAVE')])

console.log(actions)
/*
{
	saveRequest: (payload) => ({ payload, type: 'user/SAVE_REQUEST' }),
	saveSuccess: (payload) => ({ payload, type: 'user/SAVE_SUCCESS' }),
	saveFailure: (payload) => ({ payload, type: 'user/SAVE_FAILURE' }),
}
*/

console.log(types)
/*
types: {
	SAVE_REQUEST: 'user/SAVE_REQUEST',
	SAVE_SUCCESS: 'user/SAVE_SUCCESS',
	SAVE_FAILURE: 'user/SAVE_FAILURE',
}
*/

export default {
  actions,
  types
}

// https://github.com/Prefinem/redux-tools#getting-started
