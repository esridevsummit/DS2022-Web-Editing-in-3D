var A=Object.defineProperty,F=Object.defineProperties;var M=Object.getOwnPropertyDescriptors;var k=Object.getOwnPropertySymbols;var U=Object.prototype.hasOwnProperty,W=Object.prototype.propertyIsEnumerable;var D=(o,s,l)=>s in o?A(o,s,{enumerable:!0,configurable:!0,writable:!0,value:l}):o[s]=l,T=(o,s)=>{for(var l in s||(s={}))U.call(s,l)&&D(o,l,s[l]);if(k)for(var l of k(s))W.call(s,l)&&D(o,l,s[l]);return o},w=(o,s)=>F(o,M(s));import{ac as e,ad as t,ae as n,f9 as b,hq as K,hm as v,hl as G,aF as i,b7 as q,kU as B,n1 as N,n2 as E}from"./vendor.1dc52be5.js";var S;let h=S=class extends b{constructor(){super(...arguments),this.field=null,this.minValue=0,this.maxValue=255}clone(){return new S({field:this.field,minValue:this.minValue,maxValue:this.maxValue})}};e([t({type:String,json:{write:!0}})],h.prototype,"field",void 0),e([t({type:Number,nonNullable:!0,json:{write:!0}})],h.prototype,"minValue",void 0),e([t({type:Number,nonNullable:!0,json:{write:!0}})],h.prototype,"maxValue",void 0),h=S=e([n("esri.renderers.support.pointCloud.ColorModulation")],h);const H=h,V=new K({pointCloudFixedSizeAlgorithm:"fixed-size",pointCloudSplatAlgorithm:"splat"});let g=class extends b{};e([t({type:V.apiValues,readOnly:!0,nonNullable:!0,json:{type:V.jsonValues,read:!1,write:V.write}})],g.prototype,"type",void 0),g=e([n("esri.renderers.support.pointCloud.PointSizeAlgorithm")],g);const O=g;var C;let f=C=class extends O{constructor(){super(...arguments),this.type="fixed-size",this.size=0,this.useRealWorldSymbolSizes=null}clone(){return new C({size:this.size,useRealWorldSymbolSizes:this.useRealWorldSymbolSizes})}};e([v({pointCloudFixedSizeAlgorithm:"fixed-size"})],f.prototype,"type",void 0),e([t({type:Number,nonNullable:!0,json:{write:!0}})],f.prototype,"size",void 0),e([t({type:Boolean,json:{write:!0}})],f.prototype,"useRealWorldSymbolSizes",void 0),f=C=e([n("esri.renderers.support.pointCloud.PointSizeFixedSizeAlgorithm")],f);const J=f;var $;let m=$=class extends O{constructor(){super(...arguments),this.type="splat",this.scaleFactor=1}clone(){return new $({scaleFactor:this.scaleFactor})}};e([v({pointCloudSplatAlgorithm:"splat"})],m.prototype,"type",void 0),e([t({type:Number,value:1,nonNullable:!0,json:{write:!0}})],m.prototype,"scaleFactor",void 0),m=$=e([n("esri.renderers.support.pointCloud.PointSizeSplatAlgorithm")],m);const L=m,Q={key:"type",base:O,typeMap:{"fixed-size":J,splat:L}},j=G()({pointCloudClassBreaksRenderer:"point-cloud-class-breaks",pointCloudRGBRenderer:"point-cloud-rgb",pointCloudStretchRenderer:"point-cloud-stretch",pointCloudUniqueValueRenderer:"point-cloud-unique-value"});let p=class extends b{constructor(o){super(o),this.type=void 0,this.pointSizeAlgorithm=null,this.colorModulation=null,this.pointsPerInch=10}clone(){return console.warn(".clone() is not implemented for "+this.declaredClass),null}cloneProperties(){return{pointSizeAlgorithm:i(this.pointSizeAlgorithm),colorModulation:i(this.colorModulation),pointsPerInch:i(this.pointsPerInch)}}};e([t({type:j.apiValues,readOnly:!0,nonNullable:!0,json:{type:j.jsonValues,read:!1,write:j.write}})],p.prototype,"type",void 0),e([t({types:Q,json:{write:!0}})],p.prototype,"pointSizeAlgorithm",void 0),e([t({type:H,json:{write:!0}})],p.prototype,"colorModulation",void 0),e([t({json:{write:!0},nonNullable:!0,type:Number})],p.prototype,"pointsPerInch",void 0),p=e([n("esri.renderers.PointCloudRenderer")],p),function(o){o.fieldTransformTypeKebabDict=new K({none:"none",lowFourBit:"low-four-bit",highFourBit:"high-four-bit",absoluteValue:"absolute-value",moduloTen:"modulo-ten"})}(p||(p={}));const r=p;var x;let a=x=class extends b{constructor(){super(...arguments),this.description=null,this.label=null,this.minValue=0,this.maxValue=0,this.color=null}clone(){return new x({description:this.description,label:this.label,minValue:this.minValue,maxValue:this.maxValue,color:i(this.color)})}};e([t({type:String,json:{write:!0}})],a.prototype,"description",void 0),e([t({type:String,json:{write:!0}})],a.prototype,"label",void 0),e([t({type:Number,json:{read:{source:"classMinValue"},write:{target:"classMinValue"}}})],a.prototype,"minValue",void 0),e([t({type:Number,json:{read:{source:"classMaxValue"},write:{target:"classMaxValue"}}})],a.prototype,"maxValue",void 0),e([t({type:q,json:{type:[B],write:!0}})],a.prototype,"color",void 0),a=x=e([n("esri.renderers.support.pointCloud.ColorClassBreakInfo")],a);const X=a;var z;let d=z=class extends r{constructor(o){super(o),this.type="point-cloud-class-breaks",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.colorClassBreakInfos=null}clone(){return new z(w(T({},this.cloneProperties()),{field:this.field,fieldTransformType:this.fieldTransformType,colorClassBreakInfos:i(this.colorClassBreakInfos),legendOptions:i(this.legendOptions)}))}};e([v({pointCloudClassBreaksRenderer:"point-cloud-class-breaks"})],d.prototype,"type",void 0),e([t({json:{write:!0},type:String})],d.prototype,"field",void 0),e([t({type:N,json:{write:!0}})],d.prototype,"legendOptions",void 0),e([t({type:r.fieldTransformTypeKebabDict.apiValues,json:{type:r.fieldTransformTypeKebabDict.jsonValues,read:r.fieldTransformTypeKebabDict.read,write:r.fieldTransformTypeKebabDict.write}})],d.prototype,"fieldTransformType",void 0),e([t({type:[X],json:{write:!0}})],d.prototype,"colorClassBreakInfos",void 0),d=z=e([n("esri.renderers.PointCloudClassBreaksRenderer")],d);const ee=d;var R;let u=R=class extends r{constructor(o){super(o),this.type="point-cloud-stretch",this.field=null,this.legendOptions=null,this.fieldTransformType=null,this.stops=null}clone(){return new R(w(T({},this.cloneProperties()),{field:i(this.field),fieldTransformType:i(this.fieldTransformType),stops:i(this.stops),legendOptions:i(this.legendOptions)}))}};e([v({pointCloudStretchRenderer:"point-cloud-stretch"})],u.prototype,"type",void 0),e([t({json:{write:!0},type:String})],u.prototype,"field",void 0),e([t({type:N,json:{write:!0}})],u.prototype,"legendOptions",void 0),e([t({type:r.fieldTransformTypeKebabDict.apiValues,json:{type:r.fieldTransformTypeKebabDict.jsonValues,read:r.fieldTransformTypeKebabDict.read,write:r.fieldTransformTypeKebabDict.write}})],u.prototype,"fieldTransformType",void 0),e([t({type:[E],json:{write:!0}})],u.prototype,"stops",void 0),u=R=e([n("esri.renderers.PointCloudStretchRenderer")],u);const te=u;var P;let y=P=class extends b{constructor(){super(...arguments),this.description=null,this.label=null,this.values=null,this.color=null}clone(){return new P({description:this.description,label:this.label,values:i(this.values),color:i(this.color)})}};e([t({type:String,json:{write:!0}})],y.prototype,"description",void 0),e([t({type:String,json:{write:!0}})],y.prototype,"label",void 0),e([t({type:[String],json:{write:!0}})],y.prototype,"values",void 0),e([t({type:q,json:{type:[B],write:!0}})],y.prototype,"color",void 0),y=P=e([n("esri.renderers.support.pointCloud.ColorUniqueValueInfo")],y);const Y=y;var I;let c=I=class extends r{constructor(o){super(o),this.type="point-cloud-unique-value",this.field=null,this.fieldTransformType=null,this.colorUniqueValueInfos=null,this.legendOptions=null}clone(){return new I(w(T({},this.cloneProperties()),{field:i(this.field),fieldTransformType:i(this.fieldTransformType),colorUniqueValueInfos:i(this.colorUniqueValueInfos),legendOptions:i(this.legendOptions)}))}};e([v({pointCloudUniqueValueRenderer:"point-cloud-unique-value"})],c.prototype,"type",void 0),e([t({json:{write:!0},type:String})],c.prototype,"field",void 0),e([t({type:r.fieldTransformTypeKebabDict.apiValues,json:{type:r.fieldTransformTypeKebabDict.jsonValues,read:r.fieldTransformTypeKebabDict.read,write:r.fieldTransformTypeKebabDict.write}})],c.prototype,"fieldTransformType",void 0),e([t({type:[Y],json:{write:!0}})],c.prototype,"colorUniqueValueInfos",void 0),e([t({type:N,json:{write:!0}})],c.prototype,"legendOptions",void 0),c=I=e([n("esri.renderers.PointCloudUniqueValueRenderer")],c);const oe=c;export{oe as a,te as b,r as c,ee as d};
