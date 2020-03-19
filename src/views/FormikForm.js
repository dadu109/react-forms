import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import styled from "styled-components";
import Heading from "../components/Formik/Heading";
import Input from "../components/Formik/Input";
import Checkbox from "../components/Formik/Checkbox";
import Button from "../components/Formik/Button";
import welcomeSvg from "../assets/undraw_welcome_cats_thqn.svg";

const FormWrapper = styled.div`
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  & > form {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
  }
`;

const Wrapper = styled.div`
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  & > .image {
    min-width: 70vw;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: inset -7px 0px 10px rgba(0, 0, 0, 0.25);
    @media (max-width: 1250px) {
      display: none;
    }
  }
`;

const FormikForm = () => {
  return (
    <Wrapper>
      <div className="image">
        <img src={welcomeSvg} alt="Welcome Image" />
      </div>
      <FormWrapper>
        <Heading>SIGN UP</Heading>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            acceptedTerms: false
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("This field is required"),
            lastName: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("This field is required"),
            email: Yup.string()
              .email("Invalid email address")
              .required("This field is required"),
            password: Yup.string()
              .required("This field is required")
              .matches(
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/,
                "Password must contain minimum eight characters, at least one uppercase letter, one lowercase letter and one number"
              ),
            acceptedTerms: Yup.boolean()
              .required("Required")
              .oneOf([true], "You must accept the terms and conditions.")
          })}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          <Form autoComplete="off">
            <Input placeholder="E-mail" name="email" type="email" />
            <Input placeholder="First Name" name="firstName" type="text" />
            <Input placeholder="Last Name" name="lastName" type="text" />
            <Input placeholder="Password" name="password" type="password" />
            <Checkbox name="acceptedTerms" id="acceptedTerms">
              I accept the <a href="#"> terms</a>
            </Checkbox>
            <Button type="submit">Sign up</Button>
          </Form>
        </Formik>
      </FormWrapper>
    </Wrapper>
  );
};

export default FormikForm;
