let arr = ['Aleksey', 'Kartoshka', 'Margarin', 'MOrgenshtern', 'Monica']

let index = +prompt()

let finded = arr.find( (item, idx) => index === idx)

if(finded) {
    arr.splice(index, 1)
    console.log(arr)
} else {
    alert('Такого элемента нет')
}