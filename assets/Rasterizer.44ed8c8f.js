import{J as v,c as I,$ as g,t as _}from"./CIMSymbolHelper.e5777d0e.js";import{r as b,m as M}from"./cimAnalyzer.13178822.js";import{rG as A}from"./vendor.1dc52be5.js";const P=512;class F{constructor(e){this._resourceManager=e}dispose(){this._rasterizationCanvas=null}rasterizeJSONResource(e,l,c){if(this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),e.type==="simple-fill"||e.type==="esriSFS"){const[i,a,n]=v.rasterizeSimpleFill(this._rasterizationCanvas,e.style,l);return{size:[a,n],image:new Uint32Array(i.buffer),sdf:!1,simplePattern:!0,anchorX:0,anchorY:0}}if(e.type==="simple-line"||e.type==="esriSLS"||e.type==="line"&&e.dashTemplate){let i,a;if(e.type==="simple-line"||e.type==="esriSLS")switch(i=I(e.style,e.cap),e.cap){case"butt":a="Butt";break;case"square":a="Square";break;default:a="Round"}else i=e.dashTemplate,a=e.cim.capStyle;const[n,y,d]=v.rasterizeSimpleLine(i,a);return{size:[y,d],image:new Uint32Array(n.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}}let r,f,h;if(e.type==="simple-marker"||e.type==="esriSMS"||e.type==="line-marker"?(r=g.fromSimpleMarker(e),h=b(r)):e.cim&&e.cim.type==="CIMHatchFill"?(r=g.fromCIMHatchFill(e.cim),f=new _(r.frame.xmin,-r.frame.ymax,r.frame.xmax-r.frame.xmin,r.frame.ymax-r.frame.ymin)):e.cim.markerPlacement&&e.cim.markerPlacement.type==="CIMMarkerPlacementInsidePolygon"?(r=g.fromCIMInsidePolygon(e.cim),f=new _(r.frame.xmin,-r.frame.ymax,r.frame.xmax-r.frame.xmin,r.frame.ymax-r.frame.ymin)):(r=e.cim,h=b(r)),h&&!c){const[i,a,n]=M(h);return i?{size:[a,n],image:new Uint32Array(i.buffer),sdf:!0,simplePattern:!0,anchorX:0,anchorY:0}:null}const[t,p,u,m,s]=g.rasterize(this._rasterizationCanvas,r,f,this._resourceManager,!c);return t?{size:[p,u],image:new Uint32Array(t.buffer),sdf:!1,simplePattern:!1,anchorX:m,anchorY:s}:null}rasterizeImageResource(e,l,c,r){this._rasterizationCanvas||(this._rasterizationCanvas=document.createElement("canvas")),this._rasterizationCanvas.width=e,this._rasterizationCanvas.height=l;const f=this._rasterizationCanvas.getContext("2d");c instanceof ImageData?f.putImageData(c,0,0):(c.setAttribute("width",`${e}px`),c.setAttribute("height",`${l}px`),f.drawImage(c,0,0,e,l));const h=f.getImageData(0,0,e,l),t=new Uint8Array(h.data);if(r){for(const a of r)if(a&&a.oldColor&&a.oldColor.length===4&&a.newColor&&a.newColor.length===4){const[n,y,d,C]=a.oldColor,[z,w,x,S]=a.newColor;if(n===z&&y===w&&d===x&&C===S)continue;for(let o=0;o<t.length;o+=4)n===t[o]&&y===t[o+1]&&d===t[o+2]&&C===t[o+3]&&(t[o]=z,t[o+1]=w,t[o+2]=x,t[o+3]=S)}}let p;for(let a=0;a<t.length;a+=4)p=t[a+3]/255,t[a]=t[a]*p,t[a+1]=t[a+1]*p,t[a+2]=t[a+2]*p;let u=t,m=e,s=l;const i=P;if(m>=i||s>=i){const a=m/s;a>1?(m=i,s=Math.round(i/a)):(s=i,m=Math.round(i*a)),u=new Uint8Array(4*m*s);const n=new Uint8ClampedArray(u.buffer);A(t,e,l,n,m,s,!1)}return{size:[m,s],image:new Uint32Array(u.buffer),sdf:!1,simplePattern:!1,anchorX:0,anchorY:0}}}export{F as m};
