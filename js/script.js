const div1 = document.querySelector('.div1');
const icons = document.querySelector('.social-icons');
const contacts = document.querySelector('.contact-icons');
const contactText = document.querySelector('.contact');

div1.addEventListener('click', () => {
  div1.classList.remove('clicked');

  void div1.offsetWidth;
  void icons.offsetWidth;

  div1.classList.add('clicked');
  div1.style.pointerEvents = 'none';

  icons.classList.add('clicked2');
}); 

document.getElementsByClassName('gmail-button')[0].addEventListener('click', () => {
  const email = 'oleksandr.melnychenko.main@gmail.com';

  navigator.clipboard.writeText(email).then(() => {
    alert('Email copied to clipboard!');
  }).catch(err => {
    alert('Failed to copy email. Please copy manually.');
    console.error(err);
  });
});

contactText.addEventListener('click', () => {
  contacts.classList.toggle('active');
});