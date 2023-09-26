const form = document.querySelector('form')
// This useCase will give you empty value
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit', function(e){
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const result = document.querySelector('#result')

    if(height === '' || height < 0 || isNaN(height) ){
        result.innerHTML= `Please enter a valid height ${height}`;
    }
    else if(weight === '' || weight <0 || isNaN(weight)){
        result.innerHTML = `Please enter a valid weight ${weight}`;
    }
    else{
        const bmi = (weight / ((height * height)/10000)).toFixed(2);
        // result.innerHTML = `<span>${bmi}</span>`;

        // if(bmi<18.6){
        //     result.innerHTML=`<span>Under weigth :${bmi}</span>`;
        //     }else if(bmi>18.6 && bmi<24.9){
        //         result.textContent=`Normal Weight:${bmi}`;
        //     }else{
        //         result.textContent=`Over Weight : ${bmi}`
        //     }

        switch (true) {
            case bmi <= 18.6:
                result.innerHTML = `<span>Underweight: ${bmi}</span>`;
                break;
            case bmi > 18.6 && bmi < 24.9:
                result.innerHTML = `<span>Normal Range: ${bmi}</span>`;
                break;
            case bmi >= 24.9:
                result.innerHTML = `<span>Overweight: ${bmi}</span>`;
                break;
            default:
                break;
        }
        
    }
    
})