'use client'
import styled from "styled-components";

export const ThanksModule = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 54px;

  h1 {
    margin-top: 32px;
    color: #0D0D0D;
    text-align: center;
    font-size: 32px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px; /* 93.75% */
    letter-spacing: -0.4px;
  }

  p {
    margin-top: 40px;
    color: #999;
    text-align: center;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    letter-spacing: -0.4px;
    text-wrap: balance;
    max-width: 322px;
    width: 100%;
  }

  button {
    color: #999;
    text-align: center;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    border-radius: 15px;
    border: 1px solid #999;
    background-color: transparent;
    margin-top: 15px;
  }
`