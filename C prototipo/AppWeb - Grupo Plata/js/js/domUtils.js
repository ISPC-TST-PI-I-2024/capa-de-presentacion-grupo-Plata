function updateElementText(id, text) {
    document.getElementById(id).textContent = text;
}

function showErrorMessage(id, message) {
    const element = document.getElementById(id);
    element.textContent = message;
    element.style.display = 'block';
}

export { updateElementText, showErrorMessage };
