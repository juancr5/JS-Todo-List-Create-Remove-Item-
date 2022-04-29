document.addEventListener("DOMContentLoaded", function () {
  //Importar Elementos
  const btn = document.getElementById("add");
  const title = document.getElementById("title");
  const description = document.getElementById("description");
  const table = document.getElementById("table");
  const alert = document.getElementById("alert");
  let id = 1;

  /*
  //Mostrar por consola el resultado del campo titulo y descripcion
  btn.onclick = function () {
    console.log('Title:', title.value);
    console.log('Description:', description.value);
  };
  */

  function removeTodo(id) {
    document.getElementById(id).remove();
  }

  function addTodo() {
    //Validacion de los campos de titulo y descripcion
    if (title.value === "" || description.value === "") {
      alert.classList.remove("d-none");
      alert.innerText = "Title and description are requiered";
      return;
    }

    alert.classList.add("d-none");
    //Creacion del todo
    const row = table.insertRow();
    //Crear atributo id para identificar la fila creada
    row.setAttribute("id", id++);
    row.innerHTML = `
    <td>${title.value}</td>
    <td>${description.value}</td>
    <td class="text-center">
      <input type="checkbox">
    </td>

    <td class="text-right">
      <button class="btn btn-primary mb-1">
        <i class="fa fa-pencil"></i>
      </button>
    </td>

    `;

    const removeBtn = document.createElement("button");
    removeBtn.classList.add("btn", "btn-danger", "mb-1", "ml-1");
    removeBtn.innerHTML = '<i class="fa fa-trash"></i>';
    removeBtn.onclick = function (e) {
      removeTodo(row.getAttribute('id'));
    };
    //Insertar elemento en la columna 3 de la tabla
    row.children[3].appendChild(removeBtn);
  }

  btn.onclick = addTodo;
});
