let lines = []
let patt = new RegExp('@{(\\w*)}', 'g')
let sequence
let data

let urlParams = getAllUrlParams()

if (!urlParams.id) {
    lines.push(new Line({
        id: lines.length,
        text: "You're not welcome here..."
    }))
}

function fixText(text) {
    return text.replace(patt, (x) => {
        return data[x.replace(patt, '$1')]
    });
}

function nextLine() {
    let id = lines.length
    if (id === sequence.length) return

    lines.push(new Line({
        id: id,
        text: fixText(sequence[id]),
        onComplete: () => {
            nextLine()
        }
    }))
}

loadJSON((json) => {
    sequence = JSON.parse(json)
    loadJSON((json) => {
        data = JSON.parse(json)
        nextLine()
    }, 'resources/' + hex2a(urlParams.id) + '.json');
}, 'resources/sequence.json')