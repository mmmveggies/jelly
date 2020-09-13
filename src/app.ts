import { render } from "./render"

export const canvas = document.getElementById('root') as HTMLCanvasElement
export const ctx = canvas.getContext('2d')

window.addEventListener('resize', resizeCanvas, false)
resizeCanvas()
engine(render)

function engine(
	draw: (time: number, frame: number) => void
) {
	let frame = 0
	function step(time: number) {
		draw(time, frame)
		frame += 1
		requestAnimationFrame(step)
	}
	step(0)
}

function resizeCanvas() {
	canvas.width = window.innerWidth
	canvas.height = window.innerHeight
}
