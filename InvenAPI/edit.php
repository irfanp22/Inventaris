<?php
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input, true);
//terima data dari mobile
$id = trim($data['id']);
$nama = trim($data['nama']);
$deskripsi = trim($data['deskripsi']);
$jumlah = trim($data['jumlah']);
$tanggal_beli = trim($data['tanggal_beli']);
$kondisi = trim($data['kondisi']);
$user_id = trim($data['user_id']);
http_response_code(201);
if ($nama != '' and $deskripsi != '') {
    $query = mysqli_query($koneksi, "update inventaris set nama='$nama',deskripsi='$deskripsi',jumlah=$jumlah,tanggal_beli='$tanggal_beli',kondisi='$kondisi' where
id='$id' and user_id='$user_id'");
    $pesan = true;
} else {
    $pesan = false;
}
echo json_encode($pesan);
echo mysqli_error($koneksi);
