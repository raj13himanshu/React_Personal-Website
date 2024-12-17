import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles/Button";
import { useGlobalContext } from "../context";

const HeroSection = () => {
  const { name, image, details, details2, clickBtn, btnPath } = useGlobalContext();

  return (
    <Wrapper>
      <div className="container grid grid-two-column">
        <div className="section-hero-data">
          <p className="hero-top-data">THIS IS ME</p>
          <h1 className="hero-heading">{name}</h1>
          <p className="hero-para">{details}</p>
          <p className="hero-para bold">{details2}</p>
          <Button className="btn hireme-btn">
            <NavLink to={btnPath}>{clickBtn}</NavLink>
          </Button>
        </div>

        {/* for image  */}
        <div className="section-hero-image">
          <picture>
            <img src={image} alt="hero image" className="hero-img animated" />
          </picture>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 18rem 0;

  .section-hero-data {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .btn {
    max-width: 16rem;
  }

  .hero-top-data {
    text-transform: uppercase;
    font-weight: 500;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.helper};
  }

  .hero-heading {
    text-transform: uppercase;
    font-size: 6.4rem;
  }

  .hero-para {
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    max-width: 60rem;
  }

  .bold {
    font-weight: 700;
  }

  .section-hero-image {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  picture {
    text-align: center;
  }

  .hero-img {
    max-width: 70%;
  }

  .animated {
    animation: up-down 2s ease-in-out infinite alternate-reverse both;
  }

  @-webkit-keyframes up-down {
    0% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(-10px);
    }
  }

  @keyframes up-down {
    0% {
      transform: translateY(10px);
    }
    100% {
      transform: translateY(-10px);
    }
  }

  @media (max-width: ${({ theme }) => theme.media.mobile}) {
    padding-top: 13rem;

    .bold {
      font-weight: 600;
    }

    .hero-para {
      margin-top: 1.5rem;
      margin-bottom: 1rem;
    }
    .btn {
      max-width: 16rem;
      border-radius: 0.5rem;
    }

    .hero-top-data {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 1.5rem;
      color: ${({ theme }) => theme.colors.helper};
    }

    .hero-heading {
      text-transform: uppercase;
      font-size: 5rem;
    }

    .hero-para {
      margin-top: 1.5rem;
      margin-bottom: 1rem;
      max-width: 60rem;
      font-size: 1.8rem;
    }

    .section-hero-data {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-align: center;
      margin: auto;
      margin-bottom: 5rem;
    }
  }
`;

export default HeroSection;
