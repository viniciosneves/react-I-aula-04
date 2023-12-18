import styled from "styled-components";
import { Link } from "react-router-dom";

const LinkEstilizado = styled(Link)`
    color: #3D683C;
    font-family: GothamBlack;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    text-decoration: none;
    &:hover {
        color: #BA7272;
    }
`

export default LinkEstilizado