let lines = []
let data

let urlParams = getAllUrlParams()
loadJSON(
    'resources',
    'spray.json',
    (json) => {
        data = JSON.parse(json)
        console.log(data)
});

function nextLine() {
    lines.push(new Line({
        id: lines.length,
        text: 'Hello, world ' + lines.length + '!',
        onComplete: () => {
            setTimeout(() => {
                nextLine()
            }, 1000)
        }
    }))
}

nextLine()