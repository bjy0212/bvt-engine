class Client {
    #socket
    constructor(url) {
        this.#socket = io(url);
        
    }
}