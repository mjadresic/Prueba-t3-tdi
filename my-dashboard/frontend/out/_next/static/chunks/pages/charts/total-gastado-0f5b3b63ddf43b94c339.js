(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[106],{80018:function(t,e,r){"use strict";function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function o(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}(t)||function(t,e){if(t){if("string"===typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?n(t,e):void 0}}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(e,{Z:function(){return o}})},74576:function(t,e,r){"use strict";r.r(e);var n=r(85893),o=r(80018),a=r(67294),i=r(29009),s=r(94831),u=r(14195),c=r(3023),d=r(75358),l=r(65657),f=r(23872),p=r(53237),m=r(65953);e.default=function(){var t=(0,a.useContext)(m.R).orders,e=(0,a.useState)([]),r=e[0],h=e[1];return(0,a.useEffect)((function(){if(0!==t.length){var e=t.reduce((function(t,e){return e.customer_id&&"missing_customer_id_undefined"!==e.customer_id&&e.payment&&(t[e.customer_id]=(t[e.customer_id]||0)+e.payment),t}),{}),r=Object.keys(e).map((function(t){return{customer_id:t,total_spent:e[t]}}));r.sort((function(t,e){return e.total_spent-t.total_spent}));var n=r.slice(0,40);h(n)}else console.log("No orders data")}),[t]),(0,n.jsxs)("div",{children:[(0,n.jsx)("h1",{children:"Cantidad total gastada por el cliente que m\xe1s ha gastado (Top 40)"}),(0,n.jsx)(i.h,{width:"100%",height:800,children:(0,n.jsxs)(s.v,{width:800,height:800,data:r,margin:{top:20,right:30,left:200,bottom:5},children:[(0,n.jsx)(u.q,{strokeDasharray:"3 3"}),(0,n.jsx)(c.K,{dataKey:"customer_id",type:"category",width:200})," ",(0,n.jsx)(d.B,{type:"number",domain:[0,Math.max.apply(Math,(0,o.Z)(r.map((function(t){return t.total_spent}))))],tickFormatter:function(t){return t.toFixed(2)}})," ",(0,n.jsx)(l.u,{}),(0,n.jsx)(f.D,{}),(0,n.jsx)(p.$,{dataKey:"total_spent",fill:"#8884d8"})]})})]})}},1120:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/total-gastado",function(){return r(74576)}])},94831:function(t,e,r){"use strict";r.d(e,{v:function(){return u}});var n=r(99500),o=r(53237),a=r(3023),i=r(75358),s=r(97187),u=(0,n.z)({chartName:"BarChart",GraphicalChild:o.$,defaultTooltipEventType:"axis",validateTooltipEventTypes:["axis","item"],axisComponents:[{axisType:"xAxis",AxisComp:a.K},{axisType:"yAxis",AxisComp:i.B}],formatAxisMap:s.t9})}},function(t){t.O(0,[774,683,160,888,179],(function(){return e=1120,t(t.s=e);var e}));var e=t.O();_N_E=e}]);