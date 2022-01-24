import { useState, useEffect } from "react";
import axios from "axios";
import { validateProps } from "../../common/types";

export const useForm = (validate: any, url: string) => {
  const [values, setValues] = useState({} as any);
  const [responseApi, setResponseApi] = useState({});
  const [errors, setErrors] = useState({} as validateProps);
  const [shouldSubmit, setShouldSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const _errors = validate(values);

    setResponseApi({});
    setErrors(_errors);

    var urlSplited = values.url.split("/");
    var code = urlSplited[urlSplited.length - 1];

    if (Object.keys(values).length === 1 && "".match(_errors.url)) {
      setIsLoading(true);

      axios
        .get(url+"/"+code)
        .then((res) => {        
          setResponseApi(res.data);
          setShouldSubmit(true);
          setIsLoading(false);
        });
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      // console.log("useEffect()");
      setValues("");
    }
  }, [errors, shouldSubmit]);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.persist();
    setValues((values: any) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));
    setErrors((errors) => ({ ...errors, [event.target.name]: "" }));
  };

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    responseApi,
    isLoading,
  };
};
