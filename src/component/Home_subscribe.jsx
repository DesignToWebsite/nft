import styled from "styled-components";
import { Container } from "../style/styes";

import star from "../assets/star.png";

import { sectionAnim2} from "../style/animation"

const Home_subscribe = ()=>{
    return(
        <Subscribe variants={sectionAnim2}  initial="hidden"  whileInView="show">
            <Content>
                <Deco_r>
                    <img src={star} alt="" />
                </Deco_r>
                <h2>Subscribe To Get Update</h2>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Beatae quae iste nisi ullam sit impedit eos. Et inventore suscipit nobis.</p>
                <form>
                    <input placeholder="Enter yout E-mail address for update" type="email" name="email" id="email" />
                    <button>Subscribe</button>
                </form>
                <Deco_l>
                    <img src={star} alt="" />
                </Deco_l>            </Content>

        </Subscribe>
    )
}

const Subscribe = styled(Container)`
    
`;
const Content = styled.div`
   margin : 2rem 0 ;
    background-color : #9395d725;
    border-radius: 5px;
    text-align : center;
    padding : 5em 0;
    position : relative;
    
    h2{
        padding:0;
        z-index: 5;
    }
    p{
        width: 70%;
        z-index: 5;
        margin : auto;
        padding : 3em 0;
    }
    form{
        z-index: 5;
        margin:auto;
        display: grid;
        grid-template-columns: 2fr 1fr;
        width : 70%;
        align-items : baseline;
        background-color: rgba(201, 201, 201, 0.117);
        padding : 15px 20px;
        border : 2px solid rgba(129, 129, 129, 0.341);
        border-radius: 5px;
        @media screen and (max-width:995px){
            display:flex;
            flex-direction:column;
        }
        input{
            padding : 10px 5px;
            border:none;
            background-color: transparent;
            @media screen and (max-width:995px){
                    width:100%;
                }
        }
        button{
            margin : 0;
            @media screen and (max-width:995px){
                font-size:15px;
                margin:auto;
            }
        }
    }

`
const Deco_r = styled.div`
    position : absolute;
    z-index: 1;
    left : 5em;
    top:3em;
    opacity: .5;
`;
const Deco_l = styled.div`
    position : absolute;
    right : 5em;
    top: 8em;
    z-index:1;
    opacity: .5;

`;
export default Home_subscribe;