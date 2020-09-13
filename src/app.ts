import { render } from "./render"

export const canvas = document.getElementById('root') as HTMLCanvasElement
export const ctx = canvas.getContext('2d')

window.addEventListener('resize', resizeCanvas, false)
resizeCanvas()
engine(render)

function engine(
	frame: (time: number) => void
) {
	function step(time: number) {
		frame(time)
		requestAnimationFrame(step)
	}
	step(0)
}

function resizeCanvas() {
	canvas.width = window.innerWidth
	canvas.height = window.innerHeight
}
