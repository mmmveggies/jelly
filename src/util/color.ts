
/**
 * A representation of the HSL color space https://hslpicker.com/
 */
export class HSLA {
	hue = 0
	saturation = '25%'
	luminosity = '50%'
	alpha = 1

	/**
	 * Rotate `this.hue` by `hueDelta` degrees and return the string value.
	 */
	rotate(hueDelta = 1) {
		const next = this.hue + hueDelta
		this.hue = Number.isSafeInteger(next) ? next : 0
		return this.toString()
	}

	/**
	 * Encode to something usable by style, canvas etc.
	 */
	toString() {
		const {
			hue: h,
			saturation: s,
			luminosity: l,
			alpha: a,
		} = this
		return `hsla(${[h, s, l, a].join()})`
	}
}