<?php
require 'koneksi.php';
$input = file_get_contents('php://input');
$data = json_decode($input, true);
$user_id = trim($_GET['user_id']);
$data = [];
$query = mysqli_query($koneksi, "select * from inventaris where user_id=$user_id");
while ($row = mysqli_fetch_object($query)) {
    $data[] = $row;
}
//tampilkan data dalam bentuk json
echo json_encode($data);
echo mysqli_error($koneksi);
