//Set both of them in the set

let name1 = "akshay".split("")
let name2 = "nikhil".split("")
let flame = "flame"
let m = new Map()

for (let i = 0; i < name1.length; i++) {
    if (m.has(name1[i])) {
        m.set(name1[i], m.get(name1[i]) + 1)
    } else {
        m.set(name1[i], 1)
    }
}
for (let i = 0; i < name2.length; i++) {
    if (m.has(name2[i]) && name1.includes(name2[i])) {
        m.set(name2[i], 0)
    } else if (!m.has(name2[i])) {
        m.set(name2[i], 1)
    } else {
        m.set(name2[i], m.get(name2[i]) + 1)
    }
}
console.log(m)

let length = 0;
m.values().forEach(element => {
    length += element;
});

let l = 0;
while (flame.length > 1) {
    for (let i = 0; i < length; i++) {
        if (i == length - 1) {
            flame = flame.substring(0, l) + flame.substring(l + 1, flame.length)
            break
        }
        l = (l + 1) % flame.length
    }
}

console.log(flame)