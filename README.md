# ember-kioskboard

Ember addon for [KioskBoard](https://furcan.github.io/KioskBoard/) virtual kiosk keyboard library.

![screenshot](https://raw.githubusercontent.com/furcan/KioskBoard/master/docs/github-cover.png)

## Compatibility

* Ember.js v3.24 or above
* Ember CLI v3.24 or above
* Node.js v12 or above

## Installation

```
ember install ember-kioskboard
```

## Usage

You can change all global configuration settings via `config/environment.js` file.

Please check [KioskBoard](https://furcan.github.io/KioskBoard/) site for more configuration details.

```javascript
ENV['ember-kioskboard'] = {
  /*!
   * Required
   * Have to define an Array of Objects for the custom keys. Hint: Each object creates a row element (HTML) on the keyboard.
   * e.g. [{"key":"value"}, {"key":"value"}] => [{"0":"A","1":"B","2":"C"}, {"0":"D","1":"E","2":"F"}]
   */
  keysArrayOfObjects: null,

  /*!
   * Required only if "keysArrayOfObjects" is "null".
   * The path of the "${language}-key.json" file must be set to the "keysJsonUrl" option. (XMLHttpRequest to getting the keys from JSON file.)
   * All language key files will move to public folder after install this addon automatically. So you yan use the file like 'english-keys.json' etc.
   */
  keysJsonUrl: null,

  /*
   * Optional: (Special Characters Object)* Can override default special characters object with the new/custom one.
   * e.g. {"key":"value", "key":"value", ...} => {"0":"#", "1":"$", "2":"%", "3":"+", "4":"-", "5":"*"}
   */
  specialCharactersObject: null,

  // Optional: (Other Options)

  // Language Code (ISO 639-1) for custom keys (for language support) => e.g. "en" || "tr" || "es" || "de" || "fr" etc.
  language: 'en',

  // The theme of keyboard => "light" || "dark" || "flat" || "material" || "oldschool"
  theme: 'light',

  // Uppercase or lowercase to start. Uppercase when "true"
  capsLockActive: true,

  // Allow or prevent real/physical keyboard usage. Prevented when "false"
  allowRealKeyboard: false,

  // v1.1.0 and the next versions
  // Allow or prevent mobile keyboard usage. Prevented when "false"
  allowMobileKeyboard: false,

  // CSS animations for opening or closing the keyboard
  cssAnimations: true,

  // CSS animations duration as millisecond
  cssAnimationsDuration: 360,

  // CSS animations style for opening or closing the keyboard => "slide" || "fade"
  cssAnimationsStyle: 'slide',

  // Allow or deny Spacebar on the keyboard. The keyboard is denied when "false"
  keysAllowSpacebar: true,

  // Text of the space key (spacebar). Without text => " "
  keysSpacebarText: 'Space',

  // Font family of the keys
  keysFontFamily: 'sans-serif',

  // Font size of the keys
  keysFontSize: '22px',

  // Font weight of the keys
  keysFontWeight: 'normal',

  // Size of the icon keys
  keysIconSize: '25px',
};
```

Default configuration

```handlebars
<KioskBoard @keysJsonUrl="english-keys.json" />
```

All default configuration parameters

```handlebars
<KioskBoard
  @keysArrayOfObjects={{array (hash 0='A' 1='B' 2='C') (hash 0='D' 1='E' 2='F') (hash 0='G' 1='H' 2='I')}}
  @specialCharactersObject={{null}}
  @language='en'
  @theme='light'
  @capsLockActive={{true}}
  @allowRealKeyboard={{false}}
  @allowMobileKeyboard={{false}}
  @cssAnimations={{true}}
  @cssAnimationsDuration={{360}}
  @cssAnimationsStyle='slide'
  @keysAllowSpacebar={{true}}
  @keysSpacebarText='Space'
  @keysFontFamily='sans-serif'
  @keysFontSize='22px'
  @keysFontWeight='normal'
  @keysIconSize='25px'
/>
```

## Contributing

See the [Contributing](CONTRIBUTING.md) guide for details.
I'm sorry that i don't have time to write tests. Please report if you find any issue.

Thanks.

## License

This project is licensed under the [MIT License](LICENSE.md).
