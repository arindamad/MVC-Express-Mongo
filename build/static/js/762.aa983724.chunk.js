"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[762],{93762:function(e,n,r){r.r(n),r.d(n,{default:function(){return o}});var t=r(29439),i=(r(24846),r(78983)),s=r(72791),c=r(11087),l=r(9085),a=r(80184),o=function(){var e=(0,s.useState)([]),n=(0,t.Z)(e,2),r=(n[0],n[1],(0,s.useState)({})),o=(0,t.Z)(r,2),d=(o[0],o[1],(0,s.useState)([])),u=(0,t.Z)(d,2),h=u[0],x=u[1];(0,s.useEffect)((function(){fetch("http://localhost:5000/api/images/list",{method:"POST",redirect:"follow"}).then((function(e){return e.json()})).then((function(e){console.log(e.data),x(e.data)})).catch((function(e){return console.log("error",e)}))}),[]);var f=(0,s.useState)(!1),j=(0,t.Z)(f,2),m=j[0],p=j[1];return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(l.Ix,{}),(0,a.jsxs)("div",{className:"d-flex justify-content-between  align-items-center  mb-4",children:[(0,a.jsx)("h1",{className:"headingType1",children:"Media"}),(0,a.jsx)(c.rU,{to:"/brands/add",className:"btn btn-primary",children:"Add"})]}),(0,a.jsx)(i.xH,{children:(0,a.jsx)(i.sl,{children:(0,a.jsx)(i.rb,{children:(0,a.jsx)(i.b7,{lg:!0,children:(0,a.jsx)(i.rb,{className:"sliderInfoWrapper",children:h.map((function(e,n){return(0,a.jsx)(i.b7,{lg:2,children:(0,a.jsx)("div",{className:"each_image_wrp",onClick:function(){return e._id,void p(!m)},children:(0,a.jsx)("img",{src:"http://localhost:5000/"+e.image,alt:e.alt_text,width:"100%"})})},n)}))})})})})}),(0,a.jsxs)(i.Tk,{size:"xl",visible:m,onClose:function(){return p(!1)},children:[(0,a.jsx)(i.p0,{onClose:function(){return p(!1)},children:(0,a.jsx)(i.fl,{children:"Modal title"})}),(0,a.jsx)(i.sD,{children:(0,a.jsx)("p",{children:"Woohoo, you're reading this text in a modal!"})}),(0,a.jsxs)(i.Ym,{children:[(0,a.jsx)(i.u5,{color:"secondary",onClick:function(){return p(!1)},children:"Close"}),(0,a.jsx)(i.u5,{color:"primary",children:"Save changes"})]})]})]})}}}]);
//# sourceMappingURL=762.aa983724.chunk.js.map