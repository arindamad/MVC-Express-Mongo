"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[555],{23024:function(e,s,r){r.r(s);var t=r(70885),a=r(72791),i=r(16871),n=r(43504),c=r(78983),l=r(24846),o=r(62412),d=r(63232),h=r(4030),m=r(80184);s.default=function(){var e=(0,i.s0)(),s=(0,a.useState)(0),r=(0,t.Z)(s,2),u=r[0],x=r[1],p=(0,a.useState)(!1),j=(0,t.Z)(p,2),g=j[0],f=j[1],b=(0,a.useRef)();localStorage.getItem("token")&&e("/dashboard");c.oo,c.S3,c.Pv;return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsx)(c.KF,{ref:b,push:u,placement:"top-end"}),(0,m.jsx)("div",{className:"bg-light min-vh-100 d-flex flex-row align-items-center",children:(0,m.jsx)(c.KB,{children:(0,m.jsx)(c.rb,{className:"justify-content-center",children:(0,m.jsx)(c.b7,{md:8,children:(0,m.jsxs)(c.dL,{children:[(0,m.jsx)(c.xH,{className:"p-4",children:(0,m.jsxs)(c.sl,{children:[(0,m.jsxs)(c.lx,{onSubmit:function(s){s.preventDefault();var r=(0,t.Z)(s.target,2),a=r[0],i=r[1],n={user:a.value,password:i.value};f(!0),fetch("http://13.233.39.128:5000/api/admin/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(n)}).then((function(e){return e.json()})).then((function(s){localStorage.setItem("token","dXNlckBleGFtcGxlLmNvbTpzZWNyZXQ="),console.log(s),localStorage.setItem("user",JSON.stringify(s.data)),e("/dashboard"),window.location.reload()})).catch((function(e){console.error(e),x(1),f(!1)}))},children:[(0,m.jsx)("h1",{children:"Login"}),(0,m.jsx)("p",{className:"text-medium-emphasis",children:"Sign In to your account"}),(0,m.jsxs)(c.YR,{className:"mb-3",children:[(0,m.jsx)(c.wV,{children:(0,m.jsx)(l.Z,{icon:o.E})}),(0,m.jsx)(c.jO,{placeholder:"Username",autoComplete:"false"})]}),(0,m.jsxs)(c.YR,{className:"mb-4",children:[(0,m.jsx)(c.wV,{children:(0,m.jsx)(l.Z,{icon:d.U})}),(0,m.jsx)(c.jO,{type:"password",placeholder:"Password",autoComplete:"false"})]}),(0,m.jsxs)(c.rb,{children:[(0,m.jsx)(c.b7,{xs:6,children:(0,m.jsx)(c.u5,{color:"primary",className:"px-4",type:"submit",children:"Login"})}),(0,m.jsx)(c.b7,{xs:6,className:"text-right",children:(0,m.jsx)(c.u5,{color:"link",className:"px-0",children:"Forgot password?"})})]})]}),g&&(0,m.jsx)(h.aN,{size:"lg",background:!0})]})}),(0,m.jsx)(c.xH,{className:"text-white bg-primary py-5",style:{width:"44%"},children:(0,m.jsx)(c.sl,{className:"text-center",children:(0,m.jsxs)("div",{children:[(0,m.jsx)("h2",{children:"Sign up"}),(0,m.jsx)("p",{children:"Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}),(0,m.jsx)(n.rU,{to:"/register",children:(0,m.jsx)(c.u5,{color:"primary",className:"mt-3",active:!0,tabIndex:-1,children:"Register Now!"})})]})})})]})})})})})]})}},63232:function(e,s,r){r.d(s,{U:function(){return t}});var t=["512 512","<path fill='var(--ci-primary-color, currentColor)' d='M384,200V144a128,128,0,0,0-256,0v56H88V328c0,92.635,75.364,168,168,168s168-75.365,168-168V200ZM160,144a96,96,0,0,1,192,0v56H160ZM392,328c0,74.99-61.01,136-136,136s-136-61.01-136-136V232H392Z' class='ci-primary'/>"]}}]);
//# sourceMappingURL=555.d44fc1f0.chunk.js.map