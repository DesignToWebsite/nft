import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin : 0;
        padding: 0;
        box-sizing: border-box;
        font-weight: lighter;
    }
    body{
        color : white;
        overflow-x: hidden;
        background: #1b1b1b;
        font-family: 'Open Sans', sans-serif;
    }
    .logo{
        font-family: 'Flavors', cursive;
        font-weight:bold;
        font-size: 2em;
        color:rgb(100,110,255);
        letter-spacing:4px;
    }
    img{
        object-fit: cover;
    }
    ul{
        list-style: none;
    }
    a{
        text-decoration: none;
    }
    button{
        cursor: pointer;
        font-family: 'Merriweather', serif;

    }
    p{
        font-size: 18px;
    }
    h1{
        font-size: 4.2em;
        font-weight: bold;
        line-height: 1.4;
        margin-bottom: 2rem;
    }
    h1,h2,h3,h4,h5,h6{
        font-family: 'Merriweather', serif;
    }
    .home_page{
      background-color: #040c18;
      min-height: 100vh;
    }
    
    .mySwiper {
    width: 100%;
    padding-top: 50px;
    padding-bottom: 50px;
        .swiper-slide {
            background-position: center;
            background-size: cover;
            width: 250px;
            height: 350px;
            margin: 15px;
            border-radius: 5px;
            padding: 15px 20px;
            background: rgb(49,50,80);
            background: linear-gradient(151deg, rgba(49,50,80,.7) 0%, rgba(19,20,56,.8) 100%);
            img {
                display: block;
                width: 100%;
                height: 220px;
            }
        }
    }

    h2{
    font-size: 2.4em;
    padding : 2rem 0;
    font-weight:bold;
    }
    button {
        padding: 10px 30px;
        border-radius: 5px;
        border: none;
        margin-top: 2rem;
        background-color: #ff4820;
        color: white;
        font-size: 1.3em;
        font-weight: bold;
    }
`;
// purple : #2D1557
//blue : #1C25BA
//dark blue: #070836
//semi dark blue: #171C53
export default GlobalStyle;
