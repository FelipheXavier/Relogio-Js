const CampoHora = document.querySelector(".horas");
const CampoData = document.querySelector(".data");



const pegarHoras=()=>{
    const Data = new Date()
    const horas = Data.getHours();
    const minutos = Data.getMinutes();
    const segundos = Data.getSeconds();
    CampoHora.innerHTML = `${formatar(horas)}:${formatar(minutos)}:${formatar(segundos)}`
}
function formatar(data){
    if(data<10){
        return '0'+data
    }else{
        return data
    }
}
pegarDiaSemana=()=>{
    const Data = new Date()
    const numeroDia = Data.getDay()
    let dia;
    switch(numeroDia){
        case 0:dia="Domingo"
        break
        case 1:dia="Segunda-Feira"
        break
        case 2:dia="Terça-Feira"
        break
        case 3:dia="Quarta-Feira"
        break
        case 4:dia="Quinta-Feira"
        break
        case 5:dia="Sexta-Feira"
        break
        case 6:dia="Sábado"
        break
    }
    return dia
}
function PegarData(){
    const Data = new Date()
    const diaMes = Data.getDate();
    const mes = Data.getMonth() + 1;
    const ano = Data.getFullYear()
    CampoData.innerHTML = `${pegarDiaSemana()} ${formatar(diaMes)}/${formatar(mes)}/${ano}`
}

setInterval(()=>{
    pegarHoras()
    PegarData()
},1000)




