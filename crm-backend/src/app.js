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

  const clientObj = {
    name: 'Смертин',
    surname: 'Дмитрий',
    lastName: 'Витальевич',
    contacts: [{
        type: 'phone',
        value: '+79997654321'
      }],
  };

  // const client =  await createNewClient(clientObj);
  // console.log(client);

  // console.log('request sent');



})();
