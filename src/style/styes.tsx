import {styled} from 'styled-components'
import {motion} from "framer-motion"


export const Container = styled(motion.div)`
    padding: 1rem 8.8rem;
    @media screen and (max-width:1266px){
        padding : 1rem 3rem;
    }
    /* @media screen and (max-width: 1297) */
    @media screen and (max-width:995px){
        padding : 1rem 1.3rem;
    }
`