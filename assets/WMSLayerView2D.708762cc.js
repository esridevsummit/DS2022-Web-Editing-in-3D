var U=Object.defineProperty;var x=Object.getOwnPropertySymbols;var V=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var w=(e,t,r)=>t in e?U(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,v=(e,t)=>{for(var r in t||(t={}))V.call(t,r)&&w(e,r,t[r]);if(x)for(var r of x(t))W.call(t,r)&&w(e,r,t[r]);return e};import{aM as E,fJ as L,c as b,gf as C,ac as h,ad as M,ae as D,fG as F}from"./vendor.1dc52be5.js";import{t as H}from"./BitmapContainer.ff87baf1.js";import{f as z}from"./LayerView2D.117f6ba5.js";import{S as A}from"./ExportStrategy.18610da5.js";import{i as G}from"./RefreshableLayerView.3b33c0ca.js";import{a as J}from"./WMSLayerView.82b9db05.js";import"./brushes.576aab26.js";import"./definitions.52b5fae8.js";import"./Utils.25ecb0e0.js";import"./enums.c01b5663.js";import"./number.dc47462b.js";import"./ProgramTemplate.baf6faf0.js";import"./StyleDefinition.57b891ae.js";import"./GeometryUtils.5ea26345.js";import"./MaterialKey.4c6f010e.js";import"./alignmentUtils.03ee467b.js";import"./WGLContainer.5147bf48.js";import"./Container.a479a20a.js";import"./EffectView.c4d390fc.js";import"./Bitmap.2f97ffc8.js";import"./ExportWMSImageParameters.69e256a0.js";const N=E.getLogger("esri.views.2d.layers.WMSLayerView2D");let s=class extends J(G(z(F))){constructor(){super(...arguments),this.container=new H}supportsSpatialReference(e){return this.layer.serviceSupportsSpatialReference(e)}update(e){this.strategy.update(e).catch(t=>{L(t)||N.error(t)})}attach(){const{layer:e,container:t}=this,{imageMaxHeight:r,imageMaxWidth:i}=e;this.strategy=new A({container:t,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:r,imageMaxWidth:i,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1}),this.handles.add(b(()=>this.exportImageVersion,()=>this.requestUpdate()),"exportImageVersion")}detach(){this.handles.remove("exportImageVersion"),this.strategy.destroy(),this.strategy=null,this.container.removeAllChildren()}moveStart(){}viewChange(){}moveEnd(){this.requestUpdate()}createFetchPopupFeaturesQuery(e){const{view:t,container:r}=this,{x:i,y:o}=e,{spatialReference:S}=t;let a=null,n=0,d=0;if(r.children.some(I=>{const{width:c,height:g,resolution:l,x:p,y:m}=I,y=p+l*c,f=m-l*g;return i>=p&&i<=y&&o<=m&&o>=f&&(a=new C({xmin:p,ymin:f,xmax:y,ymax:m,spatialReference:S}),n=c,d=g,!0)}),!a)return null;const u=a.width/n,R=Math.round((i-a.xmin)/u),q=Math.round((a.ymax-o)/u);return{extent:a,width:n,height:d,x:R,y:q}}async doRefresh(){this.requestUpdate()}isUpdating(){return this.strategy.updating||this.updateRequested}fetchImage(e,t,r,i){return this.layer.fetchImage(e,t,r,v({timeExtent:this.timeExtent},i))}};h([M()],s.prototype,"strategy",void 0),h([M()],s.prototype,"updating",void 0),s=h([D("esri.views.2d.layers.WMSLayerView2D")],s);const mt=s;export{mt as default};
