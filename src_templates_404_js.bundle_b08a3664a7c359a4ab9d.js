"use strict";
(self["webpackChunkvanilla_games"] = self["webpackChunkvanilla_games"] || []).push([["src_templates_404_js"],{

/***/ "./src/templates/404.js":
/*!******************************!*\
  !*** ./src/templates/404.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _home_home_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../home/home.scss */ "./src/home/home.scss");
/* harmony import */ var _utilities_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../utilities/element */ "./src/utilities/element.js");


const Body = _utilities_element__WEBPACK_IMPORTED_MODULE_1__.Element.create('div', {
  class: `wrapper`
});
const h2 = _utilities_element__WEBPACK_IMPORTED_MODULE_1__.Element.create('h2');
h2.textContent = 'Page Not Found!';
const para = _utilities_element__WEBPACK_IMPORTED_MODULE_1__.Element.create('p');
const link = _utilities_element__WEBPACK_IMPORTED_MODULE_1__.Element.create('a', {
  href: '/vanilla-games/#'
});
link.textContent = 'Go to Home Page...';
para.appendChild(link);
Body.appendChild(h2);
Body.appendChild(para);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (root => {
  document.title = 'Vanilla Games | Not Found';
  root.innerHTML = '';
  root.appendChild(Body);
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX3RlbXBsYXRlc180MDRfanMuYnVuZGxlX2IwOGEzNjY0YTdjMzU5YTRhYjlkLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUEwQjtBQUNvQjtBQUU5QyxNQUFNQyxJQUFJLEdBQUdELDhEQUFjLENBQUMsS0FBSyxFQUFFO0VBQUNHLEtBQUssRUFBRztBQUFRLENBQUMsQ0FBQztBQUN0RCxNQUFNQyxFQUFFLEdBQUdKLDhEQUFjLENBQUMsSUFBSSxDQUFDO0FBQy9CSSxFQUFFLENBQUNDLFdBQVcsR0FBRyxpQkFBaUI7QUFDbEMsTUFBTUMsSUFBSSxHQUFHTiw4REFBYyxDQUFDLEdBQUcsQ0FBQztBQUNoQyxNQUFNTyxJQUFJLEdBQUdQLDhEQUFjLENBQUMsR0FBRyxFQUFFO0VBQUNRLElBQUksRUFBRTtBQUFrQixDQUFDLENBQUM7QUFDNURELElBQUksQ0FBQ0YsV0FBVyxHQUFHLG9CQUFvQjtBQUN2Q0MsSUFBSSxDQUFDRyxXQUFXLENBQUNGLElBQUksQ0FBQztBQUN0Qk4sSUFBSSxDQUFDUSxXQUFXLENBQUNMLEVBQUUsQ0FBQztBQUNwQkgsSUFBSSxDQUFDUSxXQUFXLENBQUNILElBQUksQ0FBQztBQUN0QixpRUFBZ0JJLElBQUksSUFBSztFQUN2QkMsUUFBUSxDQUFDQyxLQUFLLEdBQUcsMkJBQTJCO0VBQzVDRixJQUFJLENBQUNHLFNBQVMsR0FBRyxFQUFFO0VBQ25CSCxJQUFJLENBQUNELFdBQVcsQ0FBQ1IsSUFBSSxDQUFDO0FBQ3hCLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly92YW5pbGxhLWdhbWVzLy4vc3JjL3RlbXBsYXRlcy80MDQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuLi9ob21lL2hvbWUuc2NzcydcclxuaW1wb3J0IHsgRWxlbWVudCB9IGZyb20gXCIuLi91dGlsaXRpZXMvZWxlbWVudFwiXHJcblxyXG5jb25zdCBCb2R5ID0gRWxlbWVudC5jcmVhdGUoJ2RpdicsIHtjbGFzczogYHdyYXBwZXJgfSlcclxuY29uc3QgaDIgPSBFbGVtZW50LmNyZWF0ZSgnaDInKVxyXG5oMi50ZXh0Q29udGVudCA9ICdQYWdlIE5vdCBGb3VuZCEnXHJcbmNvbnN0IHBhcmEgPSBFbGVtZW50LmNyZWF0ZSgncCcpXHJcbmNvbnN0IGxpbmsgPSBFbGVtZW50LmNyZWF0ZSgnYScsIHtocmVmOiAnL3ZhbmlsbGEtZ2FtZXMvIyd9KVxyXG5saW5rLnRleHRDb250ZW50ID0gJ0dvIHRvIEhvbWUgUGFnZS4uLidcclxucGFyYS5hcHBlbmRDaGlsZChsaW5rKVxyXG5Cb2R5LmFwcGVuZENoaWxkKGgyKVxyXG5Cb2R5LmFwcGVuZENoaWxkKHBhcmEpXHJcbmV4cG9ydCBkZWZhdWx0IChyb290KSA9PiB7XHJcbiAgZG9jdW1lbnQudGl0bGUgPSAnVmFuaWxsYSBHYW1lcyB8IE5vdCBGb3VuZCc7XHJcbiAgcm9vdC5pbm5lckhUTUwgPSAnJ1xyXG4gIHJvb3QuYXBwZW5kQ2hpbGQoQm9keSlcclxufSJdLCJuYW1lcyI6WyJFbGVtZW50IiwiQm9keSIsImNyZWF0ZSIsImNsYXNzIiwiaDIiLCJ0ZXh0Q29udGVudCIsInBhcmEiLCJsaW5rIiwiaHJlZiIsImFwcGVuZENoaWxkIiwicm9vdCIsImRvY3VtZW50IiwidGl0bGUiLCJpbm5lckhUTUwiXSwic291cmNlUm9vdCI6IiJ9