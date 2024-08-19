const attackModal = document.getElementById('attack-modal');
const itemsModal = document.getElementById('items-modal');
const attackButton = document.getElementById('attack-button');
const itemsButton = document.getElementById('items-button');
const attackCloseBtn = document.getElementById('attack-modal-close-btn');
const itemsCloseBtn = document.getElementById('items-modal-close-btn');
const span = document.getElementsByClassName('close')[0];

// Function to display modal
const displayModal = modal => modal.style.display = 'block';
const closeModal = modal => modal.style.display = 'none';

// Open the modal
attackButton.addEventListener('click', () => displayModal(attackModal));
itemsButton.addEventListener('click', () => displayModal(itemsModal));

// Close the modal
attackCloseBtn.addEventListener('click', () => closeModal(attackModal));
itemsCloseBtn.addEventListener('click', () => closeModal(itemsModal));
