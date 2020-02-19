import Component from '../kiwi/Component.js'

class Header extends Component {
    template() {
        return `<div>Header</div>`
    }
}
class BodyMain extends Component {
    template() {
        return `<div>Body</div>`
    }
}
class Footer extends Component {
    template() {
        return `<div>Footer</div>`
    }
}
class App extends Component {
    setChildComponent() {
        return [Header, BodyMain, Footer];
    }
   
    template() {
        return `<div>
        <Header></Header>
        <BodyMain></BodyMain>
        <Footer></Footer>
    </div>`
    }
}

export default App;