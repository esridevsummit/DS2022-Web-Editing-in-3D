import{c as a,j as c}from"./vendor.1dc52be5.js";let t=null;function l(e,o){t&&e.ui.remove(t),t=document.createElement("div"),t.className="esri-widget",t.style.padding="10px",t.style.fontSize="2.5rem",e.ui.add(t,"top-right"),a(()=>o.geometry,i=>{if(!(i instanceof c)||!t)return;const{x:r,y:d,z:n}=i;t.textContent=`X: ${r.toFixed(2)} | Y: ${d.toFixed(2)} | Z: ${n===void 0?"-":n.toFixed(2)}`},{initial:!0,sync:!0})}export{l as w};
