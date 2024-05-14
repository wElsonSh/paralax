window.addEventListener('scroll', e => {
	document.body.style.cssText = `--scrollTop: ${this.scrollY}px`
})
gsap.registerPlugin(ScrollSmoother, ScrollTrigger)
let smoother = ScrollSmoother.create({
	smooth: 2,
	effects: true,
})
