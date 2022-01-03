import { useState, useEffect } from "react";
import { notification } from "antd";
import axios from "axios";

export const useForm = (validate: any) => {
  const [values, setValues] = useState({});
  const [responseApi, setResponseApi] = useState({});
  const [errors, setErrors] = useState({});
  const [shouldSubmit, setShouldSubmit] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const openNotificationWithIcon = () => {
    notification["success"]({
      message: "Success",
      description: "Your message has been sent!",
    });
  };

  const handleSubmit = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    setResponseApi({});
    setErrors(validate(values));
    // Your url for API
    const url = "http://localhost:5001/rduzme-197c9/us-central1/apiV1/do";
    // const url = "https://rduzme-api.firebaseapp.com/do";
    if (Object.keys(values).length === 1) {
      setIsLoading(true);
      
      axios
        .post(url, {
          ...values,
        })
        .then((res) => {
          console.log(JSON.stringify(res.data));
          setResponseApi(res.data);         
          setShouldSubmit(true);
          setIsLoading(false);
        });
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && shouldSubmit) {
      console.log("useEffect()");
      // setValues("");
      //openNotificationWithIcon();
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
