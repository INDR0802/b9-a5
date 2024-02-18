// scroll to buy tickets

document.querySelector("#buyTicketButton").addEventListener("click", () => {
    let elem = document.getElementById("ticketBuyingSection")
    elem.scrollIntoView()
});

// scroll to buy tickets

function available() {
    let available = document.getElementById('availableSeats').innerText
    available = available - 1;
    document.getElementById('availableSeats').innerText = available
}

document.getElementById('number').addEventListener('keyup', () => {
    console.log(document.getElementById('number').value)
    let seatAdd = parseInt(document.getElementById('seat-added').innerText)
    let num = document.getElementById('number').value
    if (seatAdd != 0 && num != 0) {
        document.getElementById('next').disabled = false
    }
})


function seatAdded() {
    let seatAdd = parseInt(document.getElementById('seat-added').innerText)
    seatAdd = seatAdd + 1;
    document.getElementById('seat-added').innerText = seatAdd

    if (count == 3) {
        alert("You can't buy more than 4 tickets at a time")
        document.getElementById('applyBtn').disabled = false
    }
    let num = document.getElementById('number').value
    if (seatAdd != 0 && num != 0) {
        document.getElementById('next').disabled = false
    }
}


let count = 0;

function appendList(seat) {
    let seatNo = seat.innerText
    let list = document.getElementById('seatList')

    let node = document.createElement('div')
    node.classList.add('flex', 'justify-between')
    node.innerHTML = '<h1 id="seat-no">' + seatNo + '</h1><h1>Economoy</h1><h1>550</h1>'
    list.append(node)
    count++
    console.log(count)
}

function price() {
    let seatAdd = parseInt(document.getElementById('seat-added').innerText)

    let price = seatAdd * 550;

    document.getElementById('totalPrice').innerText = price
    document.getElementById('grandTotalPrice').innerText = price
}



let seat = document.querySelectorAll(".seats")

for (let index = 0; index < seat.length; index++) {
    let element = seat[index];
    element.addEventListener('click', () => {
        let booked = document.getElementById('seat-added').innerText
        if (seat[index].classList[3] != 'bg-[#1DD100]' && count < 4) {
            seat[index].classList.add("bg-[#1DD100]")
            available()
            seatAdded()
            appendList(seat[index])
            price()
        }
    })
}


// apply-button

function discount() {
    let input = document.getElementById('cupon').value
    if (input === 'NEW15') {
        document.getElementById('cuponInputField').classList.add('hidden')
        document.getElementById('discount-conainer').classList.remove('hidden')

        gt = document.getElementById('grandTotalPrice').innerText

        document.getElementById('discount').innerText = gt * 0.15

        document.getElementById('grandTotalPrice').innerText = gt - gt * 0.15
    }

    else if (input === 'Couple 20') {
        document.getElementById('cuponInputField').classList.add('hidden')
        document.getElementById('discount-conainer').classList.remove('hidden')

        gt = document.getElementById('grandTotalPrice').innerText

        document.getElementById('discount').innerText = gt * 0.20

        document.getElementById('grandTotalPrice').innerText = gt - gt * 0.2
    }
    else{
        alert('Wrong Cupon Code')
    }
}

document.getElementById('applyBtn').addEventListener('click', () => {
    discount()
})


// apply-button

// next-button

function showModal() {
    document.getElementById('header').classList.add('hidden')
    document.getElementById('main').classList.add('hidden')
    document.getElementById('footer').classList.add('hidden')
    document.getElementById('modal').classList.remove('hidden')

}

document.getElementById('next').addEventListener('click', () => {
    showModal()
})
// next-button


// continue-btn

function restrart() {
    document.getElementById('header').classList.remove('hidden')
    document.getElementById('main').classList.remove('hidden')
    document.getElementById('footer').classList.remove('hidden')
    document.getElementById('modal').classList.add('hidden')
    document.getElementById('totalPrice').innerText = '00'
    document.getElementById('grandTotalPrice').innerText = '00'
}

document.getElementById('continue').addEventListener('click', () => {
    restrart()
})

// continue-btn