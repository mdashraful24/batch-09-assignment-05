const menuBtn = document.getElementById('menu-btn');
const mobileMenuEl = document.getElementById('mobileMenu');
const selectedSeatEl = document.getElementById('selected-seat');
const totalBookedEl = document.getElementById('total-booked');
const totalPriceEl = document.getElementById('total-price');
const couponInputEl = document.getElementById('coupon-field')
const couponEl = document.getElementById('coupon-btn');
const defaultTextEl = document.getElementById('default-text');
const grandTotalEl = document.getElementById('grand-total');
const phoneNumberEl = document.getElementById('phone-number');
const nextBtnEl = document.getElementById('next-btn');

// menuBtn.addEventListener('click', function () {
//     menuBtn.children[0].classList.toggle('hidden')
//     const menuCloseBtn = document.getElementById('close-icon');
//     menuCloseBtn.classList.toggle('hidden')
//     mobileMenuEl.classList.toggle('hidden')
//     mobileMenuEl.classList.toggle('flex')
// })

let selectedSeat = [];
let totalPrice = 0;

function handleSelectSeat(event) {
    const value = event.innerText;

    if (selectedSeat.includes(value)) {
        return alert('Seat already Booked');
    }
    else if (selectedSeat.length < 4) {
        event.classList.add('bg-primary');
        event.classList.add('text-white');

        selectedSeat.push(event.innerText);
        totalBookedEl.innerText = selectedSeat.length;

        // const availableSeatValue = parseFloat(availableSeatEl.innerText);
        // const newAvailableSeatValue = availableSeatValue - 1;
        // availableSeatEl.innerText = newAvailableSeatValue;

        defaultTextEl.classList.add('hidden');

        selectedSeatEl.innerHTML += `<li class="text-base font-normal flex justify-between">
        <span>${event.innerText}</span>
        <span>Economy</span>
        <span>550</span>
        </li>`

        totalPrice += 550;
        totalPriceEl.innerText = totalPrice.toFixed(2);

        if (selectedSeat.length > 3) {
            couponInputEl.removeAttribute('disabled')
            couponEl.removeAttribute('disabled')
        }
    }
    else {
        return alert('Maximum seat booked');
    }
}

document.getElementById('coupon-btn').addEventListener('click', function () {
    const couponInputValue = couponInputEl.value;
    let couponSave = 0;

    if (couponInputValue !== 'NEW50' && couponInputValue !== 'Couple 20') {
        alert('Your provided coupon is not valid');
        return;
    }
    if (couponInputValue === 'NEW50') {
        couponSave = totalPrice * .15;
    }
    else if (couponInputValue === 'Couple 20') {
        couponSave = totalPrice * .20;
    }

    const showCouponPriceEl = document.getElementById('show-coupon-price');
    showCouponPriceEl.innerHTML = `<p>Discount</p>
    <p>
    <span>-BDT: </span>
    <span>${couponSave.toFixed(2)}</span>
    </p>`

    const grandTotalValue = totalPrice - couponSave;
    grandTotalEl.innerText = grandTotalValue.toFixed(2);

})

phoneNumberEl.addEventListener('input', function(e){
    const inputValue = e.target.value;
    if(inputValue.length >= 11){
        nextBtnEl.removeAttribute('disabled');
    }
})

document.getElementById('btn-continue').addEventListener('click', function(){
    window.location.reload();
})