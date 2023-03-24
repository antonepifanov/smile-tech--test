import {Tabs} from '../vendor/tabs';

export const getThemesTabs = () => {
  return new Tabs('subscriptions', {
    activeButtonClass: 'subscriptions__button--active',
    activePanelClass: 'subscriptions__list--active',
  });
};
