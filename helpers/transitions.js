export const fade = {
	initial: { 
    opacity: 0,
  },
  enter: { 
    opacity: 1,
    transition: { duration: 0.55, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    opacity: 0,
		transition: { duration: 0.63, ease: [0.83, 0, 0.17, 1]  }
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
    transition: { duration: 0.75, ease: [0.83, 0, 0.17, 1] }
  },
	exit: {
    opacity: 0,
    filter: "blur(55px)",
		transition: { duration: 0.63, ease: [0.83, 0, 0.17, 1] }
	}
}

export const blurScale = {
	initial: { 
    filter: "blur(200px)",
    scale: 0.8
  },
  enter: { 
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 1.2, ease: [0.33, 1, 0.68, 1] }
  },
	exit: {
    filter: "blur(200px)",
    scale: 0.9,
		transition: { duration: 0.63, ease: [0.65, 0, 0.35, 1] }
	}
}