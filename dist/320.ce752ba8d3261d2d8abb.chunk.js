(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[320],{574198:(t,e,o)=>{"use strict";o.d(e,{Z:()=>x});var r=o(45697),i=o.n(r),n=o(124852),s=o.n(n),a=o(618446),l=o.n(a),p=o(701469),c=o.n(p),h=o(984596),m=o.n(h),y=o(727418),u=o.n(y),d=o(409669),g=o.n(d),f=o(247012),v=o(119950);function b(){return b=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var r in o)Object.prototype.hasOwnProperty.call(o,r)&&(t[r]=o[r])}return t},b.apply(this,arguments)}function L(t,e,o){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}class C extends s().Component{constructor(){super(...arguments),L(this,"createLayer",(t=>{t.geometry&&this.addFeature({...t,style:t.style&&m()(t.style)||void 0}),t.features&&t.features.forEach((e=>{let o=u()({},t,{type:e.type,geometry:e.geometry,style:e.style&&m()(e.style)||void 0,properties:e.properties});this.addFeature(o)}))})),L(this,"removeLayer",(t=>{this._layers&&(this._layers.forEach((e=>{t.container.removeLayer(e)})),this._layers=[])}))}componentDidMount(){this._layers=[],(this.props.container&&this.props.geometry||this.props.features)&&this.createLayer(this.props)}UNSAFE_componentWillReceiveProps(t){l()(t.properties,this.props.properties)&&l()(t.geometry,this.props.geometry)&&t.features===this.props.features&&t.style===this.props.style&&t.styleName===this.props.styleName||(this.removeLayer(t),this.createLayer(t))}componentWillUnmount(){this.removeLayer(this.props)}render(){return null}addFeature(t){if(c()(t.style)){let e=(0,v.createStylesAsync)(t.style);g().all(e).then((e=>{this.addLayer(t,e)}))}else this.addLayer(t,t.style)}addLayer(t,e){const o=(0,f.geometryToLayer)({type:t.type,geometry:t.geometry,properties:t.properties,msId:t.msId},{style:e,styleName:t.styleName});t.container.addLayer(o),o.on("click",(e=>{if(t.onClick){let o=[e.latlng.lat,e.latlng.lng];if(this.props.options.handleClickOnLayer&&"Point"===t.geometry?.type){const{_map:t}=e?.target||{},{lat:r,lng:i}=t?.mouseEventToLatLng(e?.originalEvent)||{};o=[r,i]}t.onClick({pixel:{x:e.originalEvent&&e.originalEvent.x,y:e.originalEvent&&e.originalEvent.y},latlng:e.latlng,rawPos:o},this.props.options.handleClickOnLayer?this.props.options.id:null)}})),o.setOpacity||(o.setOpacity=function(){let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;const e=this.originalStyle||this.options&&this.options.style||this.options||{};this.originalStyle={...e};const{opacity:r=1,fillOpacity:i=1,color:n,fillColor:s,radius:a,weight:l}=e,p={color:n,fillColor:s,radius:a,weight:l,opacity:r*t,fillOpacity:i*t};o.setStyle&&o.setStyle(p)}),this._layers.push(o)}}L(C,"propTypes",{msId:i().oneOfType([i().string,i().number]),type:i().string,styleName:i().string,properties:i().object,container:i().object,geometry:i().object,features:i().array,style:i().object,onClick:i().func,options:i().object});class S extends s().Component{render(){return this.props.container._msLegacyGeoJSON?s().createElement(C,b({},this.props,{ref:t=>{t&&(this._layers=t._layers)}})):null}}L(S,"propTypes",{container:i().object});const x=S},580537:(t,e,o)=>{"use strict";o.d(e,{Z:()=>f});var r=o(124852),i=o.n(r),n=o(45697),s=o.n(n),a=o(926447),l=o.n(a),p=o(727418),c=o.n(p),h=o(618446),m=o.n(h),y=o(414293),u=o.n(y);function d(t,e,o){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}class g extends i().Component{constructor(){super(...arguments),d(this,"setLayerVisibility",(t=>{const e=this.getVisibilityOption(this.props),o=this.getVisibilityOption(t);o!==e&&(o?this.addLayer():this.removeLayer(),this.updateZIndex())})),d(this,"getVisibilityOption",(t=>{const{options:e={},zoom:o,resolutions:r=[]}=t,{visibility:i,minResolution:n=-1/0,maxResolution:s=1/0,disableResolutionLimits:a}=e||{};if(!a&&!u()(r[o])){const t=r[o];if(!(t<s&&t>=n))return!1}return!1!==i})),d(this,"setLayerOpacity",(t=>{t!==(this.props.options&&void 0!==this.props.options.opacity?this.props.options.opacity:1)&&this.layer&&this.layer.setOpacity&&this.layer.setOpacity(t)})),d(this,"generateOpts",((t,e,o)=>c()({},t,e?{zIndex:e,srs:this.props.srs}:null,{zoomOffset:-this.props.zoomOffset,onError:()=>{this.props.onCreationError(t)},securityToken:o}))),d(this,"updateZIndex",(t=>{let e=t||this.props.position;e&&this.layer&&this.layer.setZIndex&&this.layer.setZIndex(e)})),d(this,"createLayer",((t,e,o,r)=>{if(t){const i=this.generateOpts(e,o,r);this.layer=l().createLayer(t,i),this.layer&&(this.layer.layerName=e.name,this.layer.layerId=e.id),this.forceUpdate()}})),d(this,"updateLayer",((t,e)=>{const o=l().updateLayer(t.type,this.layer,this.generateOpts(t.options,t.position,t.securityToken),this.generateOpts(e.options,e.position,e.securityToken));o&&(this.removeLayer(),this.layer=o,t.options.visibility&&this.addLayer(),this.updateZIndex(t.position))})),d(this,"addLayer",(()=>{if(this.isValid()&&(this.props.map.addLayer(this.layer),this.props.options.refresh&&this.layer.setParams)){let t=0;this.refreshTimer=setInterval((()=>{this.layer.setParams(c()({},this.props.options.params,{_refreshCounter:t++}))}),this.props.options.refresh)}})),d(this,"removeLayer",(()=>{this.isValid()&&this.props.map.removeLayer(this.layer)})),d(this,"isValid",(()=>{if(this.layer){const t=l().isValid(this.props.type,this.layer);return this.valid=t,t}return!1}))}componentDidMount(){this.valid=!0,this.createLayer(this.props.type,this.props.options,this.props.position,this.props.securityToken),this.props.options&&this.layer&&this.getVisibilityOption(this.props)&&(this.addLayer(),this.updateZIndex())}UNSAFE_componentWillReceiveProps(t){this.setLayerVisibility(t);const e=t.options&&void 0!==t.options.opacity?t.options.opacity:1;this.setLayerOpacity(e),t.position!==this.props.position&&this.updateZIndex(t.position),this.updateLayer(t,this.props)}shouldComponentUpdate(t){return!["map","type","srs","position","zoomOffset","onClick","options","children"].reduce(((e,o)=>{switch(o){case"map":case"type":case"srs":case"position":case"zoomOffset":case"onClick":case"children":return e&&this.props[o]===t[o];case"options":return e&&(this.props[o]===t[o]||m()({...this.props[o],loading:!1},{...t[o],loading:!1}));default:return e}}),!0)}componentWillUnmount(){this.layer&&this.props.map&&(this.removeLayer(),this.refreshTimer&&clearInterval(this.refreshTimer))}render(){if(this.props.children){const t=this.layer,e=t?i().Children.map(this.props.children,(e=>e?i().cloneElement(e,{container:t,styleName:this.props.options&&this.props.options.styleName,onClick:this.props.onClick,options:this.props.options||{}}):null)):null;return i().createElement(i().Fragment,null,e)}return l().renderLayer(this.props.type,this.props.options,this.props.map,this.props.map.id,this.layer)}}d(g,"propTypes",{map:s().object,type:s().string,srs:s().string,options:s().object,position:s().number,zoomOffset:s().number,onCreationError:s().func,onClick:s().func,securityToken:s().string,resolutions:s().array,zoom:s().number}),d(g,"defaultProps",{onCreationError:()=>{},options:{}});const f=g},728589:(t,e,o)=>{"use strict";o.d(e,{Z:()=>L});var r=o(845243),i=o.n(r),n=o(45697),s=o.n(n),a=o(124852),l=o.n(a),p=o(234228),c=o(351546),h=o(727418),m=o.n(h),y=o(835516),u=o(49977),d=o.n(u),g=o(823493),f=o.n(g);function v(t,e,o){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}o(727741),o(934970);class b extends l().Component{constructor(){var t;super(...arguments),t=this,v(this,"state",{}),v(this,"getDocument",(()=>this.props.document||document)),v(this,"getResolutions",(()=>this.props.resolutions)),v(this,"getIntersectedFeatures",((t,e)=>{let o={};const r=i().latLngBounds(e,e);return t.eachLayer((t=>{t?.layerId&&t?.eachLayer&&t.eachLayer((e=>{const n=e?.getLatLng?i().latLngBounds(e.getLatLng(),e.getLatLng()):null,s=e?.getBounds?e.getBounds():n;if(s&&e?.toGeoJSON&&s&&r.intersects(s)){const r=e.toGeoJSON();o[t.layerId]=o[t.layerId]?[...o[t.layerId],r]:[r]}}))})),Object.keys(o).map((t=>({id:t,features:o[t]})))})),v(this,"_updateMapPositionFromNewProps",(t=>{const e=function(t,e){return void 0!==t&&void 0!==e&&t.toFixed(12)-e.toFixed(12)==0},o=t.center,r=this.props.center,i=this.map.getCenter(),n=e(o.x,r.x)&&e(o.y,r.y)||e(o.x,i.lng)&&e(o.y,i.lat),s=t.zoom,a=this.props.zoom,l=this.map.getZoom(),p=s===a||s===l;n||p?p?n||this.map.setView([t.center.y,t.center.x]):this.map.setZoom(t.zoom):this.map.setView([t.center.y,t.center.x],Math.round(t.zoom))})),v(this,"updateMapInfoState",(()=>{const t=this.map.getBounds().toBBoxString().split(","),e={height:this.map.getSize().y,width:this.map.getSize().x},o=this.map.getCenter(),r=this.map.getZoom(),i=this.props.viewerOptions;this.props.onMapViewChanges({x:o.lng,y:o.lat,crs:"EPSG:4326"},r,{bounds:{minx:parseFloat(t[0]),miny:parseFloat(t[1]),maxx:parseFloat(t[2]),maxy:parseFloat(t[3])},crs:"EPSG:4326",rotation:0},e,this.props.id,this.props.projection,i,this.getResolutions()[r])})),v(this,"setMousePointer",(t=>{this.map&&(this.map.getContainer().style.cursor=t||"auto")})),v(this,"mouseMoveEvent",(t=>{let e=t.latlng.wrap();this.props.onMouseMove({x:e.lng||0,y:e.lat||0,z:this.elevationLayer&&this.elevationLayer.getElevation(e,t.containerPoint)||void 0,crs:"EPSG:4326",pixel:{x:t.containerPoint.x,y:t.containerPoint.x},latlng:{lat:t.latlng.lat,lng:t.latlng.lng,z:this.elevationLayer&&this.elevationLayer.getElevation(t.latlng,t.containerPoint)||void 0},rawPos:[t.latlng.lat,t.latlng.lng]})})),v(this,"registerHooks",(()=>{this.props.hookRegister.registerHook(y.EXTENT_TO_ZOOM_HOOK,(t=>{var e=(0,c.reproject)([t[0],t[1]],this.props.projection,"EPSG:4326"),o=(0,c.reproject)([t[2],t[3]],this.props.projection,"EPSG:4326");return this.map.getBoundsZoom([[e.y,e.x],[o.y,o.x]])-1})),this.props.hookRegister.registerHook(y.RESOLUTIONS_HOOK,(()=>this.getResolutions())),this.props.hookRegister.registerHook(y.COMPUTE_BBOX_HOOK,((t,e)=>{let o=i().latLng([t.y,t.x]),r=this.map._getNewPixelOrigin(o,e),n=new(i().Bounds)(r,r.add(this.map.getSize())),s=this.map.unproject(n.getBottomLeft(),e),a=this.map.unproject(n.getTopRight(),e),l=new(i().LatLngBounds)(s,a).toBBoxString().split(",");return{bounds:{minx:parseFloat(l[0]),miny:parseFloat(l[1]),maxx:parseFloat(l[2]),maxy:parseFloat(l[3])},crs:"EPSG:4326",rotation:0}})),this.props.hookRegister.registerHook(y.GET_PIXEL_FROM_COORDINATES_HOOK,(t=>{let e=(0,c.reproject)(t,this.props.projection,"EPSG:4326"),o=this.map.latLngToContainerPoint([e.y,e.x]);return[o.x,o.y]})),this.props.hookRegister.registerHook(y.GET_COORDINATES_FROM_PIXEL_HOOK,(t=>{const e=this.map.containerPointToLatLng(t);let o=(0,c.reproject)([e.lng,e.lat],"EPSG:4326",this.props.projection);return[o.x,o.y]})),this.props.hookRegister.registerHook(y.ZOOM_TO_EXTENT_HOOK,(function(e){let{padding:o,crs:r,maxZoom:n,duration:s}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const a=o&&i().point(o.left||0,o.top||0),l=o&&i().point(o.right||0,o.bottom||0),p=(0,c.reprojectBbox)(e,r,"EPSG:4326");t.map.fitBounds([[p[1],p[0]],[p[3],p[2]]],{paddingTopLeft:a,paddingBottomRight:l,maxZoom:n,duration:s,animate:0!==s&&void 0})}))})),v(this,"addLayerObservable",((t,e)=>{!t.layer.layerId||t.layer&&t.layer.options&&"vector"===t.layer.options.msLayer||t&&t.layer&&t.layer.on&&e&&(t.layer._ms2LoadingTileCount=0,t.layer.layerLoadingStream$=new(d().Subject),t.layer.layerLoadStream$=new(d().Subject),t.layer.layerErrorStream$=new(d().Subject),t.layer.layerErrorStream$.bufferToggle(t.layer.layerLoadingStream$,(()=>t.layer.layerLoadStream$)).subscribe({next:e=>{const o=t.layer._ms2LoadingTileCount||e&&e.length||0;e&&e.length>0&&this.props.onLayerError(e[0].target.layerId,o,e.length),t.layer._ms2LoadingTileCount=0}}))}))}UNSAFE_componentWillMount(){if(this.zoomOffset=0,this.props.mapOptions&&this.props.mapOptions.view&&this.props.mapOptions.view.resolutions&&this.props.mapOptions.view.resolutions.length>0){const t=i().CRS.EPSG3857.scale,e=this.props.mapOptions.view.resolutions[0]/(0,y.getGoogleMercatorResolutions)(0,23)[0];this.crs=m()({},i().CRS.EPSG3857,{scale:o=>t.call(i().CRS.EPSG3857,o)/Math.pow(2,Math.round(Math.log2(e)))}),this.zoomOffset=Math.round(Math.log2(e))}}componentDidMount(){const{limits:t={}}=this.props,e=t.restrictedExtent&&t.crs&&(0,c.reprojectBbox)(t.restrictedExtent,t.crs,"EPSG:4326");let o=m()({},this.props.interactive?{}:{dragging:!1,touchZoom:!1,scrollWheelZoom:!1,doubleClickZoom:!1,boxZoom:!1,tap:!1,attributionControl:!1,maxBounds:e&&i().latLngBounds([[e[1],e[0]],[e[3],e[2]]]),maxBoundsViscosity:e&&1,minZoom:t&&t.minZoom,maxZoom:t&&t.maxZoom||23},this.props.mapOptions,this.crs?{crs:this.crs}:{});const r=i().map(this.getDocument().querySelector(`[id='${this.props.id}'] > .map-viewport`),m()({zoomControl:!1},o)).setView([this.props.center.y,this.props.center.x],Math.round(this.props.zoom));this.map=r,this.props.registerHooks&&this.registerHooks(),this.props.zoomControl&&(this.mapZoomControl=i().control.zoom(),this.map.addControl(this.mapZoomControl)),this.attribution=i().control.attribution(),this.attribution.addTo(this.map);const n=this.getDocument();this.props.mapOptions.attribution&&this.props.mapOptions.attribution.container&&(n.querySelector(this.props.mapOptions.attribution.container).appendChild(this.attribution.getContainer()),n.querySelector(".leaflet-control-container .leaflet-control-attribution")&&n.querySelector(".leaflet-control-container .leaflet-control-attribution").parentNode.removeChild(n.querySelector(".leaflet-control-container .leaflet-control-attribution"))),this.map.on("moveend",this.updateMapInfoState),this.map.on("singleclick",(t=>{if(this.props.onClick){const e=this.getIntersectedFeatures(r,t.latlng);this.props.onClick({pixel:{x:t.containerPoint.x,y:t.containerPoint.y},latlng:{lat:t.latlng.lat,lng:t.latlng.lng,z:this.elevationLayer&&this.elevationLayer.getElevation(t.latlng,t.containerPoint)||void 0},rawPos:[t.latlng.lat,t.latlng.lng],modifiers:{alt:t.originalEvent.altKey,ctrl:t.originalEvent.ctrlKey,metaKey:t.originalEvent.metaKey,shift:t.originalEvent.shiftKey},intersectedFeatures:e})}}));const s=f()(this.mouseMoveEvent,100);this.map.on("dragstart",(()=>{this.map.off("mousemove",s)})),this.map.on("dragend",(()=>{this.map.on("mousemove",s)})),this.map.on("mousemove",s),this.map.on("contextmenu",(()=>{this.props.onRightClick&&this.props.onRightClick(event.containerPoint)})),this.map.on("mouseout",(()=>{setTimeout((()=>this.props.onMouseOut()),150)})),this.updateMapInfoState(),this.setMousePointer(this.props.mousePointer),this.forceUpdate(),this.props.onResolutionsChange(this.getResolutions()),this.map.on("layeradd",(t=>{if(t.layer._ms2Added){const e=t.layer.layerLoadingStream$&&t.layer.layerLoadingStream$.isStopped;this.addLayerObservable(t,e)}else t.layer._ms2Added=!0,t.layer.getElevation&&(this.elevationLayer=t.layer),t.layer.layerId&&(t.layer&&t.layer.options&&"vector"===t.layer.options.msLayer||t&&t.layer&&t.layer.on&&(this.addLayerObservable(t,!0),t.layer.options&&t.layer.options.hideLoading||(this.props.onLayerLoading(t.layer.layerId),t.layer.layerLoadingStream$.next()),t.layer.on("loading",(e=>{this.props.onLayerLoading(e.target.layerId),t.layer.layerLoadingStream$.next()})),t.layer.on("load",(e=>{this.props.onLayerLoad(e.target.layerId),t.layer.layerLoadStream$.next()})),t.layer.on("tileloadstart ",(()=>{t.layer._ms2LoadingTileCount++})),(t.layer.options&&!t.layer.options.hideErrors||!t.layer.options)&&t.layer.on("tileerror",(e=>{t.layer.layerErrorStream$.next(e)})),t.layer.on("loaderror",(t=>{this.props.onLayerError(t.target.layerId)}))))})),this.map.on("layerremove",(t=>{t.layer.layerLoadingStream$&&(t.layer.layerLoadingStream$.complete(),t.layer.layerLoadStream$.complete(),t.layer.layerErrorStream$.complete())})),this.drawControl=null}UNSAFE_componentWillReceiveProps(t){if(t.mousePointer!==this.props.mousePointer&&this.setMousePointer(t.mousePointer),this.map&&t.mapStateSource!==this.props.id&&this._updateMapPositionFromNewProps(t),t.zoomControl!==this.props.zoomControl&&(t.zoomControl?(this.mapZoomControl=i().control.zoom(),this.map.addControl(this.mapZoomControl)):this.mapZoomControl&&!t.zoomControl&&(this.map.removeControl(this.mapZoomControl),this.mapZoomControl=void 0)),t.resize!==this.props.resize&&setTimeout((()=>{this.map&&this.map.invalidateSize(!1)}),0),this.props.limits!==t.limits){const{limits:e={}}=t,{limits:o}=this.props;if(e.restrictedExtent!==(o&&o.restrictedExtent)){const t=e.restrictedExtent&&e.crs&&(0,c.reprojectBbox)(e.restrictedExtent,e.crs,"EPSG:4326");this.map.setMaxBounds(e.restrictedExtent&&i().latLngBounds([[t[1],t[0]],[t[3],t[2]]]))}e.minZoom!==(o&&o.minZoom)&&this.map.setMinZoom(e.minZoom),this.props.onResolutionsChange(this.getResolutions())}return!1}componentWillUnmount(){const t=this.getDocument(),e=this.props.mapOptions.attribution&&this.props.mapOptions.attribution.container&&t.querySelector(this.props.mapOptions.attribution.container);if(e&&this.attribution.getContainer()&&e.querySelector(".leaflet-control-attribution"))try{e.removeChild(this.attribution.getContainer())}catch(t){}this.mapZoomControl&&(this.map.removeControl(this.mapZoomControl),this.mapZoomControl=void 0),this.map.off(),this.map.remove(),this.map=void 0}render(){const t=this.map,e=this.props.projection,o=t?l().Children.map(this.props.children,(o=>o?l().cloneElement(o,{map:t,projection:e,zoomOffset:this.zoomOffset,onCreationError:this.props.onCreationError,onClick:this.props.onClick,resolutions:this.getResolutions(),zoom:this.props.zoom}):null)):null;return l().createElement("div",{id:this.props.id,style:this.props.style},l().createElement("div",{className:"map-viewport",style:{position:"relative",overflow:"hidden",width:"100%",height:"100%"}}),o)}}v(b,"propTypes",{id:s().string,document:s().object,center:p.ZP.PropTypes.center,zoom:s().number.isRequired,viewerOptions:s().object,mapStateSource:p.ZP.PropTypes.mapStateSource,style:s().object,projection:s().string,onMapViewChanges:s().func,onClick:s().func,onRightClick:s().func,mapOptions:s().object,limits:s().object,zoomControl:s().bool,mousePointer:s().string,onMouseMove:s().func,onLayerLoading:s().func,onLayerLoad:s().func,onLayerError:s().func,resize:s().oneOfType([s().number,s().string]),measurement:s().object,changeMeasurementState:s().func,registerHooks:s().bool,interactive:s().bool,resolutions:s().array,hookRegister:s().object,onCreationError:s().func,onMouseOut:s().func,onResolutionsChange:s().func}),v(b,"defaultProps",{id:"map",onMapViewChanges:()=>{},onCreationError:()=>{},onClick:null,onMouseMove:()=>{},zoomControl:!0,mapOptions:{zoomAnimation:!0,attributionControl:!1},projection:"EPSG:3857",center:{x:13,y:45,crs:"EPSG:4326"},zoom:5,onLayerLoading:()=>{},onLayerLoad:()=>{},onLayerError:()=>{},resize:0,registerHooks:!0,hookRegister:{registerHook:y.registerHook},style:{},interactive:!0,resolutions:(0,y.getGoogleMercatorResolutions)(0,23),onMouseOut:()=>{},onResolutionsChange:()=>{}});const L=b},397969:(t,e,o)=>{function r(t,e,o){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var i=o(45697),n=o(124852),s=o(117244),a=o(845243),l=o(926447),p=o(727418);o(928143);const c={position:"bottomright",width:300,height:150,collapsedWidth:25,collapsedHeight:25,zoomLevelOffset:-5,zoomLevelFixed:null,zoomAnimation:!1,toggleDisplay:!0,autoToggleDisplay:!1,minimized:!0};class h extends n.Component{componentDidMount(){let t=p({},c,this.props.overviewOpt);if(this.props.layers){let e=[];this.props.layers.forEach((t=>{e.push(l.createLayer(t.type,t.options||{}))})),1===e.length?this.overview=new s(e[0],t):e.length>1&&(this.overview=new s(a.layerGroup(e),t))}this.props.map&&this.overview&&this.overview.addTo(this.props.map)}render(){return null}}r(h,"displayName","Overview"),r(h,"propTypes",{map:i.object,overviewOpt:i.object,layers:i.array}),r(h,"defaultProps",{id:"overview",overviewOpt:{},layers:[{type:"osm",options:{}}]}),t.exports=h},982935:(t,e,o)=>{function r(t,e,o){return(e=function(t){var e=function(t,e){if("object"!=typeof t||null===t)return t;var o=t[Symbol.toPrimitive];if(void 0!==o){var r=o.call(t,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(t);return"symbol"==typeof e?e:String(e)}(e))in t?Object.defineProperty(t,e,{value:o,enumerable:!0,configurable:!0,writable:!0}):t[e]=o,t}var i=o(45697),n=o(124852),s=o(845243);class a extends n.Component{componentDidMount(){if(this.scalebar=s.control.scale(this.props),this.props.map&&(this.scalebar.addTo(this.props.map),this.props.container)){document.querySelector(this.props.container).appendChild(this.scalebar.getContainer());const t=document.querySelector(".leaflet-control-container .leaflet-control-scale-line");t&&t.parentNode&&t.parentNode.removeChild(t)}}componentWillUnmount(){if(this.props.container&&this.scalebar&&this.scalebar.getContainer())try{document.querySelector(this.props.container).removeChild(this.scalebar.getContainer())}catch(t){}}render(){return null}}r(a,"propTypes",{map:i.object,position:i.oneOf(["topleft","topright","bottomleft","bottomright"]),maxWidth:i.number,metric:i.bool,imperial:i.bool,updateWhenIdle:i.bool,container:i.string}),r(a,"defaultProps",{map:null,position:"bottomleft",maxWidth:100,metric:!0,imperial:!1,updateWhenIdle:!1}),t.exports=a},934970:(t,e,o)=>{var r=o(845243);r.Evented.addInitHook((function(){this._singleClickTimeout=null,this.on("click",this._scheduleSingleClick,this),this.on("dblclick dragstart zoomstart",this._cancelSingleClick,this)})),r.Evented.include({_cancelSingleClick:function(){setTimeout(this._clearSingleClickTimeout.bind(this),0)},_scheduleSingleClick:function(t){this._clearSingleClickTimeout(),this._singleClickTimeout=setTimeout(this._fireSingleClick.bind(this,t),this.options.singleClickTimeout||500)},_fireSingleClick:function(t){t.originalEvent._stopped||this.fire("singleclick",r.Util.extend(t,{type:"singleclick"}))},_clearSingleClickTimeout:function(){null!==this._singleClickTimeout&&(clearTimeout(this._singleClickTimeout),this._singleClickTimeout=null)}})},931806:(t,e,o)=>{const r=o(845243),i=o(623560);o(124402),o(32245),t.exports={extra:{getIcon:t=>{const e=t.iconPrefix||"fa";return r.ExtraMarkers.icon({icon:e+"-"+t.iconGlyph,markerColor:t.iconColor||"blue",shape:t.iconShape||"square",prefix:e,extraClasses:t.highlight?"marker-selected":""})}},standard:{getIcon:t=>r.icon({iconUrl:t.iconUrl||t.symbolUrlCustomized||t.symbolUrl,shadowUrl:t.shadowUrl,iconSize:t.iconSize,shadowSize:t.shadowSize,iconAnchor:t.iconAnchor,shadowAnchor:t.shadowAnchor,popupAnchor:t.popupAnchor})},html:{getIcon:(t,e)=>r.divIcon(i(t.html)?t.html(e):t.html)}}},247012:(t,e,o)=>{const r=o(845243),i=o(931806),n=o(727418),{isMarkerStyle:s,isSymbolStyle:a}=o(119950),l=function(t,e,o){var r=[],i=t.length;for(let n,s=0;s<i;s++)n=e?l(t[s],e-1,o):(o||this.coordsToLatLng)(t[s]),r.push(n);return r},p=t=>{if("GeometryCollection"===t.geometry.type)return!1;const e=t.style;return e&&(s(e)||a(e)||e.iconUrl||e.iconGlyph)},c={coordsToLatLngF:function(t){return new r.LatLng(t[1],t[0],t[2])},coordsToLatLngs:l,isMarker:p,getPointLayer:function(t,e,o,r){return t?t(e,o):c.pointToLayer(o,e,{...r.style,styleName:r.styleName,highlight:r.highlight})},pointToLayer:(t,e,o)=>{const n=o.Point||o.MultiPoint||o,s=((t,e)=>{if(t&&t.iconGlyph){const e=t.iconLibrary||"extra";if(i[e])return i[e].getIcon(t)}return t&&t.html&&e?i.html.getIcon(t,e):t&&t.iconUrl||t.symbolUrlCustomized||t.symbolUrl?i.standard.getIcon(t):null})(n,e);return s?r.marker(t,{icon:s,opacity:n&&n.opacity||1}):r.marker(t,{opacity:n&&n.opacity||1})},toValidGeoJSON:()=>{},createTextPointMarkerLayer:function(){let{pointToLayer:t,geojson:e,latlng:o,options:i,style:n={},highlight:s=!1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(e.properties&&e.properties.isText){let t=r.divIcon({html:`<span style="\n                font:${n.font};\n                color:${n.fillColor};\n                -webkit-text-stroke-width:1px;\n                -webkit-text-stroke-color:${n.color};">${e.properties.valueText}</span>`,className:""});return new r.Marker(o,{icon:t})}return c.getPointLayer(t,e,o,{...i,style:n,highlight:s})},createPolygonCircleLayer:function(){let{geojson:t,style:e={},latlngs:o=[],coordsToLatLng:i=(()=>{})}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(t.properties&&t.properties.isCircle){let o=i(t.properties.center);return r.circle(o,{...e,radius:t.properties.radius})}return new r.Polygon(o,e)},geometryToLayer:function(t,e){const o="Feature"===t.type?t.geometry:t,i=o?o.coordinates:null,s=[],a={styleName:e.styleName,style:e.style&&e.style[0]||e.style,...t},h=e&&!p(a)?function(t,e){return"marker"===a.styleName?r.marker(e,a.style):r.circleMarker(e,a.style&&a.style[0]||a.style)}:null;let m,y=e&&e.coordsToLatLng||c.coordsToLatLngF;if(!i&&!o)return null;let u,d,g,f,v=a.style||n({},e.style&&e.style[o.type]||e.style,{highlight:e.style&&e.style.highlight});switch(o.type){case"Point":return u=y(i),m=c.createTextPointMarkerLayer({pointToLayer:h,geojson:t,latlng:u,options:e,style:v,highlight:v&&v.highlight}),m;case"MultiPoint":for(g=0,f=i.length;g<f;g++)u=y(i[g]),m=c.createTextPointMarkerLayer({pointToLayer:h,geojson:t,latlng:u,options:e,style:v,highlight:v&&v.highlight}),m.msId=t.id,s.push(m);return new r.FeatureGroup(s);case"LineString":return v=c.updateHighlightStyle(v),d=l(i,"LineString"===o.type?0:1,y),m=new r.Polyline(d,v),m.msId=t.id,m;case"MultiLineString":for(v=c.updateHighlightStyle(v),d=l(i,"LineString"===o.type?0:1,y),g=0,f=d.length;g<f;g++)m=new r.Polyline(d[g],v),m.msId=t.id,m&&s.push(m);return new r.FeatureGroup(s);case"Polygon":return v=c.updateHighlightStyle(v),d=l(i,"Polygon"===o.type?1:2,y),m=c.createPolygonCircleLayer({geojson:t,style:v,latlngs:d,coordsToLatLng:y}),m.msId=t.id,m;case"MultiPolygon":for(v=c.updateHighlightStyle(v),d=l(i,"Polygon"===o.type?1:2,y),g=0,f=d.length;g<f;g++)m=c.createPolygonCircleLayer({geojson:t,style:v,latlngs:d,coordsToLatLng:y}),m.msId=t.id,m&&s.push(m);return new r.FeatureGroup(s);case"GeometryCollection":for(g=0,f=o.geometries.length;g<f;g++)m=c.geometryToLayer({geometry:o.geometries[g],type:"Feature",properties:t.properties},e),m&&s.push(m);return new r.FeatureGroup(s);default:throw new Error("Invalid GeoJSON object.")}},updateHighlightStyle:t=>{let{highlight:e}=t;return e?n({},t,{dashArray:e?"10":null}):t}};t.exports=c},319438:(t,e,o)=>{"use strict";o.d(e,{Z:()=>n});var r=o(923645),i=o.n(r)()((function(t){return t[1]}));i.push([t.id,".ms2 .leaflet-control-minimap {\n    border:solid rgba(255, 255, 255, 1.0) 4px;\n    box-shadow: 0 1px 5px rgba(0,0,0,0.65);\n    border-radius: 3px;\n    background: #f8f8f9;\n    transition: all .2s;\n}\n.ms2 .leafletbottom.leafletright, .ms2 .leaflet-control-minimap{\n    position:relative;\n    bottom:5px;\n}\n.ms2 .leaflet-control-minimap a {\n    background-color: rgba(255, 255, 255, 1.0);\n    background-repeat: no-repeat;\n    z-index: 99999;\n    transition: all .2s;\n}\n\n.ms2 .leaflet-control-minimap a.minimized-bottomright {\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n    border-radius: 0px;\n    bottom: -3px;\n    right: -3px;\n}\n\n.ms2 .leaflet-control-minimap a.minimized-topleft {\n    -webkit-transform: rotate(0deg);\n    transform: rotate(0deg);\n    border-radius: 0px;\n}\n\n.ms2 .leaflet-control-minimap a.minimized-bottomleft {\n    -webkit-transform: rotate(270deg);\n    transform: rotate(270deg);\n    border-radius: 0px;\n}\n\n.ms2 .leaflet-control-minimap a.minimized-topright {\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n    border-radius: 0px;\n}\n\n.ms2 .leaflet-control-minimap-toggle-display{\n    background-size: cover;\n    position: absolute;\n    border-radius: 3px 0px 0px 0px;\n}\n\n.ms2 .leaflet-control-minimap-toggle-display-bottomright {\n    bottom: 0;\n    right: 0;\n}\n\n.ms2 .leaflet-control-minimap-toggle-display-topleft{\n    top: 0;\n    left: 0;\n    -webkit-transform: rotate(180deg);\n    transform: rotate(180deg);\n}\n\n.ms2 .leaflet-control-minimap-toggle-display-bottomleft{\n    bottom: 0;\n    left: 0;\n    -webkit-transform: rotate(90deg);\n    transform: rotate(90deg);\n}\n\n.ms2 .leaflet-control-minimap-toggle-display-topright{\n    top: 0;\n    right: 0;\n    -webkit-transform: rotate(270deg);\n    transform: rotate(270deg);\n}\n\n/* Old IE */\n.ms2 .leaflet-oldie .leaflet-control-minimap {\n    border: 1px solid #999;\n}\n\n.ms2 .leaflet-oldie .leaflet-control-minimap a {\n    background-color: #fff;\n}\n\n.ms2 .leaflet-oldie .leaflet-control-minimap a.minimized {\n    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=2);\n}\n",""]);const n=i},928143:(t,e,o)=>{"use strict";o.r(e),o.d(e,{default:()=>s});var r=o(893379),i=o.n(r),n=o(319438);i()(n.Z,{insert:"head",singleton:!1});const s=n.Z.locals||{}}}]);