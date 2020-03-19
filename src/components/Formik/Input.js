import React from "react";
import styled from "styled-components";
import { useField } from "formik";

const FieldWrapper = styled.div`
  height: 62px;
  width: 240px;
  margin-bottom: 30px;
  div {
    position: relative;
    height: 40px;
    & > div {
      position: absolute;
      bottom: 0;
      width: 100%;
      height: 3px;
      background: linear-gradient(90deg, #44fff4 0%, #15e198 121.83%);
      overflow: hidden;
      & > span {
        position: absolute;
        margin: 0;
        top: 0;
        left: -100%;
        background-color: #d30e0e;
        width: 100%;
        height: 100%;
        transition: translate 0.5s ease-in-out;
        transform: translateX(
          ${props => (props.touched && props.error ? "100%" : "0px")}
        );
      }
    }
  }

  input {
    border: none;
    outline: none;
    position: absolute;
    bottom: 5px;
    left: 0;
    width: 100%;
    font-size: 18px;

    &:focus + label {
      color: #15e198;
      font-size: 16px;
      transform: translateY(-22px);
    }
  }

  label {
    position: absolute;
    bottom: 5px;
    left: 0;
    transition: font-size 0.2s ease-in-out, transform 0.2s ease-in-out;
    pointer-events: none;
    transform: translateY(${props => (props.value ? "-22px" : "0px")});
    color: ${props =>
      props.touched && props.error
        ? "#D30E0E"
        : props.value
        ? "#15E198"
        : "black"};
    font-size: ${props => (props.value ? "16px" : "18px")};
  }
  span {
    margin: 8px 0;
    font-size: 14px;
    color: #d30e0e;
  }
`;

const Input = ({ placeholder, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <FieldWrapper value={meta.value} error={meta.error} touched={meta.touched}>
      <div>
        <input className="text-input" {...field} {...props} />
        <label htmlFor={props.name}>{placeholder}</label>
        <div>
          <span />
        </div>
      </div>
      <span>
        {meta.touched && meta.error ? (
          <div className="error">{meta.error}</div>
        ) : null}
      </span>
    </FieldWrapper>
  );
};

export default Input;
