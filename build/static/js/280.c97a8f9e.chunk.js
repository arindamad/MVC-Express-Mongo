"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[280],{93280:function(e,n,t){t.r(n);var s=t(29439),i=t(17256),c=t(98240),r=t(24846),d=t(78983),o=t(72791),l=t(11087),a=(t(40453),t(9085)),h=t(80184);n.default=function(){var e=(0,o.useState)([]),n=(0,s.Z)(e,2),t=n[0],u=n[1],j=(0,o.useState)({}),x=(0,s.Z)(j,2),m=x[0],f=x[1];(0,o.useEffect)((function(){fetch("http://167.172.67.153:5000/api/product/list",{method:"POST",redirect:"follow"}).then((function(e){return e.json()})).then((function(e){console.log(e.data),u(e.data)})).catch((function(e){return console.log("error",e)}))}),[m]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"d-flex justify-content-between  align-items-center  mb-4",children:[(0,h.jsx)("h1",{className:"headingType1",children:"Product Listing"}),(0,h.jsx)(l.rU,{to:"/products/add",className:"btn btn-primary",children:"Add"})]}),(0,h.jsx)(d.xH,{children:(0,h.jsx)(d.sl,{children:(0,h.jsxs)(d.Sx,{children:[(0,h.jsx)(d.V,{children:(0,h.jsxs)(d.T6,{children:[(0,h.jsx)(d.is,{width:60,children:"Image"}),(0,h.jsx)(d.is,{width:120,children:"Product Id"}),(0,h.jsx)(d.is,{width:220,children:"Product Name"}),(0,h.jsx)(d.is,{width:120,children:"Sku"}),(0,h.jsx)(d.is,{children:"Short Description"}),(0,h.jsx)(d.is,{width:150,children:"Status"}),(0,h.jsx)(d.is,{width:100,children:"Action"})]})}),(0,h.jsx)(d.NR,{children:t.map((function(e,n){return(0,h.jsxs)(d.T6,{children:[(0,h.jsx)(d.NN,{children:(0,h.jsx)("img",{src:"http://167.172.67.153:5000/"+e.photo.image,width:100,style:{display:"block"}})}),(0,h.jsx)(d.NN,{children:e.product_id}),(0,h.jsx)(d.NN,{children:e.product_name}),(0,h.jsx)(d.NN,{children:e.sku}),(0,h.jsx)(d.NN,{children:(t=e.short_description,s=20,t.length<=s?t:"".concat(t.slice(0,s-3),"..."))}),(0,h.jsx)(d.NN,{children:0==e.status?(0,h.jsx)(d.u5,{color:"warning",children:"Inactive"}):(0,h.jsx)(d.u5,{color:"success",children:"Active"})}),(0,h.jsx)(d.NN,{children:(0,h.jsxs)("ul",{className:"actionBtnS",children:[(0,h.jsx)("li",{children:(0,h.jsx)(r.Z,{onClick:function(){return function(e){var n={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({_id:e})};confirm("Are you sure you want to delete this?")&&fetch("http://167.172.67.153:5000/api/brand/delete",n).then((function(e){return e.json()})).then((function(n){200==n.status?(a.Am.success(n.message),f({_id:e})):a.Am.error(n.message)})).catch((function(e){return console.log("error",e)}))}(e._id)},icon:i.N,customClassName:"nav-icon"})}),(0,h.jsx)("li",{children:(0,h.jsx)(l.rU,{to:"/products/"+e._id,children:(0,h.jsx)(r.Z,{icon:c.l,customClassName:"nav-icon"})})})]})})]},n);var t,s}))})]})})})]})}}}]);
//# sourceMappingURL=280.c97a8f9e.chunk.js.map