"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[736],{2634:function(t,n,e){e.d(n,{x:function(){return a}});var r=e(6444),c=e(407),a=(0,r.ZP)("div")(c.$_,c.Dh,c.bK,c.GQ,c.eC,c.Oq,c.Cg,c.FK)},9736:function(t,n,e){e.r(n),e.d(n,{default:function(){return v}});var r,c,a,u=e(9439),o=e(2791),i=e(7689),s=e(9502),p=e(2634),f=e(4060),h=e(168),l=e(6444),m=l.ZP.img(r||(r=(0,h.Z)(["\n  width: 100%;\n  height: 250px;\n  object-fit: cover;\n  border-radius: ",";\n  margin-bottom: ","px;\n"])),(function(t){return t.theme.radii.normal}),(function(t){return t.theme.space[3]})),d=l.ZP.p(c||(c=(0,h.Z)(["\n  font-weight: ",";\n  margin-bottom: ","px;\n"])),(function(t){return t.theme.fontWeights.bold}),(function(t){return t.theme.space[2]})),x=l.ZP.p(a||(a=(0,h.Z)(["\n  color: ",";\n"])),(function(t){return t.theme.colors.lighttext})),g=e(184),v=function(){var t=(0,o.useState)([]),n=(0,u.Z)(t,2),e=n[0],r=n[1],c=(0,i.UO)().movieId;if((0,o.useEffect)((function(){(0,s.xc)(c).then((function(t){return r(t.cast)})).catch((function(t){return console.log(t)}))}),[c]),e)return(0,g.jsx)(p.x,{as:"ul",display:"grid",gridGap:5,gridTemplateColumns:"repeat(auto-fit, minmax(150px, auto))",pt:5,borderTop:"1px solid lightgrey",children:e.length>0?e.map((function(t){return(0,g.jsxs)("li",{children:[(0,g.jsx)(m,{src:t.profile_path?"https://image.tmdb.org/t/p/w200/".concat(t.profile_path):f,alt:t.name}),(0,g.jsx)(d,{children:t.name}),(0,g.jsxs)(x,{children:["Character: ",t.character]})]},t.id)})):"There is no information about the actors"})}},9502:function(t,n,e){e.d(n,{E3:function(){return x},Hx:function(){return m},Mc:function(){return p},Tg:function(){return i},xc:function(){return h}});var r=e(5861),c=e(7757),a=e.n(c),u="https://api.themoviedb.org",o="bb66d39a29feb698f032f2613a49cacc";function i(){return s.apply(this,arguments)}function s(){return(s=(0,r.Z)(a().mark((function t(){var n;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u,"/3/trending/all/day?api_key=").concat(o));case 2:return n=t.sent,t.next=5,n.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function p(t){return f.apply(this,arguments)}function f(){return(f=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u,"/3/movie/").concat(n,"?api_key=").concat(o,"&language=en-US"));case 2:return e=t.sent,t.next=5,e.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function h(t){return l.apply(this,arguments)}function l(){return(l=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u,"/3/movie/").concat(n,"/credits?api_key=").concat(o,"&language=en-US"));case 2:return e=t.sent,t.next=5,e.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function m(t){return d.apply(this,arguments)}function d(){return(d=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u,"/3/movie/").concat(n,"/reviews?api_key=").concat(o,"&language=en-US&page=1"));case 2:return e=t.sent,t.next=5,e.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}function x(t){return g.apply(this,arguments)}function g(){return(g=(0,r.Z)(a().mark((function t(n){var e;return a().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("".concat(u,"/3/search/movie?api_key=").concat(o,"&query=").concat(n));case 2:return e=t.sent,t.next=5,e.json();case 5:return t.abrupt("return",t.sent);case 6:case"end":return t.stop()}}),t)})))).apply(this,arguments)}},4060:function(t,n,e){t.exports=e.p+"static/media/no_image.63063464ad12ac2eb45f.jpg"}}]);
//# sourceMappingURL=736.95ab878e.chunk.js.map