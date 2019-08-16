import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, select, boolean } from '@storybook/addon-knobs';
import { ThemeProvider } from 'styled-components';
import OptionsHelper from '../../utils/helpers/options-helper';
import { notes, Info } from './documentation';
import Icon from '.';
import classicTheme from '../../style/themes/classic';
import getDocGenInfo from '../../utils/helpers/docgen-info';

Icon.__docgenInfo = getDocGenInfo(
  require('./docgenInfo.json'),
  /icon(?!spec)/
);

function commonKnobs() {
  const tooltipMessage = text('tooltipMessage', '');
  return {
    tooltipMessage,
    type: select('type', OptionsHelper.icons, 'add'),
    tooltipPosition: tooltipMessage ? select('tooltipPosition', OptionsHelper.positions, 'top') : undefined,
    tooltipAlign: tooltipMessage ? select('tooltipAlign', OptionsHelper.alignAroundEdges, 'top') : undefined
  };
}

function classicKnobs() {
  const bgTheme = select('bgTheme', [...OptionsHelper.colors, ''], '');
  return {
    bgTheme,
    bgSize: bgTheme !== '' ? select('bgSize', OptionsHelper.sizesRestricted, Icon.defaultProps.bgSize) : undefined,
    bgShape: bgTheme !== '' ? select('bgShape', OptionsHelper.shapes, OptionsHelper.shapes[0]) : undefined
  };
}

function dlsKnobs() {
  const bgTheme = select('bgTheme', [...OptionsHelper.iconBackgrounds], 'none');
  const fontSize = select('fontSize', OptionsHelper.sizesBinary, Icon.defaultProps.fontSize);

  const bgSizeOptions = fontSize === 'large' ? ['medium', 'large'] : OptionsHelper.sizesRestricted;
  const bgSelectActiveOption = fontSize === 'large' ? 'medium' : Icon.defaultProps.bgSize;
  const bgSize = bgTheme !== 'none' ? select('bgSize', bgSizeOptions, bgSelectActiveOption) : undefined;
  return {
    bgTheme,
    fontSize,
    bgSize,
    bgShape: bgTheme !== 'none' ? select('bgShape', OptionsHelper.shapes, OptionsHelper.shapes[0]) : undefined,
    iconColor:
      bgTheme === 'none' ? select('iconColor', [...OptionsHelper.iconColors], OptionsHelper.iconColors[0]) : undefined,
    disabled: boolean('disabled', Icon.defaultProps.disabled)
  };
}

storiesOf('Icon', module)
  .add(
    'classic',
    () => (
      <ThemeProvider theme={ classicTheme }>
        <Icon { ...commonKnobs() } { ...classicKnobs() } />
      </ThemeProvider>
    ),
    {
      info: { text: Info },
      notes: { markdown: notes },
      knobs: { escapeHTML: false }
    }
  )
  .add('default', () => {
    const props = dlsKnobs();

    if (props.iconColor === 'on-dark-background') props.bgTheme = 'info';

    return <Icon { ...commonKnobs() } { ...props } />;
  }, {
    info: { text: Info },
    notes: { markdown: notes },
    knobs: { escapeHTML: false }
  });
