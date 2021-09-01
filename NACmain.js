var CP = "X"

function buttonClick(btn){

    if(btn.innerText == ""){
      btn.innerText = CP;
    }

    if(CP == "X"){
      CP = "O";
    }
    else{
      CP = "X";
    }
    checkGameBoard();
}

function checkGameBoard() {
  var a_1 = document.getElementById("a1");
  var a_2 = document.getElementById("a2");
  var a_3 = document.getElementById("a3");
  var b_1 = document.getElementById("b1");
  var b_2 = document.getElementById("b2");
  var b_3 = document.getElementById("b3");
  var c_1 = document.getElementById("c1");
  var c_2 = document.getElementById("c2");
  var c_3 = document.getElementById("c3");

  if(a_1.innerText != "" & a_2.innerText == a_1.innerText & a_3.innerText == a_2.innerText){
    alert("WIN");
  }
  if(b_1.innerText != "" & b_2.innerText == b_1.innerText & b_3.innerText == b_2.innerText){
    alert("WIN");
  }
  if(c_1.innerText != "" & c_2.innerText == c_1.innerText & c_3.innerText == c_2.innerText){
    alert("WIN");
  }
  if(a_1.innerText != "" & b_1.innerText == a_1.innerText & c_1.innerText == a_1.innerText){
    alert("WIN");
  }
  if(a_2.innerText != "" & b_2.innerText == a_2.innerText & c_2.innerText == a_2.innerText){
    alert("WIN");
  }
  if(a_3.innerText != "" & b_3.innerText == a_3.innerText & c_3.innerText == a_3.innerText){
    alert("WIN");
  }
  if(a_1.innerText != "" & b_2.innerText == a_1.innerText & c_3.innerText == a_1.innerText){
    alert("WIN");
  }
  if(c_1.innerText != "" & b_2.innerText == c_1.innerText & a_3.innerText == c_1.innerText){
    alert("WIN");
  }
  
  
}