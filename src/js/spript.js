const btn = document.getElementsByClassName('btn')[0]
const inputs = document.querySelectorAll('.span-form input')
const spansInputs = document.querySelectorAll('.span-form span')
const textArea = document.querySelector('.textarea-form textarea')
const spanTextArea = document.querySelector('.textarea-form span')

const submitForm = ()=>{
    btn.addEventListener('click', ()=>{
        inputs.forEach((input, index)=>{
            if(input.value.length === 0){
                spansInputs[index].style.display = 'block'
                inputs[index].style.border = '1px solid #ff0000'
                textArea.style.border = '1px solid #ff0000'
                spanTextArea.style.display = 'block'
            }else{
                spansInputs[index].style.display = 'none'
                inputs[index].style.border = '1px solid #00ff2a'
                textArea.style.border = '1px solid #00ff2a'
                spanTextArea.style.display = 'none'
            }
        })

        if(textArea.value.length === 0){
            textArea.style.border = '1px solid #ff0000'
            spanTextArea.style.display = 'block'
        }else{
            textArea.style.border = '1px solid #00ff2a'
            spanTextArea.style.display = 'none'
        }
    })
}

submitForm();