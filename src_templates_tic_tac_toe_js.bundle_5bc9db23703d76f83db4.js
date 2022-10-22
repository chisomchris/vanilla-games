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
  href: '/vanilla-games/#'
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3RlbXBsYXRlc190aWNfdGFjX3RvZV9qcy5idW5kbGVfNWJjOWRiMjM3MDNkNzZmODNkYjQuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDbkQsaUVBQWVBLDREQUFROzs7Ozs7Ozs7Ozs7Ozs7O0FDRHVCO0FBQ047QUFFeEMsTUFBTTtFQUFDRztBQUFPLENBQUMsR0FBR0YsdURBQU87QUFFekIsTUFBTUcsSUFBSSxHQUFHRCxNQUFNLENBQUMsR0FBRyxFQUFFO0VBQUNFLElBQUksRUFBRTtBQUFrQixDQUFDLENBQUM7QUFDcERELElBQUksQ0FBQ0UsV0FBVyxHQUFHLGVBQWU7QUFDbENGLElBQUksQ0FBQ0csU0FBUyxHQUFLLEdBQUVMLDhEQUFZLElBQUdBLGdFQUFjLEVBQUU7QUFFcEQsTUFBTU8sT0FBTyxHQUFHTixNQUFNLENBQUMsS0FBSyxFQUFFO0VBQUNPLEtBQUssRUFBSSxHQUFFUixnRUFBYyxZQUFXQSw4REFBWTtBQUFDLENBQUMsQ0FBQztBQUNsRk8sT0FBTyxDQUFDRyxXQUFXLENBQUNSLElBQUksQ0FBQztBQUV6QixNQUFNUyxNQUFNLEdBQUdWLE1BQU0sQ0FBQyxRQUFRLEVBQUU7RUFBQ08sS0FBSyxFQUFHLEdBQUVSLGdFQUFjO0FBQUMsQ0FBQyxDQUFDO0FBQzVEVyxNQUFNLENBQUNELFdBQVcsQ0FBQ0gsT0FBTyxDQUFDO0FBRTNCLE1BQU1LLEVBQUUsR0FBR1gsTUFBTSxDQUFDLElBQUksRUFBRTtFQUFDTyxLQUFLLEVBQUcsR0FBRVIsNERBQVU7QUFBQyxDQUFDLENBQUM7QUFFaERZLEVBQUUsQ0FBQ0MsU0FBUyxHQUFHLGFBQWE7QUFFNUJOLE9BQU8sQ0FBQ0csV0FBVyxDQUFDRSxFQUFFLENBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuQkc7QUFDWTtBQUNPO0FBQ0M7QUFFOUMsTUFBTUssSUFBSSxHQUFHbEIsOERBQWMsQ0FBQyxLQUFLLEVBQUU7RUFBQ1MsS0FBSyxFQUFHO0FBQVEsQ0FBQyxDQUFDO0FBQ3RELE1BQU1VLEVBQUUsR0FBR25CLDhEQUFjLENBQUMsSUFBSSxDQUFDO0FBQy9CbUIsRUFBRSxDQUFDZCxXQUFXLEdBQUcsYUFBYTtBQUM5QmEsSUFBSSxDQUFDUCxXQUFXLENBQUNRLEVBQUUsQ0FBQztBQUNwQkQsSUFBSSxDQUFDSixTQUFTLElBQUs7QUFDbkI7QUFDQSxLQUFLO0FBRUUsTUFBTWYsUUFBUSxHQUFJcUIsSUFBSSxJQUFLO0VBQ2hDQyxRQUFRLENBQUNDLEtBQUssR0FBRyw2QkFBNkI7RUFDOUNGLElBQUksQ0FBQ04sU0FBUyxHQUFHLEVBQUU7RUFDbkJNLElBQUksQ0FBQ1QsV0FBVyxDQUFDSSwyQ0FBTSxDQUFDO0VBQ3hCSyxJQUFJLENBQUNULFdBQVcsQ0FBQ08sSUFBSSxDQUFDO0VBQ3RCRSxJQUFJLENBQUNULFdBQVcsQ0FBQ00sc0RBQU0sQ0FBQztBQUMxQixDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmFuaWxsYS1nYW1lcy8uL3NyYy90ZW1wbGF0ZXMvdGljX3RhY190b2UuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYS1nYW1lcy8uL3NyYy90aWMtdGFjLXRvZS9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYS1nYW1lcy8uL3NyYy90aWMtdGFjLXRvZS90aWNUYWNUb2UuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgdGVtcGxhdGUgfSBmcm9tICcuLi90aWMtdGFjLXRvZS90aWNUYWNUb2UnXHJcbmV4cG9ydCBkZWZhdWx0IHRlbXBsYXRlIiwiaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gJy4uL3V0aWxpdGllcy9lbGVtZW50J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL2hvbWUvaG9tZS5tb2R1bGUnXHJcblxyXG5jb25zdCB7Y3JlYXRlIH0gPSBFbGVtZW50XHJcblxyXG5jb25zdCBsb2dvID0gY3JlYXRlKCdhJywge2hyZWY6ICcvdmFuaWxsYS1nYW1lcy8jJ30pXHJcbmxvZ28udGV4dENvbnRlbnQgPSAnVmFuaWxsYSBHYW1lcydcclxubG9nby5jbGFzc0xpc3QgPSAoYCR7c3R5bGVzLmxvZ299ICR7c3R5bGVzLmNhbGlnbn1gKVxyXG5cclxuY29uc3Qgd3JhcHBlciA9IGNyZWF0ZSgnZGl2Jywge2NsYXNzOiAgYCR7c3R5bGVzLmNhbGlnbn0gd3JhcHBlciAke3N0eWxlcy5mbGV4fWB9KVxyXG53cmFwcGVyLmFwcGVuZENoaWxkKGxvZ28pXHJcblxyXG5jb25zdCBoZWFkZXIgPSBjcmVhdGUoJ2hlYWRlcicsIHtjbGFzczogYCR7c3R5bGVzLmhlYWRlcn1gfSlcclxuaGVhZGVyLmFwcGVuZENoaWxkKHdyYXBwZXIpXHJcblxyXG5jb25zdCBoNSA9IGNyZWF0ZSgnaDUnLCB7Y2xhc3M6IGAke3N0eWxlcy5oNX1gfSlcclxuXHJcbmg1LmlubmVySFRNTCA9ICdUaWMgVGFjIFRvZSdcclxuXHJcbndyYXBwZXIuYXBwZW5kQ2hpbGQoaDUpXHJcblxyXG5leHBvcnQgeyBoZWFkZXIgYXMgSGVhZGVyIH0iLCJpbXBvcnQgJy4uL2hvbWUvaG9tZS5zY3NzJ1xyXG5pbXBvcnQgeyBIZWFkZXIsIERpdiB9IGZyb20gXCIuL2hlYWRlclwiXHJcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Zvb3RlclwiXHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIlxyXG5cclxuY29uc3QgQm9keSA9IEVsZW1lbnQuY3JlYXRlKCdkaXYnLCB7Y2xhc3M6IGB3cmFwcGVyYH0pXHJcbmNvbnN0IGgyID0gRWxlbWVudC5jcmVhdGUoJ2gyJylcclxuaDIudGV4dENvbnRlbnQgPSAnVGljIFRhYyBUb2UnXHJcbkJvZHkuYXBwZW5kQ2hpbGQoaDIpXHJcbkJvZHkuaW5uZXJIVE1MICs9IGA8cD5cclxuUGxlYXNlIGNvbnRyaWJ1dGUgdG8gdGhpcyBwYWdlISEhXHJcbjwvcD5gXHJcblxyXG5leHBvcnQgY29uc3QgdGVtcGxhdGUgPSAocm9vdCkgPT4ge1xyXG4gIGRvY3VtZW50LnRpdGxlID0gJ1ZhbmlsbGEgR2FtZXMgfCBUaWMgVGFjIFRvZSc7XHJcbiAgcm9vdC5pbm5lckhUTUwgPSAnJ1xyXG4gIHJvb3QuYXBwZW5kQ2hpbGQoSGVhZGVyKVxyXG4gIHJvb3QuYXBwZW5kQ2hpbGQoQm9keSlcclxuICByb290LmFwcGVuZENoaWxkKEZvb3RlcilcclxufSJdLCJuYW1lcyI6WyJ0ZW1wbGF0ZSIsIkVsZW1lbnQiLCJzdHlsZXMiLCJjcmVhdGUiLCJsb2dvIiwiaHJlZiIsInRleHRDb250ZW50IiwiY2xhc3NMaXN0IiwiY2FsaWduIiwid3JhcHBlciIsImNsYXNzIiwiZmxleCIsImFwcGVuZENoaWxkIiwiaGVhZGVyIiwiaDUiLCJpbm5lckhUTUwiLCJIZWFkZXIiLCJEaXYiLCJGb290ZXIiLCJCb2R5IiwiaDIiLCJyb290IiwiZG9jdW1lbnQiLCJ0aXRsZSJdLCJzb3VyY2VSb290IjoiIn0=