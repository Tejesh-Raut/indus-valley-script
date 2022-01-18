export abstract class Constants {
  static readonly author: string = 'Tejesh Raut';
  static readonly authorWebpage: string = 'https://tejesh-raut.github.io/';
  static readonly themeType: { [k: string]: ThemeType } = { light: 'light', dark: 'dark' };
  static readonly routes: string[] = ['/', 'texts', 'signs', 'references'];
}
