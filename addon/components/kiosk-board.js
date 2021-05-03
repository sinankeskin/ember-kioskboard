/* globals KioskBoard */

import { action, get } from '@ember/object';
import { isBlank, isEqual } from '@ember/utils';

import Component from '@glimmer/component';
import { assign } from '@ember/polyfills';
import { cached } from 'tracked-toolbox';
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

    assign(options, this._config, this._componentOptions);

    return options;
  }

  @cached
  get _componentOptions() {
    const defaults = [
      'keysArrayOfObjects',
      'keysJsonUrl',
      'specialCharactersObject',
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
    KioskBoard.Run(element, this._options);
  }
}
