let namaSiswa = document.querySelector("#nama-siswa").value;
let nilai = {};

function btnSubmit() {
    let namaSiswa = document.getElementById("nama-siswa").value;

    if (namaSiswa == 0) {
        alert("Tolong isi NAMA SISWA terlebih dahulu!");

        return;

    } else {
        let nilaiPAIBP = document.getElementById("valPAIBP").value;
        let nilaiMTK = document.getElementById("valMTK").value;
        let nilaiPROD = document.getElementById("valPROD").value;
        let nilaiIPA = document.getElementById("valIPA").value;
        let nilaiIPS = document.getElementById("valIPS").value;

        nilaiPAIBP = Number(nilaiPAIBP);
        nilaiMTK = Number(nilaiMTK);
        nilaiPROD = Number(nilaiPROD);
        nilaiIPA = Number(nilaiIPA);
        nilaiIPS = Number(nilaiIPS);

        let rataRata = (nilaiPAIBP + nilaiMTK + nilaiPROD + nilaiIPA + nilaiIPS) / 5

        let grade = {};

        if (rataRata >= 90 && rataRata <= 100) {
            grade = 'A';
        } else if (rataRata >= 80) {
            grade = 'B';
        } else if (rataRata >= 65) {
            grade = 'C';
        } else {
            grade = 'D';
        }

        //define table

        if (nilaiPAIBP == 0 || nilaiIPA == 0 || nilaiIPS == 0 || nilaiMTK == 0 || nilaiPROD == 0) {
            alert("Tolong isi nilai dengan lengkap!")
        } else {
            let table = document.getElementById("table");
            let row = table.insertRow(1);

            let siswa = row.insertCell(0);
            siswa.innerHTML = namaSiswa;

            let PAIBP = row.insertCell(1);
            PAIBP.innerHTML = nilaiPAIBP;

            let MTK = row.insertCell(2);
            MTK.innerHTML = nilaiMTK;

            let PROD = row.insertCell(3);
            PROD.innerHTML = nilaiPROD;

            let IPA = row.insertCell(4);
            IPA.innerHTML = nilaiIPA;

            let IPS = row.insertCell(5);
            IPS.innerHTML = nilaiIPS;

            let avg = row.insertCell(6);
            avg.innerHTML = rataRata;

            let grd = row.insertCell(7);
            grd.innerHTML = grade;
        }

    }
}
