import Component from '../kiwi/Component.js'

import Link from './Link.js'
import Render from './Render.js'


export default class App extends Component {
    setState() {
        return {
            example: JSON.parse(localStorage.getItem('example')) || 0,
            list: [
                'Get start',
                'Documentation',
            ]
        }
    }
    setChildComponent() {
        return [Link];
    }

    links() {
        return this.state.list;
    }
    
    justOnce(parentNode) {
        this.parentNode = parentNode
        fetch(`examples/${this.state.example}/class.js`)
            .then(res => res.text())
            .then((data) => {
                let dataReduced = Render.process(this.parentNode, data, this)
                this.state = { ...this.state, text: dataReduced };
                parentNode.querySelector('.pre').innerText = this.state.text
            })
    }

    ajax() {
        fetch(`examples/${this.state.example}/class.js`)
            .then(res => res.text())
            .then((data) => {
                this.newState = this.state
                let dataReduced = Render.process(this.parentNode, data, this)
                this.state = { ...this.state, text: dataReduced };
                this.parentNode.querySelector('.pre').innerText = this.state.text

            })
    }

    next() {
        if (typeof this.state.next === 'number') {
            this.state.example = this.state.next
            localStorage.setItem('example', JSON.stringify(this.state.next));
            this.state.next = null
            this.state.prev = null
            this.ajax()
            return
        }
        this.state.next = null
        this.state.prev = null
        this.state.example++
        localStorage.setItem('example', JSON.stringify(this.state.example));
        this.ajax()
    }

    prev() {
        if (typeof this.state.prev === 'number') {
            this.state.example = this.state.prev
            localStorage.setItem('example', JSON.stringify(this.state.prev));
            this.newState = this.state
            this.state.next = null
            this.state.prev = null
            this.ajax()
            return
        }
        this.state.next = null
        this.state.prev = null
        this.state.example--
        localStorage.setItem('example', JSON.stringify(this.state.example));
        this.ajax()
    }

    addEventListener() {
        return ['click']
    }

    template() {
        return `<div>
        <input type="button" value="Prev" click="prev"></input>
        <input type="button" value="Next" click="next"></input>
        <Link id="${this.state.example}" text="Demo"></Link>
        <div class="explanation">Explanation</div>
        <pre class="pre">Loading... or an error happend!</pre>
    </div>`
    }
}

let content = new App();

content.querySelector('.app')
