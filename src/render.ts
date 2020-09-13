import { ctx } from './app'
import { HSLA } from './util/color'
import { mouse } from './util/mouse'
import { Eye } from './shapes/eye'

const hsla = new HSLA()

const pencils = new Image()
pencils.src = require('./images/pencils.png')

const PI2 = Math.PI * 2

export function render(time: number) {
	const {
		innerWidth: width,
		innerHeight: height,
	} = window

	const color = hsla.rotate()

	ctx.fillStyle = color
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

	eyes.forEach((eye) => {
		let curr = eye
		while (curr) {
			curr.look(mouse)
			ctx.fillStyle = hsla.rotate(180)
			circle(eye)
			ctx.fill()
			curr = eye.pupil
		}
	})

	// // right eye sclera
	// ctx.beginPath()
	// circle(right)
	// ctx.fillStyle = hsla.rotate(-180)
	// ctx.fill()


	// // right pupil
	// ctx.beginPath()
	// ctx.arc(rightPupil.x, rightPupil.y, pupil.r, 0, PI2, false)
	// ctx.fillStyle = hsla.rotate(-180)
	// ctx.fill()
}

function circle(eye: { x: number, y: number, r: number }) {
	ctx.beginPath()
	ctx.arc(eye.x, eye.y, eye.r, 0, PI2, false)
	ctx.fill()
}