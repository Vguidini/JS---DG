
let fila_de_pacientes = [`Júlio`, `Robson`, `Carlinha`, `Michel JS`, `Junior`, `Charles`];
let dores_especificas_demais = [`Dor no Estômago`, `Solidão`, `Vício`, `JavaScript`, `Enjoo`, `Sindrome de Estoucomdedonomeuboga`];
let ficha = document.getElementById("ficha");
let atual = document.getElementById("atual");

atual.innerHTML = 
`<tr>
<th>Doutor:</th>  
<th>Paciente:</th>
<th>Sintoma:</th></tr>
 <tr> 
 <td>Douglas</td>
<td>${fila_de_pacientes[0]}</td>
<td>${dores_especificas_demais[0]}</td></tr>`




ficha.innerHTML = 
`    <tr> <th>Nº do Paciente </th> 
    <th>Pacientes:</th>
    <th>Sintomas:</th></tr>
     <tr> <th>Nº 1 </th> 
    <td>${fila_de_pacientes[1]}</td>
    <td>${dores_especificas_demais[1]}</td></tr>
    <tr> <th>Nº 2 </th> 
    <td>${fila_de_pacientes[2]}</td>
    <td>${dores_especificas_demais[2]}</td></tr>
    <tr> <th>Nº 3 </th> 
    <td>${fila_de_pacientes[3]}</td>
    <td>${dores_especificas_demais[3]}</td></tr>
    <tr> <th>Nº 4 </th> 
    <td>${fila_de_pacientes[4]}</td>
    <td>${dores_especificas_demais[4]}</td></tr>
    <tr> <th>Nº 5 </th> 
    <td>${fila_de_pacientes[5]}</td>
    <td>${dores_especificas_demais[5]}</td></tr> `;


function consultar () {
    fila_de_pacientes.shift();
    dores_especificas_demais.shift();

    atual.innerHTML = 
    `<tr>
    <th>Doutor:</th>  
    <th>Paciente:</th>
    <th>Sintoma:</th></tr>
     <tr> 
     <td>Douglas</td>
    <td>${fila_de_pacientes[0]}</td>
    <td>${dores_especificas_demais[0]}</td></tr>`

    ficha.innerHTML = 
    `    <tr> <th>Nº do Paciente </th> 
        <th>Pacientes:</th>
        <th>Sintomas:</th></tr>
         <tr> <th>Nº 1 </th> 
        <td>${fila_de_pacientes[1]}</td>
        <td>${dores_especificas_demais[1]}</td></tr>
        <tr> <th>Nº 2 </th> 
        <td>${fila_de_pacientes[2]}</td>
        <td>${dores_especificas_demais[2]}</td></tr>
        <tr> <th>Nº 3 </th> 
        <td>${fila_de_pacientes[3]}</td>
        <td>${dores_especificas_demais[3]}</td></tr>
        <tr> <th>Nº 4 </th> 
        <td>${fila_de_pacientes[4]}</td>
        <td>${dores_especificas_demais[4]}</td></tr>
        <tr> <th>Nº 5 </th> 
        <td>${fila_de_pacientes[5]}</td>
        <td>${dores_especificas_demais[5]}</td></tr> `;

}


function add () {

    fila_de_pacientes[fila_de_pacientes.length] = window.prompt(`Olá! Qual o seu nome?`);
    dores_especificas_demais[dores_especificas_demais.length] = window.prompt(`Olá ${fila_de_pacientes[4]}! Oque você está sentindo?`);
 
    atual.innerHTML = 
    `<tr>
    <th>Doutor:</th>  
    <th>Paciente:</th>
    <th>Sintoma:</th></tr>
     <tr> 
     <td>Douglas</td>
    <td>${fila_de_pacientes[0]}</td>
    <td>${dores_especificas_demais[0]}</td></tr>`

    ficha.innerHTML = 
    `    <tr> <th>Nº do Paciente </th> 
        <th>Pacientes:</th>
        <th>Sintomas:</th></tr>
         <tr> <th>Nº 1 </th> 
        <td>${fila_de_pacientes[1]}</td>
        <td>${dores_especificas_demais[1]}</td></tr>
        <tr> <th>Nº 2 </th> 
        <td>${fila_de_pacientes[2]}</td>
        <td>${dores_especificas_demais[2]}</td></tr>
        <tr> <th>Nº 3 </th> 
        <td>${fila_de_pacientes[3]}</td>
        <td>${dores_especificas_demais[3]}</td></tr>
        <tr> <th>Nº 4 </th> 
        <td>${fila_de_pacientes[4]}</td>
        <td>${dores_especificas_demais[4]}</td></tr>
        <tr> <th>Nº 5 </th> 
        <td>${fila_de_pacientes[5]}</td>
        <td>${dores_especificas_demais[5]}</td></tr> `;


 }

 




function atendimento () {

    fila_de_pacientes.shift();
    fila_de_pacientes[fila_de_pacientes.length] = window.prompt(`Olá! Qual o seu nome?`);
    dores_especificas_demais.shift();
    dores_especificas_demais[dores_especificas_demais.length] = window.prompt(`Olá ${fila_de_pacientes[4]}! Oque você está sentindo?`);
 
    atual.innerHTML = 
    `<tr>
    <th>Doutor:</th>  
    <th>Paciente:</th>
    <th>Sintoma:</th></tr>
     <tr> 
     <td>Douglas</td>
    <td>${fila_de_pacientes[0]}</td>
    <td>${dores_especificas_demais[0]}</td></tr>`

    ficha.innerHTML = 
    `    <tr> <th>Nº do Paciente </th> 
        <th>Pacientes:</th>
        <th>Sintomas:</th></tr>
         <tr> <th>Nº 1 </th> 
        <td>${fila_de_pacientes[1]}</td>
        <td>${dores_especificas_demais[1]}</td></tr>
        <tr> <th>Nº 2 </th> 
        <td>${fila_de_pacientes[2]}</td>
        <td>${dores_especificas_demais[2]}</td></tr>
        <tr> <th>Nº 3 </th> 
        <td>${fila_de_pacientes[3]}</td>
        <td>${dores_especificas_demais[3]}</td></tr>
        <tr> <th>Nº 4 </th> 
        <td>${fila_de_pacientes[4]}</td>
        <td>${dores_especificas_demais[4]}</td></tr>
        <tr> <th>Nº 5 </th> 
        <td>${fila_de_pacientes[5]}</td>
        <td>${dores_especificas_demais[5]}</td></tr> `;


 }

 
