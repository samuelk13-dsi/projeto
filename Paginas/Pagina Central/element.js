document.getElementById("loginForm").addEventListener("submit", function(e){
    e.preventDefault();

    let email = document.getElementById("email").value;
    let senha = document.getElementById("senha").value;

    if(email === "" || senha === ""){
        alert("Preencha todos os campos.");
        return;
    }

    alert("Parabéns, agora tu faz parte do nossa aquipe.");
    alert("Login realizado com sucesso!.")
    
    // Redirecionar após login
    window.location.href = "project.html";
});
