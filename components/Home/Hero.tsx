import Link from "next/link";
import styled from "styled-components";

import { socialDetails } from "../../lib/social";

const asset_prefix = process.env.NEXT_PUBLIC_BASE_PATH || "";

const HeroContainer = styled.div`
  background-color: #f3f3f3;
  height: 100vh;
  padding-bottom: 2.5em;
`;

const HeroContent = styled.div`
  padding: 1.5em 10vw;
  height: 100%;
  margin: 0 auto;
  background: url(${asset_prefix}/assets/hero/bg-1.png);
  background-repeat: no-repeat;
  background-position-x: 100%;
  background-size: auto 100%;

  display: grid;
  grid-template-rows: repeat(4, max-content);
  align-content: space-between;
`;

const Navbar = styled.nav`
  display: grid;
  grid-template-columns: repeat(4, max-content) 1fr;
  column-gap: 4.5em;
`;

const LogoContainer = styled(Link)``;

const LinkItem = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  font-size: 1rem;
  font-weight: 700;
  color: #474747;
  margin-top: 0.5em;
`;

const ContactBtn = styled(Link)`
  text-decoration: none;
  text-transform: uppercase;
  color: #123347;
  padding: 1em 4.5em;
  background-color: #ffffff;
  margin-left: auto;
  align-self: flex-start;

  & span {
    font-size: 1rem;
    font-weight: 700;
  }
`;

const SubHeader = styled.div`
  & h3 {
    font-size: 1.625rem;
    font-weight: 700;
    margin-bottom: 8px;
  }

  & p {
    font-size: 1.25rem;
    font-weight: 400;
    width: 649px;
  }
`;

const Header = styled.header`
  & h1 {
    font-size: 6rem;
    font-weight: 500;
    width: 810px;
  }
`;

const Socials = styled.div`
  display: flex;
  gap: 1em;
`;

const SocialItem = styled(Link)`
  display: inline-block;
  width: 2em;
  height: 2em;

  & img {
    width: 100%;
    height: auto;
  }
`;

const Hero = () => {
  return (
    <HeroContainer>
      <HeroContent>
        <Navbar>
          <LogoContainer href="/">
            <img src={`${asset_prefix}/assets/Nestfuel_Logo.svg`} alt="logo" />
          </LogoContainer>
          <LinkItem href="/">home</LinkItem>
          <LinkItem href="/why-us">why us</LinkItem>
          <LinkItem href="/resources">resources</LinkItem>
          <ContactBtn href="/contact">
            <span>contact us</span>
          </ContactBtn>
        </Navbar>
        <SubHeader>
          <h3>Retain your best talent</h3>
          <p>
            Gain an advantage over your competitors through increased talent
            retention and stronger talent attraction – the next generation
            employee benefit....financial wellbeing!
          </p>
        </SubHeader>
        <Header>
          <h1>Nestfuel Employee Benefits Partner Programme</h1>
        </Header>
        <Socials>
          {socialDetails.map((x) => (
            <SocialItem href={x.url} key={x.key} target="_blank" rel="noopener">
              <img src={`${asset_prefix}/assets/hero/social/${x.img}.png`} />
            </SocialItem>
          ))}
        </Socials>
      </HeroContent>
    </HeroContainer>
  );
};

export default Hero;
