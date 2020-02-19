import Component from '../kiwi/Component'
import { BadTag } from './AppSetPropIntoChild'

describe('Testing Template', () => {

    it('Testing validateTemplate', () => {
        let a = new BadTag();
        a.setProp('body')
        expect(() => {
            a.querySelector('body')
        })
            .toThrowError(Error, 'Self close tag is not allow');
    })
    it('Testing validateTemplate 1', () => {
        let a = new Component();
        a.template = () => {
            return `<ul>
                        <li>ok</li>
                    </ul>`
        }
        expect(a.templateToNode().firstElementChild.innerText).toBe('ok');
    })

    it('Testing validateTemplate 2', () => {
        let a = new Component();
        a.template = () => {
            return `<ul>
                        <li>ok</li>
                    </ul>`
        }
        a.templateToNode()
        expect(a.singleElement).toBe(false);
    })
    it('Testing validateTemplate 3', () => {
        let a = new Component();
        a.template = () => {
            return `<div>ok</div>`
        }
        a.templateToNode()
        expect(a.singleElement).toBe(true);
    })


})
