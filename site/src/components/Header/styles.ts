import styled from "styled-components";
import { Link } from "react-router-dom";
import { MenuOutlined } from "@ant-design/icons";

export const HeaderSection = styled("header")`
  padding: 1rem 0.5rem;

  .ant-row-space-between {
    align-items: center;
    text-align: center;
  }
`;

export const LogoContainer = styled(Link)`
  display: flex;
`;

export const NavLink = styled("div")`
  display: inline-block;
  text-align: center;
`;

export const CustomNavLink = styled("div")`
  width: 203px;
  display: inline-block;

  @media only screen and (max-width: 890px) {
    width: 100%;
    display: block;
  }

  @media only screen and (max-width: 411px) {
    width: 100%;
  }

  @media only screen and (max-width: 320px) {
    width: 100%;
  }
`;

export const ContactWrapper = styled("div")<any>`
  cursor: pointer;
  width: ${(p) => (p.width ? "100%" : "110px")};
  font-weight: 700;
  text-align: center;
  border-radius: 1.25rem;
  display: inline-block;
`;

export const Burger = styled("div")`
  @media only screen and (max-width: 890px) {
    display: block;
  }

  display: none;

  svg {
    fill: var(--text-secondary);
  }
`;

export const NotHidden = styled("div")`
  @media only screen and (max-width: 890px) {
    display: none;
  }
`;

export const Menu = styled("h5")`
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export const CustomNavLinkSmall = styled(NavLink)`
  font-size: 1.2rem;
  color: var(--text-primary);
  transition: color 0.2s ease-in;
  margin: 0.5rem 2rem;

  @media only screen and (max-width: 768px) {
    margin: 1.25rem 2rem;
  }
`;

export const Label = styled("label")`
  font-weight: 500;
  color: #404041;
  text-align: right;
  display: flex;
  justify-content: space-between;
  align-items: baseline;
`;

export const Outline = styled(MenuOutlined)<any>`
  font-size: 22px;
`;

export const Span = styled("span")`
  cursor: pointer;
  transition: all 0.3s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    color: var(--bg-primary);
    text-underline-position: under;
    text-decoration: var(--bg-primary) wavy underline;
  }
`;

export const Language = styled("h4")`
  font-size: 22px;
  text-transform: capitalize;
  color: var(--text-primary);

  @media screen and (max-width: 414px) {
    padding: 1.5rem 0;
  }
`;

export const LanguageSwitch = styled("div")<any>`
  padding: 0 10px;
  cursor: pointer;
  transition: all 0.1s ease-in-out;

  &:hover,
  &:active,
  &:focus {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }
`;

export const LanguageSwitchContainer = styled("div")`
  display: flex;
  justify-content: space-evenly;
`;

export const ThemeToggle = styled("button")`
  background: transparent;
  border: 2px solid var(--border-color);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 20px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 10px;
  transition: all 0.3s ease;

  &:hover {
    transform: scale(1.1);
    box-shadow: 0 0 10px var(--shadow-color);
  }

  @media only screen and (max-width: 890px) {
    margin: 10px auto;
  }
`;
