import Tabs from '../vendor/tabs';

export const getThemesTabs = () => {
  return new Tabs('questions', {
    activeButtonClass: 'quections__nav-button--active',
    activePanelClass: 'quections__content-item--active',
  });
};
