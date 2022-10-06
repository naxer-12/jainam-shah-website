import styled, { css } from "styled-components";
import { colors, space, fontSize } from "./Utils";

export const Btn = styled.button`
  color: white;
  position: relative;
  overflow: hidden;
  outline: none;
  font-family: inherit;
  backface-visibility: hidden;
  border: none;
  border-radius: 8px;
  transition: 0.1s all ease;
  user-select: none;
  font-weight: bold;

  background-color: ${(props) =>
    props.color ? colors[props.color] : colors.lightBlue};

  font-size: ${fontSize[1]};
  padding: ${space[2] + "px"} ${space[3] + "px"};

  &:active {
    color: ${colors.buttonLabel};
  }

  ${(props) =>
    props.size === "lg" &&
    css`
      font-size: 18px;
      padding: ${space[2] + 4 + "px"} ${space[4] + "px"};
    `}

  ${(props) =>
    props.size === "sm" &&
    css`
      font-size: 14px;
      padding: ${space[1] + "px"} ${space[2] + "px"};
    `}

  ${(props) =>
    props.display === "block" &&
    css`
      display: block;
      width: 100%;
    `}

  ${(props) =>
    props.twitter &&
    css`
      svg {
        transition: transform 0.2s;
      }

      &:hover svg {
        transform: rotate(90deg);
      }
    `}

  &:hover {
    cursor: pointer;
    opacity: 0.9;
  }
`;

export const BtnLink = styled(Btn).attrs({ as: "a" })`
  text-decoration: none;
  display: inline-block;
`;
