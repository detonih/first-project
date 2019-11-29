function caculate() {
var gender = ''
var getFormSex = document.getElementsByName('sexradio')
var weight = document.querySelector('input#weitxt')
var height = document.querySelector('input#heighttxt')
var bmi = weight.value / height.value ** 2
var result = document.querySelector('div#res')
var result2 = document.querySelector('div#res2')

if (getFormSex[0].checked) {
    gender = 'Male'
    if (bmi >= 0 && bmi < 20.7) {
        var bmi2 = "under weight"        
    } else if (bmi < 26.4) {
        var bmi2 = "at normal weight"
    } else if (bmi < 27.8) {
        var bmi2 = "a little overweight"
    } else if (bmi < 31.1) {
        var bmi2 = "overweight"
    } else if (bmi >= 31.1 && 100) {
        var bmi2 = "obese"
    } else (weight.value === '' || height.value === '') 
        window.alert('Enter a valid data!')
        return
        
} else if (getFormSex[1].checked) {
    gender = 'Female'
    if (bmi >= 0 && bmi < 19.1) {
        var bmi2 = "under weight"        
    } else if (bmi < 25.8) {
        var bmi2 = "at normal weight"
    } else if (bmi < 27.3) {
        var bmi2 = "a little overweight"
    } else if (bmi < 32.3) {
        var bmi2 = "overweight"
    } else if (bmi >= 32.3 && 100) {
        var bmi2 = "obese"
    } else (weight.value === '' || height.value === '') 
        window.alert('Enter a valid data!')
        return
}

result.innerHTML = `Your body mass index is ${bmi} points`
result2.innerHTML = `For a ${gender} you are ${bmi2}`

}
