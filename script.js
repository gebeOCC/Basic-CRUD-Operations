
    const contactList = document.getElementById('contact-list');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const addContactButton = document.getElementById('add-contact');
    let editMode = false;
    let editedContact = null;

    addContactButton.addEventListener('click', () => {
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();

        if (name == '') {
            alert('Please enter your name.');
            return;
        }else if (email == '') {
            alert('Please enter email');
            return;
        }

        if (editMode) {
            editedContact.querySelector('div:first-child').textContent = name;
            editedContact.querySelector('div:nth-child(2)').textContent = email;
            editedContact = null;
            editMode = false;
            addContactButton.textContent = 'Add Contact';
        } else {
            const contactItem = document.createElement('div');
            contactItem.classList.add('contact-item');
            contactItem.innerHTML = `
                <div class="informations"><p class="name">${name}</p></div>
                <div class="informations"><p class="email">${email}</P></div>
                <button style="background-color: blue" class="edit-contact">Edit</button>
                <button  style="background-color: red" class="delete-contact">Delete</button>
            `;

            const editButton = contactItem.querySelector('.edit-contact');
            editButton.addEventListener('click', () => {
                const contactName = contactItem.querySelector('.informations:first-child').textContent;
                const contactEmail = contactItem.querySelector('.informations:nth-child(2)').textContent;
    
                nameInput.value = contactName;
                emailInput.value = contactEmail;
                editMode = true;
                editedContact = contactItem;
                addContactButton.textContent = 'Update Contact';
            });

            const deleteButton = contactItem.querySelector('.delete-contact');
            deleteButton.addEventListener('click', () => {
                const confirmDelete = confirm('Are you sure you want to delete this contact?');
    
                if (confirmDelete) {
                contactList.removeChild(contactItem);
            }
            });

            contactList.appendChild(contactItem);
        }

        nameInput.value = '';
        emailInput.value = '';
    });

    deleteButton.addEventListener('click', () => {
        const confirmDelete = confirm('Are you sure you want to delete this contact?');
    
        if (confirmDelete) {
            contactList.removeChild(contactItem);
        }
    });