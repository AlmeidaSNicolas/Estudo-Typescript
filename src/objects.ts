type Order = {
    productId: string;
    price: number;
};

type User = {
    firstName: string;
    Age: number;
    email: string;
    password: string | undefined; //opcional
    orders: Order[];
    register(): string;
    apresentar(): string;
};

const user: User = {
    firstName: "Nicolas",
    Age: 19,
    email: "n@gmail.com",
    password: undefined,
    orders: [{ productId: "1", price : 300} ],
    register(){
        return "Usuário " + user.firstName + " cadastrado com sucesso "
    },

    apresentar(){
    return "Me chamo " + user.firstName + " tenho " + user.Age + " e meu email é " + user.email
    }
}

user.password

const printLog = (message?: string) => {}

printLog(user.password!)


// Unions  UNE DOIS TYPES
type Author = {
    books: string[];
}

const author: Author & User = {
    firstName: "Julio",
    Age: 50,
    email: "j@gmail.com",
    password: "1234",
    orders: [],
    books: ["O senhor dos aneis"],
    register(){
        return "Usuário cadastrado com sucesso"
    },
    apresentar(){
    return "Me chamo " + user.firstName + " tenho " + user.Age + " e meu email é " + user.email
    }
}

//interface

interface UserIn{
    readonly firstName: string;
    readonly email: string;
}

const emailUser: UserIn = {
    firstName: "Nicolas",
    email: "t2@gmail.com"
}

interface AuthorInterface {
    books: string[];
}

const newAuthor: UserIn & AuthorInterface = {
    firstName: "Nicolas",
    email: "t3@gmail.com",
    books: [],
};

type Grade = number | string;
const grade: number | string = 1

console.log(user.apresentar());



