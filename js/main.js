/* FUNCIÓN HAMBURGUESA*/
(function(){
    var burger = document.querySelector(".burger-container"),
        header = document.querySelector(".header");
    
    burger.onclick = function() {
        header.classList.toggle("menu-opened");
    }
}());

/* FUNCIÓN RELOJ DIGITAL*/

function relojDigital(){
	var Tiempo = new Date();
	var Hora = Tiempo.getHours();
	var Minutos = Tiempo.getMinutes();
	var Segundos = Tiempo.getSeconds();
	var amPm;

	var semana =["Domingo", "Lunes","Martes","Miércoles","Jueves","Viernes","Sábado"];
	var mes = ["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre"];
	var horaCompleta;

	if(Minutos < 10){
		Minutos = "0" + Minutos;
	}
	else{
		Minutos = "" + Minutos;
	}

	if(Segundos < 10){
		Segundos = "0" + Segundos;
	}
	else{
		Segundos = "" + Segundos;
	}

	if(Hora < 12){
		amPm = "am";
	}
	else{
		amPm = "pm";
	}

	if(Hora > 12){
		Hora -= 12;
	}
	else{
		Hora = Hora;
	}

	if(Hora == 0){
		Hora = 12;
	}
	else{
		Hora = Hora;
	}

	horaCompleta = Hora + ":"+ Minutos + ":" + Segundos + "" + amPm;
	$("#hora").html(horaCompleta);
	$("#fecha").html(semana[Tiempo.getDay()]+", " + Tiempo.getDate()+" " + mes[Tiempo.getMonth()]+" " + Tiempo.getFullYear());
}

$(document).ready(function(){
	setInterval(relojDigital, 1000);
	$(".region").on("click",horaRegion)
});


function horaRegion(){
	//Hora Regiones
 var regiones=[{region:"Chicago",
				diferencia:0},
			   {region:"Sao Paulo",
				diferencia:2},
			   {region:"Santiago", 
				diferencia:1},
			   {region:"Mexico D.F",
				diferencia:0},
			   {region:"Caracas",
				diferencia:1},
			   {region:"Brasilia",
				diferencia:2},
			   {region:"Quito",
				diferencia:0},
			   {region:"Guayaquil",
				diferencia:0},
			   {region:"Santa Marta",
				diferencia:0},
			   {region:"Bogotá",
				diferencia:0}]		
	var fecha = new Date();
	var checked=this.checked
	var index=parseInt(this.value)
	if(checked){
		hora=fecha.getHours()+regiones[index].diferencia
 		if(hora>=24)
 			hora=hora-24
 		if(hora<10)
 		hora="0"+hora
		minutos=fecha.getMinutes()
		if(minutos<10)
 		minutos="0"+minutos
		segundos=fecha.getSeconds()
		if(segundos<10)
 		segundos="0"+segundos
		$("#otros").append("<div class='row"+index+"'><div class='col-xs-6'><span class='ciudad'>"+regiones[index].region+"</span></div><div class='col-xs-6'><span class='hora-ciudad'>"+hora+":"+minutos+":"+segundos+"</span></div></div>")
	}
	else $(".row"+index).remove()
}




/*
function horaInternacional(){
	var regiones = [
	{region:"Chicago"
	 diferencia:0},
	{region:"Sao Paulo"
	 diferencia:2},
	{region:"Santiago"
	 diferencia:1}
	{region:"México D.F"
	 diferencia:0},
	{region:"Caracas"
	 diferencia:1},
	{region:"Brasilia"
     diferencia:2},
    {region:"Quito"
	 diferencia:0},
	{region:"Guayaquil"
	 diferencia:0},
	{region:"San Marta"
	 diferencia:0},
	{region:"Bogota"
	 difencia:0}]
	var fecha = new Date();
	var checked=this.checked
	var indice=parseInt(this.value)
	if(cheked){
		hora = fecha.getHours()+regiones[index].diferencia
		if(hora>=24){
			hora=hora-24
		}
		if(hora<10){
			hora="0"+hora
		}

		minutos=fecha.getMinutes()
		if(minutos<10){
			minutos="0"+minutos
		}

		segundo=fecha.getSeconds()
		if(segundo<10){
			segundo="0"+segundo
		}
		$("#otros").append("<div class='row"+index+"'><div class='col-xs-6'><span class='ciudad'>"+regiones[index].region+"</span></div><div class='col-xs-6'><span class='hora-ciudad'>"+hora+":"+minutos+":"+segundos+"</span></div></div>")
	}
	else $(".row"+index).remove()
}*/


























