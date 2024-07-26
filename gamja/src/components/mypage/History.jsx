import React from "react";
import styled from "styled-components";
import MenteeImg from "../../images/MenteeImg.svg";

const users = [
  {
    id: 1,
    username: "돈이 뭐길래",
    categories: ["재테크", "인간관계"],
    concern: "사랑하는 사람과 경제적 수준 차이가 고민이에요",
  },
  {
    id: 2,
    username: "돈이 뭐길래",
    categories: ["재테크", "인간관계"],
    concern: "사랑하는 사람과 경제적 수준 차이가 고민이에요",
  },
  {
    id: 3,
    username: "돈이 뭐길래",
    categories: ["재테크", "인간관계"],
    concern: "사랑하는 사람과 경제적 수준 차이가 고민이에요",
  },
  {
    id: 4,
    username: "돈이 뭐길래",
    categories: ["재테크", "인간관계"],
    concern: "사랑하는 사람과 경제적 수준 차이가 고민이에요",
  },
];

const History = () => {
  return (
    <>
      <Wrapper>
        <Left>
          <CategoryBox>
            <Category>가치관</Category>
            <CategoryCount>
              5<span>회</span>
            </CategoryCount>
          </CategoryBox>
          <CategoryBox>
            <Category>사랑</Category>
            <CategoryCount>
              10<span>회</span>
            </CategoryCount>
          </CategoryBox>
          <CategoryBox>
            <Category>생활</Category>
            <CategoryCount>
              2<span>회</span>
            </CategoryCount>
          </CategoryBox>
        </Left>
        <Right>
          {users.map((user) => (
            <Container key={user.id}>
              <InfoBox>
                <PhotoBox>
                  <Profile src={MenteeImg} alt="profileImg" />
                </PhotoBox>
                <NameBox>
                  <Username>{user.username}</Username>
                  <ContentCategoryBox>
                    {user.categories.map((category, idx) => (
                      <ContentCategory key={idx}>{category}</ContentCategory>
                    ))}
                  </ContentCategoryBox>
                </NameBox>
              </InfoBox>
              <ConcernBox>{user.concern}</ConcernBox>
            </Container>
          ))}
        </Right>
      </Wrapper>
    </>
  );
};

export default History;

const Wrapper = styled.div`
  display: flex;
  gap: 3px;
`;

const Left = styled.div`
  margin-top: 6px;
  width: 78px;
  padding: 15px 10px;
  border-radius: 15px;
  background: #f8f8f8;
  box-shadow: 4px 0px 10px -5px rgba(0, 0, 0, 0.25);
`;

const CategoryBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 4px;
`;

const Category = styled.div`
  padding: 3px 9px;
  border-radius: 9px;
  background: rgba(3, 174, 210, 0.2);
  color: #03aed2;
  text-align: center;
  font-size: 8px;
  font-weight: 500;
`;

const CategoryCount = styled.span`
  color: #494949;
  font-size: 15px;
  font-weight: 500;

  > span {
    color: #a4a4a4;
    font-size: 8px;
    font-weight: 500;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 4px;
  border-radius: 15px;
  max-width: 238px;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Container = styled.div`
  flex: 0 0 auto;
  width: 90px;
  height: 70px;
  border-radius: 15px;
  background: #f8f8f8;
  padding: 7px 8px 12px 8px;
  margin-top: 7px;
`;

const Profile = styled.img`
  width: 30px;
  height: 30px;
`;

const InfoBox = styled.div`
  display: flex;
  align-items: center;
  gap: 3px;
`;

const PhotoBox = styled.div``;
const NameBox = styled.div``;

const Username = styled.div`
  color: #494949;
  font-size: 8px;
  font-weight: 500;
  margin-bottom: 2px;
`;

const ContentCategoryBox = styled.div`
  display: flex;
  align-items: center;
  gap: 2px;
`;

const ContentCategory = styled.div`
  border-radius: 5px;
  background: rgba(3, 174, 210, 0.2);
  color: #03aed2;
  text-align: center;
  font-size: 5px;
  font-weight: 500;
  padding: 2px 5px;
`;

const ConcernBox = styled.div`
  margin-top: 8px;
  max-height: 28px;
  overflow: hidden;
  color: #494949;
  font-size: 10px;
  font-weight: 400;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
`;
