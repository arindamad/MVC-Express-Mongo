"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[514],{66514:function(e,n,s){s.r(n);var i=s(29439),r=s(78983),c=s(72791),t=s(9085),l=(s(40453),s(80184));n.default=function(){var e=(0,c.useState)([]),n=(0,i.Z)(e,2),s=n[0],h=n[1];return(0,c.useEffect)((function(){fetch("http://localhost:5000/api/enquire/list",{method:"POST",redirect:"follow"}).then((function(e){return e.json()})).then((function(e){h(e.data)})).catch((function(e){return console.log("error",e)}))}),[]),(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(t.Ix,{}),(0,l.jsxs)(r.rb,{className:"justify-content-center",children:[(0,l.jsx)(r.b7,{lg:!0,children:(0,l.jsx)("h1",{className:"headingType1 mb-4",children:"Enquires"})}),(0,l.jsx)(r.b7,{lg:"auto"})]}),(0,l.jsx)(r.xH,{children:(0,l.jsx)(r.sl,{children:(0,l.jsx)(r.rb,{className:"justify-content-center",children:(0,l.jsx)(r.b7,{lg:12,children:(0,l.jsxs)(r.Sx,{bordered:!0,striped:!0,children:[(0,l.jsx)(r.V,{children:(0,l.jsxs)(r.T6,{children:[(0,l.jsx)(r.is,{children:"Enquire Id"}),(0,l.jsx)(r.is,{width:150,children:"Name"}),(0,l.jsx)(r.is,{children:"Phone"}),(0,l.jsx)(r.is,{children:"Email"}),(0,l.jsx)(r.is,{width:100,children:"Subject"}),(0,l.jsx)(r.is,{width:200,children:"Message"})]})}),(0,l.jsx)(r.NR,{children:s.map((function(e,n){return(0,l.jsxs)(r.T6,{children:[(0,l.jsx)(r.NN,{children:e.enquire_id}),(0,l.jsx)(r.NN,{children:e.name}),(0,l.jsx)(r.NN,{children:e.email}),(0,l.jsx)(r.NN,{children:e.phone}),(0,l.jsx)(r.NN,{children:e.subject}),(0,l.jsx)(r.NN,{children:e.message})]},n)}))})]})})})})})]})}}}]);
//# sourceMappingURL=514.0b09a4fd.chunk.js.map