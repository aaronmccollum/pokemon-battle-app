const textBoxText = document.getElementById('text-box-text');
const runButton = document.getElementById('run-button');
const musicButton = document.getElementById("music-btn");

const postText = message => {
    textBoxText.innerText = message;
}

// Possible text
const runAwayText = 'You ran away!';

// Event listener on Run button
runButton.addEventListener('click', function() {
    postText(runAwayText);
})

// Function to play music, used 'var' for global variable
var flag = true;
musicButton.addEventListener('click', function() {
    if (flag) {
        const audio = document.getElementById('audio');
        audio.play();
        flag = false;
    } else {
        audio.pause()
        audio.load();
        flag = true;
    }
});
