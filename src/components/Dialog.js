import React from 'react';
import styled,{keyframes} from 'styled-components';

import Buttons from './Button';

//트렌지션 설정
const fadeIn = keyframes`
    from{
        opacity:0;
    }
    to{
        opacity:1;
    }
`;

const slideUp = keyframes`
    from{
        transform : translateY(200px);
    }
    to{
        transform : translateY(0px);
    }
`;

//어두운 배경 div
const DarkBackground = styled.div`
    position:fixed;
    left:0;
    top:0;
    width: 100%;
    height: 100%;
    display: flex;
    align-items : center;
    justify-content: center;
    background:rgba(0,0,0,0.7);

    animation: ${fadeIn} 0.25s;
    animation-fill-mode : forward;
`;
//컨텐츠 블럭
const DialogBlock = styled.div`
    width:320px;
    padding: 20px;
    border-radius : 6px;
    background : #fff;
    text-align: center;
    h3{
        magin:0;
        font-size: 24px;
    }
    p{
        font-size: 18px;
    }
    animation: ${slideUp} 0.25s;
    animation-fill-mode : forward;
`;

//버튼 그룹
const ButtonGroup = styled.div`
    margin-top: 20px;
    display: flex;
    justify-content: flex-end;
`;

const Dialog = ({title,children,confirmText, cancleText, visible, Cancle, Confirm}) => {
    if(!visible) return null;
    return (
        <DarkBackground>
            <DialogBlock>
                <h3>{title}</h3>
                <p>{children}</p>
                <ButtonGroup>
                    <Buttons onClick={Confirm}>{confirmText}</Buttons>
                    <Buttons onClick={Cancle}>{cancleText}</Buttons>
                </ButtonGroup>
            </DialogBlock>
        </DarkBackground>
    );
};

export default Dialog;