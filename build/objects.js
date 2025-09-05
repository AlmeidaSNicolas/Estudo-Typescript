const user = {
    firstName: "Nicolas",
    Age: 19,
    email: "n@gmail.com",
    password: undefined,
    orders: [{ productId: "1", price: 300 }],
    register() {
        return "Usuário " + user.firstName + " cadastrado com sucesso ";
    },
    apresentar() {
        return "Me chamo " + user.firstName + " tenho " + user.Age + " e meu email é " + user.email;
    }
};
user.password;
const printLog = (message) => { };
printLog(user.password);
const author = {
    firstName: "Julio",
    Age: 50,
    email: "j@gmail.com",
    password: "1234",
    orders: [],
    books: ["O senhor dos aneis"],
    register() {
        return "Usuário cadastrado com sucesso";
    },
    apresentar() {
        return "Me chamo " + user.firstName + " tenho " + user.Age + " e meu email é " + user.email;
    }
};
const emailUser = {
    firstName: "Nicolas",
    email: "t2@gmail.com"
};
const newAuthor = {
    firstName: "Nicolas",
    email: "t3@gmail.com",
    books: [],
};
const grade = 1;
console.log(user.apresentar());
export {};
