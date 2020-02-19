import Component from '../kiwi/Component'

class Header extends Component {
    template() {
        return `<ul>
            ${this.map('links', link => `<li>${link}</li>`)}
        </ul>`
    }
}
class App extends Component {
    setChildComponent() {
        return Header;
    }
    links() {
        return [
            'Get start',
            'Documentation',
        ];
    }
    template() {
        return `<Header links="links"></Header>`
    }
}
export default App