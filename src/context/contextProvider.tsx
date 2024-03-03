import React, { FC, useMemo, useState } from 'react';

interface IContext {
  activeLoader: boolean;
  setActiveLoader: React.Dispatch<React.SetStateAction<boolean>>

  activeBurger: boolean;
  setActiveBurger: React.Dispatch<React.SetStateAction<boolean>>

  activeAvatar:boolean;
  setActiveAvatar:React.Dispatch<React.SetStateAction<boolean>>;

  activeModal: boolean;
  setActiveModal: React.Dispatch<React.SetStateAction<boolean>>
}
export const ctx = React.createContext<IContext>({} as IContext);

type Props = {
  children: React.ReactNode;
};
const ContextProvider: FC<Props> = ({ children }) => {
  const [activeLoader, setActiveLoader] = useState<boolean>(false);
  const [activeBurger, setActiveBurger] = useState<boolean>(false);
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const [activeAvatar,setActiveAvatar] = useState<boolean>(false)
  const obj = useMemo(
    () => ({
      activeLoader,
      setActiveLoader,
      activeBurger,
      setActiveBurger,
      activeModal,
      setActiveModal,
      activeAvatar,
      setActiveAvatar
    }),[activeLoader,activeBurger,activeModal,activeAvatar]);
  return <ctx.Provider value={obj}>{children}</ctx.Provider>;
};

export default ContextProvider;
