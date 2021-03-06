import React from 'react';
import 'jest-styled-components';
import { shallow } from 'enzyme';
import { Link as RouterLink } from 'react-router';
import Icon from 'components/icon';
import TestRenderer from 'react-test-renderer';
import Button from './button.component';
import StyledButton from './button.style';
import BaseTheme from '../../style/themes/base';
import classicTheme from '../../style/themes/classic';
import OptionsHelper from '../../utils/helpers/options-helper';
import { assertStyleMatch } from '../../__spec_helper__/test-utils';
import { rootTagTest } from '../../utils/helpers/tags/tags-specs';
import StyledIcon from '../icon/icon.style';

const render = (props, renderer = shallow) => {
  return renderer(
    <Button { ...props } />
  );
};

const variants = ['primary', 'secondary', 'tertiary', 'destructive', 'darkBackground'];
const sizes = { small: [32, 16], medium: [40, 24], large: [48, 32] };
const classicColorVariants = ['blue', 'grey', 'magenta', 'magenta-dull', 'red', 'white'];

describe('Button', () => {
  describe('when no props other than children are passed into the component', () => {
    it('renders the default props and children', () => {
      const wrapper = render({ children: 'foo' });
      expect(wrapper.contains(<Icon type='filter' />)).toBeFalsy();
      expect(wrapper.props().buttonType).toEqual('secondary');
      expect(wrapper.props().size).toEqual('medium');
      expect(wrapper.props().disabled).toEqual(false);
      expect(wrapper.props().legacyColorVariant).toEqual('blue');
    });
  });

  describe('when only the "iconPosition" and "iconType" props are passed into the component', () => {
    it('renders the default props and children to match the snapshot with the Icon before children', () => {
      const wrapper = render({ children: 'foo', iconType: 'filter', iconPosition: 'before' }, TestRenderer.create);
      expect(wrapper).toMatchSnapshot();
    });

    it('renders the default props and children to match the snapshot with the Icon after children', () => {
      const wrapper = render({ children: 'foo', iconType: 'filter', iconPosition: 'after' }, TestRenderer.create);
      expect(wrapper).toMatchSnapshot();
    });

    describe.each(['before', 'after'])(
      'when position is set to "%s"',
      (position) => {
        describe.each(OptionsHelper.buttonTypes)(
          'and the button type is %s',
          (buttonType) => {
            let wrapper;
            beforeEach(() => {
              wrapper = render({
                children: 'foo',
                iconType: 'filter',
                iconPosition: position,
                buttonType
              }).dive();
            });

            it('contains an Icon', () => {
              const assertion = (wrapper.find(Icon).exists() && wrapper.find(Icon).props().type === 'filter');
              expect(assertion).toEqual(true);
            });
          }
        );
      }
    );
  });

  describe('when there are no props passed except children', () => {
    it('matches the expect styles for a default button with variants "secondary" and "medium"', () => {
      const wrapper = render({ children: 'foo' }, TestRenderer.create).toJSON();
      assertStyleMatch({
        background: 'transparent',
        borderColor: BaseTheme.colors.primary,
        color: BaseTheme.colors.primary,
        fontSize: '14px',
        height: '40px',
        paddingLeft: '24px',
        paddingRight: '24px'
      }, wrapper);
    });
  });

  describe.each(variants)(
    'when setting the "buttonType" prop to "%s"',
    (variant) => {
      it('matches the expected style', () => {
        const wrapper = render({
          children: 'foo', disabled: true, buttonType: variant
        }, TestRenderer.create).toJSON();
        assertStyleMatch({
          background:
          (variant === 'secondary' || variant === 'tertiary' ? 'transparent' : BaseTheme.disabled.button),
          borderColor: (variant === 'secondary' ? BaseTheme.disabled.button : 'transparent'),
          color: BaseTheme.disabled.text
        }, wrapper);
      });
    }
  );

  describe('when the "disabled" prop is passed', () => {
    it('matches the style for the default Button when no "as" and "size" props are passed', () => {
      const wrapper = render({ children: 'foo', disabled: true }, TestRenderer.create).toJSON();
      assertStyleMatch({
        background: 'transparent',
        borderColor: BaseTheme.disabled.button,
        color: BaseTheme.disabled.text,
        fontSize: '14px',
        height: `${sizes.medium[0].toString()}px`,
        paddingLeft: `${sizes.medium[1].toString()}px`,
        paddingRight: `${sizes.medium[1].toString()}px`
      }, wrapper);
    });

    describe.each(Object.keys(sizes))(
      'when a "%s"',
      (size) => {
        describe.each(variants)(
          ' "%s" button is renderred',
          (variant) => {
            it('matches the expected style', () => {
              const wrapper = render({
                children: 'foo', disabled: true, buttonType: variant, size
              }, TestRenderer.create).toJSON();

              assertStyleMatch({
                background:
                (variant === 'secondary' || variant === 'tertiary' ? 'transparent' : BaseTheme.disabled.button),
                borderColor: (variant === 'secondary' ? BaseTheme.disabled.button : 'transparent'),
                color: BaseTheme.disabled.text,
                fontSize: (size === 'large' ? '16px' : '14px'),
                height: `${sizes[size][0].toString()}px`,
                paddingLeft: `${sizes[size][1].toString()}px`,
                paddingRight: `${sizes[size][1].toString()}px`
              }, wrapper);
            });
          }
        );
      }
    );
  });

  describe.each(classicColorVariants)(
    'when the color variant is set to "%s"',
    (variant) => {
      const wrapper = TestRenderer.create(
        <StyledButton
          size='large'
          theme={ classicTheme }
          variant={ variant }
        >Foo
        </StyledButton>
      );

      it('matches the snapshot with the default props', () => {
        expect(wrapper).toMatchSnapshot();
      });
    }
  );

  describe('when the classic theme is applied', () => {
    describe.each(classicColorVariants)(
      'setting the color variant to "%s"',
      (variant) => {
        const wrapper = TestRenderer.create(
          <StyledButton
            iconType='services'
            theme={ classicTheme }
            variant={ variant }
          >Foo
          </StyledButton>
        );

        it('matches the snapshot when default props are passed', () => {
          expect(wrapper).toMatchSnapshot();
        });
      }
    );

    it('matches the expected style for a "blue" Button with default props', () => {
      const wrapper = TestRenderer.create(<StyledButton theme={ classicTheme }>foo</StyledButton>);
      assertStyleMatch({
        background: 'transparent',
        border: '1px solid #255bc7',
        color: '#255bc7'
      }, wrapper.toJSON());
    });

    it('matches the expected style default "disabled" Button', () => {
      const wrapper = TestRenderer.create(<StyledButton disabled theme={ classicTheme }>foo</StyledButton>);
      assertStyleMatch({
        background: '#e6ebed'
      }, wrapper.toJSON());
    });
  });

  describe('when not in classic theme', () => {
    it('matches the applies the expected style to the icon', () => {
      const wrapper = TestRenderer.create(<StyledButton iconType='plus' />);
      assertStyleMatch({
        height: '16px'
      }, wrapper.toJSON(), { modifier: `${StyledIcon}` });
    });
  });

  describe('A primary button', () => {
    const primary = render({
      name: 'Primary Button',
      as: 'primary',
      onClick: jest.fn(),
      children: 'Primary'
    }).dive();

    it('renders a primary button', () => {
      expect(primary.props().name).toEqual('Primary Button');
      expect(primary.props().buttonType).toEqual('primary');
      expect(primary.containsMatchingElement(
        <span>Primary</span>
      )).toBeTruthy();
    });
  });

  describe('A secondary button', () => {
    const secondary = render({
      name: 'Secondary Button',
      className: 'customClass',
      theme: 'red',
      children: 'Secondary'
    }).dive();

    it('renders a secondary button', () => {
      expect(secondary.props().name).toEqual('Secondary Button');
      expect(secondary.props().buttonType).toEqual('secondary');
      expect(secondary.containsMatchingElement(
        <span>Secondary</span>
      )).toBeTruthy();
    });
  });

  describe('A small button', () => {
    const small = render({
      name: 'Small Button',
      size: 'small',
      children: 'Small'
    }).dive();

    it('renders a small button', () => {
      expect(small.props().name).toEqual('Small Button');
      expect(small.props().size).toEqual('small');
      expect(small.containsMatchingElement(
        <span>Small</span>
      )).toBeTruthy();
    });
  });

  describe('A large button', () => {
    const large = render({
      name: 'Large Button',
      size: 'large',
      children: 'Large'
    }).dive();

    it('renders a large button', () => {
      expect(large.props().name).toEqual('Large Button');
      expect(large.props().size).toEqual('large');
      expect(large.containsMatchingElement(
        <span>Large</span>
      )).toBeTruthy();
    });
  });

  describe('A disabled button', () => {
    const disabled = render({
      name: 'Disabled Button',
      disabled: true,
      children: 'Disabled'
    }).dive();

    it('renders a disabled button', () => {
      expect(disabled.props().name).toEqual('Disabled Button');
      expect(disabled.props().buttonType).toEqual('secondary');
      expect(disabled.containsMatchingElement(
        <span>Disabled</span>
      )).toBeTruthy();
      expect(disabled.props().disabled).toEqual(true);
    });
  });

  describe('when a subtext prop is passed into the component', () => {
    it('does not render the subtext if the size prop is not "large"', () => {
      try {
        const wrapper = render({ children: 'foo', subtext: 'bar' }).dive();

        expect(wrapper.find('[data-element="subtext"]').exists()).toBe(false);
      } catch (error) {} // eslint-disable-line no-empty
    });

    it('renders the subtext if the size prop is "large"', () => {
      const wrapper = render({ children: 'foo', size: 'large', subtext: 'bar' }).dive();

      expect(wrapper.find('[data-element="subtext"]').exists()).toBe(true);
    });

    describe.each(['small', 'medium'])(
      'when the "subtext" prop is specified and the size prop is set to "%s"',
      (size) => {
        it('throws an error', () => {
          expect(() => {
            render({ children: 'foo', subtext: 'bar', size }).dive();
          }).toThrowError('subtext prop has no effect unless the button is large');
        });
      }
    );
  });

  describe('tags on component', () => {
    it('includes correct component, element and role data tags', () => {
      const wrapper = shallow(<Button data-element='bar' data-role='baz'>Test</Button>).dive();

      rootTagTest(wrapper, 'button', 'bar', 'baz');
    });
  });

  // Legacy functionalities
  describe('render', () => {
    describe('with href', () => {
      const wrapper = render({
        href: '/foo',
        children: 'Anchor'
      });

      it('renders an anchor element instead of a button', () => {
        expect(wrapper.find(StyledButton).props().as).toEqual('a');
      });
    });

    describe('with to', () => {
      const wrapper = render({
        to: '/foo',
        children: 'To'
      });

      it('renders a Button inside a Router Link component', () => {
        expect(wrapper.type()).toEqual(RouterLink);
      });
    });
  });

  describe('when the iconType is "services"', () => {
    it('applies the expected style to the icon', () => {
      const buttonWithServiceIcon = render(
        { children: 'foo', iconType: 'services', size: 'large' }, TestRenderer.create
      );
      assertStyleMatch({
        height: '6px'
      }, buttonWithServiceIcon.toJSON(), { modifier: `${StyledIcon}` });
    });
  });
});
