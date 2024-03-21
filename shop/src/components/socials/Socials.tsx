import VKICon from 'icons/vk.svg?react'
import TelegramICon from 'icons/telegram.svg?react'
import WhatsappICon from 'icons/whatsapp.svg?react'
import { FC } from 'react'
import List from '../list/List'
import { Link } from 'react-router-dom'
import { TSocial } from 'src/type/TSocial'

import style from './Socials.module.scss'

export const Socials:FC = () => {

    const socials: TSocial[] = [
        {
            icon: <VKICon />,
            link: 'https://vk.com'
        },
        {
            icon: <TelegramICon />,
            link: 'https://web.telegram.org/'
        },
        {
            icon: <WhatsappICon />,
            link: 'https://www.whatsapp.com/?lang=ru_RU'
        }
    ]

    return(
        <List items={socials} renderItem={(item) => <Link key = {item.link} to={item.link}>{item.icon}</Link>} className={style.socials} />
    )
}