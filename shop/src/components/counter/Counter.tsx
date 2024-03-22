import { FC } from "react";
import { useBagDispatch } from "src/context/context";
import { BagActionsTypes } from "src/type/TBagItem";

import style from './Counter.module.scss'

interface CounterProps {
    count: number,
    id: number
}

export const Counter:FC<CounterProps> = ({count, id}) => {
    
    const dispatch = useBagDispatch()
    
    const handlePlusCount = () => {
        dispatch({
            type: BagActionsTypes.UPDATE_COUNT_ITEM, 
            payload: {id: id, count: count+1}
        })
    }

    const handleMinusCount = () => {
        dispatch({
            type: BagActionsTypes.UPDATE_COUNT_ITEM, 
            payload: {id: id, count: count-1}
        })
    }

    return(
        <div className={style.counter}>
            <button 
            type="button" 
            className={style.button} 
            disabled = {count === 1}
            onClick={handleMinusCount}>
                -
            </button>
            <span>{count}</span>
            <button 
            type="button" 
            className={style.button} 
            onClick={handlePlusCount}>+</button>
        </div>
    )
}