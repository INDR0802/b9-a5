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
    // console.log(available)
}

function seatAdded() {
    let seatAdd = parseInt(document.getElementById('seat-added').innerText)
    seatAdd = seatAdd + 1;
    document.getElementById('seat-added').innerText = seatAdd
    // console.log(seatAdd)
}

function appendList(seat) {
    let seatNo = seat.innerText
    let seatClass = 'Economoy'
    let price = 550
    let list = document.getElementById('seatList')

    let node = document.createElement('div')
    node.classList.add('flex', 'justify-between')
    node.innerHTML = '<h1 id="seat-no">' + seatNo + '</h1><h1>Economoy</h1><h1>550</h1>'
    list.append(node)
}

function price() {
    let seatAdd = parseInt(document.getElementById('seat-added').innerText)

    let price = seatAdd * 550;

    document.getElementById('totalPrice').innerText = price
    document.getElementById('grandTotalPrice').innerText = price
}



let seat = document.querySelectorAll(".seats")

for (let index = 0; index < seat.length; index++) {
    const element = seat[index];
    element.addEventListener('click', () => {
        if (seat[index].classList[3] != 'bg-[#1DD100]') {
            available()
            seatAdded()
            appendList(seat[index])
            price()
        }
        seat[index].classList.add("bg-[#1DD100]")
    })
}


// apply-button

function discount() {
    let input = document.getElementById('cupon').value
    if (input === 'NEW15') {
        document.getElementById('cuponInputField').classList.add('hidden')

        gt = document.getElementById('grandTotalPrice').innerText

        document.getElementById('grandTotalPrice').innerText = gt - gt * 0.15
    }

    else if (input === 'Couple 20') {
        document.getElementById('cuponInputField').classList.add('hidden')

        gt = document.getElementById('grandTotalPrice').innerText

        document.getElementById('grandTotalPrice').innerText = gt - gt * 0.2
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