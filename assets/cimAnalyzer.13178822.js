var wt=Object.defineProperty,Lt=Object.defineProperties;var It=Object.getOwnPropertyDescriptors;var ct=Object.getOwnPropertySymbols;var Xt=Object.prototype.hasOwnProperty,zt=Object.prototype.propertyIsEnumerable;var ft=(t,e,o)=>e in t?wt(t,e,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[e]=o,Q=(t,e)=>{for(var o in e||(e={}))Xt.call(e,o)&&ft(t,o,e[o]);if(ct)for(var o of ct(e))zt.call(e,o)&&ft(t,o,e[o]);return t},et=(t,e)=>Lt(t,It(e));import{iv as $t,om as Jt,ix as mt,iw as ut,aM as At,qt as Ht,aF as Nt,rA as J,r1 as M,ol as C,a8 as G,rB as Rt,rv as Yt,rw as Ft,ft as Et,rC as _,rD as Z,rE as Tt,rF as Wt,b7 as Dt}from"./vendor.1dc52be5.js";import{t as Gt,x as Ut,b as jt,r as pt,A as yt,$ as z,K as U}from"./CIMSymbolHelper.e5777d0e.js";import{i as nt,e as ot,n as it}from"./enums.c01b5663.js";function Bt(t){if(!t)return null;switch(t.type){case"CIMPointSymbol":{const o=t.symbolLayers;return o&&o.length===1?Bt(o[0]):null}case"CIMVectorMarker":{var e;const o=t.markerGraphics;if(!o||o.length!==1)return null;const n=o[0];if(!n)return null;const i=n.geometry;if(!i)return null;const a=n.symbol;return!a||a.type!=="CIMPolygonSymbol"&&a.type!=="CIMLineSymbol"||(e=a.symbolLayers)!=null&&e.some(r=>!!r.effects)?null:{geom:i,asFill:a.type==="CIMPolygonSymbol"}}case"sdf":return{geom:t.geom,asFill:t.asFill}}return null}function qt(t){return t?t.rings?t.rings:t.paths?t.paths:t.xmin!==void 0&&t.ymin!==void 0&&t.xmax!==void 0&&t.ymax!==void 0?[[[t.xmin,t.ymin],[t.xmin,t.ymax],[t.xmax,t.ymax],[t.xmax,t.ymin],[t.xmin,t.ymin]]]:null:null}function Vt(t){let e=1/0,o=-1/0,n=1/0,i=-1/0;for(const a of t)for(const r of a)r[0]<e&&(e=r[0]),r[0]>o&&(o=r[0]),r[1]<n&&(n=r[1]),r[1]>i&&(i=r[1]);return new Gt(e,n,o-e,i-n)}function ht(t){let e=1/0,o=-1/0,n=1/0,i=-1/0;for(const a of t)for(const r of a)r[0]<e&&(e=r[0]),r[0]>o&&(o=r[0]),r[1]<n&&(n=r[1]),r[1]>i&&(i=r[1]);return[e,n,o,i]}function bt(t){return t?t.rings?ht(t.rings):t.paths?ht(t.paths):$t(t)?[t.xmin,t.ymin,t.xmax,t.ymax]:null:null}function Ct(t,e,o,n,i){const[a,r,s,l]=t;if(s<a||l<r)return[0,0,0];const u=s-a,m=l-r,p=128,f=1,c=Math.floor(.5*(.5*p-f)),y=(p-2*(c+f))/Math.max(u,m),g=Math.round(u*y)+2*c,S=Math.round(m*y)+2*c;let d=1;e&&(d=S/y/(e.ymax-e.ymin));let v=0,N=0;if(n)if(i){if(e&&o&&e.ymax-e.ymin>0){const b=(e.xmax-e.xmin)/(e.ymax-e.ymin);v=n.x/(o*b),N=n.y/o}}else v=n.x,N=n.y;return v=.5*(e.xmax+e.xmin)+v*(e.xmax-e.xmin),N=.5*(e.ymax+e.ymin)+N*(e.ymax-e.ymin),v-=a,N-=r,v*=y,N*=y,v+=c,N+=c,[d,v/g-.5,-(N/S-.5)]}function Pe(t){const e=qt(t.geom),o=Vt(e),n=128,i=1,a=Math.floor(.5*(.5*n-i)),r=(n-2*(a+i))/Math.max(o.width,o.height),s=Math.round(o.width*r)+2*a,l=Math.round(o.height*r)+2*a,u=[];for(const p of e)if(p&&p.length>1){const f=[];for(const c of p){let[y,g]=c;y-=o.x,g-=o.y,y*=r,g*=r,y+=a-.5,g+=a-.5,t.asFill?f.push([y,g]):f.push([Math.round(y),Math.round(g)])}if(t.asFill){const c=f.length-1;f[0][0]===f[c][0]&&f[0][1]===f[c][1]||f.push(f[0])}u.push(f)}const m=Kt(u,s,l,a);return t.asFill&&Qt(u,s,l,a,m),[_t(m,a),s,l]}function Kt(t,e,o,n){const i=e*o,a=new Array(i),r=n*n+1;for(let s=0;s<i;++s)a[s]=r;for(const s of t){const l=s.length;for(let u=1;u<l;++u){const m=s[u-1],p=s[u];let f,c,y,g;m[0]<p[0]?(f=m[0],c=p[0]):(f=p[0],c=m[0]),m[1]<p[1]?(y=m[1],g=p[1]):(y=p[1],g=m[1]);let S=Math.floor(f)-n,d=Math.floor(c)+n,v=Math.floor(y)-n,N=Math.floor(g)+n;S<0&&(S=0),d>e&&(d=e),v<0&&(v=0),N>o&&(N=o);const b=p[0]-m[0],O=p[1]-m[1],X=b*b+O*O;for(let P=S;P<d;P++)for(let x=v;x<N;x++){let k,$,L=(P-m[0])*b+(x-m[1])*O;L<0?(k=m[0],$=m[1]):L>X?(k=p[0],$=p[1]):(L/=X,k=m[0]+L*b,$=m[1]+L*O);const A=(P-k)*(P-k)+(x-$)*(x-$),F=(o-x-1)*e+P;A<a[F]&&(a[F]=A)}}}for(let s=0;s<i;++s)a[s]=Math.sqrt(a[s]);return a}function Qt(t,e,o,n,i){for(const a of t){const r=a.length;for(let s=1;s<r;++s){const l=a[s-1],u=a[s];let m,p,f,c;l[0]<u[0]?(m=l[0],p=u[0]):(m=u[0],p=l[0]),l[1]<u[1]?(f=l[1],c=u[1]):(f=u[1],c=l[1]);let y=Math.floor(m),g=Math.floor(p)+1,S=Math.floor(f),d=Math.floor(c)+1;y<n&&(y=n),g>e-n&&(g=e-n),S<n&&(S=n),d>o-n&&(d=o-n);for(let v=S;v<d;++v){if(l[1]>v==u[1]>v)continue;const N=(o-v-1)*e;for(let b=y;b<g;++b)b<(u[0]-l[0])*(v-l[1])/(u[1]-l[1])+l[0]&&(i[N+b]=-i[N+b]);for(let b=n;b<y;++b)i[N+b]=-i[N+b]}}}}function _t(t,e){const o=2*e,n=t.length,i=new Uint8Array(4*n);for(let a=0;a<n;++a){const r=.5-t[a]/o;Jt(r,i,4*a)}return i}const Zt=96/72;class gt{static executeEffects(e,o,n){const i=jt(o),a=Zt;let r=new pt(i);for(const s of e){const l=yt(s);l&&(r=l.execute(r,s,a,n))}return r}static next(e){const o=e.next();return Ut(o),o}static applyEffects(e,o,n){if(!e)return o;let i=new pt(o);for(const s of e){const l=yt(s);l&&(i=l.execute(i,s,1,n))}let a,r=null;for(;a=i.next();)r?mt(r)?mt(a)&&r.paths.push(...a.paths):ut(r)&&ut(a)&&r.rings.push(...a.rings):r=a;return r}}function kt(t){const e=t.toLowerCase().split(" ").join("-");switch(e){case"serif":return"noto-serif";case"sans-serif":return"arial-unicode-ms";case"monospace":return"ubuntu-mono";case"fantasy":return"cabin-sketch";case"cursive":return"redressed";default:return e}}function we(t){const e=te(t)+ee(t);return kt(t.family)+(e.length>0?e:"-regular")}function te(t){if(!t.weight)return"";switch(t.weight.toLowerCase()){case"bold":case"bolder":return"-bold"}return""}function ee(t){if(!t.style)return"";switch(t.style.toLowerCase()){case"italic":case"oblique":return"-italic"}return""}const Mt=At.getLogger("esri.symbols.cim.cimAnalyzer");function at(t){switch(t){case"Butt":return ot.BUTT;case"Square":return ot.SQUARE;default:return ot.ROUND}}function st(t){switch(t){case"Bevel":return it.BEVEL;case"Miter":return it.MITER;default:return it.ROUND}}function oe(t){switch(t){case"Left":default:return"left";case"Right":return"right";case"Center":return"center";case"Justify":return"justify"}}function ie(t){switch(t){case"Top":default:return"top";case"Center":return"middle";case"Baseline":return"baseline";case"Bottom":return"bottom"}}function re(t){let e="",o="";if(t){const n=t.toLowerCase();n.indexOf("italic")!==-1?e="italic":n.indexOf("oblique")!==-1&&(e="oblique"),n.indexOf("bold")!==-1?o="bold":n.indexOf("light")!==-1&&(o="lighter")}return{style:e,weight:o}}function ne(t){return t.underline?"underline":t.strikethrough?"line-through":"none"}function dt(t,e,o,n){let i;t[e]?i=t[e]:(i={},t[e]=i),i[o]=n}function St(t){const e=t.markerPlacement;return e&&e.angleToLine?nt.MAP:nt.SCREEN}async function Le(t,e,o,n,i){const a=n!=null?n:[];if(!t)return a;let r,s;const l={};if(t.type!=="CIMSymbolReference")return Mt.error("Expect cim type to be 'CIMSymbolReference'"),a;if(r=t.symbol,s=t.primitiveOverrides,s){const m=[];for(const p of s){const f=p.valueExpressionInfo;if(f&&e){const c=f.expression,y=Ht(c,e.spatialReference,e.fields).then(g=>{g&&dt(l,p.primitiveName,p.propertyName,g)});m.push(y)}else p.value!=null&&dt(l,p.primitiveName,p.propertyName,p.value)}m.length>0&&await Promise.all(m)}const u=[];switch(xt(r,o,u),u.length>0&&await Promise.all(u),r.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":ae(r,s,l,e,a,o,i)}return a}function ae(t,e,o,n,i,a,r){if(!t)return;const s=t.symbolLayers;if(!s)return;const l=t.effects;let u;const m=z.getSize(t);t.type==="CIMPointSymbol"&&t.angleAlignment==="Map"&&(u=nt.MAP);let p=s.length;for(;p--;){const f=s[p];if(!f||f.enable===!1)continue;let c;l&&l.length&&(c=[...l]);const y=f.effects;y&&y.length&&(l?c.push(...y):c=[...y]);const g=[];let S;U.findEffectOverrides(c,e,g),S=g.length>0?Ne(c,g,o,n):c;const d=[];switch(U.findApplicableOverrides(f,e,d),f.type){case"CIMSolidFill":se(f,S,o,d,n,i);break;case"CIMPictureFill":le(f,S,o,d,n,a,i);break;case"CIMHatchFill":ce(f,S,o,d,n,i);break;case"CIMGradientFill":fe(f,S,o,d,n,i);break;case"CIMSolidStroke":me(f,S,o,d,n,i,t.type==="CIMPolygonSymbol",m);break;case"CIMPictureStroke":ue(f,S,o,d,n,i,t.type==="CIMPolygonSymbol",m);break;case"CIMGradientStroke":pe(f,S,o,d,n,i,t.type==="CIMPolygonSymbol",m);break;case"CIMCharacterMarker":if(rt(f,S,o,d,n,i))break;break;case"CIMPictureMarker":if(rt(f,S,o,d,n,i))break;t.type==="CIMLineSymbol"&&(u=St(f)),ye(f,S,o,d,n,a,i,u,m);break;case"CIMVectorMarker":if(rt(f,S,o,d,n,i))break;t.type==="CIMLineSymbol"&&(u=St(f)),he(f,S,o,d,n,i,a,u,m,r);break;default:Mt.error("Cannot analyze CIM layer",f.type)}}}function se(t,e,o,n,i,a){const r=t.primitiveName,s=J(t.color),[l,u]=H(n,r,e,null),m=M(JSON.stringify(t)+u).toString();a.push({type:"fill",templateHash:m,materialHash:l?()=>m:m,cim:t,materialOverrides:null,colorLocked:t.colorLocked,color:h(r,o,"Color",i,s,Y),height:0,angle:0,offsetX:0,offsetY:0,scaleX:1,effects:e})}function le(t,e,o,n,i,a,r){const s=t.primitiveName,l=t.tintColor?J(t.tintColor):{r:255,g:255,b:255,a:1},[u,m]=H(n,s,e,null),p=M(JSON.stringify(t)+m).toString(),f=M(`${t.url}${JSON.stringify(t.colorSubstitutions)}`).toString();let c=C(t.scaleX);if("width"in t){const y=t.width;let g=1;const S=a.getResource(t.url);G(S)&&(g=S.width/S.height),c/=g*(t.height/y)}r.push({type:"fill",templateHash:p,materialHash:u?()=>f:f,cim:t,materialOverrides:null,colorLocked:t.colorLocked,effects:e,color:h(s,o,"TintColor",i,l,Y),height:h(s,o,"Height",i,t.height),scaleX:h(s,o,"ScaleX",i,c),angle:h(s,o,"Rotation",i,C(t.rotation)),offsetX:h(s,o,"OffsetX",i,C(t.offsetX)),offsetY:h(s,o,"OffsetY",i,C(t.offsetY)),url:t.url})}function ce(t,e,o,n,i,a){const r=["Rotation","OffsetX","OffsetY"],s=n.filter(c=>c.primitiveName!==t.primitiveName&&r.indexOf(c.propertyName)===-1),l=t.primitiveName,[u,m]=H(n,l,e,null),p=M(JSON.stringify(t)+m).toString(),f=M(`${t.separation}${JSON.stringify(t.lineSymbol)}`).toString();a.push({type:"fill",templateHash:p,materialHash:u?q(f,o,s,i):f,cim:t,materialOverrides:s,colorLocked:t.colorLocked,effects:e,color:{r:255,g:255,b:255,a:1},height:h(l,o,"Separation",i,t.separation),scaleX:1,angle:h(l,o,"Rotation",i,C(t.rotation)),offsetX:h(l,o,"OffsetX",i,C(t.offsetX)),offsetY:h(l,o,"OffsetY",i,C(t.offsetY))})}function fe(t,e,o,n,i,a){const r=t.primitiveName,[s,l]=H(n,r,e,null),u=M(JSON.stringify(t)+l).toString();a.push({type:"fill",templateHash:u,materialHash:s?q(u,o,n,i):u,cim:t,materialOverrides:null,colorLocked:t.colorLocked,effects:e,color:{r:128,g:128,b:128,a:1},height:0,angle:0,offsetX:0,offsetY:0,scaleX:1})}function me(t,e,o,n,i,a,r,s){const l=t.primitiveName,u=J(t.color),m=t.width!==void 0?t.width:4,p=at(t.capStyle),f=st(t.joinStyle),c=t.miterLimit,[y,g]=H(n,l,e,null),S=M(JSON.stringify(t)+g).toString();let d,v;if(e&&e instanceof Array&&e.length>0){const N=e[e.length-1];if(N.type==="CIMGeometricEffectDashes"&&N.lineDashEnding==="NoConstraint"&&N.offsetAlongLine===null){const b=(e=[...e]).pop();d=b.dashTemplate,v=b.scaleDash}}a.push({type:"line",templateHash:S,materialHash:y?()=>S:S,cim:t,materialOverrides:null,isOutline:r,colorLocked:t.colorLocked,effects:e,color:h(l,o,"Color",i,u,Y),width:h(l,o,"Width",i,m),cap:h(l,o,"CapStyle",i,p),join:h(l,o,"JoinStyle",i,f),miterLimit:h(l,o,"MiterLimit",i,c),referenceWidth:s,zOrder:lt(t.name),dashTemplate:d,scaleDash:v})}function ue(t,e,o,n,i,a,r,s){const l=M(`${t.url}${JSON.stringify(t.colorSubstitutions)}`).toString(),u=t.primitiveName,m=J(t.tintColor),p=t.width!==void 0?t.width:4,f=at(t.capStyle),c=st(t.joinStyle),y=t.miterLimit,[g,S]=H(n,u,e,null),d=M(JSON.stringify(t)+S).toString();a.push({type:"line",templateHash:d,materialHash:g?()=>l:l,cim:t,materialOverrides:null,isOutline:r,colorLocked:t.colorLocked,effects:e,color:h(u,o,"TintColor",i,m,Y),width:h(u,o,"Width",i,p),cap:h(u,o,"CapStyle",i,f),join:h(u,o,"JoinStyle",i,c),miterLimit:h(u,o,"MiterLimit",i,y),referenceWidth:s,zOrder:lt(t.name),dashTemplate:null,scaleDash:!1,url:t.url})}function pe(t,e,o,n,i,a,r,s){const l=t.primitiveName,u=t.width!==void 0?t.width:4,m=at(t.capStyle),p=st(t.joinStyle),f=t.miterLimit,[c,y]=H(n,l,e,null),g=M(JSON.stringify(t)+y).toString();a.push({type:"line",templateHash:g,materialHash:c?q(g,o,n,i):g,cim:t,materialOverrides:null,isOutline:r,colorLocked:t.colorLocked,effects:e,color:{r:128,g:128,b:128,a:1},width:h(l,o,"Width",i,u),cap:h(l,o,"CapStyle",i,m),join:h(l,o,"JoinStyle",i,p),miterLimit:h(l,o,"MiterLimit",i,f),referenceWidth:s,zOrder:lt(t.name),dashTemplate:null,scaleDash:!1})}function rt(t,e,o,n,i,a){const r=t.markerPlacement;if(!r||r.type!=="CIMMarkerPlacementInsidePolygon")return!1;const s=r,l=["Rotation","OffsetX","OffsetY"],u=n.filter(d=>d.primitiveName!==t.primitiveName&&l.indexOf(d.propertyName)===-1),m="url"in t?t.url:null,[p,f]=H(n,s.primitiveName,e,null),c=M(JSON.stringify(t)+f).toString();let y=s.stepY,g=null,S=1;return r.shiftOddRows&&(y*=2,g=function(d){return d?2*d:0},S=.5),a.push({type:"fill",templateHash:c,materialHash:p?q(c,o,u,i):c,cim:t,materialOverrides:u,colorLocked:t.colorLocked,effects:e,color:{r:255,g:255,b:255,a:1},height:h(s.primitiveName,o,"StepY",i,y,g),scaleX:S,angle:h(s.primitiveName,o,"GridAngle",i,s.gridAngle),offsetX:h(s.primitiveName,o,"OffsetX",i,C(s.offsetX)),offsetY:h(s.primitiveName,o,"OffsetY",i,C(s.offsetY)),url:m}),!0}function ye(t,e,o,n,i,a,r,s,l){var u;const m=t.primitiveName,p=C(t.size);let f=C(t.scaleX);const c=C(t.rotation),y=C(t.offsetX),g=C(t.offsetY),S=t.tintColor?J(t.tintColor):{r:255,g:255,b:255,a:1},d=M(`${t.url}${JSON.stringify(t.colorSubstitutions)}`).toString(),v=Ot(t.markerPlacement,n,o,i),[N,b]=H(n,m,e,v),O=M(JSON.stringify(t)+b).toString(),X=(u=t.anchorPoint)!=null?u:{x:0,y:0};if("width"in t){const P=t.width;let x=1;const k=a.getResource(t.url);G(k)&&(x=k.width/k.height),f/=x*(p/P)}r.push({type:"marker",templateHash:O,materialHash:N?()=>d:d,cim:t,materialOverrides:null,colorLocked:t.colorLocked,effects:e,scaleSymbolsProportionally:!1,alignment:s,size:h(m,o,"Size",i,p),scaleX:h(m,o,"ScaleX",i,f),rotation:h(m,o,"Rotation",i,c),offsetX:h(m,o,"OffsetX",i,y),offsetY:h(m,o,"OffsetY",i,g),color:h(m,o,"TintColor",i,S,Y),anchorPoint:{x:X.x,y:-X.y},isAbsoluteAnchorPoint:t.anchorPointUnits!=="Relative",outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,frameHeight:0,rotateClockwise:t.rotateClockwise,referenceSize:l,sizeRatio:1,markerPlacement:t.markerPlacement,url:t.url})}function he(t,e,o,n,i,a,r,s,l,u){const m=t.markerGraphics;if(!m)return;let p=0;if(t.scaleSymbolsProportionally){const c=t.frame;c&&(p=c.ymax-c.ymin)}const f=Ot(t.markerPlacement,n,o,i);for(const c of m)if(c){const y=c.symbol;if(!y)continue;switch(y.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":de(t,e,f,c,n,o,i,a,r,s,l,p,u);break;case"CIMTextSymbol":ge(t,e,f,c,o,n,i,a,s,l,p)}}}function ge(t,e,o,n,i,a,r,s,l,u,m){const p=[];U.findApplicableOverrides(n,a,p);const f=n.geometry;if(!("x"in f)||!("y"in f))return;const c=n.symbol,y=ne(c),g=re(c.fontStyleName),S=kt(c.fontFamilyName);c.font=Q({family:S,decoration:y},g);const d=t.frame,v=f.x-.5*(d.xmin+d.xmax),N=f.y-.5*(d.ymin+d.ymax),b=t.size/m,O=t.primitiveName,X=C(c.height)*b,P=C(c.angle),x=C(t.offsetX)+(C(c.offsetX)+v)*b,k=C(t.offsetY)+(C(c.offsetY)+N)*b,$=J(z.getFillColor(c));let L=J(z.getStrokeColor(c)),A=z.getStrokeWidth(c);A||(L=J(z.getFillColor(c.haloSymbol)),A=c.haloSize*b);const[F,j]=H(a,O,e,o),E=JSON.stringify(t.effects)+Number(t.colorLocked)+JSON.stringify(t.anchorPoint)+t.anchorPointUnits+JSON.stringify(t.markerPlacement),R=M(JSON.stringify(n)+E+j).toString();let I=h(n.primitiveName,i,"TextString",r,n.textString,Rt,c.textCase);if(I==null)return;const{fontStyleName:T}=c,W=S+(T?"-"+T.toLowerCase():"-regular"),w=W;typeof I=="string"&&I.indexOf("[")>-1&&c.fieldMap&&(I=Yt(c.fieldMap,I,c.textCase)),s.push({type:"text",templateHash:R,materialHash:F||typeof I=="function"||I.match(/\[(.*?)\]/)?(V,tt,K)=>w+"-"+Ft(I,V,tt,K):w+"-"+M(I),cim:c,materialOverrides:null,colorLocked:t.colorLocked,effects:e,alignment:l,anchorPoint:{x:t.anchorPoint?t.anchorPoint.x:0,y:t.anchorPoint?t.anchorPoint.y:0},isAbsoluteAnchorPoint:t.anchorPointUnits!=="Relative",fontName:W,decoration:y,weight:h(O,i,"Weight",r,g.weight),style:h(O,i,"Size",r,g.style),size:h(O,i,"Size",r,X),angle:h(O,i,"Rotation",r,P),offsetX:h(O,i,"OffsetX",r,x),offsetY:h(O,i,"OffsetY",r,k),horizontalAlignment:oe(c.horizontalAlignment),verticalAlignment:ie(c.verticalAlignment),text:I,color:$,outlineColor:L,outlineSize:A,referenceSize:u,sizeRatio:1,markerPlacement:o})}function de(t,e,o,n,i,a,r,s,l,u,m,p,f){const c=n.symbol,y=c.symbolLayers;if(!y)return;if(f)return void vt(t,e,o,n,a,i,r,s,l,u,m,p);let g=y.length;if(be(y))return void Se(t,e,o,n,y,i,a,r,s,u,m,p);const S=gt.applyEffects(c.effects,n.geometry,l.geometryEngine);if(S)for(;g--;){const v=y[g];if(v&&v.enable!==!1)switch(v.type){case"CIMSolidFill":case"CIMSolidStroke":{var d;const N=gt.applyEffects(v.effects,S,l.geometryEngine),b=bt(N);if(!b)continue;const[O,X,P]=Ct(b,t.frame,t.size,t.anchorPoint,t.anchorPointUnits!=="Relative"),x=v.type==="CIMSolidFill",k={type:"sdf",geom:N,asFill:x},$=t.primitiveName,L=(d=C(t.size))!=null?d:10,A=C(t.rotation),F=C(t.offsetX),j=C(t.offsetY),E=v.path,R=v.primitiveName,I=J(x?z.getFillColor(v):z.getStrokeColor(v)),T=x?{r:0,g:0,b:0,a:0}:J(z.getStrokeColor(v)),W=z.getStrokeWidth(v);if(!x&&!W)break;let w=!1,V="";for(const D of i)D.primitiveName!==R&&D.primitiveName!==$||(D.value!==void 0?V+=`-${D.primitiveName}-${D.propertyName}-${JSON.stringify(D.value)}`:D.valueExpressionInfo&&(w=!0));G(e)&&typeof e=="function"&&(w=!0);const tt=JSON.stringify(et(Q({},t),{markerGraphics:null})),K=M(JSON.stringify(k)+E).toString(),Pt={type:"marker",templateHash:M(JSON.stringify(n)+JSON.stringify(v)+tt+V).toString(),materialHash:w?()=>K:K,cim:k,materialOverrides:null,colorLocked:t.colorLocked,effects:e,scaleSymbolsProportionally:t.scaleSymbolsProportionally,alignment:u,anchorPoint:{x:X,y:P},isAbsoluteAnchorPoint:!1,size:h(t.primitiveName,a,"Size",r,L),rotation:h(t.primitiveName,a,"Rotation",r,A),offsetX:h(t.primitiveName,a,"OffsetX",r,F),offsetY:h(t.primitiveName,a,"OffsetY",r,j),scaleX:1,frameHeight:p,rotateClockwise:t.rotateClockwise,referenceSize:m,sizeRatio:O,color:h(R,a,"Color",r,I,Y),outlineColor:h(R,a,"Color",r,T,Y),outlineWidth:h(R,a,"Width",r,W),markerPlacement:o,path:E};s.push(Pt);break}default:vt(t,e,o,n,a,i,r,s,l,u,m,p)}}}function Se(t,e,o,n,i,a,r,s,l,u,m,p){const f=n.geometry,c=i[0],y=i[1],g=bt(f);if(!g)return;const[S,d,v]=Ct(g,t.frame,t.size,t.anchorPoint,t.anchorPointUnits!=="Relative"),N={type:"sdf",geom:f,asFill:!0},b=t.primitiveName,O=C(t.size),X=C(t.rotation),P=C(t.offsetX),x=C(t.offsetY),k=y.path,$=y.primitiveName,L=c.primitiveName,A=J(z.getFillColor(y)),F=J(z.getStrokeColor(c)),j=z.getStrokeWidth(c);let E=!1,R="";for(const w of a)w.primitiveName!==$&&w.primitiveName!==L&&w.primitiveName!==b||(w.value!==void 0?R+=`-${w.primitiveName}-${w.propertyName}-${JSON.stringify(w.value)}`:w.valueExpressionInfo&&(E=!0));const I=JSON.stringify(et(Q({},t),{markerGraphics:null})),T=M(JSON.stringify(N)+k).toString(),W={type:"marker",templateHash:M(JSON.stringify(n)+JSON.stringify(y)+JSON.stringify(c)+I+R).toString(),materialHash:E?()=>T:T,cim:N,materialOverrides:null,colorLocked:t.colorLocked,effects:e,scaleSymbolsProportionally:t.scaleSymbolsProportionally,alignment:u,anchorPoint:{x:d,y:v},isAbsoluteAnchorPoint:!1,size:h(t.primitiveName,r,"Size",s,O),rotation:h(t.primitiveName,r,"Rotation",s,X),offsetX:h(t.primitiveName,r,"OffsetX",s,P),offsetY:h(t.primitiveName,r,"OffsetY",s,x),scaleX:1,frameHeight:p,rotateClockwise:t.rotateClockwise,referenceSize:m,sizeRatio:S,color:h($,r,"Color",s,A,Y),outlineColor:h(L,r,"Color",s,F,Y),outlineWidth:h(L,r,"Width",s,j),markerPlacement:o,path:k};l.push(W)}function vt(t,e,o,n,i,a,r,s,l,u,m,p){const f=ve(t,n);let c=[];const y=["Rotation","OffsetX","OffsetY"];c=a.filter(k=>k.primitiveName!==t.primitiveName||y.indexOf(k.propertyName)===-1);let g="";for(const k of a)k.value!==void 0&&(g+=`-${k.primitiveName}-${k.propertyName}-${JSON.stringify(k.value)}`);const[S,d,v]=z.getTextureAnchor(f,l),N=t.primitiveName,b=C(t.rotation),O=C(t.offsetX),X=C(t.offsetY),P=M(JSON.stringify(f)+g).toString(),x={type:"marker",templateHash:P,materialHash:c.length>0||G(e)&&typeof e=="function"?q(P,i,c,r):P,cim:f,materialOverrides:c,colorLocked:t.colorLocked,effects:e,scaleSymbolsProportionally:t.scaleSymbolsProportionally,alignment:u,anchorPoint:{x:S,y:d},isAbsoluteAnchorPoint:!1,size:t.size,rotation:h(N,i,"Rotation",r,b),offsetX:h(N,i,"OffsetX",r,O),offsetY:h(N,i,"OffsetY",r,X),color:{r:255,g:255,b:255,a:1},outlineColor:{r:0,g:0,b:0,a:0},outlineWidth:0,scaleX:1,frameHeight:p,rotateClockwise:t.rotateClockwise,referenceSize:m,sizeRatio:v/Et(t.size),markerPlacement:o};s.push(x)}function ve(t,e){return{type:t.type,enable:!0,name:t.name,colorLocked:t.colorLocked,primitiveName:t.primitiveName,anchorPoint:t.anchorPoint,anchorPointUnits:t.anchorPointUnits,offsetX:0,offsetY:0,rotateClockwise:t.rotateClockwise,rotation:0,size:t.size,billboardMode3D:t.billboardMode3D,depth3D:t.depth3D,frame:t.frame,markerGraphics:[e],scaleSymbolsProportionally:t.scaleSymbolsProportionally,respectFrame:t.respectFrame,clippingPath:t.clippingPath}}function lt(t){if(t&&t.indexOf("Level_")===0){const e=parseInt(t.substr(6),10);if(!isNaN(e))return e}return 0}function Y(t){if(!t||t.length===0)return null;const e=new Dt(t).toRgba();return{r:e[0],g:e[1],b:e[2],a:e[3]}}function h(t,e,o,n,i,a,r){const s=e[t];if(s){const l=s[o];if(typeof l=="string"||typeof l=="number"||l instanceof Array)return a?a.call(null,l,r):l;if(l!=null&&l instanceof _)return(u,m,p)=>{let f=Z(l,u,{$view:p},n.geometryType,m);return f!==null&&a&&(f=a.call(null,f,r)),f!==null?f:i}}return i}function Ne(t,e,o,n){for(const a of e)if(a.valueExpressionInfo){const r=o[a.primitiveName]&&o[a.primitiveName][a.propertyName];r instanceof _&&(a.fn=(s,l,u)=>Z(r,s,{$view:u},n.geometryType,l))}const i=a=>a&&a.charAt(0).toLowerCase()+a.substr(1);return(a,r,s)=>{for(const m of e)m.fn&&(m.value=m.fn(a,r,s));const l=[];for(let m of t){var u;const p=(u=m)==null?void 0:u.primitiveName;if(p){let f=!1;for(const c of e)if(c.primitiveName===p){const y=i(c.propertyName);c.value!=null&&c.value!==m[y]&&(f||(m=Nt(m),f=!0),m[y]=c.value)}}l.push(m)}return l}}function Ot(t,e,o,n){const i=[];if(U.findApplicableOverrides(t,e,i),i.length===0)return t;for(const r of i)if(r.valueExpressionInfo){const s=o[r.primitiveName]&&o[r.primitiveName][r.propertyName];s instanceof _&&(r.fn=(l,u,m)=>Z(s,l,{$view:m},n.geometryType,u))}const a=r=>r&&r.charAt(0).toLowerCase()+r.substr(1);return(r,s,l)=>{for(const p of i)p.fn&&(p.value=p.fn(r,s,l));const u=Nt(t),m=t.primitiveName;for(const p of i)if(p.primitiveName===m){const f=a(p.propertyName);p.value!=null&&p.value!==u[f]&&(u[f]=p.value)}return u}}function q(t,e,o,n){for(const i of o)if(i.valueExpressionInfo){const a=e[i.primitiveName]&&e[i.primitiveName][i.propertyName];a instanceof _&&(i.fn=(r,s,l)=>Z(a,r,{$view:l},n.geometryType,s))}return(i,a,r)=>{for(const s of o)s.fn&&(s.value=s.fn(i,a,r));return M(t+U.buildOverrideKey(o)).toString()}}function Ie(t,e){if(!e||e.length===0)return t;const o=JSON.parse(JSON.stringify(t));return U.applyOverrides(o,e),o}function H(t,e,o,n){let i=!1,a="";for(const r of t)r.primitiveName===e&&(r.value!==void 0?a+=`-${r.primitiveName}-${r.propertyName}-${JSON.stringify(r.value)}`:r.valueExpressionInfo&&(i=!0));return G(o)&&typeof o=="function"&&(i=!0),G(n)&&typeof n=="function"&&(i=!0),[i,a]}function xt(t,e,o){if(t&&e)switch(t.type){case"CIMPointSymbol":case"CIMLineSymbol":case"CIMPolygonSymbol":{const n=t.symbolLayers;if(!n)return;for(const i of n)switch(Ce(i,e,o),i.type){case"CIMPictureFill":case"CIMHatchFill":case"CIMGradientFill":case"CIMPictureStroke":case"CIMGradientStroke":case"CIMCharacterMarker":case"CIMPictureMarker":"url"in i&&i.url&&o.push(e.fetchResource(i.url,null));break;case"CIMVectorMarker":{const a=i.markerGraphics;if(!a)continue;for(const r of a)if(r){const s=r.symbol;s&&xt(s,e,o)}}}}}}const be=t=>t&&t.length===2&&t[0].enable&&t[1].enable&&t[0].type==="CIMSolidStroke"&&t[1].type==="CIMSolidFill"&&!t[0].effects&&!t[1].effects;let B;function Ce(t,e,o){if(!(!t.effects||G(e.geometryEngine))){if(B)return void o.push(B);Tt(t.effects)&&(B=Wt(),o.push(B),B.then(n=>e.geometryEngine=n))}}export{Le as H,gt as f,Pe as m,we as n,Ie as o,Bt as r};
