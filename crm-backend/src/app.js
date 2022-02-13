(async () => {
  const API = 'http://localhost:3000/api/clients';

  const ICON_STRINGS = {
    'VK': `<g opacity="0.7">
      <path d="M8 0C3.58187 0 0 3.58171 0 8C0 12.4183 3.58187 16 8 16C12.4181 16 16 12.4183 16 8C16 3.58171 12.4181 0 8 0ZM12.058 8.86523C12.4309 9.22942 12.8254 9.57217 13.1601 9.97402C13.3084 10.1518 13.4482 10.3356 13.5546 10.5423C13.7065 10.8371 13.5693 11.1604 13.3055 11.1779L11.6665 11.1776C11.2432 11.2126 10.9064 11.0419 10.6224 10.7525C10.3957 10.5219 10.1853 10.2755 9.96698 10.037C9.87777 9.93915 9.78382 9.847 9.67186 9.77449C9.44843 9.62914 9.2543 9.67366 9.1263 9.90707C8.99585 10.1446 8.96606 10.4078 8.95362 10.6721C8.93577 11.0586 8.81923 11.1596 8.43147 11.1777C7.60291 11.2165 6.81674 11.0908 6.08606 10.6731C5.44147 10.3047 4.94257 9.78463 4.50783 9.19587C3.66126 8.04812 3.01291 6.78842 2.43036 5.49254C2.29925 5.2007 2.39517 5.04454 2.71714 5.03849C3.25205 5.02817 3.78697 5.02948 4.32188 5.03799C4.53958 5.04143 4.68362 5.166 4.76726 5.37142C5.05633 6.08262 5.4107 6.75928 5.85477 7.38684C5.97311 7.55396 6.09391 7.72059 6.26594 7.83861C6.45582 7.9689 6.60051 7.92585 6.69005 7.71388C6.74734 7.57917 6.77205 7.43513 6.78449 7.29076C6.82705 6.79628 6.83212 6.30195 6.75847 5.80943C6.71263 5.50122 6.53929 5.30218 6.23206 5.24391C6.07558 5.21428 6.0985 5.15634 6.17461 5.06697C6.3067 4.91245 6.43045 4.81686 6.67777 4.81686L8.52951 4.81653C8.82136 4.87382 8.88683 5.00477 8.92645 5.29874L8.92808 7.35656C8.92464 7.47032 8.98521 7.80751 9.18948 7.88198C9.35317 7.936 9.4612 7.80473 9.55908 7.70112C10.0032 7.22987 10.3195 6.67368 10.6029 6.09801C10.7279 5.84413 10.8358 5.58142 10.9406 5.31822C11.0185 5.1236 11.1396 5.02785 11.3593 5.03112L13.1424 5.03325C13.195 5.03325 13.2483 5.03374 13.3004 5.04274C13.6009 5.09414 13.6832 5.22345 13.5903 5.5166C13.4439 5.97721 13.1596 6.36088 12.8817 6.74553C12.5838 7.15736 12.2661 7.55478 11.9711 7.96841C11.7001 8.34652 11.7215 8.53688 12.058 8.86523Z" fill="#9873FF"/>
      </g>`,
    'mail': `<g opacity="0.7">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM4 5.75C4 5.3375 4.36 5 4.8 5H11.2C11.64 5 12 5.3375 12 5.75V10.25C12 10.6625 11.64 11 11.2 11H4.8C4.36 11 4 10.6625 4 10.25V5.75ZM8.424 8.1275L11.04 6.59375C11.14 6.53375 11.2 6.4325 11.2 6.32375C11.2 6.0725 10.908 5.9225 10.68 6.05375L8 7.625L5.32 6.05375C5.092 5.9225 4.8 6.0725 4.8 6.32375C4.8 6.4325 4.86 6.53375 4.96 6.59375L7.576 8.1275C7.836 8.28125 8.164 8.28125 8.424 8.1275Z" fill="#9873FF"/>
      </g>`,
    'FB': `<g opacity="0.7">
      <path d="M7.99999 0C3.6 0 0 3.60643 0 8.04819C0 12.0643 2.928 15.3976 6.75199 16V10.3775H4.71999V8.04819H6.75199V6.27309C6.75199 4.25703 7.94399 3.14859 9.77599 3.14859C10.648 3.14859 11.56 3.30121 11.56 3.30121V5.28514H10.552C9.55999 5.28514 9.24799 5.90362 9.24799 6.53815V8.04819H11.472L11.112 10.3775H9.24799V16C11.1331 15.7011 12.8497 14.7354 14.0879 13.2772C15.3261 11.819 16.0043 9.96437 16 8.04819C16 3.60643 12.4 0 7.99999 0Z" fill="#9873FF"/>
      </g>`,
    'phone': `<g opacity="0.7">
      <circle cx="8" cy="8" r="8" fill="#9873FF"/>
      <path d="M11.56 9.50222C11.0133 9.50222 10.4844 9.41333 9.99111 9.25333C9.83556 9.2 9.66222 9.24 9.54222 9.36L8.84444 10.2356C7.58667 9.63556 6.40889 8.50222 5.78222 7.2L6.64889 6.46222C6.76889 6.33778 6.80444 6.16444 6.75556 6.00889C6.59111 5.51556 6.50667 4.98667 6.50667 4.44C6.50667 4.2 6.30667 4 6.06667 4H4.52889C4.28889 4 4 4.10667 4 4.44C4 8.56889 7.43556 12 11.56 12C11.8756 12 12 11.72 12 11.4756V9.94222C12 9.70222 11.8 9.50222 11.56 9.50222Z" fill="white"/>
      </g>`,
    'other': `<g opacity="0.7">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16ZM3 8C3 5.24 5.24 3 8 3C10.76 3 13 5.24 13 8C13 10.76 10.76 13 8 13C5.24 13 3 10.76 3 8ZM9.5 6C9.5 5.17 8.83 4.5 8 4.5C7.17 4.5 6.5 5.17 6.5 6C6.5 6.83 7.17 7.5 8 7.5C8.83 7.5 9.5 6.83 9.5 6ZM5 9.99C5.645 10.96 6.75 11.6 8 11.6C9.25 11.6 10.355 10.96 11 9.99C10.985 8.995 8.995 8.45 8 8.45C7 8.45 5.015 8.995 5 9.99Z" fill="#9873FF"/>
      </g>`,
    'delete': `<g opacity="0.7">
      <path d="M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z" fill="#F06A4D"/>
      </g>`,
    'change': `<g opacity="0.7">
      <path d="M2 11.5V14H4.5L11.8733 6.62662L9.37333 4.12662L2 11.5ZM13.8067 4.69329C14.0667 4.43329 14.0667 4.01329 13.8067 3.75329L12.2467 2.19329C11.9867 1.93329 11.5667 1.93329 11.3067 2.19329L10.0867 3.41329L12.5867 5.91329L13.8067 4.69329Z" fill="#9873FF"/>
      </g>`,
    'contact-delete':`<g opacity="0.7">
      <path d="M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z" fill="#B0B0B0"/>
      </g>`,
    'contact-add': `<g opacity="0.7">
      <path d="M8.00001 4.66667C7.63334 4.66667 7.33334 4.96667 7.33334 5.33333V7.33333H5.33334C4.96668 7.33333 4.66668 7.63333 4.66668 8C4.66668 8.36667 4.96668 8.66667 5.33334 8.66667H7.33334V10.6667C7.33334 11.0333 7.63334 11.3333 8.00001 11.3333C8.36668 11.3333 8.66668 11.0333 8.66668 10.6667V8.66667H10.6667C11.0333 8.66667 11.3333 8.36667 11.3333 8C11.3333 7.63333 11.0333 7.33333 10.6667 7.33333H8.66668V5.33333C8.66668 4.96667 8.36668 4.66667 8.00001 4.66667ZM8.00001 1.33333C4.32001 1.33333 1.33334 4.32 1.33334 8C1.33334 11.68 4.32001 14.6667 8.00001 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8C14.6667 4.32 11.68 1.33333 8.00001 1.33333ZM8.00001 13.3333C5.06001 13.3333 2.66668 10.94 2.66668 8C2.66668 5.06 5.06001 2.66667 8.00001 2.66667C10.94 2.66667 13.3333 5.06 13.3333 8C13.3333 10.94 10.94 13.3333 8.00001 13.3333Z" fill="#9873FF"/>
      </g>`,
  }

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

  function getContainer(selector = document.getElementById('app')) {
    const container = selector;
    return container;
  }

  function createModal() {
    const body = document.body;

    const overlay = document.createElement('div');
    overlay.classList.add('overlay', 'd-flex', 'align-items-center', 'justify-content-center', 'p-3');
    const modal = document.createElement('div');
    modal.classList.add('h-75', 'w-50', 'p-3', 'bg-white', 'd-flex', 'align-items-center', 'justify-content-center');

    overlay.append(modal);
    body.append(overlay);

    modal.addEventListener('click', function(e) {
      if (e.target === modal) e.stopPropagation();
    });

    overlay.addEventListener('click', function(e) {
      if (e.target === overlay) {
        overlay.style.top = '-100%';
        modal.innerHTML = '';
      }
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
        this.modal.append(form);
        return this;
      }
    }
  }

  /*
  Создание элемента svg с содержимым в виде переданной иконки
  */

  function createIcon(elementType, linkClass) {
    const type = ICON_STRINGS[elementType] === undefined ? 'other' : elementType;
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.classList.add('d-flex', 'svg-icon');
    if (linkClass !== undefined) svg.classList.add(linkClass);
    svg.setAttribute('width', '16');
    svg.setAttribute('height', '16');
    svg.setAttribute('fill', 'none');
    svg.setAttribute('viewBox', '0 0 16 16');
    svg.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink");
    svg.innerHTML = ICON_STRINGS[type];
    return svg;
  }

  /*
    Дополнение строки с цифрой до 2 символов с помощью 0
  */

  function padNumberByZero(number) {
    return number.toString().padStart(2, "0");
  }

  function createDateTimeDiv(date, dateTimeClassToAdd, dateClassToAdd, timeClassToAdd) {
    const dateTime = new Date(date);
    const month = padNumberByZero(dateTime.getMonth() + 1);
    const dateTimeDiv = document.createElement('div');
    dateTimeDiv.classList.add('d-flex', 'justify-content-between', dateTimeClassToAdd);
    const dateSpan = document.createElement('span');
    dateSpan.classList.add('d-inline-flex', 'mr-1', dateClassToAdd);
    dateSpan.textContent = [dateTime.getDate(), month, dateTime.getFullYear()].join('.');
    const timeSpan = document.createElement('span');
    timeSpan.classList.add('d-inline-flex', timeClassToAdd);
    timeSpan.textContent = [padNumberByZero(dateTime.getHours()), padNumberByZero(dateTime.getMinutes())].join(':');
    dateTimeDiv.append(dateSpan, timeSpan);
    return dateTimeDiv;
  }


  function createDataEditButton(buttonClassToAdd, iconTypeToCreate, iconClassToAdd, buttonText) {
    const dataEditButton = document.createElement('a');
    dataEditButton.classList.add('d-inline-flex', 'd-flex', 'align-items-center', buttonClassToAdd);
    const dataEditIcon = createIcon(iconTypeToCreate);
    dataEditIcon.classList.add('d-inline-flex', iconClassToAdd);
    const dataEditText = document.createElement('span');
    dataEditText.classList.add('d-inline-flex');
    dataEditText.textContent = buttonText;
    dataEditButton.append(dataEditIcon, dataEditText);
    return dataEditButton;
  }

  let values = ['VK', 'FB', 'phone', 'mail', 'other', 'TW', 'TG'];


  function createSelect(valuesArr, selectClass, selectName = '') {
    const select = document.createElement('select');
    select.classList.add(selectClass);
    select.name = selectName;
    select.type = 'select-one';
    valuesArr.forEach((item, index, arr) => {
      const option = document.createElement('option');
      option.value = item;
      option.textContent = item;
      if (index === arr.length - 1) option.selected = true;
      select.append(option);
    });
    return select;
  }

  function configureSelect(select, value) {
    const choicesElement = new Choices(select, {
      searchEnabled: false,
      itemSelectText: '',
      shouldSort: false,
    });
    return choicesElement;
  }

  function createInputObj(inputName, labelText, placeholderValue = '', required = false) {
    const input = document.createElement('input');
    input.name = inputName;
    input.placeholder = placeholderValue;
    input.classList.add('input', 'p-1', 'border-top-0', 'border-right-0', 'border-left-0', 'w-100');
    const label = document.createElement('label');
    label.for = input.name;
    label.textContent = labelText;
    label.classList.add('text-muted', 'm-0', 'd-flex');
    if (required) {
      const span = document.createElement('span');
      span.classList.add('d-inline-flex', 'asterisk');
      span.textContent = '*';
      label.append(span);
    }
    const inputDiv = document.createElement('div');
    inputDiv.classList.add('d-flex', 'flex-column', 'w-100');
    inputDiv.append(label, input);
    return {
      inputDiv,
      input,
      label
    };
  }

  function createModalContent(obj) {
    const container = document.createElement('div');
    container.classList.add('d-flex', 'flex-column', 'w-75', 'content', 'h-100');

    const modalHeaderDiv = document.createElement('div');
    modalHeaderDiv.classList.add('d-flex', 'align-items-end');
    const modalHeaderTitle = document.createElement('h3');
    modalHeaderTitle.classList.add('d-inline-flex', 'm-0');
    modalHeaderTitle.textContent = 'Изменить данные';
    const modalHeaderText = document.createElement('p');
    modalHeaderText.classList.add('d-inline-flex', 'text-muted', 'm-0');
    modalHeaderText.textContent = 'ID:' + obj.id;
    modalHeaderDiv.append(modalHeaderTitle, modalHeaderText);

    const nameDiv = document.createElement('div');
    nameDiv.classList.add('d-flex', 'flex-column');
    const nameInput = createInputObj('name', 'Имя', '', true);
    const surnameInput = createInputObj('surname', 'Фамилия', '', true);
    const lastNameInput = createInputObj('lastName', 'Отчество');
    nameInput.input.value = obj.name;
    surnameInput.input.value = obj.surname;
    lastNameInput.input.value = obj.lastName;
    nameDiv.append(nameInput.inputDiv, surnameInput.inputDiv, lastNameInput.inputDiv);

    const contactsDiv = document.createElement('div');
    contactsDiv.classList.add('d-flex', 'flex-column', 'bg-light', 'p-3', 'mb-2');
    const contactsList = document.createElement('ul');
    contactsList.classList.add('d-flex', 'flex-column','mx-0', 'mb-2', 'p-0');
    const contactTypeChoices = [];
    const contactValueInputs = [];
    const contactDeleteButtons = [];

    obj.contacts.forEach((item, index, array) => {
      const contactItemDiv = document.createElement('div');
      contactItemDiv.classList.add('d-flex', 'contact__item-div');
      if (index!==array.length-1) contactItemDiv.classList.add('mb-2');

      const contactTypeSelect = createSelect(values, 'sel1');
      contactItemDiv.append(contactTypeSelect);
      const contactItemSelect = configureSelect(contactTypeSelect);

      contactTypeChoices.push(contactItemSelect);
      contactItemSelect.setChoiceByValue(item.type);
      contactItemSelect.passedElement.element.addEventListener(
        'choice',
        function(e) {
          obj.contacts[contactTypeChoices.indexOf(contactItemSelect)].type = e.detail.choice.value;
          console.log(e.detail.choice.value);
          // console.log(obj);
        },
        false,
      );

      const contactValueInput = document.createElement('input');
      contactValueInput.classList.add('p-1', 'mw-75');
      contactValueInput.value = item.value;
      contactValueInputs.push(contactValueInput);
      contactValueInput.addEventListener(
        'input',
        function(e) {
          obj.contacts[contactValueInputs.indexOf(contactValueInput)].value = e.target.value;
          // console.log(obj);
        },
        false,
      );

      const contactDeleteButton = document.createElement('a');
      contactDeleteButton.classList.add('d-flex', 'd-inline-flex', 'contact-delete-button','align-items-center', 'justify-content-center');
      const contactDeleteIcon = createIcon('contact-delete','contact-delete-icon');
      contactDeleteButton.append(contactDeleteIcon);
      contactDeleteButtons.push(contactDeleteButton);
      contactDeleteButton.addEventListener(
        'click',
        function(e) {
          e.preventDefault();
          let elementToWorkWith = null;
          // следующий кусок кода нужен чтобы адекватно определить что работать надо с самой кнопкой
          // тк присутствует следующая вложенность объектов снизу вверх:
          // path -> g -> svg -> a
          if (e.target.tagName==='path'){
            elementToWorkWith = e.target.parentElement.parentElement.parentElement;
          } else if (e.target.tagName==='g'){
            elementToWorkWith = e.target.parentElement.parentElement;
          } else if (e.target.tagName==='svg'){
            elementToWorkWith = e.target.parentElement;
          } else {
            elementToWorkWith = e.target;
          }
          console.log(contactDeleteButtons.indexOf(elementToWorkWith));
          const elementNumber = contactDeleteButtons.indexOf(elementToWorkWith);
          elementToWorkWith.parentElement.remove();
          contactDeleteButtons.splice(elementNumber,1);
          obj.contacts.splice(elementNumber,1);
          console.log(obj);
      });

      contactItemDiv.append(contactValueInput, contactDeleteButton);
      contactsList.append(contactItemDiv);
    });
    contactsDiv.append(contactsList);

    const addContactButton = document.createElement('a');
    addContactButton.classList.add('d-flex', 'd-inline-flex', 'justify-content-center', 'align-items-center');
    const addContactSpan = document.createElement('span');
    addContactSpan.classList.add('d-inline-flex');
    addContactSpan.textContent = 'Добавить контакт';

    const addContactIcon = createIcon('contact-add', 'contact-add-icon');
    addContactButton.append(addContactIcon, addContactSpan);

    addContactButton.addEventListener(
      'click',
      function(e) {
        e.preventDefault();

        const newContact = {
          'type': 'other',
          'value': ''
        }
        obj.contacts.push(newContact);

        const contactItemDivs = document.querySelectorAll('.contact__item-div');
        contactItemDivs[contactItemDivs.length-1].classList.add('mb-2');

        const contactItemDiv = document.createElement('div');
        contactItemDiv.classList.add('d-flex', 'contact__item-div');

        const contactTypeSelect = createSelect(values, 'sel1');
        contactItemDiv.append(contactTypeSelect);
        const contactItemSelect = configureSelect(contactTypeSelect);

        contactTypeChoices.push(contactItemSelect);
        contactItemSelect.setChoiceByValue('other');
        contactItemSelect.passedElement.element.addEventListener(
          'choice',
          function(e) {
            obj.contacts[contactTypeChoices.indexOf(contactItemSelect)].type = e.detail.choice.value;
            console.log(obj);
          },
          false,
        );

        const contactValueInput = document.createElement('input');
        contactValueInput.classList.add('p-1', 'mw-75');
        contactValueInputs.push(contactValueInput);
        contactValueInput.addEventListener(
          'input',
          function(e) {
            obj.contacts[contactValueInputs.indexOf(contactValueInput)].value = e.target.value;
            console.log(obj);
          },
          false,
        );

        const contactDeleteButton = document.createElement('a');
        contactDeleteButton.classList.add('d-flex', 'd-inline-flex', 'contact-delete-button','align-items-center', 'justify-content-center');
        const contactDeleteIcon = createIcon('contact-delete','contact-delete-icon');
        contactDeleteButton.append(contactDeleteIcon);
        contactDeleteButtons.push(contactDeleteButton);
        contactDeleteButton.addEventListener(
          'click',
          function(e) {
            e.preventDefault();
            let elementToWorkWith = null;
            // следующий кусок кода нужен чтобы адекватно определить что работать надо с самой кнопкой
            // тк присутствует следующая вложенность объектов снизу вверх:
            // path -> g -> svg -> a
            if (e.target.tagName==='path'){
              elementToWorkWith = e.target.parentElement.parentElement.parentElement;
            } else if (e.target.tagName==='g'){
              elementToWorkWith = e.target.parentElement.parentElement;
            } else if (e.target.tagName==='svg'){
              elementToWorkWith = e.target.parentElement;
            } else {
              elementToWorkWith = e.target;
            }
            const elementNumber = contactDeleteButtons.indexOf(elementToWorkWith);
            elementToWorkWith.parentElement.remove();
            contactDeleteButtons.splice(elementNumber,1);
            obj.contacts.splice(elementNumber,1);
            console.log(obj);
        });

        console.log(obj)
        contactItemDiv.append(contactValueInput, contactDeleteButton);
        contactsList.append(contactItemDiv);
    });

    contactsDiv.append(addContactButton);

    container.append(modalHeaderDiv, nameDiv, contactsDiv);
    return {
      container,
      contactTypeChoices,
      contactValueInputs,
      contactDeleteButtons,
    };
  }

  /*
    Создание элемента (li) для отображения данных о клиенте
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

    const creationDateTimeDiv = createDateTimeDiv(client.createdAt, 'clients__list-create-datetime', 'clients__list-create-date', 'clients__list-create-time');
    const updateDateTimeDiv = createDateTimeDiv(client.updatedAt, 'clients__list-create-datetime', 'clients__list-create-date', 'clients__list-create-time');

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
      link.classList.add('display-inline-flex', 'text-primary', 'contact-item');

      (index % 5 !== 4 && index !== array.length - 1) ? link.classList.toggle('mr-1', true): null;
      (index % 5 >= 0 && array.length > 5 && index < acceptableItems) ? link.classList.toggle('mb-1', true): null;
      link.href = element.type === 'phone' ? ('tel:' + element.value) : (element.type === 'mail' ? ('mailto:' + element.value) : element.value);
      link.target = '_blank';


      const svg = createIcon(element.type, linkClass);

      link.append(svg);
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

    const changeClientButton = createDataEditButton('clients__list-change-button', 'change', 'change-element-icon', 'Изменить');

    const deleteClientButton = createDataEditButton('clients__list-delete-button', 'delete', 'delete-element-icon', 'Удалить');

    changeClientButton.addEventListener('click', async e => {
      e.preventDefault();
      const clientData = await getClientByID(client.id);
      // console.log('CHANGE');
      console.log(clientData);
      const modalContent = createModalContent(clientData);
      modal.insertFormIntoModal(modalContent.container).showModal();
    });

    deleteClientButton.addEventListener('click', async e => {
      e.preventDefault();
      const clientData = await getClientByID(client.id);
      // console.log('DELETE');
    });

    clientLi.append(
      idSpan, nameSpan,
      creationDateTimeDiv, updateDateTimeDiv,
      contactsDiv,
      changeClientButton, deleteClientButton
    );
    return clientLi;
  }

  /*
    Создание элемента (ul) для отображения данных о всех клиентах
  */

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


  const modal = createModal();
  const clienstListView = await createClientsListView(clients);

  container.append(clienstListView);

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
  // 2) Сделать добавление формы в модальное окно
  // 3) Сделать обработку событий удаления, изменения данных в бд
  // 4) Расставить обработку статусов http-запросов
  // 5) Добавление тултипов
  // 6) Поиск по данным
  // 7) Менять svg для кнопок изменения и удаления при нажатиях на них
  // 7*) Добавить анимацию вращения
  // 8) Валидация формы добавления / изменения данных
  // 9) Рефакторинг кода, DRY

})();
