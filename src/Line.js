class Line {
    constructor(options) {
        this.prompt = options.prompt | false
        this.text = options.text || ''
        this.id = 'line-' + (options.id | 0)
        this.class = 'console-line'
        this.onComplete = options.onComplete || function() {}

        this.consoleElement = document.getElementById('console')

        this.element = document.createElement('div')
        this.element.id = this.id
        this.element.className = this.class
        this.consoleElement.insertBefore(this.element, this.consoleElement.firstChild)
        
        if (!this.prompt && this.text !== '') {
            this.typed = new Typed('#' + this.id, {
                strings: [ this.text ],
                typeSpeed: 30,
                showCursor: false,
                onComplete: options.onComplete,
            })
        }
    }
}