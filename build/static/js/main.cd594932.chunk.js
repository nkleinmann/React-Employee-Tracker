(this.webpackJsonpemployee=this.webpackJsonpemployee||[]).push([[0],{69:function(e,a,t){e.exports=t(97)},74:function(e,a,t){},78:function(e,a,t){},97:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(8),c=t.n(l),o=(t(74),t(26)),i=t(143),s=t(146),u=t(147),m=t(142),d=t(145),h=t(137),p=t(151),f=t(141),g=t(154),b=t(144);function v(e,a,t){return a[t]<e[t]?-1:a[t]>e[t]?1:0}var E=[{id:"image",numeric:!1,disablePadding:!0,label:"Profile Image"},{id:"fname",numeric:!0,disablePadding:!1,label:"First Name"},{id:"lname",numeric:!0,disablePadding:!1,label:"Last Name"},{id:"email",numeric:!0,disablePadding:!1,label:"Email"},{id:"phonenumber",numeric:!0,disablePadding:!1,label:"Phone"}];function y(e){var a=e.classes,t=e.order,n=e.orderBy,l=e.onRequestSort;return r.a.createElement(h.a,null,r.a.createElement(f.a,null,E.map((function(e){return r.a.createElement(m.a,{key:e.id,align:"center",padding:e.disablePadding?"none":"default",sortDirection:n===e.id&&t},r.a.createElement(g.a,{active:n===e.id,direction:n===e.id?t:"asc",onClick:(c=e.id,function(e){l(e,c)})},e.label,n===e.id?r.a.createElement("span",{className:a.visuallyHidden},"desc"===t?"sorted descending":"sorted ascending"):null));var c}))))}var w=Object(i.a)((function(e){return{root:{width:"100%"},paper:{width:"100%",marginBottom:e.spacing(2)},table:{minWidth:750},visuallyHidden:{border:0,clip:"rect(0 0 0 0)",height:1,margin:-1,overflow:"hidden",padding:0,position:"absolute",top:20,width:1}}}));function S(e){console.log(e);var a=e.rows.map((function(e){return{id:e.id,first:e.first,last:e.last,email:e.email,phone:e.phone,photo:e.photo}}));console.log("This is the rows below"),console.log(a);var t=w(),n=r.a.useState("asc"),l=Object(o.a)(n,2),c=l[0],i=l[1],h=r.a.useState("last"),g=Object(o.a)(h,2),E=g[0],S=g[1],C=r.a.useState([]),j=Object(o.a)(C,2),N=j[0],P=(j[1],r.a.useState(0)),O=Object(o.a)(P,2),k=O[0],B=O[1],L=r.a.useState(!1),I=Object(o.a)(L,2),x=I[0],A=(I[1],r.a.useState(5)),H=Object(o.a)(A,2),M=H[0],R=H[1],T=M-Math.min(M,a.length-k*M);return r.a.createElement("div",{className:t.root},r.a.createElement(b.a,{className:t.paper},r.a.createElement(d.a,null,r.a.createElement(s.a,{className:t.table,"aria-labelledby":"tableTitle",size:x?"small":"medium","aria-label":"enhanced table"},r.a.createElement(y,{classes:t,numSelected:N.length,order:c,orderBy:E,onRequestSort:function(e,a){i(E===a&&"asc"===c?"desc":"asc"),S(a)},rowCount:a.length}),r.a.createElement(u.a,null,function(e,a){var t=e.map((function(e,a){return[e,a]}));return t.sort((function(e,t){var n=a(e[0],t[0]);return 0!==n?n:e[1]-t[1]})),t.map((function(e){return e[0]}))}(a,function(e,a){return"desc"===e?function(e,t){return v(e,t,a)}:function(e,t){return-v(e,t,a)}}(c,E)).slice(k*M,k*M+M).map((function(e,a){return r.a.createElement(f.a,{hover:!0,tabIndex:-1,key:e.id},r.a.createElement(m.a,{alight:"center"},r.a.createElement("img",{src:e.photo,alt:e.last,widht:"50",height:"50"})),r.a.createElement(m.a,{align:"center"},e.first),r.a.createElement(m.a,{align:"center"},e.last),r.a.createElement(m.a,{align:"center"},e.email),r.a.createElement(m.a,{align:"center"},e.phone))})),T>0&&r.a.createElement(f.a,{style:{height:(x?33:53)*T}},r.a.createElement(m.a,{colSpan:6}))))),r.a.createElement(p.a,{rowsPerPageOptions:[5,10,25],component:"div",count:a.length,rowsPerPage:M,page:k,onChangePage:function(e,a){B(a)},onChangeRowsPerPage:function(e){R(parseInt(e.target.value,10)),B(0)}})))}var C=t(54),j=t(55),N=t(56),P=t(59),O=t(58),k=(t(78),t(57)),B=t.n(k),L=function(){return B.a.get("https://randomuser.me/api/?results=200&nat=us")},I=function(e,a){return a.filter((function(a){return a.first.toLowerCase().includes(e.toLowerCase())||a.last.toLowerCase().includes(e.toLowerCase())||a.phone.toLowerCase().includes(e.toLowerCase())||a.email.toLowerCase().includes(e.toLowerCase())}))},x=t(153);var A=function(e){return r.a.createElement(x.a,{className:"searchBox",color:"secondary",variant:"outlined",label:"Search Here",type:"search",name:"search",onChange:e.handleInputChange})},H=function(e){Object(P.a)(t,e);var a=Object(O.a)(t);function t(){var e;return Object(j.a)(this,t),(e=a.call(this)).handleInputChange=function(a){var t=a.target.value,n=a.target.name;e.setState(Object(C.a)({},n,t),(function(){if(e.state.search){var a=I(e.state.search,e.state.currentSearchArray);e.setState({employees:a,orderBy:""})}else e.setState({employees:e.state.currentSearchArray,orderBy:""})}))},e.state={employees:[],currentSearchArray:[]},e}return Object(N.a)(t,[{key:"componentDidMount",value:function(){var e=this;L().then((function(a){console.log(a);var t=a.data.results.map((function(e){return{id:e.id.value,first:e.name.first,last:e.name.last,email:e.email,phone:e.phone,photo:e.picture.thumbnail}}));e.setState({employees:t,currentSearchArray:t})})).catch((function(e){return console.log(e)}))}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row header"},r.a.createElement("div",{className:"col-12 d-flex justify-content-center"},r.a.createElement("h1",null,"Employee Tracker"))),r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-12 d-flex justify-content-center"},r.a.createElement(A,{handleInputChange:this.handleInputChange})),r.a.createElement("div",{className:"col-12 d-flex justify-content-center"},r.a.createElement("button",{className:"btn btn-primary searchBtn"},"Search"))),r.a.createElement("br",null),r.a.createElement(S,{rows:this.state.currentSearchArray})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(96);c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[69,1,2]]]);
//# sourceMappingURL=main.cd594932.chunk.js.map