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
    filter: "blur(0px)",
    scale: 1,
		transition: { duration: 0 }
	}
}