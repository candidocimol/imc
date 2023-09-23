document.querySelector("#calcular").onclick = ()=>{
	let peso = document.querySelector("#peso").value;
	let altura = document.querySelector("#altura").value;
	let imc = peso/(altura**2);
	let resultado = null;
	if(imc<18){
		resultado= "Muito magro!";
	}else if (imc>18 && imc<24.9){
		resultado= "Peso normal";
	}
	console.log(resultado);
	document.querySelector("#resultado").innerHTML="<h2>"+resultado+"</h2>";
};