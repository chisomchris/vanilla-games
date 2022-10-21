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
  href: '/#'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3RlbXBsYXRlc19yb2NrX3BhcGVyX3NjaXNzb3JzX2pzLmJ1bmRsZV84NDkwMjdkY2E0ZDFjNzFmZjJhNS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFDTjtBQUV4QyxNQUFNO0VBQUNFO0FBQU8sQ0FBQyxHQUFHRix1REFBTztBQUV6QixNQUFNRyxJQUFJLEdBQUdELE1BQU0sQ0FBQyxHQUFHLEVBQUU7RUFBQ0UsSUFBSSxFQUFFO0FBQUksQ0FBQyxDQUFDO0FBQ3RDRCxJQUFJLENBQUNFLFdBQVcsR0FBRyxlQUFlO0FBQ2xDRixJQUFJLENBQUNHLFNBQVMsR0FBSyxHQUFFTCw4REFBWSxJQUFHQSxnRUFBYyxFQUFFO0FBRXBELE1BQU1PLE9BQU8sR0FBR04sTUFBTSxDQUFDLEtBQUssRUFBRTtFQUFDTyxLQUFLLEVBQUksR0FBRVIsZ0VBQWMsWUFBV0EsOERBQVk7QUFBQyxDQUFDLENBQUM7QUFDbEZPLE9BQU8sQ0FBQ0csV0FBVyxDQUFDUixJQUFJLENBQUM7QUFFekIsTUFBTVMsTUFBTSxHQUFHVixNQUFNLENBQUMsUUFBUSxFQUFFO0VBQUNPLEtBQUssRUFBRyxHQUFFUixnRUFBYztBQUFDLENBQUMsQ0FBQztBQUM1RFcsTUFBTSxDQUFDRCxXQUFXLENBQUNILE9BQU8sQ0FBQztBQUUzQixNQUFNSyxFQUFFLEdBQUdYLE1BQU0sQ0FBQyxJQUFJLEVBQUU7RUFBQ08sS0FBSyxFQUFHLEdBQUVSLDREQUFVO0FBQUMsQ0FBQyxDQUFDO0FBRWhEWSxFQUFFLENBQUNDLFNBQVMsR0FBRyxxQkFBcUI7QUFDcENOLE9BQU8sQ0FBQ0csV0FBVyxDQUFDRSxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQkc7QUFDTztBQUNZO0FBQ0M7QUFFOUMsTUFBTUksSUFBSSxHQUFHakIsOERBQWMsQ0FBQyxLQUFLLEVBQUU7RUFBQ1MsS0FBSyxFQUFHO0FBQVEsQ0FBQyxDQUFDO0FBQ3RELE1BQU1TLEVBQUUsR0FBR2xCLDhEQUFjLENBQUMsSUFBSSxDQUFDO0FBQy9Ca0IsRUFBRSxDQUFDYixXQUFXLEdBQUcscUJBQXFCO0FBQ3RDWSxJQUFJLENBQUNOLFdBQVcsQ0FBQ08sRUFBRSxDQUFDO0FBQ3BCRCxJQUFJLENBQUNILFNBQVMsSUFBSztBQUNuQjtBQUNBLEtBQUs7QUFFRSxNQUFNSyxRQUFRLEdBQUlDLElBQUksSUFBSztFQUNoQ0MsUUFBUSxDQUFDQyxLQUFLLEdBQUcscUNBQXFDO0VBQ3RERixJQUFJLENBQUNOLFNBQVMsR0FBRyxFQUFFO0VBQ25CTSxJQUFJLENBQUNULFdBQVcsQ0FBQ0ksMkNBQU0sQ0FBQztFQUN4QkssSUFBSSxDQUFDVCxXQUFXLENBQUNNLElBQUksQ0FBQztFQUN0QkcsSUFBSSxDQUFDVCxXQUFXLENBQUNLLHNEQUFNLENBQUM7QUFDMUIsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJrRTtBQUNuRSxpRUFBZUcsNEVBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92YW5pbGxhLWdhbWVzLy4vc3JjL3JvY2stcGFwZXItc2Npc3NvcnMvaGVhZGVyLmpzIiwid2VicGFjazovL3ZhbmlsbGEtZ2FtZXMvLi9zcmMvcm9jay1wYXBlci1zY2lzc29ycy9yb2NrUGFwZXJTY2lzc29ycy5qcyIsIndlYnBhY2s6Ly92YW5pbGxhLWdhbWVzLy4vc3JjL3RlbXBsYXRlcy9yb2NrX3BhcGVyX3NjaXNzb3JzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEVsZW1lbnQgfSBmcm9tICcuLi91dGlsaXRpZXMvZWxlbWVudCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9ob21lL2hvbWUubW9kdWxlJ1xyXG5cclxuY29uc3Qge2NyZWF0ZSB9ID0gRWxlbWVudFxyXG5cclxuY29uc3QgbG9nbyA9IGNyZWF0ZSgnYScsIHtocmVmOiAnLyMnfSlcclxubG9nby50ZXh0Q29udGVudCA9ICdWYW5pbGxhIEdhbWVzJ1xyXG5sb2dvLmNsYXNzTGlzdCA9IChgJHtzdHlsZXMubG9nb30gJHtzdHlsZXMuY2FsaWdufWApXHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlKCdkaXYnLCB7Y2xhc3M6ICBgJHtzdHlsZXMuY2FsaWdufSB3cmFwcGVyICR7c3R5bGVzLmZsZXh9YH0pXHJcbndyYXBwZXIuYXBwZW5kQ2hpbGQobG9nbylcclxuXHJcbmNvbnN0IGhlYWRlciA9IGNyZWF0ZSgnaGVhZGVyJywge2NsYXNzOiBgJHtzdHlsZXMuaGVhZGVyfWB9KVxyXG5oZWFkZXIuYXBwZW5kQ2hpbGQod3JhcHBlcilcclxuXHJcbmNvbnN0IGg1ID0gY3JlYXRlKCdoNScsIHtjbGFzczogYCR7c3R5bGVzLmg1fWB9KVxyXG5cclxuaDUuaW5uZXJIVE1MID0gJ1JvY2sgUGFwZXIgU2Npc3NvcnMnXHJcbndyYXBwZXIuYXBwZW5kQ2hpbGQoaDUpXHJcblxyXG5leHBvcnQgeyBoZWFkZXIgYXMgSGVhZGVyIH0iLCJpbXBvcnQgJy4uL2hvbWUvaG9tZS5zY3NzJ1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi9oZWFkZXJcIlxyXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9mb290ZXJcIlxyXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCJcclxuXHJcbmNvbnN0IEJvZHkgPSBFbGVtZW50LmNyZWF0ZSgnZGl2Jywge2NsYXNzOiBgd3JhcHBlcmB9KVxyXG5jb25zdCBoMiA9IEVsZW1lbnQuY3JlYXRlKCdoMicpXHJcbmgyLnRleHRDb250ZW50ID0gJ1JvY2sgUGFwZXIgU2Npc3NvcnMnXHJcbkJvZHkuYXBwZW5kQ2hpbGQoaDIpXHJcbkJvZHkuaW5uZXJIVE1MICs9IGA8cD5cclxuUGxlYXNlIGNvbnRyaWJ1dGUgdG8gdGhpcyBwYWdlISEhXHJcbjwvcD5gXHJcblxyXG5leHBvcnQgY29uc3QgdGVtcGxhdGUgPSAocm9vdCkgPT4ge1xyXG4gIGRvY3VtZW50LnRpdGxlID0gJ1ZhbmlsbGEgR2FtZXMgfCBSb2NrIFBhcGVyIFNjaXNzb3JzJztcclxuICByb290LmlubmVySFRNTCA9ICcnXHJcbiAgcm9vdC5hcHBlbmRDaGlsZChIZWFkZXIpXHJcbiAgcm9vdC5hcHBlbmRDaGlsZChCb2R5KVxyXG4gIHJvb3QuYXBwZW5kQ2hpbGQoRm9vdGVyKVxyXG59IiwiaW1wb3J0IHsgdGVtcGxhdGUgfSBmcm9tICcuLi9yb2NrLXBhcGVyLXNjaXNzb3JzL3JvY2tQYXBlclNjaXNzb3JzJ1xyXG5leHBvcnQgZGVmYXVsdCB0ZW1wbGF0ZSJdLCJuYW1lcyI6WyJFbGVtZW50Iiwic3R5bGVzIiwiY3JlYXRlIiwibG9nbyIsImhyZWYiLCJ0ZXh0Q29udGVudCIsImNsYXNzTGlzdCIsImNhbGlnbiIsIndyYXBwZXIiLCJjbGFzcyIsImZsZXgiLCJhcHBlbmRDaGlsZCIsImhlYWRlciIsImg1IiwiaW5uZXJIVE1MIiwiSGVhZGVyIiwiRm9vdGVyIiwiQm9keSIsImgyIiwidGVtcGxhdGUiLCJyb290IiwiZG9jdW1lbnQiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=