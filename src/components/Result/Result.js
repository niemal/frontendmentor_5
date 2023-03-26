import styled, { keyframes, css } from "styled-components";
import { MainContext } from "../MainBody";
import { useState, useContext, useEffect } from "react";

const Wrapper = styled.div`
  transition: all 0.4s ease-in;
  background-color: var(--color-screen-background-theme-${(p) => p.theme});
  width: 100%;
  padding: 32px 18px;
  padding-bottom: 24px;
  justify-content: end;
  display: flex;
  gap: 1px;
  border-radius: 12px;
  position: relative;
`;

const CalculationProgress = styled.div`
  position: absolute;
  top: 4px;
  left: 12px;
  font-size: ${24 / 16}rem;
  opacity: 0.5;
  color: var(--color-text-tertiary-theme-${(p) => p.theme});
`;

const newEntry = (offset) => keyframes`
0% {
  position: absolute;
  top: 64px;
  right: ${offset}px;
  transform: scale(1.5);
  opacity: 0.3;
}
99% {
  top: 0px;
  right: ${offset}px;
  transform: scale(1);
  opacity: 1;
}
100% {
  position: relative;
}
`;

const EntryContainer = styled.div`
  position: relative;
  min-width: 10px;
`;

const createEquals = (idx) => css`
  animation: ${"0." + (idx * 5 + 10)}s ${newEntry(idx + 4)} ease-out forwards;
`;

const newInjection = css`
  animation: 0.35s ${newEntry(0)} ease-in-out forwards;
`;

const Entry = styled.span`
  color: var(--color-text-tertiary-theme-${(p) => p.theme});
  font-size: ${50 / 16}rem;
  line-height: ${40 / 16}rem;
  opacity: ${(p) => (p.shadow ? "0" : "1")};

  ${(p) => (p.new ? newInjection : "")}
  ${(p) => (p.equals ? createEquals(p.idx) : "")}
  ${(p) => (p.shadow && !p.shadowTrigger ? "display: none;" : "")}
`;

function Result() {
  const {
    theme,
    entry,
    newOne,
    setNewOne,
    equalsTrigger,
    setEqualsTrigger,
    mode,
    setMode,
    storage,
  } = useContext(MainContext);
  const [shadowTrigger, setShadowTrigger] = useState(false);

  useEffect(() => {
    if (equalsTrigger) {
      setShadowTrigger(true);
      const timer = setTimeout(() => {
        setEqualsTrigger(false);
      }, 150);

      return () => clearTimeout(timer);
    }
  }, [equalsTrigger]);

  useEffect(() => {
    if (newOne) {
      setShadowTrigger(true);
      const timer = setTimeout(() => {
        setNewOne(false);
      }, 350);

      return () => clearTimeout(timer);
    }
  }, [newOne]);

  useEffect(() => {
    if (shadowTrigger) {
      const timer = setTimeout(() => {
        setShadowTrigger(false);
      }, 350);

      return () => clearTimeout(timer);
    }
  }, [shadowTrigger]);

  return (
    <Wrapper
      theme={theme}
      aria-live={"polite"}
      aria-label={`Calculation result: ${entry.join("")}`}
    >
      <CalculationProgress theme={theme}>
        {storage > 0 ? (
          <>
            {mode === "addition" ? storage + " + ?" : ""}
            {mode === "subtraction" ? storage + " - ?" : ""}
            {mode === "division" ? storage + " / ?" : ""}
            {mode === "multiplication" ? storage + " * ?" : ""}
          </>
        ) : (
          ""
        )}
      </CalculationProgress>
      <Entry shadow={true} shadowTrigger={true}>
        0
      </Entry>
      {equalsTrigger
        ? entry.map((e, idx) => (
            <Entry key={`entry-${idx}`} theme={theme} equals={true} idx={idx}>
              {e}
            </Entry>
          ))
        : entry.map((e, idx) => {
            if (idx + 1 === entry.length) {
              return (
                <>
                  <Entry
                    key={`entry-${idx}-shadow`}
                    theme={theme}
                    shadow={true}
                    shadowTrigger={shadowTrigger}
                  >
                    {e}
                  </Entry>
                  <Entry key={`entry-${idx}`} theme={theme} new={true}>
                    {e}
                  </Entry>
                </>
              );
            }

            return (
              <Entry key={`entry-${idx}`} theme={theme}>
                {e}
              </Entry>
            );
          })}
    </Wrapper>
  );
}

export default Result;
