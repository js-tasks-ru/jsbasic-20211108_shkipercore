function makeDiagonalRed(table) {
  const tableRows = table.rows.length;

  for (let i = 0; i < tableRows; i++) {
    table.rows[i].cells[i].style.backgroundColor = 'red';
  }
}
