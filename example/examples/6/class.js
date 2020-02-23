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
    ["p","There is available a native functionality for properties what allows to render Arrays as Strings whit the map Method"],
    ["lines","4-8"],
    ["p","The definition of taht method show it is a sintax simplification."],
    ["p","At the moment, it is only available for properties. We are not considering this method as necessary, because under the hood it is simple."],
    ["lines","39-41"],
    ["p","Full Code:"],
    ["next","7"]
]*//*
 map(name, callback){
    return this.prop[name].map(callback).join('')
}
*/