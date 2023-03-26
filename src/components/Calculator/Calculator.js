import styled from "styled-components";
import Button from "../Button";
import { MainContext } from "../MainBody";
import ThemeSwitch from "../ThemeSwitch";
import Result from "../Result";
import { useState, useContext, useEffect } from "react";
import { QUERIES } from "../constants";
import ClickableWrapper from "../ClickableWrapper";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
  width: 444px;

  @media ${QUERIES.phoneAndSmaller} {
    width: 100%;
  }
`;

const TopRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;

const Name = styled.span`
  font-size: ${26 / 16}rem;
  color: var(--color-text-tertiary-theme-${(p) => p.theme});
`;

const Keypad = styled.div`
  width: 100%;
  padding: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  background-color: var(--color-keypad-background-theme-${(p) => p.theme});
  border-radius: 12px;
  align-items: center;
  justify-content: center;

  @media ${QUERIES.phoneAndSmaller} {
    padding: 24px;
  }
`;

const ButtonRow = styled.div`
  width: 100%;
  display: flex;
  gap: 16px;
  flex-wrap: no-wrap;
`;

function Calculator() {
  const {
    theme,
    setTheme,
    entry,
    setEntry,
    setNewOne,
    setEqualsTrigger,
    mode,
    setMode,
    storage,
    setStorage,
  } = useContext(MainContext);

  useEffect(() => {
    if (entry.length > 1 && entry[0] === "0" && entry[1] !== ".") {
      const tmp = [...entry];
      tmp.shift();
      setEntry(tmp);
    }
  }, [entry]);

  return (
    <Wrapper>
      <TopRow>
        <Name theme={theme} aria-label={"Application name: calc"}>
          calc
        </Name>
        <ThemeSwitch />
      </TopRow>

      <Result />

      <Keypad theme={theme}>
        <ButtonRow>
          <ClickableWrapper
            typeOf={0}
            onClick={() => {
              const tmp = [...entry];
              tmp.push("7");
              setEntry(tmp);
            }}
          >
            <Button>7</Button>
          </ClickableWrapper>

          <ClickableWrapper
            typeOf={0}
            onClick={() => {
              const tmp = [...entry];
              tmp.push("8");
              setEntry(tmp);
            }}
          >
            <Button>8</Button>
          </ClickableWrapper>

          <ClickableWrapper
            typeOf={0}
            onClick={() => {
              const tmp = [...entry];
              tmp.push("9");
              setEntry(tmp);
            }}
          >
            <Button>9</Button>
          </ClickableWrapper>

          <ClickableWrapper
            typeOf={1}
            onClick={() => {
              const tmp = [...entry];
              tmp.pop();
              if (tmp.length === 0) {
                tmp.push("0");
              }
              setEntry(tmp);
            }}
          >
            <Button>DEL</Button>
          </ClickableWrapper>
        </ButtonRow>

        <ButtonRow>
          <ClickableWrapper
            typeOf={0}
            onClick={() => {
              const tmp = [...entry];
              tmp.push("4");
              setEntry(tmp);
            }}
          >
            <Button>4</Button>
          </ClickableWrapper>

          <ClickableWrapper
            typeOf={0}
            onClick={() => {
              const tmp = [...entry];
              tmp.push("5");
              setEntry(tmp);
            }}
          >
            <Button>5</Button>
          </ClickableWrapper>

          <ClickableWrapper
            typeOf={0}
            onClick={() => {
              const tmp = [...entry];
              tmp.push("6");
              setEntry(tmp);
            }}
          >
            <Button>6</Button>
          </ClickableWrapper>

          <ClickableWrapper
            typeOf={0}
            onClick={() => {
              setMode("addition");
              setStorage(parseFloat(entry.join("")));
              setEntry(["0"]);
              setNewOne(true);
            }}
          >
            <Button>+</Button>
          </ClickableWrapper>
        </ButtonRow>

        <ButtonRow>
          <ClickableWrapper
            typeOf={0}
            onClick={() => {
              const tmp = [...entry];
              tmp.push("1");
              setEntry(tmp);
            }}
          >
            <Button>1</Button>
          </ClickableWrapper>

          <ClickableWrapper
            typeOf={0}
            onClick={() => {
              const tmp = [...entry];
              tmp.push("2");
              setEntry(tmp);
            }}
          >
            <Button>2</Button>
          </ClickableWrapper>

          <ClickableWrapper
            typeOf={0}
            onClick={() => {
              const tmp = [...entry];
              tmp.push("3");
              setEntry(tmp);
            }}
          >
            <Button>3</Button>
          </ClickableWrapper>

          <ClickableWrapper
            typeOf={0}
            onClick={() => {
              setMode("subtraction");
              setStorage(parseFloat(entry.join("")));
              setEntry(["0"]);
              setNewOne(true);
            }}
          >
            <Button>-</Button>
          </ClickableWrapper>
        </ButtonRow>

        <ButtonRow>
          <ClickableWrapper
            typeOf={0}
            onClick={() => {
              const tmp = [...entry];
              tmp.push(".");
              setEntry(tmp);
            }}
          >
            <Button>.</Button>
          </ClickableWrapper>

          <ClickableWrapper
            typeOf={0}
            onClick={() => {
              if (entry.length > 0 && entry[0] === "0") {
                return;
              }

              const tmp = [...entry];
              tmp.push("0");
              setEntry(tmp);
            }}
          >
            <Button>0</Button>
          </ClickableWrapper>

          <ClickableWrapper
            typeOf={0}
            onClick={() => {
              setMode("division");
              setStorage(parseFloat(entry.join("")));
              setEntry(["0"]);
            }}
          >
            <Button>{`/`}</Button>
          </ClickableWrapper>

          <ClickableWrapper
            typeOf={0}
            onClick={() => {
              setMode("multiplication");
              setStorage(parseFloat(entry.join("")));
              setEntry(["0"]);
            }}
          >
            <Button>x</Button>
          </ClickableWrapper>
        </ButtonRow>
        <ButtonRow>
          <ClickableWrapper
            typeOf={1}
            style={{ width: "50%" }}
            onClick={() => {
              setStorage(0);
              setEntry(["0"]);
              setMode("none");
            }}
          >
            <Button>RESET</Button>
          </ClickableWrapper>

          <ClickableWrapper
            typeOf={2}
            style={{ width: "50%" }}
            onClick={() => {
              setEqualsTrigger(true);

              let result = parseFloat(entry.join(""));

              if (mode === "multiplication") {
                result = storage * result;
              }

              if (mode === "addition") {
                result = storage + result;
              }

              if (mode === "subtraction") {
                result = storage - result;
              }

              if (mode === "division" && result !== 0) {
                result = storage / result;
              }

              setEntry(String(result).split(""));
              setStorage(0);
            }}
          >
            <Button>=</Button>
          </ClickableWrapper>
        </ButtonRow>
      </Keypad>
    </Wrapper>
  );
}

export default Calculator;
