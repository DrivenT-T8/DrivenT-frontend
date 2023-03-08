import styled from 'styled-components';
import React from 'react';
import Cards from 'react-credit-cards';
import 'react-credit-cards/es/styles-compiled.css';

export default class PaymentForm extends React.Component {
  state = {
    issuer: '',
    cvc: '',
    expiry: '',
    focus: '',
    name: '',
    number: '',
  };
  
  handleInputFocus = (e) => {
    this.setState({ focus: e.target.name });
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ ...this.state, [name]: value });
    this.props.setData({ ...this.state, [name]: value });
  };

  render() {
    return (
      <PaymentContainer>
        <CardArea id="PaymentForm">
          <CardContainer>
            <Cards
              cvc={this.state.cvc}
              expiry={this.state.expiry}
              focused={this.state.focus}
              name={this.state.name}
              number={this.state.number}
              callback={this.handleCallback}
            />
          </CardContainer>
          <Forms>
            <input type="hidden" name="issuer" value={this.issuer} />
            <Number
              maxLength={16}
              minLength={16}
              name="number"
              placeholder="Card Number"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />

            <Exemple>E.g.:49..., 51...,36...,37...</Exemple>

            <Name
              type="tel"
              name="name"
              placeholder="Name"
              onChange={this.handleInputChange}
              onFocus={this.handleInputFocus}
            />
            <InfoBottoms>
              <Expiry
                maxLength={4}
                type="tel"
                name="expiry"
                placeholder="Valaid Trhu"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />

              <Cvc
                maxLength={3}
                typeof="number"
                name="cvc"
                placeholder="CVC"
                onChange={this.handleInputChange}
                onFocus={this.handleInputFocus}
              />
            </InfoBottoms>
          </Forms>
        </CardArea>
      </PaymentContainer>
    );
  }
}

const PaymentContainer = styled.div`
  //background-color: bisque;

  > span {
    color: #8e8e8e;
    font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
    font-weight: 400;
    font-size: 20px;
  }
`;

const CardContainer = styled.div``;

const CardArea = styled.div`
  display: flex;
  align-items: center;
`;

const Forms = styled.form`
  margin-top: 10px;
  height: 190px;
  margin-left: 30px;
  display: flex;
  flex-direction: column;
`;

const Exemple = styled.h3`
  color: gray;
  opacity: 0.7;
  margin-bottom: 13px;
`;

const Number = styled.input`
  height: 45px;
  width: 360px;
  border-radius: 5px;
  margin-bottom: 5px;
  border: 1px solid gray;
  padding-left: 10px;
  font-size: 19px;
  font-weight: 400;
  color: gray;

  ::placeholder {
    display: flex;
    color: grey;
    padding-left: 5px;
    font-size: 19px;
    font-weight: 400;
    opacity: 0.7;
  }
`;

const Name = styled.input`
  height: 45px;
  width: 360px;
  border-radius: 5px;
  border-radius: 5px;
  margin-bottom: 13px;
  border: 1px solid gray;
  padding-left: 10px;
  font-size: 19px;
  font-weight: 400;
  color: gray;

  ::placeholder {
    color: grey;
    padding-left: 5px;
    font-size: 19px;
    font-weight: 400;
    opacity: 0.7;
    padding-top: 5px;
  }
`;

const Expiry = styled.input`
  height: 45px;
  width: 220px;
  border-radius: 5px;
  border-radius: 5px;
  border: 1px solid gray;
  padding-left: 10px;
  font-size: 19px;
  font-weight: 400;
  color: gray;

  ::placeholder {
    color: grey;
    padding-left: 5px;
    font-size: 19px;
    font-weight: 400;
    opacity: 0.7;
    padding-top: 5px;
  }
`;

const Cvc = styled.input`
  height: 45px;
  width: 120px;
  border-radius: 5px;
  border-radius: 5px;
  border: 1px solid gray;
  padding-left: 10px;
  font-size: 19px;
  font-weight: 400;
  color: gray;

  ::placeholder {
    color: grey;
    padding-left: 5px;
    font-size: 19px;
    font-weight: 400;
    opacity: 0.7;
    padding-top: 5px;
  }
`;

const InfoBottoms = styled.div`
  height: 45px;
  width: 360px;
  display: flex;
  justify-content: space-between;
  border-radius: 5;
`;
