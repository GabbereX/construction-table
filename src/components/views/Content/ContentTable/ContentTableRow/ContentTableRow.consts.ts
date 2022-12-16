import { FieldName } from '../../../../../consts/enums.consts'

export const fields = [
	FieldName.ROW_NAME,
	FieldName.SALARY,
	FieldName.EQUIPMENTCOSTS,
	FieldName.OVERHEADS,
	FieldName.ESTIMATED_PROFIT
]

export const missingKeys = {
	'machineOperatorSalary': 0,
	'mainCosts': 0,
	'materials': 0,
	'mimExploitation': 0,
	'parentId': null,
	'supportCosts': 0
}
