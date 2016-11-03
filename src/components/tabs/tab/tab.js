import React from 'react';

/**
 * A Tab widget.
 *
 * == How to use a Tab Widget in a component:
 *  See Tabs component
 *
 * @class Tab
 * @constructor
 */
class Tab extends React.Component {

  static propTypes = {
    /**
     * Visible title in tabs header
     * Consumed within tabs component
     *
     * @property title
     * @type {String}
     *
     */
    title: React.PropTypes.string.isRequired,

    /**
     * id to identify the tab within the component
     * used when validating and switching tabs
     *
     * @property tabId
     * @type {String}
     */
    tabId: React.PropTypes.string.isRequired
  }

  static contextTypes = {

    /**
     * Defines what contexts are available to this tab componenet
     * https://facebook.github.io/react/docs/context.html
     *
     * @property tabs
     * @type {Object}
     */
    tabs: React.PropTypes.object
  }

  static childContextTypes = {

    /**
     * Defines a context object for context children of this tab component.
     * https://facebook.github.io/react/docs/context.html
     *
     * @property tab
     * @type {Object}
     */
    tab: React.PropTypes.object
  }

  /**
   * Returns tab object to context children.
   *
   * @method getChildContext
   */
  getChildContext() {
    return {
      tab: {
        setValidity: this.setValidity,
        setWarning: this.setWarning
      }
    };
  }

  state = {

    /**
     * Tracks if the tab is a valid state
     *
     * @property isValid
     * @type {Boolean}
     */
    isValid: true,

    /**
     * Tracks if the tab is a warning state
     *
     * @property isWarning
     * @type {Boolean}
     */
    isWarning: false
  }

  /**
   * Sets valid state to passed param
   * It notifies the parent context of the change
   * and sets the current valid state to the new value
   *
   * @method setValidity
   * @param {Boolean} valid updates validity of this tab
   */
  setValidity = (valid) => {
    this.context.tabs.changeValidity(this.props.tabId, valid);
    this.setState({ isValid: valid });
  }

  /**
   * Sets warning state to passed param
   * It notifies the parent context of the change
   * and sets the current warning state to the new value
   *
   * @method setWarning
   * @param {Boolean} warning updates warning of this tab
   */
  setWarning = (warning) => {
    this.context.tabs.changeWarning(this.props.tabId, warning);
    this.setState({ isWarning: warning });
  }

  /**
   * Classes to be applied to the single tab component
   *
   * @method mainClasses Main Class getter
   */
  get mainClasses() {
    let classes = this.props.className || '';

    if (!this.state.isValid) {
      classes += ' carbon-tab--errors';
    }

    if (!this.state.isWarning) {
      classes += ' carbon-tab--warnings';
    }

    return 'carbon-tab ' + classes;
  }

  /**
   * Renders the component.
   *
   * @method render
   */
  render() {
    return(
      <div className={ this.mainClasses }>
        { this.props.children }
      </div>
    );
  }
}

export default Tab;
