import "./App.scss";
import {
  NavBar,
  Icons,
  AppWrapper,
  MarginBox,
  Container,
  TextContainer,
  Button,
  Nav,
  ProductBox,
  Card,
  Footer,
} from "./styles";
import ColorMummy from "./images/pinkClownsRigg.png";
import logo from "./images/clownface.png";
import yellow from "./images/yellowbird.png";
import first from "./images/dart.png";
import second from "./images/dices.png";
import third from "./images/jokerCard.png";
import last from "./images/puzzle.png";
import firstH from "./images/dart 1.png";
import secondH from "./images/dices 1.png";
import thirdH from "./images/jokerCard 1.png";
import lastH from "./images/puzzle 1.png";
import {
  RiArrowDropDownLine,
  RiSearch2Line,
  RiShoppingCartLine,
} from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { useState } from "react";

function App() {
  const [isHover, setIsHover] = useState("");
  const handleHover = (e) => setIsHover(e.target.getAttribute("name"));
  const handleHoverOut = () => setIsHover("");
  return (
    <AppWrapper>
      <NavBar>
        <img src={logo} alt="clownface" />
        <Nav>
          <p>
            Home
            <span>
              <RiArrowDropDownLine />
            </span>
          </p>
          <p>
            Products
            <span>
              <RiArrowDropDownLine />
            </span>
          </p>
          <p>
            Pricing
            <span>
              <RiArrowDropDownLine />
            </span>
          </p>
          <p>
            Contact
            <span>
              <RiArrowDropDownLine />
            </span>
          </p>
        </Nav>
        <Icons>
          <RiSearch2Line /> <FaRegUser /> <span>|</span> <RiShoppingCartLine />
        </Icons>
      </NavBar>
      <MarginBox>
        <Container>
          <TextContainer>
            <h1>
              Get up-to-date with the very best designs in the{" "}
              <span>market</span>
            </h1>
            <p>
              There are not too many fancy designs out there. Join us to get the
              very best picture, web design, crystal clear grahical HD profiles.
              We got you covered for life
            </p>
            <Button>Get Started</Button>
          </TextContainer>
          <div>
            <img src={yellow} alt="yellow bird" className="bird" />
            <img src={ColorMummy} alt="color mummy" />
          </div>
        </Container>
        <h2>Products</h2>
        <ProductBox>
          <Card
            name="1"
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
          >
            <img src={isHover === "1" ? firstH : first} alt="sweet pic" />
          </Card>
          <Card
            name="2"
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
          >
            <img src={isHover === "2" ? secondH : second} alt="sweet pic" />
          </Card>
          <Card
            name="3"
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
          >
            <img src={isHover === "3" ? thirdH : third} alt="sweet pic" />
          </Card>
          <Card
            name="4"
            onMouseEnter={handleHover}
            onMouseLeave={handleHoverOut}
          >
            <img src={isHover === "4" ? lastH : last} alt="sweet pic" />
          </Card>
        </ProductBox>
        <Footer>Design by Jaycn</Footer>
      </MarginBox>
    </AppWrapper>
  );
}

export default App;
