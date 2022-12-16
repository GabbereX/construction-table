import { Nullable } from '../../types/types'

export interface ITreeRowsState {
	data: ITreeRows[]
	isLoading: boolean
	error: string
}

export interface ITreeRows {
	child: Nullable<Array<ITreeRows>>
	equipmentCosts: number
	estimatedProfit: number
	id: number
	machineOperatorSalary: number
	mainCosts: number
	materials: number
	mimExploitation: number
	overheads: number
	rowName: string
	salary: number
	supportCosts: number
	total: number
}
