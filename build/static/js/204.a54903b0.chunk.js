"use strict";(self.webpackChunk_transcon_admin_react=self.webpackChunk_transcon_admin_react||[]).push([[204],{54204:function(e,t,n){n.r(t);var a=n(29439),r=n(78983),o=n(72791),s=n(57689),i=n(9085),c=n(80184);t.default=function(){var e=(0,o.useState)(!1),t=(0,a.Z)(e,2),n=t[0],l=t[1],d=(0,o.useState)([]),u=(0,a.Z)(d,2),m=u[0],h=u[1],f=(0,s.s0)(),p=(0,o.useState)({}),g=(0,a.Z)(p,2),x=g[0],j=g[1];return(0,o.useEffect)((function(){fetch("https://admin.transconsolution.net/api/category/list",{method:"POST",redirect:"follow"}).then((function(e){return e.json()})).then((function(e){console.log(e.data),h(e.data)})).catch((function(e){return console.log("error",e)}))}),[]),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(i.Ix,{}),(0,c.jsx)("h1",{className:"headingType1 text-center mb-4",children:"Add New Category"}),(0,c.jsx)(r.xH,{children:(0,c.jsx)(r.sl,{className:"p-5",children:(0,c.jsx)(r.rb,{className:"justify-content-center",children:(0,c.jsx)(r.b7,{lg:12,children:(0,c.jsxs)(r.lx,{className:"row g-3 needs-validation",noValidate:!0,validated:n,onSubmit:function(e){var t=e.currentTarget;e.preventDefault(),!1===t.checkValidity()&&e.stopPropagation(),l(!0);var n=(0,a.Z)(e.target,3),r=n[0],o=n[1],s=(n[2],{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:r.value,parent:o.value||null,image:x._id||null})});fetch("https://admin.transconsolution.net/api/category/create",s).then((function(e){return e.json()})).then((function(e){200==e.status?(i.Am.success(e.message),setTimeout((function(){f("/category")}),5e3)):i.Am.error(e.message)})).catch((function(e){return console.log("error",e)}))},children:[(0,c.jsx)(r.b7,{md:4,children:(0,c.jsx)(r.jO,{type:"text",defaultValue:"",feedbackInvalid:"Please enter a Brand Name.",id:"validationCustom01",label:"Category name",name:"name",required:!0})}),(0,c.jsx)(r.b7,{md:4,children:(0,c.jsxs)(r.LX,{type:"text",defaultValue:"",feedbackInvalid:"Please Select Status.",id:"validationCustom02",label:"Parent",name:"parent",children:[(0,c.jsx)("option",{value:"",children:"Select Category"}),m.map((function(e,t){return(0,c.jsx)("option",{value:e._id,children:e.name},t)}))]})}),(0,c.jsx)(r.b7,{md:4,children:(0,c.jsx)(r.jO,{type:"file",name:"uploadImage",label:"Upload Image",onChange:function(e){return function(e){var t=new FormData;t.append("image",e.files[0],e.files[0].name),t.append("type","image"),fetch("https://admin.transconsolution.net/api/images/add",{method:"POST",body:t,redirect:"follow"}).then((function(e){return e.json()})).then((function(e){console.log(e),j(e.data)})).catch((function(e){return console.log("error",e)}))}(e.target)}})}),(0,c.jsx)(r.b7,{md:6}),(0,c.jsx)(r.b7,{xs:12,className:"text-center",children:(0,c.jsx)(r.u5,{color:"primary",type:"submit",className:"py-2 px-5",children:"Submit form"})})]})})})})})]})}}}]);
//# sourceMappingURL=204.a54903b0.chunk.js.map