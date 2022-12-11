// Dúvidas: div tem atributo "value"?; Pq então n funciona se tentar fazer o addEventListener com o "value" no if?; Pq ele dá undefined tento no setAttribute, inicialmente, quanto se eu colocasse value na div?

var sobre_contents = document.getElementsByName('sobre-content');
document.getElementById('content-1-aberto').style.display = 'block';

for (var i = 0; i < sobre_contents.length; i++) {
    sobre_contents[i].setAttribute('valu', 0);
}

for (var i = 0; i < sobre_contents.length; i++) {
    if (i == 0) {
        sobre_contents[i].valu = 1;
    }
    else {
        sobre_contents[i].valu = 0;
    }
}

for(var i = 0; i < sobre_contents.length; i++) {
    sobre_contents[i].addEventListener("click", function() {
        content_aberto = this.id + '-aberto';

        if (this.valu == 0) {
            console.log(this.valu)
            this.valu = 1;
            document.getElementById(content_aberto).style.display = 'block';
        }
        else {
            console.log(this.valu)
            this.valu = 0;
            document.getElementById(content_aberto).style.display = 'none';
            window.location = '#' + this.id;
        }
    })
}