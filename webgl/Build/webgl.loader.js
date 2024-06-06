function createTuanjieInstance(n,r,l){function t(e,n){if(!t.aborted&&r.showBanner)return"error"==n&&(t.aborted=!0),r.showBanner(e,n);switch(n){case"error":console.error(e);break;case"warning":console.warn(e);break;default:console.log(e)}}function o(e){var n=e.reason||e.error,r=n?n.toString():e.message||e.reason||"",t=n&&n.stack?n.stack.toString():"";(r+="\n"+(t=t.startsWith(r)?t.substring(r.length):t).trim())&&u.stackTraceRegExp&&u.stackTraceRegExp.test(r)&&b(r,e.filename||n&&(n.fileName||n.sourceURL)||"",e.lineno||n&&(n.lineNumber||n.line)||0)}function e(e,n,r){var t=e[n];void 0!==t&&t||(console.warn('Config option "'+n+'" is missing or empty. Falling back to default value: "'+r+'". Consider updating your WebGL template to include the missing config option.'),e[n]=r)}l=l||function(){};var c,a,u={noInitialRun:!0,canvas:n,webglContextAttributes:{preserveDrawingBuffer:!1,powerPreference:2},streamingAssetsUrl:"StreamingAssets",downloadProgress:{},deinitializers:[],intervals:{},setInterval:function(e,n){e=window.setInterval(e,n);return this.intervals[e]=!0,e},clearInterval:function(e){delete this.intervals[e],window.clearInterval(e)},preRun:[],postRun:[],print:function(e){console.log(e)},printErr:function(e){console.error(e),"string"==typeof e&&-1!=e.indexOf("wasm streaming compile failed")&&(-1!=e.toLowerCase().indexOf("mime")?t('HTTP Response Header "Content-Type" configured incorrectly on the server for file '+u.codeUrl+' , should be "application/wasm". Startup time performance will suffer.',"warning"):t('WebAssembly streaming compilation failed! This can happen for example if "Content-Encoding" HTTP header is incorrectly enabled on the server for file '+u.codeUrl+", but the file is not pre-compressed on disk (or vice versa). Check the Network tab in browser Devtools to debug server header configuration.","warning"))},locateFile:function(e){return e},disabledCanvasEvents:["contextmenu","dragstart"]};for(a in e(r,"companyName","U3D"),e(r,"productName","WebGL Player"),e(r,"productVersion","1.0"),r)u[a]=r[a];u.streamingAssetsUrl=new URL(u.streamingAssetsUrl,document.URL).href;var i=u.disabledCanvasEvents.slice();function s(e){e.preventDefault()}i.forEach(function(e){n.addEventListener(e,s)}),window.addEventListener("error",o),window.addEventListener("unhandledrejection",o);var d="",f="";function g(e){document.webkitCurrentFullScreenElement===n?n.style.width&&(d=n.style.width,f=n.style.height,n.style.width="100%",n.style.height="100%"):d&&(n.style.width=d,n.style.height=f,f=d="")}document.addEventListener("webkitfullscreenchange",g),u.deinitializers.push(function(){for(var e in u.disableAccessToMediaDevices(),i.forEach(function(e){n.removeEventListener(e,s)}),window.removeEventListener("error",o),window.removeEventListener("unhandledrejection",o),document.removeEventListener("webkitfullscreenchange",g),u.intervals)window.clearInterval(e);u.intervals={}}),u.QuitCleanup=function(){for(var e=0;e<u.deinitializers.length;e++)u.deinitializers[e]();u.deinitializers=[],"function"==typeof u.onQuit&&u.onQuit()};var h={Module:u,SetFullscreen:function(){if(u.SetFullscreen)return u.SetFullscreen.apply(u,arguments);u.print("Failed to set Fullscreen mode: Player not loaded yet.")},SendMessage:function(){if(u.SendMessage)return u.SendMessage.apply(u,arguments);u.print("Failed to execute SendMessage: Player not loaded yet.")},Quit:function(){return new Promise(function(e,n){u.shouldQuit=!0,u.onQuit=e})},GetMemoryInfo:function(){var e=u._getMemInfo();return{totalWASMHeapSize:u.HEAPU32[e>>2],usedWASMHeapSize:u.HEAPU32[1+(e>>2)],totalJSHeapSize:u.HEAPF64[1+(e>>3)],usedJSHeapSize:u.HEAPF64[2+(e>>3)]}}};function p(e,n,r){-1==e.indexOf("fullscreen error")&&(u.startupErrorHandler?u.startupErrorHandler(e,n,r):u.errorHandler&&u.errorHandler(e,n,r)||(console.log("Invoking error handler due to\n"+e),"function"==typeof dump&&dump("Invoking error handler due to\n"+e),p.didShowErrorMessage||(-1!=(e="An error occurred running the content on this page. See your browser JavaScript console for more info. The error was:\n"+e).indexOf("DISABLE_EXCEPTION_CATCHING")?e="An exception has occurred, but exception handling has been disabled in this build. If you are the developer of this content, enable exceptions in your project WebGL player settings to be able to catch the exception or see the stack trace.":-1!=e.indexOf("Cannot enlarge memory arrays")?e="Out of memory. If you are the developer of this content, try allocating more memory to your WebGL build in the WebGL player settings.":-1==e.indexOf("Invalid array buffer length")&&-1==e.indexOf("Invalid typed array length")&&-1==e.indexOf("out of memory")&&-1==e.indexOf("could not allocate memory")||(e="The browser could not allocate enough memory for the WebGL content. If you are the developer of this content, try allocating less memory to your WebGL build in the WebGL player settings."),alert(e),p.didShowErrorMessage=!0)))}function m(e,n){var r="(wasm-function\\[)(\\d+)(\\])",t=new RegExp(r);return e.replace(new RegExp(r,"g"),function(e){e=e.match(t);return e[1]+(n[e[2]]?n[e[2]]+"@":"")+e[2]+e[3]})}function b(t,o,a){u.symbols?p(m(t,u.symbols),o,a):u.symbolsUrl?y("symbolsUrl").then(function(e){for(var n="",r=0;r<e.length;r++)n+=String.fromCharCode(e[r]);u.symbols=JSON.parse(n),p(m(t,u.symbols),o,a)}).catch(function(e){p(t,o,a)}):p(t,o,a)}function v(e,n){if("symbolsUrl"!=e){var r=u.downloadProgress[e],t=(r=r||(u.downloadProgress[e]={started:!1,finished:!1,lengthComputable:!1,total:0,loaded:0}),"object"!=typeof n||"progress"!=n.type&&"load"!=n.type||(r.started||(r.started=!0,r.lengthComputable=n.lengthComputable),r.total=n.total,r.loaded=n.loaded,"load"==n.type&&(r.finished=!0)),0),o=0,a=0,i=0,s=0;for(e in u.downloadProgress){if(!(r=u.downloadProgress[e]).started)return;a++,r.lengthComputable?(t+=r.loaded,o+=r.total,i++):r.finished||s++}l(.9*(a?(a-s-(o?i*(o-t)/o:0))/a:0))}}function y(r){v(r);var e=u.fetchWithProgress,n=u[r],n=/file:\/\//.exec(n)?"same-origin":void 0;return e(u[r],{method:"GET",companyName:u.companyName,productName:u.productName,productVersion:u.productVersion,control:"no-store",mode:n,onProgress:function(e){v(r,e)}}).then(function(e){return e.parsedBody}).catch(function(e){var n="Failed to download file "+u[r];"file:"==location.protocol?t(n+". Loading web pages via a file:// URL without a web server is not supported by this browser. Please use a local development web server to host content, or use the Build and Run option.","error"):console.error(n)})}function w(){import("../Code/wwwroot/_framework/dotnet.js").then(e=>e.default).then(function(e){return e(e=>(c=e,u))}).then(()=>{c.Module.callMain()});var e=y("dataUrl");u.preRun.push(function(){c.Module.addRunDependency("dataUrl"),e.then(function(e){var n=new DataView(e.buffer,e.byteOffset,e.byteLength),r=0,t="TuanjieWebData1.0\0";if(!String.fromCharCode.apply(null,e.subarray(r,r+t.length))==t)throw"unknown data format";var o=n.getUint32(r+=t.length,!0);for(r+=4;r<o;){var a=n.getUint32(r,!0),i=(r+=4,n.getUint32(r,!0)),s=(r+=4,n.getUint32(r,!0)),l=(r+=4,String.fromCharCode.apply(null,e.subarray(r,r+s)));r+=s;for(var u=0,d=l.indexOf("/",u)+1;0<d;u=d,d=l.indexOf("/",u)+1)c.Module.FS_createPath(l.substring(0,u),l.substring(u,d-1),!0,!0);c.Module.FS_createDataFile(l,null,e.subarray(a,a+i),!0,!0,!0)}c.Module.removeRunDependency("dataUrl")})})}return u.SystemInfo=function(){var e,n,r,t,o=navigator.userAgent+" ",a=[["Firefox","Firefox"],["OPR","Opera"],["Edg","Edge"],["SamsungBrowser","Samsung Browser"],["Trident","Internet Explorer"],["MSIE","Internet Explorer"],["Chrome","Chrome"],["CriOS","Chrome on iOS Safari"],["FxiOS","Firefox on iOS Safari"],["Safari","Safari"]];function i(e,n,r){return(e=RegExp(e,"i").exec(n))&&e[r]}for(var s=0;s<a.length;++s)if(n=i(a[s][0]+"[/ ](.*?)[ \\)]",o,1)){e=a[s][1];break}"Safari"==e&&(n=i("Version/(.*?) ",o,1)),"Internet Explorer"==e&&(n=i("rv:(.*?)\\)? ",o,1)||n);for(var l=[["Windows (.*?)[;)]","Windows"],["Android ([0-9_.]+)","Android"],["iPhone OS ([0-9_.]+)","iPhoneOS"],["iPad.*? OS ([0-9_.]+)","iPadOS"],["FreeBSD( )","FreeBSD"],["OpenBSD( )","OpenBSD"],["Linux|X11()","Linux"],["Mac OS X ([0-9_\\.]+)","MacOS"],["bot|google|baidu|bing|msn|teoma|slurp|yandex","Search Bot"]],u=0;u<l.length;++u)if(d=i(l[u][0],o,1)){r=l[u][1],d=d.replace(/_/g,".");break}var d={"NT 5.0":"2000","NT 5.1":"XP","NT 5.2":"Server 2003","NT 6.0":"Vista","NT 6.1":"7","NT 6.2":"8","NT 6.3":"8.1","NT 10.0":"10"}[d]||d,c=((c=document.createElement("canvas"))&&(gl=c.getContext("webgl2"),glVersion=gl?2:0,gl||(gl=c&&c.getContext("webgl"))&&(glVersion=1),gl&&(t=gl.getExtension("WEBGL_debug_renderer_info")&&gl.getParameter(37446)||gl.getParameter(7937))),"undefined"!=typeof SharedArrayBuffer),f="object"==typeof WebAssembly&&"function"==typeof WebAssembly.compile;return{width:screen.width,height:screen.height,userAgent:o.trim(),browser:e||"Unknown browser",browserVersion:n||"Unknown version",mobile:/Mobile|Android|iP(ad|hone)/.test(navigator.appVersion),os:r||"Unknown OS",osVersion:d||"Unknown OS Version",gpu:t||"Unknown GPU",language:navigator.userLanguage||navigator.language,hasWebGL:glVersion,hasCursorLock:!!document.body.requestPointerLock,hasFullscreen:!!document.body.requestFullscreen||!!document.body.webkitRequestFullscreen,hasThreads:c,hasWasm:f,hasWasmThreads:!1}}(),u.abortHandler=function(e){return b(e,"",0),!0},Error.stackTraceLimit=Math.max(Error.stackTraceLimit||0,50),u.readBodyWithProgress=function(a,i,s){var e=a.body?a.body.getReader():void 0,l=void 0!==a.headers.get("Content-Length"),u=function(e,n){if(!n)return 0;var n=e.headers.get("Content-Encoding"),r=parseInt(e.headers.get("Content-Length"));switch(n){case"br":return Math.round(5*r);case"gzip":return Math.round(4*r);default:return r}}(a,l),d=new Uint8Array(u),c=[],f=0,g=0;return l||console.warn("[TuanjieCache] Response is served without Content-Length header. Please reconfigure server to include valid Content-Length for better download performance."),function o(){return void 0===e?a.arrayBuffer().then(function(e){var n=new Uint8Array(e);return i({type:"progress",response:a,total:e.length,loaded:0,lengthComputable:l,chunk:s?n:null}),n}):e.read().then(function(e){if(e.done){if(f===u)return d;if(f<u)return d.slice(0,f);for(var n=new Uint8Array(f),r=(n.set(d,0),g),t=0;t<c.length;++t)n.set(c[t],r),r+=c[t].length;return n}return f+e.value.length<=d.length?(d.set(e.value,f),g=f+e.value.length):c.push(e.value),f+=e.value.length,i({type:"progress",response:a,total:Math.max(u,f),loaded:f,lengthComputable:l,chunk:s?e.value:null}),o()})}().then(function(e){return i({type:"load",response:a,total:e.length,loaded:e.length,lengthComputable:l,chunk:null}),a.parsedBody=e,a})},u.fetchWithProgress=function(e,n){var r=function(){};return n&&n.onProgress&&(r=n.onProgress),fetch(e,n).then(function(e){return u.readBodyWithProgress(e,r,n.enableStreamingDownload)})},new Promise(function(e,n){u.SystemInfo.hasWebGL?u.SystemInfo.hasWasm?(u.startupErrorHandler=n,l(0),u.postRun.push(function(){l(1),delete u.startupErrorHandler,e(h)}),w()):n("Your browser does not support WebAssembly."):n("Your browser does not support WebGL.")})}