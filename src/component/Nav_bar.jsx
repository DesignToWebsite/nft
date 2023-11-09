import styled from "styled-components";
import search from "../assets/search.png"
import { Container } from "../style/styes";
import {fade} from "../style/animation"
const Nav_bar = ()=>{
    return(
        <NavStyle variants={fade} initial="hidden"  animate="show">
            <div className="logo">
                NFT
            </div>
            <div className="search">
                <input type="search" name="search" id="search" />
                <img className="search_img" src={search} alt="search" />
            </div>
            <div className="nav">
                <ul>
                    <li><a href="#home">Home</a></li>
                    <li><a href="#collection">Collection</a></li>
                    <li><a href="#feature">Feature</a></li>
                    <li><a href="#">Help</a></li>
                    <li><a href="#">FAQ</a></li>
                </ul>
            </div>
        </NavStyle>
    )
}

const NavStyle = styled(Container)`
    position:relative;
    width:100%;
    color:white;
    display:flex;
    align-items:center;
    justify-content: space-between;
    z-index:10;
    padding-top: 2em;
    /* background :red; */
    .logo{

    }
    .search{
        display:flex;
        justify-content: space-between;
        border-radius : 50px;
        padding: 10px 25px;
        background-color: rgba(39, 40, 96, 0.716);
        width: 300px;
        @media screen and (max-width:995px){
            display:none;
        }
        img.search_img{
            width : 20px;
            opacity:.7;
        }
        input{
            background:transparent;
            border: none;
            width: 80%;
            -webkit-appearance: none;
            -moz-appearance: none;
            appearance: none;
            outline:none;
        }
    }

    .nav{
        ul{
            display:flex;
            li{
                margin-right: 15px;
                a{
                    color:white;
                    &:hover{
                        opacity: .7;
                    }
                }
            }
        }
        
    }
`;

export default Nav_bar;