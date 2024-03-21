import { FC, ReactNode } from "react"

import style from './IconWithCount.module.scss'

interface IconWithCount {
    icon: ReactNode,
    count: number
}

export const IconWithCount:FC<IconWithCount> = ({icon, count}) =>{
    return(
        <div className={style.icon}>
            {icon}
            <span className={style.count}>{count}</span>
        </div>
    )
}