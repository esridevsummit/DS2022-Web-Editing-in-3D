var J=Object.defineProperty;var m=Object.getOwnPropertySymbols;var R=Object.prototype.hasOwnProperty,$=Object.prototype.propertyIsEnumerable;var g=(e,t,r)=>t in e?J(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))R.call(t,r)&&g(e,r,t[r]);if(m)for(var r of m(t))$.call(t,r)&&g(e,r,t[r]);return e};import{aM as P,ac as s,ad as i,ae as S,kX as q,ke as k,a8 as F,hh as T,gf as E,V as v,aH as D,v as G,nC as Q,dP as Z,ic as x,vb as z,vc as C,vd as L,uQ as V,ve as B,uR as M,uX as U,hs as W,hu as A,fM as X,k as _,vf as b,vg as H,S as O,kZ as K,fP as c,v3 as Y,vh as ee,hP as te,v7 as re,vi as se,vj as ie,vk as oe,v8 as ne,vl as ae,l3 as le,l4 as ue,vm as de,l2 as pe,vn as he,vo as ce,vp as ye,hz as fe,l5 as me}from"./vendor.1dc52be5.js";import{c as ge}from"./clientSideDefaults.7cd41b7c.js";import"./QueryEngineCapabilities.650d7541.js";const I=P.getLogger("esri.layers.graphics.sources.GeoJSONSource");let p=class extends q{constructor(){super(...arguments),this.type="geojson",this.refresh=k(async e=>{await this.load();const{extent:t,timeExtent:r}=await this._connection.invoke("refresh",e);return this.sourceJSON.extent=t,r&&(this.sourceJSON.timeInfo.timeExtent=[r.start,r.end]),{dataChanged:!0,updates:{extent:this.sourceJSON.extent,timeInfo:this.sourceJSON.timeInfo}}})}load(e){const t=F(e)?e.signal:null;return this.addResolvingPromise(this._startWorker(t)),Promise.resolve(this)}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null}applyEdits(e){return this.load().then(()=>this._applyEdits(e))}openPorts(){return this.load().then(()=>this._connection.openPorts())}queryFeatures(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t)).then(r=>T.fromJSON(r))}queryFeaturesJSON(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatures",e?e.toJSON():null,t))}queryFeatureCount(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryFeatureCount",e?e.toJSON():null,t))}queryObjectIds(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryObjectIds",e?e.toJSON():null,t))}queryExtent(e,t={}){return this.load(t).then(()=>this._connection.invoke("queryExtent",e?e.toJSON():null,t)).then(r=>({count:r.count,extent:E.fromJSON(r.extent)}))}querySnapping(e,t={}){return this.load(t).then(()=>this._connection.invoke("querySnapping",e,t))}_applyEdits(e){if(!this._connection)throw new v("geojson-layer-source:edit-failure","Memory source not loaded");const t=this.layer.objectIdField,r=[],n=[],d=[];if(e.addFeatures)for(const a of e.addFeatures)r.push(this._serializeFeature(a));if(e.deleteFeatures)for(const a of e.deleteFeatures)"objectId"in a&&a.objectId!=null?n.push(a.objectId):"attributes"in a&&a.attributes[t]!=null&&n.push(a.attributes[t]);if(e.updateFeatures)for(const a of e.updateFeatures)d.push(this._serializeFeature(a));return this._connection.invoke("applyEdits",{adds:r,updates:d,deletes:n}).then(({extent:a,timeExtent:l,featureEditResults:u})=>(this.sourceJSON.extent=a,l&&(this.sourceJSON.timeInfo.timeExtent=[l.start,l.end]),this._createEditsResult(u)))}_createEditsResult(e){return{addFeatureResults:e.addResults?e.addResults.map(this._createFeatureEditResult,this):[],updateFeatureResults:e.updateResults?e.updateResults.map(this._createFeatureEditResult,this):[],deleteFeatureResults:e.deleteResults?e.deleteResults.map(this._createFeatureEditResult,this):[],addAttachmentResults:[],updateAttachmentResults:[],deleteAttachmentResults:[]}}_createFeatureEditResult(e){const t=e.success===!0?null:e.error||{code:void 0,description:void 0};return{objectId:e.objectId,globalId:e.globalId,error:t?new v("geojson-layer-source:edit-failure",t.description,{code:t.code}):null}}_serializeFeature(e){const{attributes:t}=e,r=this._geometryForSerialization(e);return r?{geometry:r.toJSON(),attributes:t}:{attributes:t}}_geometryForSerialization(e){const{geometry:t}=e;return D(t)?null:t.type==="mesh"||t.type==="extent"?G.fromExtent(t.extent):t}async _startWorker(e){this._connection=await Q("GeoJSONSourceWorker",{strategy:Z("feature-layers-workers")?"dedicated":"local",signal:e});const{fields:t,spatialReference:r,hasZ:n,geometryType:d,objectIdField:a,url:l,timeInfo:u,customParameters:j}=this.layer,w=this.layer.originOf("spatialReference")==="defaults",N={url:l,customParameters:j,fields:t&&t.map(y=>y.toJSON()),geometryType:x.toJSON(d),hasZ:n,objectIdField:a,timeInfo:u?u.toJSON():null,spatialReference:w?null:r&&r.toJSON()},h=await this._connection.invoke("load",N,{signal:e});for(const y of h.warnings)I.warn(y.message,{layer:this.layer,warning:y});h.featureErrors.length&&I.warn(`Encountered ${h.featureErrors.length} validation errors while loading features`,h.featureErrors),this.sourceJSON=h.layerDefinition,this.capabilities=ge(this.sourceJSON.hasZ,!0)}};s([i()],p.prototype,"capabilities",void 0),s([i()],p.prototype,"type",void 0),s([i({constructOnly:!0})],p.prototype,"layer",void 0),s([i()],p.prototype,"sourceJSON",void 0),p=s([S("esri.layers.graphics.sources.GeoJSONSource")],p);const ve=p,be=me();let o=class extends z(C(L(V(B(M(U(W(A(X))))))))){constructor(e){super(e),this.copyright=null,this.definitionExpression=null,this.displayField=null,this.editingEnabled=!1,this.elevationInfo=null,this.featureReduction=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelsVisible=!0,this.labelingInfo=null,this.legendEnabled=!0,this.objectIdField=null,this.operationalLayerType="GeoJSON",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new ve({layer:this}),this.spatialReference=_.WGS84,this.templates=null,this.title="GeoJSON",this.type="geojson",this.typeIdField=null,this.types=null}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.source.load(e).then(()=>{this.read(this.source.sourceJSON,{origin:"service",url:this.parsedUrl}),this.revert(["objectIdField","fields","timeInfo"],"service"),b(this.renderer,this.fieldsIndex),H(this.timeInfo,this.fieldsIndex)})),Promise.resolve(this)}get capabilities(){return this.source?this.source.capabilities:null}get createQueryVersion(){return this.commitProperty("definitionExpression"),this.commitProperty("timeExtent"),this.commitProperty("timeOffset"),this.commitProperty("geometryType"),this.commitProperty("capabilities"),(this._get("createQueryVersion")||0)+1}get defaultPopupTemplate(){return this.createPopupTemplate()}get isTable(){return this.loaded&&this.geometryType==null}get parsedUrl(){return this.url?O(this.url):null}set renderer(e){b(e,this.fieldsIndex),this._set("renderer",e)}set url(e){if(!e)return void this._set("url",e);const t=O(e);this._set("url",t.path),t.query&&(this.customParameters=f(f({},this.customParameters),t.query))}async applyEdits(e,t){const r=await import("./editingSupport.bfb62944.js");await this.load();const n=await r.applyEdits(this,this.source,e,t);return this.read({extent:this.source.sourceJSON.extent,timeInfo:this.source.sourceJSON.timeInfo},{origin:"service",ignoreDefaults:!0}),n}on(e,t){return super.on(e,t)}createPopupTemplate(e){return K(this,e)}createQuery(){const e=new c,t=this.get("capabilities.data");e.returnGeometry=!0,t&&t.supportsZ&&(e.returnZ=!0),e.outFields=["*"],e.where=this.definitionExpression||"1=1";const{timeOffset:r,timeExtent:n}=this;return e.timeExtent=r!=null&&n!=null?n.offset(-r.value,r.unit):n||null,e}getFieldDomain(e,t){let r,n=!1;const d=t&&t.feature,a=d&&d.attributes,l=this.typeIdField&&a&&a[this.typeIdField];return l!=null&&this.types&&(n=this.types.some(u=>u.id==l&&(r=u.domains&&u.domains[e],r&&r.type==="inherited"&&(r=this._getLayerDomain(e)),!0))),n||r||(r=this._getLayerDomain(e)),r}getField(e){return this.fieldsIndex.get(e)}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(c.from(e)||this.createQuery(),t)).then(r=>{if(r!=null&&r.features)for(const n of r.features)n.layer=n.sourceLayer=this;return r})}queryObjectIds(e,t){return this.load().then(()=>this.source.queryObjectIds(c.from(e)||this.createQuery(),t))}queryFeatureCount(e,t){return this.load().then(()=>this.source.queryFeatureCount(c.from(e)||this.createQuery(),t))}queryExtent(e,t){return this.load().then(()=>this.source.queryExtent(c.from(e)||this.createQuery(),t))}async hasDataChanged(){try{const{dataChanged:e,updates:t}=await this.source.refresh(this.customParameters);return F(t)&&this.read(t,{origin:"service",url:this.parsedUrl,ignoreDefaults:!0}),e}catch{}return!1}_getLayerDomain(e){if(!this.fields)return null;let t=null;return this.fields.some(r=>(r.name===e&&(t=r.domain),!!t)),t}};s([i({readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"capabilities",null),s([i({type:String})],o.prototype,"copyright",void 0),s([i({readOnly:!0})],o.prototype,"createQueryVersion",null),s([i({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),s([i({type:String,json:{name:"layerDefinition.definitionExpression",write:{enabled:!0,allowNull:!0}}})],o.prototype,"definitionExpression",void 0),s([i({type:String})],o.prototype,"displayField",void 0),s([i({type:Boolean})],o.prototype,"editingEnabled",void 0),s([i(Y)],o.prototype,"elevationInfo",void 0),s([i(ee)],o.prototype,"featureReduction",void 0),s([i({type:[te],json:{name:"layerDefinition.fields",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"fields"}}}})],o.prototype,"fields",void 0),s([i(be.fieldsIndex)],o.prototype,"fieldsIndex",void 0),s([i({type:E,json:{name:"extent"}})],o.prototype,"fullExtent",void 0),s([i({type:["point","polygon","polyline","multipoint"],json:{read:{reader:x.read}}})],o.prototype,"geometryType",void 0),s([i({type:Boolean})],o.prototype,"hasZ",void 0),s([i(re)],o.prototype,"id",void 0),s([i({type:Boolean,readOnly:!0})],o.prototype,"isTable",null),s([i(se)],o.prototype,"labelsVisible",void 0),s([i({type:[ie],json:{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:oe},write:!0}})],o.prototype,"labelingInfo",void 0),s([i(ne)],o.prototype,"legendEnabled",void 0),s([i({type:["show","hide"]})],o.prototype,"listMode",void 0),s([i({type:String,json:{name:"layerDefinition.objectIdField",write:{ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"objectIdField"}}}})],o.prototype,"objectIdField",void 0),s([i(ae)],o.prototype,"opacity",void 0),s([i({type:["GeoJSON"]})],o.prototype,"operationalLayerType",void 0),s([i({readOnly:!0})],o.prototype,"parsedUrl",null),s([i(le)],o.prototype,"popupEnabled",void 0),s([i({type:ue,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),s([i({types:de,json:{name:"layerDefinition.drawingInfo.renderer",write:!0,origins:{service:{name:"drawingInfo.renderer"},"web-scene":{types:pe}}}})],o.prototype,"renderer",null),s([i(he)],o.prototype,"screenSizePerspectiveEnabled",void 0),s([i({readOnly:!0})],o.prototype,"source",void 0),s([i({type:_})],o.prototype,"spatialReference",void 0),s([i({type:[ce]})],o.prototype,"templates",void 0),s([i()],o.prototype,"title",void 0),s([i({json:{read:!1},readOnly:!0})],o.prototype,"type",void 0),s([i({type:String,readOnly:!0})],o.prototype,"typeIdField",void 0),s([i({type:[ye]})],o.prototype,"types",void 0),s([i(fe)],o.prototype,"url",null),o=s([S("esri.layers.GeoJSONLayer")],o);const Ee=o;export{Ee as default};
