var edit=false;
function editar(nodo){

    if (edit == false) {

        edit = "true";

        var nodoHead = nodo.parentNode; //Fila del Encabezado - No se modifica
        var nodoBody = nodoHead.parentNode; //Fila de la información - Si se modifica
        var nodoForm = document.getElementById('Form'); // Me recoge la informacion que ingrese en el nodoBody
        var nodosmod = nodoBody.getElementsByTagName('td'); //A cada columna le asigno un numero de nodo
        
        var alimento = nodosmod[0].textContent; 
        var calorias = nodosmod[1].textContent;
        var grasas = nodosmod[2].textContent; 
        var proteina = nodosmod[3].textContent;
        var carbohidratos = nodosmod[4].textContent; 
        var ok = nodosmod[5].selectContent;
        var opciones = nodosmod[6].textContent;
        

        //Ingreso los nuevos valores para la fila seleccionada

        var nuevo = '<td><input type="text" name="alimento" id="alimento" value="'+alimento+'" size="9"></td>'+
        '<td><input type="text" name="calorias" id="calorias" value="'+calorias+'" size="3"></td>'+
        '<td><input type="text" name="grasas" id="grasas" value="'+grasas+'" size="3"></td>'+
        '<td><input type="text" name="proteina" id="proteina" value="'+proteina+'" size="3"></td>'+
        '<td><input type="text" name="carbohidratos" id="carbohidratos" value="'+carbohidratos+'" size="3"></td>' + 
        '<td><select id="ok" class="icons"><option value="0" disabled selected>Seleecione una opcion</option><option value="1" data-icon="happy.png">Bien</option><option value="2" data-icon="Sad.png">Mal</option></select></td>' + 
        '<td>En edición</td>';


        nodoBody.innerHTML = nuevo; //Se almacenan los nuevos cambios en la tabla


        //Botones para Aceotar o Cancelar los cambios hechos en la tabla
        nodoForm.innerHTML = '<p style="text-align: right">Pulse ACEPTAR para guardar los cambios o CANCELAR para anularlos.</p>'+
        '<button type="submit" class="waves-effect waves-light btn-small text-align: right" onclick = "reset()"> Cancelar </button>' + 
        '<button type="submit" class="waves-effect waves-light btn-small text-align: right" style="margin-right: 15px" onclick = "submit()"> Aceptar </button>';
        }

        //Alerta de cuando se quiera editar 2 filas a la vez
        else {alert ('Solo se puede editar una línea. Recargue la página para poder editar otra');
    }
}

function reset(){
    window.location.reload(); //Recarga la página al oprimir la opción CANCELAR
  }

  function get(id){ 
    return document.getElementById(id).value //Recoge el ID de cada valor modificado
  }
  
  function submit(){
    const str = 'fin.html?alimento='; //URL del nuevo sitio y concatena los valores que recogió del GET 
    var enlace = str.concat(get("alimento"),'&calorias=',get("calorias"),'&grasas=',get("grasas"),'&proteina=',get("proteina"),'&carbohidratos=',get("carbohidratos"));
    window.location.href = enlace;
  }
