import Component from '../kiwi/Component'

class App extends Component {
    afterRender() {
        return document.querySelector('body').innerText
    }
    beforeRender() {
        return document.querySelector('body').innerText
    }
    template() {
        return `<div>Hello World</div>`
    }
}

export default App;