import styled from "styled-components";

export const MenuModule = styled.div`
  position: absolute;
  width: 100%;
  height: 100dvh;
  user-select: none;
  pointer-events: none;
  z-index: 1;
  .button {
    border-radius: 100px;
    filter: drop-shadow(0px 4px 25px rgba(0, 0, 0, 0.05));
    pointer-events: auto;
    position: absolute;
    top: 52px;
    right: 27px;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background-color .2s ease;
    svg{
      transition: background-color .2s ease;
    }
    &.active{
      background-color: #13902C;
      svg *{
        stroke: white;
      }
    }
  }
  .menu{
    position: absolute;
    width: 100%;
    height: 100dvh;
    user-select: none;
    pointer-events: none;
    .menu-panel{
      position: absolute;
      pointer-events: none;
      top: 100px;
      right: 27px;
      opacity: 0;
      transform: translateY(60%);
      user-select: none;
      transition: all .2s ease;
      border-radius: 12px 5px 12px 12px;
      background-color: #FFF;
      filter: drop-shadow(0px 4px 25px rgba(0, 0, 0, 0.05));
      &.show{
        pointer-events: auto;
        user-select: auto;
        opacity: 1;
        transform: translateY(0);
      }
      ul{
        display: flex;
        flex-direction: column;
        padding: 10px 0;
        li{
          padding: 10px 22px;
          display:  flex;
          align-items: center;

          p{
            padding-left: 10px;
            color: #666;
            leading-trim: both;
            text-edge: cap;
            font-size: 14px;
            font-style: normal;
            font-weight: 500;
            line-height: 100%; /* 14px */
            letter-spacing: -0.4px;
          }
        }
      }
    }
    
  }
  .layout{
    width: 100%;
    height: 100dvh;
    position: absolute;
    pointer-events: auto;
    top: 0;
    left: 0;
    z-index: 1;
    &.hidden{
      pointer-events: none;
    }
    .panel{
      z-index: 2;
    }
  }
  .panel{
    
  }
`