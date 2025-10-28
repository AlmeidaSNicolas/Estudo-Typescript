
type Args = string | number | boolean
function bootstrap(firstname: string, args?: Args[]){
 
}


type login = string | boolean
function AutorizarLogin(email: string, l?: login[]): boolean{
    return true;
}
AutorizarLogin("testecabeçudo@gmail.com",["teste", true])

type MainFunction = () => void;

interface Functions {
    run(context: any): void;
    execute(): boolean;
}

