import React, { FC, useState } from 'react';



interface IContext{
    loader: [boolean, (active: boolean) => void],
    burger:[boolean, (active: boolean) => void],
}
export const ctx = React.createContext<IContext>({} as IContext)

type Props = {
    children: React.ReactNode
}
const ContextProvider: FC<Props> = ({ children }) => {
    const loader = useState(false);
    const burger = useState(false);
    return (
        <ctx.Provider value={{
            loader,
            burger
        }}>
            {children}
        </ctx.Provider>
    )
}

export default ContextProvider;