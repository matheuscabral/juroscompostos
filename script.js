window.onload = init;

var buton;
var capitalinicial;
var capital;
var tempo;
var taxa;
var montante;
var porcent;
var n;
var cont;

function init(){
	
	buton=document.getElementById("enviar");
	buton.addEventListener('click',calculo);
}

function calculo(event){
	n=1;
	cont=0;
	document.getElementById("tabela").innerHTML='';
	capital=document.getElementById("c").value;
	capitalinicial=capital;
	tempo=document.getElementById("t").value;
	taxa=document.getElementById("i").value;
	while(tempo > cont){
		montante=capital*(1+(taxa/100));
		document.getElementById("tabela").innerHTML += n+' |'+virgula(capital)+' |'+virgula(montante)+'|<br/>';
		capital=montante;
		cont++;
		n++;
	}
	porcent=((montante*100)/capitalinicial)-100;
	document.getElementById("m").innerHTML=virgula(montante);
	document.getElementById("%").innerHTML=virgula(porcent)+'%';
}

function virgula(valor) { 
   var aux = Math.pow(10,2)
   return Math.floor(valor * aux)/aux
}