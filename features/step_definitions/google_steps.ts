import {Given,When,Then,Before} from 'cucumber'
import {Selector} from 'testcafe'

Given("I open Google's search page", async t => {
    await t.navigateTo('https://www.google.com');
  });
  
When('I search for {word}', async(t,param) => {
await t.typeText('input[name="q"]',param[0])
.pressKey('enter')
})


