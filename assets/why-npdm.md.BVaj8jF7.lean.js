import{_ as r,D as o,c as i,b as n,w as e,a1 as s,a2 as l,o as a,I as p,a as c}from"./chunks/framework.C7HvT0Sn.js";const A=JSON.parse('{"title":"Why NP(D)M?","description":"","frontmatter":{},"headers":[],"relativePath":"why-npdm.md","filePath":"why-npdm.md"}'),d={name:"why-npdm.md"},h=l("",10);function m(u,f,g,v,w,b){const t=o("Mermaid");return a(),i("div",null,[h,(a(),n(s,null,{default:e(()=>[p(t,{id:"mermaid-44",class:"mermaid",graph:"sequenceDiagram%0A%20%20participant%20app%20as%20Client%20App%0A%20%20participant%20versions%20as%20Feature%20Versioning%20API%0A%20%20participant%20server%20as%20NPDM%20Server%0A%20%20participant%20npm%20as%20NPM%20Artifactory%0A%20%20%0A%20%20app%20-%3E%3E%20versions%3A%20get%20actual%20module%20version%0A%20%20activate%20versions%0A%20%20versions%20--%3E%3E%20app%3A%20return%0A%20%20deactivate%20versions%0A%0A%20%20app%20-%3E%3E%20server%3A%20get%20particular%20remote%20version%0A%20%20activate%20server%0A%20%20server%20-%3E%3E%20npm%3A%20download%20NPM%20package%0A%20%20activate%20npm%0A%20%20npm%20--%3E%3E%20server%3A%20package%0A%20%20deactivate%20npm%0A%20%20server%20--%3E%20app%3A%20static%20assets%0A%20%20deactivate%20server%0A"})]),fallback:e(()=>[c(" Loading... ")]),_:1}))])}const y=r(d,[["render",m]]);export{A as __pageData,y as default};
