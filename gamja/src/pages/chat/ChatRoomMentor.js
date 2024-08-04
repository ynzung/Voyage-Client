import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import OutBtnImg from "../../images/OutBtn.svg";
import TopBar from "../../components/common/TopBar";
import Receiver from "../../components/chat/Receiver";
import Sender from "../../components/chat/Sender";
import InputMessage from "../../components/chat/InputMessage";
import axios from "axios";

const ChatRoomMentor = () => {
  const { roomId } = useParams();
  const [chatRoomData, setChatRoomData] = useState([]);

  useEffect(() => {
    const getMessage = () => {
      axios
        .get(`http://127.0.0.1:8000/chat/${roomId}/`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        })
        .then((response) => {
          console.log(response.data);
          setChatRoomData(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    };

    getMessage();
  }, [roomId]);

  const handleNewMessage = (newMessage) => {
    setChatRoomData((prevData) => ({
      ...prevData,
      chats: [...prevData.chats, newMessage],
    }));
  };

  return (
    <Container>
      <TopContainer>
        <TopBar txt={"채팅하기"} />
        <FuncBar>
          <RoomName>{chatRoomData?.title}</RoomName>
          <ButtonContainer>
            <Icon src={OutBtnImg} alt="WriteReview" />
          </ButtonContainer>
        </FuncBar>
      </TopContainer>
      <MessageContainer>
        {chatRoomData?.chats?.map((chat, idx) =>
          chat.is_mentee ? (
            <Receiver
              key={idx}
              message={chat.message}
              username={chatRoomData.mentee_name}
            />
          ) : (
            <Sender key={idx} message={chat.message} />
          )
        )}
      </MessageContainer>
      <InputMessage roomId={chatRoomData.id} onMessageSent={handleNewMessage} />
    </Container>
  );
};

export default ChatRoomMentor;

const Container = styled.div`
  background-color: #ededed;
  width: 100%;
  max-width: 600px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;

const TopContainer = styled.div`
  background: #f8f8f8;
  box-shadow: 0px 4px 2px 0px rgba(0, 0, 0, 0.05);
`;

const FuncBar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 40px;
`;

const RoomName = styled.div`
  width: 363px;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #7f7f7f;
  font-size: 25px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
  letter-spacing: -0.55px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 29px;
`;

const Icon = styled.img`
  width: 40px;
  height: 40px;
  cursor: pointer;
`;

const MessageContainer = styled.div`
  flex: 1;
  padding: 31px 40px 0px 29px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
