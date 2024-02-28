document.addEventListener("DOMContentLoaded", function () {
        
    var selectedDiv = document.querySelector('.unit2');
    if (selectedDiv) {
        selectedDiv.classList.add('active');
    }

    var radioInputs = document.querySelectorAll('.child-sub-div-1 input[type="radio"]');

    radioInputs.forEach(function (radioInput) {
        radioInput.addEventListener('change', function () {
            var value = this.value;

            var activeElements = document.querySelectorAll('.active');
            activeElements.forEach(function (element) {
                element.classList.remove('active');
            });

            var selectedElement = document.querySelector('.selected.' + value);
            if (selectedElement) {
                selectedElement.classList.add('active');
            }
        });
    });


});