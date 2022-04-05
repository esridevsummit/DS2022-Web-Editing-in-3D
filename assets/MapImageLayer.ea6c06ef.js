var I=Object.defineProperty,M=Object.defineProperties;var E=Object.getOwnPropertyDescriptors;var S=Object.getOwnPropertySymbols;var T=Object.prototype.hasOwnProperty,P=Object.prototype.propertyIsEnumerable;var x=(e,t,r)=>t in e?I(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))T.call(t,r)&&x(e,r,t[r]);if(S)for(var r of S(t))P.call(t,r)&&x(e,r,t[r]);return e},m=(e,t)=>M(e,E(t));import{uQ as R,ve as L,uR as U,hr as q,hs as F,ht as J,hu as N,uX as j,u$ as k,vc as A,aR as V,fM as z,a8 as C,hw as W,vT as w,mB as f,vU as _,V as O,hc as b,fJ as B,gf as D,qf as G,uV as H,vF as K,ac as a,ad as n,hg as Q,qU as X,kU as Y,hz as Z,ae as ee}from"./vendor.1dc52be5.js";import{S as te,y as re,W as se}from"./SublayersOwner.900acffe.js";import{c as ie}from"./ExportImageParameters.70091022.js";import{e as $}from"./sublayerUtils.9294814a.js";let s=class extends R(L(U(te(re(q(F(J(N(j(k(A(V(z))))))))))))){constructor(...e){super(...e),this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,t){return typeof e=="string"?p({url:e},t):e}load(e){const t=C(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(W).then(()=>this._fetchService(t))),Promise.resolve(this)}readImageFormat(e,t){const r=t.supportedImageFormatTypes;return r&&r.indexOf("PNG32")>-1?"png32":"png24"}writeSublayers(e,t,r,i){if(!this.loaded||!e)return;const u=e.slice().reverse().flatten(({sublayers:o})=>o&&o.toArray().reverse()).toArray();let l=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&this.capabilities.exportMap.supportsDynamicLayers){const o=w(i.origin);if(o===f.PORTAL_ITEM){const y=this.createSublayersForOrigin("service").sublayers;l=$(u,y,f.SERVICE)}else if(o>f.PORTAL_ITEM){const y=this.createSublayersForOrigin("portal-item");l=$(u,y.sublayers,w(y.origin))}}const h=[],c=p({writeSublayerStructure:l},i);let d=l;u.forEach(o=>{const y=o.write({},c);h.push(y),d=d||o.originOf("visible")==="user"}),h.some(o=>Object.keys(o).length>1)&&(t.layers=h),d&&(t.visibleLayers=u.filter(o=>o.visible).map(o=>o.id))}createExportImageParameters(e,t,r,i){const u=i&&i.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const l=new ie({layer:this,floors:i==null?void 0:i.floors,scale:_({extent:e,width:t})*u}),h=l.toJSON();l.destroy();const c=!i||!i.rotation||this.version<10.3?{}:{rotation:-i.rotation},d=e&&e.spatialReference,o=d.wkid||JSON.stringify(d.toJSON());h.dpi*=u;const y={};if(i!=null&&i.timeExtent){const{start:g,end:v}=i.timeExtent.toJSON();y.time=g&&v&&g===v?""+g:`${g==null?"null":g},${v==null?"null":v}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(y.time="null,null");return p(p(p({bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:o,imageSR:o,size:t+","+r},h),c),y)}async fetchImage(e,t,r,i){var u;const l={responseType:"image",signal:(u=i==null?void 0:i.signal)!=null?u:null,query:m(p(p(m(p(p({},this.parsedUrl.query),this.createExportImageParameters(e,t,r,i)),{f:"image"}),this.refreshParameters),this.customParameters),{token:this.apiKey})},h=this.parsedUrl.path+"/export";return l.query.dynamicLayers!=null&&!this.capabilities.exportMap.supportsDynamicLayers?Promise.reject(new O("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:l.query})):b(h,l).then(c=>c.data).catch(c=>{throw B(c)?c:new O("mapimagelayer:image-fetch-error",`Unable to load image: ${h}`,{error:c})})}async fetchRecomputedExtents(e={}){const t=m(p({},e),{query:m(p({returnUpdates:!0,f:"json"},this.customParameters),{token:this.apiKey})}),{data:r}=await b(this.url,t),{extent:i,fullExtent:u,timeExtent:l}=r,h=i||u;return{fullExtent:h&&D.fromJSON(h),timeExtent:l&&G.fromJSON({start:l[0],end:l[1]})}}loadAll(){return H(this,e=>{e(this.allSublayers)})}serviceSupportsSpatialReference(e){return K(this,e)}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:t,ssl:r}=await b(this.parsedUrl.path,{query:m(p(p({f:"json"},this.parsedUrl.query),this.customParameters),{token:this.apiKey}),signal:e});r&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=t,this.read(t,{origin:"service",url:this.parsedUrl})}};a([n({type:Boolean})],s.prototype,"datesInUnknownTimezone",void 0),a([n()],s.prototype,"dpi",void 0),a([n()],s.prototype,"gdbVersion",void 0),a([n()],s.prototype,"imageFormat",void 0),a([Q("imageFormat",["supportedImageFormatTypes"])],s.prototype,"readImageFormat",null),a([n({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],s.prototype,"imageMaxHeight",void 0),a([n({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],s.prototype,"imageMaxWidth",void 0),a([n()],s.prototype,"imageTransparency",void 0),a([n({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],s.prototype,"isReference",void 0),a([n({json:{read:!1,write:!1}})],s.prototype,"labelsVisible",void 0),a([n({type:["ArcGISMapServiceLayer"]})],s.prototype,"operationalLayerType",void 0),a([n({json:{read:!1,write:!1}})],s.prototype,"popupEnabled",void 0),a([n()],s.prototype,"sourceJSON",void 0),a([n({json:{write:{ignoreOrigin:!0}}})],s.prototype,"sublayers",void 0),a([X("sublayers",{layers:{type:[se]},visibleLayers:{type:[Y]}})],s.prototype,"writeSublayers",null),a([n({type:["show","hide","hide-children"]})],s.prototype,"listMode",void 0),a([n({json:{read:!1},readOnly:!0,value:"map-image"})],s.prototype,"type",void 0),a([n(Z)],s.prototype,"url",void 0),s=a([ee("esri.layers.MapImageLayer")],s);const ue=s;export{ue as default};
