var numerosecreto = parseInt(Math.random() * 11);
var i = 0;
function Chutar() {
  i++;
  $("#tentativas").html("numero de tentativas: " + i);
  if ($("#valor").val() < 0 || $("#valor").val() > 10) {
    alert("Atenção! Somente números de 0 a 10");
  }
  if ($("#valor").val() == numerosecreto) {
    $("#resultado").html("Você acertou!!!");
  }
  if ($("#valor").val() > numerosecreto) {
    $("#resultado").html("Você errou, tente um menor");
  }
  if ($("#valor").val() < numerosecreto) {
    $("#resultado").html("Você errou, tente um maior");
  }
  if (i >= 6) {
    $("#resultado").html(
      "Você excedeu o número de tentativas, o número era: " + numerosecreto
    );
  }
}
