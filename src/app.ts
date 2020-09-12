const canvas = document.getElementById('root') as HTMLCanvasElement
const ctx = canvas.getContext('2d')

const hsl = {
	l: 0,
	next() {
		this.l = (this.l + 1) % 360
		return `hsla(${this.l}, 25%, 50%, 1)`
	}
}

window.addEventListener('resize', resizeCanvas, false);
resizeCanvas()
render()

function render() {
	ctx.strokeStyle = 'blue';
	ctx.lineWidth = '5';
	ctx.strokeRect(0, 0, window.innerWidth, window.innerHeight);
	render()
}

function resizeCanvas() {
	canvas.width = window.innerWidth
	canvas.height = window.innerHeight
}
