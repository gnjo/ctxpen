# ctxpen
ctx simple wrapping 

```
//interface and sample
let viewcanvas=document.querySelector('canvas')
let $ctx=ctxpen(320,240)
;
//$ctx.ctx //original 
//$ctx.xxx(a,b,c,color) //basic
/*
 man() //help to console.log
 makepen()
 pen()
 box()
 borderbox()
 text()
 text2()
 image()
 line()
 polyline()
 flip()
 clearbox()
 pen()
*/

$ctx.man();
$ctx
 .makepen('default',{})
 .makepen('penblack',{lineWidth:2,...})
 .pen('penblack')
 .box(0,0,320,240)
 .borderbox(0,0,320,240,'yellow')
 .text('aaabbbccc',x,y,320,'red')
 .text2() //multiline
 .image(new Image(),0,0,320,240)
 .line(0,100,100,100,'brown')
 .polyline([x,y,x1,y1,x2,y2...],'red')
 .flip(viewcanvas)
 .clearbox('black')
 .pen() //'default'
;
$ctx.path('M20 20 h 80 v 80 h -80 Z','yellow')
$ctx.borderpath('M10 10 h 80 v 80 h -80 Z','blue')
```

```
パスはある点に移動して (M10 10) 、
そこから右へ水平に 80 ポイント移動 (h 80)、
下へ 80 ポイント移動 (v 80) 、
80ポイント 左へ移動 (h -80) 、
そして始点へ戻ります (z)。
この例は Path2D コンストラクタのページで確認できます。

var p = new Path2D('M10 10 h 80 v 80 h -80 Z');
```

```
 var props = [/*'canvas', */'fillStyle', 'font', 'globalAlpha', 'globalCompositeOperation',
    'lineCap', 'lineJoin', 'lineWidth', 'miterLimit', 'shadowOffsetX', 'shadowOffsetY',
    'shadowBlur', 'shadowColor', 'strokeStyle', 'textAlign', 'textBaseline']
  ;
 let is={}
 is.string()
function entry(w,h,def){
 let o={}
 o.ctx =document.createElement('canvas')
 o.ctx.width=w||320
 o.ctx.height=h||240
 ;
 let wk={}
 props.map(d=> wk[d]=o.ctx[d] )
 o.penstock={};
 o.penstock['default']=Object.assign({},wk,def)
 ;
 function makepen(name,obj){
 let d=o.penstock['default']
 o.penstock[name] = Object.assign({},d,obj)
 return o.ctx
 }
 function pen(name){
  if(!name) name='default'
  if(!o.penstock[name]) name='default'
  Object.assign(o.ctx,o.penstock[name])
  return o.ctx
 }
 function flip(canvas){
  if(!canvas)return o.ctx
  ;
  let vctx=canvas.getContext('2d')
  vctx.drawImage(o.ctx.canvas, 0, 0)
  ;
  return o.ctx
 }
 function clearbox(color){
  return o.box(0,0,o.ctx.width,o.ctx.height,color)
 }
  
 man() //help to console.log
* makepen()
* pen()
 box()
 borderbox()
 text()
 text2()
 image()
 line()
 polyline()
* flip()
* clearbox()
////
}

```






