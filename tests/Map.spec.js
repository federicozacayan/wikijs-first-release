import App from './AppMap'
describe('Testing Maps:', () => {

    it('Testing Maps', ()=>{
        let a = new App()
        a.querySelector('body')
        expect(true).toBe(true);
    })

})