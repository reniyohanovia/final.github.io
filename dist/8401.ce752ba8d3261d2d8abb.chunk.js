(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[8401],{849514:(e,t,i)=>{"use strict";i.d(t,{Z:()=>v});var o=i(124852),r=i.n(o),s=i(237001),n=i(727418),p=i.n(n),a=i(45697),h=i.n(a),l=i(59854),c=i.n(l),m=i(414293),d=i.n(m),u=i(835516);function y(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,"string");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class g extends r().Component{constructor(){super(...arguments),y(this,"updateZIndex",(e=>{const t=e||this.props.position;if(this.provider){const e=this.props.map.imageryLayers._layers.indexOf(this.provider),i=[...this.props.map.imageryLayers._layers].sort(((e,i)=>(e===this.provider?t:e._position)-(i===this.provider?t:i._position))).indexOf(this.provider)-e;0!==i&&[...new Array(Math.abs(i)).keys()].forEach((()=>{this.props.map.imageryLayers[i>0?"raise":"lower"](this.provider)})),this.props.map.scene.requestRender()}})),y(this,"setLayerVisibility",(e=>{const t=this.getVisibilityOption(this.props),i=this.getVisibilityOption(e);i!==t&&(this.layer?.detached&&this.layer?.setVisible?this.layer.setVisible(i):i?(this.addLayer(e),this.updateZIndex()):this.removeLayer(),e.map.scene.requestRender())})),y(this,"getVisibilityOption",(e=>{const{options:t={},zoom:i,resolutions:o=(0,u.getResolutions)()}=e,r=c()(i),{visibility:s,minResolution:n=-1/0,maxResolution:p=1/0,disableResolutionLimits:a}=t||{};if(!a&&!d()(o[r])){const e=o[r];if(!(e<p&&e>=n))return!1}return!1!==s})),y(this,"setLayerOpacity",(e=>{e!==(this.props.options&&void 0!==this.props.options.opacity?this.props.options.opacity:1)&&this.layer&&this.provider&&(this.provider.alpha=e,this.props.map.scene.requestRender())})),y(this,"createLayer",((e,t,i,o,r)=>{if(e){const n=p()({},t,i?{zIndex:i}:null,{securityToken:r});this.layer=s.default.createLayer(e,n,o),this.layer&&(this.layer.layerName=t.name,this.layer.layerId=t.id),null===this.layer&&this.props.onCreationError(t),this.props.map.scene.requestRender()}})),y(this,"updateLayer",((e,t)=>{const i=s.default.updateLayer(e.type,this.layer,{...e.options,securityToken:e.securityToken},{...t.options,securityToken:t.securityToken},this.props.map);i&&(this.removeLayer(),this.layer=i,e.options.visibility&&this.addLayer(e)),e.map.scene.requestRender()})),y(this,"addLayerInternal",(e=>{e.options.useForElevation?this.props.map.terrainProvider=this.layer:(this.provider=this.props.map.imageryLayers.addImageryProvider(this.layer),this.provider._position=this.props.position,void 0!==e.options.opacity&&(this.provider.alpha=e.options.opacity)),e.map.scene.requestRender()})),y(this,"addLayer",(e=>{if(this.layer&&!this.layer.detached&&(this.addLayerInternal(e),this.props.options.refresh&&this.layer.updateParams)){let t=0;this.refreshTimer=setInterval((()=>{const i=this.layer.updateParams(p()({},this.props.options.params,{_refreshCounter:t++}));this.removeLayer(),this.layer=i,this.addLayerInternal(e),this.props.map.scene.requestRender()}),this.props.options.refresh)}})),y(this,"removeLayer",(e=>{const t=e||this.provider;t&&this.props.map.imageryLayers.remove(t),this.layer?.detached&&this.layer?.remove&&this.layer.remove(),this.props.map.scene.requestRender()}))}componentDidMount(){this.createLayer(this.props.type,this.props.options,this.props.position,this.props.map,this.props.securityToken),this.props.options&&this.layer&&this.getVisibilityOption(this.props)&&(this.addLayer(this.props),this.updateZIndex())}UNSAFE_componentWillReceiveProps(e){this.setLayerVisibility(e);const t=e.options&&void 0!==e.options.opacity?e.options.opacity:1;if(this.setLayerOpacity(t),e.position!==this.props.position&&(this.updateZIndex(e.position),this.provider&&(this.provider._position=e.position)),this.props.options&&this.props.options.params&&this.layer.updateParams&&e.options.visibility&&Object.keys(this.props.options.params).reduce(((t,i)=>e.options.params[i]!==this.props.options.params[i]||t),!1)){const t=this.provider,i=this.layer.updateParams(e.options.params);this.layer=i,this.addLayer(e),setTimeout((()=>{this.removeLayer(t)}),1e3)}this.updateLayer(e,this.props)}componentWillUnmount(){this.layer&&this.props.map&&!this.props.map.isDestroyed()&&(this.layer.detached&&this.layer?.remove?this.layer.remove():(this.layer.destroy&&this.layer.destroy(),this.props.map.imageryLayers.remove(this.provider)),this.refreshTimer&&clearInterval(this.refreshTimer))}render(){if(this.props.children){const e=this.layer,t=e?r().Children.map(this.props.children,(t=>t?r().cloneElement(t,{container:e,styleName:this.props.options&&this.props.options.styleName}):null)):null;return r().createElement(r().Fragment,null,t)}return s.default.renderLayer(this.props.type,this.props.options,this.props.map,this.props.map.id,this.layer)}}y(g,"propTypes",{map:h().object,type:h().string,options:h().object,onCreationError:h().func,position:h().number,securityToken:h().string,zoom:h().number});const v=g},258258:(e,t,i)=>{"use strict";i.d(t,{Z:()=>k});var o=i(288487),r=(i(319683),i(763934),i(169819)),s=i(45697),n=i.n(s),p=i(49977),a=i.n(p),h=i(124852),l=i.n(h),c=i(180307),m=i.n(c),d=i(234228);const u=(e,t)=>{const i=e.scene,r=t.position||t.endPosition;if(!r)return null;if(e.scene.drillPick(r).find((e=>!(!1===e?.id?.entityCollection?.owner?.queryable)))){let e=i.globe.depthTestAgainstTerrain,t=i.pickTranslucentDepth;i.globe.depthTestAgainstTerrain=!0,i.pickTranslucentDepth=!0;const s=i.pickPosition(r);if(i.globe.depthTestAgainstTerrain=e,i.pickTranslucentDepth=t,s)return o.Cartographic.fromCartesian(s)}const s=e.camera.getPickRay(r),n=e.scene.globe.pick(s,e.scene),p=i._globe.ellipsoid;if(o.defined(n)){const o=p.cartesianToCartographic(n),r=function(e,t){if(null!==t.position){const i=e.scene,o=i._globe.ellipsoid;return i.camera.pickEllipsoid(t.position||t.endPosition,o)}return null}(e,t);return r&&(o.height=i._globe.getHeight(o),o.cartesian=r,o.position=n),o}return null};var y=i(835516),g=i(351546),v=i(727418),f=i.n(v),b=i(823493),E=i.n(b),T=i(618446),P=i.n(T);function O(){return O=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var i=arguments[t];for(var o in i)Object.prototype.hasOwnProperty.call(i,o)&&(e[o]=i[o])}return e},O.apply(this,arguments)}function C(e,t,i){return(t=function(e){var t=function(e,t){if("object"!=typeof e||null===e)return e;var i=e[Symbol.toPrimitive];if(void 0!==i){var o=i.call(e,"string");if("object"!=typeof o)return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}class S extends l().Component{constructor(){var e;super(...arguments),e=this,C(this,"state",{renderError:null}),C(this,"onClick",((e,t)=>{if(this.props.onClick&&null!==t.position){const i=e.camera.pickEllipsoid(t.position,e.scene.globe.ellipsoid),r=this.getIntersectedFeatures(e,t.position);let s=u(e,t)||i&&o.Cartographic.fromCartesian(i);if(s){const e=180*s.latitude/Math.PI,t=180*s.longitude/Math.PI,i=(90-e)/180*this.props.standardHeight*(this.props.zoom+1),o=(180+t)/360*this.props.standardWidth*(this.props.zoom+1);this.props.onClick({pixel:{x:o,y:i},height:this.props.mapOptions&&this.props.mapOptions.terrainProvider||r.length>0?s.height:void 0,cartographic:s,latlng:{lat:e,lng:t},crs:"EPSG:4326",intersectedFeatures:r,resolution:(0,y.getResolutions)()[Math.round(this.props.zoom)]})}}})),C(this,"onMouseMove",(e=>{if(this.props.onMouseMove&&e.endPosition&&this.map?.camera){const t=this.map.camera.pickEllipsoid(e.endPosition,this.map.scene.globe.ellipsoid);let i=u(this.map,e)||t&&o.Cartographic.fromCartesian(t);if(i){const e=Math.round(i.height);this.props.onMouseMove({y:180*i.latitude/Math.PI,x:180*i.longitude/Math.PI,z:e,crs:"EPSG:4326"})}}})),C(this,"getDocument",(()=>this.props.document||document)),C(this,"getMapOptions",(e=>{let t={};if(e.terrainProvider){let{type:i,...r}=e.terrainProvider;switch(i){case"cesium":t.terrainProvider=new o.CesiumTerrainProvider(r);break;case"ellipsoid":t.terrainProvider=new o.EllipsoidTerrainProvider}}return f()({},e,t)})),C(this,"getCenter",(()=>{const e=this.map.camera.positionCartographic;return{longitude:180*e.longitude/Math.PI,latitude:180*e.latitude/Math.PI,height:e.height}})),C(this,"getZoomFromHeight",(e=>Math.log2(this.props.zoomToHeight/e)+1)),C(this,"getHeightFromZoom",(e=>this.props.zoomToHeight/Math.pow(2,e-1))),C(this,"getIntersectedFeatures",((e,t)=>{const i=e.scene.drillPick(t).filter((e=>!(!1===e?.id?.entityCollection?.owner?.queryable)));if(i){const e=i.reduce(((e,t)=>{let i,r;if(t instanceof o.Cesium3DTileFeature&&t?.tileset?.msId){i=t.tileset.msId;const e=t.getPropertyNames();r=Object.fromEntries(e.map((e=>[e,t.getProperty(e)])))}else if(t?.id instanceof o.Entity&&t.id.id&&t.id.properties){const{properties:{propertyNames:e},entityCollection:{owner:{name:o}}}=t.id;r=Object.fromEntries(e.map((e=>[e,t.id.properties[e].getValue(0)]))),i=o}return r&&i?{...e,[i]:e[i]?[...e[i],{type:"Feature",properties:r,geometry:null}]:[{type:"Feature",properties:r,geometry:null}]}:e}),[]);return Object.keys(e).map((t=>({id:t,features:e[t]})))}return[]})),C(this,"gestureStartListener",(e=>{e.preventDefault()})),C(this,"setMousePointer",(e=>{this.map&&(m().findDOMNode(this).getElementsByClassName("cesium-viewer")[0].style.cursor=e||"auto")})),C(this,"_updateMapPositionFromNewProps",(e=>{const t=this.getCenter(),i=this.getZoomFromHeight(t.height),r=function(e,t){return void 0!==e&&void 0!==t&&e.toFixed(12)-t.toFixed(12)<=1e-12},s=!r(e.center.x,t.longitude)||!r(e.center.y,t.latitude),n=e.zoom!==i;if(s||n){const t={destination:o.Cartesian3.fromDegrees(e.center.x,e.center.y,this.getHeightFromZoom(e.zoom)),orientation:e.viewerOptions.orientation};this.setView(t)}})),C(this,"setView",(e=>{this.props.mapOptions&&this.props.mapOptions.flyTo?this.map.camera.flyTo(e,this.props.mapOptions.defaultFlightOptions):this.map.camera.setView(e)})),C(this,"subscribeClickEvent",(e=>{const t={LEFT_UP:o.ScreenSpaceEventType.LEFT_UP,LEFT_DOWN:o.ScreenSpaceEventType.LEFT_DOWN,LEFT_CLICK:o.ScreenSpaceEventType.LEFT_CLICK,PINCH_START:o.ScreenSpaceEventType.PINCH_START,PINCH_END:o.ScreenSpaceEventType.PINCH_END,PINCH_MOVE:o.ScreenSpaceEventType.PINCH_MOVE},i=new(a().Subject),r=new(a().Subject);Object.keys(t).forEach((e=>this.hand.setInputAction((o=>{r.next({type:t[e],movement:o}),i.next({type:t[e],movement:o})}),t[e]))),r.filter((e=>e.type===t.PINCH_END)).switchMap((()=>a().Observable.of(!0).concat(a().Observable.of(!1).delay(500)))).startWith(!1).switchMap((e=>e?a().Observable.never():i)).filter((e=>e.type===t.LEFT_DOWN)).switchMap((e=>{let{movement:o}=e;return i.filter((e=>e.type===t.LEFT_CLICK)).takeUntil(a().Observable.timer(500).merge(i.filter((e=>{return e.type!==t.LEFT_UP&&e.type!==t.LEFT_CLICK||e.type===t.LEFT_UP&&(i=o&&o.position,r=e.movement&&e.movement.position,!(i&&r&&i.x===r.x&&i.y===r.y));var i,r}))))})).subscribe((t=>{let{movement:i}=t;return this.onClick(e,i)})),this.clickStream$=i,this.pauserStream$=r})),C(this,"registerHooks",(()=>{this.props.hookRegister.registerHook(y.GET_PIXEL_FROM_COORDINATES_HOOK),this.props.hookRegister.registerHook(y.GET_COORDINATES_FROM_PIXEL_HOOK),this.props.hookRegister.registerHook(y.ZOOM_TO_EXTENT_HOOK,(function(t){let{crs:i,duration:r}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};const s=(0,g.reprojectBbox)(t,i,"EPSG:4326");if(e.map.camera.flyTo){const t=o.Rectangle.fromDegrees(s[0],s[1],s[2],s[3]);e.map.camera.flyTo({destination:t,duration:r,complete:e.updateMapInfoState})}}))})),C(this,"updateMapInfoState",(()=>{const e=this.getCenter(),t=this.getZoomFromHeight(e.height),i={height:Math.round(this.props.standardWidth*(t+1)),width:Math.round(this.props.standardHeight*(t+1))};this.props.onMapViewChanges({x:e.longitude,y:e.latitude,crs:"EPSG:4326"},t,{bounds:{minx:-180,miny:-90,maxx:180,maxy:90},crs:"EPSG:4326",rotation:0},i,this.props.id,this.props.projection,{orientation:{heading:this.map.camera.heading,pitch:this.map.camera.pitch,roll:this.map.camera.roll}},(0,y.getResolutions)()[t])}))}UNSAFE_componentWillMount(){this.getDocument().addEventListener("gesturestart",this.gestureStartListener)}componentDidMount(){const e=document.querySelector(this.props.mapOptions?.attribution?.container||"#footer-attribution-container");let t=new o.Viewer(this.getDocument().getElementById(this.props.id),f()({imageryProvider:new o.OpenStreetMapImageryProvider,baseLayerPicker:!1,animation:!1,fullscreenButton:!1,geocoder:!1,homeButton:!1,infoBox:!1,sceneModePicker:!1,selectionIndicator:!1,timeline:!1,navigationHelpButton:!1,navigationInstructionsInitiallyVisible:!1,creditContainer:e||void 0,requestRenderMode:!0,maximumRenderTimeChange:1/0,skyBox:!1},this.getMapOptions(this.props.mapOptions)));t.screenSpaceEventHandler.removeInputAction(o.ScreenSpaceEventType.LEFT_DOUBLE_CLICK),this.props.errorPanel&&(t.cesiumWidget.showErrorPanel=(e,t,i)=>{this.setState({renderError:{title:e,message:t,error:i}})}),this.props.registerHooks&&this.registerHooks(),(this.props.mapOptions?.navigationTools||this.props.zoomControl)&&t.extend(r.Z,{enableCompass:this.props.mapOptions?.navigationTools,enableZoomControls:this.props.zoomControl,enableDistanceLegend:!1}),t.scene.globe.baseColor=o.Color.WHITE,t.imageryLayers.removeAll(),t.camera.moveEnd.addEventListener(this.updateMapInfoState),this.hand=new o.ScreenSpaceEventHandler(t.scene.canvas),this.subscribeClickEvent(t),this.hand.setInputAction(E()(this.onMouseMove.bind(this),500),o.ScreenSpaceEventType.MOUSE_MOVE),t.camera.setView({destination:o.Cartesian3.fromDegrees(this.props.center.x,this.props.center.y,this.getHeightFromZoom(this.props.zoom))}),this.setMousePointer(this.props.mousePointer),this.map=t;const i=this.map.scene;i.skyAtmosphere.show=this.props.mapOptions?.showSkyAtmosphere??!0,i.fog.enabled=this.props.mapOptions?.enableFog??!1,i.globe.showGroundAtmosphere=this.props.mapOptions?.showGroundAtmosphere??!1,i.globe.depthTestAgainstTerrain=this.props.mapOptions?.depthTestAgainstTerrain??!1,this.forceUpdate(),t.scene.requestRender()}UNSAFE_componentWillReceiveProps(e){return e.mousePointer!==this.props.mousePointer&&this.setMousePointer(e.mousePointer),e.mapStateSource!==this.props.id&&this._updateMapPositionFromNewProps(e),!1}componentDidUpdate(e){if(this.props?.orientate&&e&&!P()(this.props.orientate,e?.orientate)){const e={destination:o.Cartesian3.fromDegrees(parseFloat(this.props.orientate.x),parseFloat(this.props.orientate.y),this.getHeightFromZoom(parseFloat(this.props.orientate.z))),orientation:{heading:parseFloat(this.props.orientate.heading),pitch:parseFloat(this.props.orientate.pitch),roll:parseFloat(this.props.orientate.roll)}};this.setView(e)}e&&this.props.mapOptions.showSkyAtmosphere!==e?.mapOptions?.showSkyAtmosphere&&(this.map.scene.skyAtmosphere.show=this.props.mapOptions.showSkyAtmosphere),e&&this.props.mapOptions.showGroundAtmosphere!==e?.mapOptions?.showGroundAtmosphere&&(this.map.scene.globe.showGroundAtmosphere=this.props.mapOptions.showGroundAtmosphere),e&&this.props.mapOptions.enableFog!==e?.mapOptions?.enableFog&&(this.map.scene.fog.enabled=this.props.mapOptions.enableFog),e&&this.props.mapOptions.depthTestAgainstTerrain!==e?.mapOptions?.depthTestAgainstTerrain&&(this.map.scene.globe.depthTestAgainstTerrain=this.props.mapOptions.depthTestAgainstTerrain)}componentWillUnmount(){this.clickStream$.complete(),this.pauserStream$.complete(),this.hand.destroy(),this.getDocument().removeEventListener("gesturestart",this.gestureStartListener),this.map?.cesiumNavigation?.destroy&&this.map.cesiumNavigation.destroy(),this.map.destroy()}render(){const e=this.map,t=this.props.projection,i=e?l().Children.map(this.props.children,(i=>i?l().cloneElement(i,{map:e,projection:t,onCreationError:this.props.onCreationError,zoom:this.props.zoom}):null)):null,o=this.props.errorPanel;return l().createElement("div",{id:this.props.id},i,o?l().createElement(o,{show:!!this.state.renderError,error:this.state.renderError?.error,onReload:()=>this.props.onReload()}):null)}}C(S,"propTypes",{id:n().string,document:n().object,center:d.ZP.PropTypes.center,zoom:n().number.isRequired,mapStateSource:d.ZP.PropTypes.mapStateSource,projection:n().string,onMapViewChanges:n().func,onCreationError:n().func,onClick:n().func,onMouseMove:n().func,mapOptions:n().object,standardWidth:n().number,standardHeight:n().number,mousePointer:n().string,zoomToHeight:n().number,registerHooks:n().bool,hookRegister:n().object,viewerOptions:n().object,orientate:n().object,zoomControl:n().bool,errorPanel:n().func,onReload:n().func}),C(S,"defaultProps",{id:"map",onMapViewChanges:()=>{},onClick:()=>{},onCreationError:()=>{},projection:"EPSG:3857",mapOptions:{},standardWidth:512,standardHeight:512,zoomToHeight:8e7,registerHooks:!0,hookRegister:{registerHook:y.registerHook},orientate:void 0,viewerOptions:{orientation:{heading:0,pitch:-1*Math.PI/2,roll:0}},onReload:()=>{}});const k=(0,h.forwardRef)(((e,t)=>{const[i,o]=(0,h.useState)(1);return l().createElement(S,O({key:i,ref:t},e,{onReload:()=>o(i+1)}))}))}}]);