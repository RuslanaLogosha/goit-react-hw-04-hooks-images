(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{48:function(e,t,n){},58:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n.n(a),o=n(3),s=n.n(o),i=n(15),l=n(4),u=n(9),j=n(19),b=n.n(j),m=(n(47),n(48),n(20));var h={fetchImages:function(e,t){var n="".concat("https://pixabay.com/api/","?q=").concat(e,"&page=").concat(t,"&key=").concat("18957101-8b16af6433f6d6830b4844a72","&image_type=photo&orientation=horizontal&per_page=12");return fetch(n).then((function(e){return e.ok?e.json():Promise.reject(new Error("No response from server"))}))}};var f=function(e){var t=e.message;return Object(c.jsx)("div",{role:"alert",children:Object(c.jsxs)("p",{children:["Sorry, something went wrong. Error: ",t]})})},g=document.querySelector("#modal-root");function O(e){var t=e.src,n=e.alt,r=e.onClose;Object(a.useEffect)((function(){return console.log("mount"),window.addEventListener("keydown",s),function(){console.log("unmount"),window.removeEventListener("keydown",s)}}));var s=function(e){"Escape"===e.code&&r()};return Object(o.createPortal)(Object(c.jsx)("div",{className:"Overlay",onClick:function(e){e.currentTarget===e.target&&r()},children:Object(c.jsx)("div",{className:"Modal",children:Object(c.jsx)("img",{src:t,alt:n})})}),g)}function d(e){var t=e.src,n=e.alt,r=e.largeImageUrl,o=Object(a.useState)(!1),s=Object(l.a)(o,2),i=s[0],u=s[1],j=function(){u(!i)};return Object(c.jsxs)("li",{className:"ImageGalleryItem",children:[Object(c.jsx)("img",{onClick:j,src:t,alt:n,className:"ImageGalleryItemImage"}),i&&Object(c.jsx)(O,{onClose:j,src:r,alt:n})]})}function x(e){var t=e.images;return Object(c.jsx)("ul",{className:"ImageGallery",children:t.map((function(e){var t=e.webformatURL,n=e.tags,a=e.largeImageURL,r=e.id;return Object(c.jsx)(d,{src:t,alt:n,largeImageUrl:a},r)}))})}function p(e){var t=e.onClick;return Object(c.jsx)("button",{onClick:function(){t()},className:"Button",type:"button",children:"Load more"})}n(57);function v(e){var t=e.onSubmit,n=Object(a.useState)(""),r=Object(l.a)(n,2),o=r[0],s=r[1];return Object(c.jsx)("header",{className:"Searchbar",children:Object(c.jsxs)("form",{className:"SearchForm",onSubmit:function(e){e.preventDefault(),""!==o.trim()?(t(o),s("")):Object(u.b)("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0437\u0430\u043f\u0440\u043e\u0441.")},children:[Object(c.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(c.jsx)("span",{className:"SearchForm-button-label",children:"Search"})}),Object(c.jsx)("input",{className:"SearchForm-input",type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos",value:o,onChange:function(e){s(e.currentTarget.value.toLowerCase())}})]})})}var S="idle",y="pending",w="resolved",C="rejected";function N(){var e=Object(a.useState)(null),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(a.useState)(S),s=Object(l.a)(o,2),j=s[0],g=s[1],O=Object(a.useState)(""),d=Object(l.a)(O,2),N=d[0],k=d[1],I=Object(a.useState)(1),F=Object(l.a)(I,2),L=F[0],E=F[1],T=Object(a.useState)([]),P=Object(l.a)(T,2),B=P[0],U=P[1];Object(a.useEffect)((function(){if(N){g(y),h.fetchImages(N,L).then((function(e){return U((function(t){return[].concat(Object(i.a)(t),Object(i.a)(e.hits))}))})).catch((function(e){r(e),g(C)})).finally((function(){return g(w)})),m.animateScroll.scrollToBottom()}}),[N,L]);return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(v,{onSubmit:function(e){e!==N&&(k(e),E(1),U([]))}}),Object(c.jsx)(u.a,{autoClose:3e3}),j===S&&Object(c.jsx)("p",{className:"welcomeText",children:"Please enter your search term"}),j===C&&Object(c.jsx)(f,{message:n.message}),B.length>0&&j===w&&Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)(x,{images:B}),Object(c.jsx)(p,{onClick:function(){E((function(e){return e+1}))}})]}),j===y&&Object(c.jsx)(b.a,{style:{textAlign:"center"},className:"Loader",type:"ThreeDots",color:"#303f9f",height:50,width:50})]})}var k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,61)).then((function(t){var n=t.getCLS,c=t.getFID,a=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),a(e),r(e),o(e)}))};s.a.render(Object(c.jsx)(r.a.StrictMode,{children:Object(c.jsx)(N,{})}),document.getElementById("root")),k()}},[[58,1,2]]]);
//# sourceMappingURL=main.31fa72d9.chunk.js.map