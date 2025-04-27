const form = document.getElementById('contact-form');
const successModal = document.getElementById('success-modal');
const closeModalBtn = document.querySelector('.close-modal');

form.addEventListener('submit', async function (e) {
  e.preventDefault();

  const email = form.elements['form-email'].value.trim();
  const message = form.elements['user-message'].value.trim();

  try {
    const response = await fetch('https://portfolio-js.b.goit.study/api/requests', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            email: email,
            comment: message
        }),
    });

 if (response.ok) {
  openModal();
  form.reset();
} else {
  iziToast.error({
    title: 'Error',
    message: 'Check the data and try again',
    position: "topRight",
    backgroundColor: "#d90429",
    messageColor: "#fff",
    timeout: 5000,
    progressBar: false,
    close: true,
    transitionIn: 'fadeInDown',
    transitionOut: 'fadeOutUp',
  });
 }
} catch (error) {
  iziToast.error({
    title: 'Network error',
    message: 'Try again.',
    position: "topRight",
    backgroundColor: "#d90429",
    messageColor: "#fff",
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
