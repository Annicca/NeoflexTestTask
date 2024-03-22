import { FC } from "react";

import style from './Counter.module.scss'

interface CounterProps {
    count: number,
    handleCount: (count: number) => void
}

export const Counter:FC<CounterProps> = ({count, handleCount}) => {
    const handlePlusCount = () => {
        handleCount(count+1)
    }

    const handleMinusCount = () => {
        handleCount(count-1)
    }

    return(
        <div className={style.counter}>
            <button className={style.button} onClick={handlePlusCount}>-</button>
            <span>{count}</span>
            <button className={style.button} onClick={handleMinusCount}>+</button>
        </div>
    )
}