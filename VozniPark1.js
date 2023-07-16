
// Opcija za godine
let currentYear = new Date().getFullYear();
let yearSelect = document.getElementById('vehicle-year');

for (let year = currentYear; year >= 1980; year--) {
  let option = document.createElement('option');
  option.value = year;
  option.text = year;
  yearSelect.add(option);

}

// Funkcija za resetovanje forme nakon dodavanja vozila 
function resetForm() {
  document.getElementById('vehicle-make').value = '';
  document.getElementById('vehicle-model').value = '';
  document.getElementById('vehicle-body').value = '';
  document.getElementById('vehicle-fuel').value = '';
  document.getElementById('vehicle-year').value = '';
  document.getElementById('license-plate').value = '';
}

// Dodavanje vozila
function dodajVozilo() {
  let make = document.getElementById('vehicle-make').value;
  let model = document.getElementById('vehicle-model').value;
  let body = document.getElementById('vehicle-body').value;
  let fuel = document.getElementById('vehicle-fuel').value;
  let year = document.getElementById('vehicle-year').value;
  let licensePlate = document.getElementById('license-plate').value;

  let licensePlatePattern = /^[A-Z]{2}-\d{3,4}-[A-Z]{2}$/;
  if (!licensePlatePattern.test(licensePlate)) {
    alert('Unesite ispravan format registarskih oznaka (npr. AB-123-CD)');
    return;
  }

  let table = document.getElementById('vozni-park');

  // Provera dupliciranih registarskih oznaka
  let rows = table.getElementsByTagName('tr');
  for (let i = 1; i < rows.length; i++) {
    let rowLicensePlate = rows[i].cells[5].innerHTML;
    if (licensePlate === rowLicensePlate) {
      alert('Već postoji vozilo sa unetim registarskim oznakama.');
      resetForm();
      return;
    }
  }

  // Provera da li su sva polja popunjena
  if (!make || !model || !body || !fuel || !year || !licensePlate) {
    alert('Popunite sva polja.');
    return;
  }

  let editButton = '<button class="edit-button" onclick="izmeniVozilo(this)">Izmeni</button>';
  let deleteButton = '<button class="delete-button" onclick="ukloniVozilo(this)">Ukloni</button>';

  let row = table.insertRow(-1);

  let makeCell = row.insertCell(0);
  makeCell.innerHTML = make;

  let modelCell = row.insertCell(1);
  modelCell.innerHTML = model;

  let bodyCell = row.insertCell(2);
  bodyCell.innerHTML = body;

  let fuelCell = row.insertCell(3);
  fuelCell.innerHTML = fuel;

  let yearCell = row.insertCell(4);
  yearCell.innerHTML = year;

  let licensePlateCell = row.insertCell(5);
  licensePlateCell.innerHTML = licensePlate;

  let actionsCell = row.insertCell(6);
  actionsCell.innerHTML = editButton + ' ' + deleteButton;

  resetForm();
}

// Izmena vozila
function izmeniVozilo(button) {
  let row = button.parentNode.parentNode;

  let make = row.cells[0].innerHTML;
  let model = row.cells[1].innerHTML
  let body = row.cells[2].innerHTML;
  let fuel = row.cells[3].innerHTML;
  let year = row.cells[4].innerHTML;
  let licensePlate = row.cells[5].innerHTML;

  document.getElementById('vehicle-make').value = make;
  document.getElementById('vehicle-model').value = model;
  document.getElementById('vehicle-body').value = body;
  document.getElementById('vehicle-fuel').value = fuel;
  document.getElementById('vehicle-year').value = year;
  document.getElementById('license-plate').value = licensePlate;

  // Uklanjanje postojeceg reda iz tabele
  row.parentNode.removeChild(row);
}

// Cuvanje izmenjenih podataka
function sacuvajIzmene() {
  let make = document.getElementById('vehicle-make').value;
  let model = document.getElementById('vehicle-model').value;
  let body = document.getElementById('vehicle-body').value;
  let fuel = document.getElementById('vehicle-fuel').value;
  let year = document.getElementById('vehicle-year').value;
  let licensePlate = document.getElementById('license-plate').value;

  let licensePlatePattern = /^[A-Z]{2}-\d{3,4}-[A-Z]{2}$/;
  if (!licensePlatePattern.test(licensePlate)) {
    alert('Unesite ispravan format registarskih oznaka (npr. AB-123-CD)');
    return;
  }

  let table = document.getElementById('vozni-park');

  // Provera duplih registarskih oznaka
  let rows = table.getElementsByTagName('tr');
  for (let i = 1; i < rows.length; i++) {
    let rowLicensePlate = rows[i].cells[5].innerHTML;
    if (licensePlate === rowLicensePlate) {
      alert('Već postoji vozilo sa unetim registarskim oznakama.');
      resetForm();
      return;
    }
  }

  let editButton = '<button class="edit-button" onclick="izmeniVozilo(this)">Izmeni</button>';
  let deleteButton = '<button class="delete-button" onclick="ukloniVozilo(this)">Ukloni</button>';

  let newRow = table.insertRow(-1);

  let makeCell = newRow.insertCell(0);
  makeCell.innerHTML = make;

  let modelCell = newRow.insertCell(1);
  modelCell.innerHTML = model;

  let bodyCell = newRow.insertCell(2);
  bodyCell.innerHTML = body;

  let fuelCell = newRow.insertCell(3);
  fuelCell.innerHTML = fuel;

  let yearCell = newRow.insertCell(4);
  yearCell.innerHTML = year;

  let licensePlateCell = newRow.insertCell(5);
  licensePlateCell.innerHTML = licensePlate;

  let actionsCell = newRow.insertCell(6);
  actionsCell.innerHTML = editButton + ' ' + deleteButton;

  resetForm();
}

// Funkcija za uklanjanje vozila
function ukloniVozilo(button) {
  let row = button.parentNode.parentNode;
  row.parentNode.removeChild(row);
}



