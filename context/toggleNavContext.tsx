import { createContext, useContext, useState } from 'react';

interface Props {
  children: React.ReactNode;
}

type InitialState = {
  toggleNav: boolean;
  setToggleNav: React.Dispatch<React.SetStateAction<boolean>>;
};

const ToggleNav = createContext<InitialState>({
  toggleNav: false,
  setToggleNav: () => false,
});

export const ToggleNavProvider = ({ children }: Props) => {
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <ToggleNav.Provider value={{ toggleNav, setToggleNav }}>
      {children}
    </ToggleNav.Provider>
  );
};

export const useActiveNav = () => useContext(ToggleNav);
