import { useDispatch } from 'react-redux'
import { bindActionCreators } from '@reduxjs/toolkit'
import { actionsRoot } from '../../store/store'
import { AppDispatch } from '../../store/store.types'

export const useAppDispatch = () => {
	const dispatch = useDispatch<AppDispatch>()
	return bindActionCreators(actionsRoot, dispatch)
}
