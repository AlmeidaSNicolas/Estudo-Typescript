//tuplas

type namelist = string[]

type calendarDate = [day: number, month: number, year: number] //espera 3 itens do tipo number

const list: namelist = [];
list.push("Nicolas");

const date: calendarDate = [10, 11, 2005] //por ser uma tupla do tipo calendarDate, tem que se cumprir todos os requisitos do TYPE, caso contrario nao funcionará


type endereço = [rua: string, bairro: string, cidade: string]
const rua1: endereço = ["Ken ishyzucka", "Jardim mariana 2", "Sao jose dos campos"]

function createDate(date: calendarDate){
    const [ day, month, year] = date;
}