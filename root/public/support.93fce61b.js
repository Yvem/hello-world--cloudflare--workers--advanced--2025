(()=>{var e=globalThis,r={},t={},n=e.parcelRequire375b;null==n&&((n=function(e){if(e in r)return r[e].exports;if(e in t){var n=t[e];delete t[e];var o={id:e,exports:{}};return r[e]=o,n.call(o.exports,o,o.exports),o.exports}var i=Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,r){t[e]=r},e.parcelRequire375b=n);var o=n.register;o("gM6Yr",function(e,r){n("arvBJ"),n("67SVA")}),o("arvBJ",function(e,r){window.addEventListener("keydown",function e(r){9===r.keyCode&&(document.body.classList.add("user-is-tabbing"),window.removeEventListener("keydown",e))})}),o("67SVA",function(e,r){var t=n("5W8wb");"webmanifest"===new URLSearchParams(window.location.search).get("ref")&&(console.log("Hello from @offirmo-private/css--framework / atomic--dimension.tsx: dynamically tweaking some CSS: o⋄full-viewport for iOs pinned app..."),(0,t.default)({id:"pinned-webapp-adjustments--viewport",css:`
:root {
	/* see @offirmo-private/css--framework/src/atomic/atomic--dimension.css#L28
	 * pinned apps on iOs: dv* are not full screen
	 */
	--o\u{22C4}full-viewport__width: 100lvw;
	--o\u{22C4}full-viewport__height: 100lvh;
}
`}))}),o("5W8wb",function(e,r){Object.defineProperty(e.exports,"default",{get:()=>t,set:void 0,enumerable:!0,configurable:!0});var t=function({id:e,css:r,href:t,document:n=window.document}){let o=n.getElementById(e);if(o)return o;let i=(()=>{if(r&&t)throw Error("style_once(): conflicting css & href!");if(r){let t=n.createElement("style");return t.setAttribute("id",e),t.innerHTML=r,t}if(t){let r=n.createElement("link");return r.setAttribute("id",e),r.rel="stylesheet",r.href=t,r}throw Error("style_once(): you must provide css or href!")})();return n.head.appendChild(i),i}}),o("2a5aT",function(e,r){})})();
//# sourceMappingURL=support.93fce61b.js.map
