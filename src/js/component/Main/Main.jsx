import React, { Component } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

const Fade = ({ children, ...props }) => (
  <CSSTransition
    {...props}
    timeout={500}
    classNames="fade" >
    {children}
  </CSSTransition>
);
Fade.propTypes = {
  children: PropTypes.node.isRequired,
};

const StyledMain = styled.div`
  background-color:green;
`;
const StyledLi = styled(Fade)`
  border: 1px solid black;
  font-size: 34px;
`;


export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [0, 1, 2, 3, 4, 5],
    };
    this.clickHandler = this.clickHandler.bind(this);
  }
  componentDidMount() {
  }
  componentWillUnmount() {
  }
  clickHandler() {
    const { list } = this.state;
    list.push(list.length);
    this.setState({ list });
  }
  render() {
    const { list } = this.state;
    return (
      <StyledMain>
        <TransitionGroup component="ul">
          {
            list.map(number => (
              <StyledLi key={number.toString()}>
                <li>{number}</li>
              </StyledLi>
            ))
          }
        </TransitionGroup>
        <button onClick={this.clickHandler}>Click</button>
      </StyledMain>
    );
  }
}
