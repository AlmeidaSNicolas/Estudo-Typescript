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
};

const user: User = {
    firstName: "Nicolas",
    Age: 19,
    email: "n@gmail.com",
    password: undefined,
    orders: [{ productId: "1", price : 300} ],

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
    books: ["O senhor dos aneis"]
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

