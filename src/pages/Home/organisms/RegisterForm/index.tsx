// libs
import React from "react";
import * as Yup from "yup";
import { Button } from "antd";
import { MailOutlined, UserOutlined, KeyOutlined } from "@ant-design/icons";
import { FastField, Form, Formik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
// components
import InputField from "custom-fields/InputField";
import PasswordField from "custom-fields/PasswordField";
// actions
import { fetchRegisterRequest } from "actions/userBehavior";
// reducers
import { AppState } from "reducers";
// hooks
import { useRouter } from "Hooks/useRouter";
// others
import { IsRequired, Login } from "constant";
import "./style.scss";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { err, isLoading } = useSelector(
    (state: AppState) => state.userBehavior
  );
  const initialValues = {
    username: "",
    email: "",
    password: "",
    passwordConfirmation: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string()
      .required(IsRequired)
      .matches(/^(?=.*\d)(?=.*[a-z]).{6,20}$/, {
        message:
          "Username required 6-20 characters contain both letters and number",
        excludeEmptyString: true,
      }),
    email: Yup.string().required(IsRequired).email("Email is invalid!!!"),
    password: Yup.string()
      .required(IsRequired)
      .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/, {
        message:
          "Password required 6-20 characters include of uppercase character",
        excludeEmptyString: true,
      }),
    passwordConfirmation: Yup.string()
      .required(IsRequired)
      .oneOf([Yup.ref("password"), ""], "Passwords must match"),
  });

  const handleOnRegisterSuccess = () => {
    router.push(`/${Login}`);
  };

  /**
   * Handle register request
   * @param {object} values - Send info of user is pressed from keyboard
   */
  const handleOnRegister = (values: { username: string; password: string }) => {
    dispatch(fetchRegisterRequest(values, handleOnRegisterSuccess));
  };

  return (
    <div className="register-form-wrapper">
      <p className="header">Đăng ký</p>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={(values) => handleOnRegister(values)}
      >
        {(formikProps) => {
          const { submitCount, handleSubmit } = formikProps;
          return (
            <Form>
              <FastField
                name="username"
                label="Username"
                component={InputField}
                placeholder="Eg: admin..."
                icon={<UserOutlined className="site-form-item-icon" />}
                submitCount={submitCount}
                hasFeedBack
              />
              <FastField
                name="email"
                label="Username"
                type="email"
                component={InputField}
                placeholder="Eg: example@citynow.com"
                icon={<MailOutlined className="site-form-item-icon" />}
                submitCount={submitCount}
                hasFeedBack
              />
              <FastField
                name="password"
                label="Password"
                type="password"
                component={PasswordField}
                placeholder="Eg: 123456..."
                icon={<KeyOutlined className="site-form-item-icon" />}
                submitCount={submitCount}
                hasFeedBack
              />
              <FastField
                name="passwordConfirmation"
                label="PasswordConfirmation"
                type="password"
                component={InputField}
                placeholder="Eg: 123456..."
                icon={<KeyOutlined className="site-form-item-icon" />}
                submitCount={submitCount}
                hasFeedBack
              />
              <Button
                onClick={() => handleSubmit()}
                loading={isLoading}
                type="primary"
              >
                Register
              </Button>
              <p>
                Have you already account? <Link to="/login">Login</Link>
              </p>
              {err && <p>{err}</p>}
            </Form>
          );
        }}
      </Formik>
    </div>
  );
};

export default RegisterForm;
