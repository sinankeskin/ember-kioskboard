import KioskBoard from 'kioskboard';
import { action, get } from '@ember/object';
import { isBlank, isEqual } from '@ember/utils';
import Component from '@glimmer/component';
import { cached } from '@glimmer/tracking';
import { getOwner } from '@ember/application';
import { isPresent } from '@ember/utils';

export default class KioskBoardComponent extends Component {
  @cached
  get _config() {
    const config =
      getOwner(this).resolveRegistration('config:environment') || {};

    return config['ember-kioskboard'] || {};
  }

  @cached
  get _options() {
    const options = this._defaultOptions();

    Object.assign(options, this._config, this._componentOptions);

    return options;
  }

  @cached
  get _componentOptions() {
    const defaults = [
      'keysArrayOfObjects',
      'keysJsonUrl',
      'keysSpecialCharsArrayOfStrings',
      'keysNumpadArrayOfNumbers',
      'language',
      'theme',
      'capsLockActive',
      'allowRealKeyboard',
      'allowMobileKeyboard',
      'cssAnimations',
      'cssAnimationsDuration',
      'cssAnimationsStyle',
      'keysAllowSpacebar',
      'keysSpacebarText',
      'keysFontFamily',
      'keysFontSize',
      'keysFontWeight',
      'keysIconSize',
      'autoScroll',
    ];

    const options = {};

    defaults.forEach((option) => {
      if (isPresent(get(this.args, option))) {
        options[option] = get(this.args, option);
      }
    });

    return options;
  }

  _defaultOptions() {
    return {
      keysArrayOfObjects: null,
      keysJsonUrl: null,
    };
  }

  constructor() {
    super(...arguments);

    if (isBlank(this.args.type) || isEqual(this.args.type, 'text-field')) {
      this.textField = true;
    } else {
      this.textField = false;
    }
  }

  @action
  _initializeOptions(element) {
    KioskBoard.run(element, this._options);
  }
}
