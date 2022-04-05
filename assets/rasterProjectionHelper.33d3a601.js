var Rn=Object.defineProperty,Pn=Object.defineProperties;var Sn=Object.getOwnPropertyDescriptors;var D=Object.getOwnPropertySymbols;var bn=Object.prototype.hasOwnProperty,Gn=Object.prototype.propertyIsEnumerable;var Z=(n,t,e)=>t in n?Rn(n,t,{enumerable:!0,configurable:!0,writable:!0,value:e}):n[t]=e,L=(n,t)=>{for(var e in t||(t={}))bn.call(t,e)&&Z(n,e,t[e]);if(D)for(var e of D(t))Gn.call(t,e)&&Z(n,e,t[e]);return n},J=(n,t)=>Pn(n,Sn(t));import{nf as un,lr as En,gf as K,aV as O,aH as $,a8 as S,aJ as z,j as G,eV as kn,V as Nn,ng as k,nh as E,ni as nn,nj as Tn,nk as vn,k as Cn,nl as tn}from"./vendor.1dc52be5.js";function xn(n,t,e){return!kn(n,t,e)}function C(n,t,e){const r=xn(n,t,e);if(r&&!un())throw new Nn("rasterprojectionhelper-project","projection engine is not loaded");return r}const en=function(n,t,e,r=0){if(e[0]===1)return[0,0];let a=1,i=-1,o=1,c=-1;for(let u=0;u<n.length;u+=2)isNaN(n[u])||(a=a>n[u]?n[u]:a,i=i>n[u]?i:n[u],o=o>n[u+1]?n[u+1]:o,c=c>n[u+1]?c:n[u+1]);const{cols:s,rows:m}=t,h=(i-a)/s/e[0],R=(c-o)/m/e[1],g=2*r;let d=0,l=!1,f=[0,0];for(let u=0;u<s-3;u++){for(let y=0;y<m-3;y++){const x=u*m*2+2*y,p=(n[x]+n[x+4]+n[x+4*m]+n[x+4*m+4])/4,M=(n[x+1]+n[x+5]+n[x+4*m+1]+n[x+4*m+5])/4,w=Math.abs((p-n[x+2*m+2])/h),P=Math.abs((M-n[x+2*m+3])/R);if(w+P>d&&(d=w+P,f=[w,P]),g&&d>g){l=!0;break}}if(l)break}return f},_n={3395:20037508342789244e-9,3410:17334193943686873e-9,3857:20037508342788905e-9,3975:17367530445161372e-9,4087:20037508342789244e-9,4088:20015108787169147e-9,6933:17367530445161372e-9,32662:20037508342789244e-9,53001:2001508679602057e-8,53002:1000754339801029e-8,53003:2001508679602057e-8,53004:2001508679602057e-8,53016:14152803599503474e-9,53017:17333573624304302e-9,53034:2001508679602057e-8,53079:20015114352186374e-9,53080:20015114352186374e-9,54001:20037508342789244e-9,54002:10018754171394624e-9,54003:20037508342789244e-9,54004:20037508342789244e-9,54016:14168658027268292e-9,54017:1736753044516137e-8,54034:20037508342789244e-9,54079:20037508342789244e-9,54080:20037508342789244e-9,54100:20037508342789244e-9,54101:20037508342789244e-9},I=32,Y=4,q=Y,V=new Map,X=new Map;async function Bn(){if(un())return null;await En()}function Fn(n,t,e){return C(n.spatialReference,t)?e?tn(t,n.spatialReference,n):tn(n.spatialReference,t,n):null}function sn(n,t,e,r=null){const a=n.spatialReference;if(a.equals(t))return n;C(a,t,r);const i=e.center,o=new K({xmin:i.x-n.x/2,xmax:i.x+n.x/2,ymin:i.y-n.y/2,ymax:i.y+n.y/2,spatialReference:a}),c=O(o,t,r);if($(c))return null;const s={x:c.xmax-c.xmin,y:c.ymax-c.ymin},m=T(t);if(S(m)&&s.x>=m){const h=z(a)/z(t);s.x=n.x*h,s.y=n.y*h}return s}function N(n,t=.01){return z(n)?t/z(n):0}function on(n,t,e=null,r=!0){const a=n.spatialReference;if(a.equals(t))return n;C(a,t,e);const i=O(n,t,e);if(!r||!i)return i;const o=B(a,!0),c=B(t,!0),s=N(a);return s&&S(o)&&S(c)&&(i.x>0&&Math.abs(n.x-o[0])<s?i.x-=c[1]-c[0]:i.x<0&&Math.abs(n.x-o[1])<s&&(i.x+=c[1]-c[0])),i}function $n(n){const{inSR:t,outSR:e,datumTransformation:r,preferPE:a}=n;if(t.equals(e)){const{points:i}=Q(n,null);return i}if(t.isWebMercator&&e.isWGS84||t.isWGS84&&e.isWebMercator)return Wn(n);if(C(t,e,r)&&a){if(t.isGeographic)return rn(n);const i=W(t);if(S(i))return rn(n)}return zn(n)}function zn(n){const{points:t}=Q(n,null),e=t.map(r=>new G(r[0],r[1],n.inSR));return O(e,n.outSR,n.datumTransformation).map(r=>r?[r.x,r.y]:[NaN,NaN])}function rn(n){const{inSR:t,outSR:e,datumTransformation:r}=n,a=W(t),{points:i,mask:o}=Q(n,a);if(!t.isGeographic){const s=t.wkid?k.coordsys(t.wkid):k.fromString(t.isGeographic?E.PE_TYPE_GEOGCS:E.PE_TYPE_PROJCS,t.wkt);nn.projToGeog(s,i.length,i)}if(S(r)&&r.steps.length&&r.steps.forEach(s=>{const m=s.wkid?k.geogtran(s.wkid):k.fromString(E.PE_TYPE_GEOGTRAN,s.wkt);Tn.geogToGeog(m,i.length,i,null,s.isInverse?E.PE_TRANSFORM_2_TO_1:E.PE_TRANSFORM_1_TO_2)}),!e.isGeographic){const s=W(e,!0),m=S(s)&&s.isEnvelope?[s.bbox[1],s.bbox[3]]:[-90,90];On(i,m);const h=e.wkid?k.coordsys(e.wkid):k.fromString(e.isGeographic?E.PE_TYPE_GEOGCS:E.PE_TYPE_PROJCS,e.wkt);nn.geogToProj(h,i.length,i)}let c=i;if(o&&i.length!==o.length){c=[];for(let s=0,m=0;s<o.length;s++)o[s]?c.push(i[m++]):c.push([NaN,NaN])}return c}function Wn(n){const{cols:t,rows:e,xres:r,yres:a,usePixelCenter:i,inSR:o,outSR:c}=n;let{xmin:s,ymax:m}=n;i&&(s+=r/2,m-=a/2);const h=[],R=[],g=Math.max(t,e);for(let l=0;l<g;l++){const f=s+r*Math.min(t,l),u=m-a*Math.min(e,l),y=O(new G({x:f,y:u,spatialReference:o}),c);l<=t&&h.push(y.x),l<=e&&R.push(y.y)}const d=[];for(let l=0;l<t;l++)for(let f=0;f<e;f++)d.push([h[l],R[f]]);return d}function W(n,t=!1){let e=n.wkid||n.wkt;if(!e||n.isGeographic)return null;if(e=String(e),V.has(e)){const o=V.get(e);return t?o==null?void 0:o.gcs:o==null?void 0:o.pcs}const r=n.wkid?k.coordsys(n.wkid):k.fromString(n.isGeographic?E.PE_TYPE_GEOGCS:E.PE_TYPE_PROJCS,n.wkt),a=an(r,N(n,1e-4)),i=an(r,0,!0);return V.set(e,{pcs:a,gcs:i}),t?i:a}function an(n,t=0,e=!1){const r=vn.generate(n),a=e?n.horizonGcsGenerate():n.horizonPcsGenerate();if(a==null||!a.length)return null;let i=!1,o=a.find(f=>f.getInclusive()===1&&f.getKind()===1);if(!o){if(o=a.find(f=>f.getInclusive()===1&&f.getKind()===0),!o)return null;i=!0}const c=r.isPannableRectangle(),s=o.getCoord();if(i)return{isEnvelope:i,isPannable:c,vertices:s,coef:null,bbox:[s[0][0]-t,s[0][1]-t,s[1][0]+t,s[1][1]+t]};let m=0;const h=[];let[R,g]=s[0],[d,l]=s[0];for(let f=0,u=s.length;f<u;f++){m++,m===u&&(m=0);const[y,x]=s[f],[p,M]=s[m];if(M===x)h.push([y,p,x,M,2]);else{const w=(p-y)/(M-x||1e-4),P=y-w*x;x<M?h.push([w,P,x,M,0]):h.push([w,P,M,x,1])}R=R<y?R:y,g=g<x?g:x,d=d>y?d:y,l=l>x?l:x}return{isEnvelope:!1,isPannable:c,vertices:s,coef:h,bbox:[R,g,d,l]}}function Q(n,t){const e=[],{cols:r,rows:a,xres:i,yres:o,usePixelCenter:c}=n;let{xmin:s,ymax:m}=n;if(c&&(s+=i/2,m-=o/2),!S(t)){for(let d=0;d<r;d++)for(let l=0;l<a;l++)e.push([s+i*d,m-o*l]);return{points:e}}const h=new Uint8Array(r*a);if(t.isEnvelope){const{bbox:[d,l,f,u]}=t;for(let y=0,x=0;y<r;y++){const p=s+i*y,M=t.isPannable||p>=d&&p<=f;for(let w=0;w<a;w++,x++){const P=m-o*w;M&&P>=l&&P<=u&&(e.push([p,P]),h[x]=1)}}return{points:e,mask:h}}const{coef:R}=t,g=[];for(let d=0;d<a;d++){const l=m-o*d,f=[],u=[];for(let x=0;x<R.length;x++){const[p,M,w,P,v]=R[x];if(l===w&&w===P)f.push(p),f.push(M),u.push(2),u.push(2);else if(l>=w&&l<=P){const j=p*l+M;f.push(j),u.push(v)}}let y=f;if(f.length>2){let x=u[0]===2?0:u[0],p=f[0];y=[];for(let M=1;M<u.length;M++)u[M]===2&&M!==u.length-1||(u[M]!==x&&(y.push(x===0?Math.min(p,f[M-1]):Math.max(p,f[M-1])),x=u[M],p=f[M]),M===u.length-1&&y.push(u[M]===0?Math.min(p,f[M]):Math.max(p,f[M])));y.sort((M,w)=>M-w)}else f[0]>f[1]&&(y=[f[1],f[0]]);g.push(y)}for(let d=0,l=0;d<r;d++){const f=s+i*d;for(let u=0;u<a;u++,l++){const y=m-o*u,x=g[u];if(x.length===2)f>=x[0]&&f<=x[1]&&(e.push([f,y]),h[l]=1);else if(x.length>2){let p=!1;for(let M=0;M<x.length;M+=2)if(f>=x[M]&&f<=x[M+1]){p=!0;break}p&&(e.push([f,y]),h[l]=1)}}}return{points:e,mask:h}}function On(n,t){const[e,r]=t;for(let a=0;a<n.length;a++){const i=n[a][1];(i<e||i>r)&&(n[a]=[NaN,NaN])}}function mn(n){const t=T(n[0].spatialReference);if(n.length<2||!S(t))return n[0];let{xmin:e,xmax:r,ymin:a,ymax:i}=n[0];for(let o=1;o<n.length;o++){const c=n[o];r=c.xmax+t*o,a=Math.min(a,c.ymin),i=Math.max(i,c.ymax)}return new K({xmin:e,xmax:r,ymin:a,ymax:i,spatialReference:n[0].spatialReference})}function hn(n,t,e=null,r=!0){if(n.spatialReference.equals(t))return n;const a=jn(n),i=T(n.spatialReference,!0),o=T(t);if(a===0||$(i)||$(o))return ln(n,t,e,r);const c=n.clone().normalize();if(c.length===1&&n.xmax<i&&n.xmax-i/2>N(n.spatialReference)){const{xmin:s,xmax:m}=n;for(let h=0;h<=a;h++){const R=h===0?s:-i/2,g=h===a?m-i*h:i/2;c[h]=new K({xmin:R,xmax:g,ymin:n.ymin,ymax:n.ymax,spatialReference:n.spatialReference})}}return mn(c.map(s=>ln(s,t,e,r)).filter(s=>!!s))}function ln(n,t,e=null,r=!0,a=!0){const i=n.spatialReference;if(i.equals(t))return n;C(i,t,e);const o=O(n,t,e);if(a&&t.isWebMercator&&o&&(o.ymax=Math.min(20037508342787e-6,o.ymax),o.ymin=Math.max(-20037508342787e-6,o.ymin),o.ymin>=o.ymax))return null;if(!r||!o)return o;const c=B(i,!0),s=B(t,!0);if($(c)||$(s))return o;const m=N(i,.001),h=N(i,500),R=N(t,.001);if(Math.abs(o.xmin-s[0])<R&&Math.abs(o.xmax-s[1])<R){const g=Math.abs(n.xmin-c[0]),d=Math.abs(c[1]-n.xmax);if(g<m&&d>h){o.xmin=s[0];const l=[];l.push(new G(n.xmax,n.ymin,i)),l.push(new G(n.xmax,(n.ymin+n.ymax)/2,i)),l.push(new G(n.xmax,n.ymax,i));const f=l.map(u=>on(u,t,e)).filter(u=>!isNaN(u==null?void 0:u.x)).map(u=>u.x);o.xmax=Math.max.apply(null,f)}if(d<m&&g>h){o.xmax=s[1];const l=[];l.push(new G(n.xmin,n.ymin,i)),l.push(new G(n.xmin,(n.ymin+n.ymax)/2,i)),l.push(new G(n.xmin,n.ymax,i));const f=l.map(u=>on(u,t,e)).filter(u=>!isNaN(u==null?void 0:u.x)).map(u=>u.x);o.xmin=Math.min.apply(null,f)}}else{const g=N(t,.001);Math.abs(o.xmin-s[0])<g&&(o.xmin=s[0]),Math.abs(o.xmax-s[1])<g&&(o.xmax=s[1])}return o}function T(n,t=!1){const e=t?20037508342787e-6:20037508342788905e-9;return n.isWebMercator?2*e:n.wkid&&n.isGeographic?360:2*_n[n.wkid]||null}function B(n,t=!1){if(n.isGeographic)return[-180,180];const e=T(n,t);return S(e)?[-e/2,e/2]:null}function cn(n,t,e,r){let a=(n-t)/e;return a-Math.floor(a)!=0?a=Math.floor(a):r&&(a-=1),a}function jn(n,t=!1){const e=T(n.spatialReference);if(!S(e))return 0;const r=t?0:-(e/2),a=N(n.spatialReference),i=!t&&Math.abs(n.xmax-e/2)<a?e/2:n.xmax,o=!t&&Math.abs(n.xmin+e/2)<a?-e/2:n.xmin;return cn(i,r,e,!0)-cn(o,r,e,!1)}function Ln(n){const t=n.storageInfo.origin.x,e=T(n.spatialReference,!0);if(!S(e))return{originX:t,halfWorldWidth:null,pyramidsInfo:null};const r=e/2,{nativePixelSize:a,storageInfo:i,extent:o}=n,{maximumPyramidLevel:c,blockWidth:s,pyramidScalingFactor:m}=i;let h=a.x;const R=[],g=S(n.transform)&&n.transform.type==="gcs-shift",d=t+(g?0:r),l=g?e-t:r-t;for(let f=0;f<=c;f++){const u=(o.xmax-t)/h/s,y=u-Math.floor(u)==0?u:Math.ceil(u),x=l/h/s,p=x-Math.floor(x)==0?x:Math.ceil(x),M=Math.floor(d/h/s),w=Math.round(d/h)%s,P=(s-Math.round(l/h)%s)%s;R.push({resolutionX:h,blockWidth:s,datsetColumnCount:y,worldColumnCountFromOrigin:p,leftMargin:w,rightPadding:P,originColumnOffset:M}),h*=m}return{originX:t,halfWorldWidth:r,pyramidsInfo:R,hasGCSSShiftTransform:g}}function An(n){if(!n||n.isGeographic)return n;const t=String(n.wkid||n.wkt);let e;return X.has(t)?e=X.get(t):(e=(n.wkid?k.coordsys(n.wkid):k.fromString(E.PE_TYPE_PROJCS,n.wkt)).getGeogcs().getCode(),X.set(t,e)),new Cn({wkid:e})}function Jn(n){const t=n.isAdaptive&&n.spacing==null;let e=n.spacing||[I,I],r=H(n),a={cols:r.size[0]+1,rows:r.size[1]+1};const i=r.outofBoundPointCount>0&&r.outofBoundPointCount<r.offsets.length/2;let o=r.outofBoundPointCount===r.offsets.length/2||t&&i?[0,0]:en(r.offsets,a,e,q);const c=(o[0]+o[1])/2,s=n.projectedExtent.spatialReference,m=n.srcBufferExtent.spatialReference;if(t&&(i||c>q)&&(xn(s,m,n.datumTransformation)&&(s.isGeographic||S(W(s))),e=[Y,Y],r=H(J(L({},n),{spacing:e})),a={cols:r.size[0]+1,rows:r.size[1]+1},o=en(r.offsets,a,e,q)),r.error=o,e[0]>1&&(r.coefficients=fn(r.offsets,a,i)),n.includeGCSGrid&&!s.isGeographic&&!s.isWebMercator)if(m.isGeographic)r.gcsGrid={offsets:r.offsets,coefficients:r.coefficients,spacing:e};else{const h=W(s);if(S(h)&&!h.isEnvelope){const R=An(s),g=hn(n.projectedExtent,R),{offsets:d}=H(J(L({},n),{srcBufferExtent:g,spacing:e})),l=fn(d,a,i);r.gcsGrid={offsets:d,coefficients:l,spacing:e}}}return r}function H(n){const{projectedExtent:t,srcBufferExtent:e,pixelSize:r,datumTransformation:a,rasterTransform:i}=n,o=t.spatialReference,c=e.spatialReference;C(o,c);const{xmin:s,ymin:m,xmax:h,ymax:R}=t,g=T(c),d=S(g)&&(n.hasWrapAround||(i==null?void 0:i.type)==="gcs-shift"),l=n.spacing||[I,I],f=l[0]*r.x,u=l[1]*r.y,y=l[0]===1,x=Math.ceil((h-s)/f-.1/l[0])+(y?0:1),p=Math.ceil((R-m)/u-.1/l[1])+(y?0:1),M=$n({cols:x,rows:p,xmin:s,ymax:R,xres:f,yres:u,inSR:o,outSR:c,datumTransformation:a,preferPE:l[0]<=Y,usePixelCenter:y}),w=[];let P,v=0;const j=y?-1:NaN,{xmin:pn,xmax:gn,ymax:yn,width:dn,height:Mn}=e,wn=N(c,500);for(let A=0;A<x;A++){const F=[];for(let _=0;_<p;_++){let b=M[A*p+_];if(d&&b[0]>gn&&b[0]>g/2-wn&&(b[0]-=g),!b||isNaN(b[0])||isNaN(b[1]))w.push(j),w.push(j),F.push(null),v++;else{if(i){const U=i.inverseTransform(new G({x:b[0],y:b[1],spatialReference:c}));b=[U.x,U.y]}F.push(b),A>0&&d&&P[_]&&b[0]<P[_][0]&&(b[0]+=g),w.push((b[0]-pn)/dn),w.push((yn-b[1])/Mn)}}P=F}return{offsets:w,error:null,coefficients:null,outofBoundPointCount:v,spacing:l,size:y?[x,p]:[x-1,p-1]}}function fn(n,t,e){const{cols:r,rows:a}=t,i=new Float32Array((r-1)*(a-1)*2*6),o=new Float32Array([-0,-1,1,-1,1,-0,1,-0,-0]),c=new Float32Array([-1,1,0,0,-1,1,1,0,0]);for(let s=0;s<r-1;s++){for(let m=0;m<a-1;m++){let h=s*a*2+2*m;const R=n[h],g=n[h+1],d=n[h+2],l=n[h+3];h+=2*a;const f=n[h],u=n[h+1],y=n[h+2],x=n[h+3];let p=0,M=12*(m*(r-1)+s);for(let w=0;w<3;w++)i[M++]=o[p++]*R+o[p++]*d+o[p++]*y;p=0;for(let w=0;w<3;w++)i[M++]=o[p++]*g+o[p++]*l+o[p++]*x;p=0;for(let w=0;w<3;w++)i[M++]=c[p++]*R+c[p++]*f+c[p++]*y;p=0;for(let w=0;w<3;w++)i[M++]=c[p++]*g+c[p++]*u+c[p++]*x}if(e)for(let m=0;m<i.length;m++)isNaN(i[m])&&(i[m]=-1)}return i}function qn(n){const t=n.clone().normalize();return t.length===1?t[0]:mn(t)}function Vn(n,t,e){const{storageInfo:r,pixelSize:a}=t;let i,o=!1;const{pyramidResolutions:c}=r;if(S(c)&&c.length){const g=(n.x+n.y)/2,d=c[c.length-1],l=(d.x+d.y)/2,f=(a.x+a.y)/2;if(g<=f)i=0;else if(g>=l)i=c.length,o=g/l>8;else{let y,x=f;for(let p=1;p<=c.length;p++){if(y=(c[p-1].x+c[p-1].y)/2,g<=y){g===y?i=p:e==="down"?(i=p-1,o=g/x>8):i=e==="up"||g-x>y-g||g/x>2?p:p-1;break}x=y}}const u=i===0?a:c[i-1];return{pyramidLevel:i,pyramidResolution:new G({x:u.x,y:u.y,spatialReference:t.spatialReference}),excessiveReading:o}}const s=Math.log(n.x/a.x)/Math.LN2,m=Math.log(n.y/a.y)/Math.LN2,h=t.storageInfo.maximumPyramidLevel||0;i=e==="down"?Math.floor(Math.min(s,m)):e==="up"?Math.ceil(Math.max(s,m)):Math.round((s+m)/2),i<0?i=0:i>h&&(o=i>h+3,i=h);const R=2**i;return{pyramidLevel:i,pyramidResolution:new G({x:R*t.nativePixelSize.x,y:R*t.nativePixelSize.y,spatialReference:t.spatialReference}),excessiveReading:o}}function Xn(n,t,e=512,r=!0){const{extent:a,spatialReference:i,pixelSize:o}=n,c=sn(new G({x:o.x,y:o.y,spatialReference:i}),t,a);if(c==null)return{projectedPixelSize:null,scales:null,srcResolutions:null,isCustomTilingScheme:!1};const s=(c.x+c.y)/2,m=z(t),h=s*m*96*39.37,R=t.isGeographic?256/e*2958287637958547e-7:256/e*591657527591555e-6;let g=n.dataType==="vector-magdir"||n.dataType==="vector-uv";const d=hn(a,t);g||r&&(t.isGeographic||t.isWebMercator)&&(g=d.xmin*d.xmax<0);let l,f=h;const u=1.001;if(g){f=R;const w=t.isGeographic?1341104507446289e-21:.29858214164761665,P=w*(96*m*39.37),v=t.isGeographic?4326:3857;l=sn(new G({x:w,y:w,spatialReference:{wkid:v}}),i,d),l.x*=f/P,l.y*=f/P}else{l={x:o.x,y:o.y};const w=Math.ceil(Math.log(Math.min(n.width,n.height)/32)/Math.LN2);let P=0;for(;f<R*(u/2)&&P<w;)P++,f*=2,l.x*=2,l.y*=2;Math.max(f,R)/Math.min(f,R)<=u&&(f=R)}const y=[f],x=[{x:l.x,y:l.y}],p=70.5310735,M=Math.min(p,h)/u;for(;f>=M;)f/=2,l.x/=2,l.y/=2,y.push(f),x.push({x:l.x,y:l.y});return{projectedPixelSize:c,scales:y,srcResolutions:x,isCustomTilingScheme:!g}}export{Xn as $,hn as B,Jn as D,Bn as G,Ln as K,T as L,sn as N,on as T,qn as V,jn as X,Vn as Z,Fn as k,xn as y};
