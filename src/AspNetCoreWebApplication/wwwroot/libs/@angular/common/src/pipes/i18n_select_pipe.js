/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import { Pipe } from '@angular/core';
import { isBlank, isStringMap } from '../facade/lang';
import { InvalidPipeArgumentError } from './invalid_pipe_argument_error';
/**
 *
 *  Generic selector that displays the string that matches the current value.
 *
 *  ## Usage
 *
 *  expression | i18nSelect:mapping
 *
 *  where `mapping` is an object that indicates the text that should be displayed
 *  for different values of the provided `expression`.
 *
 *  ## Example
 *
 *  ```
 *  <div>
 *    {{ gender | i18nSelect: inviteMap }}
 *  </div>
 *
 *  class MyApp {
 *    gender: string = 'male';
 *    inviteMap: any = {
 *      'male': 'Invite him.',
 *      'female': 'Invite her.',
 *      'other': 'Invite them.'
 *    }
 *    ...
 *  }
 *  ```
 *
 *  @experimental
 */
export var I18nSelectPipe = (function () {
    function I18nSelectPipe() {
    }
    I18nSelectPipe.prototype.transform = function (value, mapping) {
        if (isBlank(value))
            return '';
        if (!isStringMap(mapping)) {
            throw new InvalidPipeArgumentError(I18nSelectPipe, mapping);
        }
        return mapping.hasOwnProperty(value) ? mapping[value] : '';
    };
    I18nSelectPipe.decorators = [
        { type: Pipe, args: [{ name: 'i18nSelect', pure: true },] },
    ];
    /** @nocollapse */
    I18nSelectPipe.ctorParameters = [];
    return I18nSelectPipe;
}());
//# sourceMappingURL=i18n_select_pipe.js.map