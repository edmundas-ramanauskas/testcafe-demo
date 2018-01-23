import {ClientFunction} from 'testcafe';
import ReactSelector from 'testcafe-react-selectors';

fixture('level').page('http://localhost:3000/');

const triggerFilter = ClientFunction(detail => {
    window.dispatchEvent(new CustomEvent('test', {detail}));
});

test('test example', async t => {
    const table = ReactSelector('ProductTable');
    await t
        .expect(table.exists)
        .ok()
        .expect(table.getReact(({props}) => props.filter))
        .eql('');
    await triggerFilter('something');
    await t
        // .debug()
        .expect(table.getReact(({props}) => props.filter))
        .eql('something');
});
