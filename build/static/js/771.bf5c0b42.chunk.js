"use strict";(self.webpackChunk_coreui_coreui_free_react_admin_template=self.webpackChunk_coreui_coreui_free_react_admin_template||[]).push([[771],{35771:function(e,a,s){s.r(a);var r=s(72791),n=s(78983),t=s(24846),i=s(61462),l=s(41479),c=s(76986),d=s(34948),o=s(10687),m=s(26271),u=s(17412),h=s(16422),p=s(81521),x=s(59299),g=s(82546),j=s(64539),b=s(85602),y=s(72276),f=s(42613),N=s(6733),v=s(42812),J=s(53507),A=s(70683),w=(s(8379),s(80184));a.default=function(){var e=[{avatar:{src:y,status:"success"},user:{name:"Yiorgos Avraamu",new:!0,registered:"Jan 1, 2021"},country:{name:"USA",flag:i.E},usage:{value:50,period:"Jun 11, 2021 - Jul 10, 2021",color:"success"},payment:{name:"Mastercard",icon:l.y},status:"Active"},{avatar:{src:f,status:"danger"},user:{name:"Avram Tarasios",new:!1,registered:"Jan 1, 2021"},country:{name:"Brazil",flag:c.N},usage:{value:22,period:"Jun 11, 2021 - Jul 10, 2021",color:"info"},payment:{name:"Visa",icon:d.W},status:"Completed"},{avatar:{src:N,status:"warning"},user:{name:"Quintin Ed",new:!0,registered:"Jan 1, 2021"},country:{name:"India",flag:o.J},usage:{value:74,period:"Jun 11, 2021 - Jul 10, 2021",color:"warning"},payment:{name:"Stripe",icon:m.I},status:"Completed"},{avatar:{src:v,status:"secondary"},user:{name:"En\xe9as Kwadwo",new:!0,registered:"Jan 1, 2021"},country:{name:"France",flag:u.A},usage:{value:98,period:"Jun 11, 2021 - Jul 10, 2021",color:"danger"},payment:{name:"PayPal",icon:h.K},status:"Completed"},{avatar:{src:J,status:"success"},user:{name:"Agapetus Tade\xe1\u0161",new:!0,registered:"Jan 1, 2021"},country:{name:"Spain",flag:p.z},usage:{value:22,period:"Jun 11, 2021 - Jul 10, 2021",color:"primary"},payment:{name:"Google Wallet",icon:x.D},status:"Rejected"},{avatar:{src:A,status:"danger"},user:{name:"Friderik D\xe1vid",new:!0,registered:"Jan 1, 2021"},country:{name:"Poland",flag:g.I},usage:{value:43,period:"Jun 11, 2021 - Jul 10, 2021",color:"success"},payment:{name:"Amex",icon:j.I},status:"Active"}];return(0,r.useEffect)((function(){fetch("./manifest.json").then((function(e){return e.json()})).then((function(e){console.log(e)}))}),[]),(0,w.jsx)(w.Fragment,{children:(0,w.jsx)(n.xH,{className:"mb-4",children:(0,w.jsx)(n.sl,{children:(0,w.jsxs)(n.Sx,{align:"middle",className:"mb-0 border",hover:!0,responsive:!0,children:[(0,w.jsx)(n.V,{color:"light",children:(0,w.jsxs)(n.T6,{children:[(0,w.jsx)(n.is,{className:"text-center",children:(0,w.jsx)(t.Z,{icon:b.g})}),(0,w.jsx)(n.is,{children:"Patient Info"}),(0,w.jsx)(n.is,{children:"Clinic Details"}),(0,w.jsx)(n.is,{className:"text-center",children:"Status"})]})}),(0,w.jsx)(n.NR,{children:e.map((function(e,a){return(0,w.jsxs)(n.T6,{"v-for":"item in tableItems",children:[(0,w.jsx)(n.NN,{className:"text-center",children:(0,w.jsx)(n.cU,{size:"md",src:e.avatar.src,status:e.avatar.status})}),(0,w.jsxs)(n.NN,{children:[(0,w.jsx)("div",{children:e.user.name}),(0,w.jsxs)("div",{className:"small text-medium-emphasis",children:[(0,w.jsx)("span",{children:e.user.new?"New":"Recurring"})," | Registered:"," ",e.user.registered]})]}),(0,w.jsxs)(n.NN,{children:[(0,w.jsx)("h6",{children:"DR. Subrata Majhi"}),(0,w.jsx)("p",{className:"mb-0",children:"Ma Tara Clinic, Accepted 5min ago"})]}),(0,w.jsx)(n.NN,{className:"text-center",children:(0,w.jsx)("button",{className:"btn btn-sm text-light "+("Active"===e.status?"btn-success":"Completed"===e.status?"btn-primary":"btn-danger"),style:{width:"100px"},children:e.status})})]},a)}))})]})})})})}},8379:function(e,a,s){s(72791);var r=s(78983),n=s(23177),t=s(24846),i=s(5372),l=s(73130),c=s(22655),d=s(80184);a.Z=function(){return(0,d.jsxs)(r.rb,{children:[(0,d.jsx)(r.b7,{sm:6,lg:3,children:(0,d.jsx)(r.co,{className:"mb-4",color:"primary",value:(0,d.jsxs)(d.Fragment,{children:["26K"," ",(0,d.jsxs)("span",{className:"fs-6 fw-normal",children:["(-12.4% ",(0,d.jsx)(t.Z,{icon:i.t}),")"]})]}),title:"Patients",action:(0,d.jsxs)(r.w5,{alignment:"end",children:[(0,d.jsx)(r.SQ,{color:"transparent",caret:!1,className:"p-0",children:(0,d.jsx)(t.Z,{icon:l.t,className:"text-high-emphasis-inverse"})}),(0,d.jsxs)(r.$H,{children:[(0,d.jsx)(r.$f,{children:"Action"}),(0,d.jsx)(r.$f,{children:"Another action"}),(0,d.jsx)(r.$f,{children:"Something else here..."}),(0,d.jsx)(r.$f,{disabled:!0,children:"Disabled action"})]})]}),chart:(0,d.jsx)(n.oK,{className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:"rgba(255,255,255,.55)",data:[65,59,84,84,51,55,40]}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:30,max:89,display:!1,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1,tension:.4},point:{radius:4,hitRadius:10,hoverRadius:4}}}})})}),(0,d.jsx)(r.b7,{sm:6,lg:3,children:(0,d.jsx)(r.co,{className:"mb-4",color:"primary",value:(0,d.jsxs)(d.Fragment,{children:["6.2k"," ",(0,d.jsxs)("span",{className:"fs-6 fw-normal",children:["(40.9% ",(0,d.jsx)(t.Z,{icon:c.T}),")"]})]}),title:"Doctors",action:(0,d.jsxs)(r.w5,{alignment:"end",children:[(0,d.jsx)(r.SQ,{color:"transparent",caret:!1,className:"p-0",children:(0,d.jsx)(t.Z,{icon:l.t,className:"text-high-emphasis-inverse"})}),(0,d.jsxs)(r.$H,{children:[(0,d.jsx)(r.$f,{children:"Action"}),(0,d.jsx)(r.$f,{children:"Another action"}),(0,d.jsx)(r.$f,{children:"Something else here..."}),(0,d.jsx)(r.$f,{disabled:!0,children:"Disabled action"})]})]}),chart:(0,d.jsx)(n.oK,{className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"transparent",borderColor:"rgba(255,255,255,.55)",pointBackgroundColor:"rgba(255,255,255,.55)",data:[1,18,9,17,34,22,11]}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{grid:{display:!1,drawBorder:!1},ticks:{display:!1}},y:{min:-9,max:39,display:!1,grid:{display:!1},ticks:{display:!1}}},elements:{line:{borderWidth:1},point:{radius:4,hitRadius:10,hoverRadius:4}}}})})}),(0,d.jsx)(r.b7,{sm:6,lg:3,children:(0,d.jsx)(r.co,{className:"mb-4",color:"primary",value:(0,d.jsxs)(d.Fragment,{children:["2.49"," ",(0,d.jsxs)("span",{className:"fs-6 fw-normal",children:["(84.7% ",(0,d.jsx)(t.Z,{icon:c.T}),")"]})]}),title:"Appointments",action:(0,d.jsxs)(r.w5,{alignment:"end",children:[(0,d.jsx)(r.SQ,{color:"transparent",caret:!1,className:"p-0",children:(0,d.jsx)(t.Z,{icon:l.t,className:"text-high-emphasis-inverse"})}),(0,d.jsxs)(r.$H,{children:[(0,d.jsx)(r.$f,{children:"Action"}),(0,d.jsx)(r.$f,{children:"Another action"}),(0,d.jsx)(r.$f,{children:"Something else here..."}),(0,d.jsx)(r.$f,{disabled:!0,children:"Disabled action"})]})]}),chart:(0,d.jsx)(n.oK,{className:"mt-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40],fill:!0}]},options:{plugins:{legend:{display:!1}},maintainAspectRatio:!1,scales:{x:{display:!1},y:{display:!1}},elements:{line:{borderWidth:2,tension:.4},point:{radius:0,hitRadius:10,hoverRadius:4}}}})})}),(0,d.jsx)(r.b7,{sm:6,lg:3,children:(0,d.jsx)(r.co,{className:"mb-4",color:"primary",value:(0,d.jsxs)(d.Fragment,{children:["44K"," ",(0,d.jsxs)("span",{className:"fs-6 fw-normal",children:["(-23.6% ",(0,d.jsx)(t.Z,{icon:i.t}),")"]})]}),title:"Diagnostic Testing",action:(0,d.jsxs)(r.w5,{alignment:"end",children:[(0,d.jsx)(r.SQ,{color:"transparent",caret:!1,className:"p-0",children:(0,d.jsx)(t.Z,{icon:l.t,className:"text-high-emphasis-inverse"})}),(0,d.jsxs)(r.$H,{children:[(0,d.jsx)(r.$f,{children:"Action"}),(0,d.jsx)(r.$f,{children:"Another action"}),(0,d.jsx)(r.$f,{children:"Something else here..."}),(0,d.jsx)(r.$f,{disabled:!0,children:"Disabled action"})]})]}),chart:(0,d.jsx)(n.JZ,{className:"mt-3 mx-3",style:{height:"70px"},data:{labels:["January","February","March","April","May","June","July","August","September","October","November","December","January","February","March","April"],datasets:[{label:"My First dataset",backgroundColor:"rgba(255,255,255,.2)",borderColor:"rgba(255,255,255,.55)",data:[78,81,80,45,34,12,40,85,65,23,12,98,34,84,67,82],barPercentage:.6}]},options:{maintainAspectRatio:!1,plugins:{legend:{display:!1}},scales:{x:{grid:{display:!1,drawTicks:!1},ticks:{display:!1}},y:{grid:{display:!1,drawBorder:!1,drawTicks:!1},ticks:{display:!1}}}}})})})]})}},72276:function(e,a,s){e.exports=s.p+"static/media/1.34eedf58c0876517e858.jpg"},42613:function(e,a,s){e.exports=s.p+"static/media/2.0c06e43dc16bee6cdfed.jpg"},6733:function(e,a,s){e.exports=s.p+"static/media/3.07e357f51e1b86d9e741.jpg"},42812:function(e,a,s){e.exports=s.p+"static/media/4.3ddf28ab435770c6d69f.jpg"},53507:function(e,a,s){e.exports=s.p+"static/media/5.3e55ee5f667d94054da3.jpg"},70683:function(e,a,s){e.exports=s.p+"static/media/6.edefb235566ed72a7429.jpg"}}]);
//# sourceMappingURL=771.bf5c0b42.chunk.js.map