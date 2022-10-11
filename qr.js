const wrapper = document.querySelector(".wrapper"),
qrInput = wrapper.querySelector(".form input"),
generateBtn = wrapper.querySelector(".form button"),
qrImg = wrapper.querySelector(".qr-code a img");
qrdn = wrapper.querySelector(".qr-code a");
qrbg = wrapper.querySelector(".bg");

generateBtn.addEventListener("click",() => {
    let qrValue = qrInput.value;
    let qrbgvalue = qrbg.value;

    if(!qrValue)return ;
    // qrImg.src  = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    qrImg.src  = `https://qrickit.com/api/qr.php?bgdcolor=${qrbgvalue}&qrsize=220&d=${qrValue}`;
    qrdn.href = `https://qrickit.com/api/qr.php?bgdcolor=${qrbgvalue}&qrsize=220&d=${qrValue}`;
    // qrdn.href  = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrValue}`;
    wrapper.classList.add("active");
});