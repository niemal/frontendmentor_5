import styled from "styled-components";
import { useState, createContext } from "react";
import Calculator from "../Calculator";

const Wrapper = styled.main`
  min-height: 100vh;
  display: grid;
  place-content: center;
  background-color: var(--color-main-background-theme-${(p) => p.theme});
  transition: all 0.3s ease-in;
  font-family: var(--font-primary);
  font-size: ${32 / 16}rem;
  font-weight: var(--font-weight-bold);
  padding: 12px;
`;

export const MainContext = createContext();

function MainBody() {
  const [theme, setTheme] = useState(1);
  const [entry, setEntry] = useState(["0"]);
  const [newOne, setNewOne] = useState(false);
  const [mode, setMode] = useState("none");
  const [storage, setStorage] = useState(0);
  const [equalsTrigger, setEqualsTrigger] = useState(false);

  return (
    <Wrapper theme={theme}>
      <MainContext.Provider
        value={{
          storage,
          setStorage,
          mode,
          setMode,
          theme,
          setTheme,
          entry,
          setEntry,
          newOne,
          setNewOne,
          equalsTrigger,
          setEqualsTrigger,
        }}
      >
        <Calculator />
      </MainContext.Provider>
    </Wrapper>
  );
}

export default MainBody;
