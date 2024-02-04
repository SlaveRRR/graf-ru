
import React,{FC,useContext} from 'react'
import { ctx } from '../../../context/contextProvider'
type Props = {
    children:React.ReactNode
}


const Main : FC<Props> = ({children}) => {
    const { burger: [isActive, setActive] } = useContext(ctx);
  return (
    <main onClick={() => setActive(false)}>
        {children}
    </main>
  )
}

export default Main