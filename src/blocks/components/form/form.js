@@include("../../components/thanks-message/thanks-message.js")

function validation() {

    const forms = document.querySelectorAll('[data-validate]')

    if (!forms.length) return

    forms.forEach(form => {

        inputMasksInit(form);

        form.addEventListener('submit', event => {
            event.preventDefault()

            const inputFields = form.querySelectorAll('[data-js="formField"]');
            const dataReqexp = {
                email: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,})$/,
                space: /^(\s)+$/,
            }

            function error(el, errorText = "") {
                let errorField = el.querySelector("[data-js='fieldError']")
                return {
                    set: () => {
                        el.classList.add("field--invalid")
                        errorField.innerHTML = errorText
                    },
                    remove: () => {
                        el.classList.remove("field--invalid")
                        errorField.innerHTML = errorText
                    },
                }
            }

            function validateInput(input) {
                const field = input.querySelector('input');

                if(!field) return

                const name = field.getAttribute('data-v-name');
                let valueField = name === "file" ? field.files : field.value;
                let spaceTrigger = name === "file" ? true : !valueField.match(dataReqexp.space);

                if (field.hasAttribute('required') && !field.hasAttribute('disabled')) {
                    if (valueField !== '' && spaceTrigger) {
                        switch (name) {
                            case 'phone':
                                valueField = valueField.replace(/\D/g, "")

                                if (valueField.length === 11) {
                                    error(input).remove()
                                } else {
                                    error(input, 'Ошибка ввода').set()
                                }
                                break                               
                            default:
                                if (valueField.length !== 0) {
                                    error(input).remove()
                                } else {
                                    error(input, "Ошибка ввода").set()
                                }
                        }
                    } else {
                        error(input, 'Ошибка ввода').set()
                    }
                }
            }

            function checkFields() {
            
                inputFields.forEach(input => {
                    validateInput(input)
                })
            }

            function lifeValidate() {
                inputFields.forEach(input => {
                    input.addEventListener('click', () => {
                        if (form.getAttribute('data-validate')) {
                            const field = input.querySelector('input')

                            field.addEventListener('input', () =>
                                validateInput(input),
                            )
                            checkFields()
                        }
                    })
                })
            }

            function validate() {
                let errors = 0

                inputFields.forEach(input => {
                    if (input.classList.contains('field--invalid')) {
                        errors += 1
                    }
                })

                // тут отправляем данные
                if (errors === 0) {
                    const formData = new FormData(form);

                    console.log('данные формы:')
                    console.log(formData)
                    form.reset();

                    thanksMessageShow();
                } else {
                    console.log('форма заполнена неверно')
                }
            }

            lifeValidate()
            checkFields()
            form.setAttribute('data-validate', 'true')

            validate()
        })
    })
}

function inputMasksInit(form) {

    const phones = form.querySelectorAll('input[data-type="phoneNumber"]');

    if(phones.length > 0) {
        phones.forEach(phone => {
            Inputmask({
                'mask': '+7 (999) 999-99-99',
                'showMaskOnHover': false
            }).mask(phone); 
        })
    }
}