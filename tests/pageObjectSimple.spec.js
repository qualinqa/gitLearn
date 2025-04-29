import { test, expect } from '@playwright/test';
import {faker} from '@faker-js/faker';
import { MainPage } from '../src/pages/mainPage';
import { RegisterPage } from '../src/pages/registerPage';
import { YourfeedPage } from '../src/pages/yourfeedPage';

const URL_UI = 'https://realworld.qa.guru';


test('Пользователь может авторизоваться используя логин и пароль', 
  async ({ page }) => {

    const user = {
      username: faker.person.firstName(),
      email: faker.internet.email(),
      password: faker.internet.password({length: 12})
    };

    const mainPage = new MainPage (page);
    const registerPage = new RegisterPage(page);
    const yourfeedPage = new YourfeedPage(page);

    await mainPage.open(URL_UI);
    await mainPage.gotoRegister();
    await registerPage.register(user.username, user.email, user.password);
    await expect (yourfeedPage.profileNameField).toBeVisible();
    await expect (yourfeedPage.profileNameField).toContainText(user.username);
  });

  /* await page.goto('https://realworld.qa.guru/');
  await page.getByRole('link', { name: 'Sign up' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).click();
  await page.getByRole('textbox', { name: 'Your Name' }).fill('Irishka');
  await page.getByRole('textbox', { name: 'Email' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill('Irishka@ya.ru');
  await page.getByRole('textbox', { name: 'Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill('Irishka');
  await page.getByRole('button', { name: 'Sign up' }).click();
  await expect(page.getByRole('navigation')).toContainText('Irishka');
  
});
*/