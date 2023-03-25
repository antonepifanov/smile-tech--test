import {iosVhFix} from './utils/ios-vh-fix';
import {getThemesTabs} from './modules/init-tabs';
import {initAccordions} from './modules/init-accordions';

window.addEventListener('DOMContentLoaded', () => {
  iosVhFix();

  // все скрипты должны быть в обработчике 'DOMContentLoaded', но не все в 'load'
  // в load следует добавить скрипты, не участвующие в работе первого экрана
  window.addEventListener('load', () => {
    getThemesTabs();
    initAccordions();
  });
});
