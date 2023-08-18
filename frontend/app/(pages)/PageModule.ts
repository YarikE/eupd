"use client"

import styled from "styled-components";

export const PageModule = styled.main`
  transition: background .2s ease;
  //z-index: 999;

  &:has(.panel), &:has(.star-panel) {
    position: absolute;
    width: 100%;
    height: 100dvh;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    overflow: hidden;
    pointer-events: none;
  }

  &:has(.panel) {
    background-color: rgba(0, 0, 0, 0.5);
  }

  @keyframes upMine {
    0% {
      transform: translateY(100%);
    }
    100% {
      transform: translateY(10%);
    }
  }

  .panel, .star-panel {
    transition: transform .1s ease;
    transform: translateY(100%);

    padding-bottom: 150px;
    border-radius: 40px 40px 0px 0px;
    background: #FFF;
    box-shadow: 0px 4px 25px 0px rgba(0, 0, 0, 0.25);
    position: relative;
    pointer-events: auto;
    overflow: auto;

    &::before {
      position: fixed;
      content: "";
      width: 62px;
      height: 6px;
      border-radius: 30px;
      background-color: #E2DFDF;
      top: 8px;
      left: 0;
      right: 0;
      margin: 0 auto;
    }

    .mobile-wrapper {
      padding-top: 49px;
    }

    .events {
      .event {
        margin-top: 26px;
        padding: 24px;
        width: 100%;
        min-height: 150px;
        border-radius: 12px;
        background-color: #F4F4F5;

        p {
          max-width: 241px;
        }
      }

    }

    .questions {
      h2 {
        margin-top: 40px;
      }

      &-wrapper {
        margin-top: 30px;
        display: flex;
        flex-direction: column;
        gap: 6px;

        .question {
          border-radius: 12px;
          background: #F4F4F5;
          width: 100%;
          padding: 17px 22px 30px 18px;
          overflow: hidden;
          height: 52px;
          //transition: bac .2s ease;

          b {
            color: rgba(46, 46, 46, 0.80);
            leading-trim: both;
            text-edge: cap;
            font-size: 20px;
            font-style: normal;
            font-weight: 500;
            line-height: 100%; /* 20px */
            letter-spacing: -0.64px;
          }

          p {
            margin-top: 12px;
          }

          &.active {
            height: 100%;
            background-color: #13902C;

            b {
              color: white !important;
            }

            p {
              color: white !important;

            }
          }
        }
      }
    }
  }

  .panel {
    z-index: 1;
    animation-name: upMine;
    animation-delay: 0ms;
    animation-fill-mode: forwards;
    animation-duration: .5s;
  }



  .news {
    .filters {
      margin-top: 20px;
      display: flex;
      gap: 10px;
      overflow: auto;
      padding-left: 40px;
      padding-right: 40px;

      .filter {
        height: 32px;
        display: flex;
        align-items: center;
        justify-content: center;
        white-space: nowrap;
        padding: 0 32px;
        border-radius: 12px;
        border: 1px solid rgba(102, 102, 102, 0.20);
        background: rgba(153, 153, 153, 0.10);

        &.selected {
          border-radius: 12px;
          border: 1px solid #13902C;
          background: #13902C;
          color: #FFFFFF;
        }
      }
    }
  }

  h1.title {
    color: #2E2E2E;
    leading-trim: both;
    text-edge: cap;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 32px */
    letter-spacing: -0.64px;
  }

  h2.subtitle {
    color: #2E2E2E;
    leading-trim: both;
    text-edge: cap;
    font-size: 28px;
    font-style: normal;
    font-weight: 600;
    line-height: 100%; /* 28px */
    letter-spacing: -0.64px;
  }

  b {
    color: #2E2E2E;
    font-size: 22px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px; /* 90.909% */
    letter-spacing: -0.64px;
  }

  p {
    color: #999;
    leading-trim: both;
    text-edge: cap;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 13px; /* 92.857% */
    text-wrap: balance;
  }

  .hidden {
    transform: translateY(100%);
  }



  
  button {
    width: 100%;
    padding: 17px 0;
    border-radius: 16px;
    background-color: #13902C;
    color: #FFF;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 25px; /* 156.25% */
    letter-spacing: -0.4px;
    pointer-events: auto;
    transition: all .2s ease;

    &:disabled {
      background-color: #999 !important;
      color: #666666 !important;
    }
  }
  
  
`