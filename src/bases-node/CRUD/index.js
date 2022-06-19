    "use strict"
  
  // Transpilador: Útil para generar código soportable por el navegador
  // webpack
  // babel
  // browserify

  const { v4: uuidv4 } = require('uuid');

  const d = document
  const input_todo = d.getElementById("input-todo")
  const btn_add = d.getElementById("btn-add")
  const content_w = d.getElementById("content-wrapper")
  const URL = "http://localhost:3000/data"
  
const printTasks = (task, id) => {
    let li = d.createElement("li")
    li.dataset.id = id
    li.textContent = task
    const btn_1 = d.createElement("button")
    const btn_2 = d.createElement("button")
    btn_1.textContent = "Editar"
    btn_2.textContent = "Eliminar"
    btn_1.addEventListener("click", () => {
      putData(input_todo.value, id)
    })
    btn_2.addEventListener("click", () => {
      deleteData(id)
    })
    li.append(btn_1, btn_2)
    content_w.appendChild(li)

    // li.appendChild(btn_1) // Anidar el botón 1 dentro de la etiqueta li
    // li.appendChild(btn_2) //appendChild anexa un solo elemento, con .append se pueden recibir más pero se separan por comas

  }

  const getData = () => {
    fetch(URL)
      .then(response => response.json())
      .then(data => {
        data.forEach((element) => {
          printTasks(element.task, element.id)
        });
      })
      .catch(error => console.error(error))
  }
  getData()

  const postData = (task) => {
    fetch(URL, {
      method: "POST",
      //metadatos
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        "id" : uuidv4(),
        "task" : task
      })
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.error(error))
  }

const putData = (task, id) => {
  fetch(URL + "/" + id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json" 
    },
    body: JSON.stringify({ "task" : task })
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error))
}

const deleteData = (id) => {
  fetch(URL + "/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type" : "application/json"
    }
  })
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(console.error(error))
}


btn_add.addEventListener("click", () => {
    postData(input_todo.value)
  } )

