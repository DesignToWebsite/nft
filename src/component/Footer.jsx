import styled from "styled-components";
import { Container } from "../style/styes";
import discord from "../assets/discord.png";
import twitter from "../assets/twitter.png"
import telegram from "../assets/telegram.png";
import github from "../assets/github.png";
import { motion } from "framer-motion";
import { fade, footerLine, pageAnim } from "../style/animation";
const Footer = ()=>{
    return(
        <Footer_style variants={pageAnim} initial="hidden" whileInView="show">
            <Line variants={footerLine}/>
            <motion.div variants={fade}  className="row">
                <div className="col">
                    <h2 className="logo">NFT</h2>
                    <p>Copy Right project | All Rights reserves</p>
                </div>
                <div className="col">
                    <ul>
                        <li>
                            <a href="#"><img src={discord} alt="" /></a>
                        </li>
                        <li>
                            <a href="#"><img src={telegram} alt="" /></a>
                        </li>
                        <li>
                            <a href="#"><img src={twitter} alt="" /></a>
                        </li>
                        <li>
                            <a href="#"><img src={github} alt="" /></a>
                        </li>
                    </ul>
                </div>
                <div className="col term">
                    <p>Terms and Conditions</p>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing.</p>
                </div>
            </motion.div>
        </Footer_style>
    )
}

const Footer_style = styled(Container)`
    background: #040c18;
    padding-bottom: 5rem;
    padding-top:2rem;
    h2{
        padding-bottom: 10px;
    }
    .row{
        display:grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap:1em;
        align-items: center;
        @media screen and (max-width:995px){
            grid-template-columns:1fr 1fr;
        }
        .col{
            @media screen and (max-width:995px){
                padding-bottom : 2rem;
            }
            p{
                opacity: .7;
                @media screen and (max-width:995px){
                    font-size:15px;
                }
            }
            &.term{
                p{
                    padding-bottom: 15px;
                }
                @media screen and (max-width:995px){
                    P{
                        padding-bottom:5px;
                    }
                }
                
            }
            ul{
                display:flex;
                align-items:center;
                justify-content:center;
                @media screen and (max-width:995px){
                    align-items:baseline;
                    justify-content:baseline;
                }
                img{
                    width:45px;
                    height:45px;
                    border-radius:50%;
                    padding:5px;
                    background-color:rgb(58, 59, 88);
                    margin-right : 10px;
                    border : 4px solid #040c184d;
                }
            }
        }
    }
`;
const Line = styled(motion.div)`
    height : 2px;
    background-color: rgba(129, 129, 129, 0.341);
    margin : 2em 0;
`;
 export default Footer;