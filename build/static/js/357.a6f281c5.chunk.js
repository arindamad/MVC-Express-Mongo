"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[357],{66357:function(r,e,n){n.r(e);var c=n(29439),i=n(17256),t=n(98240),s=n(24846),a=n(78983),l=n(72791),o=n(11087),d=n(9085),h=n(80184);e.default=function(){var r=(0,l.useState)([]),e=(0,c.Z)(r,2),n=e[0],u=e[1],m=(0,l.useState)({}),x=(0,c.Z)(m,2),f=x[0],j=x[1];(0,l.useEffect)((function(){fetch("http://localhost:5000/api/brand/list",{method:"POST",redirect:"follow"}).then((function(r){return r.json()})).then((function(r){console.log(r.data),u(r.data)})).catch((function(r){return console.log("error",r)}))}),[f]);return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsx)(d.Ix,{}),(0,h.jsxs)("div",{className:"d-flex justify-content-between  align-items-center  mb-4",children:[(0,h.jsx)("h1",{className:"headingType1",children:"Brand Listing"}),(0,h.jsx)(o.rU,{to:"/brands/add",className:"btn btn-primary",children:"Add"})]}),(0,h.jsx)(a.xH,{children:(0,h.jsx)(a.sl,{children:(0,h.jsxs)(a.Sx,{children:[(0,h.jsx)(a.V,{children:(0,h.jsxs)(a.T6,{children:[(0,h.jsx)(a.is,{children:"Brand Id"}),(0,h.jsx)(a.is,{children:"Brand Name"}),(0,h.jsx)(a.is,{children:"Brand Category"}),(0,h.jsx)(a.is,{children:"Status"}),(0,h.jsx)(a.is,{children:"Action"})]})}),(0,h.jsx)(a.NR,{children:n.map((function(r,e){return(0,h.jsxs)(a.T6,{children:[(0,h.jsx)(a.NN,{width:120,children:r._id}),(0,h.jsx)(a.NN,{children:r.brand_name}),(0,h.jsx)(a.NN,{children:r.brand_category.brand_category_name}),(0,h.jsx)(a.NN,{children:0==r.status?(0,h.jsx)(a.u5,{color:"warning",children:"Inactive"}):(0,h.jsx)(a.u5,{color:"success",children:"Active"})}),(0,h.jsx)(a.NN,{children:(0,h.jsxs)("ul",{className:"actionBtnS",children:[(0,h.jsx)("li",{children:(0,h.jsx)(s.Z,{onClick:function(){return function(r){var e={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({_id:r})};confirm("Are you sure you want to delete this?")&&fetch("http://localhost:5000/api/brand/delete",e).then((function(r){return r.json()})).then((function(e){200==e.status?(d.Am.success(e.message),j({_id:r})):d.Am.error(e.message)})).catch((function(r){return console.log("error",r)}))}(r._id)},icon:i.N,customClassName:"nav-icon"})}),(0,h.jsx)("li",{children:(0,h.jsx)(o.rU,{to:"/products/"+r._id,children:(0,h.jsx)(s.Z,{icon:t.l,customClassName:"nav-icon"})})})]})})]},e)}))})]})})})]})}},98240:function(r,e,n){n.d(e,{l:function(){return c}});var c=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M29.663,482.25l.087.087a24.847,24.847,0,0,0,17.612,7.342,25.178,25.178,0,0,0,8.1-1.345l142.006-48.172,272.5-272.5A88.832,88.832,0,0,0,344.334,42.039l-272.5,272.5L23.666,456.541A24.844,24.844,0,0,0,29.663,482.25Zm337.3-417.584a56.832,56.832,0,0,1,80.371,80.373L411.5,180.873,331.127,100.5ZM99.744,331.884,308.5,123.127,388.873,203.5,180.116,412.256,58.482,453.518Z' class='ci-primary'/>"]},17256:function(r,e,n){n.d(e,{N:function(){return c}});var c=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z' class='ci-primary'/><rect width='32' height='200' x='168' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='240' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><rect width='32' height='200' x='312' y='216' fill='var(--ci-primary-color, currentColor)' class='ci-primary'/><path fill='var(--ci-primary-color, currentColor)' d='M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=357.a6f281c5.chunk.js.map