import{aM as $,ac as o,ad as l,mi as N,kw as G,mj as j,ae as C,cR as M,gN as x,kt as v,ku as b,mk as R,a8 as u,fP as k,hX as q,gI as B,gr as I,hV as P,ml as Q,mm as _,mn as S,mo as V,mp as O,mq as m,aH as L,V as F,mr as T}from"./vendor.1dc52be5.js";import{d as g,t as z}from"./popupUtils.b61067f9.js";const h=$.getLogger("esri.views.layers.FeatureLayerView"),H=A=>{let n=class extends A{constructor(...t){super(...t),this._updatingRequiredFieldsPromise=null,this.filter=null,this.timeExtent=null,this.layer=null,this.requiredFields=[],this.view=null}initialize(){M(this,["layer.renderer","layer.labelingInfo","layer.elevationInfo.featureExpressionInfo","layer.displayField","filter","featureEffect","layer.timeInfo","layer.floorInfo","timeExtent"],()=>this._handleRequiredFieldsChange(),!0),x(this,"view.floors","change",()=>this._handleRequiredFieldsChange()),x(this,"layer.sublayer","change",()=>this._handleRequiredFieldsChange())}get availableFields(){const{layer:t,layer:{fieldsIndex:e},requiredFields:r}=this;return"outFields"in t&&t.outFields?v(e,[...b(e,t.outFields),...r]):v(e,r)}set effect(t){R(h,"effect",{replacement:"featureEffect",version:"4.22"}),this.featureEffect=t}get effect(){return R(h,"effect",{replacement:"featureEffect",version:"4.22"}),this.featureEffect}get featureEffect(){return this.layer&&"featureEffect"in this.layer?this.layer.featureEffect:null}set featureEffect(t){t!==void 0?this._override("featureEffect",t):this._clearOverride("featureEffect")}get maximumNumberOfFeatures(){return 0}set maximumNumberOfFeatures(t){h.error("#maximumNumberOfFeatures=","Setting maximum number of features is not supported")}get maximumNumberOfFeaturesExceeded(){return!1}highlight(t){throw new Error("missing implementation")}createQuery(){const t={outFields:["*"],returnGeometry:!0,outSpatialReference:this.view.spatialReference},e=u(this.filter)?this.filter.createQuery(t):new k(t);if(this.layer.type==="feature"){const r=q(this);u(r)&&(e.where=e.where?`(${e.where}) AND (${r})`:r)}return u(this.timeExtent)&&(e.timeExtent=u(e.timeExtent)?e.timeExtent.intersection(this.timeExtent):this.timeExtent.clone()),e}queryFeatures(t,e){throw new Error("missing implementation")}queryObjectIds(t,e){throw new Error("missing implementation")}queryFeatureCount(t,e){throw new Error("missing implementation")}queryExtent(t,e){throw new Error("missing implementation")}async fetchPopupFeatures(t,e){const r=this.validateFetchPopupFeatures(e);if(r)throw r;return this.fetchClientPopupFeatures(e)}_loadArcadeModules(t){if(t.get("expressionInfos.length")||Array.isArray(t.content)&&t.content.some(e=>e.type==="expression"))return B()}_handleRequiredFieldsChange(){const t=this._updateRequiredFields();this._set("_updatingRequiredFieldsPromise",t),t.then(()=>{this._updatingRequiredFieldsPromise===t&&this._set("_updatingRequiredFieldsPromise",null)})}async _updateRequiredFields(){if(!this.layer||!this.view)return;const t=this.view.type==="3d",{layer:e,layer:{fieldsIndex:r,objectIdField:f}}=this,p="renderer"in e&&e.renderer,a="orderBy"in e&&e.orderBy,s=e.featureReduction,i=new Set,y=await I([p?p.collectRequiredFields(i,r):null,P(i,e),t?Q(i,e):null,u(this.filter)?_(i,e,this.filter):null,u(this.featureEffect)?_(i,e,this.featureEffect.filter):null,s?S(i,e,s):null,a?V(i,e,a):null]);if(e.timeInfo&&this.timeExtent&&O(i,e.fieldsIndex,[e.timeInfo.startField,e.timeInfo.endField]),e.type==="feature"&&e.floorInfo&&O(i,e.fieldsIndex,[e.floorInfo.floorField]),e.type==="subtype-group"){m(i,r,e.subtypeField);const d=e.sublayers.map(w=>{var E;return Promise.all([(E=w.renderer)==null?void 0:E.collectRequiredFields(i,r),P(i,w)])});await I(d)}for(const d of y)d.error&&h.error(d.error);m(i,r,f),t&&"displayField"in e&&e.displayField&&m(i,r,e.displayField);const c=Array.from(i).sort();this._set("requiredFields",c)}validateFetchPopupFeatures(t){if(L(t))return null;for(const e of t.clientGraphics){const r=e.layer;if("popupEnabled"in r&&!r.popupEnabled)return new F("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:r});if("popupTemplate"in r&&!g(r,t))return new F("featurelayerview:fetchPopupFeatures","Layer does not define a popup template",{layer:r});if(e.isAggregate&&!(r.featureReduction&&"popupTemplate"in r.featureReduction&&r.featureReduction.popupEnabled&&r.featureReduction.popupTemplate))return new F("featurelayerview:fetchPopupFeatures","Popups are disabled",{layer:r})}}async fetchClientPopupFeatures(t){const e=u(t)?t.clientGraphics:null;if(!e||e.length===0)return[];const r=new Array(e.length),f=new Map,p=await this.createPopupQuery(t);for(let a=0;a<e.length;a++){const s=e[a];if(s.isAggregate){r[a]=s;continue}const{layer:i}=s;if(!("popupEnabled"in i))continue;const y=b(this.layer.fieldsIndex,p.outFields),c=g(i,t);if(!u(c))continue;const d=await this._loadArcadeModules(c);d&&d.arcadeUtils.hasGeometryOperations(c)||!T(y,s)?f.set(s.getObjectId(),a):r[a]=s}if(this.layer.type==="stream"||f.size===0)return r.filter(Boolean);p.objectIds=Array.from(f.keys());try{const a=await this.layer.queryFeatures(p);for(const s of a.features)r[f.get(s.getObjectId())]=s}catch{}return r.filter(Boolean)}async createPopupQuery(t){const e=this.layer.createQuery(),r=new Set;let f=!1;const p=u(t)&&t.clientGraphics?t.clientGraphics.map(a=>a.layer):[this.layer];for(const a of p){if(!("popupEnabled"in a))continue;const s=g(a,t);if(!u(s))continue;const i=await this._loadArcadeModules(s),y=i&&i.arcadeUtils.hasGeometryOperations(s);f=!(this.layer.geometryType!=="point"&&!y);const c=await z(this.layer,s);for(const d of c)r.add(d)}if(e.returnGeometry=f,e.returnZ=f,e.returnM=f,e.outFields=Array.from(r),e.outSpatialReference=this.view.spatialReference,this.layer.type==="feature"){const a=q(this);u(a)&&(e.where=e.where?`(${e.where}) AND (${a})`:a)}return e}canResume(){return!!super.canResume()&&(!u(this.timeExtent)||!this.timeExtent.isEmpty)}};return o([l()],n.prototype,"_updatingRequiredFieldsPromise",void 0),o([l({readOnly:!0})],n.prototype,"availableFields",null),o([l()],n.prototype,"effect",null),o([l({type:N})],n.prototype,"featureEffect",null),o([l({type:G})],n.prototype,"filter",void 0),o([l(j)],n.prototype,"timeExtent",void 0),o([l()],n.prototype,"layer",void 0),o([l({type:Number})],n.prototype,"maximumNumberOfFeatures",null),o([l({readOnly:!0,type:Boolean})],n.prototype,"maximumNumberOfFeaturesExceeded",null),o([l({readOnly:!0})],n.prototype,"requiredFields",void 0),o([l()],n.prototype,"suspended",void 0),o([l()],n.prototype,"view",void 0),n=o([C("esri.views.layers.FeatureLayerView")],n),n};export{H as O};
