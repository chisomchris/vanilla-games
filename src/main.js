import { router } from "./router";
import {BTTButton} from './utilities/components/BackToTop'
window.addEventListener('load', router)
window.addEventListener('hashchange', router)
document.body.appendChild(BTTButton)