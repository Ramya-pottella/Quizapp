function userLogin(){
    player1_Name=document.getElementById("player1_Name").value;
    player2_Name=document.getElementById("player2_Name").value;
    player1_password=document.getElementById("password1").value;
    player2_password=document.getElementById("password2").value;
    localStorage.setItem("player1_Name",player1_Name);
    localStorage.setItem("player2_Name",player2_Name);
    localStorage.setItem("player1_password",player1_password);
    localStorage.setItem("player2_password",player2_password);
    window.location="game_page.html";
}