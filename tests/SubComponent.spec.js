import Component, { getMethods } from '../kiwi/Component'
import { App2, Header2 } from './AppSetPropIntoChild'
import AppComplex from './AppMultipleComponents'
import App from './App'
import AppMap from './AppMap'

describe('Testing Template', () => {

    it('Testing validateTemplate 3', () => {
        let a = new Component();
        a.setChildComponent = () => {
            return 'a'
        }
        a.saveChildComponent()
        expect(Array.isArray(a.childComponent)).toBe(true);
    })



    it('Testing validateTemplate 3', () => {
        let a = new Component();
        expect(Array.isArray(a.setChildComponent())).toBe(true);
    })

    it('Testing validateTemplate 3', () => {
        let a = new App2();
        a.querySelector('body')
        let tagname = a.getNodeListComponents()[0].tagName.toString().toUpperCase()
        expect(tagname).toBe('HEADER2');
    })

    it('Testing getMatchNodeWithSubComponents', () => {
        let a = new Component();
        let methods = getMethods(a)
        expect(methods.includes('getMatchNodeWithSubComponents')).toBe(true);
    })

    it('Testing getFinalNode 1', () => {
        let a = new Component();
        let methods = getMethods(a)
        expect(methods.includes('getFinalNode')).toBe(true);
    })

    it('Testing getFinalNode 2', () => {
        let a = new Header2();
        document.querySelector('body').innerHTML = ''
        a.querySelector('body')
        let ul = a.getFinalNode()
        expect(ul.querySelector('li:first-child').innerText).toBe('Home');
    })

    it('Testing getFinalNode 3', () => {
        let a = new AppComplex();
        document.querySelector('body').innerHTML = ''
        a.querySelector('body')
        expect(a.node_subComponentList[0][1].innerText == 'Header').toBe(true);
    })



    it('Testing getNode 1', () => {
        let a = new Component();
        let methods = getMethods(a)
        expect(methods.includes('getNode')).toBe(true);
    })

    it('Testing getNode 2', () => {
        let a = new Component();
        a.template = () => {
            return '<div>ok</div>'
        }
        expect(a.getNode().innerText).toBe('ok');
    })

    it('Testing querySelector 1', () => {
        let a = new Component();
        let methods = getMethods(a)
        expect(methods.includes('querySelector')).toBe(true);
    })

    it('Testing querySelector 2', () => {
        let a = new App();
        document.querySelector('body').innerText = ''
        a.querySelector('body')
        expect(document.querySelector('body').innerText).toBe('Hello World');
    })

    it('Testing exec 1', () => {
        let a = new Component();
        let methods = getMethods(a)
        expect(methods.includes('exec')).toBe(true);
    })
    it('Testing exec 2', () => {
        //@todo //todo
        expect(true).toBe(true);
    })

    it('Testing firstRender 1', () => {
        let a = new Component();
        let methods = getMethods(a)
        expect(methods.includes('firstRender')).toBe(true);
    })

    it('Testing firstRender 2', () => {
        let out = 'fail'
        let a = new App();
        a.justOnce = () => {
            out = 'ok'
        }
        a.querySelector('body')

        setTimeout(() => {
            expect(out).toBe('ok');
        }, 100)
    })

    it('Testing delayFirstRenderExecution 1', () => {
        let a = new Component();
        let methods = getMethods(a)
        expect(methods.includes('delayFirstRenderExecution')).toBe(true);
    })

    it('Testing delayFirstRenderExecution 2', () => {
        let a = new Component();
        let out = 0
        a.justOnce = (p) => {
            out++
        }
        a.afterRender = (p) => {
            out++
        }
        a.delayFirstRenderExecution()
        setTimeout(() => {
            expect(out).toBe(2);
        }, 100)
    })

    it('Testing justOnce 1', () => {
        let a = new Component();
        let methods = getMethods(a)
        expect(methods.includes('justOnce')).toBe(true);
    })

    it('Testing justOnce 2', () => {
        let a = new Component();
        expect(a.justOnce()).toBe(false);
    })

    it('Testing map 1', () => {
        let a = new Component();
        let methods = getMethods(a)
        expect(methods.includes('map')).toBe(true);
    })

    it('Testing map 2', () => {
        let a = new AppMap();
        document.querySelector('body').innerText = ''
        a.querySelector('body')
        expect(document.querySelector('li:first-child').innerText).toBe('Get start');
    })

    

})
