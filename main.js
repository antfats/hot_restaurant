$(document).ready(() => {
    console.log("HI WORLDDD");
    addingReservation();
});
function addingReservation() {

    $("#addBtn").click(function () {
        event.preventDefault();
        var newRes = {
            name: $("#name").val().trim(),
            phoneNum: $("#phoneNum").val().trim(),
            email: $("#email").val().trim()
        }
    });
}
