import Tabs from '../vendor/tabs';

export const getThemesTabs = () => {
  return new Tabs('questions', {
    activeButtonClass: 'questions__nav-button--active',
    activePanelClass: 'questions__content-item--active',
  });
};
