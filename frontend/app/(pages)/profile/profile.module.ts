import styled from "styled-components";

export const ProfileModule = styled.div`
    b {
      font-size: 20px;
    }

    .avatar {
      margin-top: 24px;

      &-content {
        margin-top: 24px;

        &_image {
          border-radius: 100%;
          margin: 0 auto;
          width: 23.364vw;
          height: 23.364vw;
          background-image: url(https://lh3.googleusercontent.com/ogw/AGvuzYbtl8NirqXJqrvZemEwLeUQWGM6giIZFT7QXGrp=s32-c-mo);
          background-repeat: no-repeat;
          background-size: cover;
          background-color: #E8ECEF;
        }

        button {
          margin-top: 24px;
          color: #21201F;
          background-color: transparent;
          border-radius: 12px;
          border: 2px solid #E8ECEF;
        }
      }

      p {
        margin-top: 18px;
        color: #999;
        leading-trim: both;
        text-edge: cap;
        font-size: 16px;
        font-style: normal;
        font-weight: 500;
        line-height: 110%; /* 17.6px */
        letter-spacing: -0.64px;
      }
    }
    .personally_input {
      margin-top: 35px;

      &-input {
        margin-top: 18px;
        position: relative;

        svg {
          top: 0;
          bottom: 0;
          left: 23px;
          margin: auto 0;
          position: absolute;
        }

        input {
          width: 100%;
          border-radius: 12px;
          border: 2px solid #E8ECEF;
          padding: 0 56px;
          height: 51px;
          color: rgba(102, 102, 102, 0.50);
          leading-trim: both;
          text-edge: cap;
          font-size: 14px;
          font-style: normal;
          font-weight: 400;
          line-height: 100%; /* 14px */
          letter-spacing: -0.64px;
        }
      }
    }
    .ratings {
      margin-top: 24px;

      .ratings_wrapper {
        margin-top: 18px;
        display: flex;
        gap: 18px;

        .user-rating {
          width: 158px;
          height: 87px;
          border-radius: 12px;
          background-color: #F4F4F5;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          padding-bottom: 12px;
          padding-right: 13px;
          position: relative;

          p {
            top: 12px;
            left: 14px;
            position: absolute;
            color: #999;
            leading-trim: both;
            text-edge: cap;
            font-size: 10px;
            font-style: normal;
            font-weight: 500;
            line-height: 100%; /* 10px */
            letter-spacing: -0.64px;
          }

          div {
            color: rgba(19, 144, 44, 0.80);
            leading-trim: both;
            text-edge: cap;
            text-shadow: 0px 0px 25px rgba(19, 144, 44, 0.30);
            font-size: 32px;
            font-style: normal;
            font-weight: 600;
            line-height: 100%; /* 32px */
            letter-spacing: -0.64px;

            span {
              color: #999;
              leading-trim: both;
              text-edge: cap;
              font-size: 16px;
              font-style: normal;
              font-weight: 600;
              line-height: 100%;
              letter-spacing: -0.64px;
            }
          }
        }
      }
    }
    .issues_buttons{
      display: flex;
      flex-direction: column;
      gap: 13px;
      margin-top: 60px;
      button{
        padding: 17px 0;
        width: 100%;
        font-size: 16px;
        font-style: normal;
        font-weight: 600;
        line-height: 25px; /* 156.25% */
        letter-spacing: -0.4px;
        border-radius: 16px;
        background-color: rgba(19, 144, 44, 0.20);
        color: #13902C;
        border: 0;
      }
      button:first-child{
        color: white;
        border-radius: 16px;
        background-color: #13902C;
        position: relative;
        .button-notify{
          position: absolute;
          top: -10px;
          right: 0;
          width: 20px;
          height: 20px;
          background-color: #E82100;
          color: #FFF;
          font-size: 12px;
          font-weight: 600;
          line-height: 25px; /* 208.333% */
          letter-spacing: -0.4px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 100%;
        }
      }
    }

`