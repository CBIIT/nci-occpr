!function(t){t.fn.mdSlider=function(i){function s(){b.addClass("loading-image"),b.wrap('<div class="md-slide-fullwidth"><div class="md-item-wrap"></div></div>'),S=b.parent(),g=S.parent(),v=i.responsive?b.width():i.width,w=i.height,b.css({width:v,height:w}),y=[],b.find("."+i.itemClassName).each(function(i){T++,y[i]=t(this),i>0&&t(this).hide()})}function e(s){if(z=0,k=y[s].data("timeout")?y[s].data("timeout"):i.slideShowDelay,s!=C)if(f=C,C=s,y[f]){var e=i.transitions;if("random"==i.transitions.toLowerCase()){var r=new Array("slit-horizontal-left-top","slit-horizontal-top-right","slit-horizontal-bottom-up","slit-vertical-down","slit-vertical-up","strip-up-right","strip-up-left","strip-down-right","strip-down-left","strip-left-up","strip-left-down","strip-right-up","strip-right-down","strip-right-left-up","strip-right-left-down","strip-up-down-right","strip-up-down-left","left-curtain","right-curtain","top-curtain","bottom-curtain","slide-in-right","slide-in-left","slide-in-up","slide-in-down");e=r[Math.floor(Math.random()*(r.length+1))],void 0==e&&(e="fade"),e=t.trim(e.toLowerCase())}if(-1!=i.transitions.indexOf(",")){var r=i.transitions.split(",");e=r[Math.floor(Math.random()*r.length)],void 0==e&&(e="fade"),e=t.trim(e.toLowerCase())}if(y[C].data("transition")){var r=y[C].data("transition").split(",");e=r[Math.floor(Math.random()*r.length)],e=t.trim(e.toLowerCase())}(this.support=Modernizr.csstransitions&&Modernizr.csstransforms3d)||"slit-horizontal-left-top"!=e&&"slit-horizontal-top-right"!=e&&"slit-horizontal-bottom-up"!=e&&"slit-vertical-down"!=e&&"slit-vertical-up"!=e||(e="fade"),R=!0,h(e)}else y[C].css({top:0,left:0}).show(),R=!1}function r(){e(0),x=setInterval(n,40)}function n(){return R?!1:(z+=40,void(z>k&&a()))}function a(){if(R)return!1;var t=C;t++,t>=T&&i.loop?(t=0,e(t)):T>t&&e(t)}function o(){i.onEndTransition.call(b),t(".md-strips-container",b).remove(),y[f].hide(),y[C].show(),R=!1}function p(s,e){for(var r,e=e?e:i,n=t('<div class="md-strips-container"></div>'),a=Math.round(v/e.strips),o=Math.round(w/e.strips),p=t(".md-mainimg img",y[C]),d=0;d<e.strips;d++){var l,c,h=s?o*d+"px":"0px",u=s?"0px":a*d+"px";d==e.strips-1?(l=s?"0px":v-a*d+"px",c=s?w-o*d+"px":"0px"):(l=s?"0px":a+"px",c=s?o+"px":"0px"),r=t('<div class="mdslider-strip"></div>').css({width:l,height:c,top:h,left:u,opacity:0}).append(p.clone().css({marginLeft:s?0:-(d*a)+"px",marginTop:s?-(d*o)+"px":0})),n.append(r)}b.append(n)}function d(i,s,e){for(var r,n=t('<div class="md-strips-container"></div>'),a=v/i,o=w/s,p=t(".md-mainimg img",y[e]),d=0;s>d;d++)for(var l=0;i>l;l++){var c=o*d+"px",h=a*l+"px";r=t('<div class="mdslider-tile"/>').css({width:a,height:o,top:c,left:h}).append(p.clone().css({marginLeft:"-"+h,marginTop:"-"+c})),n.append(r)}b.append(n)}function l(){for(var i,s=[t(".md-mainimg img",y[f]),t(".md-mainimg img",y[C])],e=t('<div class="md-strips-container"></div>'),r=0;2>r;r++)i=t('<div class="mdslider-strip"></div>').css({width:v,height:w}).append(s[r].clone()),e.append(i);b.append(e)}function c(i){var s=t('<div class="md-strips-container '+i+'"></div>'),e=t(".md-mainimg img",y[f]),r=t('<div class="mdslider-slit"/>').append(e.clone()),n=t('<div class="mdslider-slit"/>').append(e.clone().css("top","-="+w/2+"px"));("slit-vertical-down"==i||"slit-vertical-up"==i)&&(n=t('<div class="mdslider-slit"/>').append(e.clone().css("left","-="+v/2+"px"))),s.append(r).append(n),b.append(s)}function h(s){switch(s){case"slit-horizontal-left-top":case"slit-horizontal-top-right":case"slit-horizontal-bottom-up":case"slit-vertical-down":case"slit-vertical-up":c(s),t(".md-object",y[C]).hide(),y[f].hide(),y[C].show();var e=t(".mdslider-slit",b).first(),r=t(".mdslider-slit",b).last(),n={transition:"all "+i.transitionsSpeed+"ms ease-in-out","-webkit-transition":"all "+i.transitionsSpeed+"ms ease-in-out","-moz-transition":"all "+i.transitionsSpeed+"ms ease-in-out","-ms-transition":"all "+i.transitionsSpeed+"ms ease-in-out"};t(".mdslider-slit",b).css(n),setTimeout(function(){e.addClass("md-trans-elems-1"),r.addClass("md-trans-elems-2")},50),setTimeout(function(){i.onEndTransition.call(b),t(".md-strips-container",b).remove(),R=!1},i.transitionsSpeed);break;case"strip-up-right":case"strip-up-left":d(i.stripCols,1,C);var a=t(".mdslider-tile",b),h=i.transitionsSpeed/i.stripCols/2,u=i.transitionsSpeed/2;"strip-up-right"==s&&(a=t(".mdslider-tile",b).reverse()),a.css({height:"1px",bottom:"0px",top:"auto"}),a.each(function(s){var e=t(this);setTimeout(function(){e.animate({height:"100%",opacity:"1.0"},u,"easeInOutQuart",function(){s==i.stripCols-1&&o()})},s*h)});break;case"strip-down-right":case"strip-down-left":d(i.stripCols,1,C);var a=t(".mdslider-tile",b),h=i.transitionsSpeed/i.stripCols/2,u=i.transitionsSpeed/2;"strip-down-right"==s&&(a=t(".mdslider-tile",b).reverse()),a.css({height:"1px",top:"0px",bottom:"auto"}),a.each(function(s){var e=t(this);setTimeout(function(){e.animate({height:"100%",opacity:"1.0"},u,"easeInOutQuart",function(){s==i.stripCols-1&&o()})},s*h)});break;case"strip-left-up":case"strip-left-down":d(1,i.stripRows,C);var a=t(".mdslider-tile",b),h=i.transitionsSpeed/i.stripRows/2,u=i.transitionsSpeed/2;"strip-left-up"==s&&(a=t(".mdslider-tile",b).reverse()),a.css({width:"1px",left:"0px",right:"auto"}),a.each(function(s){var e=t(this);setTimeout(function(){e.animate({width:"100%",opacity:"1.0"},u,"easeInOutQuart",function(){s==i.stripRows-1&&o()})},s*h)});break;case"strip-right-up":case"strip-right-down":d(1,i.stripRows,C);var a=t(".mdslider-tile",b),h=i.transitionsSpeed/i.stripRows/2,u=i.transitionsSpeed/2;"strip-left-right-up"==s&&(a=t(".mdslider-tile",b).reverse()),a.css({width:"1px",left:"auto",right:"1px"}),a.each(function(s){var e=t(this);setTimeout(function(){e.animate({width:"100%",opacity:"1.0"},u,"easeInOutQuart",function(){s==i.stripRows-1&&o()})},s*h)});break;case"strip-right-left-up":case"strip-right-left-down":d(1,i.stripRows,f),y[f].hide(),y[C].show();var a=t(".mdslider-tile",b),h=i.transitionsSpeed/i.stripRows,u=i.transitionsSpeed/2;"strip-right-left-up"==s&&(a=t(".mdslider-tile",b).reverse()),a.filter(":odd").css({width:"100%",right:"0px",left:"auto",opacity:1}).end().filter(":even").css({width:"100%",right:"auto",left:"0px",opacity:1}),a.each(function(s){var e=t(this),r=s%2==0?{left:"-50%",opacity:"0"}:{right:"-50%",opacity:"0"};setTimeout(function(){e.animate(r,u,"easeOutQuint",function(){s==i.stripRows-1&&(i.onEndTransition.call(b),t(".md-strips-container",b).remove(),R=!1)})},s*h)});break;case"strip-up-down-right":case"strip-up-down-left":d(i.stripCols,1,f),y[f].hide(),y[C].show();var a=t(".mdslider-tile",b),h=i.transitionsSpeed/i.stripCols/2,u=i.transitionsSpeed/2;"strip-up-down-right"==s&&(a=t(".mdslider-tile",b).reverse()),a.filter(":odd").css({height:"100%",bottom:"0px",top:"auto",opacity:1}).end().filter(":even").css({height:"100%",bottom:"auto",top:"0px",opacity:1}),a.each(function(s){var e=t(this),r=s%2==0?{top:"-50%",opacity:0}:{bottom:"-50%",opacity:0};setTimeout(function(){e.animate(r,u,"easeOutQuint",function(){s==i.stripCols-1&&(i.onEndTransition.call(b),t(".md-strips-container",b).remove(),R=!1)})},s*h)});break;case"left-curtain":d(i.stripCols,1,C);var a=t(".mdslider-tile",b),m=v/i.stripCols,h=i.transitionsSpeed/i.stripCols/2;a.each(function(s){var e=t(this);e.css({left:m*s,width:0,opacity:0}),setTimeout(function(){e.animate({width:m,opacity:"1.0"},i.transitionsSpeed/2,function(){s==i.stripCols-1&&o()})},h*s)});break;case"right-curtain":d(i.stripCols,1,C);var a=t(".mdslider-tile",b).reverse(),m=v/i.stripCols,h=i.transitionsSpeed/i.stripCols/2;a.each(function(s){var e=t(this);e.css({right:m*s,left:"auto",width:0,opacity:0}),setTimeout(function(){e.animate({width:m,opacity:"1.0"},i.transitionsSpeed/2,function(){s==i.stripCols-1&&o()})},h*s)});break;case"top-curtain":d(1,i.stripRows,C);var a=t(".mdslider-tile",b),g=w/i.stripRows,h=i.transitionsSpeed/i.stripRows/2;a.each(function(s){var e=t(this);e.css({top:g*s,height:0,opacity:0}),setTimeout(function(){e.animate({height:g,opacity:"1.0"},i.transitionsSpeed/2,function(){s==i.stripRows-1&&o()})},h*s)});break;case"bottom-curtain":d(1,i.stripRows,C);var a=t(".mdslider-tile",b).reverse(),g=w/i.stripRows,h=i.transitionsSpeed/i.stripRows/2;a.each(function(s){var e=t(this);e.css({bottom:g*s,height:0,opacity:0}),setTimeout(function(){e.animate({height:g,opacity:"1.0"},i.transitionsSpeed/2,function(){s==i.stripRows-1&&o()})},h*s)});break;case"slide-in-right":var S=0;l();var a=t(".mdslider-strip",b);a.each(function(){T=t(this);var s=S*v;T.css({left:s}),T.animate({left:s-v},i.transitionsSpeed,function(){o()}),S++});break;case"slide-in-left":var S=0;l();var a=t(".mdslider-strip",b);a.each(function(){T=t(this);var s=-S*v;T.css({left:s}),T.animate({left:v+s},2*i.transitionsSpeed,function(){o()}),S++});break;case"slide-in-up":var S=0;l();var a=t(".mdslider-strip",b);a.each(function(){T=t(this);var s=S*w;T.css({top:s}),T.animate({top:s-w},i.transitionsSpeed,function(){o()}),S++});break;case"slide-in-down":var S=0;l();var a=t(".mdslider-strip",b);a.each(function(){T=t(this);var s=-S*w;T.css({top:s}),T.animate({top:w+s},i.transitionsSpeed,function(){o()}),S++});break;case"fade":default:var x={strips:1};p(!1,x);var T=t(".mdslider-strip:first",b);T.css({height:"100%",width:v}),"slide-in-right"==s?T.css({height:"100%",width:v,left:v+"px",right:""}):"slide-in-left"==s&&T.css({left:"-"+v+"px"}),T.animate({left:"0px",opacity:1},i.transitionsSpeed,function(){o()})}}function u(){b.removeClass("loading-image"),r()}var m={className:"md-slide-wrap",itemClassName:"md-slide-item",transitions:"strip-down-left",transitionsSpeed:800,width:990,height:420,responsive:!0,fullwidth:!0,styleBorder:0,styleShadow:0,posBullet:2,posThumb:1,stripCols:20,stripRows:10,slideShowDelay:6e3,slideShow:!0,loop:!1,pauseOnHover:!1,showLoading:!0,loadingPosition:"bottom",showArrow:!0,showBullet:!0,showThumb:!0,enableDrag:!0,touchSensitive:50,onEndTransition:function(){},onStartTransition:function(){}};i=t.extend({},m,i);var f,v,w,g,S,x,b=t(this),y=[],C=-1,T=0,R=!0,k=0,z=0,R=!1;s(),u()},t.fn.reverse=[].reverse}(jQuery);