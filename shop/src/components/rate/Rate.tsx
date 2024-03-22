import { FC } from "react";
import RateIcon from 'icons/rate.svg?react'

import style from './Rate.module.scss'

interface RateProps {
    rate: number
}

export const Rate: FC<RateProps> = ({rate}) => {
    return (
        <div className={style.rate}>
            <RateIcon />
            <span>{rate}</span>
    </div>
    )
}