import React, { Children } from 'react';
import styled from 'styled-components';

const StyleButton = styled.button`
display:inline-flex;
outline: none;
border: none;
border-radius : 4px;
color:white;
font-weight:bold;
padding:0 16px;
line-height:40px;
font-size:16px;
background:#339ef0;
&:hover{
    background:#1c7ed6;
}
& + & {
    margin-left : 5px;
}
`
const Buttons = ({children, onClick}) => {
    return (
        
        <StyleButton onClick={onClick}>{children}</StyleButton>
    );
};

export default Buttons;