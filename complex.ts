class Complex {
    private re: number;
    private im: number;

    constructor(re: number, im: number) {
        this.re = re;
        this.im = im;
    }
    add(com:Complex): Complex {
        this.re = this.re + com.re;
        this.im = this.im + com.im;
    }

    subtract(com:Complex): Complex {
        this.re = this.re - com.re;
        this.im = this.im - com.im;
    }

    toString() {
        console.log("re: ", this.re, ", ", "im ", this.im);
    }
}

let a = new Complex(re: 3, im: 4);
let b = new Complex(re: 7, im: 4);
let c = a.add(b);

let d = new Complex(re: 3, im:-2);

let e = c.subtract(d);

e.toString();