var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["ID"] = document.getElementById("ID").value;
    formData["curso"] = document.getElementById("curso").value;
    formData["descricao"] = document.getElementById("descricao").value;
    formData["prof"] = document.getElementById("prof").value;
    formData["aulas"] = document.getElementById("aulas").value;
    formData["imagem"] = document.getElementById("imagem").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("listacursos").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.ID;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.curso;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.descricao;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.prof;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = data.aulas;
    cell4 = newRow.insertCell(5);
    cell4.innerHTML = data.imagem;
    cell4 = newRow.insertCell(6);
    cell4.innerHTML = `<a onClick="onEdit(this)">Editar</a>
                       <a onClick="onDelete(this)">Excluir</a>`;
}

function resetForm() {
    document.getElementById("ID").value = "";
    document.getElementById("curso").value = "";
    document.getElementById("descricao").value = "";
    document.getElementById("prof").value = "";
    document.getElementById("aulas").value = "";
    document.getElementById("imagem").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("ID").value = selectedRow.cells[0].innerHTML;
    document.getElementById("curso").value = selectedRow.cells[1].innerHTML;
    document.getElementById("descricao").value = selectedRow.cells[2].innerHTML;
    document.getElementById("prof").value = selectedRow.cells[3].innerHTML;
    document.getElementById("aulas").value = selectedRow.cells[4].innerHTML;
    document.getElementById("imagem").value = selectedRow.cells[5].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.ID;
    selectedRow.cells[1].innerHTML = formData.curso;
    selectedRow.cells[2].innerHTML = formData.descricao;
    selectedRow.cells[3].innerHTML = formData.prof;
    selectedRow.cells[4].innerHTML = formData.aulas;
    selectedRow.cells[5].innerHTML = formData.imagem;
}

function onDelete(td) {
    if (confirm('Excluir o registro. Confirma ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("listacursos").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("curso").value == "") {
        isValid = false;
        document.getElementById("cursoValidationError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("cursoValidationError").classList.contains("hide"))
            document.getElementById("cursoValidationError").classList.add("hide");
    }
    return isValid;
}
