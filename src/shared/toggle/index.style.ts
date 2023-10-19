import styled from "styled-components";

export const ToggleStyle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  label,
  label:after {
    transition: 0.3s;
  }

  label:active:after {
    width: 1.625rem; /* 26px converted to rem */
  }

  input:checked + label svg.sun {
    color: #7e7e7e;
  }
  input:checked + label svg.moon {
    color: #fff;
  }
`;

export const InputStyle = styled.input`
  width: 0;
  height: 0;
  visibility: hidden;

  &:checked + label {
    background: rgba(36, 36, 36, 0.5);
  }

  &:checked + label:after {
    left: 3.25rem; /* 52px converted to rem */
    transform: translateX(-100%);
    background: linear-gradient(135deg, #001528, #777, #3a3a3a);
  }
`;

export const LabelStyle = styled.label`
  position: relative;
  display: block;

  width: 3.3125rem; /* 53px converted to rem */
  height: 1.5625rem; /* 25px converted to rem */
  background: #ebebeb;
  border-radius: 1.25rem; /* 20px converted to rem */
  box-shadow: inset 0 0.0625rem 0.09375rem rgba(0, 0, 0, 0.4),
    inset 0 -0.03125rem 0.09375rem rgba(255, 255, 255, 1);

  cursor: pointer;

  &:after {
    content: "";
    width: 1.4375rem; /* 23px converted to rem */
    height: 1.4375rem; /* 23px converted to rem */
    position: absolute;
    top: 0.0625rem; /* 1px converted to rem */
    left: 0.0625rem; /* 1px converted to rem */
    background: linear-gradient(180deg, #ffcc89, #d8860b);
    border-radius: 1.125rem; /* 18px converted to rem */
  }

  & .sun {
    position: absolute;
    top: 0.0625rem; /* 1px converted to rem */
    left: 0.0625rem; /* 1px converted to rem */
    z-index: 10;

    width: 1.4375rem; /* 23px converted to rem */
    height: 1.4375rem; /* 23px converted to rem */
    color: white;
    padding: 0.25rem; /* 4px converted to rem */
  }

  & .moon {
    position: absolute;
    top: 0.0625rem; /* 1px converted to rem */
    right: 0.0625rem; /* 1px converted to rem */
    z-index: 10;

    width: 1.4375rem; /* 23px converted to rem */
    height: 1.4375rem; /* 23px converted to rem */
    color: white;
    padding: 0.25rem; /* 4px converted to rem */
  }
`;
