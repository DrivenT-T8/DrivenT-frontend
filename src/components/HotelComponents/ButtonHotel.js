import styled from 'styled-components';

export const ButtonHotel = styled.button`
  background: ${(props) => (props.isColorButtonSelected ? '#FFEED2' : '#EBEBEB')};

  border: none;
  border-radius: 10px;

  padding: 16px 14px;

  display: flex;
  flex-direction: column;
  gap: 12px;

  height: 264px;
  width: 196px;

  font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
  font-weight: 400;
  color: #343434;

  cursor: pointer;

  > img {
    border-radius: 5px;

    height: 109px;
    width: 168px;
  }

  > h3 {
    font-size: 20px;
  }

  span {
    font-size: 12px;
    color: #3c3c3c;

    text-align: left;
  }

  span p:first-of-type {
    font-weight: bold;
  }
`;
