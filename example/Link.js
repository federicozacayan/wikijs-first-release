import Component from '../kiwi/Component.js'

class Link extends Component {
    template(){
        return `
        <a href="/wikijs-first-release/example/example.html?example=${
            this.prop.id
        }">${
            this.prop.text
        } #${this.prop.id}</a>`
    }
}

export default Link;