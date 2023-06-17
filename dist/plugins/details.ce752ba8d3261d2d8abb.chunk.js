(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[4995],{178813:(e,t,s)=>{"use strict";s.r(t),s.d(t,{default:()=>A});var i={};s.r(i),s.d(i,{closeDetailsPanelEpic:()=>j,fetchDataForDetailsPanel:()=>I,storeDetailsInfoEpic:()=>G});var l=s(124852),a=s.n(l),o=s(171703),n=s(227361),r=s.n(n),c=s(630294),d=s(345366),p=s(274363),m=s(350126),h=s(419637),y=s(45697),u=s.n(y),b=s(804504),v=s(756435),g=s(908316);function f(e,t,s){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var s=e[Symbol.toPrimitive];if(void 0!==s){var i=s.call(e,"string");if("object"!=typeof i)return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[t]=s,e}class w extends a().Component{render(){return a().createElement(g.Z,{containerId:"details-container",containerClassName:"dock-container",containerStyle:this.props.dockStyle,open:this.props.active,size:this.props.width,position:"right",bsStyle:"primary",title:a().createElement(b.Z,{msgId:"details.title"}),onClose:()=>this.props.onClose(),glyph:"sheet",style:this.props.dockStyle},a().createElement(c.Panel,{id:this.props.id,style:this.props.panelStyle,className:this.props.panelClassName},a().createElement(v.Z,null,this.props.children)))}}f(w,"propTypes",{id:u().string,active:u().bool,panelStyle:u().object,dockStyle:u().object,panelClassName:u().string,style:u().object,onClose:u().func,width:u().number}),f(w,"contextTypes",{messages:u().object}),f(w,"defaultProps",{id:"mapstore-details",panelStyle:{zIndex:100,marginBottom:0,minHeight:"100%"},style:{},onClose:()=>{},active:!1,panelClassName:"details-panel",width:550});const S=w;var C=s(283604),E=s(152543);var T=s(49977),x=s.n(T),k=s(313311),N=s.n(k),M=s(926854),O=s(687753),Z=s(288287),J=s(726598),P=s(835516),D=s(425589);const I=(e,t)=>e.ofType(d.eR).switchMap((()=>{const e=t.getState(),s=(0,p.Gi)(e),i=(0,P.getIdFromUri)(s);return x().Observable.fromPromise(Z.Z.getData(i).then((e=>e))).switchMap((e=>x().Observable.of((0,d.bR)(e)))).startWith((0,O.Xi)("details","enabled")).catch((()=>x().Observable.of((0,D.d)({message:"maps.feedback.errorFetchingDetailsOfMap"}),(0,d.bR)(d.hi))))})),j=e=>e.ofType(d.f8).switchMap((()=>x().Observable.from([(0,O.Xg)("details","enabled",!1)]))),G=(e,t)=>e.ofType(M.KS).switchMap((()=>{const e=(0,p.J9)(t.getState()),s=t.getState()?.tutorial?.run;return e?x().Observable.fromPromise(Z.Z.getResourceAttributes(e)).switchMap((t=>{let i=N()(t,{name:"details"});const l=N()(t,{name:"detailsSettings"});let a={};if(!i||i.value===J.Sp)return x().Observable.empty();try{a=JSON.parse(l.value)}catch(e){a={}}return x().Observable.of((0,d.XT)(e,i.value,a),...a.showAtStartup&&!s?[(0,d.UJ)()]:[])})):x().Observable.empty()}));var U=s(22222);const A=(0,E.rx)("Details",{component:(0,o.connect)((0,U.zB)({active:e=>r()(e,"controls.details.enabled"),dockStyle:e=>(0,m.ic)(e,{height:!0,right:!0},!0),detailsText:e=>e?.details?.detailsText,showAsModal:e=>(0,p.qH)(e)?.showAsModal}),{onClose:d.nf})((e=>{let{active:t=!1,dockStyle:s,detailsText:i,showAsModal:l=!1,onClose:o=(()=>{})}=e;const n=a().createElement(h.Z,{className:"ms-details-preview-container",textContainerClassName:"ms-details-preview",loading:!i,detailsText:i===d.hi?null:i});return l?a().createElement(C.Z,{bodyClassName:"details-viewer-modal",fitContent:!0,showFullscreen:!0,show:t,size:"lg",title:a().createElement(b.Z,{msgId:"details.title"}),onClose:o},n):a().createElement(S,{width:550,dockStyle:s,active:t,onClose:o},n)})),containers:{BurgerMenu:{name:"details",position:1e3,priority:2,doNotHide:!0,text:a().createElement(b.Z,{msgId:"details.title"}),tooltip:"details.tooltip",icon:a().createElement(c.Glyphicon,{glyph:"sheet"}),action:d.UJ,selector:e=>{const t=(0,p.J9)(e);return t&&(0,p.Gi)(e,t)?{}:{style:{display:"none"}}}},Toolbar:{name:"details",position:2,priority:0,tooltip:"details.title",alwaysVisible:!0,doNotHide:!0,icon:a().createElement(c.Glyphicon,{glyph:"sheet"}),action:d.UJ,selector:e=>{const t=(0,p.J9)(e);return t&&(0,p.Gi)(e,t)?{}:{style:{display:"none"}}}},SidebarMenu:{name:"details",position:4,text:a().createElement(b.Z,{msgId:"details.title"}),tooltip:"details.tooltip",alwaysVisible:!0,icon:a().createElement(c.Glyphicon,{glyph:"sheet"}),action:d.UJ,selector:e=>{const t=(0,p.J9)(e);return t&&(0,p.Gi)(e,t)?{bsStyle:e.controls.details&&e.controls.details.enabled?"primary":"tray",active:e.controls.details&&e.controls.details.enabled||!1}:{style:{display:"none"}}},doNotHide:!0,priority:1}},epics:i,reducers:{details:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;return t.type===d.UD?{...e,detailsText:t.detailsText}:e}}})}}]);