import { useState } from "react";
import { Row, Col, Drawer } from "antd";
import { withTranslation } from "react-i18next";
import Container from "../../common/Container";
import { SvgIcon } from "../../common/SvgIcon";
import i18n from "i18next";
import {
  HeaderSection,
  LogoContainer,
  Burger,
  NotHidden,
  Menu,
  Label,
  Outline,
  LanguageSwitch,
  LanguageSwitchContainer,
  CustomNavLinkSmall,
  Span,
  CustomNavLink
} from "./styles";
import { Button } from "../../common/Button";

const Header = ({ t }: any) => {
  const [visible, setVisibility] = useState(false);

  const handleChange = (language: string) => {
    i18n.changeLanguage(language);
    
    // Atualizar URL com o parâmetro lang
    const url = new URL(window.location.href);
    url.searchParams.set('lang', language);
    window.history.pushState({}, '', url.toString());
  };

  const showDrawer = () => {
    setVisibility(!visible);
  };

  const onClose = () => {
    setVisibility(!visible);
  };

  const MenuItem = () => {
    return (
      <>
        <CustomNavLink onClick={() => window.location.href = '/visits'}>
          <Span>
            <Button>{t('Contador de Visitas')}</Button>
          </Span>
        </CustomNavLink>
        <CustomNavLinkSmall>
          <LanguageSwitchContainer>    
            <LanguageSwitch onClick={() => handleChange("pt")}>
              <SvgIcon
                src="brazil.svg"
                aria-label="homepage"
                width="30px"
                height="30px"
              />
            </LanguageSwitch>
            <LanguageSwitch onClick={() => handleChange("en")}>
              <SvgIcon
                src="united-states.svg"
                aria-label="homepage"
                width="30px"
                height="30px"
              />
            </LanguageSwitch>
          </LanguageSwitchContainer>
          </CustomNavLinkSmall>
      </>
    );
  };

  return (
    <HeaderSection>
      <Container>
        <Row justify="space-between">
          <LogoContainer to="/" aria-label="homepage">
            {/* <SvgIcon src="logo.svg" width="101px" height="64px" /> */}
            <h3>Rduz.</h3><h6>me</h6>
          </LogoContainer>
          <NotHidden>
            <MenuItem />
          </NotHidden>
          <Burger onClick={showDrawer}>
            <Outline />
          </Burger>
        </Row>
        <Drawer closable={false} visible={visible} onClose={onClose}>
          <Col style={{ marginBottom: "2.5rem" }}>
            <Label onClick={onClose}>
              <Col span={12}>
                <Menu>Menu</Menu>
              </Col>
              <Col span={12}>
                <Outline />
              </Col>
            </Label>
          </Col>
          <MenuItem />
        </Drawer>
      </Container>
    </HeaderSection>
  );
};

export default withTranslation()(Header);
