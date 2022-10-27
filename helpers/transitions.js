export const fade = {
	initial: { 
    opacity: 0,
  },
  enter: { 
    opacity: 1,
    transition: { duration: 0.75, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    opacity: 0,
		transition: { duration: 0.75, ease: [0.83, 0, 0.17, 1]  }
	}
}

export const blur = {
	initial: { 
    opacity: 0,
    filter: "blur(55px)",
  },
  enter: { 
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 1, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    opacity: 0,
    filter: "blur(55px)",
		transition: { duration: 0.75, ease: [0.83, 0, 0.17, 1] }
	}
}

export const blurScale = {
	initial: { 
    scale: 1.25
  },
  enter: { 
    scale: 1,
    transition: { duration: 2, delay: -2 }
  },
	exit: {
    scale: 1.25,
		transition: { duration: 1 }
	}
}

export const reveal = {
	initial: { y: '100%' },
  enter: { 
    y: 0,
    transition: { duration: 0.65, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    y: '100%',
		transition: { duration: 0.55, ease: [0.83, 0, 0.17, 1] }
	}
}