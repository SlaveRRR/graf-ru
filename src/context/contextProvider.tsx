import React, { FC, useMemo, useState } from 'react';

interface IContext {
  activeLoader: boolean;
  setActiveLoader: (activeLoader: boolean) => void;

  activeBurger: boolean;
  setActiveBurger: (activeBurger: boolean) => void;

  activeModal: boolean;
  setActiveModal: (activeModal: boolean) => void;
}
export const ctx = React.createContext<IContext>({} as IContext);

type Props = {
  children: React.ReactNode;
};
const ContextProvider: FC<Props> = ({ children }) => {
  const [activeLoader, setActiveLoader] = useState<boolean>(false);
  const [activeBurger, setActiveBurger] = useState<boolean>(false);
  const [activeModal, setActiveModal] = useState<boolean>(false);

  const obj = useMemo(
    () => ({
      activeLoader,
      setActiveLoader,
      activeBurger,
      setActiveBurger,
      activeModal,
      setActiveModal
    }),[activeLoader,activeBurger,activeModal]);
  return <ctx.Provider value={obj}>{children}</ctx.Provider>;
};

export default ContextProvider;
