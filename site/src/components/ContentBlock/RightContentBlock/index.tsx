import { useState } from "react";
import { Row, Col, Alert, Result, notification } from "antd";
import Link from "antd/lib/typography/Link";
import { withTranslation } from "react-i18next";
import { Fade, Zoom } from "react-awesome-reveal";
import { SvgIcon } from "../../../common/SvgIcon";
import { Button } from "../../../common/Button";
import { ButtonSmall } from "../../../common/ButtonSmall";
import { ContentBlockProps } from "../types";
import {
  RightBlockContainer,
  Content,
  ContentWrapper,
  ButtonWrapper,
} from "./styles";
import { ButtonContainer, FormGroup, Span } from "../../ContactForm/styles";
import { useForm } from "../../../common/utils/useForm";
import Input from "../../../common/Input";
import validate from "../../../common/utils/validationRules";
import { ValidationTypeProps } from "../../ContactForm/types";
import SpinCustom from "../../../common/SpinCustom";

const RightBlock = ({
  title,
  content,
  button,
  icon,
  t,
  id,
}: ContentBlockProps) => {
  const [isCopied, setIsCopied] = useState(false);
  
  const { values, errors, responseApi, handleChange, handleSubmit, isLoading } = useForm(
    validate
  ) as any;

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type];
    return (
      <Zoom direction="left">
        <Span erros={errors[type]}>{ErrorMessage}</Span>
      </Zoom>
    );
  };

  async function copyTextToClipboard(text: string) {
    if ('clipboard' in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand('copy', true, text);
    }
  }

  const handleCopyClick = () => {
    // Asynchronously call copyTextToClipboard
    copyTextToClipboard(responseApi.urlCode)
      .then(() => {
        // If successful, update the isCopied state value
        notification["success"]({
          message: t("Sucesso"),
          description: t("Seu link foi copiado"),
          duration: 10,
        });
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 1500);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  return (
    <RightBlockContainer>
      <Fade direction="right">
        <Row justify="space-between" align="middle" id={id}>
          <Col lg={11} md={11} sm={11} xs={24}>
            <ContentWrapper>
              <h6>{t(title)}</h6>
              {/* <Content>{t(content)}</Content> */}
              <FormGroup 
                  autoComplete="off"
                  onSubmit={handleSubmit}>
                <Col span={24}>
                  <Input
                    type="url"
                    name="url"
                    placeholder={t("Cole aqui")}
                    value={values.url || ""}
                    onChange={handleChange}
                  />
                  {/* <ButtonContainer> */}
                    <Button width="490px" name="submit">{t("Reduzir")}</Button>
                  {/* </ButtonContainer> */}
                  <ValidationType type="url" />
                </Col>
                
              </FormGroup>
            </ContentWrapper>
          </Col>
          <Col lg={11} md={11} sm={12} xs={24}>
            <SpinCustom spinning={isLoading}>
              {responseApi.urlCode ?
              <>
                <Result
                  status="success"
                  title={t("Reduzido com sucesso")}
                  extra={[
                    <Link target={"_blank"} href={`https://rduz.me/${responseApi.urlCode}` || "#"}>{`https://rduz.me/${responseApi.urlCode}` || ""}</Link>,
                    <span></span>,
                    <ButtonSmall onClick={handleCopyClick}>{t("Copy")}</ButtonSmall>
                  ]}
                />
              </>
              :
              <SvgIcon src={icon} width="100%" height="100%" />
              }
            </SpinCustom>
          </Col>
        </Row>
      </Fade>
    </RightBlockContainer>
  );
};

export default withTranslation()(RightBlock);
