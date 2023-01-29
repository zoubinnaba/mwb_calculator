
const firstNumberInput = document.getElementById("first_number")
const secondNumberInput = document.getElementById("second_number")
const addEl = document.getElementById("add")
const subsEl = document.getElementById("subs")
const diviEl = document.getElementById("divi")
const multEl = document.getElementById("mult")
const resultEl = document.getElementById("result")



const addition = () => {
    const result = parseInt(firstNumberInput.value) + parseInt(secondNumberInput.value)
    return  resultEl.textContent = result
}

const substraction = () => {
    const result = parseInt(firstNumberInput.value) - (secondNumberInput.value)
    return  resultEl.textContent = result
}

const division = () => {
    const result = parseInt(firstNumberInput.value) / (secondNumberInput.value)
    return  resultEl.textContent = parseFloat(result)
}

const multiply = () => {
    const result = parseInt(firstNumberInput.value) * (secondNumberInput.value)
    return  resultEl.textContent = result
}


addEl.addEventListener('click', addition)
subsEl.addEventListener('click', substraction)
diviEl.addEventListener('click', division)
multEl.addEventListener('click', multiply)