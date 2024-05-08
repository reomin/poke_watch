import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('http://localhost:5176/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Poke Watch/);
});

//テストケースを作成して、テストする、
test('test', async ({ page }) => {
  await page.goto('http://localhost:5176/');
  //idを入力
  await page.fill('input[type="number"]', '1');
  
  //ボタンを押す
  await page.getByRole('button', { name: 'ボタン' }).click();

  //スクリーンショットを撮影して、状況を把握する
  await page.screenshot({ path: 'screenshot.png', fullPage: true });

  //idと一致した情報を持っているポケモンの写真が表示される
  const imageSelector = 'img[src="	https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/1.png"]'; 
  // 画像がDOMに存在するか確認
  const isImageInDOM = await page.$(imageSelector) !== null;


});

//入力されたidが、どのポケモンとも一致しなかった時に、エラーメッセージを表示する→アラートの内容は、[入力されたIDをもつポケモンは存在しません」
