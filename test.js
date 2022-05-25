/**
 * @param {function} fn
 * @param {number} delay
 */
function debounce (fn, delay) {
	let timer = null
	return function() {
		timer = setTimeout(() => {
			fn.apply(this)
		}, delay)
	}
}


