(self.webpackChunkmapstore2=self.webpackChunkmapstore2||[]).push([[138],{230138:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>c});var n=i(845243),o=i.n(n),r=i(984596),l=i.n(r);const s={Point:["Mark","Icon","Text"],MultiPoint:["Mark","Icon","Text"],LineString:["Line"],MultiLineString:["Line"],Polygon:["Fill"],MultiPolygon:["Fill"]};const c=class{constructor(){let{drawIcons:e,getImageIdFromSymbolizer:t,geoStylerStyleFilter:i}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._drawIcons=e||(()=>Promise.resolve(null)),this._getImageIdFromSymbolizer=t||(e=>e.symbolizerId),this._geoStylerStyleFilter=i||(()=>!0)}readStyle(){return new Promise(((e,t)=>{try{e(null)}catch(e){t(e)}}))}writeStyle(e){var t=this;return new Promise(((i,n)=>{try{this._drawIcons(e).then((function(){const n=function(e,t){let{rules:i=[]}=e,{geoStylerStyleFilter:n,images:r,getImageIdFromSymbolizer:c}=t;const a=[...i].reverse();return function(){let{opacity:e=1}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return{filter:e=>{const t=e?.geometry?.type;if(0===a.length)return!1;const i=s[t]||[];return!!a.find((t=>t?.symbolizers?.find((e=>i.includes(e.kind)))&&(!t.filter||n(e,t.filter))))},pointToLayer:(t,i)=>{const d=t?.geometry?.type,y=s[d]||[],f=a.find((e=>e?.symbolizers?.find((e=>y.includes(e.kind)))&&(!e.filter||n(t,e.filter))))||{},u=f?.symbolizers?.find((e=>y.includes(e.kind)))||{};if("Mark"===u.kind){const{image:t,src:n,width:l,height:s}=r.find((e=>{let{id:t}=e;return t===c(u)}))||{};if(t){const t=l/s,r=2*u.radius;let c=r,a=c/t;return s>l&&(a=r,c=a*t),o().marker(i,{icon:o().icon({iconUrl:n,iconSize:[c,a],iconAnchor:[c/2,a/2]}),opacity:1*e})}}if("Icon"===u.kind){const{image:t,src:n,width:l,height:s}=r.find((e=>{let{id:t}=e;return t===c(u)}))||{};if(t){const t=l/s;let r=u.size,c=r/t;return s>l&&(c=u.size,r=c*t),o().marker(i,{icon:o().icon({iconUrl:n,iconSize:[r,c],iconAnchor:[r/2,c/2]}),opacity:u.opacity*e})}}if("Text"===u.kind){const n=function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.properties?Object.keys(e.properties).reduce(((t,i)=>{const n=new RegExp(`\\{\\{${i}\\}\\}`,"g");return t.replace(n,e.properties[i]??"")}),t):t}(t,u.label),r=`\n                        -webkit-text-stroke-width:${u.haloWidth}px;\n                        -webkit-text-stroke-color:${u.haloColor||""};\n                    `,s=o().divIcon({html:`<div style="\n                            color:${u.color};\n                            font-family: ${l()(u.font||[]).join(", ")};\n                            font-style: ${u.fontStyle||"normal"};\n                            font-weight: ${u.fontWeight||"normal"};\n                            font-size: ${u.size}px;\n\n                            position: absolute;\n                            transform: translate(${u?.offset?.[0]??0}px, ${u?.offset?.[1]??0}px) rotateZ(${u?.rotate??0}deg);\n\n                            ${u.haloWidth>0?r:""}\n                        ">\n                            ${n}\n                            </div>`,className:""});return o().marker(i,{icon:s,opacity:1*e})}return null},style:t=>{const i=t?.geometry?.type,o=s[i]||[],r=a.find((e=>e?.symbolizers?.find((e=>o.includes(e.kind)))&&(!e.filter||n(t,e.filter))))||{},l=r?.symbolizers?.find((e=>o.includes(e.kind)))||{};return"Line"===l.kind?{stroke:!0,fill:!1,color:l.color,opacity:l.opacity*e,weight:l.width,...l.dasharray&&{dashArray:l.dasharray.join(" ")},...l.cap&&{lineCap:l.cap},...l.join&&{lineJoin:l.join}}:"Fill"===l.kind?{fill:!0,stroke:!0,fillColor:l.color,fillOpacity:l.fillOpacity*e,color:l.outlineColor,opacity:(l.outlineOpacity??0)*e,weight:l.outlineWidth??0}:{stroke:!1,fill:!1}}}}}(e,{images:arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],getImageIdFromSymbolizer:t._getImageIdFromSymbolizer,geoStylerStyleFilter:t._geoStylerStyleFilter});i(n)}))}catch(e){n(e)}}))}}}}]);