import React, { FC, useState } from 'react';

interface IContext {
    loader: [boolean, (active: boolean) => void],
}
export const ctx = React.createContext<IContext>({} as IContext)

type Props = {
    children: React.ReactNode
}
const ContextProvider: FC<Props> = ({ children }) => {
    const loader = useState<boolean>(false);
    return (
        <ctx.Provider value={{
            loader
        }}>
            {children}
        </ctx.Provider>
    )
}

export default ContextProvider;