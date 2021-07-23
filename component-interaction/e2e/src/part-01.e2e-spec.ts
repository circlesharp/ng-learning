import { browser, by, element } from 'protractor';

const heroNames = ['Dr IQ', 'Magneta', 'Bombasto'];
const masterName = 'Master';

it('should pass properties to children properly', async () => {
  const parent = element(by.tagName('app-hero-parent'));
  const heroes = parent.all(by.tagName('app-hero-child'));

  for (let i = 0; i < heroNames.length; i++) {
    const childTitle = await heroes
      .get(i)
      .element(by.tagName('h3'))
      .getText();

    const childDetail = await heroes
      .get(i)
      .element(by.tagName('p'))
      .getText();
    
    expect(childTitle).toEqual(heroNames[i] + ' says:');
    expect(childDetail).toEqual(masterName);
  }
});
