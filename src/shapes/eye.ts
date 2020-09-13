import { Mouse } from "../util/mouse"
import { HSLA } from "../util/color"

export class Eye {
	x!: number
	y!: number
	r!: number

	pupil?: Eye

	constructor(props?: any) {
		Object.assign(this, props)

		if (this.r > 1) {
			this.pupil = new Eye({
				x: this.x,
				y: this.y,
				r: this.r * 0.8,
			})
		}
	}

	look(mouse: Mouse) {
		if (!this.pupil) {
			return
		}

		const dx = mouse.curr?.clientX - this.x
		const dy = mouse.curr?.clientY - this.y

		const distance = Math.sqrt(dx ** 2 + dy ** 2)
		const limit = this.r - this.pupil.r
		const r = Math.min(distance, limit)

		const theta = Math.atan2(dy, dx)
		this.pupil.x = this.x + r * Math.cos(theta)
		this.pupil.y = this.y + r * Math.sin(theta)

		this.pupil.look(mouse)
	}

	draw(
		ctx: CanvasRenderingContext2D,
		color: HSLA
	) {
		ctx.fillStyle = color.rotate(10)
		ctx.beginPath()
		ctx.arc(this.x, this.y, this.r, 0, Math.PI * 2, false)
		ctx.fill()

		this.pupil?.draw(ctx, color)
	}
}