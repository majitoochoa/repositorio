const listaHistorial = document.getElementById("historial");
const tarea = document.getElementById("agregarTarea");
let historial = JSON.parse(localStorage.getItem("Historial")) || [];

function agregarTarea() {
    const nuevoTexto = tarea.value.trim();

    if (nuevoTexto !== "") {
        const nuevaTarea = {
            texto: nuevoTexto,
            completado: false
        };
        actualizarHistorial();
        guardarHistorial(nuevaTarea);
        tarea.value = "";
    } else {
        alert("Por favor, ingresa una tarea");
    }
}

function agregarTareaLista(tareaAgregar) {
    const nuevaTarea = document.createElement("li");
    nuevaTarea.className = "list-group-item d-flex justify-content-between align-items-center bg-light";

    const añadirCheckbox = document.createElement("input");
    añadirCheckbox.type = "checkbox";
    añadirCheckbox.classList.add("form-check-input", "me-2");
    añadirCheckbox.checked = tareaAgregar.completado;

    const label = document.createElement("label");
    label.textContent = tareaAgregar.texto;
    label.classList.add("form-check-label");
    if (tareaAgregar.completado) {
        label.classList.add("text-decoration-line-through");
    }

    añadirCheckbox.addEventListener("change", () => {
        tareaAgregar.completado = añadirCheckbox.checked;
        label.classList.toggle("text-decoration-line-through", añadirCheckbox.checked);
        guardarHistorial();
    });

    const eliminar = document.createElement("button");
    eliminar.className = "btn btn-outline-danger btn-sm";
    eliminar.textContent = "Eliminar";
    eliminar.addEventListener("click", () => eliminarTarea(nuevaTarea, tareaAgregar));

    nuevaTarea.appendChild(añadirCheckbox);
    nuevaTarea.appendChild(label);
    nuevaTarea.appendChild(eliminar);

    listaHistorial.appendChild(nuevaTarea);
}

function eliminarTarea(tareaEliminar, tareaAgregar) {
    listaHistorial.removeChild(tareaEliminar);
    historial = historial.filter(t => t.texto !== tareaAgregar.texto);
    guardarHistorial();
    actualizarHistorial();
}

function guardarHistorial(nuevaTarea) {
    if (nuevaTarea) {
        historial.push(nuevaTarea);
        agregarTareaLista(nuevaTarea);
    }
    localStorage.setItem("Historial", JSON.stringify(historial));
}

function actualizarHistorial() {
    listaHistorial.innerHTML = "";
    historial.forEach(agregarTareaLista);
}

window.onload = function() {
    actualizarHistorial();
};