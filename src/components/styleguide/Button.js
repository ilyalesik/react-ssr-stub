import React from "react";
import styled from "styled-components";
import { colors } from "./Constants";
import { rgba } from "polished";

export const Button = styled.button`
    border: 1px solid ${colors.black};
    box-sizing: border-box;
    display: inline-block;
    font-family: Helvetica, sans-serif;
    font-size: 18px;
    -webkit-tap-highlight-color: ${rgba(colors.black, 0)};
    cursor: pointer;
    text-decoration: none;
    padding: 10px 20px;
    outline: none;
    border-radius: 2px;
    background-color: ${colors.white};
    text-align: center;

    :hover,
    :focus {
        box-shadow: 0 5px 5px 0 ${rgba(colors.black, 0.09)};
    }
`;
