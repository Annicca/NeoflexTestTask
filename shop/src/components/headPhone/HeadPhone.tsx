import { FC } from "react";
import { THeadPhone } from "src/type/THeadPhone";
import { Rate } from "../rate/Rate";
import { Price } from "../price/Price";

import style from './HeadPhone.module.scss'
import { ImgContainer } from "../imgContainer/ImgContainer";
import { addToBag } from "src/utils/bagService";

interface HeadPhoneProps {
    headPhone: THeadPhone
}

export const HeadPhone:FC<HeadPhoneProps> = ({headPhone}) => {

    return(
        <article className={style.headPhone}>
            <ImgContainer src={headPhone.img} alt = {headPhone.title} /> 
            <div className={style.info}>
                <div className={style.title}>{headPhone.title}</div>
                <Price price={headPhone.price} oldPrice={headPhone.oldPrice}/>
                <Rate rate={headPhone.rate} />
                <button onClick={() => addToBag(headPhone)} className={style.buy}>Купить</button>
            </div>
        </article>
    )
}