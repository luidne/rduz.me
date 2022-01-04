import { Row, Col, Result, notification } from "antd";
import Link from "antd/lib/typography/Link";
import { withTranslation } from "react-i18next";
import { Fade, Zoom } from "react-awesome-reveal";
import { SvgIcon } from "../../../common/SvgIcon";
import { Button } from "../../../common/Button";
import { ButtonSmall } from "../../../common/ButtonSmall";
import { ContentBlockProps } from "../types";
import {
  RightBlockContainer,
  ContentWrapper,
} from "./styles";
import { FormGroup, Span } from "../../ContactForm/styles";
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
    copyTextToClipboard(responseApi.urlCode)
      .then(() => {
        notification["success"]({
          message: t("Sucesso"),
          description: t("Seu link foi copiado"),
          duration: 10,
        });
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
                    <Link key={1} target={"_blank"} href={`${process.env.REACT_APP_DOMAIN}/${responseApi.urlCode}` || "#"}>
                      {`${process.env.REACT_APP_DOMAIN}/${responseApi.urlCode}` || ""}
                    </Link>,
                    <span key={2} />,
                    <ButtonSmall key={3} onClick={handleCopyClick}>{t("Copy")}</ButtonSmall>
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
