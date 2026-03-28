let box= document.querySelectorAll('.box');
let reset= document.querySelector('#reset');
let message= document.querySelector('.msg');

let turnX = true;
const winCombos = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];
const disablebox=()=>{
    box.forEach((box) => {
        box.disabled = true;
    });
}
const enablebox=()=>{
    box.forEach((box) => {
        box.disabled = false;
        box.innerText = '';
    });
}

const showwinner = (winner) => {
    message.innerText = `CONGRATULATIONS!\nTheWinner is ${winner}`;
    message.classList.remove('hide');
    disablebox();
    
};

box.forEach((box) => {
    box.addEventListener('click', () => {
        console.log('Box clicked');
        if(turnX) {
            box.textContent = 'X';
            turnX = false;
        } else {
            box.textContent = 'O';
            turnX = true;
        }
        box.disabled= true;
        checkWinner();
    });
    
});

const checkWinner = () => {
        for(let pattern of winCombos){
            let pos1 = box[pattern[0]].innerText;
            let pos2 = box[pattern[1]].innerText;
            let pos3 = box[pattern[2]].innerText;

            if(pos1!= '' && pos2!='' && pos3!=''){
                if(pos1==pos2 && pos2==pos3){
                    console.log('Winner is ', pos1);
                    showwinner(pos1);
                }
            }
        }
    };
const resetGame = () => {
    turnX = true;
    enablebox();
    message.classList.add('hide');
};

reset.addEventListener('click', resetGame);
        