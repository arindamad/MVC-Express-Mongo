"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[280],{93280:function(r,i,c){c.r(i);var e=c(29439),t=c(17256),n=c(98240),s=c(24846),l=c(78983),o=c(72791),a=c(11087),d=(c(40453),c(9085)),h=c(80184);i.default=function(){var r=(0,o.useState)([]),i=(0,e.Z)(r,2),c=i[0],u=i[1],m=(0,o.useState)({}),p=(0,e.Z)(m,2),x=p[0],j=p[1];(0,o.useEffect)((function(){fetch("http://localhost:5000/api/product/list",{method:"POST",redirect:"follow"}).then((function(r){return r.json()})).then((function(r){console.log(r.data),u(r.data)})).catch((function(r){return console.log("error",r)}))}),[x]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"d-flex justify-content-between  align-items-center  mb-4",children:[(0,h.jsx)("h1",{className:"headingType1",children:"Product Listing"}),(0,h.jsx)(a.rU,{to:"/products/add",className:"btn btn-primary",children:"Add"})]}),(0,h.jsx)(l.xH,{children:(0,h.jsx)(l.sl,{children:(0,h.jsxs)(l.Sx,{children:[(0,h.jsx)(l.V,{children:(0,h.jsxs)(l.T6,{children:[(0,h.jsx)(l.is,{width:60,children:"Image"}),(0,h.jsx)(l.is,{width:100,children:"Product Id"}),(0,h.jsx)(l.is,{width:160,children:"Product Name"}),(0,h.jsx)(l.is,{width:120,children:"Sku"}),(0,h.jsx)(l.is,{children:"Short Description"}),(0,h.jsx)(l.is,{width:150,children:"Status"}),(0,h.jsx)(l.is,{width:100,children:"Action"})]})}),(0,h.jsx)(l.NR,{children:c.map((function(r,i){return(0,h.jsxs)(l.T6,{children:[(0,h.jsx)(l.NN,{children:(0,h.jsx)("img",{src:"http://localhost:5000/"+r.photo.image,width:100,style:{display:"block"}})}),(0,h.jsx)(l.NN,{children:r.product_id}),(0,h.jsx)(l.NN,{children:r.product_name}),(0,h.jsx)(l.NN,{children:r.sku}),(0,h.jsx)(l.NN,{children:r.short_description}),(0,h.jsx)(l.NN,{children:0==r.status?(0,h.jsx)(l.u5,{color:"warning",children:"Inactive"}):(0,h.jsx)(l.u5,{color:"success",children:"Active"})}),(0,h.jsx)(l.NN,{children:(0,h.jsxs)("ul",{className:"actionBtnS",children:[(0,h.jsx)("li",{children:(0,h.jsx)(s.Z,{onClick:function(){return function(r){var i={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({_id:r})};confirm("Are you sure you want to delete this?")&&fetch("http://localhost:5000/api/brand/delete",i).then((function(r){return r.json()})).then((function(i){200==i.status?(d.Am.success(i.message),j({_id:r})):d.Am.error(i.message)})).catch((function(r){return console.log("error",r)}))}(r._id)},icon:t.N,customClassName:"nav-icon"})}),(0,h.jsx)("li",{children:(0,h.jsx)(a.rU,{to:"/products/"+r._id,children:(0,h.jsx)(s.Z,{icon:n.l,customClassName:"nav-icon"})})})]})})]},i)}))})]})})})]})}},98240:function(r,i,c){c.d(i,{l:function(){return e}});var e=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M29.663,482.25l.087.087a24.847,24.847,0,0,0,17.612,7.342,25.178,25.178,0,0,0,8.1-1.345l142.006-48.172,272.5-272.5A88.832,88.832,0,0,0,344.334,42.039l-272.5,272.5L23.666,456.541A24.844,24.844,0,0,0,29.663,482.25Zm337.3-417.584a56.832,56.832,0,0,1,80.371,80.373L411.5,180.873,331.127,100.5ZM99.744,331.884,308.5,123.127,388.873,203.5,180.116,412.256,58.482,453.518Z' class='ci-primary'/>"]},17256:function(r,i,c){c.d(i,{N:function(){return e}});var e=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z' class='ci-primary'/><rect width='32' height='200' x='168' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='240' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='312' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=280.2d072dfa.chunk.js.map