'use client'
import styled from "styled-components";

export const TrashCodeRedeemModule = styled.div`
  width: 100%;
  height: 100dvh;
  background-color: #fff;
  z-index: 2;

  .mobile-wrapper {
    overflow: hidden;

    svg.logo {
      margin-top: 2.261569416499dvh;
      width: 100%;
    }

    h1 {
      padding-top: 4.427vh;
      color: #0D0D0D;
      font-size: 32px;
      font-style: normal;
      font-weight: 500;
      line-height: 30px; /* 93.75% */
      letter-spacing: -0.4px;
    }

    p.description {
      padding-top: 1.509vh;
      color: #9BA9A6;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 16.8px; /* 105% */
      letter-spacing: -0.4px;
    }

    textarea {
      margin-top: 1.149vh;
      width: 100%;
      height: 116px;
      padding: 20px 17px;
      border-radius: 20px;
      border: 1px solid rgba(0, 0, 0, 0.05);
      background: #FAFBFB;
      box-shadow: 0 4px 25px 0 rgba(0, 0, 0, 0.03) inset;
      outline-color: #13902C;
      color: #0D0D0D;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 19.2px; /* 120% */
      letter-spacing: -0.4px;
      font-family: "SB Sans Display";

      &::placeholder {
        color: rgba(0, 0, 0, 0.20);
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 19.2px; /* 137.143% */
        letter-spacing: -0.4px;
        font-family: "SB Sans Display";
      }
    }
    .images-container{
      overflow-x: auto;
      display: flex;
      img{
        width: 109px;
        height: 96px;
        flex-shrink: 0;
        border-radius: 15px;
        object-fit: cover;
      }
    }
    .buttons {
      display: flex;
      flex-direction: column;
      margin-top: 5.030vh;
    width: 100%;
      .button-upload {
        position: relative;
        width: 100%;
        display: flex;
        flex-direction: column;

        input {
          position: absolute;
          top: 0;
          opacity: 0;
          user-select: none;
          pointer-events: none;
        }

        label {
          padding: 12px 0;
          text-align: center;
          width: 100%;
          color: #999;
          font-size: 16px;
          font-style: normal;
          font-weight: 600;
          line-height: 18px; /* 112.5% */
          background-color: transparent;
          border-radius: 15px;
          border: 1px solid #999;
          box-shadow: 0px 4px 20px 0px rgba(0, 0, 0, 0.10);
        }
      }


      button:last-child {
        background-color: transparent;
        border: 0;
        color: #13902C;
        text-align: center;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: 30px; /* 187.5% */
        letter-spacing: -0.4px;
        text-decoration-line: underline;
        &:disabled{
          background-color: transparent !important;
          opacity: .5;
        }
      }
    }
  }

  ul {
    margin-top: 5.030vh;
    list-style: none;
    display: flex;
    gap: 40px;
    padding: 0 20px;
    overflow-x: auto;

    &::-webkit-scrollbar {
      width: 0;
      height: 0;
    }

    li {
      flex-shrink: 0;
      padding: 2.012vh 20px;
      display: flex;
      align-items: center;
      border: 2px solid #e6e7e7;
      border-radius: 15px;
      transition: all .3s ease;

      &.selected {
        background-color: #13902C;
        border: 2px solid transparent;

        p {
          color: white;
        }
      }

      svg {
        transition: all .2s ease;
        max-width: 84px;
        width: 100%;
        flex-shrink: 0;
      }

      p {
        flex-shrink: 0;
        max-width: 244px;
        margin-left: 20px;
        color: rgba(13, 13, 13, 0.7);
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 16.8px; /* 120% */
        letter-spacing: -0.4px;
      }

    }

    li:first-child, li:nth-child(2n) {
      &.selected {
        svg * {
          fill: white;
        }
      }
    }

    li:last-child {
      &.selected {
        svg * {
          stroke: white;
        }
      }
    }
  }
`