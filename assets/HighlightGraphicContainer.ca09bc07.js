import{ac as s,ae as a,ue as h}from"./vendor.1dc52be5.js";import{I as o}from"./Utils.25ecb0e0.js";import{t as d}from"./BaseGraphicContainer.875f1ac5.js";let i=class extends d{renderChildren(e){if(e.drawPhase!==o.HIGHLIGHT||(this.attributeView.bindTextures(e.context),!this.children.some(r=>r.hasData)))return;super.renderChildren(e);const{painter:n}=e,t=n.effects.highlight;t.bind(e),e.context.setColorMask(!0,!0,!0,!0),e.context.clear(h.COLOR_BUFFER_BIT),this._renderChildren(e,t.defines.concat(["highlightAll"])),t.draw(e),t.unbind()}};i=s([a("esri.views.2d.layers.support.HighlightGraphicContainer")],i);const f=i;export{f as n};
