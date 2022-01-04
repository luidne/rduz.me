import { useState, useEffect } from "react";
import axios from "axios";
import { validateProps } from "../../common/types";

export const useForm = (validate: any) => {
  const [values, setValues] = useState({});
  const [responseApi, setResponseApi] = useState({});
  const [errors, setErrors] = useState({} as validateProps);
  const [shouldSubmit, setShouldSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    const _errors = validate(values);

    setResponseApi({});
    setErrors(_errors);

    if (Object.keys(values).length === 1 && "".match(_errors.url)) {
      setIsLoading(true);

      axios
        .post(process.env.REACT_APP_URL_API as string, {
          ...values,
        })
        .then((res) => {
          // console.log(JSON.stringify(res.data));
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
    setValues((values) => ({
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
