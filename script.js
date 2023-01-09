//Fazer algo apenas quando o botão for clicado.

function submitMenssage(){                          //Precisamos usar o value
    let nome = document.getElementById('name').value;
    let telefone = document.getElementById('telephone').value;
    let assunto = document.getElementById('subject').value;
    let msg = document.getElementById('msg').value;

    alert(`Obrigado ${nome}, Sua mensagem foi enviada com sucesso!!!`)
}
