"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[838],{355:function(t,n,e){e.d(n,{AR:function(){return u},Hx:function(){return a},bI:function(){return i},uV:function(){return o},vw:function(){return f}});var r=e(44);r.ZP.defaults.baseURL="https://api.themoviedb.org/";var c="438b209afcbf786d00b41cef323b2ca7",u=function(){return r.ZP.get("3/trending/movie/day?api_key=".concat(c)).then((function(t){return t.data.results}))},i=function(t){return r.ZP.get("3/movie/".concat(t,"?api_key=").concat(c)).then((function(t){return t.data}))},o=function(t){return r.ZP.get("3/movie/".concat(t,"/credits?api_key=").concat(c)).then((function(t){return t.data.cast}))},a=function(t){return r.ZP.get("3/movie/".concat(t,"/reviews?api_key=").concat(c)).then((function(t){return t.data.results}))},f=function(t){return r.ZP.get("3/search/movie?api_key=".concat(c,"&query=").concat(t)).then((function(t){return t.data.results}))}},838:function(t,n,e){e.r(n);var r=e(885),c=e(355),u=e(791),i=e(689),o=e(184);n.default=function(){var t=(0,u.useState)(null),n=(0,r.Z)(t,2),e=n[0],a=n[1],f=(0,i.UO)().movieID;if((0,u.useEffect)((function(){(0,c.Hx)(f).then(a)}),[f]),e)return(0,o.jsx)("div",{children:e.length>0?(0,o.jsx)("ul",{children:e.map((function(t){return(0,o.jsxs)("li",{children:[(0,o.jsxs)("h3",{children:["Author: ",t.author]}),(0,o.jsx)("p",{children:t.content})]},t.id)}))}):"We don't have any reviews for this movie"})}}}]);
//# sourceMappingURL=838.aa7e92d4.chunk.js.map