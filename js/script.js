// Triángulo

// Clase con atributos
function Triangulo (base,altura) {
    this._base = function () {
        return base;
    };
    this._altura = function () {
        return altura;
    };
}

// Getters
Triangulo.prototype.getBase = function () {
    return this._base();
};

Triangulo.prototype.getAltura = function () {
    return this._altura();
};

// Setters
Triangulo.prototype.setBase = function (nuve_base) {
    this._base = function () {
         return nuve_base;
    };
};
Triangulo.prototype.setAltura = function (nuve_altura) {
    this._altura = function () {
         return nuve_altura;
    };
};

// Métodos para la clase
Triangulo.prototype.calcularPerimetro = function () {
    return 2 * (this.getBase() + this.getAltura());
}

Triangulo.prototype.calcularArea = function () {
    return this.getBase() * this.getAltura();
}

// Cálculo

let calcular1 = document.getElementById('calcular1');
calcular1.addEventListener('click', function (e) {
    e.preventDefault();
    let valor1 = document.getElementById('valor1').value; 
    let valor2 = document.getElementById('valor2').value;
    let resultado1 = document.getElementById('resultado1');
    let nuevoTriangulo = new Triangulo(
        parseInt(valor1),
        parseInt(valor2)
    );
    resultado1.innerHTML = `Perímetro: ${nuevoTriangulo.calcularPerimetro()} <br>Área: ${nuevoTriangulo.calcularArea()}`;
    console.log(valor1);
    console.log(valor2);
});

// Rectángulo
// Clase con atributos
function Rectangulo (base,altura) {
    this.base = base;
    this.altura = altura;
}

// Métodos para la clase
Rectangulo.prototype.calcularPerimetro = function () {
    return 2 * (this.base + this.altura);
}

Rectangulo.prototype.calcularArea = function () {
    return this.base * this.altura;
}

let calcular2 = document.getElementById('calcular2');
calcular2.addEventListener('click', function (e) {
    e.preventDefault();
    let valor3 = document.getElementById('valor3').value; 
    let valor4 = document.getElementById('valor4').value;
    let resultado2 = document.getElementById('resultado2');
    let nuevoRectangulo = new Triangulo(
        parseInt(valor3),
        parseInt(valor4)
    );
    resultado2.innerHTML = `Perímetro: ${nuevoRectangulo.calcularPerimetro()} <br>Área: ${nuevoRectangulo.calcularArea()}`;
    console.log(valor3);
    console.log(valor4);
});