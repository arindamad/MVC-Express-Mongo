"use strict";(self.webpackChunk_transcon_admin_react=self.webpackChunk_transcon_admin_react||[]).push([[161],{11161:function(e,n,t){t.r(n);var a=t(93433),r=t(1413),s=t(29439),l=t(17256),c=t(24846),i=t(78983),o=t(72791),u=t(57689),m=t(9085),d=(t(75463),t(80184));n.default=function(){var e=(0,o.useState)([]),n=(0,s.Z)(e,2),t=n[0],h=n[1],p=(0,o.useState)([]),x=(0,s.Z)(p,2),j=x[0],f=x[1],b=(0,o.useState)({}),v=(0,s.Z)(b,2),g=v[0],N=v[1],_=(0,o.useState)({}),S=(0,s.Z)(_,2),Z=S[0],C=S[1],k=(0,o.useState)(1),M=(0,s.Z)(k,2),y=M[0],A=M[1],I=(0,o.useState)(""),O=(0,s.Z)(I,2),T=O[0],P=O[1],L=(0,u.s0)();(0,o.useEffect)((function(){fetch("https://admin.transconsolution.net/api/pages/list",{method:"POST",redirect:"follow"}).then((function(e){return e.json()})).then((function(e){h(e.data)})).catch((function(e){return console.log("error",e)}))}),[]);var w=function(e,n){var t=(0,r.Z)({},g);t[n]=e.target.value,N(t)};return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(m.Ix,{}),(0,d.jsx)("div",{className:"d-flex justify-content-start  align-items-center  mb-4",children:(0,d.jsx)("h1",{className:"headingType1",children:"Add Menu"})}),(0,d.jsx)(i.xH,{children:(0,d.jsx)(i.sl,{className:"p-5",children:(0,d.jsxs)(i.rb,{children:[(0,d.jsxs)(i.b7,{lg:12,className:"mb-4",children:[(0,d.jsx)(i.jO,{label:"Enter Menu Name",placeholder:"Enter Menu Name",onChange:function(e){P(e.target.value)}}),(0,d.jsx)("div",{className:"error"})]}),(0,d.jsxs)(i.b7,{lg:5,children:[(0,d.jsxs)(i.n2,{variant:"tabs",role:"tablist",children:[(0,d.jsx)(i.U6,{role:"presentation",children:(0,d.jsx)(i.AQ,{active:1===y,component:"button",role:"tab","aria-controls":"home-tab-pane","aria-selected":1===y,onClick:function(){return A(1)},children:"Pages"})}),(0,d.jsx)(i.U6,{role:"presentation",children:(0,d.jsx)(i.AQ,{active:2===y,component:"button",role:"tab","aria-controls":"profile-tab-pane","aria-selected":2===y,onClick:function(){return A(2)},children:"Custom Link"})})]}),(0,d.jsxs)(i.gr,{children:[(0,d.jsx)(i.IA,{role:"tabpanel","aria-labelledby":"home-tab-pane",visible:1===y,children:(0,d.jsxs)(i.lx,{onSubmit:function(e){e.preventDefault();var n=!1,r={},l=(0,s.Z)(e.target,3),c=l[0],i=(l[1],l[2]);c.value||(r.page="Please Select page name.",n=!0),C(r);var o=t[parseInt(c.value)],u={name:o.page_name,slug:o.page_slug,target:i.value||""};if(n)return m.Am.error("Please add require fields. "),!1;g.parent?f((function(e){var n=parseInt(g.parent),t=e[n].items;return e[n].items=t?[].concat((0,a.Z)(t),[u]):[u],e})):f((function(e){return[].concat((0,a.Z)(e),[u])})),e.target.reset()},className:"addToMenuBox",children:[(0,d.jsx)(i.LX,{className:"mb-4",label:"Select a Page",name:"page",children:t.map((function(e,n){return(0,d.jsx)("option",{value:n,children:e.page_name},n)}))}),(0,d.jsxs)(i.LX,{className:"mb-4",label:"Select Parent Menu",onChange:function(e){return w(e,"parent")},children:[(0,d.jsx)("option",{}),j.map((function(e,n){return(0,d.jsx)("option",{value:n,children:e.name},n)}))]}),(0,d.jsxs)(i.LX,{className:"mb-4",label:"Select Target",name:"target",children:[(0,d.jsx)("option",{value:""}),(0,d.jsx)("option",{value:"_blank",children:"Open In new tab"})]}),(0,d.jsx)(i.u5,{color:"info",type:"submit",children:"Add to Menu"})]})}),(0,d.jsx)(i.IA,{role:"tabpanel","aria-labelledby":"profile-tab-pane",visible:2===y,children:(0,d.jsxs)(i.lx,{onSubmit:function(e){e.preventDefault();var n=(0,s.Z)(e.target,4),t=n[0],r=n[1],l=n[2],c=n[3],i=!1,o={},u={name:t.value,slug:r.value,target:l.value||""};r.value||(o.custom_url="Url not entered.",i=!0),t.value||(o.custom_menuName="Enter Custom menu name.",i=!0),C(o),i||(c.value?(console.log(c.value),f((function(e){var n=parseInt(g.parent),t=e[n].items;return console.log(e,t),e[n].items=t?[].concat((0,a.Z)(t),[u]):[u],e}))):f((function(e){return[].concat((0,a.Z)(e),[u])})),console.log(u),e.target.reset())},className:"addToMenuBox",children:[(0,d.jsx)(i.jO,{className:"mb-4",label:"Menu Name",name:"custom_menuName"}),(0,d.jsx)("div",{className:"error",children:Z.custom_menuName}),(0,d.jsx)(i.jO,{type:"text",className:"mb-4",label:"Link",name:"custom_url"}),(0,d.jsx)("div",{className:"error",children:Z.custom_url}),(0,d.jsxs)(i.LX,{className:"mb-4",label:"Select Target",name:"custom_target",children:[(0,d.jsx)("option",{value:""}),(0,d.jsx)("option",{value:"_blank",children:"Open In new tab"})]}),(0,d.jsxs)(i.LX,{className:"mb-4",label:"Select Parent Menu",name:"parent",onChange:function(e){return w(e,"parent")},children:[(0,d.jsx)("option",{}),j.map((function(e,n){return(0,d.jsx)("option",{value:n,children:e.name},n)}))]}),(0,d.jsx)(i.u5,{color:"info",type:"submit",children:"Add to Menu"})]})})]})]}),(0,d.jsx)(i.b7,{lg:7,children:(0,d.jsxs)("div",{className:"menu_right_form",children:[(0,d.jsx)("h2",{children:"Menu Tree"}),(0,d.jsx)("div",{className:"menuListWrap",children:(0,d.jsx)("ul",{children:j.map((function(e,n){return(0,d.jsxs)("li",{children:[(0,d.jsxs)("div",{className:"menuOrderingEach",children:[e.name,(0,d.jsx)("div",{className:"trashIcon",onClick:function(){return function(e){f((function(n){return n.splice(e,1),(0,a.Z)(n)}))}(n)},children:(0,d.jsx)(c.Z,{icon:l.N})})]}),e.items&&(0,d.jsx)("ul",{children:null===e||void 0===e?void 0:e.items.map((function(e,t){return(0,d.jsx)("li",{children:(0,d.jsxs)("div",{className:"menuOrderingEach",children:[e.name,(0,d.jsx)("div",{className:"trashIcon",onClick:function(){return function(e,n){f((function(t){return t[e].items.splice(n,1),(0,a.Z)(t)}))}(n,t)},children:(0,d.jsx)(c.Z,{icon:l.N})})]})},t)}))})]},n)}))})})]})}),(0,d.jsx)(i.b7,{lg:12,className:"text-end mt-4",children:(0,d.jsx)(i.u5,{color:"primary",size:"lg",onClick:function(){T||m.Am.error("Please enter menu name.");var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({menu_name:T,menu_items:j}),redirect:"follow"};fetch("https://admin.transconsolution.net/api/menu/create",e).then((function(e){return e.json()})).then((function(e){console.log(e),200==e.status&&(m.Am.success("Menu added"),setTimeout((function(){L("/menu")}),300))})).catch((function(e){return console.log("error",e)}))},children:"Create"})})]})})})]})}},75463:function(){}}]);
//# sourceMappingURL=161.da955396.chunk.js.map