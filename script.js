// Define playlist URLs
var playlistUrls = {
    'Algebra': 'https://videolectures101.github.io/algebra/',
    'Geometry': 'https://videolectures101.github.io/geometry/',
    'Arithmetic': 'https://videolectures101.github.io/arithmetic1/',
    'Trigonometry': 'https://videolectures101.github.io/trigonometry/',
    'Calculus': 'https://videolectures101.github.io/calculus/',
    'Statistics': 'https://videolectures101.github.io/statistics/',
    'Probability': 'https://videolectures101.github.io/probability/',
    'Linear Algebra': 'https://videolectures101.github.io/linearalgebra/',
    'Discrete Math': 'https://videolectures101.github.io/discrete-math/',
    'Number Theory': 'https://videolectures101.github.io/numbertheory/',
    'Financial Mathematics': 'https://videolectures101.github.io/financialmath/'
};

// Get DOM elements
var topicSelector = document.getElementById('topicSelector');
var goButton = document.getElementById('goButton');

// Enable/disable button based on selection
topicSelector.addEventListener('change', function () {
    goButton.disabled = !this.value;
});

// Navigate to selected playlist
goButton.addEventListener('click', function () {
    var selectedTopic = topicSelector.value;
    if (selectedTopic && playlistUrls[selectedTopic]) {
        window.open(playlistUrls[selectedTopic], '_blank');
    }
});
