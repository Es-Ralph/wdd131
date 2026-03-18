const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

// ✅ Add event listener to button
button.addEventListener('click', function () {

    // ✅ Check input is not empty
    if (input.value.trim() !== '') {

        // Create elements
        const li = document.createElement('li');
        const deleteButton = document.createElement('button');

        // Add text
        li.textContent = input.value;

        // Configure delete button
        deleteButton.textContent = '❌';
        deleteButton.classList.add('delete');

        // Append delete button to li
        li.appendChild(deleteButton);

        // Add li to list
        list.appendChild(li);

        // ✅ Delete functionality
        deleteButton.addEventListener('click', function () {
            list.removeChild(li);
            input.focus();
        });

        // ✅ Clear input
        input.value = '';
        input.focus();

    } else {
        // Optional but recommended
        alert('Please enter a chapter!');
        input.focus();
    }
});