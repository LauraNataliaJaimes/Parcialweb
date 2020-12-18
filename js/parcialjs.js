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
        '<td><input type="select" name="ok" id="ok" value="'+ok+'" size="5"></td> <td>En edición</td>';

        nodoBody.innerHTML = nuevo;
        nodoBody.innerHTML = ((nodoHead.parentNode).parentNode).parentNode;

        nodoForm.innerHTML = '<p class="row right">Pulse Aceptar para guardar los cambios o cancelar para anularlos</p>'+
        '<p button type="submit" class="waves-effect waves-light btn-small row right" onclick="submit()">Aceptar</button></p> '+'<p button type="reset" class="waves-effect waves-light btn-small row right" onclick="reset()">Cancelar</button></p>';
     }

        else {alert ('Solo se puede editar una línea. Recargue la página para poder editar otra');
    }
}

function reset(){
    window.location.reload();
  }
  
  function getform(id){
    return document.getElementById('form').value
  }
  
  function getlist(id){
    var lista = document.getElementById('form');
    var valorSeleccionado = lista.options[lista.selectedIndex].value;
    return lista.options[lista.selectedIndex].text;
  }
