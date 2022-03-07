(async () => {
  const API = 'http://localhost:3000/api/clients';

  let values = ['VK', 'FB', 'phone', 'mail', 'other', 'TW', 'TG'];

  /*
    Объект с строковыми представлениями иконок
  */

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
    'contact-delete': `<g opacity="0.7">
      <path d="M8 2C4.682 2 2 4.682 2 8C2 11.318 4.682 14 8 14C11.318 14 14 11.318 14 8C14 4.682 11.318 2 8 2ZM8 12.8C5.354 12.8 3.2 10.646 3.2 8C3.2 5.354 5.354 3.2 8 3.2C10.646 3.2 12.8 5.354 12.8 8C12.8 10.646 10.646 12.8 8 12.8ZM10.154 5L8 7.154L5.846 5L5 5.846L7.154 8L5 10.154L5.846 11L8 8.846L10.154 11L11 10.154L8.846 8L11 5.846L10.154 5Z" fill="#B0B0B0"/>
      </g>`,
    'contact-add': `<g opacity="0.7">
      <path d="M8.00001 4.66667C7.63334 4.66667 7.33334 4.96667 7.33334 5.33333V7.33333H5.33334C4.96668 7.33333 4.66668 7.63333 4.66668 8C4.66668 8.36667 4.96668 8.66667 5.33334 8.66667H7.33334V10.6667C7.33334 11.0333 7.63334 11.3333 8.00001 11.3333C8.36668 11.3333 8.66668 11.0333 8.66668 10.6667V8.66667H10.6667C11.0333 8.66667 11.3333 8.36667 11.3333 8C11.3333 7.63333 11.0333 7.33333 10.6667 7.33333H8.66668V5.33333C8.66668 4.96667 8.36668 4.66667 8.00001 4.66667ZM8.00001 1.33333C4.32001 1.33333 1.33334 4.32 1.33334 8C1.33334 11.68 4.32001 14.6667 8.00001 14.6667C11.68 14.6667 14.6667 11.68 14.6667 8C14.6667 4.32 11.68 1.33333 8.00001 1.33333ZM8.00001 13.3333C5.06001 13.3333 2.66668 10.94 2.66668 8C2.66668 5.06 5.06001 2.66667 8.00001 2.66667C10.94 2.66667 13.3333 5.06 13.3333 8C13.3333 10.94 10.94 13.3333 8.00001 13.3333Z" fill="#9873FF"/>
      </g>`,
    'new-client': `<g opacity="0.7">
      <path d="M14.5 8C16.71 8 18.5 6.21 18.5 4C18.5 1.79 16.71 0 14.5 0C12.29 0 10.5 1.79 10.5 4C10.5 6.21 12.29 8 14.5 8ZM5.5 6V3H3.5V6H0.5V8H3.5V11H5.5V8H8.5V6H5.5ZM14.5 10C11.83 10 6.5 11.34 6.5 14V16H22.5V14C22.5 11.34 17.17 10 14.5 10Z" fill="#9873FF"/>
      </g>`,
    'arrow': `<g opacity="0.7">
      <path d="M2 6L2.705 6.705L5.5 3.915L5.5 10L6.5 10L6.5 3.915L9.29 6.71L10 6L6 2L2 6Z" fill="#9873FF"/>
    </g>`,
    'modal-close-icon': `<g opacity="0.7">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M22.2333 7.73333L21.2666 6.76666L14.4999 13.5334L7.73324 6.7667L6.76658 7.73336L13.5332 14.5L6.7666 21.2667L7.73327 22.2333L14.4999 15.4667L21.2666 22.2334L22.2332 21.2667L15.4666 14.5L22.2333 7.73333Z" fill="#B0B0B0"/>
    </g>`
  }


  /*
    Реализация функций работы с API
  */

  async function getClients() {
    const response = await fetch(API);
    const data = await response.json();
    // console.log(response);
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

  /*
    Создание контейнера для всего приложения
  */

  function getContainer(selector = document.getElementById('app')) {
    const container = selector;
    container.classList.add('d-flex', 'flex-column', 'align-self-center', 'justify-content-center');
    return container;
  }

  /*
    Создание заголовка для контейнера приложения
  */

  function createAppHeader(headerText = 'Клиенты') {
    const header = document.createElement('h3');
    header.classList.add('mb-3');
    header.textContent = headerText;
    return header;
  }

  /*
    Создание поля поиска для фильтрации данных
  */

  function createSearchInput() {
    const searchInput = document.createElement('input');
    searchInput.addEventListener(
      'input',
      async function (e) {
        await restartSearchInputTimer();
      }
    )
    return searchInput;
  }

  /*
    Реализация перезапуска таймера ввода данных для поиска по клиентам
  */

  function restartSearchInputTimer() {
    clearTimeout(searchInputTimeout);
    searchInputTimeout = setTimeout(filterClients, 300);
  }


  /*
    Функция фильтрации данных о клиентах
  */

  async function filterClients() {
    const rawClients = await getClients();
    if (searchInput.value !== '') {
      clients = rawClients.filter(item => {
        return [item.surname, item.name, item.lastName].join(' ').includes(searchInput.value);
      });
      fillClientsListView(clientsListDiv, clients, showSpinner = true);
      return;
    }
    clients = rawClients;
    fillClientsListView(clientsListDiv, clients);
  }

  /*
    Создание модального окна с оверлеем
  */

  function createModal() {
    const body = document.body;

    const overlay = document.createElement('div');
    overlay.classList.add('overlay', 'd-flex', 'align-items-center', 'justify-content-center', 'p-3');
    const modal = document.createElement('div');
    modal.classList.add('h-75', 'w-50', 'p-3', 'bg-white', 'd-flex', 'align-items-center', 'justify-content-center');
    modal.style.position = 'relative';

    const modalCloseIcon = createIcon('modal-close-icon', 'modal-close-icon', '29', '29', '0 0 29 29');
    modalCloseIcon.classList.add('d-inline-flex');
    const modalCloseButton = document.createElement('a');
    modalCloseButton.classList.add('d-flex');
    modalCloseButton.style.position = 'absolute';
    modalCloseButton.style.top = '20px';
    modalCloseButton.style.right = '20px';
    modalCloseButton.append(modalCloseIcon);
    modalCloseButton.addEventListener(
      'click',
      function (e) {
        overlay.style.top = '-100%';
        body.classList.toggle('scroll-disable', false);
        modal.innerHTML = '';
        modal.append(modalCloseButton);
      }
    );

    modal.append(modalCloseButton);
    const transparentModalSpinner = createSpinner('spinner-container_bg-transparent');
    modal.append(transparentModalSpinner.spinnerContainer);
    const whiteModalSpinner = createSpinner('spinner-container_bg-transparent');
    modal.append(whiteModalSpinner.spinnerContainer);

    overlay.append(modal);
    body.append(overlay);

    modal.addEventListener('click', function (e) {
      if (e.target === modal) e.stopPropagation();
    });

    overlay.addEventListener('click', function (e) {
      if (e.target === overlay) {
        overlay.style.top = '-100%';
        body.classList.toggle('scroll-disable', false);
        modal.innerHTML = '';
        modal.append(modalCloseButton);
      }
    });

    return {
      overlay,
      modal,
      showModal() {
        body.classList.toggle('scroll-disable', true);
        this.overlay.style.top = '0';
        return this;
      },
      hideModal() {
        this.overlay.style.top = '-100%';
        body.classList.toggle('scroll-disable', false);
        return this;
      },
      insertFormIntoModal(form) {
        this.modal.innerHTML = '';
        this.modal.append(modalCloseButton);
        this.modal.append(form);
        return this;
      },
      async showModalForClient(client) {
        this.modal.innerHTML = '';
        this.modal.append(modalCloseButton);
        this.modal.append(transparentModalSpinner.spinnerContainer);
        this.showModal();
        transparentModalSpinner.showSpinner();
        setTimeout(async () => {
          const clientData = await getClientByID(client.id);
          const modalContent = createChangeClientModalContent(clientData, this);
          transparentModalSpinner.hideSpinner();
          this.insertFormIntoModal(modalContent.container);
        }, 1000);
      },
      showTransparentSpinner() {
        this.modal.append(transparentModalSpinner.spinnerContainer);
        transparentModalSpinner.showSpinner();
      },
      hideTransparentSpinner() {
        transparentModalSpinner.hideSpinner();
      },
      showWhiteSpinner() {
        this.modal.append(whiteModalSpinner.spinnerContainer);
        whiteModalSpinner.showSpinner();
      },
      hideWhiteSpinner() {
        whiteModalSpinner.hideSpinner();
      }
    }
  }

  /*
    Создание элемента svg с содержимым в виде переданной иконки
  */

  function createIcon(elementType, linkClass, width, height, viewBox) {
    const type = ICON_STRINGS[elementType] === undefined ? 'other' : elementType;
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
    svg.classList.add('d-flex', 'svg-icon');
    if (linkClass !== undefined) svg.classList.add(linkClass);
    svg.setAttribute('width', width === undefined ? '16' : width);
    svg.setAttribute('height', height === undefined ? '16' : height);
    svg.setAttribute('fill', 'none');
    svg.setAttribute('viewBox', viewBox === undefined ? '0 0 16 16' : viewBox);
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

  /*
    Создание элемента отображения данных и времени
    Используется для создания элементов связанных с временем последнего измениения и создания данных о клиенте
  */

  function createDateTimeDiv(date, dateTimeClassToAdd, dateClassToAdd, timeClassToAdd) {
    const dateTime = new Date(date);
    const month = padNumberByZero(dateTime.getMonth() + 1);
    const dateTimeDiv = document.createElement('div');
    dateTimeDiv.classList.add('d-flex', 'justify-content-between', dateTimeClassToAdd);
    const dateSpan = document.createElement('span');
    dateSpan.classList.add('d-inline-flex', 'mr-1', dateClassToAdd);
    dateSpan.textContent = [padNumberByZero(dateTime.getDate()), month, dateTime.getFullYear()].join('.');
    const timeSpan = document.createElement('span');
    timeSpan.classList.add('d-inline-flex', timeClassToAdd);
    timeSpan.textContent = [padNumberByZero(dateTime.getHours()), padNumberByZero(dateTime.getMinutes())].join(':');
    dateTimeDiv.append(dateSpan, timeSpan);
    return dateTimeDiv;
  }

  /*
    Создание кнопки изменения данных о клиенте
  */

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

  /*
    Создание элемента ввода контактных данных
    valuesArr - список опций для селекта
  */

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

  /*
    Конфигурирование элемента ввода контактных данных
  */

  function configureSelect(select) {
    const choicesElement = new Choices(select, {
      searchEnabled: false,
      itemSelectText: '',
      shouldSort: false,
    });
    return choicesElement;
  }

  /*
    Создание элемента ввода фио клиента
  */

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

  /*
    Создание дива с элементами для ввода ФИО
    Параметр fillName отвечает за необходимость заполнения инпутов имеющимися данными
  */

  function configModalNameDiv(clientObj, fillName = false) {
    const nameDiv = document.createElement('div');
    nameDiv.classList.add('d-flex', 'flex-column');
    const nameInput = createInputObj('name', 'Имя', '', true);
    const surnameInput = createInputObj('surname', 'Фамилия', '', true);
    const lastNameInput = createInputObj('lastName', 'Отчество');

    if (fillName !== undefined && fillName) {
      nameInput.input.value = clientObj.name;
      surnameInput.input.value = clientObj.surname;
      lastNameInput.input.value = clientObj.lastName;
    }
    nameInput.input.addEventListener(
      'input',
      function (e) {
        clientObj.name = e.target.value;
      }
    );
    surnameInput.input.addEventListener(
      'input',
      function (e) {
        clientObj.surname = e.target.value;
      }
    );
    lastNameInput.input.addEventListener(
      'input',
      function (e) {
        clientObj.lastName = e.target.value;
      }
    );
    nameDiv.append(nameInput.inputDiv, surnameInput.inputDiv, lastNameInput.inputDiv);
    return nameDiv;
  }

  /*
    Создание наполнения модального окна для изменения данных клиента
  */

  function createChangeClientModalContent(obj, modal) {
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

    const nameDiv = configModalNameDiv(obj, fillName = true);

    const contactsDiv = document.createElement('div');
    contactsDiv.classList.add('d-flex', 'flex-column', 'bg-light', 'p-3', 'mb-2');
    const contactsList = document.createElement('ul');
    contactsList.classList.add('d-flex', 'flex-column', 'mx-0', 'mb-2', 'p-0');
    const contactTypeChoices = [];
    const contactValueInputs = [];
    const contactDeleteButtons = [];

    obj.contacts.forEach((item, index, array) => {
      const contactItemDiv = document.createElement('div');
      contactItemDiv.classList.add('d-flex', 'contact__item-div');
      if (index !== array.length - 1) contactItemDiv.classList.add('mb-2');

      const contactTypeSelect = createSelect(values, 'sel1');
      contactItemDiv.append(contactTypeSelect);
      const contactItemSelect = configureSelect(contactTypeSelect);

      contactTypeChoices.push(contactItemSelect);
      contactItemSelect.setChoiceByValue(item.type);
      contactItemSelect.passedElement.element.addEventListener(
        'choice',
        function (e) {
          obj.contacts[contactTypeChoices.indexOf(contactItemSelect)].type = e.detail.choice.value;
        },
        false,
      );

      const contactValueInput = document.createElement('input');
      contactValueInput.classList.add('p-1', 'mw-75');
      contactValueInput.value = item.value;
      contactValueInputs.push(contactValueInput);
      contactValueInput.addEventListener(
        'input',
        function (e) {
          obj.contacts[contactValueInputs.indexOf(contactValueInput)].value = e.target.value;
        },
        false,
      );

      const contactDeleteButton = document.createElement('a');
      contactDeleteButton.classList.add('d-flex', 'd-inline-flex', 'contact-delete-button', 'align-items-center', 'justify-content-center');
      const contactDeleteIcon = createIcon('contact-delete', 'contact-delete-icon');
      contactDeleteButton.append(contactDeleteIcon);
      contactDeleteButtons.push(contactDeleteButton);
      configContactDeleteButton(contactDeleteButton, obj, contactDeleteButtons, contactValueInputs, contactTypeChoices);

      contactItemDiv.append(contactValueInput, contactDeleteButton);
      contactsList.append(contactItemDiv);
    });
    contactsDiv.append(contactsList);

    const addContactButton = document.createElement('a');
    addContactButton.classList.add('d-flex', 'd-inline-flex', 'justify-content-center', 'align-items-center', 'add-contact-button');
    const addContactSpan = document.createElement('span');
    addContactSpan.classList.add('d-inline-flex');
    addContactSpan.textContent = 'Добавить контакт';
    const addContactIcon = createIcon('contact-add', 'contact-add-icon');
    addContactButton.append(addContactIcon, addContactSpan);

    configAddContactButton(addContactButton, obj, contactTypeChoices, contactValueInputs, contactDeleteButtons, contactsList);

    contactsDiv.append(addContactButton);

    const saveButton = document.createElement('a');
    saveButton.classList.add('d-flex', 'd-inline-flex', 'align-self-center', 'justify-content-center', 'p-1', 'mb-1', 'w-50', 'contact-save-button');
    saveButton.textContent = 'Сохранить';
    saveButton.addEventListener(
      'click',
      async function (e) {
        modal.showTransparentSpinner();
        const dat = await changeClientByID(obj.id, obj);
        // console.log(dat);
        if (dat) {
          setTimeout(async () => {

            modal.hideTransparentSpinner();
            modal.hideModal();

            await filterClients();
          }, 1000)
        }
      }
    );

    const deleteButton = document.createElement('a');
    deleteButton.classList.add('d-flex', 'd-inline-flex', 'justify-content-center', 'align-items-center', 'client-delete-button');
    deleteButton.textContent = 'Удалить клиента';

    container.append(modalHeaderDiv, nameDiv, contactsDiv, saveButton, deleteButton);

    deleteButton.addEventListener(
      'click',
      async function (e) {
        const modalContent = createDeleteConfirmModalContent(obj, modal, container);
        modal.insertFormIntoModal(modalContent.container).showModal();
      }
    );

    return {
      container,
      contactTypeChoices,
      contactValueInputs,
      contactDeleteButtons,
      saveButton,
      deleteButton,
    };
  }

  /*
    Конфигурирование кнопки добавления нового контакта
    Для конфигурирования используются:
    1) сама кнопка
    2) объект с данным о клиенте
    3) список селектов с типом контакта
    4) список инпутов со значением контакта
    5) список кнопок удаления контактов
    6) список элементов контактов
  */

  function configAddContactButton(addContactButton, clientObj, contactTypeChoices, contactValueInputs, contactDeleteButtons, contactsList) {
    addContactButton.addEventListener(
      'click',
      function (e) {
        e.preventDefault();

        const newContact = {
          'type': 'other',
          'value': ''
        }
        clientObj.contacts.push(newContact);

        const contactItemDivs = document.querySelectorAll('.contact__item-div');
        if (contactItemDivs[contactItemDivs.length - 1] !== undefined) {
          contactItemDivs[contactItemDivs.length - 1].classList.add('mb-2');
        }

        const contactItemDiv = document.createElement('div');
        contactItemDiv.classList.add('d-flex', 'contact__item-div');

        const contactTypeSelect = createSelect(values, 'sel1');
        contactItemDiv.append(contactTypeSelect);
        const contactItemSelect = configureSelect(contactTypeSelect);

        contactTypeChoices.push(contactItemSelect);
        contactItemSelect.setChoiceByValue('other');
        contactItemSelect.passedElement.element.addEventListener(
          'choice',
          function (e) {
            // console.log(contactTypeChoices.indexOf(contactItemSelect));
            clientObj.contacts[contactTypeChoices.indexOf(contactItemSelect)].type = e.detail.choice.value;
            // console.log(clientObj);
          },
          false,
        );

        const contactValueInput = document.createElement('input');
        contactValueInput.classList.add('p-1', 'mw-75');
        contactValueInputs.push(contactValueInput);
        contactValueInput.addEventListener(
          'input',
          function (e) {
            clientObj.contacts[contactValueInputs.indexOf(contactValueInput)].value = e.target.value;
          },
          false,
        );

        const contactDeleteButton = document.createElement('a');
        contactDeleteButton.classList.add('d-flex', 'd-inline-flex', 'contact-delete-button', 'align-items-center', 'justify-content-center');
        const contactDeleteIcon = createIcon('contact-delete', 'contact-delete-icon');
        contactDeleteButton.append(contactDeleteIcon);
        contactDeleteButtons.push(contactDeleteButton);
        configContactDeleteButton(contactDeleteButton, clientObj, contactDeleteButtons, contactValueInputs, contactTypeChoices);

        // console.log(clientObj)
        contactItemDiv.append(contactValueInput, contactDeleteButton);
        contactsList.append(contactItemDiv);
      }
    );
  }

  /*
    Конфигурирование кнопки удаления контакта
    Для конфигурирования используются:
    1) сама кнопка
    2) объект с данным о клиенте
    3) список кнопок удаления контактов
    4) список инпутов со значением контакта
    5) список селектов с типом контакта
  */

  function configContactDeleteButton(contactDeleteButton, clientObj, contactDeleteButtons, contactValueInputs, contactTypeChoices) {
    contactDeleteButton.addEventListener(
      'click',
      function (e) {
        e.preventDefault();
        let elementToWorkWith = null;
        // следующий кусок кода нужен чтобы адекватно определить что работать надо с самой кнопкой
        // тк присутствует следующая вложенность объектов снизу вверх:
        // path -> g -> svg -> a
        if (e.target.tagName === 'path') {
          elementToWorkWith = e.target.parentElement.parentElement.parentElement;
        } else if (e.target.tagName === 'g') {
          elementToWorkWith = e.target.parentElement.parentElement;
        } else if (e.target.tagName === 'svg') {
          elementToWorkWith = e.target.parentElement;
        } else {
          elementToWorkWith = e.target;
        }
        const elementNumber = contactDeleteButtons.indexOf(elementToWorkWith);
        elementToWorkWith.parentElement.remove();
        contactDeleteButtons.splice(elementNumber, 1);
        contactValueInputs.splice(elementNumber, 1);
        contactTypeChoices.splice(elementNumber, 1);
        clientObj.contacts.splice(elementNumber, 1);
        // console.log(clientObj);
      }
    );
  }

  /*
    Создание наполнения модального окна для создания клиента
  */

  function createNewClientModalContent(modal) {
    const obj = {};
    obj.contacts = [];
    const container = document.createElement('div');
    container.classList.add('d-flex', 'flex-column', 'w-75', 'content', 'h-100');

    const modalHeaderDiv = document.createElement('div');
    modalHeaderDiv.classList.add('d-flex', 'align-items-end');
    const modalHeaderTitle = document.createElement('h3');
    modalHeaderTitle.classList.add('d-inline-flex', 'm-0');
    modalHeaderTitle.textContent = 'Новый клиент';
    modalHeaderDiv.append(modalHeaderTitle);

    const nameDiv = configModalNameDiv(obj);

    const contactsDiv = document.createElement('div');
    contactsDiv.classList.add('d-flex', 'flex-column', 'bg-light', 'p-3', 'mb-2');
    const contactsList = document.createElement('ul');
    contactsList.classList.add('d-flex', 'flex-column', 'mx-0', 'mb-2', 'p-0');
    const contactTypeChoices = [];
    const contactValueInputs = [];
    const contactDeleteButtons = [];

    contactsDiv.append(contactsList);

    const addContactButton = document.createElement('a');
    addContactButton.classList.add('d-flex', 'd-inline-flex', 'justify-content-center', 'align-items-center', 'add-contact-button');
    const addContactSpan = document.createElement('span');
    addContactSpan.classList.add('d-inline-flex');
    addContactSpan.textContent = 'Добавить контакт';
    const addContactIcon = createIcon('contact-add', 'contact-add-icon');
    addContactButton.append(addContactIcon, addContactSpan);
    configAddContactButton(addContactButton, obj, contactTypeChoices, contactValueInputs, contactDeleteButtons, contactsList);

    contactsDiv.append(addContactButton);

    const saveButton = document.createElement('a');
    saveButton.classList.add('d-flex', 'd-inline-flex', 'align-self-center', 'justify-content-center', 'p-1', 'mb-1', 'w-50', 'contact-save-button');
    saveButton.textContent = 'Сохранить';
    saveButton.addEventListener(
      'click',
      async function (e) {
        modal.showTransparentSpinner();
        setTimeout(async () => {
          const dat = await createNewClient(obj);
          // console.log(dat);
          if (dat) {
            clients = [...clients, dat];
            modal.hideTransparentSpinner();
            modal.hideModal();
            fillClientsListView(clientsListDiv, clients);
          }
        }, 1000);

      }
    );

    const cancelButton = document.createElement('a');
    cancelButton.classList.add('d-flex', 'd-inline-flex', 'align-self-center', 'justify-content-center', 'p-1', 'mb-1', 'w-50', 'client-delete-button');
    cancelButton.textContent = 'Отмена';
    cancelButton.addEventListener(
      'click',
      function (e) {
        modal.hideModal();
      }
    );

    container.append(modalHeaderDiv, nameDiv, contactsDiv, saveButton, cancelButton);

    return {
      container,
      contactTypeChoices,
      contactValueInputs,
      contactDeleteButtons,
      saveButton,
    };
  }

  /*
    Создание наполнения модального окна для подтверждения удаления клиента
    clientData - объект клиента,
    modal - само модальное окно,
    previousModal - предыдущее наполнения модального окна
  */

  function createDeleteConfirmModalContent(clientData, modal, previousModal) {
    const container = document.createElement('div');
    container.classList.add('d-flex', 'flex-column', 'w-75', 'content', 'h-100', 'justify-content-center', 'align-items-center');


    const modalHeaderTitle = document.createElement('h3');
    modalHeaderTitle.classList.add('d-inline-flex', 'm-0', 'align-self-center');
    modalHeaderTitle.textContent = 'Удалить клиента';

    const textBlock = document.createElement('p');
    textBlock.classList.add('d-flex', 'd-inline-flex', 'justify-content-center', 'align-self-center', 'align-items-center', 'm-0', 'mb-2', 'w-75');
    textBlock.textContent = 'Вы действительно хотите удалить данного клиента?';
    textBlock.style.textAlign = 'center';

    const deleteButton = document.createElement('a');
    deleteButton.classList.add('d-flex', 'd-inline-flex', 'justify-content-center', 'align-self-center', 'align-items-center', 'contact-save-button', 'mb-1', 'w-25', 'p-2');
    deleteButton.textContent = 'Удалить';

    const cancelButton = document.createElement('a');
    cancelButton.classList.add('d-flex', 'd-inline-flex', 'justify-content-center', 'align-self-center', 'align-items-center', 'client-delete-button', 'mb-1', 'w-25', 'p-2');
    cancelButton.textContent = 'Отмена';


    deleteButton.addEventListener(
      'click',
      async function (e) {
        modal.showTransparentSpinner();
        setTimeout(async () => {
          await updateClientsDataAfterDelete(clientData);
          modal.hideTransparentSpinner();
          modal.hideModal();
        }, 1000);
      }
    );

    cancelButton.addEventListener(
      'click',
      function (e) {
        if (previousModal !== undefined) {
          modal.insertFormIntoModal(previousModal).showModal();
        } else modal.hideModal();
      }
    );

    container.append(modalHeaderTitle, textBlock, deleteButton, cancelButton);

    return {
      container,
      deleteButton,
      cancelButton,
    };
  }

  /*
    Создание шапки таблицы клиентов с конфигурацией сортировок
  */

  async function createClientsListHeader() {
    const clientListHeader = document.createElement('div');
    clientListHeader.classList.add('d-flex', 'flex-row', 'justify-content-start', 'align-items-center', 'clients__header', 'mb-3', 'px-4');

    const idSortAsc = (a, b) => {
      return parseInt(a.id) - parseInt(b.id);
    }
    const idSortDesc = (a, b) => {
      return parseInt(b.id) - parseInt(a.id);
    }
    const idSort = await configClientsListHeaderElement('ID', idSortAsc, idSortDesc, 'clients__id');

    const nameSortAsc = (a, b) => {
      const aName = [a.surname, a.name, a.lastName].join(' ');
      const bName = [b.surname, b.name, b.lastName].join(' ');
      return aName.localeCompare(bName);
    }
    const nameSortDesc = (a, b) => {
      const aName = [a.surname, a.name, a.lastName].join(' ');
      const bName = [b.surname, b.name, b.lastName].join(' ');
      return bName.localeCompare(aName);
    }
    const nameSort = await configClientsListHeaderElement('Фамилия Имя Отчество', nameSortAsc, nameSortDesc, 'clients__name');

    const dateSortAsc = (a, b) => {
      const aCreationDate = new Date(a.createdAt);
      const bCreationDate = new Date(b.createdAt);
      return aCreationDate > bCreationDate;
    }
    const dateSortDesc = (a, b) => {
      const aCreationDate = new Date(a.createdAt);
      const bCreationDate = new Date(b.createdAt);
      return aCreationDate < bCreationDate;
    }

    const updDateSortAsc = (a, b) => {
      const aCreationDate = new Date(a.updatedAt);
      const bCreationDate = new Date(b.updatedAt);
      return aCreationDate > bCreationDate;
    }
    const updDateSortDesc = (a, b) => {
      const aCreationDate = new Date(a.updatedAt);
      const bCreationDate = new Date(b.updatedAt);
      return aCreationDate < bCreationDate;
    }
    const creationDateSort = await configClientsListHeaderElement('Дата и время создания', dateSortAsc, dateSortDesc, 'clients__create-datetime');

    const updateDateSort = await configClientsListHeaderElement('Последние изменения', updDateSortAsc, updDateSortDesc, 'clients__update-datetime');

    const contactsSpan = document.createElement('span');
    contactsSpan.classList.add('d-inline-flex', 'clients__contacts');
    contactsSpan.textContent = 'Контакты';

    const actionsSpan = document.createElement('span');
    actionsSpan.classList.add('d-inline-flex', 'clients__actions');
    actionsSpan.textContent = 'Действия';

    clientListHeader.append(idSort, nameSort, creationDateSort, updateDateSort, contactsSpan, actionsSpan);
    return clientListHeader;
  }

  /*
    Конфигурация элементов сортировок в шапке таблицы с клиентами
  */

  async function configClientsListHeaderElement(name, sortAscFunction, sortDescFunction, elementClass) {
    const elemSort = document.createElement('a');
    elemSort.classList.add('d-flex', 'd-inline-flex', 'justify-content-start', 'align-items-center');
    if (elementClass !== undefined) elemSort.classList.add(elementClass);

    const elemSortText = document.createElement('span');
    elemSortText.classList.add('d-inline-flex');
    elemSortText.textContent = name;

    const elemSortArrow = createIcon('arrow', 'arrow', '12', '12', '0 0 12 12');
    elemSortArrow.classList.add('arrow-hidden');
    elemSortArrow.classList.remove('d-flex');
    elemSort.append(elemSortText, elemSortArrow);

    let elemSortValue = '';

    elemSort.addEventListener(
      'click',
      function (e) {
        e.preventDefault();
        // let clients = await getClients();
        currentClients = [...clients];
        if (elemSortValue === '') {
          elemSortValue = 'up';
          elemSortArrow.classList.toggle('arrow-hidden', false);
          elemSortArrow.classList.toggle('arrow-up', true);
          fillClientsListView(clientsListDiv, currentClients.sort((a, b) => sortAscFunction(a, b)));
        } else if (elemSortValue === 'up') {
          elemSortValue = 'down';
          elemSortArrow.classList.toggle('arrow-up', false);
          elemSortArrow.classList.toggle('arrow-down', true);
          fillClientsListView(clientsListDiv, currentClients.sort((a, b) => sortDescFunction(a, b)));
        } else {
          elemSortValue = '';
          elemSortArrow.classList.toggle('arrow-down', false);
          elemSortArrow.classList.toggle('arrow-hidden', true);
          fillClientsListView(clientsListDiv, clients);
        }
        console.log(elemSortValue);
      }
    );
    return elemSort;
  }

  /*
    Создание контейнера для отображения данных о клиенте
  */

  function createClientsListDiv() {
    const clientsListDiv = document.createElement('div');
    clientsListDiv.classList.add('d-flex', 'flex-column', 'align-self-center', 'justify-content-center');
    return clientsListDiv;
  }

  /*
    Создание контейнера для индикатора загрузки
  */

  function createSpinner(defaultClass = 'spinner-container_bg-white') {
    const spinnerContainer = document.createElement('div');
    spinnerContainer.classList.add('align-items-center', 'justify-content-center', 'spinner-container', 'spinner-container_visible', defaultClass, 'mb-3');
    spinnerContainer.style.height = '100%';
    spinnerContainer.style.width = '100%';

    const spinner = document.createElement('div');
    spinner.classList.add('loader', 'simple-circle');
    spinnerContainer.append(spinner);

    return {
      spinnerContainer,
      showSpinner() {
        this.spinnerContainer.classList.toggle('spinner-container_visible', true);
      },
      hideSpinner() {
        this.spinnerContainer.classList.toggle('spinner-container_visible', false);
      }
    };
  }

  /*
    Заполнения дива с контактами и его конфигурирование
  */

  function fillContactsDiv(contactsDiv, client) {
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

      const tooltipBlock = document.createElement('div');
      const tooltipBody = document.createElement('p');
      const tooltipArrow = document.createElement('div');
      tooltipBlock.classList.add('tooltip-block');
      tooltipBody.classList.add('tooltip-body');
      tooltipArrow.classList.add('tooltip-arrow');
      tooltipBody.textContent = element.type + ': ' + element.value;

      tooltipBlock.append(tooltipBody, tooltipArrow);
      link.append(tooltipBlock);

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
  }

  /*
    Создание элемента (li) для отображения данных о клиенте
  */

  function createClientView(client) {
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

    fillContactsDiv(contactsDiv, client);

    const changeClientButton = createDataEditButton('clients__list-change-button', 'change', 'change-element-icon', 'Изменить');

    const deleteClientButton = createDataEditButton('clients__list-delete-button', 'delete', 'delete-element-icon', 'Удалить');

    changeClientButton.addEventListener(
      'click',
      async function (e) {
        e.preventDefault();
        await modal.showModalForClient(client);
      });

    deleteClientButton.addEventListener(
      'click',
      async function (e) {
        e.preventDefault();
        const modalContent = createDeleteConfirmModalContent(client, modal);
        modal.insertFormIntoModal(modalContent.container).showModal();
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

  function createClientsListView(clients) {
    const clienstListView = document.createElement('ul');
    clienstListView.classList.add('d-flex', 'flex-column', 'm-0', 'p-0', 'clients__list', 'mb-3');
    clients.forEach(item => {
      const clientLi = createClientView(item);
      clienstListView.append(clientLi);
    });
    return clienstListView;
  }

  /*
    Функция обновления данных на странице после удаления клиента
  */

  async function updateClientsDataAfterDelete(client) {
    const clientData = await getClientByID(client.id);
    const data = await deleteClientByID(clientData.id);
    if (data) {
      // console.log('DELETE');
      await filterClients();
    }

  }

  /*
    Создание контейнера для кнопки добавления клиентов
  */

  function createAppPageBottom() {
    const appPageBottom = document.createElement('div');
    appPageBottom.classList.add('d-flex', 'flex-column', 'align-self-center', 'justify-content-center', 'w-100', 'mb-3');
    return appPageBottom;
  }

  /*
    Создание кнопки добавления клиентов
  */

  function createNewClientButton() {
    const newClientButton = document.createElement('a');
    newClientButton.classList.add('d-flex', 'd-inline-flex', 'align-self-center', 'align-items-center', 'justify-content-center', 'p-1', 'mb-1', 'w-25', 'new-client-button');
    const newClientIcon = createIcon('new-client', 'new-client-icon', width = '23', height = '16', viewBox = '0 0 23 16');
    newClientIcon.classList.add('d-inline-flex');
    const newClientText = document.createElement('p');
    newClientText.classList.add('d-inline-flex', 'm-0');
    newClientText.textContent = 'Добавить контакт';
    newClientButton.append(newClientIcon, newClientText);
    newClientButton.addEventListener(
      'click',
      async function (e) {
        // console.log('new client button pressed');
        const newClientContent = createNewClientModalContent(modal);
        modal.insertFormIntoModal(newClientContent.container).showModal();
      }
    );
    return newClientButton;
  }

  /*
    Наполнение контейнера данными о клиентах
  */

  function fillClientsListView(block, clients, showSpinner = false) {
    block.innerHTML = '';
    if (showSpinner) {
      spinner.showSpinner();
      // Код используется для демонстрации работы спиннера
      setTimeout(() => {
        const clienstListView = createClientsListView(clients);
        spinner.hideSpinner();
        block.append(clienstListView);
      }, 1000);
      return;
    }

    // Код используемый в приложении при работе
    spinner.showSpinner();
    const clienstListView = createClientsListView(clients);
    spinner.hideSpinner();
    block.append(clienstListView);

  }


  const modal = createModal();
  const app = getContainer();
  const searchInput = createSearchInput();
  const appHeader = createAppHeader();
  const clientsListHeader = await createClientsListHeader();
  const clientsListDiv = createClientsListDiv();
  const spinner = createSpinner();
  const appPageBottom = createAppPageBottom();
  const newClientButton = createNewClientButton();
  let clients = await getClients();
  let searchInputTimeout = null;
  appPageBottom.append(newClientButton);
  app.append(searchInput, appHeader, clientsListHeader, spinner.spinnerContainer, clientsListDiv, appPageBottom);
  fillClientsListView(clientsListDiv, clients, showSpinner = true);

  // TODO:

  // 1) Расставить обработку статусов http-запросов
  // 2) Валидация формы добавления / изменения данных
  // 3) Рефакторинг кода, DRY
  // 4) Реализовать автодополнение для поиска

})();
