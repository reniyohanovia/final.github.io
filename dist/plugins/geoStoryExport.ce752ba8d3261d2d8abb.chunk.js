(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[5789],{826747:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var l=n(124852),o=n.n(l),r=n(493220),a=n.n(r),s=n(227361),c=n.n(s),p=n(630294),m=n(23888),i=n(867517),E=n(804504);const d=e=>{let{show:t=!1,formats:n={},selectedFormat:l,exportButtonLabel:r=o().createElement(E.Z,{msgId:"mapExport.exportPanel.exportButtonLabel"}),exportPanelTitle:s=o().createElement(i.Z,{msgId:"mapExport.exportPanel.title"}),onSelect:d=(()=>{}),onExport:u=(()=>{}),onClose:g=(()=>{})}=e;return t&&o().createElement("div",{className:"export-panel"},o().createElement(m.Z,{style:{border:"none",background:"transparent",color:"white",fontSize:35,top:0,right:0,position:"absolute"},onClick:()=>g()},o().createElement(p.Glyphicon,{glyph:"1-close"})),o().createElement("div",{style:{margin:"auto",maxWidth:550}},o().createElement("div",null,o().createElement("div",{className:"export-panel-heading-icon"},o().createElement(p.Glyphicon,{glyph:"upload"})),o().createElement("div",null,s),o().createElement("br",null),o().createElement("div",{className:"export-panel-formats-container"},a()(n).map((e=>{let[t,{label:n,glyph:r}]=e;return o().createElement(m.Z,{key:t,bsStyle:"default",className:l===t?"format-selected":"",onClick:()=>d(t)},o().createElement("div",null,o().createElement(p.Glyphicon,{style:{marginRight:"4px"},glyph:r}),n))}))),o().createElement("br",null),o().createElement(m.Z,{bsStyle:"primary",onClick:()=>u(l)},r),o().createElement("br",null),o().createElement("br",null),c()(n,`${l}.description`,null),c()(n,`${l}.note`)&&o().createElement(o().Fragment,null,o().createElement("hr",null),c()(n,`${l}.note`)))))}},700054:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>h});var l=n(124852),o=n.n(l),r=n(630294),a=n(171703),s=n(22222),c=n(826747),p=n(152543),m=n(796205),i=n(219002),E=n(804504);const d=(0,m.A7)("export"),u=(0,s.P1)(d,m.Kg,((e,t)=>({show:e,data:t}))),g={onClose:e=>(0,i.g5)("export",e),onExport:i.RC},x=(0,a.connect)(u,g)((e=>{let{show:t,onClose:n,onExport:l,data:r}=e;const a=r?.settings?.storyTitle?`${r.settings.storyTitle}-geostory.json`:"geostory.json";return o().createElement(c.Z,{show:t,onClose:()=>n(!t),onExport:()=>l(r,a),exportPanelTitle:o().createElement(E.Z,{msgId:"geostory.exportDialog.heading"})})})),h=(0,p.rx)("GeoStoryExport",{component:x,containers:{BurgerMenu:()=>({name:"export",position:4,text:o().createElement(E.Z,{msgId:"mapExport.title"}),icon:o().createElement(r.Glyphicon,{glyph:"download"}),action:()=>(0,i.g5)("export",!0),priority:2,doNotHide:!0})}})}}]);