const brandInp = document.getElementById('brand')
const modelInp = document.getElementById('model')
const yearInp = document.getElementById('year')
const btn = document.getElementById('basket_btn')
const tbody = document.getElementById('tbody')
const addd = document.getElementById("offcanvasRight")
let Cars = []
let index = 1
if (!localStorage.getItem('cars')) {
  localStorage.setItem('cars', JSON.stringify(Cars))
} else {
  Cars = JSON.parse(localStorage.getItem('cars')) 
  index = Cars.length + 1
}
class Car {
  constructor(brand, model, year) {
    ;(this.id = index),
      (this.brand = brand),
      (this.model = model),
      (this.year = year)
  }
}
function addCar() {
  let brandVal = brandInp.value
  let modelVal = modelInp.value
  let yearVal = yearInp.value
  let car = new Car(brandVal, modelVal, yearVal)
  index++
  Cars.push(car)
  localStorage.setItem('cars', JSON.stringify(Cars))
  brandInp.value = ''
  modelInp.value = ''
  yearInp.value = ''
}
btn.addEventListener('click', () => {
  addCar()
  let localArr = JSON.parse(localStorage.getItem('cars'))
  renderList(localArr)
})
function renderList(array) {
  let innerHTML = ''

  for (let i = 0; i < array.length; i++) {
    const cardd = document.getElementById('elave').innerHTML += ` <tr>
    <td>${array[i].id}</td>
    <td>${array[i].brand}</td>
    <td>${array[i].model}</td>
    <td>${array[i].year}</td>
  </tr>`
  }
  tbody.innerHTML = innerHTML
}
let localArr = JSON.parse(localStorage.getItem('cars'))
renderList(localArr)