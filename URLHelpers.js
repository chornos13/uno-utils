import OH from './ObjectHelpers'

let GET_CONFIGS_PARSE_IDVALUE = () => ({
	idKey: 'id',
	valueKey: 'value'
})

function parseObjToArrayIdValue(obj, options) {
	if(obj === undefined || obj === null) {
		return []
	}
	let curConfigs = OH.assign(GET_CONFIGS_PARSE_IDVALUE(), options)
	return Object.entries(obj).map((item) => {
		let [key, val] = item
		return {
			[curConfigs.idKey]: key, [curConfigs.valueKey]: val
		}
	})
}

function parseObjToQuery(obj) {
	if(obj === undefined || obj === null) {
		return ''
	}

	return Object.entries(obj).reduce((acc, curVal) => {
		let [key, val] = curVal
		if(OH.isObject(val)) {
			val = JSON.stringify(val)
		}
		acc.push(`${key}=${val}`)
		return acc
	}, []).join('&')
}

export default {
	parseObjToArrayIdValue,
	parseObjToQuery
}
