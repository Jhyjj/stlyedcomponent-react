import logo from './logo.svg';
import './App.css';
import styled from 'styled-components';
import Buttons from './components/Button';
import Dialog from './components/Dialog';
import { useState } from 'react';
import Box from './components/Box';


const AppBlock = styled.div`
  width: 512px;
  margin:0 auto;
  margin-top:50px;
  padding:10px;
  border:1px solid #eee`


function App() {
  const [dialog, setDialog] = useState(false);

  const onClick = ()=>{
    setDialog(true);
  }

  const Cancle = ()=>{
    setDialog(false);
    console.log('취소되었습니다.');
  }

  const Confirm = ()=>{
    setDialog(false);
    console.log('확인');
  }

  return (
    <>
    <AppBlock>
      <Buttons>button1</Buttons>
      <Buttons>button2</Buttons>
      <Buttons onClick={onClick}>button3</Buttons>
    </AppBlock>
    <Dialog title="정말로 삭제하시겠습니까?" confirmText="삭제" cancleText="취소"
     visible={dialog} Cancle={Cancle} Confirm={Confirm}>
      데이터를 삭제하시겠습니까?
    </Dialog>
    <Box></Box>
    </>
  );
}

export default App;
