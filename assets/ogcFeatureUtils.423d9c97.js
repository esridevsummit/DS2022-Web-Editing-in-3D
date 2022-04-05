var X=Object.defineProperty,Y=Object.defineProperties;var ee=Object.getOwnPropertyDescriptors;var R=Object.getOwnPropertySymbols;var te=Object.prototype.hasOwnProperty,ne=Object.prototype.propertyIsEnumerable;var W=(t,e,n)=>e in t?X(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,p=(t,e)=>{for(var n in e||(e={}))te.call(e,n)&&W(t,n,e[n]);if(R)for(var n of R(e))ne.call(e,n)&&W(t,n,e[n]);return t},y=(t,e)=>Y(t,ee(e));import{aM as ie,aH as b,V as w,hc as k,pX as ae,iG as se,k as $,qz as re,a6 as oe,a8 as x,jj as le,ip as ce,fT as Z,pt as de,qA as ue}from"./vendor.1dc52be5.js";import{O as fe,T as pe,L as me}from"./geojson.ede8a3dd.js";import{n as ge}from"./clientSideDefaults.7cd41b7c.js";const N=ie.getLogger("esri.layers.graphics.sources.ogcfeature"),K="http://www.opengis.net/def/crs/",$e=`${K}OGC/1.3/CRS84`;async function xe(t,e,n={},i=5){const{links:o}=t,l=m(o,"items","application/geo+json")||m(o,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(b(l))throw new w("ogc-feature-layer:missing-items-page","Missing items url");const{data:d}=await k(l.href,{signal:n.signal,query:y(p({limit:i},n.customParameters),{token:n.apiKey}),headers:{accept:"application/geo+json"}});await fe(d);const s=pe(d,{geometryType:e.geometryType}),f=e.fields||s.fields||[],S=e.hasZ!=null?e.hasZ:s.hasZ,T=s.geometryType,g=e.objectIdField||s.objectIdFieldName||"OBJECTID";let r=e.timeInfo;const h=f.find(a=>a.name===g);if(h)h.type="esriFieldTypeOID",h.editable=!1,h.nullable=!1;else{if(!s.objectIdFieldType)throw new w("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");f.unshift({name:g,alias:g,type:"esriFieldTypeOID",editable:!1,nullable:!1})}if(g!==s.objectIdFieldName){const a=f.find(c=>c.name===s.objectIdFieldName);a&&(a.type="esriFieldTypeInteger")}f===s.fields&&s.unknownFields.length>0&&N.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:s.unknownFields}});for(const a of f){if(a.name==null&&(a.name=a.alias),a.alias==null&&(a.alias=a.name),a.type!=="esriFieldTypeOID"&&a.type!=="esriFieldTypeGlobalID"&&(a.editable=a.editable==null||!!a.editable,a.nullable=a.nullable==null||!!a.nullable),!a.name)throw new w("ogc-feature-layer:invalid-field-name","field name is missing",{field:a});if(ae.jsonValues.indexOf(a.type)===-1)throw new w("ogc-feature-layer:invalid-field-type",`invalid type for field "${a.name}"`,{field:a})}if(r){const a=new se(f);if(r.startTimeField){const c=a.get(r.startTimeField);c?(r.startTimeField=c.name,c.type="esriFieldTypeDate"):r.startTimeField=null}if(r.endTimeField){const c=a.get(r.endTimeField);c?(r.endTimeField=c.name,c.type="esriFieldTypeDate"):r.endTimeField=null}if(r.trackIdField){const c=a.get(r.trackIdField);c?r.trackIdField=c.name:(r.trackIdField=null,N.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:r}}))}r.startTimeField||r.endTimeField||(N.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:r}}),r=null)}return{drawingInfo:T?ge(T):null,geometryType:T,fields:f,hasZ:!!S,objectIdField:g,timeInfo:r}}async function Se(t,e={}){const{links:n}=t,i=m(n,"data","application/json")||m(n,"http://www.opengis.net/def/rel/ogc/1.0/data","application/json");if(b(i))throw new w("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:o,customParameters:l,signal:d}=e,{data:s}=await k(i.href,{signal:d,headers:{accept:"application/json"},query:y(p({},l),{token:o})});return s}async function qe(t,e={}){const{links:n}=t,i=m(n,"conformance","application/json")||m(n,"http://www.opengis.net/def/rel/ogc/1.0/conformance","application/json");if(b(i))throw new w("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:o,customParameters:l,signal:d}=e,{data:s}=await k(i.href,{signal:d,headers:{accept:"application/json"},query:y(p({},l),{token:o})});return s}async function ve(t,e={}){const{apiKey:n,customParameters:i,signal:o}=e,{data:l}=await k(t,{signal:o,headers:{accept:"application/json"},query:y(p({},i),{token:n})});return l}async function Me(t,e={}){const n="application/vnd.oai.openapi+json;version=3.0",i=m(t.links,"service-desc",n);if(b(i))return N.warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:o,customParameters:l,signal:d}=e,{data:s}=await k(i.href,{signal:d,headers:{accept:n},query:y(p({},l),{token:o})});return s}function Ne(t){const e=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(t),n=e==null?void 0:e.groups;if(!n)return null;const{authority:i,code:o}=n;switch(i.toLowerCase()){case"ogc":switch(o.toLowerCase()){case"crs27":return $.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return $.WGS84.wkid;default:return null}case"esri":case"epsg":{const l=Number.parseInt(o,10);return Number.isNaN(l)?null:l}default:return null}}async function Oe(t,e,n){const i=await ye(t,e,n);return re(i)}async function ye(t,e,n){const{capabilities:{query:{maxRecordCount:i}},collection:o,layerDefinition:l,queryParameters:{apiKey:d,customParameters:s},spatialReference:f,supportedCrs:S}=t,{links:T}=o,g=m(T,"items","application/geo+json")||m(T,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(b(g))throw new w("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:r,num:h,start:a,timeExtent:c,where:A}=e;if(e.objectIds)throw new w("ogc-feature-layer:query-by-objectids-not-supported","Queries with objectids are not supported");const J=$.fromJSON(f),j=oe(e.outSpatialReference,J),q=j.isWGS84?null:L(j,S),E=Fe(r,S),V=be(c),_=he(A),z=h!=null?h:a!=null&&a!==void 0?10:i,{data:F}=await k(g.href,y(p({},n),{query:y(p(p({},s),E),{crs:q,datetime:V,query:_,limit:z,startindex:a,token:d}),headers:{accept:"application/geo+json"}}));let v=!1;F.links&&(v=!!F.links.find(M=>M.rel==="next")),!v&&Number.isInteger(F.numberMatched)&&Number.isInteger(F.numberReturned)&&(v=F.numberReturned<F.numberMatched);const{fields:B,globalIdField:H,hasM:Q,hasZ:O,objectIdField:C}=l,G=l.geometryType,D=me(F,{geometryType:G,hasZ:O,objectIdField:C});if(!q&&j.isWebMercator){for(const I of D)if(x(I.geometry)){const M=le(I.geometry,G,O,!1);M.spatialReference=$.WGS84,I.geometry=ce(Z(M,j))}}for(const I of D)I.objectId=I.attributes[C];const U=q||!q&&j.isWebMercator?j.toJSON():de,u=new ue;return u.exceededTransferLimit=v,u.features=D,u.fields=B,u.geometryType=G,u.globalIdFieldName=H,u.hasM=Q,u.hasZ=O,u.objectIdFieldName=C,u.spatialReference=U,u}function we(t){return x(t)&&t.type==="extent"}function L(t,e){var n,i,o;const{isWebMercator:l,wkid:d}=t;if(!d)return null;const s=l?(n=(i=(o=e[3857])!=null?o:e[102100])!=null?i:e[102113])!=null?n:e[900913]:e[t.wkid];return s?`${K}${s}`:null}function P(t){if(b(t))return"";const{xmin:e,ymin:n,xmax:i,ymax:o}=t;return`${e},${n},${i},${o}`}function be(t){if(b(t))return null;const{start:e,end:n}=t;return`${x(e)?e.toISOString():".."}/${x(n)?n.toISOString():".."}`}function he(t){return b(t)||!t||t==="1=1"?null:t}function Fe(t,e){if(!we(t))return null;const{spatialReference:n}=t;if(!n||n.isWGS84)return{bbox:P(t)};const i=L(n,e);return x(i)?{bbox:P(t),"bbox-crs":i}:n.isWebMercator?{bbox:P(Z(t,$.WGS84))}:null}function m(t,e,n){return t.find(i=>i.rel===e&&i.type===n)||t.find(i=>i.rel===e&&!i.type)}export{$e as F,xe as I,Oe as N,Me as S,Se as T,K as j,qe as k,ye as q,Ne as v,ve as x};
