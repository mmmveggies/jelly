import { Mouse } from "../util/mouse"

export class Eye {
	x!: number
	y!: number
	r!: number

	pupil?: Eye

	constructor(props?: any, children = 4) {
		Object.assign(this, props)

		if (children >= 0) {
			this.pupil = new Eye({
				x: this.x,
				y: this.y,
				r: this.r / 3,
			}, children - 1)
		}
	}

	look(mouse: Mouse) {
		if (!this.pupil) {
			return
		}

		const dx = (mouse.curr?.clientX - this.x)
		const dy = (mouse.curr?.clientY - this.y)

		const limit = this.r - this.pupil.r
		const scale = Math.sqrt(dx ** 2 + dy ** 2)
		const theta = Math.atan2(dy, dx)

		const r = Math.min(scale, limit)

		this.pupil.x = this.x + r * Math.cos(theta)
		this.pupil.y = this.y + r * Math.sin(theta)

		this.pupil.look(mouse)
	}
}