"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[375],{355:function(n,t,e){e.d(t,{AR:function(){return o},Hx:function(){return s},bI:function(){return c},uV:function(){return a},vw:function(){return u}});var i=e(44);i.ZP.defaults.baseURL="https://api.themoviedb.org/";var r="438b209afcbf786d00b41cef323b2ca7",o=function(){return i.ZP.get("3/trending/movie/day?api_key=".concat(r)).then((function(n){return n.data.results}))},c=function(n){return i.ZP.get("3/movie/".concat(n,"?api_key=").concat(r)).then((function(n){return n.data}))},a=function(n){return i.ZP.get("3/movie/".concat(n,"/credits?api_key=").concat(r)).then((function(n){return n.data.cast}))},s=function(n){return i.ZP.get("3/movie/".concat(n,"/reviews?api_key=").concat(r)).then((function(n){return n.data.results}))},u=function(n){return i.ZP.get("3/search/movie?api_key=".concat(r,"&query=").concat(n)).then((function(n){return n.data.results}))}},375:function(n,t,e){e.r(t),e.d(t,{default:function(){return w}});var i,r,o,c,a,s,u=e(885),d=e(355),l=e(791),h=e(689),f=e(168),v=e(731),x=e(444),m=(0,x.ZP)(v.OL)(i||(i=(0,f.Z)(["\n  color: #000000;\n  font-weight: 500;\n  cursor: hand;\n  margin-bottom: 20px;\n"]))),p=x.ZP.div(r||(r=(0,f.Z)(["\n  display: flex;\n  border-bottom: 1px solid black;\n  margin-bottom: 20px;\n"]))),g=x.ZP.div(o||(o=(0,f.Z)(["\n  margin-bottom: 16px;\n"]))),j=x.ZP.div(c||(c=(0,f.Z)(["\n  font-weight: 700;\n  border-bottom: 1px solid black;\n"]))),b=x.ZP.ul(a||(a=(0,f.Z)(["\n  display: flex;\n  margin-top: 10px;\n  margin-bottom: 20px;\n"]))),Z=(0,x.ZP)(v.OL)(s||(s=(0,f.Z)(["\n  color: #000000;\n  font-weight: 700;\n  cursor: hand;\n  &.active {\n    color: red;\n  }\n"]))),_=e(184),w=function(){var n,t,e=(0,l.useState)(null),i=(0,u.Z)(e,2),r=i[0],o=i[1],c=(0,h.UO)().movieID,a=(0,h.TH)(),s=(0,l.useRef)(null!==(n=null===(t=a.state)||void 0===t?void 0:t.from)&&void 0!==n?n:"/");if((0,l.useEffect)((function(){(0,d.bI)(c).then(o)}),[c]),r){var f=r.title,v=r.poster_path,x=r.original_title,w=r.release_date,k=r.vote_average,P=r.overview,y=r.genres;return(0,_.jsxs)("main",{children:[(0,_.jsx)(m,{to:s.current,children:"Back to movies"}),(0,_.jsxs)(p,{children:[(0,_.jsx)("div",{children:(0,_.jsx)("img",{style:{marginRight:20},src:"https://image.tmdb.org/t/p/w500/".concat(v),alt:x,width:"200px"})}),(0,_.jsxs)(g,{children:[(0,_.jsxs)("h2",{children:[f," (",w.slice(0,4),")"]}),(0,_.jsxs)("p",{children:["Rating: ",k.toFixed(2)]}),(0,_.jsx)("h3",{children:"Overview"}),(0,_.jsx)("p",{children:P}),(0,_.jsx)("h3",{children:"Genres"}),(0,_.jsx)("p",{children:y.map((function(n){return n.name})).join(" ")})]})]}),(0,_.jsxs)(j,{children:[(0,_.jsx)("p",{children:"Additional iformation"}),(0,_.jsxs)(b,{children:[(0,_.jsx)("li",{children:(0,_.jsx)(Z,{to:"cast",style:{marginRight:20},children:"Cast"})}),(0,_.jsx)("li",{children:(0,_.jsx)(Z,{to:"reviews",children:"Reviews"})})]})]}),(0,_.jsx)(l.Suspense,{fallback:(0,_.jsx)("div",{children:"Loading..."}),children:(0,_.jsx)(h.j3,{})})]})}}}}]);
//# sourceMappingURL=375.0b19e2c2.chunk.js.map