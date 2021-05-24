import styled from "styled-components";
import { color } from "../../../Utils/Variable";

const FirstLoadStyle = styled.div`
  text-align: center;
  @keyframes ldio-b5s03kyn5nb {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
  .ldio-b5s03kyn5nb div {
    position: absolute;
    width: 50px;
    height: 50px;
    border: 20px solid ${color.primary};
    border-top-color: transparent;
    border-radius: 50%;
  }
  .ldio-b5s03kyn5nb div {
    animation: ldio-b5s03kyn5nb 1s linear infinite;
    top: 100px;
    left: 100px;
  }
  .loadingio-spinner-rolling-ank5bq01ixq {
    width: 150px;
    height: 150px;
    display: inline-block;
    overflow: hidden;
    background: #ffffff;
  }
  .ldio-b5s03kyn5nb {
    width: 100%;
    height: 100%;
    position: relative;
    transform: translateZ(0) scale(1);
    backface-visibility: hidden;
    transform-origin: 0 0; /* see note above */
  }
  .ldio-b5s03kyn5nb div {
    box-sizing: content-box;
  }
`;

export default FirstLoadStyle;
