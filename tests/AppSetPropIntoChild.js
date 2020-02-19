import Component from '../kiwi/Component'

class Header extends Component {
    template() {
        return `<ul>
            <li>${this.prop.links1[0]}</li>
            <li>${this.prop.links1[1]}</li>
        </ul>`
    }
}

class App extends Component {
    setChildComponent() {
        return Header;
    }
    links2() {
        return [
            'Get started',
            'Documentation',
        ];
    }
    template() {
        return `<Header links1="links2"></Header>`
    }
}
class Header2 extends Component {
    template() {
        return `<ul>
            <li>Home</li>
            <li>Porfolio</li>
            <li>Contact us</li>
        </ul>`
    }
}
class App2 extends Component {
    setChildComponent() {
        return Header2;
    }
    template() {
        return `<Header2></Header2>`
    }
}

class BadTag extends Component {
    setChildComponent() {
        return Header2;
    }
    template() {
        return `<Header2/>`
    }
}

export default App;
export {App2, BadTag, Header2}