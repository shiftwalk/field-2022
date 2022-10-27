export const fade = {
	initial: { 
    opacity: 0,
  },
  enter: { 
    opacity: 1,
    transition: { duration: 0.55, ease: [0.33, 1, 0.68, 1] }
  },
	exit: {
    opacity: 0,
		transition: { duration: 0.55, ease: [0.33, 1, 0.68, 1]  }
	}
}

export const blur = {
	initial: { 
    filter: "blur(30px)",
  },
  enter: { 
    filter: "blur(0px)",
    transition: { duration: 0.55, ease: [0.33, 1, 0.68, 1] }
  },
	exit: {
    filter: "blur(30px)",
		transition: { duration: 0.55, ease: [0.33, 1, 0.68, 1] }
	}
}

export const blurScale = {
	initial: { 
    filter: "blur(200px)",
    scale: 0.8,
  },
  enter: { 
    filter: "blur(0px)",
    scale: 1,
    transition: { duration: 1, ease: [0.33, 1, 0.68, 1] }
  },
	exit: {
    filter: "blur(200px)",
    scale: 0.9,
		transition: { duration: 0.55, ease: [0.33, 1, 0.68, 1] }
	}
}

export const blurScaleLoaderRight = {
	initial: { 
    filter: "blur(0px)",
    scale: 1,
    y: 0,
    x: 0,
  },
  enter: { 
    filter: "blur(100px)",
    scale: 0.9,
    y: '120%',
    x: '120%',
    transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.66 }
  },
	exit: {
    filter: "blur(0px)",
    scale: 1,
    y: 0,
    x: 0,
		transition: { duration: 0.55, ease: [0.33, 1, 0.68, 1] }
	}
}

export const blurScaleLoaderLeft = {
	initial: { 
    filter: "blur(0px)",
    scale: 1,
    y: 0,
    x: 0,
  },
  enter: { 
    filter: "blur(100px)",
    scale: 0.9,
    y: '-120%',
    x: '-120%',
    transition: { duration: 1, ease: [0.33, 1, 0.68, 1], delay: 0.66 }
  },
	exit: {
    filter: "blur(0px)",
    scale: 1,
    y: 0,
    x: 0,
		transition: { duration: 0.55, ease: [0.33, 1, 0.68, 1] }
	}
}


export const blurLoaderBg = {
	initial: { opacity: 1 },
  enter: { 
    opacity: 0,
    transition: { duration: 0.55, ease: [0.33, 1, 0.68, 1], delay: 0.66 }
  },
	exit: {
    opacity: 1,
		transition: { duration: 0.55, ease: [0.33, 1, 0.68, 1] }
	}
}
export const blurLoaderBgGrain = {
	initial: { opacity: 1 },
  enter: { 
    opacity: 0,
    transition: { duration: 0.55, ease: [0.33, 1, 0.68, 1], delay: 0.66 }
  },
	exit: {
    opacity: 1,
		transition: { duration: 0.3, ease: [0.33, 1, 0.68, 1] }
	}
}


export const revealInLogoMove = {
	initial: { y: 0 },
  enter: { 
    y: '150%',
    transition: { duration: 0.33, ease: [0.33, 1, 0.68, 1], delay: 0.66 }
  },
	exit: {
    y: 0,
		transition: { duration: 0.33, ease: [0.33, 1, 0.68, 1], delay: 0.25 }
	}
}