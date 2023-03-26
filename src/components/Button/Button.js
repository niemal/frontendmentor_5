import styled from "styled-components";
import { useContext, useState } from "react";
import { MainContext } from "../MainBody";
import { QUERIES } from "../constants";

const Wrapper = styled.button`
  position: relative;
  cursor: pointer;
  width: 108px;
  height: 54px;
  border-radius: 8px;
  transition: all 0.3s ease-in;

  &:focus {
    outline: 5px groove
      var(--color-offkey-background-theme-${(p) => p.themestate});
    outline-offset: 8px;
  }

  @media ${QUERIES.phoneAndSmaller} {
    width: 60px;
    height: 60px;
  }
`;

const OuterButton = styled.div`
  user-select: none;
  position: absolute;
  top: 0;
  left: 0;
  padding: 24px;
  padding-bottom: 16px;
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: ${(p) => {
    switch (p.typeOf) {
      case 0:
        return `var(--color-offkey-background-theme-${p.theme})`;
      case 1:
        return `var(--color-key-background-theme-${p.theme})`;
      case 2:
        return `var(--color-key-background-toggle-theme-${p.theme})`;
      default:
        return;
    }
  }};
  color: ${(p) => {
    switch (p.typeOf) {
      case 0:
        return `var(--color-text-primary-theme-${p.theme})`;
      case 1:
        return `var(--color-text-tertiary-theme-${p.theme})`;
      case 2:
        return `var(--color-text-tertiary-theme-${p.theme})`;
      default:
        return;
    }
  }};
  ${(p) =>
    p.theme === 2 && (p.typeOf === 1 || p.typeOf === 2)
      ? "color: var(--color-text-secondary-theme-2);"
      : ""}
  ${(p) =>
    p.theme === 3 && p.typeOf === 0
      ? "color: var(--color-text-tertiary-theme-3);"
      : ""}
  ${(p) =>
    p.theme === 3 && p.typeOf === 1
      ? "color: var(--color-text-primary-theme-3);"
      : ""}
      ${(p) =>
    p.theme === 3 && p.typeOf === 2
      ? "color: var(--color-text-secondary-theme-3);"
      : ""}
  display: grid;
  place-content: center;
  font-size: ${(p) => (p.typeOf !== 0 ? 26 / 16 : 36 / 16)}rem;

  z-index: 5;

  transition: all 0.15s ease-in-out;
  transition: color background-color 0.35s ease-in;
  transform: translateY(${(p) => p.press});
`;

const Shadow = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  background-color: ${(p) => {
    switch (p.typeOf) {
      case 0:
        return `var(--color-offkey-shadow-theme-${p.theme})`;
      case 1:
        return `var(--color-key-shadow-theme-${p.theme})`;
      case 2:
        return `var(--color-key-shadow-toggle-theme-${p.theme})`;
    }
  }};
  position: absolute;
  top: 4px;
  left: 0;
`;

function Button({ typeOf, children, ...props }) {
  const { theme } = useContext(MainContext);
  const [press, setPress] = useState("0px");

  return (
    <Wrapper themestate={theme} {...props}>
      <OuterButton
        theme={theme}
        typeOf={typeOf}
        press={press}
        onMouseUp={() => {
          setTimeout(() => {
            setPress("0px");
          }, 150);
        }}
        onMouseDown={() => {
          setPress("4px");
        }}
      >
        {children}
      </OuterButton>
      <Shadow theme={theme} typeOf={typeOf} />
    </Wrapper>
  );
}

export default Button;
