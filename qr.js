const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code img");

generateBtn.addEventListener("click",() => {
    let qrValue = qrInput.value;
    if(!qrValue)return;
    qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;

    wrapper.classList.add("active");
});