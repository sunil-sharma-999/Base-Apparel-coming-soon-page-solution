const email = document.querySelector('.email');
const submit = document.querySelector('button');
const pos = document.querySelector('.pos');
const warn = document.querySelector('.warning');
const subs = document.querySelector('.subs');
const err = document.querySelector('.err');
const valid =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function ok() {
  subs.textContent = 'Subscribed';
  subs.style.cssText =
    'position: absolute;left: 0;margin: 0.5rem 0 0 2rem;color: var(--SoftRed) ';
  warn.style.cssText = '';
  warn.textContent = '';
  err.style.visibility = 'hidden';
}
function notOk() {
  warn.textContent = 'Please provide a valid email';
  warn.style.cssText =
    'position: absolute;left: 0;margin: 0.5rem 0 0 2rem;color:red;';
  subs.style.cssText = '';
  subs.textContent = '';
  err.style.visibility = 'visible';
}

submit.addEventListener('click', (e) => {
  if (valid.test(email.value)) {
    e.preventDefault();
    ok();
  } else {
    e.preventDefault();
    notOk();
  }
});
