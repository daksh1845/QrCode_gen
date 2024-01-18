const qrText= document.getElementById("qr-text")
const genBtn= document.getElementById("generateBtn")
const qrContainer= document.querySelector(".qr-body")

genBtn.addEventListener("click",(e)=>{
    e.preventDefault()
    QRCodegenerator()
})

function QRCodegenerator(){
    qrContainer.innerHTML=""
    new QRCode(qrContainer, {
        text: qrText.value,
        width: 128,
        height: 128,
        colorDark : "#000000",
        colorLight : "#ffffff",
        correctLevel : QRCode.CorrectLevel.H
    });
}