// @flow
import React, { Component } from 'react';
import cx from 'classnames';
import './style.scss';

type P = {
  top?: number,
};

type S = {
  active: boolean,
};

const docked = (...WrappedComponents: [ReactClass<*>]) => {
  class DockedComponent extends Component {
    state: S;
    dockedNode: HTMLElement;
    handleScroll: () => void;
    static defaultProps = {
      top: 0
    };

    constructor(props: P) {
      super(props);
      this.state = {
        active: false,
      };
      this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
      document && document.addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
      document && document.removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
      if (window.scrollY > this.props.top) {
        this.setState({ active: true });
      } else {
        this.setState({ active: false });
      }
    }

    render() {
      return (
        <div
          className={cx(
            'react-scroll-docked',
            this.state.active
              ? 'react-scroll-docked--active'
              : 'react-scroll-docked--inactive'
          )}
          ref={r => {
            this.dockedNode = r;
          }}
        >
          {WrappedComponents &&
            WrappedComponents.map((WrappedComponent, index) => (
              <WrappedComponent key={index} {...this.props} />
            ))}
        </div>
      );
    }
  }
  return DockedComponent;
};

export default docked;
