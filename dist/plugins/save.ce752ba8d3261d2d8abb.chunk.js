(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[801],{573953:(e,t,o)=>{"use strict";o.r(t),o.d(t,{default:()=>b});var a=o(124852),n=o.n(a),r=o(867076),i=o(171703),s=o(22222),l=o(630294),c=o(804504),p=o(274363),d=o(510644),u=o(152543),m=o(687753),v=o(926854),g=o(450514);const b=(0,u.rx)("Save",{component:(0,r.compose)((0,i.connect)((0,s.P1)((e=>e.controls&&e.controls.mapSave&&e.controls.mapSave.enabled),p._H,((e,t)=>({show:e,resource:t}))),{onClose:m.Xi.bind(null,"mapSave",!1),onResetMapSaveError:v.N_}))(g.Z),containers:{BurgerMenu:{name:"mapSave",position:30,text:n().createElement(c.Z,{msgId:"save"}),icon:n().createElement(l.Glyphicon,{glyph:"floppy-open"}),action:m.Xi.bind(null,"mapSave",null),tooltip:"saveDialog.saveTooltip",selector:(0,s.P1)(d.jl,p._H,(function(e){let{canEdit:t,id:o}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{style:e&&o&&t?{}:{display:"none"}}})),priority:2,doNotHide:!0},SidebarMenu:{name:"mapSave",position:30,icon:n().createElement(l.Glyphicon,{glyph:"floppy-disk"}),text:n().createElement(c.Z,{msgId:"save"}),action:m.Xi.bind(null,"mapSave",null),toggle:!0,tooltip:"saveDialog.saveTooltip",selector:(0,s.P1)(d.jl,p._H,(function(e){let{canEdit:t,id:o}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return{style:e&&o&&t?{}:{display:"none"}}})),priority:1,doNotHide:!0}}})},450514:(e,t,o)=>{"use strict";o.d(t,{Z:()=>C});var a=o(45697),n=o.n(a),r=o(171703),i=o(867076),s=o(22222),l=o(371714),c=o(626365),p=o(130609),d=o(4143),u=o(27908),m=o(612912),v=o(274363),g=o(945395),b=o(101092),S=o(57677),h=o(510644),y=o(835516);const f=(0,s.P1)(h.np,v.ez,v.Kr,m.l2,m.Bt,d.Mz,g.UC,S.I,S._,v.Od,b.$v,u.pf,u.SV,((e,t,o,a,n,r,i,s,l,c,p,d,u)=>({user:e,loading:t,errors:o,layers:a,groups:n,backgrounds:r,additionalOptions:i,textSearchConfig:s,bookmarkSearchConfig:l,map:c,mapType:p,context:d,contextResource:u}))),C=(0,i.compose)((0,r.connect)(f,{saveMap:l.aj}),(0,i.withProps)({category:"MAP",enableDetails:!0}),(0,i.getContext)({router:n().object}),(0,i.withHandlers)({onClose:e=>{let{onClose:t,onResetMapSaveError:o}=e;return()=>{t(),o()}},onSave:e=>{let{map:t,layers:o,groups:a,backgrounds:n,textSearchConfig:r,bookmarkSearchConfig:i,additionalOptions:s,saveMap:l,isNewResource:c,contextResource:p}=e;return e=>{const d=y.default.saveMapConfiguration(t,o,a,n,r,i,s),{metadata:u,data:m,attributes:v,id:g,...b}=e;let S;return S=c?{data:d,attributes:{...v,context:p?.id||v.context},metadata:{attributes:null,...u},...b}:{data:d,attributes:v,metadata:u,id:g,...b},l(S)}}}),c.Z)(p.Z)}}]);