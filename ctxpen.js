;(function(root){

 var props = [/*'canvas', */'fillStyle', 'font', 'globalAlpha', 'globalCompositeOperation',
              'lineCap', 'lineJoin', 'lineWidth', 'miterLimit', 'shadowOffsetX', 'shadowOffsetY',
              'shadowBlur', 'shadowColor', 'strokeStyle', 'textAlign', 'textBaseline',
              'lineHeight'/*special*/]
 ;
 var defpen={font:"12px misaki,monospace",textAlign:"left",textBaseline:"top",fillStyle:"white",strokeStyle:"white",lineWidth:2,lineHeight:1.0}
;

 let is={}
 is.string = function(obj){return toString.call(obj) === '[object String]'} 
 ;
 function entry(w,h,def){
  let o={}
  o.canvas =document.createElement('canvas')
  o.w=o.canvas.width=w||320
  o.h=o.canvas.height=h||240
  o.ctx=o.canvas.getContext('2d')
  o.vctx=void 0
  o.fontsize=16
  ;
  let wk={}
  props.map(d=> wk[d]=o.ctx[d] )
  o.penstock={};
  o.penstock['default']=Object.assign({},wk,defpen,def)
  Object.assign(o.ctx,o.penstock['default'])
  o.fontsize=parseInt(o.ctx.font)
  ;
  o.makepen=function makepen(name,obj){
   let d=o.penstock['default']
   o.penstock[name] = Object.assign({},d,obj)
   return o
  }
  o.pen=function pen(name){
   if(!name) name='default'
   if(!o.penstock[name]) name='default'
   Object.assign(o.ctx,o.penstock[name])
   o.fontsize=parseInt(o.ctx.font)   
   return o
  }
  o.flip=function flip(canvas){
   if(!canvas)return o
   ;
   if(!o.vctx){
    canvas.width=o.w
    canvas.height=o.h    
    o.vctx=canvas.getContext('2d')
   }
   o.vctx.drawImage(o.ctx.canvas, 0, 0)
   ;
   return o
  }
  o.box=function box(x,y,w,h,color){
   let wk=o.ctx.fillStyle
   o.ctx.fillStyle=color||wk
   o.ctx.fillRect(x,y,w,h)
   o.ctx.fillStyle=wk
   return o
  }

  o.clearbox=function clearbox(color){
   return o.box(0,0,o.w,o.h,color)
  }
  o.image=function image(...arg){
   o.ctx.drawImage.apply(o.ctx, arg);
   return o
  }
  o.imagebox=function imagebox(img,x,y,w,h){
   let nw=img.naturalWidth,nh=img.naturalHeight
   let min=Math.min(w/nw,h/nh)
   o.ctx.drawImage(img,x,y,nw*min,nh*min)
   return o
 }

  o.borderbox=function borderbox(x,y,w,h,color){
   let wk=o.ctx.strokeStyle,lw=o.ctx.lineWidth
   o.ctx.strokeStyle=color||wk
   o.ctx.strokeRect(x+lw/2,y+lw/2,w-lw,h-lw)
   o.ctx.strokeStyle=wk
   return o
  }
  o.box2=o.borderbox

  o.text=function text(t,x,y,w,color){
   let wk=o.ctx.fillStyle
   o.ctx.fillStyle=color||wk 
   o.ctx.fillText(t,x,y,w)
   o.ctx.fillStyle=wk 
   return o
  }

  o.text2=function text2(t,x,y,w,color){
   let wk=o.ctx.fillStyle
   o.ctx.fillStyle=color||wk 
   let len= parseInt(o.ctx.font) * o.ctx.lineHeight
   ;(t+'').split('\n').map((d,i)=>o.ctx.fillText(d,x,y+i*len,w))
   o.ctx.fillStyle=wk 
   return o
  }
  return o;
 }

 /*
 man() //help to console.log
* makepen()
* pen()
* box()
* borderbox()
 text()
 text2()
*image()
 line()
 polyline()
* flip()
* clearbox()
*/
 ////
 root.ctxpen=entry 
})(this);
