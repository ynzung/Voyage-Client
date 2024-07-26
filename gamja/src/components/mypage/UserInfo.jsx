import React from "react";
import styled from "styled-components";
import MenteeImg from "../../images/MenteeImg.svg";
import MentorImg from "../../images/MentorImg.svg";
import Arrow from "../../images/Arrow.svg";

const UserInfo = ({ profilImg, categoryColor, categoryBg }) => {
  return (
    <>
      <ProfileBox>
        <Profile src={profilImg || MenteeImg} alt="profileImg" />
        <NameBox>
          <Username>척척육은영</Username>
          <Next src={Arrow} alt="바로가기" />
        </NameBox>
        <CategoryBox>
          <Category categoryColor={categoryColor} categoryBg={categoryBg}>
            가치관
          </Category>
          <Category categoryColor={categoryColor} categoryBg={categoryBg}>
            사랑
          </Category>
          <Category categoryColor={categoryColor} categoryBg={categoryBg}>
            생활
          </Category>
        </CategoryBox>
      </ProfileBox>
    </>
  );
};

export default UserInfo;

const ProfileBox = styled.div`
  display: flex;
  width: 157px;
  padding: 30px 0px;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  background: #f8f8f8;
`;

const Profile = styled.img`
  width: 78px;
  height: 78px;
  margin-bottom: 19px;
`;

const NameBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 7px;
  margin-bottom: 9px;
`;

const Username = styled.div`
  color: #494949;
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;

const Next = styled.img`
  width: 6.477px;
  height: 10.983px;
`;

const CategoryBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4.5px;
`;

const Category = styled.div`
  display: inline-block;
  padding: 3px 9px;
  border-radius: 9px;
  background: ${(props) => props.categoryBg || "rgba(3, 174, 210, 0.2)"};
  color: ${(props) => props.categoryColor || "#03aed2"};
  text-align: center;
  font-size: 8px;
  font-weight: 500;
`;
