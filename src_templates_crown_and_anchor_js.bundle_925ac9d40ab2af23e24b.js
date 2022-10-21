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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3RlbXBsYXRlc19jcm93bl9hbmRfYW5jaG9yX2pzLmJ1bmRsZV85MjVhYzlkNDBhYjJhZjIzZTI0Yi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNPO0FBQ1k7QUFDQztBQUU5QyxNQUFNRyxJQUFJLEdBQUdELDhEQUFjLENBQUMsS0FBSyxFQUFFO0VBQUNHLEtBQUssRUFBRztBQUFRLENBQUMsQ0FBQztBQUN0RCxNQUFNQyxFQUFFLEdBQUdKLDhEQUFjLENBQUMsSUFBSSxDQUFDO0FBQy9CSSxFQUFFLENBQUNDLFdBQVcsR0FBRyxrQkFBa0I7QUFDbkNKLElBQUksQ0FBQ0ssV0FBVyxDQUFDRixFQUFFLENBQUM7QUFDcEJILElBQUksQ0FBQ00sU0FBUyxJQUFLO0FBQ25CO0FBQ0EsS0FBSztBQUdFLE1BQU1DLFFBQVEsR0FBSUMsSUFBSSxJQUFLO0VBQ2hDQyxRQUFRLENBQUNDLEtBQUssR0FBRyxrQ0FBa0M7RUFDbkRGLElBQUksQ0FBQ0YsU0FBUyxHQUFHLEVBQUU7RUFDbkJFLElBQUksQ0FBQ0gsV0FBVyxDQUFDUiwyQ0FBTSxDQUFDO0VBQ3hCVyxJQUFJLENBQUNILFdBQVcsQ0FBQ0wsSUFBSSxDQUFDO0VBQ3RCUSxJQUFJLENBQUNILFdBQVcsQ0FBQ1Asc0RBQU0sQ0FBQztBQUMxQixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDcEI2QztBQUNOO0FBRXhDLE1BQU07RUFBQ0c7QUFBTyxDQUFDLEdBQUdGLHVEQUFPO0FBRXpCLE1BQU1hLElBQUksR0FBR1gsTUFBTSxDQUFDLEdBQUcsRUFBRTtFQUFDWSxJQUFJLEVBQUU7QUFBSSxDQUFDLENBQUM7QUFDdENELElBQUksQ0FBQ1IsV0FBVyxHQUFHLGVBQWU7QUFDbENRLElBQUksQ0FBQ0UsU0FBUyxHQUFLLEdBQUVILDhEQUFZLElBQUdBLGdFQUFjLEVBQUU7QUFFcEQsTUFBTUssT0FBTyxHQUFHZixNQUFNLENBQUMsS0FBSyxFQUFFO0VBQUNDLEtBQUssRUFBSSxHQUFFUyxnRUFBYyxZQUFXQSw4REFBWTtBQUFDLENBQUMsQ0FBQztBQUNsRkssT0FBTyxDQUFDWCxXQUFXLENBQUNPLElBQUksQ0FBQztBQUV6QixNQUFNTSxNQUFNLEdBQUdqQixNQUFNLENBQUMsUUFBUSxFQUFFO0VBQUNDLEtBQUssRUFBRyxHQUFFUyxnRUFBYztBQUFDLENBQUMsQ0FBQztBQUM1RE8sTUFBTSxDQUFDYixXQUFXLENBQUNXLE9BQU8sQ0FBQztBQUUzQixNQUFNRyxFQUFFLEdBQUdsQixNQUFNLENBQUMsSUFBSSxFQUFFO0VBQUNDLEtBQUssRUFBRyxHQUFFUyw0REFBVTtBQUFDLENBQUMsQ0FBQztBQUVoRFEsRUFBRSxDQUFDYixTQUFTLEdBQUcsa0JBQWtCO0FBRWpDVSxPQUFPLENBQUNYLFdBQVcsQ0FBQ2MsRUFBRSxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7O0FDbkJzQztBQUM3RCxpRUFBZVosc0VBQVEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92YW5pbGxhLWdhbWVzLy4vc3JjL2Nyb3duLWFuZC1hbmNob3IvY3Jvd25BbmRBbmNob3IuanMiLCJ3ZWJwYWNrOi8vdmFuaWxsYS1nYW1lcy8uL3NyYy9jcm93bi1hbmQtYW5jaG9yL2hlYWRlci5qcyIsIndlYnBhY2s6Ly92YW5pbGxhLWdhbWVzLy4vc3JjL3RlbXBsYXRlcy9jcm93bl9hbmRfYW5jaG9yLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi4vaG9tZS9ob21lLnNjc3MnXHJcbmltcG9ydCB7IEhlYWRlciB9IGZyb20gXCIuL2hlYWRlclwiXHJcbmltcG9ydCB7IEZvb3RlciB9IGZyb20gXCIuLi9jb21wb25lbnRzL2Zvb3RlclwiXHJcbmltcG9ydCB7IEVsZW1lbnQgfSBmcm9tIFwiLi4vdXRpbGl0aWVzL2VsZW1lbnRcIlxyXG5cclxuY29uc3QgQm9keSA9IEVsZW1lbnQuY3JlYXRlKCdkaXYnLCB7Y2xhc3M6IGB3cmFwcGVyYH0pXHJcbmNvbnN0IGgyID0gRWxlbWVudC5jcmVhdGUoJ2gyJylcclxuaDIudGV4dENvbnRlbnQgPSAnQ3Jvd24gYW5kIEFuY2hvcidcclxuQm9keS5hcHBlbmRDaGlsZChoMilcclxuQm9keS5pbm5lckhUTUwgKz0gYDxwPlxyXG5QbGVhc2UgY29udHJpYnV0ZSB0byB0aGlzIHBhZ2UhISFcclxuPC9wPmBcclxuXHJcblxyXG5leHBvcnQgY29uc3QgdGVtcGxhdGUgPSAocm9vdCkgPT4ge1xyXG4gIGRvY3VtZW50LnRpdGxlID0gJ1ZhbmlsbGEgR2FtZXMgfCBDcm93biBhbmQgQW5jaG9yJztcclxuICByb290LmlubmVySFRNTCA9ICcnXHJcbiAgcm9vdC5hcHBlbmRDaGlsZChIZWFkZXIpXHJcbiAgcm9vdC5hcHBlbmRDaGlsZChCb2R5KVxyXG4gIHJvb3QuYXBwZW5kQ2hpbGQoRm9vdGVyKVxyXG59IiwiaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gJy4uL3V0aWxpdGllcy9lbGVtZW50J1xyXG5pbXBvcnQgc3R5bGVzIGZyb20gJy4uL2hvbWUvaG9tZS5tb2R1bGUnXHJcblxyXG5jb25zdCB7Y3JlYXRlIH0gPSBFbGVtZW50XHJcblxyXG5jb25zdCBsb2dvID0gY3JlYXRlKCdhJywge2hyZWY6ICcvIyd9KVxyXG5sb2dvLnRleHRDb250ZW50ID0gJ1ZhbmlsbGEgR2FtZXMnXHJcbmxvZ28uY2xhc3NMaXN0ID0gKGAke3N0eWxlcy5sb2dvfSAke3N0eWxlcy5jYWxpZ259YClcclxuXHJcbmNvbnN0IHdyYXBwZXIgPSBjcmVhdGUoJ2RpdicsIHtjbGFzczogIGAke3N0eWxlcy5jYWxpZ259IHdyYXBwZXIgJHtzdHlsZXMuZmxleH1gfSlcclxud3JhcHBlci5hcHBlbmRDaGlsZChsb2dvKVxyXG5cclxuY29uc3QgaGVhZGVyID0gY3JlYXRlKCdoZWFkZXInLCB7Y2xhc3M6IGAke3N0eWxlcy5oZWFkZXJ9YH0pXHJcbmhlYWRlci5hcHBlbmRDaGlsZCh3cmFwcGVyKVxyXG5cclxuY29uc3QgaDUgPSBjcmVhdGUoJ2g1Jywge2NsYXNzOiBgJHtzdHlsZXMuaDV9YH0pXHJcblxyXG5oNS5pbm5lckhUTUwgPSAnQ3Jvd24gYW5kIEFuY2hvcidcclxuXHJcbndyYXBwZXIuYXBwZW5kQ2hpbGQoaDUpXHJcblxyXG5leHBvcnQgeyBoZWFkZXIgYXMgSGVhZGVyICB9IiwiaW1wb3J0IHsgdGVtcGxhdGUgfSBmcm9tICcuLi9jcm93bi1hbmQtYW5jaG9yL2Nyb3duQW5kQW5jaG9yJ1xyXG5leHBvcnQgZGVmYXVsdCB0ZW1wbGF0ZSJdLCJuYW1lcyI6WyJIZWFkZXIiLCJGb290ZXIiLCJFbGVtZW50IiwiQm9keSIsImNyZWF0ZSIsImNsYXNzIiwiaDIiLCJ0ZXh0Q29udGVudCIsImFwcGVuZENoaWxkIiwiaW5uZXJIVE1MIiwidGVtcGxhdGUiLCJyb290IiwiZG9jdW1lbnQiLCJ0aXRsZSIsInN0eWxlcyIsImxvZ28iLCJocmVmIiwiY2xhc3NMaXN0IiwiY2FsaWduIiwid3JhcHBlciIsImZsZXgiLCJoZWFkZXIiLCJoNSJdLCJzb3VyY2VSb290IjoiIn0=
