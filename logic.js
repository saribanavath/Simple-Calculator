'use strict';

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('button');
    const result = document.querySelector('#result');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.innerHTML;

            if (value === '=') {
                try {
                    result.value = eval(result.value); // Note: eval is used for simplicity, be cautious
                } catch (error) {
                    result.value = 'Error';
                }
            } else {
                if (result.value === 'Error') {
                    result.value = '';
                }
                result.value += value;
            }
        });
    });
});
