


// Mengatur waktu akhir perhitungan mundur
function countDown() {
    var countDownDate = new Date("Jan 20, 2024 10:00:00").getTime();

    const waktu_Detik = document.querySelector('.waktu_Detik')
    const waktu_Menit = document.querySelector('.waktu_Menit')
    const waktu_Jam = document.querySelector('.waktu_Jam')
    const waktu_hari = document.querySelector('.waktu_hari')
    // Memperbarui hitungan mundur setiap 1 detik
    var x = setInterval(function () {

        // Untuk mendapatkan tanggal dan waktu hari ini
        var now = new Date().getTime();

        // Temukan jarak antara sekarang dan tanggal hitung mundur
        var distance = countDownDate - now;

        // Perhitungan waktu untuk hari, jam, menit dan detik
        var days = Math.floor(distance / (1000 * 60 * 60 * 24));
        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)).toString().padStart(2, '0');
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)).toString().padStart(2, '0');
        var seconds = Math.floor((distance % (1000 * 60)) / 1000).toString().padStart(2, '0');
        // Keluarkan hasil dalam elemen dengan id = "demo"

        waktu_Detik.innerHTML = seconds
        waktu_Menit.innerHTML = minutes
        waktu_Jam.innerHTML = hours
        waktu_hari.innerHTML = days

        // Jika hitungan mundur selesai, tulis beberapa teks 
        if (distance < 0) {
            clearInterval(x);
            document.getElementById("demo").innerHTML = "EXPIRED";
        }
    }, 1000);

}

countDown()

// 
const form = document.querySelector('.form');
const kirim = document.querySelector('#kirim')

// function sendPesan(){
//     document.getElementById("kirim").addEventListener("click", function (event) {
//         event.preventDefault();

//         // Validasi form
//         var form = document.querySelector('.form');
//         if (form.checkValidity()) {
//             var nama = document.querySelector("#nama").value;
//             var pesan = document.querySelector("#pesan").value;

//             // Buat objek FormData
//             var formData = new FormData();
//             formData.append('nama', nama);
//             formData.append('pesan', pesan);

//             // Kirim data ke server menggunakan Fetch API
//             fetch('../sendPesan.php', {
//                 method: 'POST',
//                 body: formData
//             })
//                 .then(response => {
//                     // Tindakan setelah berhasil
//                     // Kosongkan form nama dan jurusan
//                     document.getElementById("nama").value = "";
//                     document.getElementById("pesan").value = "";
//                 })
//                 .catch(error => {
//                     // Tangani kesalahan jika ada
//                     console.error('Error:', error);
//                 });
//         }
//     });
// }

// sendPesan()

// function fetchDataAndUpdate() {
//     fetch('../getPesan.php')
//         .then(response => response.json())
//         .then(data => {
//             const messageContainer = document.querySelector('.message_people');
//             messageContainer.innerHTML = ''; // Hapus isi container sebelum menambahkan data baru

//             // Loop melalui data yang diterima dari PHP
//             data.forEach(item => {
//                 const messageDiv = document.createElement('div');
//                 messageDiv.classList.add('border-b-2', 'py-2', 'px-3', 'flex', 'flex-col', 'pesan');

//                 const namaPengirim = document.createElement('h3');
//                 namaPengirim.classList.add('text-base', 'font-medium');
//                 namaPengirim.textContent = item.nama; // Ambil nama pengirim dari data

//                 const isiPesan = document.createElement('span');
//                 isiPesan.classList.add('text-sm', 'my-2');
//                 isiPesan.textContent = item.pesan; // Ambil isi pesan dari data

//                 const waktuPesan = document.createElement('span');
//                 waktuPesan.classList.add('text-xs');
//                 waktuPesan.textContent = item.date; // Ambil waktu pesan dari data

//                 // Tambahkan elemen-elemen ke dalam pesan baru
//                 messageDiv.appendChild(namaPengirim);
//                 messageDiv.appendChild(isiPesan);
//                 messageDiv.appendChild(waktuPesan);

//                 // Tambahkan pesan ke dalam container
//                 messageContainer.appendChild(messageDiv);
//             });
//         })
//         .catch(error => {
//             console.error('Error:', error);
//         });
// }

// // Panggil fungsi fetchDataAndUpdate() setiap 5 detik
// setInterval(fetchDataAndUpdate, 1000); // Ubah angka ini sesuai kebutuhan Anda

var audio = document.getElementById('myAudio');
const content = document.getElementById('content');
const welcome = document.getElementById('welcome');
const button = document.getElementById('tes');
button.addEventListener('click', function () {
    welcome.classList.add('hidden')
    content.classList.remove('hidden')
    content.classList.add('block')
    audio.play();
});