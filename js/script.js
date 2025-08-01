const div1 = document.querySelector('.div1');
const icons = document.querySelector('.social-icons');
const contacts = document.querySelector('.contact-icons');
const contactText = document.querySelector('.contact');
const textContainer1 = document.querySelector('.text-container1');

div1.addEventListener('click', () => {
  div1.classList.remove('clicked');

  void textContainer1.offsetWidth;
  void div1.offsetWidth;
  void icons.offsetWidth;

  div1.classList.add('clicked');
  div1.style.pointerEvents = 'none';

  icons.classList.add('clicked2');

  textContainer1.classList.add('clicked3');
});

contactText.addEventListener('click', () => {
  contacts.classList.toggle('active');
});
