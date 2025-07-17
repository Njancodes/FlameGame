//Set both of them in the set

let name1 = ["m", "i", "c", "h", "e", "l", "l", "e"]
let name2 = ["n", "i", "j", "o"]
let flame = ["f", "l", "a", "m", "e"]
let m = new Map()

for (let i = 0; i < name1.length; i++) {
    if (m.has(name1[i])) {
        m.set(name1[i], m.get(name1[i]) + 1)
    } else {
        m.set(name1[i], 1)
    }
}
for (let i = 0; i < name2.length; i++) {
    if (!m.has(name2[i])) {
        m.set(name2[i], 1)
    } else {
        m.set(name2[i], 0)
    }
}

let length = 0;
m.values().forEach(element => {
    length += element;
});


function new_word(i, wordArray) {
    let new_word_array = wordArray.filter((_, idx) => {
        return idx !== i
    })
    return new_word_array
}

// function cut_and_start(cut, strt, length, arr_length) {
//     for (let i = 0; i < length; i++) {
//         strt += 1
//         cut = strt - 1
//         if (strt >= arr_length) {
//             strt = 0
//         }
//         if (cut >= arr_length) {
//             cut = 0
//         }
//         console.log(strt)
//     }
//     console.log("The cut index: ", cut, "and starting position is: ", strt, "and length of word: ", arr_length)
//     return [strt, cut]
// }


