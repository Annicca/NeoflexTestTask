import { FC } from "react";
import classNames from "classnames";

import style from './ImgContainer.module.scss'


interface ImgContainerProps {
    src: string,
    alt: string,
    className?: string
}

export const ImgContainer:FC<ImgContainerProps> = ({src, alt, className}) => {
    return(
        <div className={classNames(style.imgContainer, className)}>
            <img src={src} alt = {alt} />
        </div>
    )
}