"use strict";
const {
    $,
    button,
    click,
    dragAndDrop,
    hover,
    goto,
    into,
    textBox,
    waitFor,
    write,
    screenshot
  } = require("taiko");

gauge.screenshotFn = async function() {
    return await screenshot({ encoding: 'base64' });
};
step("Navigate to Base QA site", async () => {
  await goto("https://app-qa.basehq.com/")
  await waitFor(1000)
});

step("Click to Sign in tab", async () => {
    await click("Sign in");
  });

  step("Login with existing user <user>", async (user) => {
    await waitFor(5000)
    await write(user, into(textBox({ id: 'email' })));
    await write("Abcd1234", into(textBox({ id: 'password' })));
    await click(button({ name: 'sign-in-button' }));
    await waitFor(10000)
  });

  step("Go to 'Digest Builder' on Menu", async () => {
    await click($("//div[@class='sidebar-nav-list']//*[text()='Digest Builder']"))
    await hover($("//*[@title='Home']"));
  });

  step("Click chevron left icon to show the Digest Builder list", async() => {
    await waitFor(3000)
    await click($("//*[@class='chevron-left-icon']/parent::button"))
})

step("Click <text>", async (text) => {
    await waitFor(1000)
    await click(text)
    await waitFor(1000)
  });


  step("Drag <textElement> into Dynamic Digest", async(textElement) => {
    await waitFor(1000)
    await dragAndDrop((textElement), into($("//*[@class='dynamic-digest']")))
    await waitFor(1000)
})

step("Enter <question> to Header", async (question) => {
    await write(question, into($("(//*[@placeholder='Header'])[last()]")));
  });