const { test, expect } = require('@playwright/test');
//const { BasicCalculator } = require('../pages/BasicCalculator');

/* test.describe('Basic Calculator test suite', () => {
  let page;
test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
    startPage = new BasicCalculator(page);
});
test.beforeEach(async () => {
  await startPage.goto();
});*/

test.only('addition test v2', async ({ page }) => {
  await page.goto('https://testsheepnz.github.io/BasicCalculator');
  const optionSelector = await page.selectOption('#selectBuild', '2');
  await page.fill('#number1Field', "5");
  await page.fill('#number2Field', "2");
  const optionSelector2 = await page.selectOption('#selectOperationDropdown', '0');
  await page.click('#calculateButton');
  const atsakymas = await page.inputValue('#numberAnswerField');
  expect(optionSelector).toContain('2');
  expect(optionSelector2).toContain('0');
  expect(atsakymas).toContain('10');
});

test.only('checkbox test', async ({ page }) => {
  await page.goto('https://testsheepnz.github.io/BasicCalculator');
  const optionSelector = await page.selectOption('#selectBuild', '4');
  const isActivated = await page.isEnabled('#integerSelect');
  expect(optionSelector).toContain('4');
  expect(isActivated).toBe(true);
});


test.only('clear button test', async ({ page }) => {
  await page.goto('https://testsheepnz.github.io/BasicCalculator');
  const optionSelector = await page.selectOption('#selectBuild', '5');
  const isActivated2 = await page.isEnabled('#clearButton');
  expect(optionSelector).toContain('5');
  expect(isActivated2).toBe(true);
});


  
test.only('visibility test v9', async ({ page }) => {
  await page.goto('https://testsheepnz.github.io/BasicCalculator');
  const optionSelector = await page.selectOption('#selectBuild', '9');
  const fieldVisible = await page.isVisible('#number2Field');
  expect(optionSelector).toContain('9');
  expect(fieldVisible).toBe(true);
});

test.only('multiplication test', async ({ page }) => {
  await page.goto('https://testsheepnz.github.io/BasicCalculator');
  const optionSelector = await page.selectOption('#selectBuild', '7');
  await page.fill('#number1Field', "5");
  await page.fill('#number2Field', "2");
  const optionSelector2 = await page.selectOption('#selectOperationDropdown', '2');
  await page.dblclick('#calculateButton');
  const atsakymas = await page.inputValue('#numberAnswerField');
  expect(optionSelector).toContain('7');
  expect(optionSelector2).toContain('2');
  console.log(atsakymas);
  expect(atsakymas).toContain('10');
});
//});