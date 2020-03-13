class Subscriber {

    constructor(name) {
        this.name = name;
    }

    next(msg) {
        console.log(`${this.name} get message:`, msg);
    }

    error(err) {
        console.log(`${this.name} get error:`, err);
    }

    complete() {
        console.log(`${this.name} complete subscription!`);
    }
}

exports.Subscriber = Subscriber;