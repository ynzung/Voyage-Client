import React from "react";
import styled from "styled-components";
import { useLocation } from "react-router-dom";
import { matchPath } from "react-router";
import ChatMentor from "../../images/ChatMentor.svg";
import ChatMentee from "../../images/ChatMentee.svg";

const MessageArr = [
  {
    id: 1,
    username: "나왕똑똑",
    message: "진로를 선택할 때 가장 중요한 기준",
    date: "어제",
    room: 3,
  },
  {
    id: 2,
    username: "나좀똑똑",
    message: "진로를 선택할 때 가장 중요한 기준",
    date: "어제",
    room: 10,
  },
  {
    id: 3,
    username: "나덜똑똑",
    message: "진로를 선택할 때 가장 중요한 기준",
    date: "어제",
    room: 2,
  },
  {
    id: 4,
    username: "나개똑똑",
    message: "진로를 선택할 때 가장 중요한 기준",
    date: "어제",
    room: 16,
  },
  {
    id: 5,
    username: "나짱똑똑",
    message: "진로를 선택할 때 가장 중요한 기준",
    date: "어제",
    room: 5,
  },
  {
    id: 6,
    username: "나안똑똑",
    message: "진로를 선택할 때 가장 중요한 기준",
    date: "어제",
    room: 20,
  },
];

const RecentChat = () => {
  const location = useLocation().pathname;

  if (matchPath("mypage/mentor/journal/select", location)) {
    return (
      <>
        {MessageArr.map((message) => (
          <Wrapper key={message.id}>
            <Both>
              <Left>
                <Profile src={ChatMentee} alt="ChatMentee" />
              </Left>
              <Right>
                <Username>{message.username}</Username>
                <Message>{message.message}</Message>
              </Right>
            </Both>
            <DateBox>
              <Date>{message.date}</Date>
            </DateBox>
          </Wrapper>
        ))}
      </>
    );
  }
  if (matchPath("/mypage/mentee/journal/select", location)) {
    return (
      <>
        {MessageArr.map((message) => (
          <Wrapper key={message.id}>
            <Both>
              <Left>
                <Profile src={ChatMentor} alt="ChatMentor" />
              </Left>
              <Right>
                <Username>{message.username}</Username>
                <Message>{message.message}</Message>
              </Right>
            </Both>
            <DateBox>
              <Date>{message.date}</Date>
            </DateBox>
          </Wrapper>
        ))}
      </>
    );
  }
  return null;
};

export default RecentChat;

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 15px 40px;
  justify-content: space-between;
`;

const Both = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;
const Left = styled.div`
  cursor: pointer;
`;
const Right = styled.div`
  cursor: pointer;
`;

const Profile = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 50%;
  cursor: pointer;
`;

const Username = styled.div`
  color: #494949;
  font-size: 20px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
  margin-bottom: 5px;
`;

const Message = styled.div`
  color: #7f7f7f;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: 150%; /* 22.5px */
  letter-spacing: -0.33px;
`;
const DateBox = styled.div`
  padding-top: 5px;
`;
const Date = styled.div`
  color: #7f7f7f;
  font-size: 15px;
  font-weight: 500;
  line-height: 150%; /* 22.5px */
  letter-spacing: -0.33px;
`;
