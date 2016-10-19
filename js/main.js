function validateForm(){

	
	var spans = document.getElementsByClassName('error');
    while(spans.length>0 ) {
    	spans[0].parentElement.removeChild(spans[0])
    };

    var nombre = document.getElementById('name').value;
	var apellido = document.getElementById('lastname').value;
	var contrasena = document.getElementById('input-password').value;
	var correo = document.getElementById('input-email').value;

			//NOMBRE
        if (nombre === "" || nombre == null || !/^[A-Z][a-z]*$/g.test(document.getElementById('name').value) ) {
            var mensajeValidoCon = document.createElement("span");
            mensajeValidoCon.setAttribute ("class", "error");
            mensajeValidoCon.innerHTML= "Ingrese Nombre."
			var boxBlack = document.getElementsByClassName("input-box")[0].appendChild(mensajeValidoCon);
			

			//APELLIDO
		} if (apellido === "" || apellido == null || !/^[A-Z][a-z]*$/g.test(document.getElementById('lastname').value) ){
			var mensajeValidoCon = document.createElement("span");
			mensajeValidoCon.setAttribute ("class", "error");
        	mensajeValidoCon.innerHTML= "Ingrese Apellido."
			var boxBlack = document.getElementsByClassName("input-box")[1].appendChild(mensajeValidoCon);
        }  
        	//CONTRASEÑA
        if (contrasena.length < 5 || contrasena == "123456" || contrasena =="password" || contrasena == "098754"){
        	var mensajeValidoCon = document.createElement("span");
        	mensajeValidoCon.setAttribute ("class", "error");
        	mensajeValidoCon.innerHTML= "Ingrese contraseña."
			var boxBlack = document.getElementsByClassName("input-box")[3].appendChild(mensajeValidoCon);

        } //CORREO
        var expr = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if (!expr.test(correo) ){
			if(correo == ""){
				var mensajeValidoCon = document.createElement("span");
				mensajeValidoCon.setAttribute ("class", "error");
				mensajeValidoCon.innerHTML= "Ingrese su correo."
				var boxBlack = document.getElementsByClassName("input-box")[2].appendChild(mensajeValidoCon);
	       }
	    }	//SELECCIONAR OPCIONES DE BICI
   		var seleccionar = document.querySelector("#selectoption").value;
        if ( seleccionar == 0){
            var mensajeValidoCon = document.createElement("span");
            mensajeValidoCon.setAttribute ("class", "error");
			mensajeValidoCon.innerHTML= "Selecciona una opción."
			var boxBlack = document.getElementsByClassName("input-box")[4].appendChild(mensajeValidoCon);
        }
    }

///////////Para quitar los spans despues de hacer submit al boton Registrar

    