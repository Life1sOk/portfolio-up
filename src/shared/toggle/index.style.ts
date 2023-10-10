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
    width: 26px;
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
    left: 52px;
    transform: translateX(-100%);
    background: linear-gradient(135deg, #001528, #777, #3a3a3a);
  }
`;

export const LabelStyle = styled.label`
  position: relative;
  display: block;

  width: 53px;
  height: 25px;
  background: #ebebeb;
  border-radius: 20px;
  box-shadow: inset 0px 1px 1.5px rgba(0, 0, 0, 0.4),
    inset 0px -0.5px 1.5px rgba(255, 255, 255, 1);

  cursor: pointer;

  &:after {
    content: "";
    width: 23px;
    height: 23px;
    position: absolute;
    top: 1px;
    left: 1px;
    background: linear-gradient(180deg, #ffcc89, #d8860b);
    border-radius: 18px;
  }

  & .sun {
    position: absolute;
    top: 1px;
    left: 1px;
    z-index: 10;

    width: 23px;
    height: 23px;
    color: white;
    padding: 4px;
  }

  & .moon {
    position: absolute;
    top: 1px;
    right: 1px;
    z-index: 10;

    width: 23px;
    height: 23px;
    color: white;
    padding: 4px;
  }
`;
