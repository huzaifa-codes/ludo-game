


let img = document.querySelector("#image")
let div = document.querySelector("#con")

function btn(){

    let sum = Math.ceil(Math.random()*6)
    console.log(sum);


    
if (sum === 6) {
    div.innerHTML =  ""
    console.log("It's 6! Wow!");
      div.innerHTML += `<h1> ITS 6! WOW....  <h1>`
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkrP6Xkdfd_5dxoNvnI1oh4A9TJoqiiZNbEISoFnFKPfzXutHTLFO0hXKJ5gLPOKHA2M4&usqp=CAU';
} else if (sum === 1) {
    console.log("Oh no, it's 1. Try again!");
    div.innerHTML = `<h1> OO NO! IT'S 1. TRY AGAIN  <h1>`
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI1ruUVPEgdTRhjH0r6CrxViyPMCznL6Eq2w&s';
} else if (sum === 2) {
    console.log("Oh no, it's 2. Try again!");
      div.innerHTML = `<h1> OO NO! IT'S 2. TRY AGAIN  <h1>`
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ6nNOUqK2Zq-mFHQ47z0SUy-wE1fPKrRvDGrqxqd72iXnCxp6RXckiImViGl-U8tk_kU&usqp=CAU';
} else if (sum === 3) {
      div.innerHTML = `<h1> OO NO! IT'S 3. TRY AGAIN  <h1>`
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcReCaBJ_IH4pSkKmXkDp-yESrVJSaDk_R9hUIx9Gjft1z2srGC9-FNLmZZs2YpWikrKHtg&usqp=CAU';
} else if (sum === 4) {
      div.innerHTML = `<h1> OO NO! IT'S 4. TRY AGAIN  <h1>`
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYaLsYlCYMFdcN53gIe1cehxNENqEflMNO-6o_Xle5Zs02vdZGAB8hSy924smYrS9NQc4&usqp=CAU';
} else if (sum === 5) {
      div.innerHTML = `<h1> OO NO! IT'S 5. TRY AGAIN  <h1>`
    img.src = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYeZKq9PBu9O7iPWdVc8ThyLaUndp5mjIpagYAg9qu6hrZI8DwPZtuHy_TUDr-oGjb8bo&usqp=CAU';
}
 }

