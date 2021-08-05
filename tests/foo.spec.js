const { test, expect } = require('@playwright/test');

test('basic test', async ({ page }) => {
  await page.goto('https://duckduckgo.com/');
  const isLogoVisible = await page.isVisible('#logo_homepage_link');
 expect(isLogoVisible).toBe(true);
});
test('search', async ({ page }) => {
  test.slow();
  await page.goto('https://duckduckgo.com/');
  await page.fill('#search_form_input_homepage', "Test");
  await page.click('#search_button_homepage');
  const rezultatasTextContent = await page.textContent('#r1-0');
  console.log(rezultatasTextContent);
  expect(rezultatasTextContent).toContain('Test');
});

test(`Search MS word cheatsheets`, async ({ page }) => {
  test.slow();
  await page.goto('https://duckduckgo.com');
  await page.fill('#search_form_input_homepage', 'ms word cheat sheet');
  await page.click('#search_button_homepage');
  const textContent = await page.textContent('h3.c-base__title');
  const isCheatSheetsVisible = await page.isVisible('a.zcm__link.js-zci-link.js-zci-link--cheat_sheets.is-active');
  expect(isCheatSheetsVisible).toBe(true);
  expect(textContent).toContain("Microsoft Word 2010");
});
test('microsoft word cheat sheet', async ({ page }) => {
  await page.goto('https://duckduckgo.com/');
  await page.fill('#search_form_input_homepage', "microsoft word cheat sheet");
  await page.click('#search_button_homepage');
  const rezultatasTextContent = await page.textContent('h3.c-base__title');
  const rezultatasTextContent2 = await page.textContent('a.zcm__link.js-zci-link.js-zci-link--cheat_sheets.is-active');
  expect(rezultatasTextContent).toContain('Microsoft Word 2010');
  expect(rezultatasTextContent2).toContain('Cheat Sheet');
});

test('panda', async ({ page }) => {
  await page.goto('https://duckduckgo.com');
await page.waitForSelector("#search_form_input_homepage");
await page.fill('#search_form_input_homepage', "intitle:panda");
await page.click("#search_button_homepage", { force: true });
await page.waitForNavigation();
    const results = await page.evaluate(() => Array.from(document.querySelectorAll('.result__title'), element => element.textContent));
    console.log(results);
results.forEach(result => {
  expect(result.toLowerCase()).toContain("panda");
});
});

const passwordsLengths = ['8', '64'];
    passwordsLengths.forEach(passwordLength => {
    test(`Generate ${passwordLength} chracters long password`, async ({ page }) => {
        await page.goto('https://duckduckgo.com');
        await page.waitForSelector("#search_form_input_homepage");
        await page.fill('#search_form_input_homepage', ("password " + passwordLength));
        await page.click("#search_button_homepage");
        const generatedPassword = await page.textContent(".c-base__title");
        expect(generatedPassword.length).toEqual(+passwordLength)
    });
  });

  const passwordsLengths2 = ['7', '65'];
    passwordsLengths2.forEach(passwordLength => {
    test(`Doesn't Generate ${passwordLength} chracters long password`, async ({ page }) => {
        await page.goto('https://duckduckgo.com');
        await page.waitForSelector("#search_form_input_homepage");
        await page.fill('#search_form_input_homepage', ("password " + passwordLength));
        await page.click("#search_button_homepage");
        const isPasswordContentVisible = await page.isVisible(".c-base__title");
        expect(isPasswordContentVisible.length).toBe(false);
    });
  });