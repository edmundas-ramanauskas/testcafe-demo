import {ClientFunction} from 'testcafe';
import ReactSelector from 'testcafe-react-selectors';

fixture('level').page('http://localhost:3000/');

const triggerFilter = ClientFunction(detail => {
    window.dispatchEvent(new CustomEvent('test', {detail}));
});

test('test example 1', async t => {
    const table = ReactSelector('ProductTable');
    await t
        .expect(table.exists)
        .ok()
        .expect(table.getReact(({props}) => props.filter))
        .eql('');
    await triggerFilter('something');
    await t
        .expect(table.getReact(({props}) => props.filter))
        .eql('something');
});

test('test example 2', async t => {
    const table = ReactSelector('ProductTable Items');
    const items = ReactSelector('ProductRow');
    await t
        .expect(table.exists)
        .ok()
        .expect(table.getReact(({props}) => props.prefix))
        .eql('')
        .click(items.nth(2))
        .expect(table.getReact(({props}) => props.prefix))
        .eql('Basketball');
});

test.page('http://localhost:3000/options')('test example 3', async t => {
    const options = [
        {key: 'opt1', name: 'Option 1', checked: false},
        {key: 'opt2', name: 'Option 2', checked: false},
        {key: 'opt3', name: 'Option 3', checked: false}
    ];
    const option = ReactSelector('Options Option');
    const toggle = ReactSelector('Options Option Toggle');
    for (let i = 0; i < options.length; i++) {
        await t
            .expect(option.nth(i).exists)
            .ok()
            .expect(option.nth(i).textContent)
            .contains(options[i].name);

        // validate initial value
        await t
            .expect(option.nth(i).getReact(({props}) => props.checked))
            .eql(options[i].checked, options[i].name);
        // perform click
        await t.click(toggle.nth(i));
        // validate value after click
        await t
            .expect(option.nth(i).getReact(({props}) => props.checked))
            .eql(!options[i].checked, options[i].name);
    }
});
