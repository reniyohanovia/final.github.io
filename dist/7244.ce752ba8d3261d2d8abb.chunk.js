(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[7244],{994345:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var o=n(867076),r=n(36549),a=n(832979);const l=(0,o.compose)((0,o.withProps)((e=>{let{renderPopover:t,popoverOptions:n,...o}=e;return t?{renderPopover:t,popoverOptions:n,...o}:{...o}})),(0,o.branch)((function(){let{renderPopover:e,popoverOptions:t}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e&&!!t}),a.Z,r.Z))},832979:(e,t,n)=>{"use strict";n.d(t,{Z:()=>m});var o=n(124852),r=n.n(o),a=n(118438),l=n(630294),i=n(957557),s=n.n(i),d=n(180307),c=n.n(d);function p(){return p=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},p.apply(this,arguments)}const m=e=>class extends r().Component{render(){let t=null;const{popoverOptions:n,keyProp:o,...i}=this.props;return r().createElement("span",{className:"mapstore-info-popover"},r().createElement(e,p({},s()(i,["renderPopover","tooltipId"]),{key:o,ref:e=>{t=e}})),r().createElement(a.Z,{placement:n.placement,shouldUpdatePosition:!0,show:!0,target:()=>c().findDOMNode(t)},r().createElement(l.Popover,n.props,n.content)))}}},712845:(e,t,n)=>{"use strict";n.d(t,{Z:()=>p});var o=n(124852),r=n.n(o),a=n(630294),l=n(23888);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},i.apply(this,arguments)}const s={width:0,padding:0,borderWidth:0},d={},c=e=>e?d:s,p=(0,o.forwardRef)(((e,t)=>{let{disabled:n,id:o,visible:s,onClick:d,glyph:p,active:m,className:g="square-button-md",...u}=e;return r().createElement(l.Z,i({ref:t},u,{bsStyle:m?"success":"primary",disabled:n,id:`fg-${o}`,style:c(s),className:g,onClick:()=>!n&&d()}),r().createElement(a.Glyphicon,{glyph:p}))}))},651641:(e,t,n)=>{"use strict";n.r(t),n.d(t,{default:()=>Ae});var o=n(124852),r=n.n(o),a=n(171703),l=n(22222),i=n(12838),s=n(227361),d=n.n(s),c=n(478718),p=n.n(c),m=n(618446),g=n.n(m),u=n(867076),h=n(732833),f=n(496259),b=n(664190),v=n(756435),y=n(112008),E=n(306692),C=n(350126),w=n(254020),S=n(820709),k=n(16246),P=n(466737),F=n(804504),x=n(72320),T=n(544401),I=n(630294),Z=n(472986),O=n.n(Z),N=n(23888),G=n(893379),D=n.n(G),z=n(753263);D()(z.Z,{insert:"head",singleton:!1}),z.Z.locals;var B=n(189734),M=n.n(B),j=n(994345),A=n(712845),V=n(272124),L=n(366183);D()(L.Z,{insert:"head",singleton:!1}),L.Z.locals;var R=n(294184),q=n.n(R);function Y(){return Y=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Y.apply(this,arguments)}const K=(0,o.forwardRef)(((e,t)=>{let{disabled:n,id:a,visible:l,onClick:i,active:s,title:d,buttonClassName:c="square-button-md",menuStyle:p={},className:m,children:g,onMount:u=(()=>{}),...h}=e;const[b,v]=(0,o.useState)(!1);return(0,o.useEffect)((()=>{"function"==typeof u&&u()}),[]),!!l&&r().createElement(f.Z,null,r().createElement(I.Dropdown,{className:q()({"split-button":!0,...m?{[m]:!0}:{}}),open:b,onToggle:(e,t)=>{t&&v(e)}},r().createElement(I.Button,Y({ref:t,id:a,onClick:()=>!n&&i(),className:c,bsStyle:s?"success":"primary"},h),d),r().createElement(I.Dropdown.Toggle,{bsStyle:s?"success":"primary"}),r().createElement(I.Dropdown.Menu,{style:p,onSelect:e=>{["number","text"].includes(e.target.type)?v(!0):v(!b)}},g)))}));var W=n(743129);function H(){return H=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},H.apply(this,arguments)}const Q=(0,j.Z)(A.Z),U=(0,j.Z)(K),$=(e,t)=>e?"featuregrid.toolbar.stopDrawGeom":t?"featuregrid.toolbar.drawGeom":"featuregrid.toolbar.addGeom",J=e=>{let{saving:t,saved:n}=e;return t||n?"featuregrid.toolbar.saving":"featuregrid.toolbar.saveChanges"},X={editMode:e=>{let{disabled:t,mode:n,isEditingAllowed:o,events:a={}}=e;return r().createElement(Q,{id:"edit-mode",keyProp:"edit-mode",tooltipId:"featuregrid.toolbar.editMode",disabled:t,visible:"VIEW"===n&&o,onClick:a.switchEditMode,glyph:"pencil"})},filter:e=>{let{isFilterActive:t=!1,viewportFilter:n,disabled:o,isSearchAllowed:a,mode:l,showAdvancedFilterButton:i=!0,events:s={}}=e;return r().createElement(Q,{id:"search",keyProp:"search",tooltipId:"featuregrid.toolbar.advancedFilter",active:t||n,disabled:o||!a,visible:"VIEW"===l&&i,onClick:s.showQueryPanel,glyph:"filter"})},zoomAll:e=>{let{disabled:t,disableZoomAll:n=!1,mode:o,events:a={}}=e;return r().createElement(Q,{id:"zoom-all",keyProp:"zoom-all",tooltipId:"featuregrid.toolbar.zoomAll",disabled:t||n,visible:"VIEW"===o,onClick:a.zoomAll,glyph:"zoom-to"})},backToViewMode:e=>{let{disabled:t,mode:n,hasChanges:o,hasNewFeatures:a,events:l={}}=e;return r().createElement(Q,{id:"back-view",keyProp:"back-view",tooltipId:"featuregrid.toolbar.quitEditMode",disabled:t,visible:"EDIT"===n&&!o&&!a,onClick:l.switchViewMode,glyph:"arrow-left"})},addFeature:e=>{let{disabled:t,mode:n,hasNewFeatures:o,hasChanges:a,hasSupportedGeometry:l=!0,events:i={}}=e;return r().createElement(Q,{id:"add-feature",keyProp:"add-feature",tooltipId:"featuregrid.toolbar.addNewFeatures",disabled:t,visible:"EDIT"===n&&!o&&!a&&l,onClick:i.createFeature,glyph:"row-add"})},drawFeature:e=>{let{isDrawing:t=!1,disabled:n,isSimpleGeom:o,mode:a,selectedCount:l,hasGeometry:i,hasSupportedGeometry:s=!0,events:d={}}=e;return r().createElement(Q,{id:"draw-feature",keyProp:"draw-feature",tooltipId:$(t,o),disabled:n,visible:"EDIT"===a&&1===l&&(!i||i&&!o)&&s,onClick:d.startDrawingFeature,active:t,glyph:"pencil-add"})},removeFeature:e=>{let{disabled:t,mode:n,selectedCount:o,hasChanges:a,hasNewFeatures:l,events:i={}}=e;return r().createElement(Q,{id:"remove-features",keyProp:"remove-features",tooltipId:"featuregrid.toolbar.deleteSelectedFeatures",disabled:t,visible:"EDIT"===n&&o>0&&!a&&!l,onClick:i.deleteFeatures,glyph:"trash-square"})},saveFeature:e=>{let{saving:t=!1,saved:n=!1,disabled:o,mode:a,hasChanges:l,hasNewFeatures:i,events:s={}}=e;return r().createElement(Q,{id:"save-feature",keyProp:"save-feature",tooltipId:J({saving:t,saved:n}),disabled:t||n||o,visible:"EDIT"===a&&l||i,active:n,onClick:s.saveChanges,glyph:"floppy-disk"})},cancelEditing:e=>{let{disabled:t,mode:n,hasChanges:o,hasNewFeatures:a,events:l={}}=e;return r().createElement(Q,{id:"cancel-editing",keyProp:"cancel-editing",tooltipId:"featuregrid.toolbar.cancelChanges",disabled:t,visible:"EDIT"===n&&o||a,onClick:l.clearFeatureEditing,glyph:"remove-square"})},deleteGeometry:e=>{let{disabled:t,mode:n,hasGeometry:o,selectedCount:a,hasSupportedGeometry:l=!0,events:i={}}=e;return r().createElement(Q,{id:"delete-geometry",keyProp:"delete-geometry",tooltipId:"featuregrid.toolbar.deleteGeometry",disabled:t,visible:"EDIT"===n&&o&&1===a&&l,onClick:i.deleteGeometry,glyph:"polygon-trash"})},gridSettings:e=>{let{disabled:t,isColumnsOpen:n,selectedCount:o,mode:a,events:l={}}=e;return r().createElement(Q,{id:"grid-settings",keyProp:"grid-settings",tooltipId:"featuregrid.toolbar.hideShowColumns",disabled:t,active:n,visible:o<=1&&"VIEW"===a,onClick:l.settings,glyph:"features-grid-set"})},syncGridFilterToMap:e=>{let{disabled:t,isSyncActive:n=!1,showSyncOnMapButton:o=!0,events:a={},syncPopover:l={showPopoverSync:!0,dockSize:"32.2%"}}=e;return r().createElement(Q,{id:"grid-map-filter",keyProp:"grid-map-filter",tooltipId:"featuregrid.toolbar.syncOnMap",disabled:t,active:n,visible:o,onClick:a.sync,glyph:"map-filter",renderPopover:l.showPopoverSync,popoverOptions:!t&&{placement:"top",content:r().createElement("span",null,r().createElement("p",null,r().createElement(F.Z,{msgId:"featuregrid.toolbar.synchPopoverText"})),r().createElement("p",null,r().createElement(I.Checkbox,{checked:l.showAgain,onClick:a.toggleShowAgain},r().createElement(F.Z,{msgId:"featuregrid.toolbar.notShowAgain"})))),props:{id:"sync-popover",title:r().createElement("div",null,r().createElement(F.Z,{msgId:"featuregrid.toolbar.synchPopoverTitle"}),r().createElement("button",{onClick:()=>{if(l.showAgain)try{(0,V.ac)().setItem("showPopoverSync",!1)}catch(e){console.error(e)}a.hideSyncPopover()},className:"close"},r().createElement(I.Glyphicon,{className:"pull-right",glyph:"1-close"}))),style:{bottom:l.dockSize}}}})},syncTimeParameter:e=>{let{timeSync:t,showTimeSyncButton:n=!1,events:o={}}=e;return r().createElement(Q,{id:"timeSync-button",keyProp:"fg-timeSync-button",tooltipId:t?"featuregrid.toolbar.disableTimeSync":"featuregrid.toolbar.enableTimeSync",visible:n,active:t,onClick:()=>o.setTimeSync&&o.setTimeSync(!t),glyph:"time"})},snapToFeature:e=>{let{snapping:t,availableSnappingLayers:n=[],isSnappingLoading:o,snappingConfig:a,mode:l,mapType:i,editorHeight:s,pluginCfg:d,events:c={}}=e;return r().createElement(U,{id:"snap-button",keyProp:"snap-button",tooltipId:t?"featuregrid.toolbar.disableSnapping":"featuregrid.toolbar.enableSnapping",visible:"EDIT"===l&&(d?.snapTool??!0)&&"openlayers"===i,onClick:()=>{c.toggleSnapping&&c.toggleSnapping(!t)},onMount:()=>!a&&c.setSnappingConfig&&c.setSnappingConfig(null,null,d),title:o?r().createElement(O(),{spinnerName:"ball-beat",overrideSpinnerClassName:"spinner",key:"loadingSpinner",noFadeIn:!0}):r().createElement(I.Glyphicon,{glyph:"magnet"}),tooltipPosition:"top",className:"snap-tool",buttonClassName:"square-button-md no-border",menuStyle:{maxHeight:`calc(${Math.round(100*s)}vh - 50px)`,overflowY:"auto"},active:!!t,pullLeft:!0},r().createElement(r().Fragment,null,r().createElement("label",{className:"control-label"},r().createElement(F.Z,{msgId:"featuregrid.toolbar.snapToLayer"})),r().createElement(W.ZP,{clearable:!1,escapeClearsValue:!1,options:n,onChange:e=>c.setSnappingLayer(e.value),value:n.find((e=>e.active))})),r().createElement("label",{className:"control-label"},r().createElement(F.Z,{msgId:"featuregrid.toolbar.snappingSettings.header"})),r().createElement(I.FormGroup,null,r().createElement(I.Col,{xs:6},r().createElement(I.Checkbox,{key:"edge",checked:a?.edge??d?.snapConfig?.edge??!0,inline:!0,onChange:e=>c.setSnappingConfig(e.target.checked,"edge",d)},r().createElement(F.Z,{msgId:"featuregrid.toolbar.snappingSettings.edge"}))),r().createElement(I.Col,{xs:6},r().createElement(I.Checkbox,{key:"vertex",checked:a?.vertex??d?.snapConfig?.vertex??!0,inline:!0,onChange:e=>c.setSnappingConfig(e.target.checked,"vertex",d)},r().createElement(F.Z,{msgId:"featuregrid.toolbar.snappingSettings.vertex"}))),r().createElement("span",{className:"clearfix"})),r().createElement(I.FormGroup,null,r().createElement(I.Col,{xs:7},r().createElement("span",{className:"inline-control-label"},r().createElement(F.Z,{msgId:"featuregrid.toolbar.snappingSettings.pixelTolerance"}))),r().createElement(I.Col,{xs:5},r().createElement(I.FormControl,{key:"pixelTolerance",type:"number",onChange:e=>c.setSnappingConfig(e.target.value,"pixelTolerance",d),defaultValue:a?.pixelTolerance??d?.snapConfig?.pixelTolerance??10})),r().createElement("span",{className:"clearfix"})),r().createElement(I.FormGroup,null,r().createElement(I.Col,{xs:7},r().createElement("span",{className:"inline-control-label"},r().createElement(F.Z,{msgId:"featuregrid.toolbar.snappingSettings.loadingStrategy"}))),r().createElement(I.Col,{xs:5},r().createElement(I.FormControl,{componentClass:"select",defaultValue:a?.strategy??d?.snapConfig?.strategy??"bbox",onChange:e=>c.setSnappingConfig(e.target.value,"strategy",d)},r().createElement("option",{value:"bbox"},"bbox"),r().createElement("option",{value:"all"},"all"))),r().createElement("span",{className:"clearfix"})))},viewportFilter:e=>{let{viewportFilter:t,isFilterByViewportSupported:n,pluginCfg:o,events:a={}}=e;return r().createElement(Q,{id:"viewportFilter-button",keyProp:"viewportFilter-button",tooltipId:t?"featuregrid.toolbar.disableViewportFilter":"featuregrid.toolbar.enableViewportFilter",visible:(o?.showFilterByViewportTool??!0)&&n,onClick:()=>{a.setViewportFilter&&a.setViewportFilter(!t)},glyph:"viewport-filter",tooltipPosition:"top",className:"viewportFilter-tool",buttonClassName:"square-button-md no-border",active:t??o?.filterByViewport,pullLeft:!0})}},_=[{name:"editMode",Component:X.editMode},{name:"backToViewMode",Component:X.backToViewMode},{name:"addFeature",Component:X.addFeature},{name:"drawFeature",Component:X.drawFeature},{name:"removeFeature",Component:X.removeFeature},{name:"saveFeature",Component:X.saveFeature},{name:"cancelEditing",Component:X.cancelEditing},{name:"deleteGeometry",Component:X.deleteGeometry},{name:"filter",Component:X.filter},{name:"viewportFilter",Component:X.viewportFilter},{name:"zoomAll",Component:X.zoomAll},{name:"gridSettings",position:900,Component:X.gridSettings},{name:"snap",position:1300,Component:X.snapToFeature},{name:"syncGridFilterToMap",position:1100,Component:X.syncGridFilterToMap},{name:"syncTimeParameter",Component:X.syncTimeParameter}].map(((e,t)=>{let{position:n,...o}=e;return{...o,position:n??t}}));var ee=n(101092),te=n(452341);const ne={onGridSort:(e,t)=>(0,E.DY)(e,t),onAddFilter:function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return(0,E.a8)(e)},onTemporaryChanges:e=>(0,E.aT)(e),onGridRowsUpdated:(e,t)=>{let{fromRow:n,toRow:o,updated:r}=e,a=(l=n,i=o,Array.from({length:i+1-l},((e,t)=>t+l))).map((e=>t(e))).filter((e=>Object.keys(r||{}).filter((t=>e.properties[t]!==r[t])).length>0));var l,i;return(0,E.nG)(a,r)},onRowsToggled:(e,t)=>(0,E.KD)(e.map((e=>t(e.rowIdx))),!1),onRowsSelected:(e,t)=>(0,E.KD)(e.map((e=>t(e.rowIdx))),!0),onRowsDeselected:(e,t)=>(0,E.gr)(e.map((e=>t(e.rowIdx))))};var oe=n(813292),re=n.n(oe),ae=n(859518),le=n(401811);const ie=[{name:"",key:"geometry",width:35,frozen:!0,events:{onClick:function(e,t,n){let{crs:o,maxZoom:r}=arguments.length>3&&void 0!==arguments[3]?arguments[3]:{};return e.geometry?(0,ae.Px)(re()(e),o||"EPSG:4326",r):{type:"NONE"}}},formatter:function(){let{value:e}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return e?r().createElement(le.Z,{placement:"top",overlay:r().createElement(I.Tooltip,{id:"fe-zoom-object"},r().createElement(F.Z,{msgId:"featuregrid.zoomObject"}))},r().createElement(I.Glyphicon,{glyph:"zoom-to"})):r().createElement(le.Z,{placement:"top",overlay:r().createElement(I.Tooltip,{id:"fe-save-features"},r().createElement(F.Z,{msgId:"featuregrid.missingGeometry"}))},r().createElement(I.Glyphicon,{glyph:"exclamation-mark"}))}}],se={onPageChange:(e,t)=>(0,E.oO)(e,t),moreFeatures:E.zd};var de=n(612132),ce=n(296252);const pe={createFeature:()=>(0,E.lx)([{}]),saveChanges:()=>(0,E.$S)(),clearFeatureEditing:()=>(0,E.Pv)("clearConfirm",!0),deleteGeometry:()=>(0,E.pX)(),deleteFeatures:()=>(0,E.Pv)("deleteConfirm",!0),settings:()=>(0,E.Pv)("settings"),switchEditMode:()=>(0,E.lg)(),startEditingFeature:()=>(0,E.sY)(),startDrawingFeature:()=>(0,E.kA)(),switchViewMode:()=>(0,E.nY)(),onClose:()=>(0,E.JK)(),showQueryPanel:()=>(0,E.MY)(),zoomAll:()=>(0,E.ve)(),sync:()=>(0,de.XO)(),setTimeSync:E.Yb,hideSyncPopover:()=>(0,E.Pl)(),toggleShowAgain:()=>(0,E.Ib)(),toggleSnapping:()=>(0,ce.oJ)(),setViewportFilter:e=>(0,E.dM)(e),setSnappingLayer:e=>(0,ce.k4)(e),setSnappingConfig:(e,t,n)=>(0,ce.Li)(e,t,n)},me=ne,ge=ie,ue=se,he=pe,fe=(0,a.connect)((e=>({attributes:(0,S.o)(e)})),{onChange:(e,t)=>(0,E.an)(e,"hide",t)})((function(){let{style:e={},titleMsg:t="featuregrid.columns",onChange:n=(()=>{}),attributes:o=[]}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r().createElement("div",{className:"bg-body data-attribute-selector",style:e},r().createElement("h4",{className:"text-center"},r().createElement("strong",null,r().createElement(F.Z,{msgId:t}))),r().createElement("div",null,o.map((e=>r().createElement(I.Checkbox,{key:e.attribute||e.name,checked:!e.hide,onChange:()=>n(e.attribute,!e.hide)},e.label||e.attribute)))))}));var be=n(308602);function ve(){return ve=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},ve.apply(this,arguments)}const ye=(0,a.connect)((0,l.zB)({loading:w.gy}))(x.Z),Ee=(0,a.connect)((0,l.zB)({saving:S.uz,saved:S.Ci,mode:S.eK,hasChanges:S.LB,hasNewFeatures:S.b4,hasGeometry:S.OK,syncPopover:e=>({showAgain:(0,S.tU)(e),showPopoverSync:(0,S.Gl)(e),dockSize:(0,C.ic)(e,{dockSize:!0}).dockSize+3.2+"%"}),isDrawing:S.Ae,isSimpleGeom:S.He,selectedCount:S.jY,disableToolbar:e=>e&&e.featuregrid&&e.featuregrid.disableToolbar||!(0,w.hk)(e,(0,S.kd)(e)),results:w.Mz,isSyncActive:w.M7,isColumnsOpen:e=>e&&e.featuregrid&&e.featuregrid.tools&&e.featuregrid.tools.settings,disableZoomAll:e=>e&&e.featuregrid.virtualScroll||0===(0,w.F0)(e).features.length,isSearchAllowed:e=>!(0,ee.c0)(e),isEditingAllowed:S.nq,hasSupportedGeometry:S.bq,isFilterActive:w.VD,showTimeSyncButton:S.ou,timeSync:S.DK,snapping:be.jP,availableSnappingLayers:be.$N,isSnappingLoading:be.Qp,snappingConfig:be.l,mapType:ee.$v,editorHeight:S.P4,viewportFilter:S.qd,isFilterByViewportSupported:S.Kt}),(e=>({events:(0,i.DE)(he,e)})))((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};const{toolbarItems:t=[]}=e;return r().createElement(I.ButtonGroup,{id:"featuregrid-toolbar",className:"featuregrid-toolbar featuregrid-toolbar-margin"},M()(_.concat(t),["position"]).map((t=>{let{Component:n}=t;return r().createElement(n,H({},e,{mode:e?.mode??"VIEW",disabled:e.disableToolbar}))})))})),Ce=(0,a.connect)((0,l.P1)(S.Sj,(e=>({title:e}))),{onClose:he.onClose})((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{onDownloadToggle:()=>{}};return r().createElement("div",{className:"data-grid-top-toolbar"},r().createElement("div",{className:"data-grid-top-toolbar-left"},e.children),!e.hideLayerTitle&&r().createElement("div",{className:"data-grid-top-toolbar-title"},e.title),r().createElement("div",{className:"data-grid-top-toolbar-right"},!e.hideCloseButton&&r().createElement(N.Z,{onClick:e.onClose,className:"square-button-md no-border featuregrid-top-toolbar-margin"},r().createElement(I.Glyphicon,{glyph:"1-close"}))))})),we=(0,a.connect)((0,l.P1)((0,l.zB)(w.b0),w.gy,(e=>e&&e.featuregrid&&!!e.featuregrid.virtualScroll),S.jY,((e,t,n,o)=>({...e,selected:o,loading:t,virtualScroll:n}))),ue)((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{loading:!1,onPageChange:()=>{}};const{page:t=0,size:n=0,resultSize:o=0,maxPages:a=0,total:l=0}=(0,y.DR)(e);return r().createElement(I.Grid,{className:"bg-body data-grid-bottom-toolbar",fluid:!0,style:{width:"100%"}},r().createElement(I.Row,{className:"featuregrid-toolbar-margin"},r().createElement(I.Col,{md:3},r().createElement("span",null,r().createElement(F.Z,{msgId:e.virtualScroll?"featuregrid.resultInfoVirtual":"featuregrid.resultInfo",msgParams:{start:t*n+1,end:t*n+o,total:l,selected:e.selected??0}}))," ",e.selected>0?r().createElement("span",null,r().createElement(F.Z,{msgId:"featuregrid.selectedInfo",msgParams:{selected:e.selected??0}})):null),e.virtualScroll?null:r().createElement(I.Col,{className:"text-center",md:6},r().createElement(N.Z,{key:"first-page",onClick:()=>e.onPageChange(0),disabled:0===t,className:"no-border first-page"},r().createElement(I.Glyphicon,{glyph:"step-backward"})),r().createElement(N.Z,{key:"prev-page",onClick:()=>e.onPageChange(t-1),disabled:0===t,className:"no-border prev-page"},r().createElement(I.Glyphicon,{glyph:"chevron-left"})),r().createElement("span",{key:"page-info"},r().createElement(F.Z,{msgId:"featuregrid.pageInfo",msgParams:{page:t+1,totalPages:a+1}})),r().createElement(N.Z,{key:"next-page",onClick:()=>e.onPageChange(t+1),className:"no-border next-page",disabled:t>=a},r().createElement(I.Glyphicon,{glyph:"chevron-right"})),r().createElement(N.Z,{key:"last-page",onClick:()=>e.onPageChange(a),className:"no-border last-page",disabled:t>=a},r().createElement(I.Glyphicon,{glyph:"step-forward"})))," ",r().createElement(I.Col,{md:3},e.loading?r().createElement("span",{style:{float:"right"}},r().createElement(F.Z,{msgId:"loading"}),r().createElement(O(),{spinnerName:"circle",style:{float:"right"},noFadeIn:!0})):null)))})),Se=(0,a.connect)((0,l.P1)(S.jY,(e=>({count:e}))),{onClose:()=>(0,E.Pv)("deleteConfirm",!1),onConfirm:()=>(0,E.Uz)()})((function(){let{onClose:e=(()=>{}),saving:t=!1,count:n,onConfirm:o=(()=>{})}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r().createElement(P.Z,null,r().createElement(k.Z,{show:!0,onClose:e,onConfirm:o,confirmButtonBSStyle:"default",closeGlyph:"1-close",confirmButtonContent:r().createElement(F.Z,{msgId:"featuregrid.deleteButton"}),confirmButtonDisabled:t},r().createElement(F.Z,{msgId:"featuregrid.delete",msgParams:{count:n}})))})),ke=(0,a.connect)((0,l.P1)(S.jY,(e=>({count:e}))),{onClose:()=>(0,E.Pv)("clearConfirm",!1),onConfirm:()=>(0,E.oL)()})((function(){let{onClose:e=(()=>{}),saving:t=!1,onConfirm:n=(()=>{})}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r().createElement(P.Z,null,r().createElement(k.Z,{draggable:!1,show:!0,onClose:e,onConfirm:n,confirmButtonBSStyle:"default",closeGlyph:"1-close",confirmButtonContent:r().createElement(F.Z,{msgId:"featuregrid.yesButton"}),confirmButtonDisabled:t,closeText:r().createElement(F.Z,{msgId:"featuregrid.noButton"})},r().createElement(F.Z,{msgId:"featuregrid.clear"})))})),Pe=(0,a.connect)((()=>({})),{onClose:()=>(0,E.Ap)(),onConfirm:()=>(0,E.YV)()})((function(){let{onClose:e=(()=>{}),saving:t=!1,onConfirm:n=(()=>{})}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return r().createElement(P.Z,null,r().createElement(k.Z,{show:!0,onClose:e,onConfirm:n,confirmButtonBSStyle:"default",closeGlyph:"1-close",confirmButtonContent:r().createElement(F.Z,{msgId:"featuregrid.yesButton"}),confirmButtonDisabled:t,closeText:r().createElement(F.Z,{msgId:"featuregrid.noButton"})},r().createElement(F.Z,{msgId:"featuregrid.featureClose"})))})),Fe={settings:fe},xe={deleteConfirm:Se,featureCloseConfirm:Pe,clearConfirm:ke},Te={settings:{style:{padding:"0 12px",overflow:"auto",flex:"0 0 14em",boxShadow:"inset 0px 0px 10px rgba(0, 0, 0, 0.4)",height:"100%",minWidth:195}}},Ie=function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).filter((t=>e[t]&&Fe[t])).map((e=>{const t=Fe[e];return r().createElement(t,ve({key:e},Te[e]||{}))}))},Ze=e=>{let{hideCloseButton:t,hideLayerTitle:n,toolbarItems:o,pluginCfg:a}=e;return r().createElement(Ce,{hideCloseButton:t,hideLayerTitle:n},r().createElement(Ee,{pluginCfg:a,toolbarItems:o}))},Oe=e=>e.focusOnEdit&&e.hasChanges||e.newFeatures.length>0?null:r().createElement(we,null),Ne=(0,l.P1)((e=>e),(e=>e?((0,te.getFeatureTypeProperties)(e)||[]).reduce(((e,t)=>({...e,[t.name]:(0,a.connect)((0,l.P1)((e=>(0,S.g5)(e,t.name)),S.eK,((e,n)=>{const o={value:e&&(e.rawValue||e.value),...(0,te.isGeometryType)(t)?{filterEnabled:e?.enabled,filterDeactivated:e?.deactivated}:{}},r=(0,te.isGeometryType)(t)?{}:{disabled:!0,tooltipMsgId:"featuregrid.filter.tooltips.editMode"};return"EDIT"===n?{...o,...r}:o})))((0,T.Q)((0,te.isGeometryType)(t)?"geometry":t.localType,{name:t.name}))})),{}):{}));function Ge(){return Ge=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e},Ge.apply(this,arguments)}const De=[],ze={},Be=(0,a.connect)((0,l.P1)(S.P4,(e=>(0,C.ic)(e,{transform:!0})),((e,t)=>({size:e,dockStyle:t}))))(h.default),Me=(0,l.P1)((e=>d()(e,"featuregrid.open")),(e=>d()(e,"featuregrid.customEditorsOptions")),(e=>d()(e,"queryform.autocompleteEnabled")),(e=>(0,w.UM)(e)),(e=>(0,w.HY)(e)),(e=>d()(e,"featuregrid.features")||De),w.Qs,(e=>d()(e,"featuregrid.attributes")),(e=>d()(e,"featuregrid.tools")),S._w,S.eK,S.eO,S.kG,S.LB,(e=>d()(e,"featuregrid.focusOnEdit",!1)),(e=>d()(e,"featuregrid.enableColumnFilters")),(0,l.zB)(w.b0),(e=>d()(e,"featuregrid.pages")),(e=>d()(e,"featuregrid.pagination.size")),(function(e,t,n,o,r){let a=arguments.length>11?arguments[11]:void 0,l=arguments.length>16?arguments[16]:void 0,i=arguments.length>17?arguments[17]:void 0,s=arguments.length>18?arguments[18]:void 0;return{open:e,customEditorsOptions:t,autocompleteEnabled:n,url:o,typeName:r,hasChanges:arguments.length>13?arguments[13]:void 0,newFeatures:arguments.length>12&&void 0!==arguments[12]?arguments[12]:De,features:arguments.length>5&&void 0!==arguments[5]?arguments[5]:De,describe:arguments.length>6?arguments[6]:void 0,attributes:arguments.length>7?arguments[7]:void 0,tools:arguments.length>8?arguments[8]:void 0,select:arguments.length>9?arguments[9]:void 0,mode:arguments.length>10?arguments[10]:void 0,focusOnEdit:arguments.length>14?arguments[14]:void 0,enableColumnFilters:arguments.length>15?arguments[15]:void 0,changes:(0,y.rK)(a),pagination:l,pages:i,size:s}})),je=(0,u.compose)((0,a.connect)((()=>({})),(e=>({onMount:(0,i.DE)(E.Z_,e),setSyncTool:(0,i.DE)(E.gL,e)}))),(0,u.lifecycle)({componentDidMount(){this.props.onMount(p()(this.props,["showFilteredObject","showTimeSync","timeSync","customEditorsOptions"])),this.props.enableMapFilterSync?this.props.setSyncTool(!0):this.props.setSyncTool(!1)},componentDidUpdate(e){const t=p()(this.props,["showFilteredObject","showTimeSync","timeSync","customEditorsOptions"]),n=p()(e,["showFilteredObject","showTimeSync","timeSync","customEditorsOptions"]);g()(t,n)||this.props.onMount(t),this.props.enableMapFilterSync?this.props.setSyncTool(!0):this.props.setSyncTool(!1)}}),(0,a.connect)(Me,(e=>({gridEvents:(0,i.DE)(me,e),pageEvents:(0,i.DE)(ue,e),initPlugin:(0,i.DE)((e=>(0,E.QT)(e)),e),toolbarEvents:(0,i.DE)(he,e),gridTools:ge.map((t=>({...t,events:(0,i.DE)(t.events,e)}))),onSizeChange:function(){return e((0,E.Ox)(...arguments))}}))))((function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{tools:ze,dialogs:ze,select:De};const t=e.virtualScroll??!0,n=e?.pluginCfg?.maxZoom,a={dimMode:"none",defaultSize:.35,fluid:!0,isVisible:e.open,maxDockSize:.7,minDockSize:.1,position:"bottom",setDockSize:()=>{},zIndex:1060},l=(e?.items??[]).filter((e=>{let{target:t}=e;return"toolbar"===t}));return(0,o.useEffect)((()=>{e.initPlugin({virtualScroll:t,editingAllowedRoles:e.editingAllowedRoles,maxStoredPages:e.maxStoredPages})}),[t,(e.editingAllowedRoles??[]).join(","),e.maxStoredPages]),r().createElement(Be,Ge({},a,{onSizeChange:t=>{e.onSizeChange(t,a)}}),e.open&&r().createElement(f.Z,null,(o=>{let{height:a}=o;return r().createElement(v.Z,{className:"feature-grid-container",key:"feature-grid-container",height:a-74,header:Ze({toolbarItems:l,hideCloseButton:e.hideCloseButton,hideLayerTitle:e.hideLayerTitle,pluginCfg:e.pluginCfg}),columns:Ie(e.tools),footer:Oe(e)},function(){let e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object.keys(e).filter((t=>e[t]&&xe[t])).map((e=>{const t=xe[e];return r().createElement(t,{key:e})}))}(e.tools),r().createElement(b.default,{showCheckbox:e.showCheckbox,editingAllowedRoles:e.editingAllowedRoles,customEditorsOptions:e.customEditorsOptions,autocompleteEnabled:e.autocompleteEnabled,url:e.url,typeName:e.typeName,filterRenderers:Ne(e.describe),enableColumnFilters:e.enableColumnFilters,emptyRowsView:ye,focusOnEdit:e.focusOnEdit,newFeatures:e.newFeatures,changes:e.changes,mode:e.mode,select:e.select,key:"feature-grid-container",columnSettings:e.attributes,gridEvents:e.gridEvents,pageEvents:e.pageEvents,describeFeatureType:e.describe,features:e.features,minHeight:600,tools:e.gridTools,pagination:e.pagination,pages:e.pages,virtualScroll:t,maxStoredPages:e.maxStoredPages,vsOverScan:e.vsOverScan,scrollDebounce:e.scrollDebounce,size:e.size,actionOpts:{maxZoom:n},dateFormats:e.dateFormats}))})))})),Ae=je},366183:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var o=n(923645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"#featuregrid-toolbar .snap-tool.split-button .dropdown-menu {\n  min-width: 250px;\n  min-height: 200px;\n  overflow: hidden !important;\n}\n#featuregrid-toolbar .snap-tool.split-button .dropdown-menu > label,\n#featuregrid-toolbar .snap-tool.split-button .dropdown-menu .form-group > label {\n  padding: 3px 10px;\n  margin-bottom: 0;\n}\n#featuregrid-toolbar .snap-tool.split-button .dropdown-menu .Select {\n  margin: 0 15px;\n}\n#featuregrid-toolbar .snap-tool.split-button .Select-menu-outer .Select-menu {\n  overflow: auto;\n  max-height: 150px;\n}\n",""]);const a=r},753263:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var o=n(923645),r=n.n(o)()((function(e){return e[1]}));r.push([e.id,"\n.ms2 .featuregrid-toolbar {\n    margin-top: 5px;\n    margin-bottom: 5px;\n}\n\n.ms2 #featuregrid-toolbar .btn {\n    overflow: hidden;\n}\n\n.ms2 #featuregrid-toolbar .spinner {\n    margin: 0 auto;\n    width: 100%;\n}\n\n.ms2 #featuregrid-toolbar .spinner > div {\n    background-color: white;\n    width: 8px;\n    height: 8px;\n}\n",""]);const a=r}}]);