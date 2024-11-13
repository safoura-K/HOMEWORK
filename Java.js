
// Hide all emojis initially
//document.querySelectorAll('.Emoji div').forEach(div => div.style.display = 'none');

// Function to display the selected emoji
//function showEmoji(smile) {
    // Hide all emojis
    //document.querySelectorAll('.Emoji div').forEach(div => div.style.display = 'none');
    
    // Show the selected emoji
  //  document.getElementById(smile).style.display = 'inline';
//}

// Event listeners for each button
//document.querySelector('.one').addEventListener('click', () => showEmoji('smile'));
//document.querySelector('.two').addEventListener('click', () => showEmoji('Kiss'));
//document.querySelector('.three').addEventListener('click', () => showEmoji('sad'));
//document.querySelector('.four').addEventListener('click', () => showEmoji('think'));
//document.querySelector('.five').addEventListener('click', () => showEmoji('quiet'));

// Event listener for the space bar reset button
//document.querySelector('.space').addEventListener('click', () => {
    // Hide all emojis
    //document.querySelectorAll('.Emoji div').forEach(div => div.style.display = 'none');
//});//





document.querySelectorAll('.Emoji div').forEach(div => div.style.display = 'none');

// Function to display the selected emoji
function showEmoji(emojiId) {
    // Hide all emojis
    document.querySelectorAll('.Emoji div').forEach(div => div.style.display = 'none');
    
    // Show the selected emoji
    document.getElementById(emojiId).style.display = 'inline';
}

// Add keyboard event listener
document.addEventListener('keydown', (event) => {
    // Check which key is pressed
    switch (event.key) {
        case '1':
            showEmoji('smile'); 
            return;
        case '2':
            showEmoji('Kiss'); 
            return;
        case '3':
            showEmoji('sad'); 
            return;
        case '4':
            showEmoji('think'); 
            return;
        case '5':
            showEmoji('quiet'); 
            return;
        case ' ': 
            document.querySelectorAll('.Emoji div').forEach(div => div.style.display = 'none');
            return;
    }
});


