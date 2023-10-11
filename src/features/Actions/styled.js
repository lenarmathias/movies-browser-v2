import styled from "styled-components";
import { ReactComponent as spinnerIcon } from "./Loading/spinner.svg";
import { ReactComponent as image } from "../Actions/NotFound/Picture.svg";

export const Spinner = styled(spinnerIcon)`
  display: block;
  margin: 0 auto;
  margin-top: 120px;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Image = styled(image)`
  width: 668px;
  height: 509px;
  align-self: center;
  margin-top: 30px;
`;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
`;