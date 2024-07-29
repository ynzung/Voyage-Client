import React, { useState } from "react";
import styled from "styled-components";
import RateBox from "./RateBox";
import MentorImg from "../../images/MentorImg.svg";
import OrderBtn from "./OrderBtn";
import SemiTitle from "./SemiTitle";

const MentorReco = ({ infoList }) => {
  const [order, setOrder] = useState(0);
  const [leftDisabled, setLeftDisabled] = useState(true);
  const [rightDisabled, setRightDisabled] = useState(false);
  let mentor = infoList[order];

  const handleBtn = (e) => {
    if (e.target.className.includes("leftBtn")) {
      if (order === 1) {
        // 1->0으로 가면 왼쪽 비활성화
        setLeftDisabled(true);
      } else if (order === infoList.length - 1) {
        // 4->3으로 가면 오른쪽 활성화
        setRightDisabled(false);
      }
      setOrder((prev) => prev - 1);
    } else {
      if (order === 0) {
        // 0->1로 가면 왼쪽 활성화
        setLeftDisabled(false);
      } else if (order === infoList.length - 2) {
        // 3->4로 가면 오른쪽 비활성화
        setRightDisabled(true);
      }
      setOrder((prev) => prev + 1);
    }
  };

  return (
    <MentorDiv>
      <OrderBtn disabled={leftDisabled} onClick={handleBtn} direction="left" />

      <MentorContainer>
        <ProfileBox>
          <ProfileImg src={MentorImg} alt="profileImg" />
          <Profile>
            <Name>{mentor.name}</Name>
            <MainCategory>
              {mentor.category.map((elt, idx) => {
                return <p key={idx}>{elt}</p>;
              })}
            </MainCategory>
          </Profile>
        </ProfileBox>

        <SemiTitle style={{ marginTop: "34px" }}>멘토님의 등대 지수</SemiTitle>
        <RateBox rating={mentor.rating} />

        <SemiTitle>멘토님의 멘토링 내역</SemiTitle>
        <CategoryBox>
          {mentor.category.map((elt, idx) => {
            return (
              <div key={idx}>
                <p>{elt}</p>
                <CategoryCount>
                  {mentor.count[idx]}
                  <span>회</span>
                </CategoryCount>
              </div>
            );
          })}
        </CategoryBox>

        <SemiTitle>멘토님의 멘토링 후기</SemiTitle>
      </MentorContainer>

      <OrderBtn
        disabled={rightDisabled}
        onClick={handleBtn}
        direction="right"
      />
    </MentorDiv>
  );
};

export default MentorReco;

const ProfileBox = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const ProfileImg = styled.img`
  width: 65px;
  height: 65px;
  border-radius: 1000px;
  background: #e9e7e7;
`;

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;

const Name = styled.div`
  color: #494949;
  font-family: Pretendard;
  font-size: 30px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const MainCategory = styled.div`
  display: flex;
  gap: 10px;

  p {
    background: rgba(73, 73, 73, 0.2);
    border-radius: 20px;
    color: #494949;
    margin: 0;
    padding: 2.5px 10px 2.5px 10px;
    color: #494949;
    text-align: center;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
  }
`;

const CategoryBox = styled(MainCategory)`
  width: 78px;
  height: 67px;
  flex-direction: column;
  border-radius: 15px;
  background: #f8f8f8;
  box-shadow: 4px 0px 10px -5px rgba(0, 0, 0, 0.25);
  gap: 6.5px;
  padding: 18px 10px 18px 10px;
  div {
    display: flex;
    flex-direction: row;
  }
  p {
    border-radius: 9px;
    color: #494949;
    margin: 0;
    padding: 2.5px 7px 2.5px 7px;
    font-size: 10px;
  }
`;

const CategoryCount = styled.span`
  color: #494949;
  font-size: 15px;
  font-weight: 500;
  margin-left: auto;
  span {
    color: #a4a4a4;
    font-size: 8px;
    font-weight: 500;
  }
`;

const MentorDiv = styled.div`
  display: flex;
  gap: 27px;
  justify-content: center;
  align-items: center;
  margin: 63px -20px 98px -20px;
`;

const MentorContainer = styled.div`
  width: 326px;
  height: 478px;
  border-radius: 20px;
  background: linear-gradient(200deg, #fff8dd 0.49%, #fdde55 99.51%);
  box-shadow: 0px 4px 15px 0px rgba(0, 0, 0, 0.1);
  padding: 46px 30px 46px 30px;
`;
