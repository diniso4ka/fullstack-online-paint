import { FC } from 'react'
import s from './SettingBar.module.scss'


interface SettingBarProps {
    className?: string
}

export const SettingBar: FC<SettingBarProps> = ({ className }) => {
    return <div className={s.SettingBar}></div>
}
