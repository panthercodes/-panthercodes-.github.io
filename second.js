const biotechButton = document.getElementById('biotech-jobs-button');
const biotechDiv = document.getElementById('biotech-jobs-container');
const constructionButton = document.getElementById('construction-jobs-button');
const constructionDiv = document.getElementById('construction-jobs-container');

const modalButton = document.getElementById('modal-button');
const closeButton = document.getElementById('close-button');

// SHOW/HIDE JOB OPENINGS

biotechButton.onclick = function () {
    biotechDiv.style.display = "flex";
    constructionDiv.style.display = "none";
}

constructionButton.onclick = function () {
    biotechDiv.style.display = "none";
    constructionDiv.style.display = "flex";
}

// MODAL SIGN UP WINDOW POPUP

modalButton.onclick = function () {
    document.querySelector('.bg-modal').style.display = "flex";
}

closeButton.onclick = function () {
    document.querySelector('.bg-modal').style.display = "none";
}