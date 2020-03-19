import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import Heading from "../components/Formik/Heading";
import Input from "../components/Formik/Input";
import Checkbox from "../components/Formik/Checkbox";

const FormikForm = () => {
  return (
    <>
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
          password: Yup.string().required("This field is required"),
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
        {props => {
          return (
            <Form autoComplete="off">
              <Input placeholder="E-mail" name="email" type="email" />
              <Input placeholder="First Name" name="firstName" type="text" />
              <Input placeholder="Last Name" name="lastName" type="text" />
              <Input placeholder="Password" name="password" type="password" />
              <Checkbox name="acceptedTerms" id="acceptedTerms">
                I accept the <a href="#"> terms</a>
              </Checkbox>
              <button type="submit">Submit</button>
            </Form>
          );
        }}
      </Formik>
    </>
  );
};

export default FormikForm;
