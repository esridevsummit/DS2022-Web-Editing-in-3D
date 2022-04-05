import{a5 as m,af as b,a4 as s,ag as o,ah as l,j as p,ai as n,aj as y,ak as M,g as S,a9 as g,al as c,am as u}from"./vendor.1dc52be5.js";import{W as I,b as P}from"./enums.c01b5663.js";import{o as d}from"./settings.e8b6f524.js";import{r as x}from"./SnappingContext.b304ea51.js";class T extends x{constructor(e){super(),this.graphicsLayer=e}visualizeIntersectionPoint(e,r){return this._visualizeSnappingIndicator(new p({x:e.intersectionPoint[0],y:e.intersectionPoint[1],spatialReference:r.coordinateHelper.spatialReference}),L)}visualizePoint(e,r){return this._visualizeSnappingIndicator(new p({x:e.point[0],y:e.point[1],spatialReference:r.coordinateHelper.spatialReference}),f)}visualizeLine(e,r){return this._visualizeSnappingIndicator(new n({paths:[[e.lineStart,e.lineEnd]],spatialReference:r.coordinateHelper.spatialReference}),z)}visualizeParallelSign(e,r){return this._visualizeSnappingIndicator(new n({paths:[[e.lineStart,e.lineEnd]],spatialReference:r.coordinateHelper.spatialReference}),v)}visualizeRightAngleQuad(e,r){return this._visualizeSnappingIndicator(new n({paths:[[e.previousVertex,e.centerVertex,e.nextVertex]],spatialReference:r.coordinateHelper.spatialReference}),w(e))}_visualizeSnappingIndicator(e,r){const a=new S({geometry:e,symbol:r});return this.graphicsLayer.add(a),g(()=>{this.graphicsLayer.remove(a)})}}const t=d.main.toArray(),C=[...d.main.toRgb(),100],L=new m({outline:new b({width:1.5,color:t}),size:15,color:[0,0,0,0]}),f=new m({outline:{width:.5,color:[0,0,0,1]},size:10,color:t}),z=new s({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:I.Butt,joinStyle:P.Round,miterLimit:10,width:o(l.lineHintWidthTarget),color:t}]}}}),v=new s({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:-1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,1.5],[7,1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:t}]}}],scaleSymbolsProportionally:!0,respectFrame:!0},{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:0,y:1,z:0},anchorPointUnits:"Relative",size:5,markerPlacement:{type:"CIMMarkerPlacementOnLine",placePerPart:!0,angleToLine:!0,relativeTo:"LineMiddle"},frame:{xmin:-5,ymin:-1.5,xmax:5,ymax:1.5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{rings:[[[7,0],[-7,0],[-7,-1.5],[7,-1.5]]]},symbol:{type:"CIMPolygonSymbol",symbolLayers:[{type:"CIMSolidFill",enable:!0,color:t}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}}),h=i=>new s({data:{type:"CIMSymbolReference",symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMVectorMarker",enable:!0,anchorPoint:{x:.5,y:.5,z:0},anchorPointUnits:"Relative",size:o(l.rightAngleHintSize),rotation:i,markerPlacement:{type:"CIMMarkerPlacementOnVertices",placePerPart:!0,angleToLine:!0,placeOnEndPoints:!1},frame:{xmin:-5,ymin:-5,xmax:5,ymax:5},markerGraphics:[{type:"CIMMarkerGraphic",geometry:{paths:[[[5,-5],[-5,-5],[-5,5],[5,5],[5,-5]]]},symbol:{type:"CIMLineSymbol",symbolLayers:[{type:"CIMSolidStroke",enable:!0,capStyle:"Butt",joinStyle:"Round",miterLimit:10,width:o(l.rightAngleHintOutlineSize),color:t},{type:"CIMSolidFill",enable:!0,color:C}]}}],scaleSymbolsProportionally:!0,respectFrame:!0}]}}}),R=h(45),k=h(225),w=(()=>{const i=c(),e=c(),r=u();return a=>(y(i,a.centerVertex,a.previousVertex),y(e,a.nextVertex,a.previousVertex),M(r,i,e),r[2]<0?R:k)})();export{T as g};