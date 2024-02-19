// scroll to buy tickets

document.querySelector("#buyTicketButton").addEventListener("click", () => {
    let elem = document.getElementById("ticketBuyingSection")
    elem.scrollIntoView()
});

// scroll to buy tickets

// enable next button

document.getElementById('number').addEventListener('keyup', () => {
    console.log(document.getElementById('number').value)
    let seatAdd = parseInt(document.getElementById('seat-added').innerText)
    let num = document.getElementById('number').value
    if (seatAdd != 0 && num != 0) {
        document.getElementById('next').disabled = false
    }
})

// enable next button


// selecting seats

function available() {
    let available = document.getElementById('availableSeats').innerText
    available = available - 1;
    document.getElementById('availableSeats').innerText = available
}

function seatAdded() {
    let seatAdd = parseInt(document.getElementById('seat-added').innerText)
    seatAdd = seatAdd + 1;
    console.log(count)
    if (count > 3) {
        alert("You can't buy more than 4 tickets at a time")
        
    }

    else if (count == 3) {
        document.getElementById('applyBtn').disabled = false
        document.getElementById('seat-added').innerText = seatAdd
    }

    else {
        document.getElementById('seat-added').innerText = seatAdd
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
        if (seat[index].classList[3] != 'bg-[#1DD100]') {
            seatAdded()
            if (count <= 3) {
                seat[index].classList.add("bg-[#1DD100]")
                available()
                appendList(seat[index])
                price()
            }
        }
    })
}

// selecting seats


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
    else {
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

function removeAllChildNodes(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}


function restrart() {
    document.getElementById('header').classList.remove('hidden')
    document.getElementById('main').classList.remove('hidden')
    document.getElementById('footer').classList.remove('hidden')
    document.getElementById('modal').classList.add('hidden')
    document.getElementById('totalPrice').innerText = '00'
    document.getElementById('grandTotalPrice').innerText = '00'
    document.getElementById('seat-added').innerText = '00'
    document.getElementById('availableSeats').innerText = '40'
    document.getElementById('number').value = ' '

    document.getElementById('cuponInputField').classList.remove('hidden')
    document.getElementById('discount-conainer').classList.add('hidden')


    let seat = document.querySelectorAll(".seats")

    for (let index = 0; index < seat.length; index++) {
        let element = seat[index];
        if (element.classList[3] == 'bg-[#1DD100]') {
            element.classList.remove('bg-[#1DD100]')
        }
    }

    count = 0

    const container = document.querySelector('#seatList');
    removeAllChildNodes(container);

}

document.getElementById('continue').addEventListener('click', () => {
    restrart()
})

// continue-btn