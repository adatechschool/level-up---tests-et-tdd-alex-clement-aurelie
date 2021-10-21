const puppeteer = require('puppeteer');
//const { TestWatcher } = require('@jest/core');
//const app = require('./app');

// test('Is the book removed', () => {
//     const testremove = removeBook(Book)
//     expect(testremove).not.toEqual(expect.arrayContaining(testremove));
// });

test('clicking on addbook should lead to form', async () => {
    const browser = await puppeteer.launch({
        headless: false,
        slowMo: 40,
        args: ['--window-size=1920,1080']
    });
    const page = await browser.newPage();
    await page.goto('http://127.0.0.1:5501/index.html');
    let i = 0;
    while (i < 3){
        await page.click('.add-book');
        await page.type('#book-title', 'Bouquin');
        await page.type('#author', 'Alexandre');
        await page.type('#pages', '230');
        await page.click('#read-status');
        await page.click('#submitBookBtn');
        i++}
}, 15000);