(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[356],{69918:function(e,n,t){"use strict";t.r(n);var u=t(85893),i=t(67294),r=t(29009),s=t(82931),a=t(46208),o=t(43815),c=t(65657),l=t(23872),d=t(65953);n.default=function(){var e=(0,i.useContext)(d.R).orders,n=(0,i.useState)([]),t=n[0],f=n[1];(0,i.useEffect)((function(){if(0!==e.length){var n=e.reduce((function(e,n){return n.payment_type&&"unknown"!==n.payment_type&&(e[n.payment_type]=(e[n.payment_type]||0)+1),e}),{}),t=Object.keys(n).map((function(e){return{name:e,value:n[e]}}));f(t)}else console.log("No orders data")}),[e]);var h=["#0088FE","#00C49F","#FFBB28","#FF8042","#AF19FF"];return(0,u.jsxs)("div",{children:[(0,u.jsx)("h1",{children:"Distribuci\xf3n de los m\xe9todos de pago utilizados"}),(0,u.jsx)(r.h,{width:"100%",height:400,children:(0,u.jsxs)(s.u,{children:[(0,u.jsx)(a.b,{data:t,cx:"50%",cy:"50%",labelLine:!1,outerRadius:150,fill:"#8884d8",dataKey:"value",children:t.map((function(e,n){return(0,u.jsx)(o.b,{fill:h[n%h.length]},"cell-".concat(n))}))}),(0,u.jsx)(c.u,{}),(0,u.jsx)(l.D,{})]})})]})}},68688:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/charts/metodos-pago-distribucion",function(){return t(69918)}])}},function(e){e.O(0,[774,683,931,888,179],(function(){return n=68688,e(e.s=n);var n}));var n=e.O();_N_E=n}]);