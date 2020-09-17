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
