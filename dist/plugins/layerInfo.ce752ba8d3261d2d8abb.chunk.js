(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[9373],{452412:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>ae});var a={};r.r(a),r.d(a,{layerInfoSetupLayersEpic:()=>te,layerInfoSyncLayersEpic:()=>re});var l=r(124852),n=r.n(l),s=r(171703),o=r(22222),c=r(630294),i=r(500711),y=r.n(i),d=r(23888),m=r(63101),u=r(89518),p=r(804504),g=r(401811),f=r(399790);const E=e=>{let{loading:t=!1,loadFlags:r={},error:a,layers:l=[],currentLocale:s="default",onSelectLayers:o=(()=>{})}=e;const i=l.map((e=>{let{id:t}=e;return t})),E=l.filter((e=>{let{selected:t}=e;return t})).map((e=>{let{id:t}=e;return t})),b=l.map((e=>{let{title:t,name:r,type:a,selected:l,id:i,syncStatus:y}=e;return{title:(0,f.in)({title:t,name:r},s),description:n().createElement(p.Z,{msgId:"layerInfo.layerType",msgParams:{type:a}}),cardSize:"sm",selected:l,tools:y&&"none"!==y?[{tooltipId:"success"===y?"layerInfo.tooltips.syncSuccess":"error"===y?"layerInfo.tooltips.syncError":void 0,glyph:"success"===y?"ok-sign":"error"===y?"exclamation-mark":void 0,Element:e=>"updating"===y?n().createElement(u.Z,{size:16}):n().createElement(g.Z,{placement:"top",overlay:n().createElement(c.Tooltip,{id:"layerinfo-syncstatus-tooltip"},n().createElement(p.Z,{msgId:e.tooltipId}))},n().createElement(c.Glyphicon,{glyph:e.glyph}))}]:[],preview:n().createElement("div",{className:"layerinfo-layeritem-preview"},n().createElement(c.Glyphicon,{glyph:l?"check":"unchecked"})),onClick:()=>o(l?E.filter((e=>e!==i)):[...E,i])}})),L=y()(l,{selected:!0});return n().createElement("div",{className:"layerinfo-content"},!t&&a?n().createElement("div",{className:"layerinfo-error-box alert-danger"},n().createElement("div",{className:"layerinfo-error-title"},n().createElement(p.Z,{msgId:a.title})),n().createElement("div",{className:"layerinfo-error-message"},n().createElement(p.Z,{msgId:a.message}))):null,(!t||r.syncingLayers)&&l.length>0?n().createElement("div",{className:"layerinfo-selectbutton-container"},n().createElement(d.Z,{className:"no-border",onClick:()=>o(L?[]:i)},n().createElement(c.Glyphicon,{glyph:L?"check":"unchecked"}),n().createElement(p.Z,{msgId:`layerInfo.${L?"deselect":"select"}All`}))):null,!t||r.syncingLayers?n().createElement("div",{className:"layerinfo-layerlist"+(l.length>0?"":"-empty")},n().createElement(m.Z,{items:b,emptyStateProps:{glyph:"1-layer",title:n().createElement(p.Z,{msgId:"layerInfo.noLayers"})}})):null,t&&!r.syncingLayers?n().createElement(u.Z,{size:100}):null)};var b=r(283604),L=r(152543),S=r(687753);const I=e=>e.controls?.layerinfo?.enabled,v=e=>e.layerinfo?.layers;var h=r(707366);const C="LAYERINFO:SYNC_LAYERS",O="LAYERINFO:SELECT_LAYERS",N="LAYERINFO:SET_LAYERS",A="LAYERINFO:UPDATE_LAYER",R="LAYERINFO:RESET_SYNC_STATUS",k="LAYERINFO:UPDATE_SYNC_STATUS",T="LAYERINFO:SET_ERROR",Z="LAYERINFO:LOADING",w=e=>({type:A,layer:e}),Y=e=>({type:T,error:e}),F=function(e){return{type:Z,name:arguments.length>1&&void 0!==arguments[1]?arguments[1]:"loading",value:e}};var _=r(630998),P=r.n(_),U=r(521923),z=r(49977),G=r(3674),x=r.n(G),M=r(478718),B=r.n(M),$=r(984596),j=r.n($),D=r(313311),H=r.n(D),V=r(513218),X=r.n(V),q=r(333101),J=r(612912),K=r(943650),Q=r(742178),W=r(797678);const ee=e=>B()(e,"id","name","title","description","type"),te=(e,t)=>e.ofType(S.dc,S.At,S.kM).filter((e=>{let{type:r,control:a,property:l,properties:n=[]}=e;return!!I(t.getState())&&"layerinfo"===a&&("enabled"===l||P()(x()(n),(e=>"enabled"===e))>-1||r===S.kM)})).switchMap((()=>{const e=t.getState(),r=(0,J.l2)(e);return z.Observable.of(F(!0),Y(),(e=>({type:N,layers:e}))(r.filter((e=>{let{type:t,group:r}=e;return("wms"===t||"wmts"===t)&&"background"!==r})).map((e=>({layerObj:e,...ee(e),selected:!1,syncStatus:"none"}))).reverse()),F(!1))})),re=(e,t)=>e.ofType(C).switchMap((e=>{let{layers:r}=e;const a={wms:e=>e.catalogURL?z.Observable.defer((()=>Q.ZP.getRecordById(e.catalogURL))):(0,K.kB)(e),wmts:e=>z.Observable.defer((()=>W.Z.getCapabilities(e.capabilitiesURL||e.url))).map((t=>{const r=j()(t.Capabilities?.Contents?.Layer??[]),a=H()(r,{"ows:Identifier":e.name});return{title:a?.["ows:Title"],_abstract:a?.["ows:Abstract"]}}))};return z.Observable.of((l=r.length,{type:R,totalCount:l}),F(!0,"syncingLayers"),Y(),...v(t.getState()).map((e=>w({id:e.id,syncStatus:"none"}))),...r.map((e=>w({id:e.id,selected:!1,syncStatus:"updating"})))).concat(z.Observable.merge(...r.map((e=>{let{layerObj:t}=e;return a[t.type](t).map((e=>{const r=e.title??e.dc?.title;return r?["success",{...t,title:X()(t.title)?{...t.title,default:r}:r,description:e._abstract??e.dc?.abstract??e.dc?.description}]:["error",t]})).catch((e=>(console.error(e),z.Observable.of(["error",t]))))}))).flatMap((e=>{let[t,r]=e;return z.Observable.of(w({layerObj:r,...ee(r),syncStatus:t}),(0,q.tV)(r.id,"layer",B()(r,"title","description")),{type:k})})).concat(z.Observable.of(F(!1,"syncingLayers"))).catch((()=>z.Observable.of(Y({title:"layerInfo.syncingLayersGeneralError.title",message:"layerInfo.syncingLayersGeneralError.message"}),F(!1,"syncingLayers")))));var l})),ae=(0,L.rx)("LayerInfo",{component:(0,s.connect)((0,o.zB)({enabled:I,layers:v,currentLocale:h.Pz,loading:e=>e.layerinfo?.loading,loadFlags:e=>e.layerinfo?.loadFlags,syncStatus:e=>e.layerinfo?.syncStatus,error:e=>e.layerinfo?.error}),{onSyncLayers:e=>({type:C,layers:e}),onSelectLayers:e=>({type:O,layers:e}),onClose:S.Xg.bind(null,"layerinfo","enabled",!1)})((e=>{let{enabled:t=!1,layers:r=[],currentLocale:a,loading:l=!1,loadFlags:s={},syncStatus:o={},error:c,onSyncLayers:i=(()=>{}),onSelectLayers:y,onClose:d=(()=>{})}=e;const m=l&&s.syncingLayers,u=r.filter((e=>{let{selected:t}=e;return t}));return n().createElement(b.Z,{bodyClassName:"layerinfo-dialog-body",loading:m,loadingText:l&&n().createElement(p.Z,{msgId:"layerInfo.updatingLayers",msgParams:o}),size:"sm",show:t,clickOutEnabled:!m,showClose:!m,onClose:()=>d(),title:n().createElement(p.Z,{msgId:"layerInfo.title"}),buttons:[{text:n().createElement(p.Z,{msgId:"layerInfo.syncButton"}),disabled:m||!u.length,onClick:()=>i(u)}]},n().createElement(E,{loading:l,loadFlags:s,error:c,layers:r,currentLocale:a,onSelectLayers:y}))})),containers:{TOC:{name:"LayerInfo",doNotHide:!0}},reducers:{layerinfo:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case O:return(0,U.t8)("layers",e.layers?.map((e=>({...e,selected:P()(t.layers,(t=>t===e.id))>-1}))),e);case N:return(0,U.t8)("layers",t.layers,e);case A:{const r=e.layers||[],a=t.layer?.id?P()(r,{id:t.layer.id}):-1;return(0,U.t8)("layers",r.map(((e,r)=>r===a?{...e,...t.layer}:e)),e)}case R:return(0,U.t8)("syncStatus",{updatedCount:"0",totalCount:`${t.totalCount}`},e);case k:{const t=parseInt(e.syncStatus?.updatedCount,10);return(0,U.t8)("syncStatus",{...e.syncStatus,updatedCount:`${t+1}`},e)}case T:return(0,U.t8)("error",t.error,e);case Z:return(0,U.t8)("loading"===t.name?"loading":`loadFlags.${t.name}`,t.value,(0,U.t8)("loading",t.value,e));default:return e}}},epics:a})}}]);