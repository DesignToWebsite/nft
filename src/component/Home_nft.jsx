import styled from "styled-components";
import { Container } from "../style/styes";
import Clubs_carousel from "./Clubs_carousel";
import { motion, useInView } from "framer-motion";
import {pageAnim, sectionAnim} from "../style/animation"
import { useRef } from "react";
const Home_nft = () => {
  // const {ref, isInView} = useInView({
  //   threshold: 0.3, 
  // });
  const ref = useRef(null);
  const isInView = useInView(ref, {
    margin: "0px 100px -50px 0px"
  })
 
  return (
    <motion.div style={{overflow:"hidden"}} ref={ref} variants={pageAnim} id="collection" initial="hidden"  animate={isInView ?"show" : "hidden"}>
      <Nfts variants={sectionAnim}>
        <Description>
          <h2>Our Popular NFT COLLECTION</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident
            cupiditate quasi maxime molestias ab vero.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae, expedita.
          </p>
        </Description>
        <Nft_collection>
          <Club_card>
            <div className="img"></div>
            <div className="info"></div>
          </Club_card>
        </Nft_collection>

          <Clubs_carousel />
      </Nfts>
    </motion.div>
  );
};

const Nfts= styled(Container)`
  z-index: 10;
`;
const Description = styled.div`
  text-align:center;
  
  p{
    width: 80%;
    margin:auto;
  }
`;
const Nft_collection = styled.div``;
const Club_card = styled.div``;

export default Home_nft;
