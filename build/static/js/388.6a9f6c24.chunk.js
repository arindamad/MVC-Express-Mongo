"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[388],{2388:function(e,l,n){n.r(l);var s=n(70885),a=n(72791),r=n(78983),i=(n(354),n(16871)),c=n(80184);l.default=function(){var e=(0,i.s0)(),l=(0,a.useState)([]),n=(0,s.Z)(l,2),o=(n[0],n[1],(0,a.useState)({})),t=(0,s.Z)(o,2),d=t[0],h=t[1],j=function(e){var l={},n=!1;return e.ownerPhoneNo||(l.ownerPhoneNo="Please enter a owner mobile no.",n=!0),e.password||(l.password="Please enter password.",n=!0),e.clinic_name||(l.clinic_name="Please enter clinic name.",n=!0),e.registrationNo||(l.registrationNo="Please enter registration no.",n=!0),e.clinicPhoneNo||(l.clinicPhoneNo="Please enter clinic phone no.",n=!0),e.first_name||(l.first_name="Please enter owner first name.",n=!0),e.last_name||(l.last_name="Please enter owner last name.",n=!0),h(l),console.log(e,l),n};return(0,a.useEffect)((function(){}),[]),(0,c.jsxs)("div",{className:"addFormGlobal",children:[(0,c.jsx)("h2",{children:"Add Clinic"}),(0,c.jsx)(r.lx,{onSubmit:function(l){l.preventDefault(),console.log(l);var n=(0,s.Z)(l.target,11),a=n[0],r=n[1],i=n[2],c=n[3],o=n[4],t=n[5],d=n[6],h=n[7],m=n[8],x=n[9],u=n[10],g={clinic_name:a.value,registration_no:r.value,clinic_phone:i.value,clinic_email:c.value,lat:o.value.split(",")[0],long:o.value.split(",")[1],address:t.value,city:"",state:"",zip:"",country:"",est_date:d.value,first_name:h.value,last_name:m.value,mobile:x.value,password:u.value};console.log(j(g)),j(g)||fetch("http://13.233.39.128:5000/api/clinic/create",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(g)}).then((function(e){return e.json()})).then((function(l){console.log("Success:",l),200==l.status&&e("/clinic")})).catch((function(e){console.error("Error:",e)}))},children:(0,c.jsxs)(r.rb,{children:[(0,c.jsxs)(r.b7,{lg:"6",children:[(0,c.jsx)("label",{children:"Clinic Name"}),(0,c.jsx)(r.jO,{placeholder:"",name:"clinic_name"}),(0,c.jsx)("div",{className:"errorMsg",children:d.clinic_name})]}),(0,c.jsxs)(r.b7,{lg:"6",children:[(0,c.jsx)("label",{children:"Registration No"}),(0,c.jsx)(r.jO,{placeholder:"",name:"registrationNo"}),(0,c.jsx)("div",{className:"errorMsg",children:d.registrationNo})]}),(0,c.jsxs)(r.b7,{lg:"6",children:[(0,c.jsx)("label",{children:"Clinic Phone no"}),(0,c.jsx)(r.jO,{placeholder:"",name:"clinicPhoneNo"}),(0,c.jsx)("div",{className:"errorMsg",children:d.clinicPhoneNo})]}),(0,c.jsxs)(r.b7,{lg:"6",children:[(0,c.jsx)("label",{children:"Clinic Email"}),(0,c.jsx)(r.jO,{placeholder:"",name:"clinicEmail"}),(0,c.jsx)("div",{className:"errorMsg",children:d.clinicEmail})]}),(0,c.jsxs)(r.b7,{lg:"6",children:[(0,c.jsx)("label",{children:"Clinic Lat long"}),(0,c.jsx)(r.jO,{placeholder:"",name:"clinicLatLong"}),(0,c.jsx)("div",{className:"errorMsg",children:d.clinicLatLong})]}),(0,c.jsxs)(r.b7,{lg:"6",children:[(0,c.jsx)("label",{children:"Clinic Address"}),(0,c.jsx)(r.jO,{placeholder:"",name:"clinicAddress"}),(0,c.jsx)("div",{className:"errorMsg",children:d.clinicAddress})]}),(0,c.jsxs)(r.b7,{lg:"4",children:[(0,c.jsx)("label",{children:"Establishment Date"}),(0,c.jsx)(r.jO,{placeholder:"",type:"date",name:"establishmentDate"}),(0,c.jsx)("div",{className:"errorMsg",children:d.establishmentDate})]}),(0,c.jsxs)(r.b7,{lg:"4",children:[(0,c.jsx)("label",{children:"Owner First Name"}),(0,c.jsx)(r.jO,{placeholder:"",name:"first_name"}),(0,c.jsx)("div",{className:"errorMsg",children:d.first_name})]}),(0,c.jsxs)(r.b7,{lg:"4",children:[(0,c.jsx)("label",{children:"Owner Last Name"}),(0,c.jsx)(r.jO,{placeholder:"",name:"last_name"}),(0,c.jsx)("div",{className:"errorMsg",children:d.last_name})]}),(0,c.jsxs)(r.b7,{lg:"6",children:[(0,c.jsx)("label",{children:"Owner Phone no"}),(0,c.jsx)(r.jO,{placeholder:"",name:"ownerPhoneNo"}),(0,c.jsx)("div",{className:"errorMsg",children:d.ownerPhoneNo})]}),(0,c.jsxs)(r.b7,{lg:"6",children:[(0,c.jsx)("label",{children:"Set a Password"}),(0,c.jsx)(r.jO,{placeholder:"",name:"password"}),(0,c.jsx)("div",{className:"errorMsg",children:d.password})]}),(0,c.jsx)(r.b7,{lg:"12",className:"text-center",children:(0,c.jsx)(r.u5,{type:"submit",size:"lg",children:"Add Clinic"})})]})})]})}},354:function(){}}]);
//# sourceMappingURL=388.6a9f6c24.chunk.js.map