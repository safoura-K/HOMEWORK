
// Hide all emojis initially
document.querySelectorAll('.Emoji div').forEach(div => div.style.display = 'none');

// Function to display the selected emoji
function showEmoji(smile) {
    // Hide all emojis
    document.querySelectorAll('.Emoji div').forEach(div => div.style.display = 'none');
    
    // Show the selected emoji
    document.getElementById(smile).style.display = 'inline';
}

// Event listeners for each button
document.querySelector('.one').addEventListener('click', () => showEmoji('smile'));
document.querySelector('.two').addEventListener('click', () => showEmoji('Kiss'));
document.querySelector('.three').addEventListener('click', () => showEmoji('sad'));
document.querySelector('.four').addEventListener('click', () => showEmoji('think'));
document.querySelector('.five').addEventListener('click', () => showEmoji('quiet'));

// Event listener for the space bar reset button
document.querySelector('.space').addEventListener('click', () => {
    // Hide all emojis
    document.querySelectorAll('.Emoji div').forEach(div => div.style.display = 'none');
});