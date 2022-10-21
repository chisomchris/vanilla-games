"use strict";
(self["webpackChunkvanilla_games"] = self["webpackChunkvanilla_games"] || []).push([["src_templates_tic_tac_toe_js"],{

/***/ "./src/templates/tic_tac_toe.js":
/*!**************************************!*\
  !*** ./src/templates/tic_tac_toe.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _tic_tac_toe_ticTacToe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../tic-tac-toe/ticTacToe */ "./src/tic-tac-toe/ticTacToe.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_tic_tac_toe_ticTacToe__WEBPACK_IMPORTED_MODULE_0__.template);

/***/ }),

/***/ "./src/tic-tac-toe/header.js":
/*!***********************************!*\
  !*** ./src/tic-tac-toe/header.js ***!
  \***********************************/
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
h5.innerHTML = 'Tic Tac Toe';
wrapper.appendChild(h5);


/***/ }),

/***/ "./src/tic-tac-toe/ticTacToe.js":
/*!**************************************!*\
  !*** ./src/tic-tac-toe/ticTacToe.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "template": () => (/* binding */ template)
/* harmony export */ });
/* harmony import */ var _home_home_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/home.scss */ "./src/home/home.scss");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/tic-tac-toe/header.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer */ "./src/components/footer.js");
/* harmony import */ var _utilities_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/element */ "./src/utilities/element.js");




const Body = _utilities_element__WEBPACK_IMPORTED_MODULE_3__.Element.create('div', {
  class: `wrapper`
});
const h2 = _utilities_element__WEBPACK_IMPORTED_MODULE_3__.Element.create('h2');
h2.textContent = 'Tic Tac Toe';
Body.appendChild(h2);
Body.innerHTML += `<p>
Please contribute to this page!!!
</p>`;
const template = root => {
  document.title = 'Vanilla Games | Tic Tac Toe';
  root.innerHTML = '';
  root.appendChild(_header__WEBPACK_IMPORTED_MODULE_1__.Header);
  root.appendChild(Body);
  root.appendChild(_components_footer__WEBPACK_IMPORTED_MODULE_2__.Footer);
};

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3RlbXBsYXRlc190aWNfdGFjX3RvZV9qcy5idW5kbGVfZjYzMTI1OGRkM2QxYTIxNWVkNjYuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDbkQsaUVBQWVBLDREQUFROzs7Ozs7Ozs7Ozs7Ozs7O0FDRHVCO0FBQ047QUFFeEMsTUFBTTtFQUFDRztBQUFPLENBQUMsR0FBR0YsdURBQU87QUFFekIsTUFBTUcsSUFBSSxHQUFHRCxNQUFNLENBQUMsR0FBRyxFQUFFO0VBQUNFLElBQUksRUFBRTtBQUFJLENBQUMsQ0FBQztBQUN0Q0QsSUFBSSxDQUFDRSxXQUFXLEdBQUcsZUFBZTtBQUNsQ0YsSUFBSSxDQUFDRyxTQUFTLEdBQUssR0FBRUwsOERBQVksSUFBR0EsZ0VBQWMsRUFBRTtBQUVwRCxNQUFNTyxPQUFPLEdBQUdOLE1BQU0sQ0FBQyxLQUFLLEVBQUU7RUFBQ08sS0FBSyxFQUFJLEdBQUVSLGdFQUFjLFlBQVdBLDhEQUFZO0FBQUMsQ0FBQyxDQUFDO0FBQ2xGTyxPQUFPLENBQUNHLFdBQVcsQ0FBQ1IsSUFBSSxDQUFDO0FBRXpCLE1BQU1TLE1BQU0sR0FBR1YsTUFBTSxDQUFDLFFBQVEsRUFBRTtFQUFDTyxLQUFLLEVBQUcsR0FBRVIsZ0VBQWM7QUFBQyxDQUFDLENBQUM7QUFDNURXLE1BQU0sQ0FBQ0QsV0FBVyxDQUFDSCxPQUFPLENBQUM7QUFFM0IsTUFBTUssRUFBRSxHQUFHWCxNQUFNLENBQUMsSUFBSSxFQUFFO0VBQUNPLEtBQUssRUFBRyxHQUFFUiw0REFBVTtBQUFDLENBQUMsQ0FBQztBQUVoRFksRUFBRSxDQUFDQyxTQUFTLEdBQUcsYUFBYTtBQUU1Qk4sT0FBTyxDQUFDRyxXQUFXLENBQUNFLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ25CRztBQUNZO0FBQ087QUFDQztBQUU5QyxNQUFNSyxJQUFJLEdBQUdsQiw4REFBYyxDQUFDLEtBQUssRUFBRTtFQUFDUyxLQUFLLEVBQUc7QUFBUSxDQUFDLENBQUM7QUFDdEQsTUFBTVUsRUFBRSxHQUFHbkIsOERBQWMsQ0FBQyxJQUFJLENBQUM7QUFDL0JtQixFQUFFLENBQUNkLFdBQVcsR0FBRyxhQUFhO0FBQzlCYSxJQUFJLENBQUNQLFdBQVcsQ0FBQ1EsRUFBRSxDQUFDO0FBQ3BCRCxJQUFJLENBQUNKLFNBQVMsSUFBSztBQUNuQjtBQUNBLEtBQUs7QUFFRSxNQUFNZixRQUFRLEdBQUlxQixJQUFJLElBQUs7RUFDaENDLFFBQVEsQ0FBQ0MsS0FBSyxHQUFHLDZCQUE2QjtFQUM5Q0YsSUFBSSxDQUFDTixTQUFTLEdBQUcsRUFBRTtFQUNuQk0sSUFBSSxDQUFDVCxXQUFXLENBQUNJLDJDQUFNLENBQUM7RUFDeEJLLElBQUksQ0FBQ1QsV0FBVyxDQUFDTyxJQUFJLENBQUM7RUFDdEJFLElBQUksQ0FBQ1QsV0FBVyxDQUFDTSxzREFBTSxDQUFDO0FBQzFCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92YW5pbGxhLWdhbWVzLy4vc3JjL3RlbXBsYXRlcy90aWNfdGFjX3RvZS5qcyIsIndlYnBhY2s6Ly92YW5pbGxhLWdhbWVzLy4vc3JjL3RpYy10YWMtdG9lL2hlYWRlci5qcyIsIndlYnBhY2s6Ly92YW5pbGxhLWdhbWVzLy4vc3JjL3RpYy10YWMtdG9lL3RpY1RhY1RvZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0ZW1wbGF0ZSB9IGZyb20gJy4uL3RpYy10YWMtdG9lL3RpY1RhY1RvZSdcclxuZXhwb3J0IGRlZmF1bHQgdGVtcGxhdGUiLCJpbXBvcnQgeyBFbGVtZW50IH0gZnJvbSAnLi4vdXRpbGl0aWVzL2VsZW1lbnQnXHJcbmltcG9ydCBzdHlsZXMgZnJvbSAnLi4vaG9tZS9ob21lLm1vZHVsZSdcclxuXHJcbmNvbnN0IHtjcmVhdGUgfSA9IEVsZW1lbnRcclxuXHJcbmNvbnN0IGxvZ28gPSBjcmVhdGUoJ2EnLCB7aHJlZjogJy8jJ30pXHJcbmxvZ28udGV4dENvbnRlbnQgPSAnVmFuaWxsYSBHYW1lcydcclxubG9nby5jbGFzc0xpc3QgPSAoYCR7c3R5bGVzLmxvZ299ICR7c3R5bGVzLmNhbGlnbn1gKVxyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZSgnZGl2Jywge2NsYXNzOiAgYCR7c3R5bGVzLmNhbGlnbn0gd3JhcHBlciAke3N0eWxlcy5mbGV4fWB9KVxyXG53cmFwcGVyLmFwcGVuZENoaWxkKGxvZ28pXHJcblxyXG5jb25zdCBoZWFkZXIgPSBjcmVhdGUoJ2hlYWRlcicsIHtjbGFzczogYCR7c3R5bGVzLmhlYWRlcn1gfSlcclxuaGVhZGVyLmFwcGVuZENoaWxkKHdyYXBwZXIpXHJcblxyXG5jb25zdCBoNSA9IGNyZWF0ZSgnaDUnLCB7Y2xhc3M6IGAke3N0eWxlcy5oNX1gfSlcclxuXHJcbmg1LmlubmVySFRNTCA9ICdUaWMgVGFjIFRvZSdcclxuXHJcbndyYXBwZXIuYXBwZW5kQ2hpbGQoaDUpXHJcblxyXG5leHBvcnQgeyBoZWFkZXIgYXMgSGVhZGVyIH0iLCJpbXBvcnQgJy4uL2hvbWUvaG9tZS5zY3NzJ1xyXG5pbXBvcnQgeyBIZWFkZXIsIERpdiB9IGZyb20gXCIuL2hlYWRlclwiXHJcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Zvb3RlclwiXHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIlxyXG5cclxuY29uc3QgQm9keSA9IEVsZW1lbnQuY3JlYXRlKCdkaXYnLCB7Y2xhc3M6IGB3cmFwcGVyYH0pXHJcbmNvbnN0IGgyID0gRWxlbWVudC5jcmVhdGUoJ2gyJylcclxuaDIudGV4dENvbnRlbnQgPSAnVGljIFRhYyBUb2UnXHJcbkJvZHkuYXBwZW5kQ2hpbGQoaDIpXHJcbkJvZHkuaW5uZXJIVE1MICs9IGA8cD5cclxuUGxlYXNlIGNvbnRyaWJ1dGUgdG8gdGhpcyBwYWdlISEhXHJcbjwvcD5gXHJcblxyXG5leHBvcnQgY29uc3QgdGVtcGxhdGUgPSAocm9vdCkgPT4ge1xyXG4gIGRvY3VtZW50LnRpdGxlID0gJ1ZhbmlsbGEgR2FtZXMgfCBUaWMgVGFjIFRvZSc7XHJcbiAgcm9vdC5pbm5lckhUTUwgPSAnJ1xyXG4gIHJvb3QuYXBwZW5kQ2hpbGQoSGVhZGVyKVxyXG4gIHJvb3QuYXBwZW5kQ2hpbGQoQm9keSlcclxuICByb290LmFwcGVuZENoaWxkKEZvb3RlcilcclxufSJdLCJuYW1lcyI6WyJ0ZW1wbGF0ZSIsIkVsZW1lbnQiLCJzdHlsZXMiLCJjcmVhdGUiLCJsb2dvIiwiaHJlZiIsInRleHRDb250ZW50IiwiY2xhc3NMaXN0IiwiY2FsaWduIiwid3JhcHBlciIsImNsYXNzIiwiZmxleCIsImFwcGVuZENoaWxkIiwiaGVhZGVyIiwiaDUiLCJpbm5lckhUTUwiLCJIZWFkZXIiLCJEaXYiLCJGb290ZXIiLCJCb2R5IiwiaDIiLCJyb290IiwiZG9jdW1lbnQiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=