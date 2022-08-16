import styled from "styled-components";

export const AppWrapper = styled.div`
  margin: 5% 10%;
  background: #f2e1e7;
  border-radius: 3rem;
  @media screen and (max-width: 900px) {
    margin: 0;
    border-radius: 0rem;
    width: 100%;
    max-width: 100%;
  }
`;
export const NavBar = styled.div`
  width: 100%;
  height: 8rem;
  display: flex;
  justify-content: space-around;
  background: rgba(247, 136, 235, 0.2);
  border-radius: 3rem 3rem 0 0;
  @media screen and (max-width: 900px) {
    margin: 0;
    border-radius: 0rem;
    height: 5rem;
    img {
      width: 80px;
      height: 80px;
    }
  }
  @media screen and (max-width: 900px) {
    justify-content: space-between;
    img {
     margin-left: 1.4rem
    }
  }
`;
export const Nav = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 24rem;
  @media screen and (max-width: 900px) {
    font-size: 0.5rem;
    width: 10rem;
    display: none;
  }
  
`;
export const Icons = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 8rem;
  font-size: 1.3rem;
  span {
    opacity: 0.5;
  }
  @media screen and (max-width: 900px) {
    font-size: 0.8rem;
    width: 5rem;
    margin-right: 2rem;
  }
`;
export const MarginBox = styled.div`
  margin: 2rem 8rem;
  @media screen and (max-width: 900px) {
    margin: 0rem 3rem;
  }
`;
export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    width: 920px;
    height: 750px;
    margin-top: -3rem;
    &:first-child {
      width: 150px;
      height: 130px;
      margin-top: -5rem;
      margin-left: 14rem;
    }
  }
  @media screen and (max-width: 1200px) {
    flex-direction: column-reverse;
    img {
      margin-left: -9rem;
    }
  }
  @media screen and (max-width: 900px) {
    img {
      margin: 0;
      margin-left: -3rem;
      width: 370px;
      height: 320px;
      &:first-child {
        width: 60px;
        height: 40px;
      }
    }
  }
`;
export const TextContainer = styled.div`
  h1 {
    font-size: 70px;
    margin-bottom: 2rem;
    width: 700px;
    font-weight: 500;
    span {
      color: rgba(250, 0, 46, 0.55);
    }
  }
  p {
    font-size: 24px;
  }
  @media screen and (max-width: 900px) {
    h1 {
      font-size: 24px;
      margin-bottom: 0rem;
      margin-top: -3rem;
      width: 300px;
    }
    p {
      font-size: 12px;
      
    }
  }
`;
export const Button = styled.button`
  padding: 1.6rem 3rem;
  color: white;
  background-color: black;
  border-radius: 1rem;
  font-size: 1rem;
  font-weight: 100;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
  transition: .5s ease-in-out;
  :hover {
    color: black;
    background-color: transparent;
  }
  @media screen and (max-width: 900px) {
    font-size: 10px;
    padding: 1rem 1rem;
    border-radius: 0.5rem;
  }
  @media screen and (max-width: 500px) {
    font-size: 10px;
    padding: 0.8rem 1.2rem;
    border-radius: 0.5rem;
    margin-top: 0.8rem;
    margin-bottom: 0.8rem;
  }
`;
export const ProductBox = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  margin: 2rem 0rem;
  row-gap: 1.5rem;
  column-gap: 0.5rem;
  @media (max-width: 500px) {
    margin: 1.2rem 0rem;
  }
`;
export const Card = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  &:first-child {
    background-color: rgba(249, 0, 0, 0.3);
  }
  &:nth-child(2) {
    background-color: rgba(226, 96, 0, 0.3);
  }
  &:nth-child(3) {
    background-color: rgba(42, 187, 217, 0.3);
  }
  &:last-child {
    background-color: rgba(247, 136, 235, 0.4);
  }
  img {
    width: 250px;
    margin-top: -10px;
  }
  @media screen and (max-width: 900px) {
    img {
      width: 170px;
    }
  }
`;
export const Footer = styled.footer`
  text-align: center;
  margin: 10rem 0;
  color: rgba(0, 0, 0, 0.5);
  font-size: 25px;
  @media screen and (max-width: 900px) {
    font-size: 15px;
  }
`;
