"use strict";
(self["webpackChunkvanilla_games"] = self["webpackChunkvanilla_games"] || []).push([["src_templates_rock_paper_scissors_js"],{

/***/ "./src/rock-paper-scissors/header.js":
/*!*******************************************!*\
  !*** ./src/rock-paper-scissors/header.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ header)
/* harmony export */ });
/* harmony import */ var _utilities_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utilities/element */ "./src/utilities/element.js");
/* harmony import */ var _home_home_module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/home.module */ "./src/home/home.module.scss");


const {
  create
} = _utilities_element__WEBPACK_IMPORTED_MODULE_0__.Element;
const logo = create('a', {
  href: '/vanilla-games'
});
logo.textContent = 'Vanilla Games';
logo.classList = `${_home_home_module__WEBPACK_IMPORTED_MODULE_1__["default"].logo} ${_home_home_module__WEBPACK_IMPORTED_MODULE_1__["default"].calign}`;
const wrapper = create('div', {
  class: `${_home_home_module__WEBPACK_IMPORTED_MODULE_1__["default"].calign} wrapper ${_home_home_module__WEBPACK_IMPORTED_MODULE_1__["default"].flex}`
});
wrapper.appendChild(logo);
const header = create('header', {
  class: `${_home_home_module__WEBPACK_IMPORTED_MODULE_1__["default"].header}`
});
header.appendChild(wrapper);
const h5 = create('h5', {
  class: `${_home_home_module__WEBPACK_IMPORTED_MODULE_1__["default"].h5}`
});
h5.innerHTML = 'Rock Paper Scissors';
wrapper.appendChild(h5);


/***/ }),

/***/ "./src/rock-paper-scissors/rockPaperScissors.js":
/*!******************************************************!*\
  !*** ./src/rock-paper-scissors/rockPaperScissors.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "template": () => (/* binding */ template)
/* harmony export */ });
/* harmony import */ var _home_home_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/home.scss */ "./src/home/home.scss");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/rock-paper-scissors/header.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer */ "./src/components/footer.js");
/* harmony import */ var _utilities_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/element */ "./src/utilities/element.js");




const Body = _utilities_element__WEBPACK_IMPORTED_MODULE_3__.Element.create('div', {
  class: `wrapper`
});
const h2 = _utilities_element__WEBPACK_IMPORTED_MODULE_3__.Element.create('h2');
h2.textContent = 'Rock Paper Scissors';
Body.appendChild(h2);
Body.innerHTML += `<p>
Please contribute to this page!!!
</p>`;
const template = root => {
  document.title = 'Vanilla Games | Rock Paper Scissors';
  root.innerHTML = '';
  root.appendChild(_header__WEBPACK_IMPORTED_MODULE_1__.Header);
  root.appendChild(Body);
  root.appendChild(_components_footer__WEBPACK_IMPORTED_MODULE_2__.Footer);
};

/***/ }),

/***/ "./src/templates/rock_paper_scissors.js":
/*!**********************************************!*\
  !*** ./src/templates/rock_paper_scissors.js ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _rock_paper_scissors_rockPaperScissors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../rock-paper-scissors/rockPaperScissors */ "./src/rock-paper-scissors/rockPaperScissors.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_rock_paper_scissors_rockPaperScissors__WEBPACK_IMPORTED_MODULE_0__.template);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3RlbXBsYXRlc19yb2NrX3BhcGVyX3NjaXNzb3JzX2pzLmJ1bmRsZV9kYmI0ZjE0YTJlZWE5OTJjMDMyNi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDTjtBQUV4QyxNQUFNO0VBQUNFO0FBQU8sQ0FBQyxHQUFHRix1REFBTztBQUV6QixNQUFNRyxJQUFJLEdBQUdELE1BQU0sQ0FBQyxHQUFHLEVBQUU7RUFBQ0UsSUFBSSxFQUFFO0FBQWdCLENBQUMsQ0FBQztBQUNsREQsSUFBSSxDQUFDRSxXQUFXLEdBQUcsZUFBZTtBQUNsQ0YsSUFBSSxDQUFDRyxTQUFTLEdBQUssR0FBRUwsOERBQVksSUFBR0EsZ0VBQWMsRUFBRTtBQUVwRCxNQUFNTyxPQUFPLEdBQUdOLE1BQU0sQ0FBQyxLQUFLLEVBQUU7RUFBQ08sS0FBSyxFQUFJLEdBQUVSLGdFQUFjLFlBQVdBLDhEQUFZO0FBQUMsQ0FBQyxDQUFDO0FBQ2xGTyxPQUFPLENBQUNHLFdBQVcsQ0FBQ1IsSUFBSSxDQUFDO0FBRXpCLE1BQU1TLE1BQU0sR0FBR1YsTUFBTSxDQUFDLFFBQVEsRUFBRTtFQUFDTyxLQUFLLEVBQUcsR0FBRVIsZ0VBQWM7QUFBQyxDQUFDLENBQUM7QUFDNURXLE1BQU0sQ0FBQ0QsV0FBVyxDQUFDSCxPQUFPLENBQUM7QUFFM0IsTUFBTUssRUFBRSxHQUFHWCxNQUFNLENBQUMsSUFBSSxFQUFFO0VBQUNPLEtBQUssRUFBRyxHQUFFUiw0REFBVTtBQUFDLENBQUMsQ0FBQztBQUVoRFksRUFBRSxDQUFDQyxTQUFTLEdBQUcscUJBQXFCO0FBQ3BDTixPQUFPLENBQUNHLFdBQVcsQ0FBQ0UsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEJHO0FBQ087QUFDWTtBQUNDO0FBRTlDLE1BQU1JLElBQUksR0FBR2pCLDhEQUFjLENBQUMsS0FBSyxFQUFFO0VBQUNTLEtBQUssRUFBRztBQUFRLENBQUMsQ0FBQztBQUN0RCxNQUFNUyxFQUFFLEdBQUdsQiw4REFBYyxDQUFDLElBQUksQ0FBQztBQUMvQmtCLEVBQUUsQ0FBQ2IsV0FBVyxHQUFHLHFCQUFxQjtBQUN0Q1ksSUFBSSxDQUFDTixXQUFXLENBQUNPLEVBQUUsQ0FBQztBQUNwQkQsSUFBSSxDQUFDSCxTQUFTLElBQUs7QUFDbkI7QUFDQSxLQUFLO0FBRUUsTUFBTUssUUFBUSxHQUFJQyxJQUFJLElBQUs7RUFDaENDLFFBQVEsQ0FBQ0MsS0FBSyxHQUFHLHFDQUFxQztFQUN0REYsSUFBSSxDQUFDTixTQUFTLEdBQUcsRUFBRTtFQUNuQk0sSUFBSSxDQUFDVCxXQUFXLENBQUNJLDJDQUFNLENBQUM7RUFDeEJLLElBQUksQ0FBQ1QsV0FBVyxDQUFDTSxJQUFJLENBQUM7RUFDdEJHLElBQUksQ0FBQ1QsV0FBVyxDQUFDSyxzREFBTSxDQUFDO0FBQzFCLENBQUM7Ozs7Ozs7Ozs7Ozs7OztBQ25Ca0U7QUFDbkUsaUVBQWVHLDRFQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmFuaWxsYS1nYW1lcy8uL3NyYy9yb2NrLXBhcGVyLXNjaXNzb3JzL2hlYWRlci5qcyIsIndlYnBhY2s6Ly92YW5pbGxhLWdhbWVzLy4vc3JjL3JvY2stcGFwZXItc2Npc3NvcnMvcm9ja1BhcGVyU2Npc3NvcnMuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYS1nYW1lcy8uL3NyYy90ZW1wbGF0ZXMvcm9ja19wYXBlcl9zY2lzc29ycy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSAnLi4vdXRpbGl0aWVzL2VsZW1lbnQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vaG9tZS9ob21lLm1vZHVsZSdcclxuXHJcbmNvbnN0IHtjcmVhdGUgfSA9IEVsZW1lbnRcclxuXHJcbmNvbnN0IGxvZ28gPSBjcmVhdGUoJ2EnLCB7aHJlZjogJy92YW5pbGxhLWdhbWVzJ30pXHJcbmxvZ28udGV4dENvbnRlbnQgPSAnVmFuaWxsYSBHYW1lcydcclxubG9nby5jbGFzc0xpc3QgPSAoYCR7c3R5bGVzLmxvZ299ICR7c3R5bGVzLmNhbGlnbn1gKVxyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZSgnZGl2Jywge2NsYXNzOiAgYCR7c3R5bGVzLmNhbGlnbn0gd3JhcHBlciAke3N0eWxlcy5mbGV4fWB9KVxyXG53cmFwcGVyLmFwcGVuZENoaWxkKGxvZ28pXHJcblxyXG5jb25zdCBoZWFkZXIgPSBjcmVhdGUoJ2hlYWRlcicsIHtjbGFzczogYCR7c3R5bGVzLmhlYWRlcn1gfSlcclxuaGVhZGVyLmFwcGVuZENoaWxkKHdyYXBwZXIpXHJcblxyXG5jb25zdCBoNSA9IGNyZWF0ZSgnaDUnLCB7Y2xhc3M6IGAke3N0eWxlcy5oNX1gfSlcclxuXHJcbmg1LmlubmVySFRNTCA9ICdSb2NrIFBhcGVyIFNjaXNzb3JzJ1xyXG53cmFwcGVyLmFwcGVuZENoaWxkKGg1KVxyXG5cclxuZXhwb3J0IHsgaGVhZGVyIGFzIEhlYWRlciB9IiwiaW1wb3J0ICcuLi9ob21lL2hvbWUuc2NzcydcclxuaW1wb3J0IHsgSGVhZGVyIH0gZnJvbSBcIi4vaGVhZGVyXCJcclxuaW1wb3J0IHsgRm9vdGVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvZm9vdGVyXCJcclxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiXHJcblxyXG5jb25zdCBCb2R5ID0gRWxlbWVudC5jcmVhdGUoJ2RpdicsIHtjbGFzczogYHdyYXBwZXJgfSlcclxuY29uc3QgaDIgPSBFbGVtZW50LmNyZWF0ZSgnaDInKVxyXG5oMi50ZXh0Q29udGVudCA9ICdSb2NrIFBhcGVyIFNjaXNzb3JzJ1xyXG5Cb2R5LmFwcGVuZENoaWxkKGgyKVxyXG5Cb2R5LmlubmVySFRNTCArPSBgPHA+XHJcblBsZWFzZSBjb250cmlidXRlIHRvIHRoaXMgcGFnZSEhIVxyXG48L3A+YFxyXG5cclxuZXhwb3J0IGNvbnN0IHRlbXBsYXRlID0gKHJvb3QpID0+IHtcclxuICBkb2N1bWVudC50aXRsZSA9ICdWYW5pbGxhIEdhbWVzIHwgUm9jayBQYXBlciBTY2lzc29ycyc7XHJcbiAgcm9vdC5pbm5lckhUTUwgPSAnJ1xyXG4gIHJvb3QuYXBwZW5kQ2hpbGQoSGVhZGVyKVxyXG4gIHJvb3QuYXBwZW5kQ2hpbGQoQm9keSlcclxuICByb290LmFwcGVuZENoaWxkKEZvb3RlcilcclxufSIsImltcG9ydCB7IHRlbXBsYXRlIH0gZnJvbSAnLi4vcm9jay1wYXBlci1zY2lzc29ycy9yb2NrUGFwZXJTY2lzc29ycydcclxuZXhwb3J0IGRlZmF1bHQgdGVtcGxhdGUiXSwibmFtZXMiOlsiRWxlbWVudCIsInN0eWxlcyIsImNyZWF0ZSIsImxvZ28iLCJocmVmIiwidGV4dENvbnRlbnQiLCJjbGFzc0xpc3QiLCJjYWxpZ24iLCJ3cmFwcGVyIiwiY2xhc3MiLCJmbGV4IiwiYXBwZW5kQ2hpbGQiLCJoZWFkZXIiLCJoNSIsImlubmVySFRNTCIsIkhlYWRlciIsIkZvb3RlciIsIkJvZHkiLCJoMiIsInRlbXBsYXRlIiwicm9vdCIsImRvY3VtZW50IiwidGl0bGUiXSwic291cmNlUm9vdCI6IiJ9