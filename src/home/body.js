import { Element } from "../utilities/element";
import { SideBar } from "./SideBar";
import { Main } from "./main";
import styles from './home.module'

const {create} = Element

const Body = create('div',  {class: `wrapper ${styles.flex__body}`})

Body.appendChild(SideBar)
Body.appendChild(Main)

export { Body }