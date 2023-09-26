const buttons= document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach( (button)=>{
    console.log(button)
    button.addEventListener('click', function(e){
        console.log(e);
        console.log(e.target);
        switch (e.target.id) {
            case 'grey':
                // body.style.backgroundColor= 'grey';
                body.style.backgroundColor= e.target.id;
                break;
            case 'green':
                // body.style.backgroundColor= 'green';
                body.style.backgroundColor= e.target.id;
                break;
            case 'blue':
                // body.style.backgroundColor = 'blue';
                body.style.backgroundColor= e.target.id;
                break;
            case 'yellow':
                // body.style.backgroundColor= 'yellow';
                body.style.backgroundColor= e.target.id;
                break;
            default:
                break;
        }
    })
} )