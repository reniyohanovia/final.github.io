(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[9032],{403410:(e,o,t)=>{"use strict";t.d(o,{hn:()=>n,yg:()=>a,vD:()=>r,jJ:()=>i,oy:()=>l,W:()=>s,B1:()=>c,fU:()=>d,cY:()=>p});const n="ADDITIONALLAYER:ADD_ADDITIONAL_LAYERS",a="ADDITIONALLAYER:REMOVE_ADDITIONAL_LAYER",r="ADDITIONALLAYER:REMOVE_ALL_ADDITIONAL_LAYERS",i="ADDITIONALLAYER:UPDATE_ADDITIONAL_LAYER",l="ADDITIONALLAYER:UPDATE_OPTIONS_BY_OWNER",s=function(e,o){return{type:i,id:e,owner:o,actionType:arguments.length>2&&void 0!==arguments[2]?arguments[2]:"override",options:arguments.length>3?arguments[3]:void 0}},c=(e,o)=>({type:l,owner:e,options:o}),d=function(){let{id:e,owner:o}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{type:a,id:e,owner:o}},p=e=>({type:r,owner:e})},733210:(e,o,t)=>{"use strict";t.r(o),t.d(o,{default:()=>$});var n={};t.r(n),t.d(n,{mapEditorConfigureMapState:()=>A});var a=t(124852),r=t.n(a),i=t(171703),l=t(22222),s=t(152543),c=t(49977),d=t(545542),p=t(926854),m=t(403410),u=t(333101),g=t(687753),f=t(513218),E=t.n(f),v=t(234228);const A=e=>e.ofType(d.nr).switchMap((e=>{let o,{map:t}=e;if(E()(t)){const e=JSON.parse(JSON.stringify(t.data));o=(0,p.H0)({map:e,version:2},t.id)}else{let e=!!t&&t||"new";const{configUrl:n}=(0,v.cF)({mapId:e,config:null});e="new"===e?null:e,o=(0,p.JZ)(n,e)}return c.Observable.from([(0,m.cY)(),(0,g.fV)(),(0,u.nN)(),o])}));var w=t(521923);const b={};var h=t(793870),y=t(45697),T=t.n(y);const C={desktop:[{name:"Map",cfg:{mapOptions:{openlayers:{interactions:{pinchRotate:!1,altShiftDragRotate:!1},attribution:{container:"#footer-attribution-container"}},leaflet:{attribution:{container:"#footer-attribution-container"}}},toolsOptions:{scalebar:{container:"#footer-scalebar-container"}}}},"DrawerMenu","Annotations","BackgroundSelector",{name:"Identify",cfg:{showHighlightFeatureButton:!0,viewerOptions:{container:"{context.ReactSwipe}"}},override:{Toolbar:{position:11}}},{name:"Locate",override:{Toolbar:{alwaysVisible:!0}}},{name:"TOC",cfg:{activateQueryTool:!1,activateAddLayerButton:!0,activateAddGroupButton:!0,activateMetedataTool:!1,addLayersPermissions:!0,removeLayersPermissions:!0,sortingPermissions:!0,addGroupsPermissions:!0,removeGroupsPermissions:!0,activateLayerFilterTool:!1}},"AddGroup","MapFooter","TOCItemsSettings","MapImport","MapExport",{name:"Settings",cfg:{wrap:!0}},{name:"MetadataExplorer",cfg:{wrap:!0}},{name:"CRSSelector",cfg:{additionalCRS:{},filterAllowedCRS:["EPSG:4326","EPSG:3857"],allowedRoles:["ADMIN"]}},{name:"Search",cfg:{withToggle:["max-width: 768px","min-width: 768px"]}},{name:"Toolbar",id:"NavigationBar",cfg:{id:"navigationBar"}},"ScaleBox",{name:"ZoomAll",override:{Toolbar:{alwaysVisible:!0}}},{name:"MapLoading",override:{Toolbar:{alwaysVisible:!0}}},{name:"ZoomIn",override:{Toolbar:{alwaysVisible:!0}}},{name:"ZoomOut",override:{Toolbar:{alwaysVisible:!0}}},"OmniBar","BurgerMenu","Expander","Undo","Redo",{name:"SearchServicesConfig",cfg:{containerClassName:"map-editor-search-config"}},"FeedbackMask"]};var I=t(867076),S=t(535937),O=t.n(S),D=t(859518),L=t(6760),k=t(804504),R=t(640924),M=t(274363),N=t(612912),x=t(4143),Z=t(945395),B=t(57677),_=t(835516),P=t(389539);const Y=(0,l.P1)(N.l2,N.Bt,x.Mz,Z.UC,B.I,B._,M.Od,((e,o,t,n,a,r,i)=>({layers:e,groups:o,backgrounds:t,additionalOptions:n,textSearchConfig:a,bookmarkSearchConfig:r,map:i}))),V=(0,I.compose)((0,i.connect)(Y),(0,I.defaultProps)({confirmTitle:r().createElement(k.Z,{msgId:"mapEditor.confirmExitTitle"}),confirmContent:r().createElement(k.Z,{msgId:"mapEditor.confirmExitContent"})}),(0,I.withHandlers)({onClick:e=>{let{hide:o,owner:t}=e;return()=>{o(t)}},save:e=>{let{save:o,owner:t,map:n,layers:a,groups:r,backgrounds:i,textSearchConfig:l,bookmarkSearchConfig:s,additionalOptions:c}=e;return()=>{const e=_.default.saveMapConfiguration(n,a,r,i,l,s,c);return o({...e.map,layers:e.map.layers.map((e=>O()(e,(e=>void 0!==e&&!(0,P.isNull)(e)))))},t)}}}),L.Z,(0,I.withHandlers)({hide:e=>{let{onClick:o}=e;return function(){return o(...arguments)}}})),F=(0,I.compose)((0,i.connect)(null,{onResize:D.Ju}),(0,R.Z)({debounceTime:150}));var G=t(283604),z=t(466737);const U=F(h.Z),J=function(){let{open:e=!1,pluginsConfig:o=C,hide:t=(()=>{}),save:n=(()=>{})}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},{plugins:a}=arguments.length>1?arguments[1]:void 0;return r().createElement(z.Z,null,r().createElement(G.Z,{title:r().createElement(k.Z,{msgId:"mapEditor.modalTitle"}),show:e,clickOutEnabled:!1,onClose:t,size:"lg",showFullscreen:!0,showClose:!1,bodyClassName:"map-editor-modal-body",initialFullscreenState:"expanded",modalClassName:"map-editor-modal",buttons:[{text:r().createElement(k.Z,{msgId:"cancel"}),bsSize:"sm",onClick:t},{text:r().createElement(k.Z,{msgId:"ok"}),bsSize:"sm",onClick:n}]},r().createElement(U,{pluginsConfig:o,plugins:a})))};J.contextTypes={plugins:T().object};const H=V(J);var j=t(59810),q=t(227361),W=t.n(q);const Q=(0,i.connect)(null,{toggleAdvancedEditing:d.$Z})((e=>{let{toggleAdvancedEditing:o=(()=>{}),map:t={}}=e;return r().createElement(j.Z,{bsStyle:"primary",glyph:"pencil",tooltipId:"geostory.contentToolbar.advancedMapEditor",onClick:()=>{const{id:e,...n}=t;o("inlineEditor",{data:n,id:e})}})})),$=(0,s.rx)("MapEditor",{component:(0,i.connect)((0,l.zB)({open:e=>W()(e,"mapEditor.open"),owner:e=>W()(e,"mapEditor.owner")}),{hide:d.Cp,save:d.a1})(H),containers:{GeoStory:{name:"MapEditor",target:"mapEditorToolbar",Component:Q}},reducers:{mapEditor:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,o=arguments.length>1?arguments[1]:void 0;switch(o.type){case d.nr:return(0,w.qC)((0,w.t8)("open",!0),(0,w.t8)("owner",o.owner))(e);case d.B8:return(0,w.qC)((0,w.t8)("open",!1),(0,w.t8)("owner",void 0))(e);default:return e}}},epics:n})}}]);