$('#banner').text("Pertambahan");

function tambahkan() {
    var angka_pertama = parseInt($('#angka_pertama').val());
    var angka_kedua = parseInt($('#angka_kedua').val());

    var hasil = angka_pertama + angka_kedua;

    $('#hasil').text(`Hasil ${angka_pertama} + ${angka_kedua} = ${hasil}`);
}