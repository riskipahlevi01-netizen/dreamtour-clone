$(document).ready(function () {
    $('#tolist').click(function (event) {
        event.preventDefault();
        document.querySelector(".listitem").style.display = "block";
        document.querySelector(".griditem").style.display = "none";
    });
    $('#togrid').click(function (event) {
        event.preventDefault();
        document.querySelector(".listitem").style.display = "none";
        document.querySelector(".griditem").style.display = "flex";
    });
});