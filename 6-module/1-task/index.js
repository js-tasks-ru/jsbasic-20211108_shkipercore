/**
 * Компонент, который реализует таблицу
 * с возможностью удаления строк
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      }
 *
 */

export default class UserTable {

  #rows = [];
  elem = null;

  constructor(rows) {
    this.#rows = rows;
    this.elem = this.#createTable();
    this.#removeButtons();
  }

  #createTable() {
    let table = document.createElement('table');

    table.innerHTML = `
    <thead>
        <tr>
            <th>Имя</th>
            <th>Возраст</th>
            <th>Зарплата</th>
            <th>Город</th>
            <th></th>
        </tr>
    </thead>
    <tbody>
    ${this.#rows.map(this.#trTemplate).join('')}
    </tbody>
    `;

    return table;
  }

  #trTemplate(rows = []) {
    return `
    <tr>
        <td>${rows.name}</td>
        <td>${rows.age}</td>
        <td>${rows.salary}</td>
        <td>${rows.city}</td>
        <td><button class="remove-button">X</button></td>
    </tr>
    `;
  }

  #removeButtons() {
    let buttons = this.elem.querySelectorAll('.remove-button');
    for (let button of buttons) {
      button.addEventListener('click', () => {
        let removeButton = button.closest('tr');
        removeButton.remove();
      });
    }
  }
}
