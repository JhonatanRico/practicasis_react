(this.webpackJsonppracticasis_react=this.webpackJsonppracticasis_react||[]).push([[0],{27:function(t,e,c){},39:function(t,e,c){"use strict";c.r(e);var i=c(1),r=c.n(i),o=c(21),s=c.n(o),a=(c(27),c(18)),n=c(6),d=c(7),l=c(11),j=c(10),p=(c(4),c(17)),h=c.n(p),g=(c(15),c.p+"static/media/perrito.592e73c6.png"),b=c(0),u=function(t){Object(l.a)(c,t);var e=Object(j.a)(c);function c(){return Object(n.a)(this,c),e.apply(this,arguments)}return Object(d.a)(c,[{key:"render",value:function(){return Object(b.jsx)("div",{className:"App-header",children:Object(b.jsx)("img",{src:g,class:"App-logo",alt:"Foto"})})}}]),c}(i.Component),O=u,x=c(40),m=c(41),f=c.p+"static/media/Pata-Pastor.c08a7e70.rar",v=function(t){return Object(b.jsxs)("div",{className:"App-listado",children:[Object(b.jsx)("h4",{children:"Mi Carrito"}),0===t.lista.length?Object(b.jsx)("p",{children:"No hay productos"}):Object(b.jsxs)("div",{children:[Object(b.jsx)("div",{children:Object(b.jsxs)("p",{children:["Total:$",t.total.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")," "]})}),Object(b.jsxs)(x.a,{striped:!0,bordered:!0,hover:!0,style:{verticalAlign:"middle"},children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Cantidad"}),Object(b.jsx)("th",{children:"Codigo"}),Object(b.jsx)("th",{children:"Descripcion"}),Object(b.jsx)("th",{children:"Descargas"}),Object(b.jsx)("th",{children:"Num Archivos"}),Object(b.jsx)("th",{})]})}),Object(b.jsx)("tbody",{children:t.lista.map((function(e,c){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.cantidad}),Object(b.jsx)("td",{children:e.codigo}),Object(b.jsx)("td",{children:e.descripcion}),Object(b.jsx)("td",{children:e.precio.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")}),Object(b.jsx)("td",{children:(e.cantidad*e.precio).toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")}),Object(b.jsx)("td",{children:Object(b.jsx)(m.a,{onClick:function(){return t.eliminar(e,c)},variant:"danger",children:"Eliminar"})}),Object(b.jsx)("a",{href:f,download:"Protesis.rar",children:Object(b.jsx)(m.a,{children:"Descarga"})})]},c)}))})]})]})]})};function y(t){return Object(b.jsxs)("div",{className:"App-producto",children:[Object(b.jsx)("h4",{children:"Productos"}),Object(b.jsxs)(x.a,{striped:!0,bordered:!0,hover:!0,style:{verticalAlign:"middle"},children:[Object(b.jsx)("thead",{children:Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Codigo"}),Object(b.jsx)("th",{children:"Descripcion"}),Object(b.jsx)("th",{children:"Imagen"}),Object(b.jsx)("th",{children:"Descargas"}),Object(b.jsx)("th",{})]})}),Object(b.jsx)("tbody",{children:t.ProductosLista.map((function(e,c){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:e.codigo}),Object(b.jsx)("td",{children:e.descripcion}),Object(b.jsx)("td",{children:Object(b.jsx)("img",{src:e.url,className:"App-descriptivo",alt:"logo"})}),Object(b.jsxs)("td",{children:["$",e.precio.toFixed(2).replace(/\d(?=(\d{3})+\.)/g,"$&,")]}),Object(b.jsx)("td",{children:Object(b.jsx)(m.a,{onClick:function(){return t.agregar(e)},variant:"success",children:"Cargar"})})]},c)}))})]})]})}var P=function(t){Object(l.a)(c,t);var e=Object(j.a)(c);function c(){var t;return Object(n.a)(this,c),(t=e.call(this)).agregar=function(e){var c,i=t.state.carrito.find((function(t){return t.codigo===e.codigo})),r=t.state.carrito;void 0!==i?(c={cantidad:i.cantidad+1,codigo:e.codigo,descripcion:e.descripcion,precio:e.precio},r=t.state.carrito.filter((function(t){return t.codigo!==e.codigo})),console.log(r)):c={cantidad:1,codigo:e.codigo,descripcion:e.descripcion,precio:e.precio},t.setState({carrito:[].concat(Object(a.a)(r),[c]),total:t.state.total+e.precio}),h.a.fire({position:"center",icon:"success",title:"Archivo cargado exitosamente",showConfirmButton:!1,timer:1500})},t.eliminar=function(e,c){var i;if(1===e.cantidad)i=t.state.carrito.filter((function(t,e){return e!==c}));else{var r={cantidad:e.cantidad-1,codigo:e.codigo,descripcion:e.descripcion,precio:e.precio};i=t.state.carrito.filter((function(t,e){return e!==c})),i=[].concat(Object(a.a)(i),[r])}t.setState({carrito:i,total:t.state.total-e.precio}),h.a.fire({position:"center",icon:"warning",title:"Preparando archivo para su descarga",showConfirmButton:!1,timer:1500})},t.state={carrito:[],total:0,productosLista:[{codigo:1,descripcion:"Protesis 1",precio:0,url:"https://www.cbmwales.co.uk/wp-content/uploads/2017/05/1-cropped-.jpg"},{codigo:2,descripcion:"Protesis 2",precio:0,url:"https://studio.cults3d.com/pp0UGC2VNB4kfazcrN7c_vsLfvg=/516x516/https://files.cults3d.com/uploaders/15381432/illustration-file/cfce5151-6f82-4117-bb50-04cbe8ba3769/Pata-Pastor.png"},{codigo:3,descripcion:"Protesis 3",precio:0,url:"https://img1.yeggi.com/page_images_cache/3398083_dog-prosthesis-protesis-para-perros-by-sertroyer"},{codigo:4,descripcion:"Protesis 4",precio:0,url:"https://img1.yeggi.com/page_images_cache/1190888_dog-prosthetic-by-3designer27"},{codigo:5,descripcion:"Protesis 5",precio:0,url:"https://img1.yeggi.com/page_images_cache/593168_dog-leg-by-jonipilo"},{codigo:6,descripcion:"Protesis 6",precio:0,url:"https://img1.yeggi.com/page_images_cache/3785424_cat-prosthetic-leg-by-ouji58"}]},t}return Object(d.a)(c,[{key:"render",value:function(){var t=this.state.carrito.sort((function(t,e){return t.codigo-e.codigo}));return Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(O,{}),Object(b.jsxs)("div",{className:"App-celdas",children:[Object(b.jsx)(y,{ProductosLista:this.state.productosLista,agregar:this.agregar}),Object(b.jsx)(v,{lista:t,eliminar:this.eliminar,total:this.state.total,eliminarCarrito:this.eliminarCarrito}),Object(b.jsx)("title",{children:Object(b.jsx)("body",{children:Object(b.jsx)("a",{href:"https://lumiere-a.akamaihd.net/v1/images/stitch_16x9_9ac13651.png",download:"Protesis",target:"_Explorer.exe",children:Object(b.jsx)("button",{type:"button",children:"Descargar"})})})})]})]})}}]),c}(i.Component),_=function(t){t&&t instanceof Function&&c.e(3).then(c.bind(null,42)).then((function(e){var c=e.getCLS,i=e.getFID,r=e.getFCP,o=e.getLCP,s=e.getTTFB;c(t),i(t),r(t),o(t),s(t)}))};s.a.render(Object(b.jsx)(r.a.StrictMode,{children:Object(b.jsx)(P,{})}),document.getElementById("root")),_()},4:function(t,e,c){}},[[39,1,2]]]);
//# sourceMappingURL=main.092aff99.chunk.js.map