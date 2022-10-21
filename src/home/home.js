import { Header } from "./header"
import { Footer } from "../components/footer"
import { Body } from "./body"
import './home.scss'
export const template = (root) => {
  document.title = 'Vanilla Games | Home'
  root.innerHTML = ''
  root.appendChild(Header)
  root.appendChild(Body)
  root.appendChild(Footer)
}