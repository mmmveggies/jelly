import { ctx } from './app'
import { HSLA } from './util/color'
import { mouse } from './util/mouse'
import { Eye } from './shapes/eye'

const hsla = new HSLA()

export function render(
	time: number,
	frame: number
) {
	const {
		innerWidth: width,
		innerHeight: height,
	} = window

	hsla.hue = frame

	ctx.fillStyle = hsla.toString()
	ctx.fillRect(0, 0, width, height)

	const eyes = [
		new Eye({
			x: width / 3,
			y: height / 2,
			r: height / 4,
		}),
		new Eye({
			x: 2 * width / 3,
			y: height / 2,
			r: height / 4,
		}),
	]

	eyes.forEach((eye, i) => {
		const color = new HSLA()
		color.rotate(i * 60 + frame)
		eye.look(mouse)
		eye.draw(ctx, color)
	})
}