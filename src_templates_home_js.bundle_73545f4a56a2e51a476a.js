"use strict";
(self["webpackChunkvanilla_games"] = self["webpackChunkvanilla_games"] || []).push([["src_templates_home_js"],{

/***/ "./src/home/About.js":
/*!***************************!*\
  !*** ./src/home/About.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "About": () => (/* binding */ about)
/* harmony export */ });
/* harmony import */ var _utilities_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/element */ "./src/utilities/element.js");
/* harmony import */ var _home_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.module */ "./src/home/home.module.scss");


const {
  create
} = _utilities_element__WEBPACK_IMPORTED_MODULE_0__.Element;
const about = create('section', {
  class: `about`
}, {
  id: 'about'
});
const header = create('h2');
header.textContent = 'About Vanilla Games';
const para = create('p');
para.textContent = `This project is JavaScript centered. All the parts of the page(s) are to be generated solely using vanilla JavaScript, no use of framework or library (except personally developed library) is allowed. `;
const para1 = create('p');
para1.textContent = `Development and Build packages shall be allowed, also any method of styling shall be allowed. However, the recommended approach is using the CSS module pattern to avoid collisions. `;
const para2 = create('p');
para2.textContent = ` We encourage the use of proper naming convention, use of camalCase is the required style. Ensure use of clear and concise variable names, and also make proper choice of documentation.`;
about.appendChild(header);
about.appendChild(para);
about.appendChild(para1);
about.appendChild(para2);


/***/ }),

/***/ "./src/home/Challenge.js":
/*!*******************************!*\
  !*** ./src/home/Challenge.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Challenge": () => (/* binding */ challenge)
/* harmony export */ });
/* harmony import */ var _utilities_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/element */ "./src/utilities/element.js");

// import styles from './home.module'

const {
  create
} = _utilities_element__WEBPACK_IMPORTED_MODULE_0__.Element;
const challenge = create('section', {
  class: `challenge`
}, {
  id: 'challenge'
});
const header = create('h2');
header.textContent = 'The Challenge';
const para = create('p');
para.textContent = `Do you have what it takes to be called a JavaScript developer? Are you part of the Vanilla folks? `;
const para1 = create('p');
para1.textContent = `If yes, Then this is for you!!! Create JavaScript only pages and showcase your work here. You can contribute to existing page here or add you beautifully crafted webpage using JavaScript. `;
const para2 = create('p');
para2.textContent = `Are you up to the tasks? Happy coding, viola!  `;
challenge.appendChild(header);
challenge.appendChild(para);
challenge.appendChild(para1);
challenge.appendChild(para2);


/***/ }),

/***/ "./src/home/SideBar.js":
/*!*****************************!*\
  !*** ./src/home/SideBar.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SideBar": () => (/* binding */ aside)
/* harmony export */ });
/* harmony import */ var _utilities_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/element */ "./src/utilities/element.js");
/* harmony import */ var _home_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.module */ "./src/home/home.module.scss");


const {
  create
} = _utilities_element__WEBPACK_IMPORTED_MODULE_0__.Element;
const aside = create('aside', {
  class: `${_home_module__WEBPACK_IMPORTED_MODULE_1__["default"].flex__aside}`
});
const ul = create('ul', {
  class: `${_home_module__WEBPACK_IMPORTED_MODULE_1__["default"].ul}`
});
const nav = create('nav');

// {'About': '#about'}, {'Challenge': '#challenge'}
const navLinks = [{
  'crown and anchor': 'crown_and_anchor'
}, {
  'rock paper scissors': 'rock_paper_scissors'
}, {
  'tic tac toe': 'tic_tac_toe'
}];
navLinks.forEach(nav => {
  const li = create('li');
  const href = `#${Object.values(nav)}`;
  const a = create('a', {
    href
  }, {
    class: `${_home_module__WEBPACK_IMPORTED_MODULE_1__["default"].lia}`
  });
  li.appendChild(a);
  li.addEventListener('click', () => {
    var _document$querySelect;
    li.parentElement.parentElement.parentElement.classList.remove(`${_home_module__WEBPACK_IMPORTED_MODULE_1__["default"].show__aside}`);
    (_document$querySelect = document.querySelector('button.icon')) === null || _document$querySelect === void 0 ? void 0 : _document$querySelect.classList.remove(`${_home_module__WEBPACK_IMPORTED_MODULE_1__["default"].close__icon}`);
  });
  ul.appendChild(li);
  a.textContent = `${Object.keys(nav)}`;
});
nav.appendChild(ul);
function setNavMinHeight() {
  const header = document.querySelector('header');
  const footer = document.querySelector('footer');
  const page = document.querySelector('#root');
  const pageWidth = page.getBoundingClientRect().width;
  const heightHeader = header ? header.getBoundingClientRect().height : 40;
  const heightFooter = footer ? footer.getBoundingClientRect().height : 40;
  aside.style['minHeight'] = pageWidth < 820 ? `calc(100vh - ${heightHeader - heightFooter}px) ` : '0px';
}
setNavMinHeight();
window.addEventListener('resize', setNavMinHeight);
aside.appendChild(nav);


/***/ }),

/***/ "./src/home/Usage.js":
/*!***************************!*\
  !*** ./src/home/Usage.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Usage": () => (/* binding */ usage)
/* harmony export */ });
/* harmony import */ var _utilities_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/element */ "./src/utilities/element.js");
/* harmony import */ var _home_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.module */ "./src/home/home.module.scss");


const {
  create
} = _utilities_element__WEBPACK_IMPORTED_MODULE_0__.Element;
const list = create('ul');
const usage = create('section', {
  class: `usage`
}, {
  id: 'usage'
});
const header = create('h2');
header.textContent = 'Usage';
const para = create('p');
para.textContent = `How to contribute to the projects`;
usage.appendChild(header);
usage.appendChild(para);
usage.appendChild(list);
const li1 = create('li');
li1.innerHTML = 'fork the the <a href="https://github.com/chisomchris/vanilla-games" target="_blank">Vanilla Games</a> repository.';
const li2 = create('li');
li2.innerText = 'clone this project from  github repository into your local machine.';
const li3 = create('li');
li3.innerText = 'open your terminal and change to your project root directory';
const li4 = create('li');
li4.innerHTML = `run the script <span class="${_home_module__WEBPACK_IMPORTED_MODULE_1__["default"].code}">npm install</span> to add dependecies to the project`;
const li5 = create('li');
li5.innerHTML = `run the script <span class="${_home_module__WEBPACK_IMPORTED_MODULE_1__["default"].code}">npm start</span>, to test if webpack development server is working properly ( It should open localhost : port 8080 by default ).`;
const li6 = create('li');
li6.innerHTML = `run the script <span class="${_home_module__WEBPACK_IMPORTED_MODULE_1__["default"].code}"> npm run build </span> to bundle production build version.`;
const li7 = create('li');
li7.innerHTML = `if you are satisfied with your work and want to showcase it, submit a pull request to <a href="https://github.com/chisomchris/vanilla-games" target="_blank">github.com/chisomchris/vanilla-games</a>`;
list.append(li1, li2, li3, li4, li5, li6, li7);

// const li8 = create('li')
// const li9 = create('li')



/***/ }),

/***/ "./src/home/body.js":
/*!**************************!*\
  !*** ./src/home/body.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Body": () => (/* binding */ Body)
/* harmony export */ });
/* harmony import */ var _utilities_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/element */ "./src/utilities/element.js");
/* harmony import */ var _SideBar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SideBar */ "./src/home/SideBar.js");
/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./main */ "./src/home/main.js");
/* harmony import */ var _home_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.module */ "./src/home/home.module.scss");




const {
  create
} = _utilities_element__WEBPACK_IMPORTED_MODULE_0__.Element;
const Body = create('div', {
  class: `wrapper ${_home_module__WEBPACK_IMPORTED_MODULE_3__["default"].flex__body}`
});
Body.appendChild(_SideBar__WEBPACK_IMPORTED_MODULE_1__.SideBar);
Body.appendChild(_main__WEBPACK_IMPORTED_MODULE_2__.Main);


/***/ }),

/***/ "./src/home/header.js":
/*!****************************!*\
  !*** ./src/home/header.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home.scss */ "./src/home/home.scss");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/home.module */ "./src/home/home.module.scss");
/* harmony import */ var _utilities_element__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../utilities/element */ "./src/utilities/element.js");



const {
  create
} = _utilities_element__WEBPACK_IMPORTED_MODULE_2__.Element;
const Div = create('div');
const button = create('button', {
  class: `icon ${_home_home_module__WEBPACK_IMPORTED_MODULE_1__["default"].button}`
});
const header = create('header', {
  class: `${_home_home_module__WEBPACK_IMPORTED_MODULE_1__["default"].header}`
});
button.addEventListener('click', () => {
  document.querySelector('aside').classList.toggle(`${_home_home_module__WEBPACK_IMPORTED_MODULE_1__["default"].show__aside}`);
  button.classList.toggle(`${_home_home_module__WEBPACK_IMPORTED_MODULE_1__["default"].close__icon}`);
});
const span = create('span', {
  class: `${_home_home_module__WEBPACK_IMPORTED_MODULE_1__["default"].icon__span}`
});
button.appendChild(span);
Div.appendChild(button);
const logo = create('a', {
  href: '/#'
});
logo.textContent = 'Vanilla Games';
logo.classList = `${_home_home_module__WEBPACK_IMPORTED_MODULE_1__["default"].logo} ${_home_home_module__WEBPACK_IMPORTED_MODULE_1__["default"].calign}`;
const wrapper = create('div', {
  class: `${_home_home_module__WEBPACK_IMPORTED_MODULE_1__["default"].calign} wrapper ${_home_home_module__WEBPACK_IMPORTED_MODULE_1__["default"].flex}`
});
wrapper.appendChild(logo);
header.appendChild(wrapper);
wrapper.appendChild(Div);


/***/ }),

/***/ "./src/home/home.js":
/*!**************************!*\
  !*** ./src/home/home.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "template": () => (/* binding */ template)
/* harmony export */ });
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./header */ "./src/home/header.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/footer */ "./src/components/footer.js");
/* harmony import */ var _body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./body */ "./src/home/body.js");
/* harmony import */ var _home_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home.scss */ "./src/home/home.scss");




const template = root => {
  document.title = 'Vanilla Games | Home';
  root.innerHTML = '';
  root.appendChild(_header__WEBPACK_IMPORTED_MODULE_0__.Header);
  root.appendChild(_body__WEBPACK_IMPORTED_MODULE_2__.Body);
  root.appendChild(_components_footer__WEBPACK_IMPORTED_MODULE_1__.Footer);
};

/***/ }),

/***/ "./src/home/main.js":
/*!**************************!*\
  !*** ./src/home/main.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Main": () => (/* binding */ main)
/* harmony export */ });
/* harmony import */ var _utilities_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/element */ "./src/utilities/element.js");
/* harmony import */ var _home_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./home.module */ "./src/home/home.module.scss");
/* harmony import */ var _About__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./About */ "./src/home/About.js");
/* harmony import */ var _Challenge__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Challenge */ "./src/home/Challenge.js");
/* harmony import */ var _assets_images_stephen_leonardi_Zn2McoYVU7k_unsplash_jpg__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/images/stephen-leonardi-Zn2McoYVU7k-unsplash.jpg */ "./src/assets/images/stephen-leonardi-Zn2McoYVU7k-unsplash.jpg");
/* harmony import */ var _Usage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Usage */ "./src/home/Usage.js");






const {
  create
} = _utilities_element__WEBPACK_IMPORTED_MODULE_0__.Element;
const main = create('main', {
  class: `${_home_module__WEBPACK_IMPORTED_MODULE_1__["default"].flex__main}`
});
const hero = create('div', {
  class: `${_home_module__WEBPACK_IMPORTED_MODULE_1__["default"].img__cont} ${_home_module__WEBPACK_IMPORTED_MODULE_1__["default"].hero}`
});
const imgCont = create('div', {
  class: `${_home_module__WEBPACK_IMPORTED_MODULE_1__["default"].image__cont}`
});
const img = create('img', {
  src: `${_assets_images_stephen_leonardi_Zn2McoYVU7k_unsplash_jpg__WEBPACK_IMPORTED_MODULE_4__}`
}, {
  alt: 'hero img'
}, {
  class: `${_home_module__WEBPACK_IMPORTED_MODULE_1__["default"].hero__img}`
});
imgCont.appendChild(img);
hero.appendChild(imgCont);
main.appendChild(hero);
main.appendChild(_About__WEBPACK_IMPORTED_MODULE_2__.About);
main.appendChild(_Challenge__WEBPACK_IMPORTED_MODULE_3__.Challenge);
main.appendChild(_Usage__WEBPACK_IMPORTED_MODULE_5__.Usage);


/***/ }),

/***/ "./src/templates/home.js":
/*!*******************************!*\
  !*** ./src/templates/home.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/home */ "./src/home/home.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_home_home__WEBPACK_IMPORTED_MODULE_0__.template);

/***/ }),

/***/ "./src/assets/images/stephen-leonardi-Zn2McoYVU7k-unsplash.jpg":
/*!*********************************************************************!*\
  !*** ./src/assets/images/stephen-leonardi-Zn2McoYVU7k-unsplash.jpg ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = "assets/images/242063e02e07e66d2f98.jpg";

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3RlbXBsYXRlc19ob21lX2pzLmJ1bmRsZV83MzU0NWY0YTU2YTJlNTFhNDc2YS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFDYjtBQUVsQyxNQUFNO0VBQUVFO0FBQU8sQ0FBQyxHQUFHRix1REFBTztBQUUxQixNQUFNRyxLQUFLLEdBQUdELE1BQU0sQ0FBQyxTQUFTLEVBQUU7RUFBQ0UsS0FBSyxFQUFHO0FBQU0sQ0FBQyxFQUFFO0VBQUVDLEVBQUUsRUFBRTtBQUFPLENBQUMsQ0FBQztBQUNqRSxNQUFNQyxNQUFNLEdBQUdKLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDM0JJLE1BQU0sQ0FBQ0MsV0FBVyxHQUFHLHFCQUFxQjtBQUMxQyxNQUFNQyxJQUFJLEdBQUdOLE1BQU0sQ0FBQyxHQUFHLENBQUM7QUFDeEJNLElBQUksQ0FBQ0QsV0FBVyxHQUFJLDBNQUF5TTtBQUU3TixNQUFNRSxLQUFLLEdBQUdQLE1BQU0sQ0FBQyxHQUFHLENBQUM7QUFDekJPLEtBQUssQ0FBQ0YsV0FBVyxHQUFJLHVMQUFzTDtBQUUzTSxNQUFNRyxLQUFLLEdBQUdSLE1BQU0sQ0FBQyxHQUFHLENBQUM7QUFDekJRLEtBQUssQ0FBQ0gsV0FBVyxHQUFJLDBMQUF5TDtBQUU5TUosS0FBSyxDQUFDUSxXQUFXLENBQUNMLE1BQU0sQ0FBQztBQUN6QkgsS0FBSyxDQUFDUSxXQUFXLENBQUNILElBQUksQ0FBQztBQUN2QkwsS0FBSyxDQUFDUSxXQUFXLENBQUNGLEtBQUssQ0FBQztBQUN4Qk4sS0FBSyxDQUFDUSxXQUFXLENBQUNELEtBQUssQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BCdUI7QUFDL0M7O0FBRUEsTUFBTTtFQUFFUjtBQUFPLENBQUMsR0FBR0YsdURBQU87QUFFMUIsTUFBTWEsU0FBUyxHQUFHWCxNQUFNLENBQUMsU0FBUyxFQUFFO0VBQUNFLEtBQUssRUFBRztBQUFVLENBQUMsRUFBRTtFQUFDQyxFQUFFLEVBQUU7QUFBVyxDQUFDLENBQUM7QUFD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LEtBQUssRUFBRyxHQUFFSCxnRUFBbUI7QUFBQyxDQUFDLENBQUM7QUFDL0QsTUFBTXFGLEdBQUcsR0FBR3BGLE1BQU0sQ0FBQyxLQUFLLEVBQUU7RUFBQ3FGLEdBQUcsRUFBRyxHQUFFUixxRkFBTTtBQUFDLENBQUMsRUFBRTtFQUFDUyxHQUFHLEVBQUU7QUFBVSxDQUFDLEVBQUU7RUFBQ3BGLEtBQUssRUFBRyxHQUFFSCw4REFBaUI7QUFBQyxDQUFDLENBQUM7QUFFL0ZtRixPQUFPLENBQUN6RSxXQUFXLENBQUMyRSxHQUFHLENBQUM7QUFDeEJKLElBQUksQ0FBQ3ZFLFdBQVcsQ0FBQ3lFLE9BQU8sQ0FBQztBQUV6QkosSUFBSSxDQUFDckUsV0FBVyxDQUFDdUUsSUFBSSxDQUFDO0FBQ3RCRixJQUFJLENBQUNyRSxXQUFXLENBQUNDLHlDQUFLLENBQUM7QUFDdkJvRSxJQUFJLENBQUNyRSxXQUFXLENBQUNHLGlEQUFTLENBQUM7QUFDM0JrRSxJQUFJLENBQUNyRSxXQUFXLENBQUNrRCx5Q0FBSyxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEJnQjtBQUN2QyxpRUFBZWUsZ0RBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92YW5pbGxhLWdhbWVzLy4vc3JjL2hvbWUvQWJvdXQuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYS1nYW1lcy8uL3NyYy9ob21lL0NoYWxsZW5nZS5qcyIsIndlYnBhY2s6Ly92YW5pbGxhLWdhbWVzLy4vc3JjL2hvbWUvU2lkZUJhci5qcyIsIndlYnBhY2s6Ly92YW5pbGxhLWdhbWVzLy4vc3JjL2hvbWUvVXNhZ2UuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYS1nYW1lcy8uL3NyYy9ob21lL2JvZHkuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYS1nYW1lcy8uL3NyYy9ob21lL2hlYWRlci5qcyIsIndlYnBhY2s6Ly92YW5pbGxhLWdhbWVzLy4vc3JjL2hvbWUvaG9tZS5qcyIsIndlYnBhY2s6Ly92YW5pbGxhLWdhbWVzLy4vc3JjL2hvbWUvbWFpbi5qcyIsIndlYnBhY2s6Ly92YW5pbGxhLWdhbWVzLy4vc3JjL3RlbXBsYXRlcy9ob21lLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hvbWUubW9kdWxlJ1xyXG5cclxuY29uc3QgeyBjcmVhdGUgfSA9IEVsZW1lbnRcclxuXHJcbmNvbnN0IGFib3V0ID0gY3JlYXRlKCdzZWN0aW9uJywge2NsYXNzOiBgYWJvdXRgfSwgeyBpZDogJ2Fib3V0J30pXHJcbmNvbnN0IGhlYWRlciA9IGNyZWF0ZSgnaDInKVxyXG5oZWFkZXIudGV4dENvbnRlbnQgPSAnQWJvdXQgVmFuaWxsYSBHYW1lcydcclxuY29uc3QgcGFyYSA9IGNyZWF0ZSgncCcpXHJcbnBhcmEudGV4dENvbnRlbnQgPSBgVGhpcyBwcm9qZWN0IGlzIEphdmFTY3JpcHQgY2VudGVyZWQuIEFsbCB0aGUgcGFydHMgb2YgdGhlIHBhZ2UocykgYXJlIHRvIGJlIGdlbmVyYXRlZCBzb2xlbHkgdXNpbmcgdmFuaWxsYSBKYXZhU2NyaXB0LCBubyB1c2Ugb2YgZnJhbWV3b3JrIG9yIGxpYnJhcnkgKGV4Y2VwdCBwZXJzb25hbGx5IGRldmVsb3BlZCBsaWJyYXJ5KSBpcyBhbGxvd2VkLiBgXHJcblxyXG5jb25zdCBwYXJhMSA9IGNyZWF0ZSgncCcpXHJcbnBhcmExLnRleHRDb250ZW50ID0gYERldmVsb3BtZW50IGFuZCBCdWlsZCBwYWNrYWdlcyBzaGFsbCBiZSBhbGxvd2VkLCBhbHNvIGFueSBtZXRob2Qgb2Ygc3R5bGluZyBzaGFsbCBiZSBhbGxvd2VkLiBIb3dldmVyLCB0aGUgcmVjb21tZW5kZWQgYXBwcm9hY2ggaXMgdXNpbmcgdGhlIENTUyBtb2R1bGUgcGF0dGVybiB0byBhdm9pZCBjb2xsaXNpb25zLiBgXHJcblxyXG5jb25zdCBwYXJhMiA9IGNyZWF0ZSgncCcpXHJcbnBhcmEyLnRleHRDb250ZW50ID0gYCBXZSBlbmNvdXJhZ2UgdGhlIHVzZSBvZiBwcm9wZXIgbmFtaW5nIGNvbnZlbnRpb24sIHVzZSBvZiBjYW1hbENhc2UgaXMgdGhlIHJlcXVpcmVkIHN0eWxlLiBFbnN1cmUgdXNlIG9mIGNsZWFyIGFuZCBjb25jaXNlIHZhcmlhYmxlIG5hbWVzLCBhbmQgYWxzbyBtYWtlIHByb3BlciBjaG9pY2Ugb2YgZG9jdW1lbnRhdGlvbi5gXHJcblxyXG5hYm91dC5hcHBlbmRDaGlsZChoZWFkZXIpIFxyXG5hYm91dC5hcHBlbmRDaGlsZChwYXJhKVxyXG5hYm91dC5hcHBlbmRDaGlsZChwYXJhMSlcclxuYWJvdXQuYXBwZW5kQ2hpbGQocGFyYTIpXHJcblxyXG5leHBvcnQge2Fib3V0IGFzIEFib3V0fVxyXG4iLCJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XHJcbi8vIGltcG9ydCBzdHlsZXMgZnJvbSAnLi9ob21lLm1vZHVsZSdcclxuXHJcbmNvbnN0IHsgY3JlYXRlIH0gPSBFbGVtZW50XHJcblxyXG5jb25zdCBjaGFsbGVuZ2UgPSBjcmVhdGUoJ3NlY3Rpb24nLCB7Y2xhc3M6IGBjaGFsbGVuZ2VgfSwge2lkOiAnY2hhbGxlbmdlJ30pXHJcbmNvbnN0IGhlYWRlciA9IGNyZWF0ZSgnaDInKVxyXG5oZWFkZXIudGV4dENvbnRlbnQgPSAnVGhlIENoYWxsZW5nZSdcclxuY29uc3QgcGFyYSA9IGNyZWF0ZSgncCcpXHJcbnBhcmEudGV4dENvbnRlbnQgPSBgRG8geW91IGhhdmUgd2hhdCBpdCB0YWtlcyB0byBiZSBjYWxsZWQgYSBKYXZhU2NyaXB0IGRldmVsb3Blcj8gQXJlIHlvdSBwYXJ0IG9mIHRoZSBWYW5pbGxhIGZvbGtzPyBgXHJcblxyXG5jb25zdCBwYXJhMSA9IGNyZWF0ZSgncCcpXHJcbnBhcmExLnRleHRDb250ZW50ID0gYElmIHllcywgVGhlbiB0aGlzIGlzIGZvciB5b3UhISEgQ3JlYXRlIEphdmFTY3JpcHQgb25seSBwYWdlcyBhbmQgc2hvd2Nhc2UgeW91ciB3b3JrIGhlcmUuIFlvdSBjYW4gY29udHJpYnV0ZSB0byBleGlzdGluZyBwYWdlIGhlcmUgb3IgYWRkIHlvdSBiZWF1dGlmdWxseSBjcmFmdGVkIHdlYnBhZ2UgdXNpbmcgSmF2YVNjcmlwdC4gYFxyXG5cclxuY29uc3QgcGFyYTIgPSBjcmVhdGUoJ3AnKVxyXG5wYXJhMi50ZXh0Q29udGVudCA9IGBBcmUgeW91IHVwIHRvIHRoZSB0YXNrcz8gSGFwcHkgY29kaW5nLCB2aW9sYSEgIGBcclxuXHJcbmNoYWxsZW5nZS5hcHBlbmRDaGlsZChoZWFkZXIpIFxyXG5jaGFsbGVuZ2UuYXBwZW5kQ2hpbGQocGFyYSlcclxuY2hhbGxlbmdlLmFwcGVuZENoaWxkKHBhcmExKVxyXG5jaGFsbGVuZ2UuYXBwZW5kQ2hpbGQocGFyYTIpXHJcblxyXG5leHBvcnQge2NoYWxsZW5nZSBhcyBDaGFsbGVuZ2V9XHJcbiIsImltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hvbWUubW9kdWxlJ1xyXG5jb25zdCB7Y3JlYXRlfSA9IEVsZW1lbnRcclxuXHJcbmNvbnN0IGFzaWRlID0gY3JlYXRlKCdhc2lkZScse2NsYXNzOiBgJHtzdHlsZXMuZmxleF9fYXNpZGV9YH0pXHJcbmNvbnN0IHVsID0gY3JlYXRlKCd1bCcsICB7Y2xhc3M6IGAke3N0eWxlcy51bH1gfSlcclxuY29uc3QgbmF2ID0gY3JlYXRlKCduYXYnKVxyXG5cclxuLy8geydBYm91dCc6ICcjYWJvdXQnfSwgeydDaGFsbGVuZ2UnOiAnI2NoYWxsZW5nZSd9XHJcbmNvbnN0IG5hdkxpbmtzID0gWyAgeydjcm93biBhbmQgYW5jaG9yJzogJ2Nyb3duX2FuZF9hbmNob3InfSx7J3JvY2sgcGFwZXIgc2Npc3NvcnMnOiAncm9ja19wYXBlcl9zY2lzc29ycyd9LCB7J3RpYyB0YWMgdG9lJzogJ3RpY190YWNfdG9lJ31dXHJcblxyXG5uYXZMaW5rcy5mb3JFYWNoKG5hdiA9PiB7XHJcbiAgY29uc3QgbGkgPSBjcmVhdGUoJ2xpJylcclxuICBjb25zdCBocmVmID0gIGAjJHtPYmplY3QudmFsdWVzKG5hdikgfWBcclxuICBjb25zdCBhID0gY3JlYXRlKCdhJywgeyBocmVmIH0sIHtjbGFzczogYCR7c3R5bGVzLmxpYX1gfSlcclxuICBsaS5hcHBlbmRDaGlsZChhKVxyXG4gICAgbGkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKT0+e1xyXG4gICAgICBsaS5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKGAke3N0eWxlcy5zaG93X19hc2lkZX1gKVxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdidXR0b24uaWNvbicpPy5jbGFzc0xpc3QucmVtb3ZlKGAke3N0eWxlcy5jbG9zZV9faWNvbn1gKVxyXG4gICAgfSlcclxuICB1bC5hcHBlbmRDaGlsZChsaSlcclxuICBhLnRleHRDb250ZW50ID0gYCR7T2JqZWN0LmtleXMobmF2KX1gXHJcblxyXG59KVxyXG5cclxubmF2LmFwcGVuZENoaWxkKHVsKVxyXG5cclxuZnVuY3Rpb24gc2V0TmF2TWluSGVpZ2h0KCl7XHJcbiAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyJylcclxuICBjb25zdCBmb290ZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb290ZXInKVxyXG4gIGNvbnN0IHBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcm9vdCcpXHJcbiAgY29uc3QgcGFnZVdpZHRoID0gcGFnZS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aFxyXG4gIGNvbnN0IGhlaWdodEhlYWRlciA9IGhlYWRlciA/IGhlYWRlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgOiA0MFxyXG4gIGNvbnN0IGhlaWdodEZvb3RlciA9IGZvb3RlciA/IGZvb3Rlci5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS5oZWlnaHQgOiA0MFxyXG4gIGFzaWRlLnN0eWxlWydtaW5IZWlnaHQnXSA9IChwYWdlV2lkdGggPCA4MjApID8gYGNhbGMoMTAwdmggLSAke2hlaWdodEhlYWRlciAtIGhlaWdodEZvb3Rlcn1weCkgYCA6ICcwcHgnXHJcbn1cclxuXHJcbnNldE5hdk1pbkhlaWdodCgpXHJcbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdyZXNpemUnLCBzZXROYXZNaW5IZWlnaHQpXHJcblxyXG5hc2lkZS5hcHBlbmRDaGlsZChuYXYpXHJcblxyXG5leHBvcnQgeyBhc2lkZSBhcyBTaWRlQmFyIH0iLCJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9ob21lLm1vZHVsZSdcclxuXHJcbmNvbnN0IHsgY3JlYXRlIH0gPSBFbGVtZW50XHJcbmNvbnN0IGxpc3QgPSBjcmVhdGUoJ3VsJylcclxuXHJcbmNvbnN0IHVzYWdlID0gY3JlYXRlKCdzZWN0aW9uJywge2NsYXNzOiBgdXNhZ2VgfSwge2lkOiAndXNhZ2UnfSlcclxuY29uc3QgaGVhZGVyID0gY3JlYXRlKCdoMicpXHJcbmhlYWRlci50ZXh0Q29udGVudCA9ICdVc2FnZSdcclxuXHJcbmNvbnN0IHBhcmEgPSBjcmVhdGUoJ3AnKVxyXG5wYXJhLnRleHRDb250ZW50ID0gYEhvdyB0byBjb250cmlidXRlIHRvIHRoZSBwcm9qZWN0c2BcclxuXHJcbnVzYWdlLmFwcGVuZENoaWxkKGhlYWRlcikgXHJcbnVzYWdlLmFwcGVuZENoaWxkKHBhcmEpXHJcbnVzYWdlLmFwcGVuZENoaWxkKGxpc3QpXHJcblxyXG5cclxuY29uc3QgbGkxID0gY3JlYXRlKCdsaScpXHJcbmxpMS5pbm5lckhUTUwgPSAnZm9yayB0aGUgdGhlIDxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vY2hpc29tY2hyaXMvdmFuaWxsYS1nYW1lc1wiIHRhcmdldD1cIl9ibGFua1wiPlZhbmlsbGEgR2FtZXM8L2E+IHJlcG9zaXRvcnkuJ1xyXG5jb25zdCBsaTIgPSBjcmVhdGUoJ2xpJylcclxubGkyLmlubmVyVGV4dCA9ICdjbG9uZSB0aGlzIHByb2plY3QgZnJvbSAgZ2l0aHViIHJlcG9zaXRvcnkgaW50byB5b3VyIGxvY2FsIG1hY2hpbmUuJ1xyXG5jb25zdCBsaTMgPSBjcmVhdGUoJ2xpJylcclxubGkzLmlubmVyVGV4dCA9ICdvcGVuIHlvdXIgdGVybWluYWwgYW5kIGNoYW5nZSB0byB5b3VyIHByb2plY3Qgcm9vdCBkaXJlY3RvcnknXHJcbmNvbnN0IGxpNCA9IGNyZWF0ZSgnbGknKVxyXG5saTQuaW5uZXJIVE1MID0gYHJ1biB0aGUgc2NyaXB0IDxzcGFuIGNsYXNzPVwiJHtzdHlsZXMuY29kZX1cIj5ucG0gaW5zdGFsbDwvc3Bhbj4gdG8gYWRkIGRlcGVuZGVjaWVzIHRvIHRoZSBwcm9qZWN0YFxyXG5jb25zdCBsaTUgPSBjcmVhdGUoJ2xpJylcclxubGk1LmlubmVySFRNTCA9IGBydW4gdGhlIHNjcmlwdCA8c3BhbiBjbGFzcz1cIiR7c3R5bGVzLmNvZGV9XCI+bnBtIHN0YXJ0PC9zcGFuPiwgdG8gdGVzdCBpZiB3ZWJwYWNrIGRldmVsb3BtZW50IHNlcnZlciBpcyB3b3JraW5nIHByb3Blcmx5ICggSXQgc2hvdWxkIG9wZW4gbG9jYWxob3N0IDogcG9ydCA4MDgwIGJ5IGRlZmF1bHQgKS5gXHJcbmNvbnN0IGxpNiA9IGNyZWF0ZSgnbGknKVxyXG5saTYuaW5uZXJIVE1MID0gYHJ1biB0aGUgc2NyaXB0IDxzcGFuIGNsYXNzPVwiJHtzdHlsZXMuY29kZX1cIj4gbnBtIHJ1biBidWlsZCA8L3NwYW4+IHRvIGJ1bmRsZSBwcm9kdWN0aW9uIGJ1aWxkIHZlcnNpb24uYFxyXG5cclxuY29uc3QgbGk3ID0gY3JlYXRlKCdsaScpXHJcbmxpNy5pbm5lckhUTUwgPSBgaWYgeW91IGFyZSBzYXRpc2ZpZWQgd2l0aCB5b3VyIHdvcmsgYW5kIHdhbnQgdG8gc2hvd2Nhc2UgaXQsIHN1Ym1pdCBhIHB1bGwgcmVxdWVzdCB0byA8YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2NoaXNvbWNocmlzL3ZhbmlsbGEtZ2FtZXNcIiB0YXJnZXQ9XCJfYmxhbmtcIj5naXRodWIuY29tL2NoaXNvbWNocmlzL3ZhbmlsbGEtZ2FtZXM8L2E+YFxyXG5cclxubGlzdC5hcHBlbmQobGkxLCBsaTIsIGxpMywgbGk0LCBsaTUsIGxpNiwgbGk3KVxyXG5cclxuLy8gY29uc3QgbGk4ID0gY3JlYXRlKCdsaScpXHJcbi8vIGNvbnN0IGxpOSA9IGNyZWF0ZSgnbGknKVxyXG5cclxuXHJcbmV4cG9ydCB7dXNhZ2UgYXMgVXNhZ2V9XHJcbiIsImltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIjtcclxuaW1wb3J0IHsgU2lkZUJhciB9IGZyb20gXCIuL1NpZGVCYXJcIjtcclxuaW1wb3J0IHsgTWFpbiB9IGZyb20gXCIuL21haW5cIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2hvbWUubW9kdWxlJ1xyXG5cclxuY29uc3Qge2NyZWF0ZX0gPSBFbGVtZW50XHJcblxyXG5jb25zdCBCb2R5ID0gY3JlYXRlKCdkaXYnLCAge2NsYXNzOiBgd3JhcHBlciAke3N0eWxlcy5mbGV4X19ib2R5fWB9KVxyXG5cclxuQm9keS5hcHBlbmRDaGlsZChTaWRlQmFyKVxyXG5Cb2R5LmFwcGVuZENoaWxkKE1haW4pXHJcblxyXG5leHBvcnQgeyBCb2R5IH0iLCJpbXBvcnQgJy4vaG9tZS5zY3NzJ1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL2hvbWUvaG9tZS5tb2R1bGUnXHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tICcuLi91dGlsaXRpZXMvZWxlbWVudCdcclxuY29uc3Qge2NyZWF0ZSB9ID0gRWxlbWVudFxyXG5jb25zdCBEaXYgPSBjcmVhdGUoJ2RpdicpXHJcbmNvbnN0IGJ1dHRvbiA9IGNyZWF0ZSgnYnV0dG9uJywge2NsYXNzIDogYGljb24gJHtzdHlsZXMuYnV0dG9ufWB9KVxyXG5jb25zdCBoZWFkZXIgPSBjcmVhdGUoJ2hlYWRlcicsIHtjbGFzczogYCR7c3R5bGVzLmhlYWRlcn1gfSlcclxuXHJcbmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpPT57XHJcbiAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYXNpZGUnKS5jbGFzc0xpc3QudG9nZ2xlKGAke3N0eWxlcy5zaG93X19hc2lkZX1gKVxyXG4gIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKGAke3N0eWxlcy5jbG9zZV9faWNvbn1gKVxyXG59KVxyXG5cclxuY29uc3Qgc3BhbiA9IGNyZWF0ZSgnc3Bhbicse2NsYXNzIDogYCR7c3R5bGVzLmljb25fX3NwYW59YH0pXHJcbmJ1dHRvbi5hcHBlbmRDaGlsZChzcGFuKVxyXG5cclxuRGl2LmFwcGVuZENoaWxkKGJ1dHRvbilcclxuXHJcbmNvbnN0IGxvZ28gPSBjcmVhdGUoJ2EnLCB7aHJlZjogJy8jJ30pXHJcbmxvZ28udGV4dENvbnRlbnQgPSAnVmFuaWxsYSBHYW1lcydcclxubG9nby5jbGFzc0xpc3QgPSAoYCR7c3R5bGVzLmxvZ299ICR7c3R5bGVzLmNhbGlnbn1gKVxyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZSgnZGl2Jywge2NsYXNzOiAgYCR7c3R5bGVzLmNhbGlnbn0gd3JhcHBlciAke3N0eWxlcy5mbGV4fWB9KVxyXG53cmFwcGVyLmFwcGVuZENoaWxkKGxvZ28pXHJcblxyXG5oZWFkZXIuYXBwZW5kQ2hpbGQod3JhcHBlcilcclxuXHJcbndyYXBwZXIuYXBwZW5kQ2hpbGQoRGl2KVxyXG5cclxuZXhwb3J0IHsgaGVhZGVyIGFzIEhlYWRlciB9IiwiaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4vaGVhZGVyXCJcclxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyXCJcclxuaW1wb3J0IHsgQm9keSB9IGZyb20gXCIuL2JvZHlcIlxyXG5pbXBvcnQgJy4vaG9tZS5zY3NzJ1xyXG5leHBvcnQgY29uc3QgdGVtcGxhdGUgPSAocm9vdCkgPT4ge1xyXG4gIGRvY3VtZW50LnRpdGxlID0gJ1ZhbmlsbGEgR2FtZXMgfCBIb21lJ1xyXG4gIHJvb3QuaW5uZXJIVE1MID0gJydcclxuICByb290LmFwcGVuZENoaWxkKEhlYWRlcilcclxuICByb290LmFwcGVuZENoaWxkKEJvZHkpXHJcbiAgcm9vdC5hcHBlbmRDaGlsZChGb290ZXIpXHJcbn0iLCJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi9ob21lLm1vZHVsZSdcclxuaW1wb3J0IHsgQWJvdXQgfSBmcm9tIFwiLi9BYm91dFwiO1xyXG5pbXBvcnQgeyBDaGFsbGVuZ2UgfSBmcm9tIFwiLi9DaGFsbGVuZ2VcIjtcclxuaW1wb3J0IGltYWdlIGZyb20gJy4uL2Fzc2V0cy9pbWFnZXMvc3RlcGhlbi1sZW9uYXJkaS1abjJNY29ZVlU3ay11bnNwbGFzaC5qcGcnXHJcbmltcG9ydCB7IFVzYWdlIH0gZnJvbSBcIi4vVXNhZ2VcIjtcclxuXHJcbmNvbnN0IHtjcmVhdGV9ID0gRWxlbWVudFxyXG5cclxuY29uc3QgbWFpbiA9IGNyZWF0ZSgnbWFpbicgLCB7Y2xhc3M6IGAke3N0eWxlcy5mbGV4X19tYWlufWB9KVxyXG5jb25zdCBoZXJvID0gY3JlYXRlKCdkaXYnLCB7Y2xhc3M6IGAke3N0eWxlcy5pbWdfX2NvbnR9ICR7c3R5bGVzLmhlcm99YH0pXHJcbmNvbnN0IGltZ0NvbnQgPSBjcmVhdGUoJ2RpdicsIHtjbGFzczogYCR7c3R5bGVzLmltYWdlX19jb250fWB9KVxyXG5jb25zdCBpbWcgPSBjcmVhdGUoJ2ltZycsIHtzcmM6IGAke2ltYWdlfWB9LCB7YWx0OiAnaGVybyBpbWcnfSwge2NsYXNzOiBgJHtzdHlsZXMuaGVyb19faW1nfWB9KVxyXG5cclxuaW1nQ29udC5hcHBlbmRDaGlsZChpbWcpXHJcbmhlcm8uYXBwZW5kQ2hpbGQoaW1nQ29udClcclxuXHJcbm1haW4uYXBwZW5kQ2hpbGQoaGVybylcclxubWFpbi5hcHBlbmRDaGlsZChBYm91dClcclxubWFpbi5hcHBlbmRDaGlsZChDaGFsbGVuZ2UpXHJcbm1haW4uYXBwZW5kQ2hpbGQoVXNhZ2UpXHJcblxyXG5leHBvcnQgeyBtYWluIGFzIE1haW4gfSIsImltcG9ydCB7IHRlbXBsYXRlIH0gZnJvbSAnLi4vaG9tZS9ob21lJ1xyXG5leHBvcnQgZGVmYXVsdCB0ZW1wbGF0ZSJdLCJuYW1lcyI6WyJFbGVtZW50Iiwic3R5bGVzIiwiY3JlYXRlIiwiYWJvdXQiLCJjbGFzcyIsImlkIiwiaGVhZGVyIiwidGV4dENvbnRlbnQiLCJwYXJhIiwicGFyYTEiLCJwYXJhMiIsImFwcGVuZENoaWxkIiwiQWJvdXQiLCJjaGFsbGVuZ2UiLCJDaGFsbGVuZ2UiLCJhc2lkZSIsImZsZXhfX2FzaWRlIiwidWwiLCJuYXYiLCJuYXZMaW5rcyIsImZvckVhY2giLCJsaSIsImhyZWYiLCJPYmplY3QiLCJ2YWx1ZXMiLCJhIiwibGlhIiwiYWRkRXZlbnRMaXN0ZW5lciIsInBhcmVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJzaG93X19hc2lkZSIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNsb3NlX19pY29uIiwia2V5cyIsInNldE5hdk1pbkhlaWdodCIsImZvb3RlciIsInBhZ2UiLCJwYWdlV2lkdGgiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ3aWR0aCIsImhlaWdodEhlYWRlciIsImhlaWdodCIsImhlaWdodEZvb3RlciIsInN0eWxlIiwid2luZG93IiwiU2lkZUJhciIsImxpc3QiLCJ1c2FnZSIsImxpMSIsImlubmVySFRNTCIsImxpMiIsImlubmVyVGV4dCIsImxpMyIsImxpNCIsImNvZGUiLCJsaTUiLCJsaTYiLCJsaTciLCJhcHBlbmQiLCJVc2FnZSIsIk1haW4iLCJCb2R5IiwiZmxleF9fYm9keSIsIkRpdiIsImJ1dHRvbiIsInRvZ2dsZSIsInNwYW4iLCJpY29uX19zcGFuIiwibG9nbyIsImNhbGlnbiIsIndyYXBwZXIiLCJmbGV4IiwiSGVhZGVyIiwiRm9vdGVyIiwidGVtcGxhdGUiLCJyb290IiwidGl0bGUiLCJpbWFnZSIsIm1haW4iLCJmbGV4X19tYWluIiwiaGVybyIsImltZ19fY29udCIsImltZ0NvbnQiLCJpbWFnZV9fY29udCIsImltZyIsInNyYyIsImFsdCIsImhlcm9fX2ltZyJdLCJzb3VyY2VSb290IjoiIn0=