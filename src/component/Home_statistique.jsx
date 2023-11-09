import styled from "styled-components";
import { Container } from "../style/styes";
import line from "../assets/line_statistique.png";
import { motion, useInView } from "framer-motion";
import {statistics, lineAnim, fade, pageAnim } from "../style/animation";
import { useRef } from "react";

const Home_statistique = ()=>{
   
    return(
        <motion.div variants={pageAnim} initial="hidden" whileInView="show">
            <Line variants={lineAnim}>
                    <div className="circle"></div>
                    <div className="line"></div>
            </Line>
            <Statistique variants={statistics}>
                <Rows>
                    <div className="col">
                        <div className="num">
                            <bold>55K</bold>
                        </div>
                        <div className="categorie">
                            <p>our active <br /> user</p>
                        </div>
                        <Separator>
                            <img src={line} alt="line" />
                        </Separator>
                    </div>
                    <div className="col">
                        <div className="num">
                            <bold>55K</bold>
                        </div>
                        <div className="categorie">
                            <p>our active <br /> user</p>
                        </div>
                        <Separator>
                            <img src={line} alt="line" />
                        </Separator>
                    </div>
                    <div className="col">
                        <div className="num">
                            <bold>55K</bold>
                        </div>
                        <div className="categorie">
                            <p>our active <br /> user</p>
                        </div>
                        <Separator>
                            <img src={line} alt="line" />
                        </Separator>
                    </div>
                    
                </Rows>
            </Statistique>
        </motion.div>
    )
}

const Statistique = styled(Container)`
  background-color: #040c18;
  padding-top: 2em;
  padding-bottom: 2em;
  margin-bottom:5rem;
`;
const Line = styled(motion.div)`
  width: 100%;
  display:flex;
  align-items: center;
  justify-content: end;
  .line{
    height: 0.3rem;
    width: 60%;
    background-color: rgb(102,112,254);
  }
  .circle{
    background-color: rgb(102,112,254);
    width: .8rem;
    height: .8rem;
    border-radius: 50%;
  }
`;
const Rows = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    .col{
        display: flex;
        .num{
            bold{
                font-size: 2em;
                font-weight: bold;
                font-family:'Merriweather', serif;
            }
        }
        .categorie{
            margin : 0px 20px;
            p{
                color: #a7a6a6;
            }
        }
    }
`;
const Separator = styled.div`
    img{
        height : 100%;
    }
`;
export default Home_statistique;