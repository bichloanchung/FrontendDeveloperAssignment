(this["webpackJsonpstar-wars-app"]=this["webpackJsonpstar-wars-app"]||[]).push([[0],{117:function(e,t,c){},119:function(e,t,c){},131:function(e,t,c){},133:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(38),s=c.n(a),i=(c(117),c(83)),j=c.n(i),l=c(97),h=c(37),o=(c(119),c(153)),b=c(150),d=c(54),O=c(2);function u(){return Object(O.jsx)(o.a,{inverted:!0,children:Object(O.jsx)(b.a,{children:Object(O.jsx)(d.b,{to:"/characters",children:Object(O.jsx)(o.a.Item,{name:"Welcome to Star Wars Characters API...!!!!"})})})})}var x=c(156),p=c(151),g=c(155),f=c(154),m=(c(91),c(152));function v(e){var t=e.data,c=e.loading,r=Object(n.useState)(""),a=Object(h.a)(r,2),s=a[0],i=a[1],j=Object(n.useState)([]),l=Object(h.a)(j,2),o=l[0],b=l[1];return Object(n.useEffect)((function(){b(t.filter((function(e){return null==s||e.name.toLowerCase().includes(s.toLowerCase())?e:void 0})))}),[s,t]),c?Object(O.jsx)("p",{children:"Loading ..."}):Object(O.jsxs)("div",{align:"center",children:[Object(O.jsx)("h3",{children:Object(O.jsx)("i",{children:" Enter name here to be searched! "})}),Object(O.jsx)("input",{class:"form-control-lg",type:"text",placeholder:"Search...",onChange:function(e){return i(e.target.value)}}),Object(O.jsx)("p",{}),Object(O.jsx)(g.a,{columns:2,children:o.map((function(e,t){return Object(O.jsx)(g.a.Column,{children:Object(O.jsx)(f.a,{children:Object(O.jsx)(f.a.Content,{children:Object(O.jsx)(m.a,{trigger:Object(O.jsx)(f.a.Header,{align:"center",children:e.name}),position:"right center",children:Object(O.jsxs)(f.a.Description,{children:[Object(O.jsx)("strong",{children:"Height"}),Object(O.jsx)("p",{children:e.height}),Object(O.jsx)("strong",{children:"Mass"}),Object(O.jsx)("p",{children:e.mass}),Object(O.jsx)("strong",{children:"Hair-color"}),Object(O.jsx)("p",{children:e.hair_color}),Object(O.jsx)("strong",{children:"Gender"}),Object(O.jsx)("p",{children:e.gender}),Object(O.jsx)("strong",{children:"Birthday"}),Object(O.jsx)("p",{children:e.birth_year})]})},t)})})},t)}))})]})}c(131);var C=function(e){for(var t=e.peoplePerPage,c=e.totalPeople,n=e.paginate,r=[],a=1;a<=Math.ceil(c/t);a++)r.push(a);return Object(O.jsxs)("nav",{align:"center",children:[Object(O.jsx)("p",{}),Object(O.jsxs)("ul",{class:"pagination pg-blue justify-content-center",children:[Object(O.jsx)("li",{class:"page-item disabled",children:Object(O.jsx)("a",{class:"page-link",tabindex:"-1",children:"Previous"})}),r.map((function(e){return Object(O.jsx)("li",{class:"page-item",children:Object(O.jsx)("a",{onClick:function(){return n(e)},href:"!#",className:"page-link",children:e})},e)})),Object(O.jsx)("li",{class:"page-item",href:"!#",children:Object(O.jsx)("a",{class:"page-link",children:"2"})}),Object(O.jsx)("li",{class:"page-item",href:"!#",children:Object(O.jsx)("a",{class:"page-link",children:"3"})}),Object(O.jsx)("li",{class:"page-item disabled",children:Object(O.jsx)("a",{class:"page-link",children:"Next"})})]})]})},S=function(e){var t=Object(n.useState)([]),c=Object(h.a)(t,2),r=c[0],a=c[1],s=Object(n.useState)(!0),i=Object(h.a)(s,2),o=i[0],g=i[1],f=Object(n.useState)(1),m=Object(h.a)(f,2),S=m[0],P=m[1],k=Object(n.useState)(10),w=Object(h.a)(k,1)[0];Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(j.a.mark((function e(){var t,c;return j.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://swapi.dev/api/people/?format=json");case 2:return t=e.sent,e.next=5,t.json();case 5:c=e.sent,a(c.results),g(!1);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var y=S*w,L=y-w,E=r.slice(L,y);return Object(O.jsx)("div",{align:"center",children:Object(O.jsxs)(d.a,{children:[Object(O.jsx)(u,{}),Object(O.jsx)(b.a,{children:o?Object(O.jsx)(x.a,{active:!0,inverted:!0,children:Object(O.jsx)(p.a,{children:"Loading"})}):Object(O.jsxs)(d.a,{exact:!0,path:"/characters",children:[Object(O.jsx)("h1",{align:"center",children:Object(O.jsx)("strong",{children:"Star Wars Characters"})}),Object(O.jsx)(v,{data:E}),Object(O.jsx)(C,{peoplePerPage:w,totalPeople:r.length,paginate:function(e){return P(e)}})]})})]})})},P=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,159)).then((function(t){var c=t.getCLS,n=t.getFID,r=t.getFCP,a=t.getLCP,s=t.getTTFB;c(e),n(e),r(e),a(e),s(e)}))};c(132);s.a.render(Object(O.jsx)(r.a.StrictMode,{children:Object(O.jsx)(S,{})}),document.getElementById("root")),P()}},[[133,1,2]]]);
//# sourceMappingURL=main.10cb68aa.chunk.js.map