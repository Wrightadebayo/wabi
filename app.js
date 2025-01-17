// console.log('hello world')
// const array = ['friend','friend2','friend3','friend4']
// const [first,second,third,fourth] = array
// console.log(fourth)



// const wallHeight = 80

// function calculate(value){
//   console.log('hello '  + value * 2.54 + 'cm' )
//   return 'hello class'
// }

// const width = calculate(100)
// const height = calculate(wallHeight)
// const dimension = [width,height]
// console.log(dimension)

const value = false
if(value ){
  console.log('hello world')
}

const num1 = 5
const num2 = "3"

const num = num1 + num2
console.log(num)


const numbers = [0,1,2,3,4]
for(let i = 0;i < numbers.length;i++){
  console.log(numbers[i])
}

const people = [
 { name:'gbenga',age:23,position:'ui/ux'},
 { name:'gbenga',age:24,position:'designer'},
 { name:'gbenga',age:22,position:'developer'}
]

const name = people.find(function(person){
  return person.position === 'designer'
  
})
// document.body.innerHTML = name.join( ' ')
console.log(name)
// function showPerson(person){
// console.log(person)
// }
// people.forEach(showPerson)

people.forEach(function(item){
  console.log(item.position.toUpperCase())
})


// const element = document.getElementById('title')
// element.style.color = 'red'

// const result = document.getElementById('result')
// const values = result.firstChild.nodeValue
// const itemss = result.textContent
// console.log(itemss)
// console.log(values)

const first = document.querySelector('.first')
const second = first.textContent
console.log(second)