function isObject(val) {
	if (val === null) { return false;}
	return ( (typeof val === 'function') || (typeof val === 'object') );
}

function isEmpty(obj) {
	for(var key in obj) {
		if(obj.hasOwnProperty(key))
			return false
	}
	return true
}

function clone(obj) {
	return Object.assign({}, obj)
}

function assign(target, source) {
	return Object.assign(target, source)
}

function isNullOrUndefined(val) {
	return val === null || val === undefined
}

function getValueByKey(obj, targets, valueIfNull = '') {
	if (isNullOrUndefined(obj)) {
		return valueIfNull
	}
	let targetSplit = targets.split('.')
	let value = null
	for (let target of targetSplit) {
		if (value) {
			value = value[target]
		}
		else {
			value = obj[target]
		}
		if (isNullOrUndefined(value)) {
			return valueIfNull
		}
	}
	return value
}

function setValueByKey(obj, targets, val) {
	if (isNullOrUndefined(obj)) {
		return false
	}
	if(!targets) {
		obj = val
		console.log(obj)
		return true
	}
	let targetSplit = targets.split('.')
	let value = null
	let setterValue = null
	for (let i = 0; i < targetSplit.length; i++) {
		let target = targetSplit[i]
		if (value) {
			setterValue = value
			value = value[target]
		}
		else {
			setterValue = obj
			value = obj[target]
		}
		if (isNullOrUndefined(value) && i !== targetSplit.length -1) {
			return false
		}
		if(i === targetSplit.length -1) {
			setterValue[target] = val
		}
	}
	return true
}

function getRawByKey(obj, targets) {
	if (isNullOrUndefined(obj)) {
		return obj
	}
	let targetSplit = targets.split('.')
	let value = null
	for (let target of targetSplit) {
		if (value) {
			value = value[target]
		}
		else {
			value = obj[target]
		}
		if (isNullOrUndefined(value)) {
			return value
		}
	}
	return value
}

const ObjectHelpers = {
	getValueByKey,
	getRawByKey,
	setValueByKey,
	isEmpty,
	isObject,
	clone,
	assign
}

module.exports = ObjectHelpers
