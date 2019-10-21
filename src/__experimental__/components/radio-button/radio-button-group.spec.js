import React from 'react';
import TestRenderer from 'react-test-renderer';
import { mount, shallow } from 'enzyme';
import 'jest-styled-components';
import { css } from 'styled-components';
import { RadioButton, RadioButtonGroup } from '.';
import { LegendStyle } from '../fieldset/fieldset.style';
import { assertStyleMatch } from '../../../__spec_helper__/test-utils';

const buttonValues = ['test-1', 'test-2'];
const name = 'test-group';

function render(renderer = TestRenderer.create) {
  const children = buttonValues.map(value => <RadioButton key={ `k-${value}` } value={ value } />);

  return renderer(
    <RadioButtonGroup
      name={ name }
      legend='Test RadioButtonGroup Legend'
    >
      {children}
    </RadioButtonGroup>
  );
}

function getButtons(wrapper) {
  return wrapper.find(RadioButton);
}

function getInputWrapper(button) {
  return button.find('input');
}

describe('RadioButtonGroup', () => {
  describe('child RadioButton prop / key mapping', () => {
    const wrapper = render(mount);
    const buttons = getButtons(wrapper);
    const buttonArray = buttons.getElements();

    describe.each(buttonArray)('buttons[%#]', (button) => {
      const index = buttonArray.indexOf(button);

      describe('key / value (both derived from value prop)', () => {
        const expectedValue = buttonValues[index];
        const expectedKey = `.$k-${expectedValue}`;

        it(`sets the value to ${expectedValue}`, () => {
          expect(button.props.value).toEqual(expectedValue);
        });

        it(`sets the key to ${expectedKey}`, () => {
          expect(button.key).toEqual(expectedKey);
        });
      });

      describe('name', () => {
        it('is set using the RadioButtonGroup name prop', () => {
          const buttonWrapper = buttons.at(buttonArray.indexOf(button));
          const input = getInputWrapper(buttonWrapper).instance();

          expect(input.name).toEqual(name);
        });
      });
    });

    describe('selected button state', () => {
      describe('initial', () => {
        it('sets checked to false for both buttons', () => {
          buttonArray.forEach((button) => {
            expect(button.props.checked).toBe(false);
          });
        });
      });

      describe('defaultChecked', () => {
        it('sets a child radio button to checked when the prop is set programatically', () => {
          const radioGroup = shallow(
            <RadioButtonGroup
              name={ name }
              legend='Test RadioButtonGroup Legend'
            >
              <RadioButton checked value='foo' />
            </RadioButtonGroup>
          );

          const button = getButtons(radioGroup);
          expect(button.props().checked).toBe(true);
        });
      });

      describe.each(buttonArray)('when buttons[%#] is changed', (button) => {
        const index = buttonArray.indexOf(button);
        const otherIndex = index ? 0 : 1;
        let buttonWrapper = buttons.at(index);
        let otherButtonWrapper = buttons.at(otherIndex);
        const inputWrapper = getInputWrapper(buttonWrapper);
        const target = inputWrapper.instance();

        inputWrapper.simulate('change', { target });
        wrapper.update();

        buttonWrapper = getButtons(wrapper).at(index);
        otherButtonWrapper = getButtons(wrapper).at(otherIndex);

        it('sets checked === true when it is changed', () => {
          expect(buttonWrapper.props().checked).toBe(true);
          expect(otherButtonWrapper.props().checked).toBe(false);
        });

        it('sets checked === false when the other button is selected', () => {
          const otherInputWrapper = getInputWrapper(otherButtonWrapper);
          const otherTarget = otherInputWrapper.instance();

          otherInputWrapper.simulate('change', { target: otherTarget });
          wrapper.update();

          buttonWrapper = getButtons(wrapper).at(index);
          otherButtonWrapper = getButtons(wrapper).at(otherIndex);

          expect(buttonWrapper.props().checked).toBe(false);
          expect(otherButtonWrapper.props().checked).toBe(true);
        });
      });
    });
  });


  describe('styles', () => {
    it('applies the correct Legend styles', () => {
      assertStyleMatch(
        {
          fontSize: '14px',
          lineHeight: '17px',
          marginBottom: '16px',
          marginLeft: '-2px'
        },
        render().toJSON(),
        { modifier: css`${LegendStyle}` }
      );
    });
  });
});
