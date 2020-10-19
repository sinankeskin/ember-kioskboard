import { action, computed, get } from '@ember/object';
import { isBlank, isEqual } from '@ember/utils';

import Component from '@glimmer/component';
import { assign } from '@ember/polyfills';
/* globals KioskBoard */
import { getOwner } from '@ember/application';
import { isPresent } from '@ember/utils';

export default class KioskBoardComponent extends Component {
  @computed
  get _config() {
    const config = getOwner(this).resolveRegistration('config:environment') || {};

    return config['ember-kioskboard'] || {};
  }

  @computed('_config')
  get _options() {
    const options = this._defaultOptions();

    assign(options, this._config, this._componentOptions());

    return options;
  }

  constructor() {
    super(...arguments);

    if (isBlank(this.args.type) || isEqual(this.args.type, 'text-field')) {
      this.textField = true;
    } else {
      this.textField = false;
    }
  }

  _defaultOptions() {
    return {
      keysArrayOfObjects: null,
      keysJsonUrl: null,
    };
  }

  _componentOptions() {
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

  @action
  _initializeOptions(element) {
    KioskBoard.Init(this._options);

    KioskBoard.Run(`#${element.id}`);
  }

  @action
  _updateOptions() {
    KioskBoard.Merge(this._options);
  }
}
