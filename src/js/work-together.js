import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.getElementById('contact-form');
const successModal = document.getElementById('success-modal');
const closeModalBtn = document.querySelector('.close-modal');

const emailInput = document.getElementById('form-email');
const emailIcon = document.getElementById('email-valid-icon');
const emailError = document.getElementById('email-error');

emailInput.addEventListener('input', () => {
  const emailPattern = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

  if (emailPattern.test(emailInput.value.trim())) {
    emailInput.classList.remove('invalid');
    emailIcon.classList.add('visible');
    emailError.classList.remove('visible');
    emailInput.style.color = 'var(--main-text-color)';
  } else {
    emailInput.classList.add('invalid');
    emailIcon.classList.remove('visible');
    emailError.classList.add('visible');
    emailInput.style.color = '#e74a3b';
  }
});

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const email = form.elements['form-email'].value.trim();
  const message = form.elements['user-message'].value.trim();

  try {
    const response = await fetch(
      'https://portfolio-js.b.goit.study/api/requests',
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email: email,
          comment: message,
        }),
      }
    );

    if (response.ok) {
      form.reset();
      emailIcon.classList.remove('visible');
      emailError.classList.remove('visible');
      emailInput.style.color = 'var(--main-text-color)';
      openModal();
    } else {
      iziToast.warning({
        title: 'Warning',
        message: 'Check the data and try again',
        position: 'topRight',
        backgroundColor: '#FFB81C',
        messageColor: '#3B3D40',
        timeout: 5000,
        progressBar: false,
        close: true,
        maxWidth: 400,
        transitionIn: 'fadeInDown',
        transitionOut: 'fadeOutUp',
      });
    }
  } catch (error) {
    iziToast.warning({
      title: 'Network error',
      message: 'Try again.',
      position: 'topRight',
      backgroundColor: '#FFB81C',
      messageColor: '#3B3D40',
      timeout: 5000,
      progressBar: false,
      close: true,
      transitionIn: 'fadeInDown',
      transitionOut: 'fadeOutUp',
    });
  }
});

function openModal() {
  successModal.classList.add('is-open');
  document.body.classList.add('modal-open');
}

function closeModal() {
  successModal.classList.remove('is-open');
  document.body.classList.remove('modal-open');
}

closeModalBtn.addEventListener('click', closeModal);

successModal.addEventListener('click', function (e) {
  if (e.target === successModal) {
    closeModal();
  }
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && successModal.classList.contains('is-open')) {
    closeModal();
  }
});
