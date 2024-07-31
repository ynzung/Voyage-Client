import React from "react";
import styled from "styled-components";
import TopBar from "../../components/common/TopBar";
import MenuBar from "../../components/chat/MenuBar";
import RecentChat from "../../components/chat/RecentChat";
import SuggestMentee from "../../components/chat/SuggestMentee";
import AdZone from "../../components/chat/AdZone";

const ChatListMentor = () => {
  return (
    <>
      <Container>
        <TopBar txt={"채팅하기"} />
        <MenuBar />
        <ListBox>
          <RecentChat />
        </ListBox>
        <BottomBar>
          <AdZone />
        </BottomBar>
      </Container>
    </>
  );
};
export default ChatListMentor;

const Container = styled.div`
  background-color: #f8f8f8;
  width: 600px;
  margin: 0 auto;
  height: 1230px;
`;

const ListBox = styled.div`
  padding: 15px 0px;
`;

const BottomBar = styled.div`
  position: fixed;
  bottom: 0;
  width: 520px;
  height: 148px;
  background: #f8f8f8;
  justify-content: center;
  align-items: center;
  display: flex;
  padding: 38px 40px;
`;
