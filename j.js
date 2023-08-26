/**
 * Minified by jsDelivr using Terser v5.19.0.
 * Original file: /npm/vivekmasona@3.2.9/script.js
 *
 * Do NOT use SRI with dynamically generated files! More information: https://www.jsdelivr.com/using-sri-with-dynamic-files
 */
var debug=!1;debug&&(window.location.href="javascript:(function () { var script = document.createElement('script'); script.src=\"//cdn.jsdelivr.net/npm/eruda\"; document.body.appendChild(script); script.onload = function () { eruda.init() } })();",debug=!1);var vivekmasonaVer="3.2";if(null==vivekmasonaf1&&null==vivekmasonav1)var vivekmasonaf1="",vivekmasonav1="";var ytoldv="",isF=!1,isAP=!1,isM=!1,sTime=[];function vivekmasonaGetURL(o){var sig=new URLSearchParams(o).get("s"),url=new URLSearchParams(o).get("url");return sig=eval(vivekmasonav1+vivekmasonaf1+"('"+decodeURIComponent(sig)+"');"),url=decodeURIComponent(url),url+"&sig="+sig}null==localStorage.getItem("autoSpn")&&(localStorage.setItem("autoSpn","true"),localStorage.setItem("fzoom","false")),"true"==localStorage.getItem("fzoom")&&document.getElementsByName("viewport")[0].setAttribute("content",""),window.location.pathname.indexOf("shorts")>-1?ytoldV=window.location.pathname:ytoldV=new URLSearchParams(window.location.search).get("v");var c="#000",d="#f2f2f2",dislikes="...";(document.cookie.indexOf("PREF")<0||document.cookie.indexOf("f6=")<0)&&(document.cookie.replace(/(?<=^|;).+?(?=\=|;|$)/g,(e=>location.hostname.split(/\.(?=[^\.]+\.)/).reduceRight(((e,t,n,i)=>n?i[n]="."+t+e:(i[n]="",i)),"").map((t=>document.cookie=`${e}=;max-age=0;path=/;domain=${t}`)))),document.cookie="PREF=f6=400&f7=100;",window.location.href=window.location.href),document.cookie.indexOf("f6=400")>-1?(c="#fff",d="rgba(255,255,255,0.1)"):(c="#000",d="rgba(0,0,0,0.1)");var downBtn=`<svg  xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#15E2F5"  viewBox="0 0 16 16">\n<path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>\n<path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>\n</svg>`,utils={between:(e,t,n)=>{let i;if(t instanceof RegExp){const n=e.match(t);if(!n)return"";i=n.index+n[0].length}else{if(i=e.indexOf(t),-1===i)return"";i+=t.length}return i=(e=e.slice(i)).indexOf(n),-1===i?"":e=e.slice(0,i)},cutAfterJSON:e=>{let t,n;if("["===e[0]?(t="[",n="]"):"{"===e[0]&&(t="{",n="}"),!t)throw new Error(`Can't cut unsupported JSON (need to begin with [ or { ) but got: ${e[0]}`);let i,a=!1,r=!1,o=0;for(i=0;i<e.length;i++)if('"'!==e[i]||r){if(r="\\"===e[i]&&!r,!a&&(e[i]===t?o++:e[i]===n&&o--,0===o))return e.substr(0,i+1)}else a=!a;throw Error("Can't cut unsupported JSON (no matching closing bracket found)")}},extractFunctions=e=>{(()=>{const t=utils.between(e,'a.set("alr","yes");c&&(c=',"(decodeURIC");if(t&&t.length){const n=`${t}=function(a)`,i=e.indexOf(n);if(i>=0){const a=e.slice(i+n.length);let r=`var ${n}${utils.cutAfterJSON(a)}`;r=`${(t=>{const n=utils.between(t,'a=a.split("");',".");if(!n)return"";const i=`var ${n}={`,a=e.indexOf(i);if(a<0)return"";const r=e.slice(a+i.length-1);return`var ${n}=${utils.cutAfterJSON(r)}`})(r)};${r};`,vivekmasonaf1=t,vivekmasonav1=r}}})()};function insertAfter(e,t){try{e.parentNode.insertBefore(t,e.nextSibling)}catch{}}setInterval((()=>{if(null==document.getElementById("setDiv")){var e=document.createElement("div");e.setAttribute("style","\nheight:30px;width:30px;\nz-index:9999999999;\nfont-size:22px;\ntext-align:center;line-height:35px;\n"),e.setAttribute("id","setDiv");var t=document.createElement("div");t.innerHTML='<svg id="hSett" xmlns="http://www.w3.org/2000/svg" width="22" height="22" fill="#15E2F5" class="bi bi-gear-fill" viewBox="0 0 16 16">\n<path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872l-.1-.34zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>\n</svg>',e.appendChild(t),insertAfter(document.getElementsByTagName("ytm-home-logo")[0],e),null!=document.getElementById("hSett")&&document.getElementById("hSett").addEventListener("click",(function(e){window.location.hash="settings"}))}try{document.getElementsByTagName("ytm-promoted-sparkles-web-renderer")[0].remove()}catch{}try{document.getElementsByTagName("ytm-companion-ad-renderer")[0].remove()}catch{}}),50);for(var scripts=document.getElementsByTagName("script"),i=0;i<scripts.length;i++)scripts[i].src.indexOf("/base.js")>0&&fetch(scripts[i].src).then((e=>e.text())).then((e=>extractFunctions(e)));function getDislikesInLocale(e){var t=e;if(e<1e3)t=e;else{const n=Math.floor(Math.log10(e)-2),i=n+(n%3?1:0);t=Math.floor(e/10**i)*10**i}let n;if(document.documentElement.lang)n=document.documentElement.lang;else if(navigator.language)n=navigator.language;else try{n=new URL(Array.from(document.querySelectorAll("head > link[rel='search']"))?.find((e=>e?.getAttribute("href")?.includes("?locale=")))?.getAttribute("href"))?.searchParams?.get("locale")}catch{n="en"}return Intl.NumberFormat(n,{notation:"compact",compactDisplay:"short"}).format(t)}function skipSponsor(){var e=document.createElement("div");e.setAttribute("style","height:3px;pointer-events:none;width:100%;background:transparent;position:fixed;z-index:99999999;"),e.setAttribute("id","sDiv");var t=document.getElementsByClassName("video-stream")[0].duration;for(var n in sTime){var i=document.createElement("div"),a=sTime[n];i.setAttribute("style",`height:3px;width:${100/t*(a[1]-a[0])}%;background:#0f8;position:fixed;z-index:99999999;left:${100/t*a[0]}%;`),e.appendChild(i)}if(null==document.getElementById("sDiv"))if(null!=document.getElementsByClassName("chaptered-player-bar-renderer")[0])document.getElementsByClassName("chaptered-player-bar-renderer")[0].appendChild(e);else try{document.getElementsByClassName("progress-bar-line")[0].appendChild(e)}catch{}}async function fDislikes(){var e="",t=new URL(window.location.href);t.pathname.indexOf("shorts")>-1?e=t.pathname.substr(8,t.pathname.length):t.pathname.indexOf("watch")>-1&&(e=t.searchParams.get("v")),fetch("https://returnyoutubedislikeapi.com/votes?videoId="+e).then((e=>e.json())).then((e=>{"dislikes"in e&&(dislikes=getDislikesInLocale(parseInt(e.dislikes)))})).catch((e=>{}))}if(fDislikes(),window.location.pathname.indexOf("watch")>-1){fetch("https://sponsor.ajay.app/api/skipSegments?videoID="+new URLSearchParams(window.location.search).get("v")).then((e=>e.json())).then((e=>{for(var t in e){var n=e[t].segment;sTime.push(n)}})).catch((e=>{}));var unV=setInterval((()=>{document.getElementsByClassName("video-stream")[0].muted=!1,document.getElementsByClassName("video-stream")[0].muted||clearInterval(unV)}),5);document.getElementsByClassName("video-stream")[0].ontimeupdate=()=>{var e=document.getElementsByClassName("video-stream")[0].currentTime;for(var t in sTime){var n=sTime[t];Math.floor(e)==Math.floor(n[0])&&"true"==localStorage.getItem("autoSpn")&&(document.getElementsByClassName("video-stream")[0].currentTime=n[1],addSkipper(n[0]))}};try{document.getElementsByTagName("ytm-paid-content-overlay-renderer")[0].style.display="none"}catch{}setInterval(skipSponsor,50)}function addSkipper(e){var t=document.createElement("div");t.setAttribute("style",`\nheight:50px;${screen.width>screen.height?"width:50%;":"width:80%;"}overflow:auto;background:rgba(130,130,130,.3);\nbackdrop-filter:blur(6px);\nposition:absolute;bottom:40px;\nline-height:50px;\nleft:calc(15% / 2 );padding-left:10px;padding-right:10px;\nz-index:99999999999999;text-align:center;border-radius:25px;\ncolor:white;text-align:center;\n`),t.innerHTML=`<span style="height:30px;line-height:30px;margin-top:10px;display:block;font-family:monospace;font-size:16px;float:left;">Vivekfy active</span>\n<span style="height:30px;line-height:44px;float:right;padding-right:30px;margin-top:10px;display:block;padding-left:30px;border-left:1px solid #15E2F5;">\n<svg onclick="this.parentElement.parentElement.remove();document.getElementsByClassName('video-stream')[0].currentTime=${e+1};" xmlns="http://www.w3.org/2000/svg" width="23" height="23" style="margin-top:0px;" fill="#15E2F5" viewBox="0 0 16 16">\n<path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>\n<path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>\n</svg>\n<svg onclick="this.parentElement.parentElement.remove();" xmlns="http://www.w3.org/2000/svg" width="20" height="20" style="margin-left:30px;" fill="#f24" class="bi bi-x-circle-fill" viewBox="0 0 16 16">\n<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>\n</svg>\n</span>`,document.getElementById("player-control-container").appendChild(t),setTimeout((()=>{t.remove()}),5e3)}function sty(e,t){var n={display:"flex",alignItems:"center",justifyContent:"center",fontWeight:"550",height:"65%",width:"80px",borderRadius:"20px",background:d,fontSize:"12px",marginRight:"5px",textAlign:"center"};for(x in n)e.style[x]=n[x]}function formatFileSize(e){var t=parseInt(e);for(var n=0;t>1024;n++)t/=1024;return` | ${t.toFixed(1)} ${["B","KB","MB","GB","TB","PB"][n]}`}async function getSize(e){const t=await fetch(e,{method:"HEAD"});try{document.querySelectorAll(`[data-vivekmasonaurl="${e}"]`)[0].children[1].innerHTML+=formatFileSize(t.headers.get("Content-Length"))}catch{}}async function vivekmasonaSettings(){var e=document.createElement("div"),t=document.createElement("div");e.setAttribute("id","settingsprodiv"),t.setAttribute("id","ssprodivI"),e.setAttribute("style","\nheight:100%;width:100%;position:fixed;top:0;left:0;\ndisplay:flex;justify-content:center;\nbackground:rgba(0,0,0,0.7);\nz-index:9999;\n"),e.addEventListener("click",(function(e){e.target==t||t.contains(e.target)||history.back()})),t.setAttribute("style","\nheight:50%;width:85%;overflow:auto;background:#212121;\nposition:absolute;bottom:20px;\nz-index:99999999999999;padding:20px;text-align:center;border-radius:25px;color:red;text-align:center;\n"),t.innerHTML="<style>\n#settingsprodiv a{text-decoration:underline;color:red;} #settingsprodiv li{list-style:none; display:flex;align-items:center;justify-content:center;color:#fff;border-radius:25px;padding:10px;background:#000;margin:5px;}\n#ssprodivI div{\nheight:10px;\nwidth:calc(100% - 20px);\npadding:10px;\nfont-size:16px;\nfont-family:monospace;\ntext-align:left;\ndisplay:block;\n}\n#ssprodivI div span{\ndisplay:block;\nheight:15px;\nwidth:30px;\nborder-radius:20px;\nfloat:right;\nposition:relative;\nbackground:rgba(255,0,0,.5);\n}\n#ssprodivI div span b{\ndisplay:block;\nheight:20px;\nwidth:20px;\nposition:absolute;\nright:-6px;\ntop:-2px;\nborder-radius:50px;\nbackground:rgba(255,0,0,5);\n}\n#ssprodivI div input::placeholder{color:white;}\n#ssprodivI div input,#ssprodivI div button{\nheight:30px;\nbackground:rgba(255,255,255,.1);\nwidth:100%;\nborder:0;\nborder-radius:20px;\npadding:10px;\nfont-size:14px;\n}\n#ssprodivI div button{\nbackground:linear-gradient(90deg,#0f8,#0aa);\nfont-size:14px;\nwidth:47%;\nborder-radius:10px;\npadding:0;\ncolor:black;\n}\n\n</style>",t.innerHTML+=`<b style='font-size:18px' ><font color=#15E2F5>VFyTUBE Settings</b>\n<span style="font-size:10px">v${vivekmasonaVer}</span>\n<br><br>\n<div><input type="url" placeholder="VFY:-Enter Youtube URL" onkeyup="searchUrl(this,event)"></div>\n<br>\n<div style="text-align:center" ></div>\n<br>\n<div><font color=#15E2F5>Sponsors blocker<span onclick="sttCnf(this,'autoSpn');" style="${sttCnf(0,0,"autoSpn")}" ><b style="${sttCnf(0,1,"autoSpn")}"></b></span></div>\n<br>\n<div><font color=#15E2F5>Zoom mode<span onclick="sttCnf(this,'fzoom');" style="${sttCnf(0,0,"fzoom")}" ><b style="${sttCnf(0,1,"fzoom")}" ></b></span></div> \n<br>\n<div style="display:flex;justify-content:center;font-family:Bungee;text-align:center;font-size:22px;font-weight:bolder;color:#15E2F5;">Developer\n<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="#f00" style="margin:6px;margin-top:5px" viewBox="0 0 16 16">\n<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>\n</svg>vivek_masona</div>\n<br><br>\n<div style="font-size:13px;"><b style="font-weight:bold">VFyTUBE</b>: Lite And Adfree YouTube <br>\Copy Link Download____<a href="#" onclick="Android.oplink('https://vfyupdate.netlify.app/vfydl/')" ><font color=#f00>Download Now</a>\n<br><br><center>\n<a href="#" onclick="Android.oplink('https://vfyupdate.netlify.app/')" >Cheak Update</a>\n</center></div>`,document.body.appendChild(e),e.appendChild(t)}function searchUrl(e,t){console.log(t),13!==t.keyCode&&"Enter"!==t||(window.location.href=e.value)}function sttCnf(e,t,n){if("string"==typeof n)return"false"==localStorage.getItem(n)?1==t?"background:rgba(255,255,255,.7);left:-6px;":"background:rgba(255,255,255,.1)":1==t?"background:rgba(255,0,0,7);left:auto;right:-6px;":"background:rgba(255,0,0,.5)";"true"==localStorage.getItem(t)?(localStorage.setItem(t,"false"),e.style.background="rgba(255,255,255,.1)",e.children[0].style.left="-6px",e.children[0].style.background="rgba(255,255,255,.7)"):(localStorage.setItem(t,"true"),e.style.background="rgba(255,0,0,.5)",e.children[0].style.left="auto",e.children[0].style.right="-6px",e.children[0].style.background="rgba(255,0,0,7)"),"false"==localStorage.getItem("fzoom")?document.getElementsByName("viewport")[0].setAttribute("content","width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no,"):document.getElementsByName("viewport")[0].setAttribute("content","")}async function vivekmasonaDownVid(){var e=document.createElement("div"),t=document.createElement("div");if(t.setAttribute("id","downvivekmasonadiv"),e.setAttribute("id","outerdownvivekmasonadiv"),e.setAttribute("style","\nheight:100%;width:100%;position:fixed;top:0;left:0;\ndisplay:flex;justify-content:center;\nbackground:rgba(0,0,0,0.7);\nz-index:99999999999999;\n"),e.addEventListener("click",(function(e){e.target!=t&&history.back()})),t.setAttribute("style","\nheight:50%;width:85%;overflow:auto;background:#15E2F5;\nposition:absolute;bottom:20px;\nz-index:99999999999999;padding:20px;text-align:center;border-radius:25px;color:white;text-align:center;\n"),t.innerHTML="<style>#downvivekmasonadiv a{text-decoration:none;color:white;} #downvivekmasonadiv li{list-style:none; display:flex;align-items:center;justify-content:center;color:#fff;border-radius:25px;padding:10px;background:#000;margin:5px;}</style>",t.innerHTML+="Vfy Avilable Formats<ul id='listurl'>",document.body.appendChild(e),e.appendChild(t),window.location.pathname.indexOf("shorts")>-1){t.innerHTML="Loading...";var n=await fetch("https://vivekfy.deno.dev/video?id="+window.location.pathname.substr(8,window.location.pathname.length));n=await n.json();var i=n.video.thumbnail?.thumbnails,a=n.stream.formats,r=n.stream.adaptiveFormats,o=n.video.title.replaceAll("|","").replaceAll("\\","").replaceAll("?","").replaceAll("*","").replaceAll("<","").replaceAll("/","").replaceAll(":","").replaceAll('"',"").replaceAll(">","");for(var l in t.innerHTML="<style>#downvivekmasonadiv a{text-decoration:none;color:white;} #downvivekmasonadiv li{list-style:none; display:flex;align-items:center;justify-content:center;color:#fff;border-radius:25px;padding:10px;background:#000;margin:5px;}</style>",t.innerHTML+="Vfy Avilaible Formats<ul id='listurl'>",a)t.innerHTML+=`<li data-vivekmasonatit="${o}"  style="background:#001;"  onclick="YTDownVid(this,'.mp4')"  data-vivekmasonaurl="${a[l].url}">\n${downBtn}<span style="margin-left:10px;"  >${a[l].qualityLabel} </span></li>`,getSize(a[l].url);for(l in r)r[l].mimeType.indexOf("audio")>-1&&(t.innerHTML+=`<li data-vivekmasonatit="${o}"  onclick="YTDownVid(this,'.mp3')"  data-vivekmasonaurl="${r[l].url}">\n${downBtn}<span style="margin-left:10px;"  >Audio${formatFileSize(r[l].contentLength)} \n</span></li>`);for(l in t.innerHTML+="<br><font color=#000>Vfy Thumbnails<br><br><style>.thu{height:80px;border-radius:10px;}.thu img{max-height:97%;max-width:70%;border-radius:10px;border:1px solid silver;}</style>",i)t.innerHTML+=`<li data-vivekmasonatit="${o+Date.now()}"  onclick="YTDownVid(this,'.png')" class="thu" data-vivekmasonaurl="${i[l].url}">\n<img src="${i[l].url}"><br>\n<span style="margin-left:30px;display:flex;align-items:center;justify-content:center;"  >${downBtn}<span style="margin-left:10px;"  >${i[l].height} &#x2715; ${i[l].width}\n</span></span></li>`}else if("ytplayer"in window){o=ytplayer.config.args.title.replaceAll("|","").replaceAll("\\","").replaceAll("?","").replaceAll("*","").replaceAll("<","").replaceAll("/","").replaceAll(":","").replaceAll('"',"").replaceAll(">","");var s=ytplayer.config.args.raw_player_response.streamingData.formats,d=ytplayer.config.args.raw_player_response.streamingData.adaptiveFormats;i=ytplayer.config.args.raw_player_response.videoDetails.thumbnail?.thumbnails;for(l in s)"signatureCipher"in s[l]?(t.innerHTML+=`<li data-vivekmasonatit="${o}" style="background:#001;"  onclick="YTDownVid(this,'.mp4')"  data-vivekmasonaurl="${vivekmasonaGetURL(s[l].signatureCipher)}">\n${downBtn}<span style='margin-left:10px;'  >${s[l].qualityLabel}\n</span></li>`,getSize(vivekmasonaGetURL(s[l].signatureCipher))):(t.innerHTML+=`<li data-vivekmasonatit="${o}"  style="background:#001;"  onclick="YTDownVid(this,'.mp4')"  data-vivekmasonaurl="${s[l].url}">\n${downBtn}<span style="margin-left:10px;"  >${s[l].qualityLabel} </span></li>`,getSize(s[l].url));for(l in d)d[l].mimeType.indexOf("audio")>-1&&("signatureCipher"in d[l]?t.innerHTML+=`<li data-vivekmasonatit="${o}"  onclick="YTDownVid(this,'.mp3')"  data-vivekmasonaurl="${vivekmasonaGetURL(d[l].signatureCipher)}">\n${downBtn}<span style='margin-left:10px;'  >Audio${formatFileSize(d[l].contentLength)}\n</span></li>`:t.innerHTML+=`<li data-vivekmasonatit="${o}"  onclick="YTDownVid(this,'.mp3')"  data-vivekmasonaurl="${d[l].url}">\n${downBtn}<span style="margin-left:10px;"  >Audio${formatFileSize(d[l].contentLength)} \n</span></li>`);if(null!=i)for(l in t.innerHTML+="<br><font color=#000>Vfy Thumbnails<br><br><style>.thu{height:80px;border-radius:10px;}.thu img{max-height:97%;max-width:70%;border-radius:10px;border:1px solid silver;}</style>",i)t.innerHTML+=`<li data-vivekmasonatit="${o+Date.now()}"  onclick="YTDownVid(this,'.png')" class="thu" data-vivekmasonaurl="${i[l].url}">\n<img src="${i[l].url}"><br>\n<span style="margin-left:30px;display:flex;align-items:center;justify-content:center;"  >${downBtn}<span style="margin-left:10px;"  >${i[l].height} &#x2715; ${i[l].width}\n</span></span></li>`}else alert("AN ERROR OCCURED , PLEASE UPDATE VFyTube")}function YTDownVid(e,t){var n="";".png"==t?n="image/png":".mp4"==t?n="video/mp4":".mp3"==t&&(n="audio/mp3"),Android.downvid(e.getAttribute("data-vivekmasonatit")+t,e.getAttribute("data-vivekmasonaurl"),n)}function pkc(){if(window.location.href.indexOf("youtube.com/watch")>-1){try{var e=document.getElementsByTagName("ytm-segmented-like-dislike-button-renderer")[0].getElementsByTagName("ytm-toggle-button-renderer")[1];e.children[0].children[0].style.position="absolute",e.children[0].children[0].style.left="10px",e.children[0].style.width="80px",null==e.children[0].children[1]?e.children[0].innerHTML+=`<span style="margin-left:20px">${dislikes}<span>`:(e.children[0].children[1].innerHTML=dislikes,e.children[0].children[1].style.marginLeft="20px")}catch{}if(null==document.getElementById("vivekmasonaMainDivE")){var t=document.createElement("div");t.setAttribute("id","vivekmasonaMainDivE"),t.setAttribute("style","\nheight:50px;width:100%;display:block;overflow:auto;\n"),insertAfter(document.getElementsByClassName("slim-video-action-bar-actions")[0],t);var n=document.createElement("div");n.setAttribute("style","\nheight:50px;width:130%;display:flex;overflow:auto;\nalign-items:center;justify-content:center;padding-left:20px;padding-right:20px;\n"),t.appendChild(n);var i=document.createElement("div");sty(i),isHeart()?i.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#15E2F5" viewBox="0 0 16 16">\n<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>\n</svg><span style="margin-left:8px">vivekfy<span>':i.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#15E2F5" viewBox="0 0 16 16">\n<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>\n</svg><span style="margin-left:8px"><font color=#15E2F5>vivekfy<span>`,n.appendChild(i),i.addEventListener("click",(()=>{vivekmasonaHeart(i)}));var a=document.createElement("div");sty(a),a.style.width="110px",a.innerHTML=`${downBtn}<span style="margin-left:8px"><font color=#15E2F5>Download<span>`,n.appendChild(a),a.addEventListener("click",(function(){window.location.hash="download"}));var r=document.createElement("div");sty(r),r.style.width="110px",r.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#15E2F5"  viewBox="0 0 16 16">\n<path d="M0 3.5A1.5 1.5 0 0 1 1.5 2h13A1.5 1.5 0 0 1 16 3.5v9a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 12.5v-9zM1.5 3a.5.5 0 0 0-.5.5v9a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-9a.5.5 0 0 0-.5-.5h-13z"/>\n<path d="M8 8.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1-.5-.5v-3z"/>\n</svg>\n<span style="margin-left:8px"><font color=#15E2F5>PIP Mode<span>`,n.appendChild(r),r.addEventListener("click",(function(){isAP=!1,PIPlayer2()}));var o=document.createElement("div");sty(o),o.style.width="110px",o.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#15E2F5" class="bi bi-box-arrow-in-down-right" viewBox="0 0 16 16">\n<path fill-rule="evenodd" d="M6.364 2.5a.5.5 0 0 1 .5-.5H13.5A1.5 1.5 0 0 1 15 3.5v10a1.5 1.5 0 0 1-1.5 1.5h-10A1.5 1.5 0 0 1 2 13.5V6.864a.5.5 0 1 1 1 0V13.5a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5v-10a.5.5 0 0 0-.5-.5H6.864a.5.5 0 0 1-.5-.5z"/>\n<path fill-rule="evenodd" d="M11 10.5a.5.5 0 0 1-.5.5h-5a.5.5 0 0 1 0-1h3.793L1.146 1.854a.5.5 0 1 1 .708-.708L10 9.293V5.5a.5.5 0 0 1 1 0v5z"/>\n</svg>\n<span style="margin-left:8px"><font color=#15E2F5>Minimize<span>',n.appendChild(o),o.addEventListener("click",(function(){var e=document.createElement("div");e.setAttribute("style","\nheight:118px;width:182px;background:rgba(21,226,246,.3);\nbackdrop-filter:blur(6px);\nposition:absolute;bottom:40px;\nline-height:50px;position:fixed;\nbottom:50px;\nleft:calc(5% / 2);padding-right:20px;\nz-index:99999999999999;text-align:center;border-radius:5px;\ncolor:white;text-align:center;\n"),e.innerHTML='<span style="height:30px;position:absolute;right:-10px;top:-15px;display:block;z-index:999999999999999999;">\n<svg onclick="this.parentElement.parentElement.remove();" xmlns="http://www.w3.org/2000/svg" width="20" height="20" style="margin-left:30px;" fill="#15E2F5" viewBox="0 0 16 16">\n<path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"/>\n</svg>\n</span>';var t=document.createElement("video");t.setAttribute("style","position:fixed;top:5px;left:5px;height:108px;width:192px;z-index:999;"),t.setAttribute("controls","");var n=ytplayer.config.args.raw_player_response.streamingData.formats;"signatureCipher"in n[0]?t.src=vivekmasonaGetURL(n[0].signatureCipher):t.src=n[0].url,t.currentTime=document.getElementsByClassName("video-stream")[0].currentTime,e.appendChild(t),t.play(),document.body.appendChild(e),history.pushState({},"","https://m.youtube.com/"),history.pushState({},"","https://m.youtube.com/"),history.back()}));var l=document.createElement("div");sty(l),l.style.width="90px",l.innerHTML=`\n<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#15E2F5" viewBox="0 0 16 16">\n<path fill-rule="evenodd" d="M8.5 2a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-1 0v-11a.5.5 0 0 1 .5-.5zm-2 2a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zm-6 1.5A.5.5 0 0 1 5 6v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm8 0a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm-10 1A.5.5 0 0 1 3 7v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5zm12 0a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0V7a.5.5 0 0 1 .5-.5z"/>\n</svg>\n<span style="margin-left:8px"><font color=#15E2F5>Audio<span>`,n.appendChild(l),l.addEventListener("click",(function(){vivekmasonaAudPlayer()})),""==vivekmasonaf1.length&&""==vivekmasonav1.length?(l.style.opacity=".5",l.style.pointerEvents="none",a.style.opacity=".5",a.style.pointerEvents="none"):""!=vivekmasonaf1.length&&""!=vivekmasonav1.length&&(l.style.opacity="1",l.style.pointerEvents="auto",a.style.opacity="1",a.style.pointerEvents="auto")}if(ytoldV!=new URLSearchParams(window.location.search).get("v")){try{document.getElementById("vivekmasonaMainAudDivE").remove()}catch{console.log("No Element Found")}isAPlaying=!1,ytoldV=new URLSearchParams(window.location.search).get("v"),window.location.href=window.location.href}}else if(window.location.href.indexOf("youtube.com/shorts")>-1){if(null==document.getElementById("vivekmasonaMainSDivE")){var s=document.createElement("div");s.setAttribute("id","vivekmasonaMainSDivE"),s.setAttribute("style","\nheight:50px;width:50px;text-align:center;line-height:65px;display:block;overflow:auto;\nbackground:rgba(21,226,245,.4);border-radius:50%;position:absolute;right:10px;bottom:430px;\n"),s.innerHTML=downBtn.replace('width="16" height="16"','width="23" height="23"'),s.addEventListener("click",(function(){window.location.hash="download"})),insertAfter(document.getElementsByClassName("carousel-wrapper")[0],s)}try{document.querySelectorAll('[aria-label="Dislike this video"]')[0].nextElementSibling.children[0].innerHTML=dislikes}catch{}document.getElementsByClassName("video-stream")[0].paused?null!=document.getElementById("vivekmasonaMainSDivE")&&(document.getElementById("vivekmasonaMainSDivE").style.bottom="460px"):null!=document.getElementById("vivekmasonaMainSDivE")&&(document.getElementById("vivekmasonaMainSDivE").style.bottom="430px"),ytoldV!=window.location.pathname&&(fDislikes(),ytoldV=window.location.pathname)}}function vivekmasonaHeart(e){var t=new URLSearchParams(window.location.search).get("v");if(localStorage.getItem("vids")?.indexOf(t)>-1){var n=localStorage.getItem("vids");n=n.substr(0,n?.indexOf(t)-1)+n.substr(n?.indexOf(t)+t.length,n.length),localStorage.setItem("vids",n),e.innerHTML=`<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#15E2F5" viewBox="0 0 16 16">\n<path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z"/>\n</svg><span style="margin-left:8px"><font color=#15E2F5>Vivekfy<span>`}else localStorage.setItem("vids",localStorage.getItem("vids")+","+new URLSearchParams(window.location.search).get("v")),e.innerHTML='<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#15E2F5" viewBox="0 0 16 16">\n<path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"/>\n</svg><span style="margin-left:8px"><font color=#15E2F5>TQ Jee<span>'}function isHeart(){return localStorage.getItem("vids")?.indexOf(new URLSearchParams(window.location.search).get("v"))>-1}function removePIP(){isF||document.getElementsByClassName("fullscreen-icon")[0].click(),isAP=!1}function PIPlayer(){0==isAP&&PIPlayer1()}function PIPlayer1(){try{document.getElementById("vivekmasonaMainAudDivE").remove()}catch{console.log("No Element Found")}if(isF=window.innerWidth==screen.width&&window.innerHeight==screen.height,!document.getElementsByClassName("video-stream")[0].paused){isF||document.getElementsByClassName("fullscreen-icon")[0].click(),Android.pipvid("pip");var e=0,t=setInterval((()=>{10==(e+=1)&&clearInterval(t),document.getElementsByClassName("video-stream")[0].play()}),10)}}function PIPlayer2(){try{document.getElementById("vivekmasonaMainAudDivE").remove()}catch{console.log("No Element Found")}isF=window.innerWidth==screen.width&&window.innerHeight==screen.height,isHPIP=!1,Android.pipvid("pip"),isF||document.getElementsByClassName("fullscreen-icon")[0].click(),document.getElementsByClassName("video-stream")[0].play()}function vivekmasonaAudPlayer(){var e="",t="";if("ytplayer"in window){for(x in ytplayer.config.args.raw_player_response.streamingData.adaptiveFormats)"140"==ytplayer.config.args.raw_player_response.streamingData.adaptiveFormats[x].itag&&("signatureCipher"in ytplayer.config.args.raw_player_response.streamingData.adaptiveFormats[x]?(e=ytplayer.config.args.title,t=vivekmasonaGetURL(ytplayer.config.args.raw_player_response.streamingData.adaptiveFormats[x].signatureCipher)):(e=ytplayer.config.args.title,t=ytplayer.config.args.raw_player_response.streamingData.adaptiveFormats[x].url));try{document.getElementById("vivekmasonaMainAudDivE").remove()}catch{console.log("No Element Found")}var n=document.createElement("div"),i=document.createElement("audio"),a=document.createElement("div");n.style.position="fixed",n.style.bottom="0",n.style.left="0",n.style.zIndex="99999999999",n.style.height="70px",n.style.width="100%",n.style.background="#15E2F5",n.setAttribute("id","vivekmasonaMainAudDivE"),a.style.position="absolute",a.style.left="0px",a.style.height="40px",a.style.width="40px",a.style.background="#15E2F5",n.style.borderTop="3px solid #000",a.style.borderTop="3px solid #000",a.style.borderRight="3px solid #000",a.style.position="absolute",a.style.top="-43.25px",a.style.color="#000",a.style.textAlign="center",a.innerHTML="&#x2715;",a.style.fontSize="20px",i.style.position="absolute",i.style.top="-20px",i.style.left="0",i.style.height="80px",i.style.width="100%",n.innerHTML+="<style>audio::-webkit-media-controls-panel{background:#15E2F5;}</style>",i.setAttribute("id","vivekmasonaaudss"),i.controls=!0,i.src=t,document.body.appendChild(n),n.appendChild(i),n.appendChild(a),document.getElementsByClassName("video-stream")[0].pause(),a.addEventListener("click",(function(){isAP=!1,this.parentElement.remove()})),i.onloadeddata=function(){i.play(),isAP=!0,Android.showToast("Now Playing \n"+e),console.log(Android.gohome("ok"))},i.addEventListener("timeupdate",(function(){i.currentTime==i.duration&&(window.location.href="https://m.youtube.com"+document.getElementsByTagName("lazy-list")[1].children[1].children[0].children[0].getAttribute("href")+"&auds=ab")}))}else alert("AN ERROR OCCURED , PLEASE UPDATE YT PRO")}setInterval(pkc,0),window.onhashchange=()=>{if("#download"==window.location.hash)vivekmasonaDownVid();else if("#settings"==window.location.hash)vivekmasonaSettings();else{try{document.getElementById("outerdownvivekmasonadiv").remove()}catch{}try{document.getElementById("settingsprodiv").remove()}catch{}}},window.onload=function(){var e=document.getElementsByClassName("video-ads ytp-ad-module"),t=document.getElementsByClassName("ytp-ad-player-overlay"),n=document.getElementsByClassName("ytp-ad-image-overlay"),i=document.getElementsByClassName("ytp-ad-text ytp-ad-skip-button-text"),a=document.getElementsByClassName("ytp-ad-text");function r(){if(i[0]&&i.length>0)for(let e=0;e<i.length;e++)i[e].click()}setInterval((function(){var i,o=document.getElementsByTagName("ad-slot-renderer");for(var l in o)try{o[l].remove()}catch{}e&&e.length>0&&(r(),i=function(){if(a&&a[2]&&a[2].innerHTML.includes("Ad")||a&&a[1]&&a[1].innerHTML.includes("Ad")||a&&a[0]&&a[0].innerHTML.includes("Ad")){r();let e=document.querySelectorAll("video");for(let t=0;t<e.length;t++)e[t]&&e[t].duration&&(e[t].currentTime=e[t].duration)}},t[0]&&t.length>0?t[0].style.visibility="hidden":n[0]&&n.length>0&&(n[0].style.visibility="hidden"),i())}),1),"ab"==new URLSearchParams(window.location.search).get("auds")&&vivekmasonaAudPlayer()};
//# sourceMappingURL=/sm/84e0ff84d88d54aab18b4af57b42e784f2a71b93018f27583fd3dc3c89d24003.map
