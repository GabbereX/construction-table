import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import axios, { isAxiosError } from 'axios'

import { baseURL, eID } from '../../consts/api.consts'

import { ITreeRows, ITreeRowsState } from './treeRows.types'
import { RootState } from '../store.types'

const initialState: ITreeRowsState = {
	data: [],
	isLoading: false,
	error: ''
}

export const getTheeRows = createAsyncThunk(
	'get/theeRows',
	async (_, { rejectWithValue }) => {
		try {
			const response = await axios.get<ITreeRows[]>(
				`${ baseURL }/v1/outlay-rows/entity/${ eID }/row/list`
			)

			return response.data
		} catch (err){
			if (isAxiosError(err))
				return rejectWithValue(err.message)
		}
	}
)

const theeRowsSlice = createSlice({
	name: 'treeRowsSlice',
	initialState,
	reducers: {},
	extraReducers: {
		[getTheeRows.pending.type]: state => {
			state.isLoading = true
		},
		[getTheeRows.fulfilled.type]: (state, action: PayloadAction<ITreeRows[]>) => {
			state.isLoading = false
			state.error = ''
			state.data = action.payload
		},
		[getTheeRows.rejected.type]: (state, action: PayloadAction<string>) => {
			state.isLoading = false
			state.error = action.payload
		}
	}
})

export const theeRowsActions = theeRowsSlice.actions
export const theeRowsState = (state: RootState) => state.theeRows
export default theeRowsSlice.reducer
