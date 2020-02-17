import Component from '../../../kiwi/Component.js'

class Header extends Component {
    template() {
        return `<ul>
            ${this.map('links', link => `<li>${link}</li>`)}
        </ul>`
    }
}

class SomeClass extends Component {
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

export default SomeClass;
/*[
    ["h1","Properties Map"],
    ["lines","1-26"],
    ["h2","Explanation"],
    ["p","There is avalable a native functionality for properties what allows to render Arrays as Strings whit the map Method"],
    ["lines","4-8"],
    ["p","The definition of taht method show it is a sintax simplification"],
    ["p","The content have to be an Array and the content must not have colon (,) in it."],
    ["lines","39-41"],
    ["p","Full Code"],
    ["next","7"]
]*//*
 map(name, callback){
    return this.prop[name].map(callback).toString().replace(",", "")
}
*/