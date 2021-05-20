import styled from "@emotion/styled";

export const StudentProfileContainer = styled.div`
  width: 200px;
  height: 180px;
  background-color: rgba(255, 255, 255, 0.5);
  border-radius: 5px;
  margin-top: 100px;
`;

export const StudentImage = styled.img`
  border-radius: 100px;
  border: 5px solid rgba(255, 255, 255, 0.5);
  width: 50%;
  position: relative;
  top: -75px;
`;

export const HeaderProfile = styled.header`
  font-size: 18px;
  font-weight: 600;
  font-family: "Kaushan Script";
  position: relative;
  bottom: 80px;
  color: rgba(82, 167, 193);
`;

export const ProfileP = styled.p`
  font-size: 14px;
  position: relative;
  bottom: 70px;
`;

export const Email = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  position: relative;
  bottom: 70px;
`;

export const ContactLink = styled.a`
  font-size: 20px;
  color: rgba(82, 167, 193);
  position: relative;
  top: 10px;

  :hover {
    color: rgba(223, 163, 117, 0.8);
  }
`;
