"use strict";(self.webpackChunk_transcon_admin_react=self.webpackChunk_transcon_admin_react||[]).push([[377],{89377:function(e,a,t){t.r(a);var n=t(74165),s=t(15861),i=t(93433),l=t(1413),c=t(29439),r=t(98030),o=t(2501),u=t(55068),d=t(24846),m=t(78983),x=t(72791),h=t(57689),p=t(9085),v=(t(15594),t(7692)),j=t(63524),f=t(39126),_=t(84373),g=t(80184);a.default=function(){(0,h.s0)();var e=(0,x.useState)(!1),a=(0,c.Z)(e,2),t=a[0],b=a[1],N=(0,x.useState)(!1),y=(0,c.Z)(N,2),C=y[0],S=y[1],Z=(0,x.useState)(0),P=(0,c.Z)(Z,2),O=P[0],V=P[1],T=(0,x.useState)(""),w=(0,c.Z)(T,2),I=w[0],F=w[1],A=(0,x.useState)([]),L=(0,c.Z)(A,2),B=(L[0],L[1],(0,x.useState)([])),D=(0,c.Z)(B,2),W=D[0],q=D[1],R=function(e){if(S(!1),W.length){var a=W.map((function(a){var t=(0,l.Z)({},a);return t.section_value=JSON.stringify(a.section_value),t.page_id=e._id,t})),t={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(a),redirect:"follow"};fetch("https://admin.transconsolution.net/api/cms/create-many",t).then((function(e){return e.json()})).then((function(e){S(!1),p.Am.success("Finally Updated all additional content.")})).catch((function(e){return console.log("error",e)})),console.log(a)}},E=function(e){F(e),V(2)},H=[{name:"Short Text",icon:(0,g.jsx)(j.UZn,{}),type:"text"},{name:"Long Text",icon:(0,g.jsx)(v.stW,{}),type:"textarea"},{name:"Image",icon:(0,g.jsx)(v.fco,{}),type:"img"},{name:"Link",icon:(0,g.jsx)(f.Gzp,{}),type:"url"}],M=function(e){return e+"_"+Math.floor(99999*Math.random())},U=function(e,a){var t=(0,i.Z)(W);t[e].section_value[a].moreField=!0,q(t)},J=(0,x.useState)(!1),z=(0,c.Z)(J,2),G=z[0],X=z[1],K=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(a,t,s,l){var c,r,o,u,d;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c=(0,i.Z)(W),"text"!==l){e.next=5;break}c[t].section_value[s].value=a.target.value,e.next=31;break;case 5:if("file"!==l){e.next=30;break}return S(!0),console.log(a.target.value),e.prev=8,(r=new FormData).append("image",a.target.files[0],a.target.files[0].name),r.append("type","image"),o={method:"POST",body:r,redirect:"follow"},e.next=15,fetch("https://admin.transconsolution.net/api/images/add",o);case 15:return u=e.sent,e.next=18,u.json();case 18:d=e.sent,c[t].section_value[s].value=d.data.image,c[t].section_value[s].file_type=d.data.type,S(!1),e.next=28;break;case 24:e.prev=24,e.t0=e.catch(8),S(!1),console.error("error",e.t0);case 28:e.next=31;break;case 30:"url_text"===l?c[t].section_value[s].url_text=a.target.value:"url"===l?c[t].section_value[s].value=a.target.value:alert("Please Enter a attr.");case 31:console.log(c),q(c);case 33:case"end":return e.stop()}}),e,null,[[8,24]])})));return function(a,t,n,s){return e.apply(this,arguments)}}(),Q=function(){var e=(0,s.Z)((0,n.Z)().mark((function e(a,t,s,l,c){var r,o,u,d,m;return(0,n.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=(0,i.Z)(W),"text"!==c){e.next=5;break}r[t].section_value[s][l].value=a.target.value,e.next=31;break;case 5:if("file"!==c){e.next=30;break}return S(!0),console.log(a.target.value),e.prev=8,(o=new FormData).append("image",a.target.files[0],a.target.files[0].name),o.append("type","image"),u={method:"POST",body:o,redirect:"follow"},e.next=15,fetch("https://admin.transconsolution.net/api/images/add",u);case 15:return d=e.sent,e.next=18,d.json();case 18:m=e.sent,r[t].section_value[s][l].value=m.data.image,r[t].section_value[s][l].file_type=m.data.type,S(!1),e.next=28;break;case 24:e.prev=24,e.t0=e.catch(8),S(!1),console.error("error",e.t0);case 28:e.next=31;break;case 30:"url_text"===c?r[t].section_value[s][l].url_text=a.target.value:"url"===c?r[t].section_value[s][l].value=a.target.value:alert("Please Enter a attr.");case 31:q(r);case 32:case"end":return e.stop()}}),e,null,[[8,24]])})));return function(a,t,n,s,i){return e.apply(this,arguments)}}();return(0,g.jsxs)(g.Fragment,{children:[(0,g.jsx)(p.Ix,{}),C&&(0,g.jsx)("div",{className:"loader-container",children:(0,g.jsx)("div",{className:"loader"})}),(0,g.jsx)("h1",{className:"headingType1 text-center mb-4",children:"Pages"}),(0,g.jsx)(m.lx,{className:"g-3 needs-validation",noValidate:!0,validated:t,onSubmit:function(e){e.preventDefault();var a=e.currentTarget,t=(0,c.Z)(e.target,5),n=t[0],s=t[1],i=t[2],l=t[3],r=t[4];if(!1===a.checkValidity())b(!0),e.stopPropagation();else{b(!1);var o={method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({page_name:n.value,page_description:s.value||"",meta_title:i.value||"",meta_description:l.value||"",status:r.value||0})};S(!0),fetch("https://admin.transconsolution.net/api/pages/create",o).then((function(e){return e.json()})).then((function(a){200==a.status?(p.Am.success(a.message),b(!1),e.target.reset(),R(a.data)):p.Am.error(a.message)})).catch((function(e){return console.log("error",e)}))}},children:(0,g.jsxs)(m.rb,{className:"g-5 justify-content-center",children:[(0,g.jsx)(m.b7,{lg:8,children:(0,g.jsx)(m.xH,{children:(0,g.jsxs)(m.sl,{className:"p-5",children:[(0,g.jsx)("div",{className:"mb-4",children:(0,g.jsx)(m.jO,{type:"text",defaultValue:"",feedbackInvalid:"Please enter a Brand Name.",id:"validationCustom1",label:"Page Name",name:"name",required:!0})}),(0,g.jsx)("div",{className:"mb-4",children:(0,g.jsx)(m.PB,{defaultValue:"",feedbackInvalid:"Please Select Status.",label:"Description",id:"validationCustom2",name:"description",rows:6})})]})})}),(0,g.jsx)(m.b7,{lg:4,children:(0,g.jsx)(m.xH,{children:(0,g.jsxs)(m.sl,{className:"p-5",children:[(0,g.jsx)("div",{className:"mb-4",children:(0,g.jsx)(m.jO,{type:"text",defaultValue:"",feedbackInvalid:"Please enter a Brand Name.",id:"validationCustom3",label:"Meta Title",name:"meta_title"})}),(0,g.jsx)("div",{className:"mb-4",children:(0,g.jsx)(m.PB,{defaultValue:"",feedbackInvalid:"Please Select Status.",label:"Meta Description",id:"validationCustom3",name:"meta_description"})}),(0,g.jsx)("div",{className:"mb-4",children:(0,g.jsxs)(m.LX,{type:"text",defaultValue:"",feedbackInvalid:"Please Select Status.",id:"validationCustom4",label:"Status",name:"status",required:!0,children:[(0,g.jsx)("option",{value:"1",children:"Active"}),(0,g.jsx)("option",{value:"0",children:"Inactive"})]})}),(0,g.jsx)("div",{className:"text-center mt-4",children:(0,g.jsx)(m.u5,{color:"primary",type:"submit",className:"py-2 px-5",children:"Add Page"})})]})})})]})}),(0,g.jsx)(m.xH,{className:"mt-4 ".concat(G?"i_am_a_dev":""),children:(0,g.jsxs)(m.sl,{className:"p-5",children:[(0,g.jsxs)(m.rb,{children:[(0,g.jsx)(m.b7,{lg:!0,children:(0,g.jsx)("h4",{className:"mb-4",children:"Sections"})}),(0,g.jsx)(m.b7,{lg:"auto",children:(0,g.jsx)(m.kV,{onChange:function(e){e.target.checked&&(confirm("Are you sure you want to activate Developer option? If you are not able to handele it can break your layout. ")?X(!0):(e.target.checked=!1,X(!1)))},label:"Developer Option",id:"formSwitchCheckDefault"})})]}),W.map((function(e,a){return(0,g.jsxs)("div",{className:"each_sections",children:[(0,g.jsxs)("div",{className:"each_section_header",children:[(0,g.jsx)(m.jO,{defaultValue:e.section_name,placeholder:"Section Title..."}),(0,g.jsx)("div",{className:"copySectionProp",title:"Click Here to Copy",children:e.section_prop})]}),(0,g.jsx)("div",{className:"each_section_body",children:e.section_value&&e.section_value.map((function(e,t){return(0,g.jsxs)("div",{children:[!Array.isArray(e)&&(0,g.jsxs)(g.Fragment,{children:[(0,g.jsxs)("div",{className:"each_single_items mb-3",children:["text"===e.type&&(0,g.jsx)(m.jO,{label:"Short Text..",className:"",defaultValue:e.value,onChange:function(e){return K(e,a,t,"text")}}),"img"===e.type&&(0,g.jsx)(m.jO,{label:"Upload Image..",type:"file",className:"",onChange:function(e){return K(e,a,t,"file")}}),"textarea"===e.type&&(0,g.jsx)(m.PB,{label:"Enter Long Text..",className:"",defaultValue:e.value,onChange:function(e){return K(e,a,t,"text")}}),"url"===e.type&&(0,g.jsxs)(m.rb,{children:[(0,g.jsx)(m.b7,{children:(0,g.jsx)(m.jO,{label:"Link Text",className:"",defaultValue:e.value,onChange:function(e){return K(e,a,t,"url_text")}})}),(0,g.jsx)(m.b7,{children:(0,g.jsx)(m.jO,{label:"Link Value",className:"",defaultValue:e.value,onChange:function(e){return K(e,a,t,"url")}})})]}),!e.moreField&&(0,g.jsx)("button",{className:"arPlusIcon",onClick:function(){return U(a,t)},children:(0,g.jsx)(d.Z,{icon:r.q})}),t>0&&(0,g.jsx)("button",{className:"arRemoveIcon",onClick:function(){return U(a,t)},children:(0,g.jsx)(d.Z,{icon:o.c})})]}),e.moreField&&(0,g.jsx)(m.rb,{className:"mt-4 mb-4",children:H.map((function(e,n){return(0,g.jsx)(m.b7,{lg:3,children:(0,g.jsxs)("div",{className:"each_section_Wrp",onClick:function(n){return function(e,a,t,n){var s=(0,i.Z)(W);s[t].section_value.push({type:e,id:a}),s[t].section_value[n].moreField=!1,q(s)}(e.type,M(e.type),a,t)},"data-id":M(e.type),children:[(0,g.jsx)("div",{className:"aicon",children:e.icon}),(0,g.jsx)("div",{className:"section_title",children:e.name})]})},n)}))})]}),Array.isArray(e)&&(0,g.jsxs)("div",{className:"each_repeater_wrapper",children:[e.map((function(n,s){return(0,g.jsxs)("div",{className:"each_repeater_item mb-3",children:["text"===n.type&&(0,g.jsx)(m.jO,{label:"Short Text..",className:"",defaultValue:e.value,onChange:function(e){return Q(e,a,t,s,"text")}}),"img"===n.type&&(0,g.jsx)(m.jO,{label:"Upload Image..",type:"file",className:"",defaultValue:e.value,onChange:function(e){return Q(e,a,t,s,"file")}}),"textarea"===n.type&&(0,g.jsx)(m.PB,{label:"Enter Long Text..",className:"",defaultValue:e.value,onChange:function(e){return Q(e,a,t,s,"text")}}),"url"===n.type&&(0,g.jsxs)(m.rb,{children:[(0,g.jsx)(m.b7,{children:(0,g.jsx)(m.jO,{label:"Link Text",className:"",defaultValue:e.value,onChange:function(e){return Q(e,a,t,s,"url_text")}})}),(0,g.jsx)(m.b7,{children:(0,g.jsx)(m.jO,{label:"Link Value",className:"",defaultValue:e.value,onChange:function(e){return Q(e,a,t,s,"url")}})})]}),n.moreField&&(0,g.jsx)(m.rb,{className:"mt-4 mb-4",children:H.map((function(e,n){return(0,g.jsx)(m.b7,{lg:3,children:(0,g.jsxs)("div",{className:"each_section_Wrp",onClick:function(){return function(e,a,t,n,s){var l=(0,i.Z)(W);l[t].section_value[n].push({type:e,id:a}),l[t].section_value[n][s].moreField=!1,q(l)}(e.type,M(e.type),a,t,s)},children:[(0,g.jsx)("div",{className:"aicon",children:e.icon}),(0,g.jsx)("div",{className:"section_title",children:e.name})]})},n)}))}),!n.moreField&&(0,g.jsx)("button",{className:"arPlusIcon",onClick:function(){return function(e,a,t){var n=(0,i.Z)(W);n[e].section_value[a][t].moreField=!0,q(n)}(a,t,s)},children:(0,g.jsx)(d.Z,{icon:r.q})}),s>0&&(0,g.jsx)("button",{className:"arRemoveIcon",onClick:function(){return repeatRemoveItem(a,t,k)},children:(0,g.jsx)(d.Z,{icon:o.c})})]},s)})),(0,g.jsx)("div",{className:"text-end",children:(0,g.jsxs)(m.u5,{color:"info",onClick:function(){return function(e,a){var t=(0,i.Z)(W),n=t[e].section_value[a];t[e].section_value.push(n),q(t)}(a,t)},children:[(0,g.jsx)(_.Odh,{})," Repeat"]})})]})]},t)}))})]},a)})),2==O&&"single"==I&&(0,g.jsx)("div",{className:"single_object_selected mb-5",children:(0,g.jsx)(m.rb,{children:H.map((function(e,a){return(0,g.jsx)(m.b7,{lg:3,children:(0,g.jsxs)("div",{className:"each_section_Wrp",onClick:function(a){return t=e.type,n=M(e.type),void q((function(e){return V(0),[].concat((0,i.Z)(e),[{section_prop:M("section"),section_name:"Section "+e.length,section_value:[{type:t,id:n}]}])}));var t,n},children:[(0,g.jsx)("div",{className:"aicon",children:e.icon}),(0,g.jsx)("div",{className:"section_title",children:e.name})]})},a)}))})}),2==O&&"repeater"==I&&(0,g.jsx)("div",{className:"repeater_object_selected mb-5",children:(0,g.jsx)(m.rb,{children:H.map((function(e,a){return(0,g.jsx)(m.b7,{lg:3,onClick:function(){return a=e.type,t=M(e.type),void q((function(e){return V(0),[].concat((0,i.Z)(e),[{section_prop:M("section"),section_name:"Section "+e.length,section_value:[[{type:a,id:t}]]}])}));var a,t},children:(0,g.jsxs)("div",{className:"each_section_Wrp",children:[(0,g.jsx)("div",{className:"aicon",children:e.icon}),(0,g.jsx)("div",{className:"section_title",children:e.name})]})},a)}))})}),1==O&&(0,g.jsxs)("div",{className:"allSectionTypeWrp",children:[(0,g.jsx)("div",{className:"removeBtn",children:(0,g.jsx)(d.Z,{icon:u.x,customClassName:"nav-icon"})}),(0,g.jsxs)(m.rb,{className:"g-3",children:[(0,g.jsx)(m.b7,{lg:"3",children:(0,g.jsxs)("div",{className:"each_section_Wrp",onClick:function(){return E("single")},children:[(0,g.jsx)("div",{className:"aicon",children:(0,g.jsx)(v.nuP,{})}),(0,g.jsx)("div",{className:"section_title",children:"Single"})]})}),(0,g.jsx)(m.b7,{lg:"3",children:(0,g.jsxs)("div",{className:"each_section_Wrp",onClick:function(){return E("repeater")},children:[(0,g.jsx)("div",{className:"aicon",children:(0,g.jsx)(v.bB,{})}),(0,g.jsx)("div",{className:"section_title",children:"Repeater"})]})})]})]}),0==O&&(0,g.jsx)("div",{className:"addNewSection",onClick:function(){return V(1)},children:(0,g.jsx)(d.Z,{icon:r.q,customClassName:"nav-icon"})})]})})]})}},15594:function(){}}]);
//# sourceMappingURL=377.a6cd0d3e.chunk.js.map