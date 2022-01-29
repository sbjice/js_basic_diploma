(async () => {
  const API = 'http://localhost:3000/api/clients';

  async function getClients() {
    const response = await fetch(API);
    const data = await response.json();
    return data;
  }

  async function getClientByID(id) {
    const response = await fetch(API + '/' + id);
    const data = await response.json();
    return data;
  }

  async function createNewClient(clientData = {}) {
    const response = await fetch(API, {
      method: 'POST',
      body: JSON.stringify(clientData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
  }

  async function deleteClientByID(id) {
    const response = await fetch(API + '/' + id, {
      method: 'DELETE'
    });
    const data = await response.json();
    return data;
  }

  async function changeClientByID(id, clientData) {
    const response = await fetch(API + '/' + id, {
      method: 'PATCH',
      body: JSON.stringify(clientData),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    const data = await response.json();
    return data;
  }

  const clientObj = {
    name: 'Дмитрий',
    surname: 'Смертин',
    lastName: 'Витальевич',
    contacts: [{
      type: 'phone',
      value: '+79997654321'
    }],
  };

  function getContainer(selector = document.getElementById('app')) {
    const container = selector;
    return container;
  }


  /*
  Дополнение строки с цифрой до 2 символов с помощью 0
  */
  function padNumberByZero(number) {
    return number.toString().length === 1 ? '0' + number.toString() : number.toString();
  }



  /*
    Создание элемента для отображения данных о клиенте
  */

  async function createClientView(client) {
    const clientLi = document.createElement('li');
    clientLi.classList.add('d-flex', 'flex-row', 'justify-content-start', 'align-items-center', 'p-3', 'clients__list-item');

    const idSpan = document.createElement('span');
    idSpan.classList.add('d-inline-flex', 'clients__list-id');
    idSpan.textContent = client.id;

    const nameSpan = document.createElement('span');
    nameSpan.classList.add('d-inline-flex', 'clients__list-name');
    nameSpan.textContent = [client.surname, client.name, client.lastName].join(' ');

    const creationDateTime = new Date(client.createdAt);
    const updateDateTime = new Date(client.updatedAt);
    const creationMonth = (creationDateTime.getMonth() + 1).toString().length === 1 ? '0' + (creationDateTime.getMonth() + 1).toString() : (creationDateTime.getMonth() + 1).toString();
    const updateMonth = (updateDateTime.getMonth() + 1).toString().length === 1 ? '0' + (updateDateTime.getMonth() + 1).toString() : (updateDateTime.getMonth() + 1).toString();


    const creationDateTimeDiv = document.createElement('div');
    creationDateTimeDiv.classList.add('d-flex', 'justify-content-between', 'clients__list-create-datetime');
    const creationDateSpan = document.createElement('span');
    creationDateSpan.classList.add('d-inline-flex', 'mr-1', 'clients__list-create-date');
    creationDateSpan.textContent = [creationDateTime.getDate(), creationMonth, creationDateTime.getFullYear()].join('.');
    const creationTimeSpan = document.createElement('span');
    creationTimeSpan.classList.add('d-inline-flex', 'clients__list-create-time');
    creationTimeSpan.textContent = [padNumberByZero(creationDateTime.getHours()), padNumberByZero(creationDateTime.getMinutes())].join(':');
    creationDateTimeDiv.append(creationDateSpan, creationTimeSpan);


    const updateDateTimeDiv = document.createElement('div');
    updateDateTimeDiv.classList.add('d-flex', 'justify-content-between', 'clients__list-update-datetime');
    const updateDateSpan = document.createElement('span');
    updateDateSpan.classList.add('d-inline-flex', 'mr-1', 'clients__list-update-date');
    updateDateSpan.textContent = [updateDateTime.getDate(), updateMonth, updateDateTime.getFullYear()].join('.');
    const updateTimeSpan = document.createElement('span');
    updateTimeSpan.classList.add('d-inline-flex', 'clients__list-update-time');
    updateTimeSpan.textContent = [padNumberByZero(updateDateTime.getHours()), padNumberByZero(updateDateTime.getMinutes())].join(':');
    updateDateTimeDiv.append(updateDateSpan, updateTimeSpan);

    const contactsDiv = document.createElement('div');
    contactsDiv.classList.add('d-flex', 'flex-wrap', 'justify-content-start', 'align-items-center', 'clients__list-contacts-list');

    const fullRows = Math.floor(client.contacts.length / 5);
    const elementsInLastRow = client.contacts.length - fullRows * 5;
    const acceptableItems = client.contacts.length - (elementsInLastRow === 0 ? 5 : elementsInLastRow);
    client.contacts.forEach((element, index, array) => {
      const link = document.createElement('a');
      const linkClass = element.type === 'phone' ||
        element.type === 'VK' ||
        element.type === 'mail' ||
        element.type === 'FB' ? element.type : 'other';
      link.classList.add(linkClass, 'display-inline-flex', 'text-primary');
      (index % 5 !== 4 && index !== array.length - 1) ? link.classList.toggle('mr-1', true): null;
      (index % 5 >= 0 && array.length > 5 && index < acceptableItems) ? link.classList.toggle('mb-1', true): null;
      link.href = element.type === 'phone' ? ('tel:' + element.value) : (element.type === 'mail' ? ('mailto:' + element.value) : element.value);
      link.target = '_blank';
      // const embed = document.createElement('embed');
      // embed.classList.add(linkClass, 'd-flex');
      // link.append(embed);
      contactsDiv.append(link);
    });

    /*
    Показ скрытых ссылок по нажатию на 5 ссылку в ряду
    */

    if (client.contacts.length > 5) {
      for (let i = 0; i < client.contacts.length; i++) {
        contactsDiv.children[i].classList.toggle('mb-1', false);
        if (i > 3) {
          contactsDiv.children[i].classList.toggle('contact-hidden', true);
        }
      }
      const showContactButton = document.createElement('a');
      showContactButton.classList.add('display-inline-flex', 'show-contact-button', 'd-flex', 'align-items-center', 'justify-content-center');
      showContactButton.target = '_blank';
      showContactButton.textContent = '+' + (client.contacts.length - 4);
      const showContactButtonText = document.createElement('span');
      showContactButtonText.classList.add('display-inline-flex');



      contactsDiv.append(showContactButton);
      showContactButton.addEventListener('click', e => {
        e.preventDefault();
        const fullRows = Math.floor(client.contacts.length / 5);
        const elementsInLastRow = client.contacts.length - fullRows * 5;
        const acceptableItems = client.contacts.length - (elementsInLastRow === 0 ? 5 : elementsInLastRow);
        console.log('acceptableItems:', acceptableItems);
        for (let i = 0; i < client.contacts.length; i++) {
          (i % 5 >= 0 && client.contacts.length > 5 && i < acceptableItems) ? contactsDiv.children[i].classList.toggle('mb-1', true): null;
          if (i > 3) {
            contactsDiv.children[i].classList.toggle('contact-hidden', false);
          }
        }
        showContactButton.remove();
      });
    }

    const changeClientButton = document.createElement('a');
    changeClientButton.classList.add('d-inline-flex', 'd-flex', 'align-items-center', 'clients__list-change-button');
    const changeClientIcon = document.createElement('a');
    changeClientIcon.classList.add('d-inline-flex', 'change-element-icon');
    const changeClientText = document.createElement('span');
    changeClientText.classList.add('d-inline-flex');
    changeClientText.textContent = 'Изменить';
    changeClientButton.append(changeClientIcon, changeClientText);

    const deleteClientButton = document.createElement('a');
    deleteClientButton.classList.add('d-inline-flex', 'd-flex', 'align-items-center', 'clients__list-delete-button');
    const deleteClientIcon = document.createElement('span');
    deleteClientIcon.classList.add('d-inline-flex', 'delete-element-icon');
    const deleteClientText = document.createElement('span');
    deleteClientText.classList.add('d-inline-flex');
    deleteClientText.textContent = 'Удалить';
    deleteClientButton.append(deleteClientIcon, deleteClientText);

    changeClientButton.addEventListener('click', async e => {
      e.preventDefault();
      const clientData = await getClientByID(client.id);
      console.log('CHANGE');
      console.log(clientData);
      modal.insertFormIntoModal(clientData).showModal();
    });

    deleteClientButton.addEventListener('click', async e => {
      e.preventDefault();
      const clientData = await getClientByID(client.id);
      console.log('DELETE');
      console.log(clientData);
    });

    clientLi.append(idSpan, nameSpan, creationDateTimeDiv, updateDateTimeDiv, contactsDiv, changeClientButton, deleteClientButton);
    return clientLi;
  }

  async function createClientsListView(clients) {
    const clienstListView = document.createElement('ul');
    clienstListView.classList.add('d-flex', 'flex-column', 'm-0', 'p-0', 'clients__list', 'my-3');
    clients.forEach(async item => {
      const clientLi = await createClientView(item);
      clienstListView.append(clientLi);
    });
    return clienstListView;
  }


  const container = getContainer();
  let clients = await getClients();

  function createModal() {
    const body = document.body;

    const overlay = document.createElement('div');
    overlay.classList.add('overlay', 'd-flex', 'align-items-center', 'justify-content-center');
    const modal = document.createElement('div');
    modal.classList.add('h-75', 'w-50', 'bg-white', 'd-flex', 'align-items-center', 'justify-content-center');

    // const textEl = createTextElement('Hey, how are you?');
    // modal.append(textEl);

    overlay.append(modal);
    body.append(overlay);

    modal.addEventListener('click', e => {
      e.stopPropagation();
    });

    overlay.addEventListener('click', e => {
      overlay.style.top = '-100%';
    });

    return {
      overlay,
      modal,
      showModal() {
        this.overlay.style.top = '0';
        return this;
      },
      hideModal() {
        this.overlay.style.top = '-100%';
        return this;
      },
      insertFormIntoModal(form) {
        this.modal.innerHTML = '';
        const textEl = document.createElement('p');
        textEl.classList.add('d-inline-flex', 'w-100');
        textEl.textContent = JSON.stringify(form);
        this.modal.append(textEl);
        // this.modal.append(form);
        return this;
      }
    }
  }

  const modal = createModal();
  const clienstListView = await createClientsListView(clients);

  container.append(clienstListView);
  // console.log(JSON.stringify(clients[0]));


  // Добавление селекта на страницу

  /*
  container.insertAdjacentHTML("afterend",
    `<div class="elements__select">
  <select name="select" id="customSelect" class="elements__custom-select">
    <option value="VK">VK</option>
    <option value="FB">FB</option>
    <option value="Phone">Phone</option>
    <option value="Email">Email</option>
    <option value="Other">Other</option>
    <option value="Select Option:" selected>Select Option:</option>
  </select>
</div>`);
  const element = document.querySelector('.elements__custom-select');


  const choices = new Choices(element, {
    placeholder: true,
    placeholderValue: "Select Option:",
    searchEnabled: false,
    itemSelectText: '',
    shouldSort: false,
  });

  choices.passedElement.element.addEventListener(
    'choice',
    function(event) {
      // do something creative here...
      console.log(event.detail.choice.value);
    },
    false,
  );

  */


  // API Usage
  /*
  let clients = await getClients();
  console.log(clients);
  clients[clients.length-1].surname = 'Монастырук'
  clients[clients.length-1].name = 'Владимир'
  clients[clients.length-1].lastName = 'Константинович'
  console.log(clients[clients.length-1]);
  let clientLast = await changeClientByID(clients[clients.length-1].id, clients[clients.length-1]);
  console.log(clientLast);
  let newClient = await createNewClient(clientObj);
  let idToDelete = newClient.id;

  newClient = await createNewClient(clientObj);
  newClient = await createNewClient(clientObj);
  clients = await getClients();
  clients[clients.length-1].surname = 'Монастырук'
  clients[clients.length-1].name = 'Владимир'
  clients[clients.length-1].lastName = 'Константинович'
  console.log(clients[clients.length-1]);
  clientLast = await changeClientByID(clients[clients.length-1].id, clients[clients.length-1]);
  console.log(clientLast);

  await deleteClientByID(idToDelete);
  clients = await getClients();
  console.log(clients);
  console.log(await getClientByID(clients[0].id));
  */


  // TODO:
  // 1) Вставлять svg с помощью куска кода через adjacentHTML,
  // так появится возможность безболезненно менять цвет
  // 2) Сделать добавление формы в модальное окно
  // 3) Сделать обработку событий удаления, изменения данных в бд
  // 4) Расставить обработку статусов http-запросов
  // 5) Добавление тултипов
  // 6) Поиск по данным
  // 7) Менять svg для кнопок изменения и удаления при нажатиях на них
  // 7*) Добавить анимацию вращения
  // 8) Валидация формы добавления / изменения данных


})();
