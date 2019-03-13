import styled from "styled-components";

export const Chat = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`;
  
 export const ChatHeader = styled.div`
    background-color: #262626;
    overflow: visible;
    width: 100%;
    text-align: center;
    color: white;
`;
  
export const MessageList = styled.div`
    padding: 20px 0;
    max-width: 900px;
    width: 100%;
    margin: 0 auto;
    list-style: none;
    padding-left: 0;
    flex-grow: 1;
    overflow: auto;
`;
  
 export const Message = styled.div`
    display: flex;
    margin-top: 10px;
`;
  
export const currentMember = styled.div`
    /*justify-content: flex-end;*/
    flex-direction: row-reverse;
    text-align: right;
`;
  
export const content = styled.div`
    display: inline-block;
    align-items: flex-end;
`;
  
export const avatar = styled.div`
    height: 35px;
    width: 35px;
    border-radius: 50%;
    display: inline-block;
    margin: 0 10px -10px;
`;
  
export const username = styled.div`
    display: block;
    color: gray;
    font-size: 14px;
    padding-bottom: 4px;
`;
  
export const text = styled.div`
    padding: 10px;
    margin: 0;
    border-radius: 12px;
    max-width: 400px;
    background-color: cornflowerblue;
    color: white;
    display: inline-block;
`; 

export const form = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    max-width: 900px;
    margin: 0 auto 40px;
`;
  
export const input = styled.div`
    padding: 5px;
    font-size: 16px;
    border-radius: 8px;
    border: 1px solid orangered;
    flex-grow: 1;
`;
  
export const button = styled.div`
    padding: 5px 10px;
    font-size: 16px;
    background-color: orangered;
    color: white;
    border: none;
    border-radius: 8px;
    margin-left: 10px;
`;