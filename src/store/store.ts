import { combineReducers, configureStore } from '@reduxjs/toolkit'
import theeRows, { getTheeRows, theeRowsActions } from './treeRows/treeRows'

export const actionsRoot = {
	getTheeRows,
	...theeRowsActions
}

export const rootReducer = combineReducers({
	theeRows
})

export const setupStore = () => {
	return configureStore({
		reducer: rootReducer
	})
}

export const store = setupStore()


