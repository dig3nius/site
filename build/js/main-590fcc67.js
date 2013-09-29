/*!
 * jQuery Cookie Plugin v1.3
 * https://github.com/carhartl/jquery-cookie
 *
 * Copyright 2011, Klaus Hartl
 * Dual licensed under the MIT or GPL Version 2 licenses.
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.opensource.org/licenses/GPL-2.0
 */
!function(e,t,n){function i(e){return e}function r(e){return decodeURIComponent(e.replace(o," "))}var o=/\+/g,a=e.cookie=function(o,s,l){if(s!==n){if(l=e.extend({},a.defaults,l),null===s&&(l.expires=-1),"number"==typeof l.expires){var c=l.expires,u=l.expires=new Date;u.setDate(u.getDate()+c)}return s=a.json?JSON.stringify(s):String(s),t.cookie=[encodeURIComponent(o),"=",a.raw?s:encodeURIComponent(s),l.expires?"; expires="+l.expires.toUTCString():"",l.path?"; path="+l.path:"",l.domain?"; domain="+l.domain:"",l.secure?"; secure":""].join("")}for(var d=a.raw?i:r,h=t.cookie.split("; "),p=0,f=h.length;f>p;p++){var m=h[p].split("=");if(d(m.shift())===o){var g=d(m.join("="));return a.json?JSON.parse(g):g}}return null};a.defaults={},e.removeCookie=function(t,n){return null!==e.cookie(t)?(e.cookie(t,null,n),!0):!1}}(jQuery,document),function(e,t,n,i){var r=n("html"),o=n(e),a=n(t),s=n.fancybox=function(){s.open.apply(this,arguments)},l=navigator.userAgent.match(/msie/i),c=null,u=t.createTouch!==i,d=function(e){return e&&e.hasOwnProperty&&e instanceof n},h=function(e){return e&&"string"===n.type(e)},p=function(e){return h(e)&&0<e.indexOf("%")},f=function(e,t){var n=parseInt(e,10)||0;return t&&p(e)&&(n*=s.getViewport()[t]/100),Math.ceil(n)},m=function(e,t){return f(e,t)+"px"};n.extend(s,{version:"2.1.5",defaults:{padding:15,margin:20,width:800,height:600,minWidth:100,minHeight:100,maxWidth:9999,maxHeight:9999,pixelRatio:1,autoSize:!0,autoHeight:!1,autoWidth:!1,autoResize:!0,autoCenter:!u,fitToView:!0,aspectRatio:!1,topRatio:.5,leftRatio:.5,scrolling:"auto",wrapCSS:"",arrows:!0,closeBtn:!0,closeClick:!1,nextClick:!1,mouseWheel:!0,autoPlay:!1,playSpeed:3e3,preload:3,modal:!1,loop:!0,ajax:{dataType:"html",headers:{"X-fancyBox":!0}},iframe:{scrolling:"auto",preload:!0},swf:{wmode:"transparent",allowfullscreen:"true",allowscriptaccess:"always"},keys:{next:{13:"left",34:"up",39:"left",40:"up"},prev:{8:"right",33:"down",37:"right",38:"down"},close:[27],play:[32],toggle:[70]},direction:{next:"left",prev:"right"},scrollOutside:!0,index:0,type:null,href:null,content:null,title:null,tpl:{wrap:'<div class="fancybox-wrap" tabIndex="-1"><div class="fancybox-skin"><div class="fancybox-outer"><div class="fancybox-inner"></div></div></div></div>',image:'<img class="fancybox-image" src="{href}" alt="" />',iframe:'<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" frameborder="0" vspace="0" hspace="0" webkitAllowFullScreen mozallowfullscreen allowFullScreen'+(l?' allowtransparency="true"':"")+"></iframe>",error:'<p class="fancybox-error">The requested content cannot be loaded.<br/>Please try again later.</p>',closeBtn:'<a title="Close" class="fancybox-item fancybox-close" href="javascript:;"></a>',next:'<a title="Next" class="fancybox-nav fancybox-next" href="javascript:;"><span></span></a>',prev:'<a title="Previous" class="fancybox-nav fancybox-prev" href="javascript:;"><span></span></a>'},openEffect:"fade",openSpeed:250,openEasing:"swing",openOpacity:!0,openMethod:"zoomIn",closeEffect:"fade",closeSpeed:250,closeEasing:"swing",closeOpacity:!0,closeMethod:"zoomOut",nextEffect:"elastic",nextSpeed:250,nextEasing:"swing",nextMethod:"changeIn",prevEffect:"elastic",prevSpeed:250,prevEasing:"swing",prevMethod:"changeOut",helpers:{overlay:!0,title:!0},onCancel:n.noop,beforeLoad:n.noop,afterLoad:n.noop,beforeShow:n.noop,afterShow:n.noop,beforeChange:n.noop,beforeClose:n.noop,afterClose:n.noop},group:{},opts:{},previous:null,coming:null,current:null,isActive:!1,isOpen:!1,isOpened:!1,wrap:null,skin:null,outer:null,inner:null,player:{timer:null,isActive:!1},ajaxLoad:null,imgPreload:null,transitions:{},helpers:{},open:function(e,t){return e&&(n.isPlainObject(t)||(t={}),!1!==s.close(!0))?(n.isArray(e)||(e=d(e)?n(e).get():[e]),n.each(e,function(r,o){var a,l,c,u,p,f={};"object"===n.type(o)&&(o.nodeType&&(o=n(o)),d(o)?(f={href:o.data("fancybox-href")||o.attr("href"),title:o.data("fancybox-title")||o.attr("title"),isDom:!0,element:o},n.metadata&&n.extend(!0,f,o.metadata())):f=o),a=t.href||f.href||(h(o)?o:null),l=t.title!==i?t.title:f.title||"",u=(c=t.content||f.content)?"html":t.type||f.type,!u&&f.isDom&&(u=o.data("fancybox-type"),u||(u=(u=o.prop("class").match(/fancybox\.(\w+)/))?u[1]:null)),h(a)&&(u||(s.isImage(a)?u="image":s.isSWF(a)?u="swf":"#"===a.charAt(0)?u="inline":h(o)&&(u="html",c=o)),"ajax"===u&&(p=a.split(/\s+/,2),a=p.shift(),p=p.shift())),c||("inline"===u?a?c=n(h(a)?a.replace(/.*(?=#[^\s]+$)/,""):a):f.isDom&&(c=o):"html"===u?c=a:!u&&!a&&f.isDom&&(u="inline",c=o)),n.extend(f,{href:a,type:u,content:c,title:l,selector:p}),e[r]=f}),s.opts=n.extend(!0,{},s.defaults,t),t.keys!==i&&(s.opts.keys=t.keys?n.extend({},s.defaults.keys,t.keys):!1),s.group=e,s._start(s.opts.index)):void 0},cancel:function(){var e=s.coming;e&&!1!==s.trigger("onCancel")&&(s.hideLoading(),s.ajaxLoad&&s.ajaxLoad.abort(),s.ajaxLoad=null,s.imgPreload&&(s.imgPreload.onload=s.imgPreload.onerror=null),e.wrap&&e.wrap.stop(!0,!0).trigger("onReset").remove(),s.coming=null,s.current||s._afterZoomOut(e))},close:function(e){s.cancel(),!1!==s.trigger("beforeClose")&&(s.unbindEvents(),s.isActive&&(s.isOpen&&!0!==e?(s.isOpen=s.isOpened=!1,s.isClosing=!0,n(".fancybox-item, .fancybox-nav").remove(),s.wrap.stop(!0,!0).removeClass("fancybox-opened"),s.transitions[s.current.closeMethod]()):(n(".fancybox-wrap").stop(!0).trigger("onReset").remove(),s._afterZoomOut())))},play:function(e){var t=function(){clearTimeout(s.player.timer)},n=function(){t(),s.current&&s.player.isActive&&(s.player.timer=setTimeout(s.next,s.current.playSpeed))},i=function(){t(),a.unbind(".player"),s.player.isActive=!1,s.trigger("onPlayEnd")};!0===e||!s.player.isActive&&!1!==e?s.current&&(s.current.loop||s.current.index<s.group.length-1)&&(s.player.isActive=!0,a.bind({"onCancel.player beforeClose.player":i,"onUpdate.player":n,"beforeLoad.player":t}),n(),s.trigger("onPlayStart")):i()},next:function(e){var t=s.current;t&&(h(e)||(e=t.direction.next),s.jumpto(t.index+1,e,"next"))},prev:function(e){var t=s.current;t&&(h(e)||(e=t.direction.prev),s.jumpto(t.index-1,e,"prev"))},jumpto:function(e,t,n){var r=s.current;r&&(e=f(e),s.direction=t||r.direction[e>=r.index?"next":"prev"],s.router=n||"jumpto",r.loop&&(0>e&&(e=r.group.length+e%r.group.length),e%=r.group.length),r.group[e]!==i&&(s.cancel(),s._start(e)))},reposition:function(e,t){var i,r=s.current,o=r?r.wrap:null;o&&(i=s._getPosition(t),e&&"scroll"===e.type?(delete i.position,o.stop(!0,!0).animate(i,200)):(o.css(i),r.pos=n.extend({},r.dim,i)))},update:function(e){var t=e&&e.type,n=!t||"orientationchange"===t;n&&(clearTimeout(c),c=null),s.isOpen&&!c&&(c=setTimeout(function(){var i=s.current;i&&!s.isClosing&&(s.wrap.removeClass("fancybox-tmp"),(n||"load"===t||"resize"===t&&i.autoResize)&&s._setDimension(),"scroll"===t&&i.canShrink||s.reposition(e),s.trigger("onUpdate"),c=null)},n&&!u?0:300))},toggle:function(e){s.isOpen&&(s.current.fitToView="boolean"===n.type(e)?e:!s.current.fitToView,u&&(s.wrap.removeAttr("style").addClass("fancybox-tmp"),s.trigger("onUpdate")),s.update())},hideLoading:function(){a.unbind(".loading"),n("#fancybox-loading").remove()},showLoading:function(){var e,t;s.hideLoading(),e=n('<div id="fancybox-loading"><div></div></div>').click(s.cancel).appendTo("body"),a.bind("keydown.loading",function(e){27===(e.which||e.keyCode)&&(e.preventDefault(),s.cancel())}),s.defaults.fixed||(t=s.getViewport(),e.css({position:"absolute",top:.5*t.h+t.y,left:.5*t.w+t.x}))},getViewport:function(){var t=s.current&&s.current.locked||!1,n={x:o.scrollLeft(),y:o.scrollTop()};return t?(n.w=t[0].clientWidth,n.h=t[0].clientHeight):(n.w=u&&e.innerWidth?e.innerWidth:o.width(),n.h=u&&e.innerHeight?e.innerHeight:o.height()),n},unbindEvents:function(){s.wrap&&d(s.wrap)&&s.wrap.unbind(".fb"),a.unbind(".fb"),o.unbind(".fb")},bindEvents:function(){var e,t=s.current;t&&(o.bind("orientationchange.fb"+(u?"":" resize.fb")+(t.autoCenter&&!t.locked?" scroll.fb":""),s.update),(e=t.keys)&&a.bind("keydown.fb",function(r){var o=r.which||r.keyCode,a=r.target||r.srcElement;return 27===o&&s.coming?!1:(!(r.ctrlKey||r.altKey||r.shiftKey||r.metaKey||a&&(a.type||n(a).is("[contenteditable]"))||!n.each(e,function(e,a){return 1<t.group.length&&a[o]!==i?(s[e](a[o]),r.preventDefault(),!1):-1<n.inArray(o,a)?(s[e](),r.preventDefault(),!1):void 0})),void 0)}),n.fn.mousewheel&&t.mouseWheel&&s.wrap.bind("mousewheel.fb",function(e,i,r,o){for(var a=n(e.target||null),l=!1;a.length&&!l&&!a.is(".fancybox-skin")&&!a.is(".fancybox-wrap");)l=a[0]&&!(a[0].style.overflow&&"hidden"===a[0].style.overflow)&&(a[0].clientWidth&&a[0].scrollWidth>a[0].clientWidth||a[0].clientHeight&&a[0].scrollHeight>a[0].clientHeight),a=n(a).parent();0!==i&&!l&&1<s.group.length&&!t.canShrink&&(o>0||r>0?s.prev(o>0?"down":"left"):(0>o||0>r)&&s.next(0>o?"up":"right"),e.preventDefault())}))},trigger:function(e,t){var i,r=t||s.coming||s.current;if(r){if(n.isFunction(r[e])&&(i=r[e].apply(r,Array.prototype.slice.call(arguments,1))),!1===i)return!1;r.helpers&&n.each(r.helpers,function(t,i){i&&s.helpers[t]&&n.isFunction(s.helpers[t][e])&&s.helpers[t][e](n.extend(!0,{},s.helpers[t].defaults,i),r)}),a.trigger(e)}},isImage:function(e){return h(e)&&e.match(/(^data:image\/.*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg)((\?|#).*)?$)/i)},isSWF:function(e){return h(e)&&e.match(/\.(swf)((\?|#).*)?$/i)},_start:function(e){var t,i,r={};if(e=f(e),t=s.group[e]||null,!t)return!1;if(r=n.extend(!0,{},s.opts,t),t=r.margin,i=r.padding,"number"===n.type(t)&&(r.margin=[t,t,t,t]),"number"===n.type(i)&&(r.padding=[i,i,i,i]),r.modal&&n.extend(!0,r,{closeBtn:!1,closeClick:!1,nextClick:!1,arrows:!1,mouseWheel:!1,keys:null,helpers:{overlay:{closeClick:!1}}}),r.autoSize&&(r.autoWidth=r.autoHeight=!0),"auto"===r.width&&(r.autoWidth=!0),"auto"===r.height&&(r.autoHeight=!0),r.group=s.group,r.index=e,s.coming=r,!1===s.trigger("beforeLoad"))s.coming=null;else{if(i=r.type,t=r.href,!i)return s.coming=null,s.current&&s.router&&"jumpto"!==s.router?(s.current.index=e,s[s.router](s.direction)):!1;if(s.isActive=!0,("image"===i||"swf"===i)&&(r.autoHeight=r.autoWidth=!1,r.scrolling="visible"),"image"===i&&(r.aspectRatio=!0),"iframe"===i&&u&&(r.scrolling="scroll"),r.wrap=n(r.tpl.wrap).addClass("fancybox-"+(u?"mobile":"desktop")+" fancybox-type-"+i+" fancybox-tmp "+r.wrapCSS).appendTo(r.parent||"body"),n.extend(r,{skin:n(".fancybox-skin",r.wrap),outer:n(".fancybox-outer",r.wrap),inner:n(".fancybox-inner",r.wrap)}),n.each(["Top","Right","Bottom","Left"],function(e,t){r.skin.css("padding"+t,m(r.padding[e]))}),s.trigger("onReady"),"inline"===i||"html"===i){if(!r.content||!r.content.length)return s._error("content")}else if(!t)return s._error("href");"image"===i?s._loadImage():"ajax"===i?s._loadAjax():"iframe"===i?s._loadIframe():s._afterLoad()}},_error:function(e){n.extend(s.coming,{type:"html",autoWidth:!0,autoHeight:!0,minWidth:0,minHeight:0,scrolling:"no",hasError:e,content:s.coming.tpl.error}),s._afterLoad()},_loadImage:function(){var e=s.imgPreload=new Image;e.onload=function(){this.onload=this.onerror=null,s.coming.width=this.width/s.opts.pixelRatio,s.coming.height=this.height/s.opts.pixelRatio,s._afterLoad()},e.onerror=function(){this.onload=this.onerror=null,s._error("image")},e.src=s.coming.href,!0!==e.complete&&s.showLoading()},_loadAjax:function(){var e=s.coming;s.showLoading(),s.ajaxLoad=n.ajax(n.extend({},e.ajax,{url:e.href,error:function(e,t){s.coming&&"abort"!==t?s._error("ajax",e):s.hideLoading()},success:function(t,n){"success"===n&&(e.content=t,s._afterLoad())}}))},_loadIframe:function(){var e=s.coming,t=n(e.tpl.iframe.replace(/\{rnd\}/g,(new Date).getTime())).attr("scrolling",u?"auto":e.iframe.scrolling).attr("src",e.href);n(e.wrap).bind("onReset",function(){try{n(this).find("iframe").hide().attr("src","//about:blank").end().empty()}catch(e){}}),e.iframe.preload&&(s.showLoading(),t.one("load",function(){n(this).data("ready",1),u||n(this).bind("load.fb",s.update),n(this).parents(".fancybox-wrap").width("100%").removeClass("fancybox-tmp").show(),s._afterLoad()})),e.content=t.appendTo(e.inner),e.iframe.preload||s._afterLoad()},_preloadImages:function(){var e,t,n=s.group,i=s.current,r=n.length,o=i.preload?Math.min(i.preload,r-1):0;for(t=1;o>=t;t+=1)e=n[(i.index+t)%r],"image"===e.type&&e.href&&((new Image).src=e.href)},_afterLoad:function(){var e,t,i,r,o,a=s.coming,l=s.current;if(s.hideLoading(),a&&!1!==s.isActive)if(!1===s.trigger("afterLoad",a,l))a.wrap.stop(!0).trigger("onReset").remove(),s.coming=null;else{switch(l&&(s.trigger("beforeChange",l),l.wrap.stop(!0).removeClass("fancybox-opened").find(".fancybox-item, .fancybox-nav").remove()),s.unbindEvents(),e=a.content,t=a.type,i=a.scrolling,n.extend(s,{wrap:a.wrap,skin:a.skin,outer:a.outer,inner:a.inner,current:a,previous:l}),r=a.href,t){case"inline":case"ajax":case"html":a.selector?e=n("<div>").html(e).find(a.selector):d(e)&&(e.data("fancybox-placeholder")||e.data("fancybox-placeholder",n('<div class="fancybox-placeholder"></div>').insertAfter(e).hide()),e=e.show().detach(),a.wrap.bind("onReset",function(){n(this).find(e).length&&e.hide().replaceAll(e.data("fancybox-placeholder")).data("fancybox-placeholder",!1)}));break;case"image":e=a.tpl.image.replace("{href}",r);break;case"swf":e='<object id="fancybox-swf" classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="100%" height="100%"><param name="movie" value="'+r+'"></param>',o="",n.each(a.swf,function(t,n){e+='<param name="'+t+'" value="'+n+'"></param>',o+=" "+t+'="'+n+'"'}),e+='<embed src="'+r+'" type="application/x-shockwave-flash" width="100%" height="100%"'+o+"></embed></object>"}(!d(e)||!e.parent().is(a.inner))&&a.inner.append(e),s.trigger("beforeShow"),a.inner.css("overflow","yes"===i?"scroll":"no"===i?"hidden":i),s._setDimension(),s.reposition(),s.isOpen=!1,s.coming=null,s.bindEvents(),s.isOpened?l.prevMethod&&s.transitions[l.prevMethod]():n(".fancybox-wrap").not(a.wrap).stop(!0).trigger("onReset").remove(),s.transitions[s.isOpened?a.nextMethod:a.openMethod](),s._preloadImages()}},_setDimension:function(){var e,t,i,r,o,a,l,c,u,d=s.getViewport(),h=0,g=!1,y=!1,g=s.wrap,v=s.skin,b=s.inner,w=s.current,y=w.width,x=w.height,k=w.minWidth,C=w.minHeight,F=w.maxWidth,T=w.maxHeight,Z=w.scrolling,W=w.scrollOutside?w.scrollbarWidth:0,O=w.margin,j=f(O[1]+O[3]),N=f(O[0]+O[2]);if(g.add(v).add(b).width("auto").height("auto").removeClass("fancybox-tmp"),O=f(v.outerWidth(!0)-v.width()),e=f(v.outerHeight(!0)-v.height()),t=j+O,i=N+e,r=p(y)?(d.w-t)*f(y)/100:y,o=p(x)?(d.h-i)*f(x)/100:x,"iframe"===w.type){if(u=w.content,w.autoHeight&&1===u.data("ready"))try{u[0].contentWindow.document.location&&(b.width(r).height(9999),a=u.contents().find("body"),W&&a.css("overflow-x","hidden"),o=a.outerHeight(!0))}catch(R){}}else(w.autoWidth||w.autoHeight)&&(b.addClass("fancybox-tmp"),w.autoWidth||b.width(r),w.autoHeight||b.height(o),w.autoWidth&&(r=b.width()),w.autoHeight&&(o=b.height()),b.removeClass("fancybox-tmp"));if(y=f(r),x=f(o),c=r/o,k=f(p(k)?f(k,"w")-t:k),F=f(p(F)?f(F,"w")-t:F),C=f(p(C)?f(C,"h")-i:C),T=f(p(T)?f(T,"h")-i:T),a=F,l=T,w.fitToView&&(F=Math.min(d.w-t,F),T=Math.min(d.h-i,T)),t=d.w-j,N=d.h-N,w.aspectRatio?(y>F&&(y=F,x=f(y/c)),x>T&&(x=T,y=f(x*c)),k>y&&(y=k,x=f(y/c)),C>x&&(x=C,y=f(x*c))):(y=Math.max(k,Math.min(y,F)),w.autoHeight&&"iframe"!==w.type&&(b.width(y),x=b.height()),x=Math.max(C,Math.min(x,T))),w.fitToView)if(b.width(y).height(x),g.width(y+O),d=g.width(),j=g.height(),w.aspectRatio)for(;(d>t||j>N)&&y>k&&x>C&&!(19<h++);)x=Math.max(C,Math.min(T,x-10)),y=f(x*c),k>y&&(y=k,x=f(y/c)),y>F&&(y=F,x=f(y/c)),b.width(y).height(x),g.width(y+O),d=g.width(),j=g.height();else y=Math.max(k,Math.min(y,y-(d-t))),x=Math.max(C,Math.min(x,x-(j-N)));W&&"auto"===Z&&o>x&&t>y+O+W&&(y+=W),b.width(y).height(x),g.width(y+O),d=g.width(),j=g.height(),g=(d>t||j>N)&&y>k&&x>C,y=w.aspectRatio?a>y&&l>x&&r>y&&o>x:(a>y||l>x)&&(r>y||o>x),n.extend(w,{dim:{width:m(d),height:m(j)},origWidth:r,origHeight:o,canShrink:g,canExpand:y,wPadding:O,hPadding:e,wrapSpace:j-v.outerHeight(!0),skinSpace:v.height()-x}),!u&&w.autoHeight&&x>C&&T>x&&!y&&b.height("auto")},_getPosition:function(e){var t=s.current,n=s.getViewport(),i=t.margin,r=s.wrap.width()+i[1]+i[3],o=s.wrap.height()+i[0]+i[2],i={position:"absolute",top:i[0],left:i[3]};return t.autoCenter&&t.fixed&&!e&&o<=n.h&&r<=n.w?i.position="fixed":t.locked||(i.top+=n.y,i.left+=n.x),i.top=m(Math.max(i.top,i.top+(n.h-o)*t.topRatio)),i.left=m(Math.max(i.left,i.left+(n.w-r)*t.leftRatio)),i},_afterZoomIn:function(){var e=s.current;e&&(s.isOpen=s.isOpened=!0,s.wrap.css("overflow","visible").addClass("fancybox-opened"),s.update(),(e.closeClick||e.nextClick&&1<s.group.length)&&s.inner.css("cursor","pointer").bind("click.fb",function(t){!n(t.target).is("a")&&!n(t.target).parent().is("a")&&(t.preventDefault(),s[e.closeClick?"close":"next"]())}),e.closeBtn&&n(e.tpl.closeBtn).appendTo(s.skin).bind("click.fb",function(e){e.preventDefault(),s.close()}),e.arrows&&1<s.group.length&&((e.loop||0<e.index)&&n(e.tpl.prev).appendTo(s.outer).bind("click.fb",s.prev),(e.loop||e.index<s.group.length-1)&&n(e.tpl.next).appendTo(s.outer).bind("click.fb",s.next)),s.trigger("afterShow"),e.loop||e.index!==e.group.length-1?s.opts.autoPlay&&!s.player.isActive&&(s.opts.autoPlay=!1,s.play()):s.play(!1))},_afterZoomOut:function(e){e=e||s.current,n(".fancybox-wrap").trigger("onReset").remove(),n.extend(s,{group:{},opts:{},router:!1,current:null,isActive:!1,isOpened:!1,isOpen:!1,isClosing:!1,wrap:null,skin:null,outer:null,inner:null}),s.trigger("afterClose",e)}}),s.transitions={getOrigPosition:function(){var e=s.current,t=e.element,n=e.orig,i={},r=50,o=50,a=e.hPadding,l=e.wPadding,c=s.getViewport();return!n&&e.isDom&&t.is(":visible")&&(n=t.find("img:first"),n.length||(n=t)),d(n)?(i=n.offset(),n.is("img")&&(r=n.outerWidth(),o=n.outerHeight())):(i.top=c.y+(c.h-o)*e.topRatio,i.left=c.x+(c.w-r)*e.leftRatio),("fixed"===s.wrap.css("position")||e.locked)&&(i.top-=c.y,i.left-=c.x),i={top:m(i.top-a*e.topRatio),left:m(i.left-l*e.leftRatio),width:m(r+l),height:m(o+a)}},step:function(e,t){var n,i,r=t.prop;i=s.current;var o=i.wrapSpace,a=i.skinSpace;("width"===r||"height"===r)&&(n=t.end===t.start?1:(e-t.start)/(t.end-t.start),s.isClosing&&(n=1-n),i="width"===r?i.wPadding:i.hPadding,i=e-i,s.skin[r](f("width"===r?i:i-o*n)),s.inner[r](f("width"===r?i:i-o*n-a*n)))},zoomIn:function(){var e=s.current,t=e.pos,i=e.openEffect,r="elastic"===i,o=n.extend({opacity:1},t);delete o.position,r?(t=this.getOrigPosition(),e.openOpacity&&(t.opacity=.1)):"fade"===i&&(t.opacity=.1),s.wrap.css(t).animate(o,{duration:"none"===i?0:e.openSpeed,easing:e.openEasing,step:r?this.step:null,complete:s._afterZoomIn})},zoomOut:function(){var e=s.current,t=e.closeEffect,n="elastic"===t,i={opacity:.1};n&&(i=this.getOrigPosition(),e.closeOpacity&&(i.opacity=.1)),s.wrap.animate(i,{duration:"none"===t?0:e.closeSpeed,easing:e.closeEasing,step:n?this.step:null,complete:s._afterZoomOut})},changeIn:function(){var e,t=s.current,n=t.nextEffect,i=t.pos,r={opacity:1},o=s.direction;i.opacity=.1,"elastic"===n&&(e="down"===o||"up"===o?"top":"left","down"===o||"right"===o?(i[e]=m(f(i[e])-200),r[e]="+=200px"):(i[e]=m(f(i[e])+200),r[e]="-=200px")),"none"===n?s._afterZoomIn():s.wrap.css(i).animate(r,{duration:t.nextSpeed,easing:t.nextEasing,complete:s._afterZoomIn})},changeOut:function(){var e=s.previous,t=e.prevEffect,i={opacity:.1},r=s.direction;"elastic"===t&&(i["down"===r||"up"===r?"top":"left"]=("up"===r||"left"===r?"-":"+")+"=200px"),e.wrap.animate(i,{duration:"none"===t?0:e.prevSpeed,easing:e.prevEasing,complete:function(){n(this).trigger("onReset").remove()}})}},s.helpers.overlay={defaults:{closeClick:!0,speedOut:200,showEarly:!0,css:{},locked:!u,fixed:!0},overlay:null,fixed:!1,el:n("html"),create:function(e){e=n.extend({},this.defaults,e),this.overlay&&this.close(),this.overlay=n('<div class="fancybox-overlay"></div>').appendTo(s.coming?s.coming.parent:e.parent),this.fixed=!1,e.fixed&&s.defaults.fixed&&(this.overlay.addClass("fancybox-overlay-fixed"),this.fixed=!0)},open:function(e){var t=this;e=n.extend({},this.defaults,e),this.overlay?this.overlay.unbind(".overlay").width("auto").height("auto"):this.create(e),this.fixed||(o.bind("resize.overlay",n.proxy(this.update,this)),this.update()),e.closeClick&&this.overlay.bind("click.overlay",function(e){return n(e.target).hasClass("fancybox-overlay")?(s.isActive?s.close():t.close(),!1):void 0}),this.overlay.css(e.css).show()},close:function(){var e,t;o.unbind("resize.overlay"),this.el.hasClass("fancybox-lock")&&(n(".fancybox-margin").removeClass("fancybox-margin"),e=o.scrollTop(),t=o.scrollLeft(),this.el.removeClass("fancybox-lock"),o.scrollTop(e).scrollLeft(t)),n(".fancybox-overlay").remove().hide(),n.extend(this,{overlay:null,fixed:!1})},update:function(){var e,n="100%";this.overlay.width(n).height("100%"),l?(e=Math.max(t.documentElement.offsetWidth,t.body.offsetWidth),a.width()>e&&(n=a.width())):a.width()>o.width()&&(n=a.width()),this.overlay.width(n).height(a.height())},onReady:function(e,t){var i=this.overlay;n(".fancybox-overlay").stop(!0,!0),i||this.create(e),e.locked&&this.fixed&&t.fixed&&(i||(this.margin=a.height()>o.height()?n("html").css("margin-right").replace("px",""):!1),t.locked=this.overlay.append(t.wrap),t.fixed=!1),!0===e.showEarly&&this.beforeShow.apply(this,arguments)},beforeShow:function(e,t){var i,r;t.locked&&(!1!==this.margin&&(n("*").filter(function(){return"fixed"===n(this).css("position")&&!n(this).hasClass("fancybox-overlay")&&!n(this).hasClass("fancybox-wrap")}).addClass("fancybox-margin"),this.el.addClass("fancybox-margin")),i=o.scrollTop(),r=o.scrollLeft(),this.el.addClass("fancybox-lock"),o.scrollTop(i).scrollLeft(r)),this.open(e)},onUpdate:function(){this.fixed||this.update()},afterClose:function(e){this.overlay&&!s.coming&&this.overlay.fadeOut(e.speedOut,n.proxy(this.close,this))}},s.helpers.title={defaults:{type:"float",position:"bottom"},beforeShow:function(e){var t=s.current,i=t.title,r=e.type;if(n.isFunction(i)&&(i=i.call(t.element,t)),h(i)&&""!==n.trim(i)){switch(t=n('<div class="fancybox-title fancybox-title-'+r+'-wrap">'+i+"</div>"),r){case"inside":r=s.skin;break;case"outside":r=s.wrap;break;case"over":r=s.inner;break;default:r=s.skin,t.appendTo("body"),l&&t.width(t.width()),t.wrapInner('<span class="child"></span>'),s.current.margin[2]+=Math.abs(f(t.css("margin-bottom")))}t["top"===e.position?"prependTo":"appendTo"](r)}}},n.fn.fancybox=function(e){var t,i=n(this),r=this.selector||"",o=function(o){var a,l,c=n(this).blur(),u=t;!(o.ctrlKey||o.altKey||o.shiftKey||o.metaKey||c.is(".fancybox-wrap")||(a=e.groupAttr||"data-fancybox-group",l=c.attr(a),l||(a="rel",l=c.get(0)[a]),l&&""!==l&&"nofollow"!==l&&(c=r.length?n(r):i,c=c.filter("["+a+'="'+l+'"]'),u=c.index(this)),e.index=u,!1===s.open(c,e)||!o.preventDefault()))};return e=e||{},t=e.index||0,r&&!1!==e.live?a.undelegate(r,"click.fb-start").delegate(r+":not('.fancybox-item, .fancybox-nav')","click.fb-start",o):i.unbind("click.fb-start").bind("click.fb-start",o),this.filter("[data-fancybox-start=1]").trigger("click"),this},a.ready(function(){var t,o;if(n.scrollbarWidth===i&&(n.scrollbarWidth=function(){var e=n('<div style="width:50px;height:50px;overflow:auto"><div/></div>').appendTo("body"),t=e.children(),t=t.innerWidth()-t.height(99).innerWidth();return e.remove(),t}),n.support.fixedPosition===i){t=n.support,o=n('<div style="position:fixed;top:20px;"></div>').appendTo("body");var a=20===o[0].offsetTop||15===o[0].offsetTop;o.remove(),t.fixedPosition=a}n.extend(s.defaults,{scrollbarWidth:n.scrollbarWidth(),fixed:n.support.fixedPosition,parent:n("body")}),t=n(e).width(),r.addClass("fancybox-lock-test"),o=n(e).width(),r.removeClass("fancybox-lock-test"),n("<style type='text/css'>.fancybox-margin{margin-right:"+(o-t)+"px;}</style>").appendTo("head")})}(window,document,jQuery),function(e){function t(e){if(e in d.style)return e;var t=["Moz","Webkit","O","ms"],n=e.charAt(0).toUpperCase()+e.substr(1);if(e in d.style)return e;for(var i=0;i<t.length;++i){var r=t[i]+n;if(r in d.style)return r}}function n(){return d.style[h.transform]="",d.style[h.transform]="rotateY(90deg)",""!==d.style[h.transform]}function i(e){return"string"==typeof e&&this.parse(e),this}function r(e,t,n){t===!0?e.queue(n):t?e.queue(t,n):n()}function o(t){var n=[];return e.each(t,function(t){t=e.camelCase(t),t=e.transit.propertyMap[t]||e.cssProps[t]||t,t=l(t),-1===e.inArray(t,n)&&n.push(t)}),n}function a(t,n,i,r){var a=o(t);e.cssEase[i]&&(i=e.cssEase[i]);var s=""+u(n)+" "+i;parseInt(r,10)>0&&(s+=" "+u(r));var l=[];return e.each(a,function(e,t){l.push(t+" "+s)}),l.join(", ")}function s(t,n){n||(e.cssNumber[t]=!0),e.transit.propertyMap[t]=h.transform,e.cssHooks[t]={get:function(n){var i=e(n).css("transit:transform");return i.get(t)},set:function(n,i){var r=e(n).css("transit:transform");r.setFromString(t,i),e(n).css({"transit:transform":r})}}}function l(e){return e.replace(/([A-Z])/g,function(e){return"-"+e.toLowerCase()})}function c(e,t){return"string"!=typeof e||e.match(/^[\-0-9\.]+$/)?""+e+t:e}function u(t){var n=t;return e.fx.speeds[n]&&(n=e.fx.speeds[n]),c(n,"ms")}e.transit={version:"0.9.9",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:!0,useTransitionEnd:!1};var d=document.createElement("div"),h={},p=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;h.transition=t("transition"),h.transitionDelay=t("transitionDelay"),h.transform=t("transform"),h.transformOrigin=t("transformOrigin"),h.transform3d=n();var f={transition:"transitionEnd",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"},m=h.transitionEnd=f[h.transition]||null;for(var g in h)h.hasOwnProperty(g)&&"undefined"==typeof e.support[g]&&(e.support[g]=h[g]);d=null,e.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"},e.cssHooks["transit:transform"]={get:function(t){return e(t).data("transform")||new i},set:function(t,n){var r=n;r instanceof i||(r=new i(r)),t.style[h.transform]="WebkitTransform"!==h.transform||p?r.toString():r.toString(!0),e(t).data("transform",r)}},e.cssHooks.transform={set:e.cssHooks["transit:transform"].set},e.fn.jquery<"1.8"&&(e.cssHooks.transformOrigin={get:function(e){return e.style[h.transformOrigin]},set:function(e,t){e.style[h.transformOrigin]=t}},e.cssHooks.transition={get:function(e){return e.style[h.transition]},set:function(e,t){e.style[h.transition]=t}}),s("scale"),s("translate"),s("rotate"),s("rotateX"),s("rotateY"),s("rotate3d"),s("perspective"),s("skewX"),s("skewY"),s("x",!0),s("y",!0),i.prototype={setFromString:function(e,t){var n="string"==typeof t?t.split(","):t.constructor===Array?t:[t];n.unshift(e),i.prototype.set.apply(this,n)},set:function(e){var t=Array.prototype.slice.apply(arguments,[1]);this.setter[e]?this.setter[e].apply(this,t):this[e]=t.join(",")},get:function(e){return this.getter[e]?this.getter[e].apply(this):this[e]||0},setter:{rotate:function(e){this.rotate=c(e,"deg")},rotateX:function(e){this.rotateX=c(e,"deg")},rotateY:function(e){this.rotateY=c(e,"deg")},scale:function(e,t){void 0===t&&(t=e),this.scale=e+","+t},skewX:function(e){this.skewX=c(e,"deg")},skewY:function(e){this.skewY=c(e,"deg")},perspective:function(e){this.perspective=c(e,"px")},x:function(e){this.set("translate",e,null)},y:function(e){this.set("translate",null,e)},translate:function(e,t){void 0===this._translateX&&(this._translateX=0),void 0===this._translateY&&(this._translateY=0),null!==e&&void 0!==e&&(this._translateX=c(e,"px")),null!==t&&void 0!==t&&(this._translateY=c(t,"px")),this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var e=(this.scale||"1,1").split(",");return e[0]&&(e[0]=parseFloat(e[0])),e[1]&&(e[1]=parseFloat(e[1])),e[0]===e[1]?e[0]:e},rotate3d:function(){for(var e=(this.rotate3d||"0,0,0,0deg").split(","),t=0;3>=t;++t)e[t]&&(e[t]=parseFloat(e[t]));return e[3]&&(e[3]=c(e[3],"deg")),e}},parse:function(e){var t=this;e.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(e,n,i){t.setFromString(n,i)})},toString:function(e){var t=[];for(var n in this)if(this.hasOwnProperty(n)){if(!h.transform3d&&("rotateX"===n||"rotateY"===n||"perspective"===n||"transformOrigin"===n))continue;"_"!==n[0]&&(e&&"scale"===n?t.push(n+"3d("+this[n]+",1)"):e&&"translate"===n?t.push(n+"3d("+this[n]+",0)"):t.push(n+"("+this[n]+")"))}return t.join(" ")}},e.fn.transition=e.fn.transit=function(t,n,i,o){var s=this,l=0,c=!0;"function"==typeof n&&(o=n,n=void 0),"function"==typeof i&&(o=i,i=void 0),"undefined"!=typeof t.easing&&(i=t.easing,delete t.easing),"undefined"!=typeof t.duration&&(n=t.duration,delete t.duration),"undefined"!=typeof t.complete&&(o=t.complete,delete t.complete),"undefined"!=typeof t.queue&&(c=t.queue,delete t.queue),"undefined"!=typeof t.delay&&(l=t.delay,delete t.delay),"undefined"==typeof n&&(n=e.fx.speeds._default),"undefined"==typeof i&&(i=e.cssEase._default),n=u(n);var d=a(t,n,i,l),p=e.transit.enabled&&h.transition,f=p?parseInt(n,10)+parseInt(l,10):0;if(0===f){var g=function(e){s.css(t),o&&o.apply(s),e&&e()};return r(s,c,g),s}var y={},v=function(n){var i=!1,r=function(){i&&s.unbind(m,r),f>0&&s.each(function(){this.style[h.transition]=y[this]||null}),"function"==typeof o&&o.apply(s),"function"==typeof n&&n()};f>0&&m&&e.transit.useTransitionEnd?(i=!0,s.bind(m,r)):window.setTimeout(r,f),s.each(function(){f>0&&(this.style[h.transition]=d),e(this).css(t)})},b=function(e){this.offsetWidth,v(e)};return r(s,c,b),this},e.transit.getTransitionValue=a}(jQuery),function(e){function t(e,t){var n=(65535&e)+(65535&t),i=(e>>16)+(t>>16)+(n>>16);return i<<16|65535&n}function n(e,t){return e<<t|e>>>32-t}function i(e,i,r,o,a,s){return t(n(t(t(i,e),t(o,s)),a),r)}function r(e,t,n,r,o,a,s){return i(t&n|~t&r,e,t,o,a,s)}function o(e,t,n,r,o,a,s){return i(t&r|n&~r,e,t,o,a,s)}function a(e,t,n,r,o,a,s){return i(t^n^r,e,t,o,a,s)}function s(e,t,n,r,o,a,s){return i(n^(t|~r),e,t,o,a,s)}function l(e,n){e[n>>5]|=128<<n%32,e[(n+64>>>9<<4)+14]=n;var i,l,c,u,d,h=1732584193,p=-271733879,f=-1732584194,m=271733878;for(i=0;i<e.length;i+=16)l=h,c=p,u=f,d=m,h=r(h,p,f,m,e[i],7,-680876936),m=r(m,h,p,f,e[i+1],12,-389564586),f=r(f,m,h,p,e[i+2],17,606105819),p=r(p,f,m,h,e[i+3],22,-1044525330),h=r(h,p,f,m,e[i+4],7,-176418897),m=r(m,h,p,f,e[i+5],12,1200080426),f=r(f,m,h,p,e[i+6],17,-1473231341),p=r(p,f,m,h,e[i+7],22,-45705983),h=r(h,p,f,m,e[i+8],7,1770035416),m=r(m,h,p,f,e[i+9],12,-1958414417),f=r(f,m,h,p,e[i+10],17,-42063),p=r(p,f,m,h,e[i+11],22,-1990404162),h=r(h,p,f,m,e[i+12],7,1804603682),m=r(m,h,p,f,e[i+13],12,-40341101),f=r(f,m,h,p,e[i+14],17,-1502002290),p=r(p,f,m,h,e[i+15],22,1236535329),h=o(h,p,f,m,e[i+1],5,-165796510),m=o(m,h,p,f,e[i+6],9,-1069501632),f=o(f,m,h,p,e[i+11],14,643717713),p=o(p,f,m,h,e[i],20,-373897302),h=o(h,p,f,m,e[i+5],5,-701558691),m=o(m,h,p,f,e[i+10],9,38016083),f=o(f,m,h,p,e[i+15],14,-660478335),p=o(p,f,m,h,e[i+4],20,-405537848),h=o(h,p,f,m,e[i+9],5,568446438),m=o(m,h,p,f,e[i+14],9,-1019803690),f=o(f,m,h,p,e[i+3],14,-187363961),p=o(p,f,m,h,e[i+8],20,1163531501),h=o(h,p,f,m,e[i+13],5,-1444681467),m=o(m,h,p,f,e[i+2],9,-51403784),f=o(f,m,h,p,e[i+7],14,1735328473),p=o(p,f,m,h,e[i+12],20,-1926607734),h=a(h,p,f,m,e[i+5],4,-378558),m=a(m,h,p,f,e[i+8],11,-2022574463),f=a(f,m,h,p,e[i+11],16,1839030562),p=a(p,f,m,h,e[i+14],23,-35309556),h=a(h,p,f,m,e[i+1],4,-1530992060),m=a(m,h,p,f,e[i+4],11,1272893353),f=a(f,m,h,p,e[i+7],16,-155497632),p=a(p,f,m,h,e[i+10],23,-1094730640),h=a(h,p,f,m,e[i+13],4,681279174),m=a(m,h,p,f,e[i],11,-358537222),f=a(f,m,h,p,e[i+3],16,-722521979),p=a(p,f,m,h,e[i+6],23,76029189),h=a(h,p,f,m,e[i+9],4,-640364487),m=a(m,h,p,f,e[i+12],11,-421815835),f=a(f,m,h,p,e[i+15],16,530742520),p=a(p,f,m,h,e[i+2],23,-995338651),h=s(h,p,f,m,e[i],6,-198630844),m=s(m,h,p,f,e[i+7],10,1126891415),f=s(f,m,h,p,e[i+14],15,-1416354905),p=s(p,f,m,h,e[i+5],21,-57434055),h=s(h,p,f,m,e[i+12],6,1700485571),m=s(m,h,p,f,e[i+3],10,-1894986606),f=s(f,m,h,p,e[i+10],15,-1051523),p=s(p,f,m,h,e[i+1],21,-2054922799),h=s(h,p,f,m,e[i+8],6,1873313359),m=s(m,h,p,f,e[i+15],10,-30611744),f=s(f,m,h,p,e[i+6],15,-1560198380),p=s(p,f,m,h,e[i+13],21,1309151649),h=s(h,p,f,m,e[i+4],6,-145523070),m=s(m,h,p,f,e[i+11],10,-1120210379),f=s(f,m,h,p,e[i+2],15,718787259),p=s(p,f,m,h,e[i+9],21,-343485551),h=t(h,l),p=t(p,c),f=t(f,u),m=t(m,d);
return[h,p,f,m]}function c(e){var t,n="";for(t=0;t<32*e.length;t+=8)n+=String.fromCharCode(255&e[t>>5]>>>t%32);return n}function u(e){var t,n=[];for(n[(e.length>>2)-1]=void 0,t=0;t<n.length;t+=1)n[t]=0;for(t=0;t<8*e.length;t+=8)n[t>>5]|=(255&e.charCodeAt(t/8))<<t%32;return n}function d(e){return c(l(u(e),8*e.length))}function h(e,t){var n,i,r=u(e),o=[],a=[];for(o[15]=a[15]=void 0,r.length>16&&(r=l(r,8*e.length)),n=0;16>n;n+=1)o[n]=909522486^r[n],a[n]=1549556828^r[n];return i=l(o.concat(u(t)),512+8*t.length),c(l(a.concat(i),640))}function p(e){var t,n,i="0123456789abcdef",r="";for(n=0;n<e.length;n+=1)t=e.charCodeAt(n),r+=i.charAt(15&t>>>4)+i.charAt(15&t);return r}function f(e){return unescape(encodeURIComponent(e))}function m(e){return d(f(e))}function g(e){return p(m(e))}function y(e,t){return h(f(e),f(t))}function v(e,t){return p(y(e,t))}function b(e,t,n){return t?n?y(t,e):v(t,e):n?m(e):g(e)}"function"==typeof define&&define.amd?define(function(){return b}):e.md5=b}(this),window.console&&console.log||function(){for(var e=function(){},t=["assert","clear","count","debug","dir","dirxml","error","exception","group","groupCollapsed","groupEnd","info","log","markTimeline","profile","profileEnd","markTimeline","table","time","timeEnd","timeStamp","trace","warn"],n=t.length,i=window.console={};n--;)i[t[n]]=e}(),function(){var e;e=this,$(function(){var e,t,n,i;return n=$("#signedin-nav"),i=$("#signedout-nav"),t=$.cookie("crafted_session"),t?(e=$.post("https://codio.com/service/",{acrequest:JSON.stringify({object:"AccountManager",method:"getMyInfo",params:{session_id:t}})}),e.done(function(e){var t,r,o;return 1!==e.code?(i.fadeIn(),"undefined"!=typeof ga&&null!==ga&&ga("send","pageview",{dimension1:"no",dimension2:"yes"})):(r=e.response.details,"undefined"!=typeof Intercom&&Intercom("boot",{app_id:"ee8711023afa04b80a6b921ddb3939c1171e0f62",email:r.email,created_at:r.created_at?Math.round(r.created_at/1e3):void 0,username:r.name,name:r.actual_name||r.name,user_id:e.response.account,widget:{activator:"#IntercomDefaultWidget"}}),t=md5(r.email.toLowerCase()),$("#gravatar img").prop("src","//www.gravatar.com/avatar/"+t+"?s=32&amp;d=mm"),$("#gravatar").prop("href","/"+r.name),o=$("#userlink"),o.prop("href","/"+r.name),o.text(r.name),n.fadeIn(),"undefined"!=typeof ga&&null!==ga&&ga("send","pageview",{dimension1:"yes",dimension2:"yes"}))})):(i.fadeIn(),"undefined"!=typeof ga&&null!==ga&&ga("send","pageview",{dimension1:"no",dimension2:"yes"}))}),$(function(){return $("a[href^='#']").on("click",function(){var e,t;return e=$(this).data().el||$(this.hash),$(this).data().el=e,e.length?(t=e.offset().top,$("html,body").animate({scrollTop:t-50},"slow")):void 0})}),$(function(){return $("#content-body h1 button").click(function(){return $("aside").is(":visible")?$("aside").hide():$("aside").show()})}),$(function(){return $(".fancybox").fancybox({helpers:{media:{},title:{type:"inside"}},beforeLoad:function(){return this.title=$(this.element).find("img").attr("title")}})}),$(function(){var e,t;return(e=$("body.standard:not(.no-fixed-submenu) aside")).length>0?(t=e.offset().top-parseFloat(e.css("marginTop").replace(/auto/,0)),$(window).scroll(function(){return $(this).scrollTop()>=t?e.addClass("fixed"):e.removeClass("fixed")})):void 0}),$(function(){var e,t;return(e=$("body.blog section.posts article img")).length>0&&e.each(function(){var e;return e=$(this),e.parent().is("a")?void 0:e.wrap(function(){return"<a href='"+e.attr("src")+"' class='fancybox' />"})}),$("body.blog section.posts article pre > code").addClass("lang-javascript"),(t=$("body.blog section.posts article a").filter("[href*='youtube'], [href*='vimeo']")).length>0?t.addClass("fancybox fancybox.iframe"):void 0}),$(function(){var e,t;return(e=$("#tree")).length>0?(t=function(){var e,t;return(e=$("body.docs article :not(a)>img")).length>0&&e.wrap(function(){return"<a href='"+$(this).attr("src")+"' class='fancybox' />"}),$("body.docs article pre > code").addClass("lang-javascript"),(t=$("body.docs article a").filter("[href*='youtube'], [href*='vimeo']")).length>0?t.addClass("fancybox fancybox.iframe"):void 0},t(),$("#full-screen").on("click",function(t){return t.preventDefault(),$("body").hasClass("full-screen")?$("body").removeClass("full-screen"):($("body").addClass("full-screen"),e.height($(window).height()-e.offset().top-20))}),e.find("div>span").on("click",function(){return $(this).parent().parent().toggleClass("expanded")}),e.find("a").on("click",function(){var t;return e.find("li").removeClass("checked"),t=$(this).parent().find(">span").length>0?$(this).parent().parent():$(this).parent(),t.addClass("checked"),t.parents("li").addClass("checked")}),expandTreeWithPath(),$(document).on("page:change",function(){return expandTreeWithPath(),t(),Rainbow.color()})):void 0}),e.expandTreeWithPath=function(e){var t,n;return null==e&&(e=document.location.pathname),e=e.replace(/\/$/,"")+"/",(n=$("#tree a[href='"+e+"']")).length>0?($("#tree li").removeClass("checked"),t=n.parent().find(">span").length>0?n.parent().parent():n.parent(),t.addClass("checked"),t.parents("li").addClass("checked")):void 0}}.call(this);