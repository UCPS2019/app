(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{"3MIp":function(t,n,e){"use strict";e.d(n,"b",function(){return r}),e.d(n,"c",function(){return o}),e.d(n,"a",function(){return l});var r=function(){return function(t){this.aludni=t&&t.aludni||null,this.alucorele=t&&t.alucorele||null,this.alunom=t&&t.alunom||null,this.aluapemat=t&&t.aluapemat||null,this.aluapepat=t&&t.aluapepat||null,this.alufecnac=t&&t.alufecnac||null,this.alutel=t&&t.alutel||null,this.aludir=t&&t.aludir||null,this.alunomusu=t&&t.alunomusu||null,this.alucon=t&&t.alucon||null,this.aluestreg=t&&t.aluestreg||null}}(),o=function(){return function(t){this.AlDni=t&&t.AlDni||null,this.AlCorEle=t&&t.AlCorEle||null,this.AlNom=t&&t.AlNom||null,this.AlApeMat=t&&t.AlApeMat||null,this.AlApePat=t&&t.AlApePat||null,this.AlFecNac=t&&t.AlFecNac||null,this.AlTel=t&&t.AlTel||null,this.AlDir=t&&t.AlDir||null,this.AlNomUsu=t&&t.AlNomUsu||null,this.AlCon=t&&t.AlCon||null,this.AlEstReg=t&&t.AlEstReg||null}}(),l=function(){return function(){}}()},"5fBC":function(t,n,e){"use strict";e.d(n,"a",function(){return l});var r=e("l+3l"),o=(e("0ygI"),e("XlPw")),l=(e("89kA"),e("1M8x"),function(){function t(t,n){this._http=t,this.utilsservice=n,this.rutaDocente="https://api-ucps-unsa.herokuapp.com/api"}return t.prototype.getListarDocente=function(){return this._http.get(this.rutaDocente+"/usuarios/docente/read.php").map(function(t){return t.map(function(t){return new r.a(t)})}).catch(this.handleError)},t.prototype.postBuscarDocentexId=function(t){return this._http.post(this.rutaDocente+"/usuarios/docente/read_id.php",'{"docdni":"'+t+'"}').map(function(t){return new r.a(t)}).catch(this.handleError)},t.prototype.postBuscarDocentexParteId=function(t){return this._http.post(this.rutaDocente+"/usuarios/docente/read_id_autocomplete.php",'{"docdni":"'+t+'"}').map(function(t){return t.map(function(t){return new r.a(t)})}).catch(this.handleError)},t.prototype.postCrearDocente=function(t){var n=this;return this._http.post(this.rutaDocente+"/usuarios/docente/create.php",t).map(function(t){return n.utilsservice.showMensaje(!0),t}).catch(this.handleError)},t.prototype.putModificarDocente=function(t){var n=this;return console.log(t),this._http.put(this.rutaDocente+"/usuarios/docente/update.php",t).map(function(t){return n.utilsservice.showMensaje(!0),t}).catch(this.handleError)},t.prototype.handleError=function(t){return console.error("An error occurred",t),Object(o.a)(t)},t}())},"856t":function(t,n,e){"use strict";var r=e("XlPw"),o=(e("89kA"),e("1M8x"),function(){return function(t){this.proid=t&&t.proid||0,this.pronom=t&&t.pronom||null}}());e.d(n,"a",function(){return l});var l=function(){function t(t){this._http=t,this.rutaPrograma="https://api-ucps-unsa.herokuapp.com/api"}return t.prototype.getListarProgramas=function(){return this._http.get(this.rutaPrograma+"/programa/read.php").map(function(t){return t.map(function(t){return new o(t)})}).catch(this.handleError)},t.prototype.getListarProgramasLista=function(){return this._http.get(this.rutaPrograma+"/programa/read.php").map(function(t){return t}).catch(this.handleError)},t.prototype.getProgramaById=function(t){return this._http.post(this.rutaPrograma+"/programa/read_id.php",{proid:t}).catch(this.handleError)},t.prototype.postcreatePrograma=function(t){return this._http.post(this.rutaPrograma+"/programa/create.php",t).catch(this.handleError)},t.prototype.putUpdatePrograma=function(t){return this._http.put(this.rutaPrograma+"/programa/update.php",t).catch(this.handleError)},t.prototype.handleError=function(t){return console.error("An error occurred",t),Object(r.a)(t)},t}()},"9tPo":function(t,n){t.exports=function(t){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!t||"string"!=typeof t)return t;var e=n.protocol+"//"+n.host,r=e+n.pathname.replace(/\/[^\/]*$/,"/");return t.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(t,n){var o,l=n.trim().replace(/^"(.*)"$/,function(t,n){return n}).replace(/^'(.*)'$/,function(t,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(l)?t:(o=0===l.indexOf("//")?l:0===l.indexOf("/")?e+l:r+l.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")})}},DJWL:function(t,n,e){"use strict";var r=e("CcnG");e("gIcY"),e("3KC+"),e.d(n,"a",function(){return o}),e.d(n,"b",function(){return l});var o=r["\u0275crt"]({encapsulation:0,styles:[["[_nghost-%COMP%]   .customised-control[_ngcontent-%COMP%]{position:relative;display:-webkit-inline-box;display:-ms-inline-flexbox;display:inline-flex;margin:0;min-height:inherit;padding:.375rem 1.5rem .375rem 0}[_nghost-%COMP%]   .customised-control-input[_ngcontent-%COMP%]{position:absolute;opacity:0}[_nghost-%COMP%]   .customised-control-input[_ngcontent-%COMP%]:disabled ~ .customised-control-description[_ngcontent-%COMP%], [_nghost-%COMP%]   .customised-control-input[_ngcontent-%COMP%]:disabled ~ .customised-control-indicator[_ngcontent-%COMP%]{opacity:.5}[_nghost-%COMP%]   .customised-control-indicator[_ngcontent-%COMP%]{border-radius:.25rem;-ms-flex-negative:0;flex-shrink:0}[_nghost-%COMP%]   .customised-control-indicator[_ngcontent-%COMP%]::before{content:'';border-style:solid;display:block;margin:0 auto;-webkit-transform:rotate(45deg);transform:rotate(45deg)}[dir=ltr]   [_nghost-%COMP%]   .customised-control-description[_ngcontent-%COMP%]{padding-left:.5rem}[dir=rtl]   [_nghost-%COMP%]   .customised-control-description[_ngcontent-%COMP%]{padding-right:.5rem}"]],data:{}});function l(t){return r["\u0275vid"](0,[(t()(),r["\u0275eld"](0,0,null,null,4,"label",[["class","customised-control"]],null,null,null,null,null)),(t()(),r["\u0275eld"](1,0,null,null,0,"input",[["class","customised-control-input"],["type","checkbox"]],[[8,"disabled",0],[8,"checked",0]],[[null,"change"],[null,"blur"]],function(t,n,e){var r=!0,o=t.component;return"change"===n&&(r=0!=(o.value=!o.value)&&r),"blur"===n&&(r=!1!==o.setTouched()&&r),r},null,null)),(t()(),r["\u0275eld"](2,0,null,null,0,"span",[["class","customised-control-indicator"]],null,null,null,null,null)),(t()(),r["\u0275eld"](3,0,null,null,1,"span",[["class","customised-control-description"]],null,null,null,null,null)),r["\u0275ncd"](null,0)],null,function(t,n){var e=n.component;t(n,1,0,e.disabled,e.value)})}},HB89:function(t,n,e){"use strict";var r=e("6blF"),o=e("T1DM"),l=e("Gi3i");r.a.prototype.debounceTime=function(t,n){return void 0===n&&(n=o.a),Object(l.a)(t,n)(this)}},IaQY:function(t,n,e){"use strict";e.d(n,"a",function(){return c});var r=e("CcnG"),o=e("ZYCi"),l=e("qn3S"),u=r["\u0275crt"]({encapsulation:2,styles:[],data:{}});function i(t){return r["\u0275vid"](0,[(t()(),r["\u0275eld"](0,16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),r["\u0275did"](1,212992,null,0,o.q,[o.b,r.ViewContainerRef,r.ComponentFactoryResolver,[8,null],r.ChangeDetectorRef],null,null)],function(t,n){t(n,1,0)},null)}function a(t){return r["\u0275vid"](0,[(t()(),r["\u0275eld"](0,0,null,null,1,"ngx-miscellaneous",[],null,null,null,i,u)),r["\u0275did"](1,49152,null,0,l.a,[],null,null)],null,null)}var c=r["\u0275ccf"]("ngx-miscellaneous",l.a,a,{},{},[])},"MPj/":function(t,n,e){"use strict";var r=e("6blF"),o=e("15JJ");r.a.prototype.switchMap=function(t){return Object(o.a)(t)(this)}},NWkE:function(t,n,e){"use strict";var r=e("CcnG"),o=e("4bAE"),l=e("mc3f"),u=e("w+5F"),i=e("SUpF");e.d(n,"a",function(){return d});var a=r["\u0275crt"]({encapsulation:0,styles:[[".flex-centered[_ngcontent-%COMP%]{margin:auto}nb-card-body[_ngcontent-%COMP%]{display:-webkit-box;display:-ms-flexbox;display:flex}.title[_ngcontent-%COMP%]{text-align:center}.sub-title[_ngcontent-%COMP%]{text-align:center;display:block;margin-bottom:3rem}.btn[_ngcontent-%COMP%]{margin-bottom:2rem}"]],data:{}});function c(t){return r["\u0275vid"](0,[(t()(),r["\u0275eld"](0,0,null,null,12,"div",[["class","row"]],null,null,null,null,null)),(t()(),r["\u0275eld"](1,0,null,null,11,"div",[["class","col-md-12"]],null,null,null,null,null)),(t()(),r["\u0275eld"](2,0,null,null,10,"nb-card",[],[[2,"xxsmall-card",null],[2,"xsmall-card",null],[2,"small-card",null],[2,"medium-card",null],[2,"large-card",null],[2,"xlarge-card",null],[2,"xxlarge-card",null],[2,"active-card",null],[2,"disabled-card",null],[2,"primary-card",null],[2,"info-card",null],[2,"success-card",null],[2,"warning-card",null],[2,"danger-card",null],[2,"accent",null],[2,"accent-primary",null],[2,"accent-info",null],[2,"accent-success",null],[2,"accent-warning",null],[2,"accent-danger",null],[2,"accent-active",null],[2,"accent-disabled",null]],null,null,o.f,o.b)),r["\u0275did"](3,49152,null,0,l.b,[],null,null),(t()(),r["\u0275eld"](4,0,null,1,8,"nb-card-body",[],null,null,null,o.e,o.a)),r["\u0275did"](5,49152,null,0,l.a,[],null,null),(t()(),r["\u0275eld"](6,0,null,0,6,"div",[["class","flex-centered col-xl-4 col-lg-6 col-md-8 col-sm-12"]],null,null,null,null,null)),(t()(),r["\u0275eld"](7,0,null,null,1,"h2",[["class","title"]],null,null,null,null,null)),(t()(),r["\u0275ted"](-1,null,["404 Page Not Found"])),(t()(),r["\u0275eld"](9,0,null,null,1,"small",[["class","sub-title"]],null,null,null,null,null)),(t()(),r["\u0275ted"](-1,null,["The page you were looking for doesn't exist"])),(t()(),r["\u0275eld"](11,0,null,null,1,"button",[["class","btn btn-block btn-hero-primary"],["type","button"]],null,[[null,"click"]],function(t,n,e){var r=!0;return"click"===n&&(r=!1!==t.component.goToHome()&&r),r},null,null)),(t()(),r["\u0275ted"](-1,null,[" Take me home "]))],null,function(t,n){t(n,2,1,[r["\u0275nov"](n,3).xxsmall,r["\u0275nov"](n,3).xsmall,r["\u0275nov"](n,3).small,r["\u0275nov"](n,3).medium,r["\u0275nov"](n,3).large,r["\u0275nov"](n,3).xlarge,r["\u0275nov"](n,3).xxlarge,r["\u0275nov"](n,3).active,r["\u0275nov"](n,3).disabled,r["\u0275nov"](n,3).primary,r["\u0275nov"](n,3).info,r["\u0275nov"](n,3).success,r["\u0275nov"](n,3).warning,r["\u0275nov"](n,3).danger,r["\u0275nov"](n,3).hasAccent,r["\u0275nov"](n,3).primaryAccent,r["\u0275nov"](n,3).infoAccent,r["\u0275nov"](n,3).successAccent,r["\u0275nov"](n,3).warningAccent,r["\u0275nov"](n,3).dangerAccent,r["\u0275nov"](n,3).activeAccent,r["\u0275nov"](n,3).disabledAccent])})}function s(t){return r["\u0275vid"](0,[(t()(),r["\u0275eld"](0,0,null,null,1,"ngx-not-found",[],null,null,null,c,a)),r["\u0275did"](1,49152,null,0,u.a,[i.b],null,null)],null,null)}var d=r["\u0275ccf"]("ngx-not-found",u.a,s,{},{},[])},O5R2:function(t,n,e){"use strict";var r=e("6blF"),o=e("VnD/");r.a.prototype.filter=function(t,n){return Object(o.a)(t,n)(this)}},T5cW:function(t,n,e){"use strict";var r=function(){return function(t){this.sedid=t&&t.sedid||null,this.seddes=t&&t.seddes||null}}(),o=(e("0ygI"),e("XlPw"));e("89kA"),e("1M8x"),e.d(n,"a",function(){return l});var l=function(){function t(t,n){this._http=t,this.utilsservice=n,this.rutaSede="https://api-ucps-unsa.herokuapp.com/api"}return t.prototype.getListarSede=function(){return this._http.get(this.rutaSede+"/sede/read.php").map(function(t){return t.map(function(t){return new r(t)})}).catch(this.handleError)},t.prototype.handleError=function(t){return console.error("An error occurred",t),Object(o.a)(t)},t}()},a7XX:function(t,n,e){"use strict";e.d(n,"a",function(){return l});var r=e("3MIp"),o=(e("0ygI"),e("XlPw")),l=(e("89kA"),e("1M8x"),e("4bd7"),function(){function t(t,n,e){this._http=t,this.seguridadService=n,this.utilsservice=e,this.rutaAlumno="https://api-ucps-unsa.herokuapp.com/api"}return t.prototype.getListarAlumnos=function(){return this._http.get(this.rutaAlumno+"/usuarios/alumno/read.php").map(function(t){return t.map(function(t){return new r.b(t)})}).catch(this.handleError)},t.prototype.postBuscarAlumnoxId=function(t){return this._http.post(this.rutaAlumno+"/usuarios/alumno/read_id.php",'{"AlDni":"'+t+'"}').map(function(t){return new r.b(t)}).catch(this.handleError)},t.prototype.postBuscarAlumnoxParteId=function(t){return this._http.post(this.rutaAlumno+"/usuarios/alumno/read_simple.php",'{"alunom":"'+t+'"}').map(function(t){return t}).catch(this.handleError)},t.prototype.postCrearAlumno=function(t){var n=this;return this._http.post(this.rutaAlumno+"/usuarios/alumno/create.php",t).map(function(t){return n.utilsservice.showMensaje(!0),t}).catch(this.handleError)},t.prototype.putModificarAlumno=function(t){var n=this;return this._http.put(this.rutaAlumno+"/usuarios/alumno/update.php",t).map(function(t){return console.log("response",t),n.utilsservice.showMensaje(!0),t}).catch(this.handleError)},t.prototype.deleteAlumno=function(t){var n=this;return this._http.put(this.rutaAlumno+"/usuarios/alumno/delete.php",t).map(function(t){return n.utilsservice.showMensaje(!0),t}).catch(this.handleError)},t.prototype.getListarSearchAlumno=function(t){return this._http.post(this.rutaAlumno+"/usuarios/alumno/buscador.php",'{"aludni":"'+t+'"}').map(function(t){return t}).catch(this.handleError)},t.prototype.handleError=function(t){return console.error("An error occurred",t),Object(o.a)(t)},t}())},"aET+":function(t,n,e){var r,o,l={},u=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),i=function(t){var n={};return function(t,e){if("function"==typeof t)return t();if(void 0===n[t]){var r=(function(t,n){return n?n.querySelector(t):document.querySelector(t)}).call(this,t,e);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(o){r=null}n[t]=r}return n[t]}}(),a=null,c=0,s=[],d=e("9tPo");function p(t,n){for(var e=0;e<t.length;e++){var r=t[e],o=l[r.id];if(o){o.refs++;for(var u=0;u<o.parts.length;u++)o.parts[u](r.parts[u]);for(;u<r.parts.length;u++)o.parts.push(b(r.parts[u],n))}else{var i=[];for(u=0;u<r.parts.length;u++)i.push(b(r.parts[u],n));l[r.id]={id:r.id,refs:1,parts:i}}}}function h(t,n){for(var e=[],r={},o=0;o<t.length;o++){var l=t[o],u=n.base?l[0]+n.base:l[0],i={css:l[1],media:l[2],sourceMap:l[3]};r[u]?r[u].parts.push(i):e.push(r[u]={id:u,parts:[i]})}return e}function f(t,n){var e=i(t.insertInto);if(!e)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=s[s.length-1];if("top"===t.insertAt)r?r.nextSibling?e.insertBefore(n,r.nextSibling):e.appendChild(n):e.insertBefore(n,e.firstChild),s.push(n);else if("bottom"===t.insertAt)e.appendChild(n);else{if("object"!=typeof t.insertAt||!t.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=i(t.insertAt.before,e);e.insertBefore(n,o)}}function m(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t);var n=s.indexOf(t);n>=0&&s.splice(n,1)}function v(t){var n=document.createElement("style");if(void 0===t.attrs.type&&(t.attrs.type="text/css"),void 0===t.attrs.nonce){var r=e.nc;r&&(t.attrs.nonce=r)}return g(n,t.attrs),f(t,n),n}function g(t,n){Object.keys(n).forEach(function(e){t.setAttribute(e,n[e])})}function b(t,n){var e,r,o,l;if(n.transform&&t.css){if(!(l="function"==typeof n.transform?n.transform(t.css):n.transform.default(t.css)))return function(){};t.css=l}if(n.singleton){var u=c++;e=a||(a=v(n)),r=w.bind(null,e,u,!1),o=w.bind(null,e,u,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(e=function(t){var n=document.createElement("link");return void 0===t.attrs.type&&(t.attrs.type="text/css"),t.attrs.rel="stylesheet",g(n,t.attrs),f(t,n),n}(n),r=(function(t,n,e){var r=e.css,o=e.sourceMap;(n.convertToAbsoluteUrls||void 0===n.convertToAbsoluteUrls&&o)&&(r=d(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var l=new Blob([r],{type:"text/css"}),u=t.href;t.href=URL.createObjectURL(l),u&&URL.revokeObjectURL(u)}).bind(null,e,n),o=function(){m(e),e.href&&URL.revokeObjectURL(e.href)}):(e=v(n),r=(function(t,n){var e=n.css,r=n.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}).bind(null,e),o=function(){m(e)});return r(t),function(n){if(n){if(n.css===t.css&&n.media===t.media&&n.sourceMap===t.sourceMap)return;r(t=n)}else o()}}t.exports=function(t,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},n.singleton||"boolean"==typeof n.singleton||(n.singleton=u()),n.insertInto||(n.insertInto="head"),n.insertAt||(n.insertAt="bottom");var e=h(t,n);return p(e,n),function(t){for(var r=[],o=0;o<e.length;o++)(u=l[e[o].id]).refs--,r.push(u);for(t&&p(h(t,n),n),o=0;o<r.length;o++){var u;if(0===(u=r[o]).refs){for(var i=0;i<u.parts.length;i++)u.parts[i]();delete l[u.id]}}}};var y,A=(y=[],function(t,n){return y[t]=n,y.filter(Boolean).join("\n")});function w(t,n,e,r){var o=e?"":r.css;if(t.styleSheet)t.styleSheet.cssText=A(n,o);else{var l=document.createTextNode(o),u=t.childNodes;u[n]&&t.removeChild(u[n]),u.length?t.insertBefore(l,u[n]):t.appendChild(l)}}},arLC:function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r=function(){return function(t){this.admdni=t&&t.admdni||null,this.admcorele=t&&t.admcorele||null,this.admnom=t&&t.admnom||null,this.admapepat=t&&t.admapepat||null,this.admapemat=t&&t.admapemat||null,this.admfecnac=t&&t.admfecnac||null,this.admtel=t&&t.admtel||null,this.admdir=t&&t.admdir||null,this.admnomusu=t&&t.admnomusu||null,this.admcon=t&&t.admcon||null,this.admestreg=t&&t.admestreg||null}}()},ivxX:function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r=function(){return function(){}}()},"l+3l":function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r=function(){return function(t){this.docdni=t&&t.docdni||null,this.doccorele=t&&t.doccorele||null,this.docnom=t&&t.docnom||null,this.docapepat=t&&t.docapepat||null,this.docapemat=t&&t.docapemat||null,this.docfecnac=t&&t.docfecnac||null,this.doctel=t&&t.doctel||null,this.docdir=t&&t.docdir||null,this.docnomusu=t&&t.docnomusu||null,this.doccon=t&&t.doccon||null,this.docestereg=t&&t.docestereg||null}}()},qn3S:function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r=function(){return function(){}}()},"w+5F":function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e("TtU4");var r=function(){function t(t){this.menuService=t}return t.prototype.goToHome=function(){this.menuService.navigateHome()},t}()},"z+qo":function(t,n,e){"use strict";e.d(n,"a",function(){return r}),e("qn3S"),e("w+5F");var r=function(){return function(){}}()}}]);