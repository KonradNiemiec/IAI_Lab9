var Complex = /** @class */ (function () {
    function Complex(re, im) {
        this.re = re;
        this.im = im;
    }
    Complex.prototype.add = function (com) {
        this.re = this.re + com.re;
        this.im = this.im + com.im;
    };
    Complex.prototype.subtract = function (com) {
        this.re = this.re - com.re;
        this.im = this.im - com.im;
    };
    Complex.prototype.toString = function () {
        console.log("re: ", this.re, ", ", "im ", this.im);
    };
    return Complex;
}());
var a = new Complex(re, 3, im, 4);
var b = new Complex(re, 7, im, 4);
var c = a.add(b);
var d = new Complex(re, 3, im, -2);
var e = c.subtract(d);
e.toString();
