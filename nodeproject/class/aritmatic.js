module.exports = function(a, b, c) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.tambah = function(){
        return this.a + this.b + this.c;
    };
    this.kurang = function(){
        return this.a - this.b - this.c;
    };
    this.kali = function() {
        return this.a*this.b*this.c;
    };
    this.bagi = function() {
        return this.a/this.b/this.c;
    }
};