import { useAnimation } from "framer-motion";


export const pageAnim = {
    hidden:{
        opacity:0,
    },
    show:{
        opacity:1,
        transition:{
            duration: 0.5,
            when:"beforeChildren",
            staggerChildren: 0.25,
        }
    },
    exit:{
        opacity:0,
        transition:{
            duration:.75,
        }
    }
}

export const titleAnim = {
    hidden : {
        y : 200,
    },
    show : {
        y: 0,
        transition:{
            duration:.75,
            transition:'easeOut',
            when:"beforeChildren",
        }
    }
}

export const fade = {
    hidden:{
        opacity:0,
    },
    show:{
        opacity:1, 
        transition:{transition:'easeOut', duration:0.75}
    }
}


export const imagesHeader = {
    hidden:{
        x:1000,
        scale:1.5,
    },
    show:{
        x:0,
        scale:1,
        transition:{transition:'easeInOut', duration:.75}
    }
}

export const lineAnim = {
    hidden:{
        x:1500,
    },
    show:{
        x:0,
        transition:{transition:'ease', duration:.75}

    }
}

export const statistics = {
    hidden:{
        opacity:0,
        y:'100px',
    },
    show:{
        opacity:1, 
        y:'0px',
        transition:{transition:'ease', duration:.75}
    }
}

export const sectionAnim = {
    hidden:{
        y: 400,
        opacity:0,
        scale:1.5,
    },
    show:{
        y:0,
        opacity:1,
        scale:1,
        transition:{transition:'easeInOut', duration:.75}

    }
}

export const sectionAnim2 = {
    hidden:{
        y: 400,
        opacity:0,
    },
    show:{
        y:0,
        opacity:1,
        transition:{transition:'easeInOut', duration:.75}

    }
}

export const footerLine = {
    hidden:{
        width:'0'
    },
    show:{
        width:'100%',
        transition:{transition:'easeInOut', duration:.75}
    }
}