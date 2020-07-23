function calcularIMC() {
  var nombre = document.getElementById('nombre').value;
  var alturaEnCentimetros = parseInt(document.getElementById('altura').value);
  var alturaEnMetros = alturaEnCentimetros / 100;
  var pesoEnKilos = parseInt(document.getElementById('peso').value);

  var imc = Math.round(pesoEnKilos / (alturaEnMetros * alturaEnMetros));
  var clasificacion;
  
  if (imc < 18.5) {
    clasificacion = 'Estás muy delgado';
  } else if (imc < 25) {
    clasificacion = 'Estás saludable';
  } else {
    clasificacion = 'Tienes sobrepeso';
  }
  
  var respuesta = 'Hola '+nombre+', tu IMC es ' + imc + ' y tu ' + clasificacion;
  alert(respuesta);
}
