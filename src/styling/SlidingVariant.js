const SlideVariant ={
    initial: {
        x: '-100vw',
        transition:{
            duration: 1,
            bounce: 0
        }
    },
    initial2:{
        x: '100vw',
        transition:{
            duration: 1,
            bounce: 0
        }
    },
    animate:{
        x: 0,
        transition:{
            bounce: 0,
            duration: 1
        }
    },
    out:{
        x: '100vw',
        transition:{
            duration: 1,
            bounce: 0
        }
    },
    out2:{
        x:'-100vw',
        transition:{
            duration: 1,
            bounce: 0
        }
    }
}

export default SlideVariant;