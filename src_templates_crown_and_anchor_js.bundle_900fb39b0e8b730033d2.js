"use strict";
(self["webpackChunkvanilla_games"] = self["webpackChunkvanilla_games"] || []).push([["src_templates_crown_and_anchor_js"],{

/***/ "./src/crown-and-anchor/crownAndAnchor.js":
/*!************************************************!*\
  !*** ./src/crown-and-anchor/crownAndAnchor.js ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "template": () => (/* binding */ template)
/* harmony export */ });
/* harmony import */ var _home_home_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/home.scss */ "./src/home/home.scss");
/* harmony import */ var _header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./header */ "./src/crown-and-anchor/header.js");
/* harmony import */ var _components_footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/footer */ "./src/components/footer.js");
/* harmony import */ var _utilities_element__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utilities/element */ "./src/utilities/element.js");




const Body = _utilities_element__WEBPACK_IMPORTED_MODULE_3__.Element.create('div', {
  class: `wrapper`
});
const h2 = _utilities_element__WEBPACK_IMPORTED_MODULE_3__.Element.create('h2');
h2.textContent = 'Crown and Anchor';
Body.appendChild(h2);
Body.innerHTML += `<p>
Please contribute to this page!!!
</p>`;
const template = root => {
  document.title = 'Vanilla Games | Crown and Anchor';
  root.innerHTML = '';
  root.appendChild(_header__WEBPACK_IMPORTED_MODULE_1__.Header);
  root.appendChild(Body);
  root.appendChild(_components_footer__WEBPACK_IMPORTED_MODULE_2__.Footer);
};

/***/ }),

/***/ "./src/crown-and-anchor/header.js":
/*!****************************************!*\
  !*** ./src/crown-and-anchor/header.js ***!
  \****************************************/
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
h5.innerHTML = 'Crown and Anchor';
wrapper.appendChild(h5);


/***/ }),

/***/ "./src/templates/crown_and_anchor.js":
/*!*******************************************!*\
  !*** ./src/templates/crown_and_anchor.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _crown_and_anchor_crownAndAnchor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../crown-and-anchor/crownAndAnchor */ "./src/crown-and-anchor/crownAndAnchor.js");

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_crown_and_anchor_crownAndAnchor__WEBPACK_IMPORTED_MODULE_0__.template);

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3RlbXBsYXRlc19jcm93bl9hbmRfYW5jaG9yX2pzLmJ1bmRsZV85MDBmYjM5YjBlOGI3MzAwMzNkMi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNPO0FBQ1k7QUFDQztBQUU5QyxNQUFNRyxJQUFJLEdBQUdELDhEQUFjLENBQUMsS0FBSyxFQUFFO0VBQUNHLEtBQUssRUFBRztBQUFRLENBQUMsQ0FBQztBQUN0RCxNQUFNQyxFQUFFLEdBQUdKLDhEQUFjLENBQUMsSUFBSSxDQUFDO0FBQy9CSSxFQUFFLENBQUNDLFdBQVcsR0FBRyxrQkFBa0I7QUFDbkNKLElBQUksQ0FBQ0ssV0FBVyxDQUFDRixFQUFFLENBQUM7QUFDcEJILElBQUksQ0FBQ00sU0FBUyxJQUFLO0FBQ25CO0FBQ0EsS0FBSztBQUdFLE1BQU1DLFFBQVEsR0FBSUMsSUFBSSxJQUFLO0VBQ2hDQyxRQUFRLENBQUNDLEtBQUssR0FBRyxrQ0FBa0M7RUFDbkRGLElBQUksQ0FBQ0YsU0FBUyxHQUFHLEVBQUU7RUFDbkJFLElBQUksQ0FBQ0gsV0FBVyxDQUFDUiwyQ0FBTSxDQUFDO0VBQ3hCVyxJQUFJLENBQUNILFdBQVcsQ0FBQ0wsSUFBSSxDQUFDO0VBQ3RCUSxJQUFJLENBQUNILFdBQVcsQ0FBQ1Asc0RBQU0sQ0FBQztBQUMxQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEI2QztBQUNOO0FBRXhDLE1BQU07RUFBQ0c7QUFBTyxDQUFDLEdBQUdGLHVEQUFPO0FBRXpCLE1BQU1hLElBQUksR0FBR1gsTUFBTSxDQUFDLEdBQUcsRUFBRTtFQUFDWSxJQUFJLEVBQUU7QUFBZ0IsQ0FBQyxDQUFDO0FBQ2xERCxJQUFJLENBQUNSLFdBQVcsR0FBRyxlQUFlO0FBQ2xDUSxJQUFJLENBQUNFLFNBQVMsR0FBSyxHQUFFSCw4REFBWSxJQUFHQSxnRUFBYyxFQUFFO0FBRXBELE1BQU1LLE9BQU8sR0FBR2YsTUFBTSxDQUFDLEtBQUssRUFBRTtFQUFDQyxLQUFLLEVBQUksR0FBRVMsZ0VBQWMsWUFBV0EsOERBQVk7QUFBQyxDQUFDLENBQUM7QUFDbEZLLE9BQU8sQ0FBQ1gsV0FBVyxDQUFDTyxJQUFJLENBQUM7QUFFekIsTUFBTU0sTUFBTSxHQUFHakIsTUFBTSxDQUFDLFFBQVEsRUFBRTtFQUFDQyxLQUFLLEVBQUcsR0FBRVMsZ0VBQWM7QUFBQyxDQUFDLENBQUM7QUFDNURPLE1BQU0sQ0FBQ2IsV0FBVyxDQUFDVyxPQUFPLENBQUM7QUFFM0IsTUFBTUcsRUFBRSxHQUFHbEIsTUFBTSxDQUFDLElBQUksRUFBRTtFQUFDQyxLQUFLLEVBQUcsR0FBRVMsNERBQVU7QUFBQyxDQUFDLENBQUM7QUFFaERRLEVBQUUsQ0FBQ2IsU0FBUyxHQUFHLGtCQUFrQjtBQUVqQ1UsT0FBTyxDQUFDWCxXQUFXLENBQUNjLEVBQUUsQ0FBQzs7Ozs7Ozs7Ozs7Ozs7OztBQ25Cc0M7QUFDN0QsaUVBQWVaLHNFQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdmFuaWxsYS1nYW1lcy8uL3NyYy9jcm93bi1hbmQtYW5jaG9yL2Nyb3duQW5kQW5jaG9yLmpzIiwid2VicGFjazovL3ZhbmlsbGEtZ2FtZXMvLi9zcmMvY3Jvd24tYW5kLWFuY2hvci9oZWFkZXIuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYS1nYW1lcy8uL3NyYy90ZW1wbGF0ZXMvY3Jvd25fYW5kX2FuY2hvci5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgJy4uL2hvbWUvaG9tZS5zY3NzJ1xyXG5pbXBvcnQgeyBIZWFkZXIgfSBmcm9tIFwiLi9oZWFkZXJcIlxyXG5pbXBvcnQgeyBGb290ZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9mb290ZXJcIlxyXG5pbXBvcnQgeyBFbGVtZW50IH0gZnJvbSBcIi4uL3V0aWxpdGllcy9lbGVtZW50XCJcclxuXHJcbmNvbnN0IEJvZHkgPSBFbGVtZW50LmNyZWF0ZSgnZGl2Jywge2NsYXNzOiBgd3JhcHBlcmB9KVxyXG5jb25zdCBoMiA9IEVsZW1lbnQuY3JlYXRlKCdoMicpXHJcbmgyLnRleHRDb250ZW50ID0gJ0Nyb3duIGFuZCBBbmNob3InXHJcbkJvZHkuYXBwZW5kQ2hpbGQoaDIpXHJcbkJvZHkuaW5uZXJIVE1MICs9IGA8cD5cclxuUGxlYXNlIGNvbnRyaWJ1dGUgdG8gdGhpcyBwYWdlISEhXHJcbjwvcD5gXHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHRlbXBsYXRlID0gKHJvb3QpID0+IHtcclxuICBkb2N1bWVudC50aXRsZSA9ICdWYW5pbGxhIEdhbWVzIHwgQ3Jvd24gYW5kIEFuY2hvcic7XHJcbiAgcm9vdC5pbm5lckhUTUwgPSAnJ1xyXG4gIHJvb3QuYXBwZW5kQ2hpbGQoSGVhZGVyKVxyXG4gIHJvb3QuYXBwZW5kQ2hpbGQoQm9keSlcclxuICByb290LmFwcGVuZENoaWxkKEZvb3RlcilcclxufSIsImltcG9ydCB7IEVsZW1lbnQgfSBmcm9tICcuLi91dGlsaXRpZXMvZWxlbWVudCdcclxuaW1wb3J0IHN0eWxlcyBmcm9tICcuLi9ob21lL2hvbWUubW9kdWxlJ1xyXG5cclxuY29uc3Qge2NyZWF0ZSB9ID0gRWxlbWVudFxyXG5cclxuY29uc3QgbG9nbyA9IGNyZWF0ZSgnYScsIHtocmVmOiAnL3ZhbmlsbGEtZ2FtZXMnfSlcclxubG9nby50ZXh0Q29udGVudCA9ICdWYW5pbGxhIEdhbWVzJ1xyXG5sb2dvLmNsYXNzTGlzdCA9IChgJHtzdHlsZXMubG9nb30gJHtzdHlsZXMuY2FsaWdufWApXHJcblxyXG5jb25zdCB3cmFwcGVyID0gY3JlYXRlKCdkaXYnLCB7Y2xhc3M6ICBgJHtzdHlsZXMuY2FsaWdufSB3cmFwcGVyICR7c3R5bGVzLmZsZXh9YH0pXHJcbndyYXBwZXIuYXBwZW5kQ2hpbGQobG9nbylcclxuXHJcbmNvbnN0IGhlYWRlciA9IGNyZWF0ZSgnaGVhZGVyJywge2NsYXNzOiBgJHtzdHlsZXMuaGVhZGVyfWB9KVxyXG5oZWFkZXIuYXBwZW5kQ2hpbGQod3JhcHBlcilcclxuXHJcbmNvbnN0IGg1ID0gY3JlYXRlKCdoNScsIHtjbGFzczogYCR7c3R5bGVzLmg1fWB9KVxyXG5cclxuaDUuaW5uZXJIVE1MID0gJ0Nyb3duIGFuZCBBbmNob3InXHJcblxyXG53cmFwcGVyLmFwcGVuZENoaWxkKGg1KVxyXG5cclxuZXhwb3J0IHsgaGVhZGVyIGFzIEhlYWRlciAgfSIsImltcG9ydCB7IHRlbXBsYXRlIH0gZnJvbSAnLi4vY3Jvd24tYW5kLWFuY2hvci9jcm93bkFuZEFuY2hvcidcclxuZXhwb3J0IGRlZmF1bHQgdGVtcGxhdGUiXSwibmFtZXMiOlsiSGVhZGVyIiwiRm9vdGVyIiwiRWxlbWVudCIsIkJvZHkiLCJjcmVhdGUiLCJjbGFzcyIsImgyIiwidGV4dENvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImlubmVySFRNTCIsInRlbXBsYXRlIiwicm9vdCIsImRvY3VtZW50IiwidGl0bGUiLCJzdHlsZXMiLCJsb2dvIiwiaHJlZiIsImNsYXNzTGlzdCIsImNhbGlnbiIsIndyYXBwZXIiLCJmbGV4IiwiaGVhZGVyIiwiaDUiXSwic291cmNlUm9vdCI6IiJ9