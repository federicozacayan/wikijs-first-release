import Component from '../kiwi/Component'
import App from './App'

describe('Testing Component:', () => {

    it('Testing setState', () => {
        let a = new Component();
        a.setState= ()=>{
            return {n:1}
        }
        a.setDefaultState()
        expect(a.state.n).toBe(1);
    })
    it('Testing setState', () => {
        let a = new Component();
        expect(typeof a.setState() === 'object').toBeTruthy();
    })

    it('Testing newState', () => {
        let a = new App();
        a.querySelector('body')
        a.newState = 'ok'
        expect(a.state).toBe('ok');
    })
})
