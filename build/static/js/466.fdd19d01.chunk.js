"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[466],{8466:function(e,a,t){t.r(a);var n=t(42982),r=t(70885),l=t(72791),s=t(78983),i=(t(84777),t(16871)),c=t(80184);a.default=function(){var e=(0,i.s0)(),a=(0,l.useState)([]),t=(0,r.Z)(a,2),o=t[0],d=t[1],u=(0,l.useState)([]),h=(0,r.Z)(u,2),m=h[0],j=h[1],f=(0,l.useState)([]),p=(0,r.Z)(f,2),b=p[0],v=(p[1],(0,l.useState)([])),x=(0,r.Z)(v,2),S=x[0],g=x[1],y=(0,l.useState)(""),_=(0,r.Z)(y,2),N=_[0],A=_[1],T=(0,l.useState)({}),Z=(0,r.Z)(T,2),D=Z[0],E=Z[1],O=(0,l.useState)(!0),M=(0,r.Z)(O,2),w=M[0],C=M[1];return(0,l.useEffect)((function(){for(var e=[],a=0;a<48;a++){var t=parseInt(30*a/60,10).toString().padStart(2,"0")+":"+(30*a%60).toString().padEnd(2,"0");e.push({label:t,value:a+1})}g(e),console.log(e),fetch("http://13.233.39.128:5000/api/doctor/list",{method:"POST",headers:{"Content-Type":"application/json"}}).then((function(e){return e.json()})).then((function(e){d(e.data)}))}),[]),(0,c.jsxs)("div",{className:"addFormGlobal",children:[(0,c.jsx)("h2",{children:"Add Slots"}),(0,c.jsx)(s.lx,{onSubmit:function(a){a.preventDefault(),console.log(a);var t=(0,r.Z)(a.target,5),n=t[0],l=t[1],s=t[2],i=t[3],c=t[4],o=JSON.parse(localStorage.getItem("user")),d={doctor:D._id,clinic:o._id,day_name:i.value,start:S[n.value-1].label,end:l.value,capacity:c.value,status:s.value};console.log(d),fetch("http://13.233.39.128:5000/api/slot/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(d)}).then((function(e){return e.json()})).then((function(a){console.log("Success:",a),a.error||e("/slots")})).catch((function(e){console.error("Error:",e)}))},children:(0,c.jsxs)(s.rb,{children:[(0,c.jsxs)(s.b7,{lg:"6",children:[!w&&(0,c.jsxs)("div",{className:"",children:[(0,c.jsx)("h4",{children:D.first_name+" "+D.last_name}),(0,c.jsxs)("p",{children:["Uid : ",D.uid]})]}),w&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("label",{children:"Search Doctor"}),(0,c.jsxs)("div",{className:"search_doctor_wrp",children:[(0,c.jsx)(s.jO,{placeholder:"",onKeyUp:function(e){var a=new RegExp("\\b"+e.target.value,"i"),t=o.filter((function(e){return(e.first_name+" "+e.last_name).match(a)}));C(!0),j(t)},defaultValue:""}),(0,c.jsx)("ul",{children:m.map((function(e,a){return(0,c.jsxs)("li",{onClick:function(a){return E(e),void C(!1)},children:[e.first_name," "," "," ",e.last_name]},a)}))})]})]}),(0,c.jsx)("div",{className:"errorMsg",children:b.clinicName})]}),(0,c.jsxs)(s.b7,{lg:"3",children:[(0,c.jsx)("label",{children:"Start Time"}),(0,c.jsx)(s.LX,{name:"start_time",options:["Select start time"].concat((0,n.Z)(S)),onChange:function(e){console.log(e.target.value),A(S[e.target.value].label)}}),(0,c.jsx)("div",{className:"errorMsg",children:b.registrationNo})]}),(0,c.jsxs)(s.b7,{lg:"3",children:[(0,c.jsx)("label",{children:"End Time"}),(0,c.jsx)(s.jO,{placeholder:"",name:"end_time",readOnly:!0,defaultValue:N}),(0,c.jsx)("div",{className:"errorMsg",children:b.clinicPhoneNo})]}),(0,c.jsxs)(s.b7,{lg:"6",children:[(0,c.jsx)("label",{children:"Status"}),(0,c.jsx)(s.LX,{name:"status",options:["Status ----",{label:"Active",value:1},{label:"Inactve",value:0}]}),(0,c.jsx)("div",{className:"errorMsg",children:b.last_name})]}),(0,c.jsxs)(s.b7,{lg:"6",children:[(0,c.jsx)("label",{children:"Days"}),(0,c.jsx)(s.LX,{name:"days",options:["Select days",{label:"Sunday",value:"SUNDAY"},{label:"Monday",value:"MONDAY"},{label:"Tuesday",value:"TUESDAY"},{label:"Wednesday",value:"WEDNESDAY"},{label:"Thursday",value:"THURSDAY"},{label:"Friday",value:"FRIDAY"},{label:"Saturday",value:"SATURDAY"}]}),(0,c.jsx)("div",{className:"errorMsg",children:b.ownerPhoneNo})]}),(0,c.jsxs)(s.b7,{lg:"3",children:[(0,c.jsx)("label",{children:"Capacity"}),(0,c.jsx)(s.jO,{placeholder:"",name:"capacity",type:"number"}),(0,c.jsx)("div",{className:"errorMsg",children:b.capacity})]}),(0,c.jsx)(s.b7,{lg:"12",className:"text-center",children:(0,c.jsx)(s.u5,{type:"submit",size:"lg",children:"Add Slots"})})]})})]})}},84777:function(){},42982:function(e,a,t){t.d(a,{Z:function(){return l}});var n=t(30907);var r=t(40181);function l(e){return function(e){if(Array.isArray(e))return(0,n.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||(0,r.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}}}]);
//# sourceMappingURL=466.fdd19d01.chunk.js.map