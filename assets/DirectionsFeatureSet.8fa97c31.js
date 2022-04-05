var M=Object.defineProperty,P=Object.defineProperties;var S=Object.getOwnPropertyDescriptors;var w=Object.getOwnPropertySymbols;var Z=Object.prototype.hasOwnProperty,_=Object.prototype.propertyIsEnumerable;var j=(e,t,r)=>t in e?M(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,D=(e,t)=>{for(var r in t||(t={}))Z.call(t,r)&&j(e,r,t[r]);if(w)for(var r of w(t))_.call(t,r)&&j(e,r,t[r]);return e},G=(e,t)=>P(e,S(t));import{ac as n,ad as l,ae as F,g as $,gf as b,hg as E,hh as L,k as N,ai as R,j as z,a7 as A}from"./vendor.1dc52be5.js";let T=class extends ${};n([l()],T.prototype,"events",void 0),n([l()],T.prototype,"strings",void 0),T=n([F("esri.rest.support.DirectionsFeature")],T);const O=T;let a=class extends L{constructor(e){super(e),this.extent=null,this.features=null,this.geometryType="polyline",this.routeId=null,this.routeName=null,this.totalDriveTime=null,this.totalLength=null,this.totalTime=null}readFeatures(e,t){var r;if(!e)return[];const c=(r=t.summary.envelope.spatialReference)!=null?r:t.spatialReference,d=c&&N.fromJSON(c);return e.map(h=>{var i,p;const f=this._decompressGeometry(h.compressedGeometry),v=new R(G(D({},f),{spatialReference:d})),s=(i=(p=h.events)==null?void 0:p.map(g=>{const{arriveTimeUTC:I,ETA:x,point:{x:o,y:u,z:m},strings:y}=g;return new O({geometry:new z({x:o,y:u,z:m,hasZ:m!==void 0,spatialReference:d}),attributes:{ETA:x,arriveTimeUTC:I},strings:y})}))!=null?i:[];return new O({attributes:h.attributes,events:s,geometry:v,strings:h.strings})})}get mergedGeometry(){if(!this.features)return null;const e=this.features.map(({geometry:r})=>A(r)),t=this.get("extent.spatialReference");return this._mergePolylinesToSinglePath(e,t)}get strings(){return this.features.map(({strings:e})=>e)}_decompressGeometry(e){let t=0,r=0,c=0,d=0;const h=[];let i,p,f,v,s,g,I,x,o=0,u=0,m=0;if(s=e.match(/((\+|\-)[^\+\-\|]+|\|)/g),s||(s=[]),parseInt(s[o],32)===0){o=2;const y=parseInt(s[o],32);o++,g=parseInt(s[o],32),o++,1&y&&(u=s.indexOf("|")+1,I=parseInt(s[u],32),u++),2&y&&(m=s.indexOf("|",u)+1,x=parseInt(s[m],32),m++)}else g=parseInt(s[o],32),o++;for(;o<s.length&&s[o]!=="|";){i=parseInt(s[o],32)+t,o++,t=i,p=parseInt(s[o],32)+r,o++,r=p;const y=[i/g,p/g];u&&(v=parseInt(s[u],32)+c,u++,c=v,y.push(v/I)),m&&(f=parseInt(s[m],32)+d,m++,d=f,y.push(f/x)),h.push(y)}return{paths:[h],hasZ:u>0,hasM:m>0}}_mergePolylinesToSinglePath(e,t){if(e.length===0)return new R({spatialReference:t});const r=[];for(const i of e)for(const p of i.paths)r.push(...p);const c=[];r.forEach((i,p)=>{p!==0&&i[0]===r[p-1][0]&&i[1]===r[p-1][1]||c.push(i)});const{hasM:d,hasZ:h}=e[0];return new R({hasM:d,hasZ:h,paths:[c],spatialReference:t})}};n([l({type:b,json:{read:{source:"summary.envelope"}}})],a.prototype,"extent",void 0),n([l()],a.prototype,"features",void 0),n([E("features")],a.prototype,"readFeatures",null),n([l()],a.prototype,"geometryType",void 0),n([l({readOnly:!0})],a.prototype,"mergedGeometry",null),n([l()],a.prototype,"routeId",void 0),n([l()],a.prototype,"routeName",void 0),n([l({value:null,readOnly:!0})],a.prototype,"strings",null),n([l({json:{read:{source:"summary.totalDriveTime"}}})],a.prototype,"totalDriveTime",void 0),n([l({json:{read:{source:"summary.totalLength"}}})],a.prototype,"totalLength",void 0),n([l({json:{read:{source:"summary.totalTime"}}})],a.prototype,"totalTime",void 0),a=n([F("esri.rest.support.DirectionsFeatureSet")],a);const k=a;export{k as c};
