(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],[,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),s=n.n(c),r=n(3),o=n.n(r),a=(n(12),n(4)),i=n(5),u=n(7),h=n(6),j=(n.p,n(13),n(14),n(15),n(0)),l=function(e){return Object(j.jsxs)("div",{className:"card-container",children:[Object(j.jsx)("img",{alt:"monster",src:"https://robohash.org/".concat(e.monster.id,"?set=set4")}),Object(j.jsxs)("h2",{children:[" ",e.monster.name," "]}),Object(j.jsx)("p",{children:e.monster.email})]})},d=function(e){return Object(j.jsx)("div",{className:"card-list",children:e.monsters.map((function(e){return Object(j.jsx)(l,{monster:e},e.id)}))})},m=(n(17),function(e){return Object(j.jsx)("input",{className:"search-box",type:"search",placeholder:"search monsters",onChange:e.onSearchChange})}),f=function(e){Object(u.a)(n,e);var t=Object(h.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value})},e.state={monsters:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({monsters:t})}))}},{key:"render",value:function(){var e=this.state,t=e.monsters,n=e.searchField,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)("h1",{children:"Beautiful kittens"}),Object(j.jsx)(m,{onSearchChange:this.onSearchChange}),Object(j.jsx)(d,{monsters:c})]})}}]),n}(c.Component),p=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,19)).then((function(t){var n=t.getCLS,c=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),c(e),s(e),r(e),o(e)}))};o.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(f,{})}),document.getElementById("root")),p()}],[[18,1,2]]]);
//# sourceMappingURL=main.d72b09f7.chunk.js.map