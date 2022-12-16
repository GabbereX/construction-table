import { Nullable } from '../../../../../types/types'
import { FieldName } from '../../../../../consts/enums.consts'

export interface IValuesRow {
	[FieldName.ROW_NAME]: Nullable<string>,
	[FieldName.SALARY]: Nullable<number>,
	[FieldName.EQUIPMENTCOSTS]: Nullable<number>,
	[FieldName.OVERHEADS]: Nullable<number>,
	[FieldName.ESTIMATED_PROFIT]: Nullable<number>
}
