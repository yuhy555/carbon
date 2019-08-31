import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import BaseTheme from '../../../style/themes/base';
import OptionsHelper from '../../../utils/helpers/options-helper';

const StyledCardContent = styled.div`
  width: 100%;
  ${({
    align, position, contentStyle, theme
  }) => css`
    text-align: ${align};

    ${position === 'header' && css`
      ${contentStyle === 'primary' && css`
        font-size: 22px;
        font-weight: 700;
        line-height: 26px;
        margin: 0;
      `}
      ${contentStyle === 'secondary' && css`
        font-size: 14px;
        font-weight: 400;
        line-height: 21px;
        margin: 0;
      `}
    `}

    ${position === 'middle' && css`
      ${contentStyle === 'primary' && css`
        color: ${theme.card.middlePrimary};
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 10px;
      `}
      ${contentStyle === 'secondary' && css`
        color: ${theme.card.middleSecondary};
        font-size: 14px;
        font-weight: 700;
        margin-bottom: 8px;
      `}
      ${contentStyle === 'tertiary' && css`
        color: ${theme.card.middleTertiary};
        font-size: 12px;
        text-transform: uppercase;
      `}
    `}

    ${position === 'footer' && css`
      line-height: 30px;
      margin: 0;
      color: ${theme.card.footerText};
      font-weight: 600;
      padding: 12px 0;
    `}
  `}
`;

StyledCardContent.propTypes = {
  align: PropTypes.oneOf(OptionsHelper.alignFull),
  /** applies styling based on the content's row position */
  position: PropTypes.oneOf(OptionsHelper.cardSection),
  /** add text styling based on type */
  contentStyle: PropTypes.oneOf(OptionsHelper.cardTextTypes),
  /** children of the content component */
  theme: PropTypes.object
};

StyledCardContent.defaultProps = {
  align: 'center',
  theme: BaseTheme
};

export default StyledCardContent;