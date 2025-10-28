// interfaces como objeto
interface UserWallet {  
    coins?: number;
    credits?: number;
}
//como visto acima podemos declarar interfaces para serem objetos de outras interfaces

interface User {
    name: string,
    createdAt?: Date;
    wallet?: UserWallet
}

interface User{
    talk(): void
}


function createUser(name:string): User{
    return { name, createdAt: new Date(),
        talk() {
            console.log("Eu sou ", name)
        },
    }
}

function updateWallet(user: User, wallet: UserWallet){
    user.wallet = { ...user.wallet, ...wallet }
}

const nicolas = createUser("Nicolas");

updateWallet(nicolas, { coins: 10 })

interface Admin extends User{
    ban(user: User): void;       //tag extends traz os dados de outra interface para a que queremos
    kick(user: User): void;
}

function promoteUser(user: User): Admin {
    return{
        ...user,
        ban(user){
            console.log(user, "foi banido por", this.name) //nao corrigi esse erro
        },
        kick(userToKick){
            console.log(userToKick, "foi expulso por", this.name)
        }
    }
}

const adminnicolas = promoteUser(nicolas);

function adminAction(admin: Admin){

}

adminAction(adminnicolas)