(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[5477],{403410:(e,t,r)=>{"use strict";r.d(t,{hn:()=>i,yg:()=>n,vD:()=>a,jJ:()=>s,oy:()=>o,W:()=>c,B1:()=>l,fU:()=>d,cY:()=>u});const i="ADDITIONALLAYER:ADD_ADDITIONAL_LAYERS",n="ADDITIONALLAYER:REMOVE_ADDITIONAL_LAYER",a="ADDITIONALLAYER:REMOVE_ALL_ADDITIONAL_LAYERS",s="ADDITIONALLAYER:UPDATE_ADDITIONAL_LAYER",o="ADDITIONALLAYER:UPDATE_OPTIONS_BY_OWNER",c=function(e,t){return{type:s,id:e,owner:t,actionType:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"override",options:arguments.length>3?arguments[3]:void 0}},l=(e,t)=>({type:o,owner:e,options:t}),d=function(){let{id:e,owner:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:n,id:e,owner:t}},u=e=>({type:a,owner:e})},731469:(e,t,r)=>{"use strict";r.d(t,{y:()=>a});var i=r(487758),n=r(883953);const a=function(){let{resourceId:e,layer:t,resources:r,inverse:a=!1,offset:s=0}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const o=e??((e,t)=>{let{inverse:r,offset:i}=t;return`${e.id};inverse:${r};offset:${i}`})(t,{inverse:a,offset:s}),c=r?.find((e=>e.id===o));return c?.data?.collection?Promise.resolve(c):{wfs:()=>(0,i.Bm)(t.url,t.name,{outputFormat:"application/json",srsname:"EPSG:4326"}).then((e=>{let{data:t}=e;return t})),vector:()=>Promise.resolve({type:"FeatureCollection",features:t.features??[]})}[t.type]().then((e=>a?(0,n.Zr)(e,{offset:s}):e)).then((e=>({id:o,updated:!0,data:{type:t.type,name:t.name,title:t.title,url:t.url,id:t.id,collection:e}})))}},306624:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>se});var i=r(124852),n=r.n(i),a=r(171703),s=r(152543),o=r(22222),c=r(625641);const l="MAP_VIEWS:SETUP_VIEWS",d="MAP_VIEWS:ACTIVATE_VIEWS",u="MAP_VIEWS:HIDE_VIEWS",p="MAP_VIEWS:SELECT_VIEW",f="MAP_VIEWS:UPDATE_VIEWS",v="MAP_VIEWS:UPDATE_RESOURCES",m="MAP_VIEWS:SET_PREVIOUS_VIEW",y=e=>({type:u,hide:e}),I=e=>({type:v,resources:e}),E=e=>({type:m,view:e});var g=r(926854),w=r(883953),h=r(455877),A=r.n(h);const b={};var O=r(612912),M=r(707366),V=r(49977),D=r(441609),S=r.n(D),L=r(747037),T=r.n(L),P=r(687753),R=r(403410),_=r(546952),U=r(710187),k=r(941846),W=r(333101),N=r(306692),C=r(904160),z=r(731469),Y=r(101092);const j=(0,C.VI)(),B=["drawer","metadataexplorer","print","queryPanel"],F={updateMapViewsLayers:(e,t)=>e.ofType(p,f,d,u,l,g.ok,U.Wz).filter((()=>{const e=t.getState();return!(0,k.U3)(e)&&(0,k.Ob)(e)})).switchMap((e=>{const r=t.getState(),i=(0,k.Uc)(r),n=(0,k.uz)(r),{layers:a=[],mask:s={},id:o}=n||{};if(e.type!==U.Wz&&j(i?.layers||[],a)&&j(i?.mask||{},s))return V.Observable.of(E(n));const c=(0,k.NJ)(r);return((e,t)=>{const r=t.getState(),i=(0,k.NJ)(r),{layers:n=[],mask:a={}}=e||{};return V.Observable.defer((()=>{const e=(0,O.l2)(r),t=T()(a.resourceId)?(0,k.MB)(r,a.resourceId):void 0,s=e?.find((e=>e.id===t?.data?.id)),o=[{resource:t,options:a,vectorLayer:s},...n.filter((e=>{let{clippingLayerResourceId:t}=e;return t})).map((t=>{let{clippingLayerResourceId:i}=t;const n=T()(i)?(0,k.MB)(r,i):void 0,a=e?.find((e=>e.id===n?.data?.id));return{resource:n,vectorLayer:a}}))];return Promise.all(o.filter((e=>{let{resource:t}=e;return t})).map((e=>{let{resource:t,options:r,vectorLayer:n}=e;return(0,z.y)({resourceId:t.id,layer:{...n?.features&&{features:n?.features},...t.data},inverse:r?.inverse,offset:r?.offset,resources:i}).then((e=>e)).catch((()=>({id:t.id,error:!0})))})))}))})(n,t).switchMap((e=>{const t=e.filter((e=>{let{error:t}=e;return!t})),i=(0,O.l2)(r),l=t.filter((e=>e.updated)),d=T()(s.resourceId)&&t.find((e=>e.id===s.resourceId));return V.Observable.of(...l.length>0?[I(c.map((e=>{const{updated:t,...r}=l.find((t=>t.id===e.id))||{};return S()(r)?e:r})))]:[],E(n),(0,R.fU)({owner:w.ex}),...a.filter((e=>!!i.find((t=>t.id===e.id)))).map((e=>{const r=T()(e.clippingLayerResourceId)&&t.find((t=>t.id===e.clippingLayerResourceId)),i=T()(e.clippingPolygonFeatureId)&&(0,w.er)(r?.data?.collection?.features)?.find((t=>t.id===e.clippingPolygonFeatureId));return(0,R.W)(e.id,w.ex,"override",{...e,clippingPolygon:i})})),...(0,Y.c0)(r)&&d?.data?.collection?.features?[(0,R.W)(`${o}-mask`,w.ex,"overlay",{id:`${o}-mask`,type:"vector",features:d.data.collection.features,visibility:!0,style:{format:"geostyler",body:{name:"",rules:[{name:"",symbolizers:[{kind:"Fill",color:"#ffffff",fillOpacity:0}]}]}}})]:[])}))})),removeMapViewsLayersWhenDeactivated:e=>e.ofType(d).filter((e=>!e.active)).switchMap((()=>V.Observable.of((0,R.fU)({owner:w.ex}),E()))),closePluginWhenMapViewsActivate:(e,t)=>e.ofType(d).filter((e=>e.active)).switchMap((()=>{const e=t.getState();return B.find((t=>!!e?.controls?.[t]?.enabled))?V.Observable.of(...B.map((e=>(0,P.Xg)(e,"enabled",!1)))):V.Observable.empty()})),hideMapViewsBasedOnLayoutChanges:(e,t)=>e.ofType(P.kM,P.At,_.ur,g.ok,W.R8,N.sF).filter((e=>[_.ur,g.ok,W.R8,N.sF].includes(e.type)||B.includes(e.control))).switchMap((()=>{const e=t.getState();return B.find((t=>!!e?.controls?.[t]?.enabled))||e?.featuregrid?.open?V.Observable.of((0,R.fU)({owner:w.ex}),E(),y(!0)):V.Observable.of(y(!1))}))};var x=r(89518);function $(){return $=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var i in r)Object.prototype.hasOwnProperty.call(r,i)&&(e[i]=r[i])}return e},$.apply(this,arguments)}const J=(0,i.lazy)((()=>r.e(5128).then(r.bind(r,75128)))),Z={mapviews:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case g.ok:return{initialized:!0,hide:e?.hide,updateUUID:A()(),...t?.config?.[w.TI]||{}};case p:return{...e,selectedId:t.id};case f:return{...e,views:[...t.views]};case v:return{...e,resources:[...t.resources]};case d:return{...e,active:t.active};case u:return{...e,hide:t.hide};case l:return e.initialized?e:{initialized:!0,updateUUID:A()(),...t.config??{}};case m:return{...e,previousView:t.view};default:return e}}},G=(0,a.connect)((0,o.P1)([k.o,k.iW,O.l2,M.Pz,e=>e?.mapConfigRawData,k.NJ,k.Ob,k.U3,k.pr,k.$O],((e,t,r,i,n,a,s,o,c,l)=>({selectedId:e,views:t,layers:r.filter((e=>{let{group:t}=e;return"background"!==t})),locale:i,mapConfig:n,resources:a,active:s,hide:o,initialized:c,updateUUID:l}))),{onSelectView:e=>({type:p,id:e}),onUpdateViews:e=>({type:f,views:e}),onSetup:e=>({type:l,config:e}),onUpdateResources:I,onHideViews:y})((function(e){let{pluginName:t,mapConfig:r,onSetup:a=(()=>{}),active:o,onHideViews:l,initialized:d,updateUUID:u,...p}=e;return function(e,t){let{reducers:r,epics:n,removeReducers:a,muteEpics:o}=t,l=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[];(0,i.useEffect)((()=>{const t=(0,s.BA)(e),i=(0,c.bh)();return r&&Object.keys(r).forEach((e=>i.storeManager.addReducer(e,r[e]))),n&&(i.storeManager.addEpics(t,n),i.storeManager.unmuteEpics(t)),()=>{r&&a&&Object.keys(r).forEach((e=>i.storeManager.removeReducer(e))),n&&o&&i.storeManager.muteEpics(t)}}),l)}(t,{reducers:Z,epics:F}),(0,i.useEffect)((()=>{!d&&r?.[w.TI]&&a(r[w.TI])}),[r?.[w.TI],d]),o?n().createElement(i.Suspense,{fallback:n().createElement("div",{className:"ms-map-views"},n().createElement("div",{className:"ms-map-views-wrapper"},n().createElement("div",{className:"ms-map-views-header",style:{justifyContent:"center"}},n().createElement(x.Z,{size:30}))))},n().createElement(J,$({key:u},p))):null})),H=G;var q=r(630294),X=r(23888),K=r(804504),Q=r(36549),ee=r(945395),te=r(510644);const re=(0,Q.Z)(X.Z);(0,ee.Fd)(w.TI,(e=>(0,w.U)({active:(0,k.Ob)(e),selectedId:(0,k.o)(e),views:(0,k.iW)(e),resources:(0,k.NJ)(e)},(0,O.l2)(e))));const ie="MapViews",ne=(0,a.connect)((0,o.P1)([te.jl],(e=>({pluginName:ie,edit:!!e}))))(H),ae=(0,a.connect)((0,o.P1)([k.Ob,te.jl,k.iW],((e,t,r)=>({active:e,visible:!!t||!t&&(r?.length||0)}))),{onClick:e=>({type:d,active:e})})((function(e){let{active:t,onClick:r,visible:i,menuItem:a}=e;if(!i)return null;const s=t?"mapViews.deactivateMapViews":"mapViews.activateMapViews";return a?n().createElement(q.MenuItem,{active:t,onClick:()=>r(!t)},n().createElement(q.Glyphicon,{glyph:"map-view"}),n().createElement(K.Z,{msgId:s})):n().createElement(re,{className:"square-button",bsStyle:t?"primary":"tray",active:t,onClick:()=>r(!t),tooltipId:s,tooltipPosition:"left"},n().createElement(q.Glyphicon,{glyph:"map-view"}))})),se=(0,s.rx)(ie,{component:()=>null,containers:{SidebarMenu:{name:"mapViews",position:2e3,tool:ae,priority:1},BurgerMenu:{name:"mapviews",position:9,tool:()=>n().createElement(ae,{menuItem:!0}),priority:2},Map:{name:ie,Tool:ne,alwaysRender:!0}}})}}]);