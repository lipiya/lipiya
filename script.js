function addRow() {
    const table = document.getElementById('dynamicTable').getElementsByTagName('tbody')[0];
    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;

    if (name && age) {
        const newRow = table.insertRow();
        const nameCell = newRow.insertCell(0);
        const ageCell = newRow.insertCell(1);
        const actionsCell = newRow.insertCell(2);

        nameCell.textContent = name;
        ageCell.textContent = age;
        actionsCell.innerHTML = '<button onclick="deleteRow(this)">Delete</button>';

        document.getElementById('name').value = '';
        document.getElementById('age').value = '';
    } else {
        alert('Please enter both name and age.');
    }
}

function deleteRow(button) {
    const row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}