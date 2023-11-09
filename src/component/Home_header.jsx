import styled from "styled-components";
import img1 from "../assets/nft1.jpg";
import img2 from "../assets/nft2.jpg";
import img3 from "../assets/nft3.jpg";
import dec_top from "../assets/dec_top.png";
import dec_bottom from "../assets/dec_bottom.png";
import { Container } from "../style/styes";

import { motion } from "framer-motion";

import { titleAnim, pageAnim, fade,imagesHeader } from "../style/animation";

const Home_header = () => {
  
  return (
    <motion.div id="home" variants={pageAnim} initial="hidden"  whileInView="show">
      <Decoration_top>
        <img src={dec_top} alt="decoration bg" />
      </Decoration_top>
      <Header>
        <div className="row">
          <Description>
            <Hide>
              <motion.h1
                variants={titleAnim}>Create NFTs 
              </motion.h1>
            </Hide>
            <Hide>
              <motion.h1
                variants={titleAnim}>Artwork And Sell
              </motion.h1>
            </Hide>
            <motion.p variants={fade}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos velit
              illum voluptate. Vitae alias numquam recusandae delectus
              voluptates explicabo voluptas!
            </motion.p>
            <motion.button variants={fade} whileHover={{scale:1.05}} className="explore">Explore Now</motion.button>
          </Description>

          <Image>
            <div className="img_container">
              <motion.div variants={imagesHeader} className="img img1">
                <img src={img1} alt="image1" />
              </motion.div>
              <motion.div  variants={imagesHeader} className="img img2">
                <img src={img2} alt="image1" />
              </motion.div>
              <motion.div  variants={imagesHeader} className="img img3">
                <img src={img3} alt="image1" />
              </motion.div>
            </div>
          </Image>
        </div>
      </Header>

      <Decoration_bottom>
        <img src={dec_bottom} alt="decoration bg" />
      </Decoration_bottom>
    </motion.div>
  );
};

const Header = styled(Container)`
  /* background-color: #483285; */
  background-color: #040c18;
  position: relative;
  min-height: 100vh;
  padding-top: 6em;
  .row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    @media screen and (max-width:995px){
        grid-template-columns:1fr;
        align-items:center;
        justify-content:center;
    }
  }
  h1 {
    color: white;
    background: -webkit-linear-gradient(
      89.97deg,
      #ae67fa 1.56%,
      #f49867 103.42%
    );
    -webkit-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom:5px;
    margin-top:0px;
  }
  p {
    width: 90%;
    padding:2rem 0 1rem 0;
  }
  img {
    width: 100%;
  }
`;

const Description = styled.div`
position : relative;
  z-index: 10;
  @media screen and (max-width:995px){
    order: 2;
  }
  button {
    padding: 10px 30px;
    border-radius: 5px;
    border: none;
    /* margin-top: 2rem; */
    background-color: #ff4820;
    color: white;
    font-size: 1.5em;
    font-weight: bold;
  }
`;

const Image = styled.div`
  position:relative;
  /* padding-left: 2em; */
  z-index: 10;
  height: fit-content;
  padding-bottom:2rem;
  @media screen and (max-width:995px){
    min-height:30em;
    order: 1;
  }
  .img_container {
    position: relative;
    .img {
      width: 15em;
      height: 25em;
      position: absolute;
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        box-shadow: 5px 0px 0px 0px rgba(12, 10, 10, 0.1);
      }
      &.img1 {
        z-index: 3;
      }
      &.img2 {
        z-index: 2;
        width: 12em;
        height: 20em;
        left: 14em;
        top: 2.5em;
      }
      &.img3 {
        z-index: 1;
        width: 10em;
        height: 15em;
        left: 25em;
        top: 5em;
      }
    }
  }
`;
const Hide = styled.div`
    overflow: hidden;
`;
const Decoration_top = styled.div`
  position: absolute;
  z-index: 1;
  top: -5em;
`;

const Decoration_bottom = styled.div`
  position: absolute;
  right: 0em;
  top: -15em;
`;
export default Home_header;
