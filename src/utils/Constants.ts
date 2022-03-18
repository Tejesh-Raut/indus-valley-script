export abstract class Constants {
  static readonly themeType: { [k: string]: ThemeType } = { light: 'light', dark: 'dark' };
  static readonly routes: string[] = ['/', 'texts', 'signs', 'references'];
}
