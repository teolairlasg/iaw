function ejecutaBucle() {
    let i;
    for (i = 1; i < 3; i++) {
        let p = document.createElement("p");
        p.innerHTML = i + "- hola mundo";
        document.body.appendChild(p);
    }
    console.log("he salido del bucle. i vale: " + i);
}

function ejecutaBucle2() {
    let array = ["Hola", "Mundo", "Adios", "Mundo"];
    let i = 1;
    for (const palabra of array) {
        let p = document.createElement("p");
        p.innerHTML = `${i}- ${palabra}`;
        document.body.appendChild(p);
        i++;
    }
}

function ejecutaBucle3() {
    let objeto = {
                palabra1: "Hola",
                palabra2: "Mundo",
                palabra3: "Adios",
                palabra4: "Mundo"
                };
    let i = 1;
    for (const palabra in objeto) {
        let p = document.createElement("p");
        p.innerHTML = `${i}- ${palabra} - ${objeto[palabra]}`;
        document.body.appendChild(p);
        i++;
    }
}
