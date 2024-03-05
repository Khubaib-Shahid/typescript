class obj {
    constructor (public name : string, age : number ,private secretId : number = 123) {
    }

    get id () : number {
        return this.secretId
    }

    
}