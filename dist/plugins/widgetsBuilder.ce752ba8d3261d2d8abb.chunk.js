(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[6716],{994345:(e,t,r)=>{"use strict";r.d(t,{Z:()=>l});var n=r(867076),o=r(36549),i=r(832979);const l=(0,n.compose)((0,n.withProps)((e=>{let{renderPopover:t,popoverOptions:r,...n}=e;return t?{renderPopover:t,popoverOptions:r,...n}:{...n}})),(0,n.branch)((function(){let{renderPopover:e,popoverOptions:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e&&!!t}),i.Z,o.Z))},832979:(e,t,r)=>{"use strict";r.d(t,{Z:()=>u});var n=r(124852),o=r.n(n),i=r(118438),l=r(630294),a=r(957557),d=r.n(a),s=r(180307),p=r.n(s);function c(){return c=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},c.apply(this,arguments)}const u=e=>class extends o().Component{render(){let t=null;const{popoverOptions:r,keyProp:n,...a}=this.props;return o().createElement("span",{className:"mapstore-info-popover"},o().createElement(e,c({},d()(a,["renderPopover","tooltipId"]),{key:n,ref:e=>{t=e}})),o().createElement(i.Z,{placement:r.placement,shouldUpdatePosition:!0,show:!0,target:()=>p().findDOMNode(t)},o().createElement(l.Popover,r.props,r.content)))}}},712845:(e,t,r)=>{"use strict";r.d(t,{Z:()=>c});var n=r(124852),o=r.n(n),i=r(630294),l=r(23888);function a(){return a=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},a.apply(this,arguments)}const d={width:0,padding:0,borderWidth:0},s={},p=e=>e?s:d,c=(0,n.forwardRef)(((e,t)=>{let{disabled:r,id:n,visible:d,onClick:s,glyph:c,active:u,className:b="square-button-md",...g}=e;return o().createElement(l.Z,a({ref:t},g,{bsStyle:u?"success":"primary",disabled:r,id:`fg-${n}`,style:p(d),className:b,onClick:()=>!r&&s()}),o().createElement(i.Glyphicon,{glyph:c}))}))},531479:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>G});var n=r(124852),o=r.n(n),i=r(45697),l=r.n(i),a=r(49977),d=r.n(a),s=r(492838),p=r(306692),c=r(296252),u=r(884757),b=r(687753),g=r(333101),f=r(275982),m=r(612132),h=r(952273),y=r(254020),v=r(119008);const w={openWidgetEditor:function(e){let{getState:t=(()=>{})}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.ofType(s.AE,s.dm,s.IT).filter((()=>(0,v.PJ)(t()))).switchMap((()=>d().Observable.of((0,b.Xg)("widgetBuilder","enabled",!0),(0,b.Xg)("metadataexplorer","enabled",!1))))},closeWidgetEditorOnFinish:function(e){let{getState:t=(()=>{})}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.ofType(s.Jm,g.oE).filter((()=>(0,v.PJ)(t()))).switchMap((()=>d().Observable.of((0,b.Xg)("widgetBuilder","enabled",!1))))},initEditorOnNew:function(e){let{getState:t=(()=>{})}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.ofType(s.AE).filter((()=>(0,v.PJ)(t()))).switchMap((e=>d().Observable.of((0,s.bS)({legend:!1,mapSync:!0,cartesian:!0,yAxis:!0,...e,type:void 0},{step:0}))))},initEditorOnNewChart:function(e){let{getState:t=(()=>{})}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.ofType(s.IT).filter((()=>(0,v.PJ)(t()))).switchMap((e=>d().Observable.of((0,p.YV)(),(0,s.bS)({legend:!1,mapSync:!0,cartesian:!0,yAxis:!0,widgetType:"chart",filter:(0,y.X1)(t()),...e,type:void 0},{step:0}),(0,s.Rz)("returnToFeatureGrid",!0))))},handleWidgetsFilterPanel:function(e){let{getState:t=(()=>{})}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return e.ofType(s.lG).filter((()=>(0,v.PJ)(t()))).switchMap((()=>d().Observable.of((0,m.gT)(...(e=>{let t=(0,h.GW)(e);return[t.search&&t.search.url,t.name]})(t())),(0,u.F)((0,h.um)(t())),(0,b.Xg)("widgetBuilder","enabled",!1),(0,b.Xg)("queryPanel","enabled",!0)).concat(d().Observable.race(e.ofType(u.Wm).take(1),e.ofType(b.kM).filter((function(){let{control:e,property:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return"queryPanel"===e&&(!t||"enabled"===t)})).take(1)).switchMap((e=>(e.filterObj?d().Observable.of((0,s.Rz)((0,h.Nx)(t()),e.filterObj)):d().Observable.empty()).merge(d().Observable.of((0,b.Xg)("widgetBuilder","enabled",!0)))))).takeUntil(e.ofType(f.nk,s.dm).merge(e.ofType(b.kM).filter((function(){let{control:e,property:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return"widgetBuilder"===e&&0==!t})))).concat(d().Observable.of((0,c.bp)(),(0,b.Xg)("queryPanel","enabled",!1)))))}};var k=r(152543),O=r(565329),T=r(171703),P=r(22222),C=r(867076),E=r(350126);const S=(0,C.compose)((0,T.connect)((e=>({returnToFeatureGrid:(0,h.Wo)(e)})),{backToWidgetList:()=>(0,s.Rz)("widgetType",void 0),closeWidgetBuilder:()=>(0,b.Xg)("widgetBuilder","enabled",!1,!1),openFeatureGridTable:()=>(0,p.t9)()}),(0,C.withHandlers)({backFromWizard:e=>{let{backToWidgetList:t=(()=>{}),closeWidgetBuilder:r=(()=>{}),openFeatureGridTable:n=(()=>{}),returnToFeatureGrid:o}=e;return()=>{o?(r(),n()):t()}}}),(0,C.withProps)((e=>{let{returnToFeatureGrid:t,backFromWizard:r=(()=>{})}=e;return{exitButton:{onClick:r,glyph:"arrow-left",tooltipId:t?"widgets.builder.wizard.backToFeatureGrid":"widgets.builder.wizard.backToWidgetTypeSelection"}}})));var W=r(21195),z=r(994345),M=r(712845);const B=(0,z.Z)(M.Z),F=(0,T.connect)((()=>({})),{onClick:()=>(0,s.C2)()})((e=>{let{disabled:t,mode:r,onClick:n=(()=>{})}=e;return o().createElement(B,{id:"grid-map-chart",keyProp:"grid-map-chart",tooltipId:"featuregrid.toolbar.createNewChart",disabled:t,visible:"VIEW"===r,onClick:n,glyph:"stats"})}));function j(e,t,r){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var r=e[Symbol.toPrimitive];if(void 0!==r){var n=r.call(e,"string");if("object"!=typeof n)return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const x=(0,C.compose)((0,T.connect)((0,P.P1)(h.h9,h.zA,((e,t)=>({dependencies:e,...t}))),{toggleConnection:s.w2}),S)(W.Z);class X extends o().Component{componentDidMount(){this.props.onMount()}componentWillUnmount(){this.props.onUnmount()}render(){return o().createElement(O.Z,{open:this.props.enabled,size:this.props.dockSize,zIndex:this.props.zIndex,position:this.props.position,bsStyle:"primary",hideHeader:!0,style:{...this.props.layout,background:"white"}},o().createElement(x,{enabled:this.props.enabled,onClose:this.props.onClose,typeFilter:function(){let{type:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return"map"!==e&&"legend"!==e}}))}}j(X,"propTypes",{id:l().string,enabled:l().bool,limitDockHeight:l().bool,fluid:l().bool,zIndex:l().number,dockSize:l().number,position:l().string,onMount:l().func,onUnmount:l().func,onClose:l().func,dimMode:l().string,src:l().string,style:l().object,layout:l().object}),j(X,"defaultProps",{id:"widgets-builder-plugin",enabled:!1,dockSize:500,limitDockHeight:!0,zIndex:1e4,fluid:!1,dimMode:"none",position:"left",onMount:()=>{},onUnmount:()=>{},onClose:()=>{},layout:{}});const Z=(0,T.connect)((0,P.P1)(v.dH,(e=>(0,E.ic)(e,{height:!0})),((e,t)=>({enabled:e,layout:t}))),{onMount:()=>(0,b.Xg)("widgetBuilder","available",!0),onUnmount:()=>(0,b.Xg)("widgetBuilder","available",!1),onClose:b.Xg.bind(null,"widgetBuilder","enabled",!1,!1)})(X),G=(0,k.rx)("WidgetsBuilder",{component:Z,epics:w,containers:{TOC:{doNotHide:!0,name:"WidgetBuilder"},FeatureEditor:{doNotHide:!0,target:"toolbar",position:21,Component:F}}})}}]);