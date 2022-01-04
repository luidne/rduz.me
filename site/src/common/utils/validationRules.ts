import { validateProps } from "../../common/types";

export default function validate(values: validateProps) {
  let errors = {} as validateProps;

  if (!values.url) {
    errors.url = "URL necessário";
  } else if (!/^(ftp|http|https):\/\/[^ "]+$/.test(values.url)) {
    errors.url = "URL é inválido";
  } else {
    errors.url = "";
  }

  return errors;
}
