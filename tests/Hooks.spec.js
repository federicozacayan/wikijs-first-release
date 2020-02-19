import Component from '../kiwi/Component'
import App from './App'

describe('Testing Component:', () => {

    it('Testing afterRender 1', () => {
        let a = new Component();
        expect(a.afterRender()).toBe(false);
    })

    it('Testing afterRender 2', () => {
        let a = new App();
        document.querySelector('body').innerText = ''
        a.querySelector('body')
        expect(a.afterRender()).toBe('Hello World');
    })

    it('Testing beforeRender 1', () => {
        let a = new Component();
        expect(a.beforeRender()).toBe(false);
    })
    it('Testing beforeRender 2', () => {
        //@todo //todo
        expect(false).toBe(false);
    })

    it('Testing beforeRender 3', () => {
        //@todo //todo
        expect(false).toBe(false);
    })



})
