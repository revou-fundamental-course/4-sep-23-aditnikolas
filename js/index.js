let rumusLuas = true;
// let rumusKeliling;


function switchLuasPersegi() {
    document.getElementById("kelilingHeader").style.display = "none";
    document.getElementById("ketKelId").style.display = "none";
    document.getElementById("luasHeader").style.display = "block";
    document.getElementById("ketLuasId").style.display = "block";
    return rumusLuas = true;
}
function switchKelPersegi() {
    document.getElementById("kelilingHeader").style.display = "block";
    document.getElementById("ketKelId").style.display = "block";
    document.getElementById("luasHeader").style.display = "none";
    document.getElementById("ketLuasId").style.display = "none";
    return rumusLuas = false;
}

// function hitungLuas() {
//     let valueNum = document.getElementById("inputField").value;
//     let result;
    
//     if (rumusLuas = true) {
//         result = parseInt(valueNum) * parseInt(valueNum);
//     } else {
//         result = 4 * parseInt(valueNum);
//     }
    
//     if (valueNum > 0) {
//         result = parseInt(valueNum) * parseInt(valueNum);
//         document.getElementById("rumusLagi").innerHTML = "L = S x S";
//         document.getElementById("rumusAngka").innerHTML = ("L = "+valueNum+" x "+valueNum);
//         document.getElementById("hasilHitung").innerHTML = "L = "+result;
//     } else if (valueNum === "" || valueNum == 0 ){
//         result = 0;
//         document.getElementById("rumusLagi").innerHTML = "";
//         document.getElementById("rumusAngka").innerHTML = "";
//         document.getElementById("hasilHitung").innerHTML = "Silahkan masukan panjang sisi terlebih dahulu";
//     } else {
//         result = 0;
//         document.getElementById("rumusLagi").innerHTML = "";
//         document.getElementById("rumusAngka").innerHTML = "";
//         document.getElementById("hasilHitung").innerHTML = "Tidak dapat menghitung luas karena panjang sisi tidak bisa negative";
//     }
//     document.getElementById("hasilHitung").innerHTML = "kosong"+valueNum+"test";
// }

function hitungFinal() {
    let valueNum = document.getElementById("inputField").value;
    let result = 0;
    
    if (valueNum > 0) {
        if (rumusLuas === true) {
            result = parseInt(valueNum) * parseInt(valueNum);
            document.getElementById("rumusLagi").innerHTML = "L = S x S";
            document.getElementById("rumusAngka").innerHTML = ("L = "+valueNum+" x "+valueNum);
            document.getElementById("hasilHitung").innerHTML = "L = "+result;
        } else {
            result = 4 * parseInt(valueNum);
            document.getElementById("rumusLagi").innerHTML = "K = 4 x S";
            document.getElementById("rumusAngka").innerHTML = ("K = 4 x "+valueNum);
            document.getElementById("hasilHitung").innerHTML = "K = "+result;
        }        
    } else if (valueNum === "" || valueNum == 0 ){
        result = 0;
        document.getElementById("rumusLagi").innerHTML = "";
        document.getElementById("rumusAngka").innerHTML = "";
        document.getElementById("hasilHitung").innerHTML = "Silahkan masukan panjang sisi terlebih dahulu";
    } else {
        result = 0;
        document.getElementById("rumusLagi").innerHTML = "";
        document.getElementById("rumusAngka").innerHTML = "";
        document.getElementById("hasilHitung").innerHTML = "Panjang sisi tidak bisa negative";
    }
}


function resetAngka() {
    document.getElementById("inputField").value = "";
    document.getElementById("rumusLagi").innerHTML = "";
    document.getElementById("rumusAngka").innerHTML = "";
    document.getElementById("hasilHitung").innerHTML = "";
}