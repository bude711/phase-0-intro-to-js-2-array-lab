// Write your solution here!
const cats =["Milo", "Otis", "Garfield"]

function destructivelyAppendCat() {
    cats.push("Ralph")
}

function destructivelyPrependCat() {
    cats.unshift("Bob")
}

function destructivelyRemoveLastCat() {
    cats.pop()
}

function destructivelyRemoveFirstCat() {
    cats.shift()
}

const newcat = ["Broom"];
function appendCat() {
    let newcat=([...cats, "Broom"]);
    return newcat;
}

const anothernewcat = ["Arnold"];
function prependCat () {
    let anothernewcat = ([ "Arnold",...cats]);
    return anothernewcat;
}

function removeLastCat() {
    return cats.slice(0, cats.length - 1);
}

function removeFirstCat() {
    return cats.slice(1);
}
        