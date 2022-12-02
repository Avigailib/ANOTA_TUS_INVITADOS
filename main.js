var invitados=[]
function enviar(){
    var lista_de_nombres=document.getElementById("nombre").value
    invitados.push(lista_de_nombres)
    document.getElementById("mostrar_nombres").innerHTML=invitados.toString()
}
 function ACOMODAR(){
     var a=invitados.join("<br>")
     document.getElementById("acomodar2").innerHTML=a.toString()
 }   
