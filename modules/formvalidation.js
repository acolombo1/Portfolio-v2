const form = document.getElementById('myform');
const fullname = document.getElementById('fullname');
const email = document.getElementById('email');
const message = document.getElementById('message');
const formvalidmsg = document.getElementById('formvalidmsg');

function isValidEmail(email) {
  const regexValidate = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regexValidate.test(String(email).toLowerCase());
}

function storedata() {
  const data = { Name: fullname.value, Email: email.value, Message: message.value };
  localStorage.setItem('data', JSON.stringify(data));
}

export default function loaddata() {
  if (localStorage.getItem('data') != null) {
    const data = JSON.parse(localStorage.getItem('data'));
    fullname.value = data.Name;
    email.value = data.Email;
    message.value = data.Message;
  }
}

fullname.addEventListener('input', () => {
  if (fullname.value.length > 1 && fullname.value.length < 31) {
    formvalidmsg.innerHTML = '';
    formvalidmsg.style.opacity = '0';
    fullname.style.backgroundColor = 'rgb(215, 255, 215)';
    fullname.style.borderColor = 'rgb(215, 255, 215)';
  } else {
    formvalidmsg.innerHTML = 'Name should be 2 to 30 characters long!';
    formvalidmsg.style.opacity = '1';
    fullname.style.backgroundColor = 'rgb(255, 204, 204)';
    fullname.style.borderColor = 'rgb(255, 204, 204)';
  }
  storedata();
});

email.addEventListener('input', () => {
  if (isValidEmail(email.value)) {
    if (/[A-Z]/.test(email.value)) {
      formvalidmsg.innerHTML = 'Email should be all lowercase!';
      formvalidmsg.style.opacity = '1';
      email.style.backgroundColor = 'rgb(255, 204, 204)';
      email.style.borderColor = 'rgb(255, 204, 204)';
    } else {
      formvalidmsg.innerHTML = '';
      formvalidmsg.style.opacity = '0';
      email.style.backgroundColor = 'rgb(215, 255, 215)';
      email.style.borderColor = 'rgb(215, 255, 215)';
    }
  } else {
    formvalidmsg.innerHTML = 'Email is not in a valid format!';
    formvalidmsg.style.opacity = '1';
    email.style.backgroundColor = 'rgb(255, 204, 204)';
    email.style.borderColor = 'rgb(255, 204, 204)';
  }
  storedata();
});

message.addEventListener('input', () => {
  if (message.value.length > 9 && message.value.length < 501) {
    formvalidmsg.innerHTML = '';
    formvalidmsg.style.opacity = '0';
    message.style.backgroundColor = 'rgb(215, 255, 215)';
    message.style.borderColor = 'rgb(215, 255, 215)';
  } else {
    formvalidmsg.innerHTML = 'Message should be 10 to 500 characters long!';
    formvalidmsg.style.opacity = '1';
    message.style.backgroundColor = 'rgb(255, 204, 204)';
    message.style.borderColor = 'rgb(255, 204, 204)';
  }
  storedata();
});

form.addEventListener('submit', (event) => {
  if (!(message.value.length > 9 && message.value.length < 501)) {
    formvalidmsg.innerHTML = 'Message should be 10 to 500 characters long!';
    formvalidmsg.style.opacity = '1';
    message.style.backgroundColor = 'rgb(255, 204, 204)';
    message.style.borderColor = 'rgb(255, 204, 204)';
    if (window.matchMedia('(max-width: 900px)').matches) {
      message.scrollIntoView();
    }
    event.preventDefault();
  }
  if (!isValidEmail(email.value)) {
    formvalidmsg.innerHTML = 'Email is not in a valid format!';
    formvalidmsg.style.opacity = '1';
    email.style.backgroundColor = 'rgb(255, 204, 204)';
    email.style.borderColor = 'rgb(255, 204, 204)';
    if (window.matchMedia('(max-width: 900px)').matches) {
      email.scrollIntoView();
      window.scrollBy(0, -35);
    }
    event.preventDefault();
  } else if (/[A-Z]/.test(email.value)) {
    formvalidmsg.innerHTML = 'Email should be all lowercase!';
    formvalidmsg.style.opacity = '1';
    email.style.backgroundColor = 'rgb(255, 204, 204)';
    email.style.borderColor = 'rgb(255, 204, 204)';
    if (window.matchMedia('(max-width: 900px)').matches) {
      email.scrollIntoView();
      window.scrollBy(0, -35);
    }
    event.preventDefault();
  }
  if (!(fullname.value.length > 1 && fullname.value.length < 31)) {
    formvalidmsg.innerHTML = 'Name should be 2 to 30 characters long!';
    formvalidmsg.style.opacity = '1';
    fullname.style.backgroundColor = 'rgb(255, 204, 204)';
    fullname.style.borderColor = 'rgb(255, 204, 204)';
    if (window.matchMedia('(max-width: 900px)').matches) {
      fullname.scrollIntoView();
      window.scrollBy(0, -70);
    }
    event.preventDefault();
  }
  storedata();
});
