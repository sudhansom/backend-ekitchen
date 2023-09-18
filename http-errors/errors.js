export class HttpErrors extends Error {
    constructor(message, code){
        super(message);
        this.code = code;
    }
}