let btn = document.querySelectorAll(".btn");
let resetBtn = document.querySelector(".btn2");
let h2 = document.querySelector(".reset h2")

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
let turnX = true;
let count = 0;
btn.forEach((box) => {
    box.addEventListener("click", () => {
        if (turnX) {
            box.innerText = "X";
            turnX = false;

        }
        else {
            box.innerText = "Y";
            turnX = true;

        }
        count++;
        

        box.disabled = true;
        checkWinner();
        if (count === 9 && h2.innerText==='' ) {
            h2.innerText = "Match Draw";
           

            return;
        }


    })

})

const checkWinner = () => {
    for (let x of winPattern) {
        let val1 = btn[x[0]].innerText;
        let val2 = btn[x[1]].innerText;
        let val3 = btn[x[2]].innerText;

        if (val1 != "" && val2 != "" && val3 != "") {
            if (val1 === val2 && val2 === val3) {
                h2.innerText = `Winner is ${val1}`;
                
                btn.forEach((box) => {
                    box.disabled = true;
                })



            }
        }


    }
}

resetBtn.addEventListener("click", () => {
    btn.forEach((box) => {
        box.innerText = "";
        box.disabled = false;
        turnX = true;
        h2.innerText = '';

        count = 0;

       


    })

})

