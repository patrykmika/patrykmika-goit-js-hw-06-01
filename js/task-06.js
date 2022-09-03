const text = document.querySelector('#validation-input');

const dataLength = text.getAttribute('data-length');

text.addEventListener('blur', () => {
    const contentLength = text.value.length;

    if (contentLength >= dataLength) {
        text.setAttribute('class', 'valid');
        } else {
            text.setAttribute('class', 'invalid');
        }
    });