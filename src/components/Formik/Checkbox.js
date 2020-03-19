import React from "react";
import styled from "styled-components";
import { useField } from "formik";

const CheckboxWrapper = styled.div`
  margin-bottom: 30px;

  a {
    color: #15e198;
    text-decoration: none;
    margin-left: 5px;
  }
  input {
    //display: none;
    position: absolute;
    top: -20px;
    left: -20px;
    pointer-events: none;

    & + label {
      cursor: pointer;
      display: flex;
      align-items: center;

      svg {
        width: 2em;
        stroke: #15e198;
        stroke-width: 5;
        fill: white;
        margin-right: 5px;

        path {
          stroke-dasharray: 320;
          stroke-dashoffset: 0;
          fill: white;
          transition: stroke-dashoffset 0.3s linear;
        }
        polyline {
          stroke-dasharray: 70;
          stroke-dashoffset: 70;
          fill: none;
          transition: stroke-dashoffset 0.3s linear;
        }
      }

      span {
        padding-top: 0.3em;
        margin-left: 0.3em;
      }
    }

    &:checked + label {
      path {
        stroke-dashoffset: 320;
      }
      polyline {
        stroke-dashoffset: 0;
      }
    }
  }
  div {
    margin: 8px 0;
    font-size: 14px;
    color: #d30e0e;
  }
`;

const Checkbox = ({ children, ...props }) => {
  const [field, meta] = useField({ ...props, type: "checkbox" });
  return (
    <CheckboxWrapper>
      <input {...field} {...props} type="checkbox" />
      <label htmlFor={props.name}>
        <svg viewBox="0 0 100 100">
          <path d="M82,89H18c-3.87,0-7-3.13-7-7V18c0-3.87,3.13-7,7-7h64c3.87,0,7,3.13,7,7v64C89,85.87,85.87,89,82,89z" />
          <polyline points="25.5,53.5 39.5,67.5 72.5,34.5 " />
        </svg>
        {children}
      </label>

      <div>{meta.touched && meta.error ? meta.error : null}</div>
    </CheckboxWrapper>
  );
};

export default Checkbox;
