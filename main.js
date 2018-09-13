let lines = []
let patt = new RegExp('@{(\\w*)}', 'g')
let sequence
let thing

function nextLine() {
    let id = lines.length
    if (id === sequence.length) return

    lines.push(new Line({
        id: id,
        text: sequence[id].replace(patt, thing),
        onComplete: () => {
            nextLine()
        }
    }))
}

loadJSON((json) => {
    sequence = JSON.parse(json)
    loadJSON((json) => {
        var things = JSON.parse(json)
        thing = things[Math.floor(Math.random() * things.length)]
        nextLine()
    }, 'resources/things.json');
}, 'resources/sequence.json')