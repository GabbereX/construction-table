import { Nullable } from '../../../../../types/types'
import { FieldName, RowMode } from '../../../../../consts/enums.consts'
import { ITreeRows } from '../../../../../store/treeRows/treeRows.types'

export interface IContentTableRowProps {
	data?: ITreeRows
	rowMode?: RowMode
}

export interface IValuesRow {
	[FieldName.ROW_NAME]: Nullable<string>,
	[FieldName.SALARY]: Nullable<number>,
	[FieldName.EQUIPMENTCOSTS]: Nullable<number>,
	[FieldName.OVERHEADS]: Nullable<number>,
	[FieldName.ESTIMATED_PROFIT]: Nullable<number>
}
