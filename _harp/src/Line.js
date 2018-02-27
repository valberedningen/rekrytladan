class Line {
    constructor(options) {
        this.prompt = options.prompt | false
        this.text = options.text | ""
        this.id = "line-" + (options.id | 0)

        this.consoleElement = document.getElementById('console')

        this.element = document.createElement('span')
        this.element.id = this.id
        this.consoleElement.appendChild(this.element)

        if (!this.prompt && this.text !== "") {
            this.typed = new Typed('#'+this.id, {
                strings: [ this.text ],
                typeSpeed: 30,
                showCursor: false,
            })
        }
    }
}