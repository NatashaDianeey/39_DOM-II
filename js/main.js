function validateForm(){
	/* Escribe tú código aquí */
	var nombre = document.getElementById('name').value;
	var apellido = document.getElementById('lastname').value;
	var contrasena = document.getElementById('input-password').value;
	var correo = document.getElementById('input-email').value;
	var seleccionar = document.querySelector("#selectoption").value;

	if(nombre === "" || apellido === "" || correo === "" || contrasena === "") {
		document.getElementById('errorError').style.background ='#ccffcc';
		alert('Falta llenar algun campo');
		return false;

	} else if (!/^[A-Z][a-z]*$/g.test(document.getElementById('name').value) ){
		alert('Unicamente la primera letra debe ser Mayuscula');
		return false;

	} else if (!/^[A-Z][a-z]*$/g.test(document.getElementById('lastname').value) ){
		alert('Unicamente la primera letra debe ser Mayuscula');
		return false;

	}else if (contrasena.length<6) {
		alert('La contrasena es muy corta');
		return false;

	} else if (contrasena === 'contraseña' || contrasena == 123456 || contrasena == 0987654) {
		alert('Esta contraseña no es permitida');
		return false;
	
	} else if (seleccionar == 0) {
		alert("Elige tu tipo de bici.");

	}
	
}