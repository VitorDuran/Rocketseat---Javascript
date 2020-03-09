function pares(x,y) {

    for (let i = x; i < y ; i++) {
        if (i%2 == 0 ) {
            console.log("par");
            console.log(i);

        }else {
            console.log("impar");
            console.log(i)
        }

    }

}

pares(3,8);