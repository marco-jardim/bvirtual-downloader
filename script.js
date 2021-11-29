// ==UserScript==
// @name        Page Downloader - bvirtual.com.br
// @namespace   Violentmonkey Scripts
// @match       https://plataforma.bvirtual.com.br/Leitor/Publicacao/*
// @grant       none
// @version     1.0
// @author      -
// @description 28/11/2021 12:54:22
// ==/UserScript==


jQuery(document).ready(function() {
  jQuery("button.btn-print").click(function(e){
    e.preventDefault();
    var canvas = document.querySelector('#page-canvas');
    var page = jQuery("#insert-numeroPagina")[0].value;
    var title = jQuery(".footer__progress-pages")[0].innerText;
    var dataURL = canvas.toDataURL("image/jpeg", 1.0);
    //console.log(dataURL);
    console.log( title + "__" + page + '.jpg'); 
    downloadImage(dataURL, title + "__" + page + '.jpg');
  });   
});


// Save | Download image
function downloadImage(data, filename = 'untitled.jpeg') {
    var a = document.createElement('a');
    a.href = data;
    a.download = filename;
    document.body.appendChild(a);
    a.click();
}
