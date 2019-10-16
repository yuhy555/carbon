import React from 'react';
import PropTypes from 'prop-types';
import { withTheme } from 'styled-components';
import classicTheme from '../../../style/themes/classic';
import Icon from '../../../components/icon';
import Loader from '../../../components/loader/loader.component';
import StyledSwitchSlider from './switch-slider.style';
import SwitchSliderPanel from './switch-slider-panel.style';
import { isClassic } from '../../../utils/helpers/style-helper';

const SwitchSlider = (props) => {
  const {
    theme, checked, loading
  } = props;
  const on = isClassic(theme) ? <Icon type='tick' bgTheme='none' /> : 'ON';
  const off = isClassic(theme) ? <Icon type='cross' bgTheme='none' /> : 'OFF';
  const panelContent = checked ? on : off;

  const loaderProps = {
    isInsideButton: true,
    isActive: props.checked,
    ...props
  };

  const sliderContent = (
    <SwitchSliderPanel type={ checked ? 'on' : 'off' } { ...props }>
      {loading ? <Loader { ...loaderProps } /> : panelContent}
    </SwitchSliderPanel>
  );

  return (
    <StyledSwitchSlider { ...props }>
      {sliderContent}
    </StyledSwitchSlider>
  );
};

SwitchSlider.propTypes = {
  checked: PropTypes.bool,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  theme: PropTypes.object
};

SwitchSlider.defaultProps = {
  theme: classicTheme
};

export default withTheme(SwitchSlider);
