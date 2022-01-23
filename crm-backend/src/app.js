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

  const container = getContainer();
  let clients = await getClients();


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
    creationDateSpan.classList.add('d-inline-flex', 'mr-1','clients__list-create-date');
    creationDateSpan.textContent = [creationDateTime.getDate(), creationMonth, creationDateTime.getFullYear()].join('.');
    const creationTimeSpan = document.createElement('span');
    creationTimeSpan.classList.add('d-inline-flex','clients__list-create-time');
    creationTimeSpan.textContent = [padNumberByZero(creationDateTime.getHours()), padNumberByZero(creationDateTime.getMinutes())].join(':');
    creationDateTimeDiv.append(creationDateSpan, creationTimeSpan);


    const updateDateTimeDiv = document.createElement('div');
    updateDateTimeDiv.classList.add('d-flex', 'justify-content-between', 'clients__list-update-datetime');
    const updateDateSpan = document.createElement('span');
    updateDateSpan.classList.add('d-inline-flex', 'mr-1','clients__list-update-date');
    updateDateSpan.textContent = [updateDateTime.getDate(), updateMonth, updateDateTime.getFullYear()].join('.');
    const updateTimeSpan = document.createElement('span');
    updateTimeSpan.classList.add('d-inline-flex','clients__list-update-time');
    updateTimeSpan.textContent = [padNumberByZero(updateDateTime.getHours()), padNumberByZero(updateDateTime.getMinutes())].join(':');
    updateDateTimeDiv.append(updateDateSpan, updateTimeSpan);

    const contactsDiv = document.createElement('div');
    contactsDiv.classList.add('d-flex', 'flex-wrap', 'justify-content-start', 'align-items-center', 'clients__list-contacts-list');
    client.contacts.forEach((element, index, array) => {
      const link = document.createElement('a');
      link.classList.add(element.type, 'display-inline-flex', 'text-primary');
      (index % 5 !== 4 && index !== array.length - 1) ? link.classList.add('mr-1') : null;
      (index % 5 >= 0 && array.length > 5 && index !== array.length - 1) ? link.classList.add('mb-1') : null;
      link.href = element.type === 'phone' ? 'tel:' + element.value : element.value;
      link.target = '_blank';
      link.style.width = '16px';
      link.style.height = '16px';
      link.style.backgroundColor = 'blue';
      contactsDiv.append(link);
    });

    /*
    Показ скрытых ссылок по нажатию на 5 ссылку в ряду
    */

    if (client.contacts.length>5) {
      for (let i = 0; i < client.contacts.length; i++) {
        contactsDiv.children[i].classList.toggle('mb-1', false);
        if (i>3) {
          contactsDiv.children[i].classList.toggle('contact-hidden', true);
        }
      }
      const showContactButton = document.createElement('a');
      showContactButton.classList.add('display-inline-flex', 'text-primary');
      showContactButton.target = '_blank';
      showContactButton.style.width = '16px';
      showContactButton.style.height = '16px';
      showContactButton.style.backgroundColor = 'cyan';
      contactsDiv.append(showContactButton);
      showContactButton.addEventListener('click', e => {
        e.preventDefault();
        for (let i = 0; i < client.contacts.length; i++) {
          (i % 5 >= 0 && client.contacts.length > 5 && i !== client.contacts.length - 1) ? contactsDiv.children[i].classList.add('mb-1') : null;
          if (i>3) {
            contactsDiv.children[i].classList.toggle('contact-hidden', false);
          }
        }
        showContactButton.remove();
      });
    }

    const changeClientButton = document.createElement('a');
    changeClientButton.classList.add('d-inline-flex', 'd-flex', 'align-items-center', 'clients__list-change-button');
    const changeClientIcon = document.createElement('span');
    changeClientIcon.classList.add('d-inline-flex');
    changeClientIcon.style.width = '16px';
    changeClientIcon.style.height = '16px';
    changeClientIcon.style.backgroundColor = 'purple';
    const changeClientText = document.createElement('span');
    changeClientText.classList.add('d-inline-flex');
    changeClientText.textContent = 'Изменить';
    changeClientButton.append(changeClientIcon, changeClientText);
    // changeClientButton.addEventListener('click', e => {
    //   e.preventDefault();
    //   console.log
    // })

    const deleteClientButton = document.createElement('a');
    deleteClientButton.classList.add('d-inline-flex', 'd-flex', 'align-items-center', 'clients__list-delete-button');
    const deleteClientIcon = document.createElement('span');
    deleteClientIcon.classList.add('d-inline-flex');
    deleteClientIcon.style.width = '16px';
    deleteClientIcon.style.height = '16px';
    deleteClientIcon.style.backgroundColor = 'purple';
    const deleteClientText = document.createElement('span');
    deleteClientText.classList.add('d-inline-flex');
    deleteClientText.textContent = 'Удалить';
    deleteClientButton.append(deleteClientIcon, deleteClientText);

    clientLi.append(idSpan, nameSpan, creationDateTimeDiv, updateDateTimeDiv, contactsDiv, changeClientButton, deleteClientButton);
    const clientObj = {
      client,
      changeClientButton,
      deleteClientButton,
      clientLi,
      bindUpdateClientData() {
        this.changeClientButton.addEventListener('click', async e => {
          e.preventDefault();
          const clientData = await getClientByID(this.client.id);
          console.log('CHANGE');
          console.log(clientData);
        });
      },
      bindDeleteClientData() {
        this.deleteClientButton.addEventListener('click', async e => {
          e.preventDefault();
          const clientData = await getClientByID(this.client.id);
          console.log('DELETE');
          console.log(clientData);
        });
      }
    }
    clientObj.bindUpdateClientData();
    clientObj.bindDeleteClientData();
    return clientObj;
  }

  async function createClientsListView(clients) {
    const clienstListView = document.createElement('ul');
    clienstListView.classList.add('d-flex', 'flex-column', 'm-0', 'p-0', 'clients__list', 'my-3');
    clients.forEach(async item => {
      const clientObj = await createClientView(item);
      clienstListView.append(clientObj.clientLi);
    });
    return clienstListView;
  }



  // const clientDiv = createClientView(clients[0]);
  // container.append(clientDiv);
  const clienstListView = await createClientsListView(clients);

  container.append(clienstListView);





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

})();
