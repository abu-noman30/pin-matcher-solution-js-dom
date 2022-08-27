
function generateRandomPin(){

    // Generate a random 4-digit number
    // Math.floor(Math.random() * (max - min + 1)) + min;

    let randomPin = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    if(randomPin.toString().length !== 4){
        return generateRandomPin();
    }else{
        return randomPin;
    }
}

document.querySelector('#genarate-pin').addEventListener('click', function(){

    document.querySelector('#notify-notmatch').classList.add('d-none');
    document.querySelector('#notify-match').classList.add('d-none');

    let pin = generateRandomPin();
    let pinString = pin.toString();

    if (pinString.length === 4){
        let targetGeneratePinDisplay = document.querySelector('#generate-pin-display');
            targetGeneratePinDisplay.value =  pinString;

    }else{
        // document.querySelector('#pin').innerHTML = generateRandomPin();
        // console.log('The pin is: ' );
        return generateRandomPin();
    }
});


document.querySelector('#btn-parent').addEventListener('click', function(event){
    
    let targetsBtn = event.target.innerText;
    let targetsBtnNuber = parseInt(targetsBtn);
    if (isNaN(targetsBtnNuber) === false){
       let targetInputDisplay = document.querySelector('#input-display');
         targetInputDisplay.value += targetsBtnNuber + "";


    }else{
        if(targetsBtn === 'C'){
            let targetInputDisplay = document.querySelector('#input-display');
            targetInputDisplay.value = "";
        }
        if(targetsBtn === '<'){
            let targetInputDisplay = document.querySelector('#input-display');
            targetInputDisplay.value = targetInputDisplay.value.slice(0, -1);
        }
    }
});

let counter = 0;
document.querySelector('#verify-pin').addEventListener('click', function(){
    counter++;
    console.log('counter: ' , counter);
    if (counter > 3){
        if(document.querySelector('#input-display').value === document.querySelector('#generate-pin-display').value){
            counter = 0;
            document.querySelector('#input-display').value='';
            document.querySelector('#generate-pin-display').value='';
            document.querySelector('#notify-match').classList.remove('d-none');
        }else{
            counter = 0;
            document.querySelector('#try-counter').classList.remove('d-none');
            document.querySelector('#generate-pin-display').classList.add('d-none');
            document.querySelector('#input-display').classList.add('d-none');
            document.querySelector('#verify-pin').classList.add('d-none');
            document.querySelector('#notify-match').classList.add('d-none');
            document.querySelector('#notify-notmatch').classList.add('d-none');
        }

    }else{  
        let targetGeneratePinDisplay = document.querySelector('#generate-pin-display');
            console.log(targetGeneratePinDisplay.value);

        let targetInputDisplay = document.querySelector('#input-display'); 
            console.log(targetInputDisplay.value);

        let  emptyDisplay = (targetGeneratePinDisplay.value).toString();
        let  emptyInput = (targetInputDisplay.value).toString();      
        if(emptyDisplay.length === 0 && emptyInput.length === 0){
            alert('Please enter a pin');
            document.querySelector('#notify-notmatch').classList.add('d-none');
            document.querySelector('#notify-match').classList.add('d-none');

        }else if(emptyDisplay.length === 4 && emptyInput.length === 4 && emptyDisplay === emptyInput){
            // alert('Correct');
            document.querySelector('#notify-match').classList.remove('d-none');
            targetGeneratePinDisplay.value = "";
            targetInputDisplay.value = "";

        }else{
            document.querySelector('#notify-notmatch').classList.remove('d-none');
            targetGeneratePinDisplay.value = "";
            targetInputDisplay.value = "";
        }
    }  
}) ;