//Tạo đối tượng service tương tác backend
var svService = new SinhVienService();
var renderSinhVien = function () {
  var promise = svService.layDanhSachSinhVien();
  promise
    .then(function (res) {
      console.log(res.data);
      //Tạo <tr> table
      //Tạo nội dung các thẻ tr
      var contentTable = "";
      for (var index = 0; index < res.data.length; index++) {
        //Khởi tạo đối tượng
        var sinhVien = res.data[index];
        //Từ đối tượng sinh viên tạo ra thẻ tr
        contentTable += `
        <tr>
        <td>${sinhVien.MaSV}</td>
        <td>${sinhVien.HoTen}</td>
        <td>${sinhVien.Email}</td>
        <td>${sinhVien.SoDT}</td>
        <td>${sinhVien.diemToan}</td>
        <td>${sinhVien.diemLy}</td>
        <td>${sinhVien.diemHoa}</td>
        </tr>`;
      }
      //In ra giao diện
      document.getElementById("tblSinhVien").innerHTML = contentTable;
    })
    .catch(function (error) {
      console.log(error.response.data);
    });
};
renderSinhVien();
