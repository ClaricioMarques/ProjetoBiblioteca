function validaTitulo()
{
    var valorTitulo = document.getElementById("txtTitulo").value;

    if (valorTitulo.length == 0) {
        alert("campo não pode ficar vazio!!");
        document.getElementById("txtTitulo").style.background = "red";
        return false;      
    }
    else if(valorTitulo.length >= 10){
        alert("Insira somento o primeiro nome, max: 10 caracteres");
        document.getElementById("txtTitulo").style.background = "red";
        return false;

    }
     else{
        document.getElementById("txtTitulo").style.color = "black";
        document.getElementById("txtTitulo").style.background = "white";
        return true;
    }
}

function validaAutor()
{
    var valorAutor = document.getElementById("txtAutor").value;

    if (valorAutor == "") 
    {
        alert("campo não pode ficar vazio!!");
        document.getElementById("txtAutor").style.background = "red";
        return false;      
    }
     
    else
    {
        return true;
    }
}

function validaAno()
{
    var valorAno = document.getElementById("txtAno").value;

    if (valorAno.length == 0) {
        alert("campo não pode ficar vazio!!");
        document.getElementById("txtAno").style.background = "red";
        return false;      
    }
    
     
     else{
        document.getElementById("txtTelefone").style.color = "black";
        document.getElementById("txtTelefone").style.background = "white";
        return true;
    }
}