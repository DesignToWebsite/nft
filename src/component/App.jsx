import Nav_bar from './Nav_bar'
import Home_header from './Home_header'
import GlobalStyle from "../style/GlobalStyle"
import Home_statistique from './Home_statistique'
import Home_nft from './Home_nft'
import Home_create from './Home_create'
import Home_subscribe from './Home_subscribe'
import Footer from './Footer'
import {motion} from "framer-motion"
import { pageAnim } from '../style/animation'
import styled from 'styled-components'
function App() {

  return (
    <>
    <GlobalStyle />
    <motion.div className="home_page" exit='exit' variants={pageAnim} initial="hidden" animate="show">
      <Nav_bar />
      <Home_header />
      <Home_statistique />
      <ContentC>
        <Home_create />
        <Home_nft />
      </ContentC>
      <Home_subscribe />
    </motion.div>
     <Footer />
    </>
  )
}
const ContentC = styled.div`
 
        display:flex;
        flex-direction:column-reverse;
`
export default App
