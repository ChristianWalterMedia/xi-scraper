(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))o(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function i(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerpolicy&&(r.referrerPolicy=n.referrerpolicy),n.crossorigin==="use-credentials"?r.credentials="include":n.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(n){if(n.ep)return;n.ep=!0;const r=i(n);fetch(n.href,r)}})();let d={};v(()=>{const t=document.createElement("button");t.innerText="Profilinformationen kopieren",t.onclick=m;const e=document.querySelector('*[data-qa="more-button"]');C(t,e)});function m(){x(),b(),S(),u(),p(),u(),E(JSON.stringify(d))}function p(){const e=document.querySelector('*[data-xds="IconLocationPin"]').parentNode.lastElementChild.textContent;a("city",e)}function h(t){const e=/(\d{0,2}) Jahr/g,i=t.matchAll(e);let o=[];for(const n of i)o.push(Number(n[1])*12);return o}function y(t){const e=/(\d{0,2}) Monat/g,i=t.matchAll(e);let o=[];for(const n of i)o.push(Number(n[1]));return o}function u(){const e=[...document.getElementById("ProfileTimelineModule").querySelectorAll('*[data-xds="Headline"]')].filter(l=>l.innerText.includes("Berufliche Stationen")).at(0),i=[...e.parentNode.querySelectorAll(":scope > div")],o=[...e.parentNode.nextSibling.querySelectorAll('*[data-qa="bucket"]:first-child > div')];let n=[];i.forEach(l=>{n.push(l.querySelector('p[data-xds="BodyCopy"]').nextElementSibling.innerText)}),o.forEach(l=>{n.push(l.querySelector('p[data-xds="BodyCopy"]').nextElementSibling.innerText)});const r=h(n.join(" ")),c=y(n.join(" ")),s=r.concat(c).reduce((l,f)=>l+f,0);a("expirience",g(s))}function g(t){function e(s,l){return s===1&&l.one||l.other}var i={one:"Monat",other:"Monate"},o={one:"Jahr",other:"Jahre"},n=t%12,r=Math.floor(t/12),c=[];return r&&c.push(r+" "+e(r,o)),n&&c.push(n+" "+e(n,i)),c.join(" und ")}function b(){const e=[...document.querySelectorAll("h2")].filter(i=>i.textContent.includes("Gehaltsvorstellung"));if(e.length>0){const o=e[0].nextElementSibling.textContent;a("salary",o)}else a("salary","Nicht angegeben")}function x(){const e=document.querySelector('#XingIdModule *[data-xds="Hero"]').innerText.replace(/<(.|\n)*?>/g,"").split(`
`)[0].trim().split(" ");let i=e.pop(),o=typeof e=="string"?e:e.join(" ");a("firstname",o),a("lastname",i)}function S(){const t=document.querySelector('#XingIdModule *[data-xds="Hero"]').parentElement.nextElementSibling.querySelector("section p").textContent.split(",");let e=t[1];t.includes("Student")&&(e=t[0]+" "+t[1]),a("currentJob",e.trim())}function a(t,e){d[t]=e}function C(t,e){e&&e.parentNode&&e.parentNode.insertBefore(t,e.nextSibling)}function v(t){document.readyState==="complete"||document.readyState==="interactive"?setTimeout(t,1500):document.addEventListener("DOMContentLoaded",t)}typeof Element.prototype.clearChildren>"u"&&Object.defineProperty(Element.prototype,"clearChildren",{configurable:!0,enumerable:!1,value:function(){for(;this.firstChild;)this.removeChild(this.lastChild)}});function A(t){var e=document.createElement("textarea");e.value=t,document.body.appendChild(e),e.focus(),e.select();try{var i=document.execCommand("copy"),o=i?"successful":"unsuccessful";console.log("Fallback: Copying command was "+o)}catch(n){console.error("Fallback: Oops, unable to copy",n)}document.body.removeChild(e)}function E(t){if(!navigator.clipboard){A(t);return}navigator.clipboard.writeText(t).then(function(){console.log("Async: Copying to clipboard was successful!")},function(e){console.error("Async: Could not copy text: ",e)})}
