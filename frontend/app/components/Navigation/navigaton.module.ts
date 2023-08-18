import styled from "styled-components";

export const NavigatonModule = styled.nav`
  position: absolute;
  width: 100vw;
  height: 100dvh;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  z-index: 200;
  bottom: 20px;
  pointer-events: none;
 
  .links{
    pointer-events: auto;
    display: flex;
    gap: 13px;
    a{
      max-width: 43px;
      width: 100%;
      height: 43px;
      border-radius: 30px;
      background: #FFF;
      box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.30);
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      padding: 0 23px;
      *{
        flex-shrink: 0;
        transition: all .2s ease;
      }
      p{
        opacity: 0;
        max-width: 100%;
        overflow: hidden;
        color: #13902C;
        text-align: center;
        leading-trim: both;
        text-edge: cap;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }
      &.active{
        max-width: 100%;
        background-color: #13902C;
        //padding: 0 21px;
        svg *{
          fill: white;
        }
        p{
          opacity: 1;
          margin-left: 8px;
          width: auto;
          color: white !important;
        }
      }
    }
  }
 
`