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
    name: 'Смертин',
    surname: 'Дмитрий',
    lastName: 'Витальевич',
    contacts: [{
        type: 'phone',
        value: '+79997654321'
      }],
  };

  function getContainer(selector = document.getElementById('app')){
    const container = selector;
    return container;
  }

  const container = getContainer();
  let clients = await getClients();
  console.log(clients);
  container.innerHTML = [clients[0].name,clients[0].surname,clients[0].lastName].join(' ');



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
