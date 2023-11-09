import styled from "styled-components";
import { Container } from "../style/styes"
import Clubs_carousel from "./Clubs_carousel"
import user from "../assets/user.jpg"
import bg_right from "../assets/dec_bottom.png"

import { motion,useInView } from "framer-motion";
import { useRef } from "react";
import { sectionAnim2 , fade} from "../style/animation";
import Carousel_create from "./Carousel_create";
const Home_create = ()=>{
    // const ref = useRef(null);
    // const isInView = useInView(ref)
    return(
        <motion.div id="feature"  variants={sectionAnim2}  initial="hidden"  whileInView="show">
            <Create_club>
                <Decoration>
                    <img src={bg_right} alt="" />
                </Decoration>
                
                <div className="description">
                    <h2>Make Your NFTs Artwork Now!</h2>
                    <p>
                        Recusandae voluptatem hic reprehenderit sint illum quia, ratione tenetur amet voluptas fugit distinctio natus magni autem blanditiis, nulla reiciendis quaerat asperiores vel!
                    </p>
                    <p>
                        Lorem ipsum, dolor sit amet consectetur uptas excepturi unde totam laboriosam molestiae dolorum. Officiis?
                    </p>
                    <motion.button variants={fade} whileHover={{scale:1.05}}>Create Now</motion.button>
                </div>
                <div className="profile_example">
                    <div className="name">
                        <div className="image">
                            <img src={user} alt="" />
                        </div>
                        <div className="info">
                            <h3>Cameron Williamson</h3>
                            <p>Artwork : 10.5k</p>
                        </div>
                    </div>
                    <div className="statistics">
                        <div className="item">
                            <p>Value salary</p>
                            <h3>301M+</h3>
                        </div>
                        <div className="item">
                            <p>Ranking</p>
                            <h3>$1.1M+</h3>
                        </div>
                        <div className="item">
                            <p>Followers</p>
                            <h3>4.4M+</h3>
                        </div>
                    </div>
                    <Carousel_create />
                </div>
                <Decoration_l>
                    <img src={bg_right} alt="" />
                </Decoration_l>
            </Create_club>
        </motion.div>
    )
}
const Create_club = styled(Container)`
    position: relative;
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 2em;
    margin : 2em 0;
    @media screen and (max-width:995px){
        grid-template-columns:1fr;
    }
    .description{
        z-index: 6;
        /* background-color:red; */
        width : 100%;
        p{
            width: 90%;
            padding: 10px 0;
            font-weight:normal;
        }
    }
    .profile_example{
        z-index: 6;
        background-color: rgba(147, 149, 215, 0.149);
        border-radius: 5px;
        padding: 2em  3rem;
        /* background-color:blue; */
        width:100%;
        height:auto;
        overflow-x: hidden;
        /* margin:auto; */
        p{
            font-size: 14px;
            color: rgba(251, 251, 251, 0.62);
        }
        .name{
            display : flex;
            margin-bottom: 20px;
            .image{
                img{
                    width : 50px;
                    height:50px;
                    border-radius: 50%;
                }
            }
            .info{
                margin-left: 15px;
                h3{
                    font-size: 15px;
                    font-weight: lighter;
                    padding-bottom: 5px;
                }
                
            }
        }
        .statistics{
            display:flex;
            justify-content: space-between;
            text-align:center;
            .item{
                h3{
                    padding: 10px 0;
                }
            }
        }
        .mySwiper {
            /* max-width:500px; */
            padding:10px 0;
            .swiper-slide {
                width: 100px;
                height: auto;
                margin: 10px;
                padding:10px 5px;
               img {
                    height: 90px;
                }
                .content{
                    padding: 5px 0;
                    h3{
                        font-size: 7px;
                        margin-bottom: 5px;
                    }
                    .info{
                        padding-bottom: 5px;
                        p{
                            font-size: 5px;
                            ion-icon{
                                padding-right: 2px;
                            }
                        }
                    }
                }
            }
        }
    }
    `
;
const Decoration = styled.div`
    z-index:1;
    position:absolute;
    right : 0;
    width: 800px;
`;

const Decoration_l = styled.div`
    z-index:1;
    max-height: 50rem;
    position:absolute;
    /* width: 700px; */
    /* top:0;
    bottom:-5px; */
    top: 2em;
    transform:rotate(180deg);

   img{
    height : 100%;
   }
`;
export default Home_create;