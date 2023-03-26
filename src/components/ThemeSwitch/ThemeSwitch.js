import styled from "styled-components";
import { MainContext } from "../MainBody";
import { useContext } from "react";
import ClickableWrapper from "../ClickableWrapper";

const Wrapper = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease-in-out;
`;

const Name = styled.div`
  font-size: ${12 / 16}rem;
  color: var(--color-text-tertiary-theme-${(p) => p.theme});
`;

const SwitchWrapper = styled.div`
  position: relative;
  width: 60px;
  height: 24px;
  border-radius: 24px;
  background-color: var(--color-toggle-background-theme-${(p) => p.theme});
`;

const OptionMark = styled.button`
  position: absolute;
  cursor: pointer;
  top: -32px;
  font-size: ${14 / 16}rem;
  padding: 12px;
  padding-bottom: 32px;
  color: var(--color-text-tertiary-theme-${(p) => p.theme});

  left: ${(p) => {
    switch (p.entry) {
      case 1:
        return "-4px";
      case 2:
        return "12px";
      case 3:
        return "30px";
      default:
        return;
    }
  }};

  transition: all 0.3s ease-in-out;
  border-radius: 4px;

  &:focus {
    outline: 3px groove var(--color-offkey-background-theme-${(p) => p.theme});
    outline-offset: 0px;
  }
`;

const Ball = styled.div`
  position: absolute;
  transition: all 0.15s ease-in;
  left: ${(p) => {
    switch (p.theme) {
      case 1:
        return "4px";
      case 2:
        return "21px";
      case 3:
        return "40px";
      default:
        return;
    }
  }};
  top: 4px;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  background-color: var(--color-key-background-toggle-theme-${(p) => p.theme});
`;

function ThemeSwitch() {
  const { theme, setTheme } = useContext(MainContext);

  return (
    <Wrapper>
      <Name theme={theme}>THEME</Name>
      <SwitchWrapper theme={theme} aria-label={"Theme switcher navigation"}>
        <ClickableWrapper
          entry={1}
          theme={theme}
          onClick={() => {
            setTheme(1);
          }}
          aria-label={"Theme #1 button"}
        >
          <OptionMark>1</OptionMark>
        </ClickableWrapper>

        <ClickableWrapper
          entry={2}
          theme={theme}
          onClick={() => {
            setTheme(2);
          }}
          aria-label={"Theme #2 button"}
        >
          <OptionMark>2</OptionMark>
        </ClickableWrapper>

        <ClickableWrapper
          entry={3}
          theme={theme}
          onClick={() => {
            setTheme(3);
          }}
          aria-label={"Theme #3 button"}
        >
          <OptionMark>3</OptionMark>
        </ClickableWrapper>

        <Ball theme={theme} />
      </SwitchWrapper>
    </Wrapper>
  );
}

export default ThemeSwitch;
