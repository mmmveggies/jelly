export class Mouse {
	prev?: MouseEvent
	curr?: MouseEvent

	down?: MouseEvent
	up?: MouseEvent

	get speeds() {
		return {
			dx: this.curr?.clientX - this.prev?.clientX,
			dy: this.curr?.clientX - this.prev?.clientX,
		}
	}

	constructor() {
		this.on()
	}

	on() {
		window.addEventListener('mousemove', this.onmousemove)
		window.addEventListener('mousedown', this.onmousedown)
		window.addEventListener('mouseup', this.onmouseup)
		window.addEventListener('touchmove', this.ontouchmove)
	}

	off() {
		window.removeEventListener('mousemove', this.onmousemove)
		window.removeEventListener('mousedown', this.onmousedown)
		window.removeEventListener('mouseup', this.onmouseup)
		window.removeEventListener('touchmove', this.ontouchmove)
	}

	private onmousemove = (event: MouseEvent) => {
		this.prev = this.curr
		this.curr = event
	}
	private onmousedown = (event: MouseEvent) => {
		this.down = event
		this.up = undefined
	}
	private onmouseup = (event: MouseEvent) => {
		this.up = event
	}
	private ontouchmove = (event: TouchEvent) => {
		this.prev = this.curr
		this.curr = event.touches[0] as any
	}
}

export const mouse = new Mouse()