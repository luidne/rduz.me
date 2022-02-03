import { Row, Col, Result } from "antd";
import { withTranslation } from "react-i18next";
import { Slide, Zoom } from "react-awesome-reveal";
import { Button } from "../../common/Button";
import { MiddleBlockSection, ContentWrapper, Span, FormGroup } from "./styles";
import { useState } from "react";
import Input from "../../common/Input";
import validate from "../../common/utils/validationRules";
import SpinCustom from "../../common/SpinCustom";
import { useForm } from "./useForm";
import { ValidationTypeProps } from "../../common/types";

interface MiddleBlockProps {
  title: string;
  t: any;
}

const MiddleBlock = ({ title, t }: MiddleBlockProps) => {
  const [url, setUrl] = useState("");

  const { values, errors, responseApi, handleChange, handleSubmit, isLoading } = useForm(
    validate, process.env.REACT_APP_URL_API_VISITS as string
  ) as any;

  const ValidationType = ({ type }: ValidationTypeProps) => {
    const ErrorMessage = errors[type];
    return (
      <Zoom direction="left">
        <Span erros={errors[type]}>{ErrorMessage}</Span>
      </Zoom>
    );
  };
  
  return (
    <MiddleBlockSection>
      <Slide direction="up">
        <Row justify="center" align="middle">
          <ContentWrapper>
            <Col lg={24} md={24} sm={24} xs={24}>
              <h6>{t(title)}</h6>
              <FormGroup 
                  autoComplete="off"
                  onSubmit={handleSubmit}>
                <Col span={24}>
                  <Input 
                    type="url"
                    name="url"
                    placeholder={t("Cole aqui link rduz.me")}
                    value={values.url || ""}
                    onChange={handleChange}
                  />
                  <Button width="490px" name="submit">{t("Verificar")}</Button>
                  <ValidationType type="url" />
                </Col>
              </FormGroup>
              <Col lg={24} md={11} sm={12} xs={24}>

                <SpinCustom spinning={isLoading}>
                {
                  responseApi.code ?
                  
                    <Result
                    icon={<></>}
                      title={""}
                      extra={[
                        <h2>{responseApi.visits} {t("Visitas")}</h2>
                      ]}
                    />
                  :
                  <Span />
                }
                </SpinCustom>

              </Col>
            </Col>
          </ContentWrapper>
        </Row>
      </Slide>
    </MiddleBlockSection>
  );
};

export default withTranslation()(MiddleBlock);
