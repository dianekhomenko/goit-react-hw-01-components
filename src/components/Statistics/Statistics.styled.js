import styled from 'styled-components';

export const Stat = styled.li`
  ${props => {
    switch (props.$type) {
      case '.docx':
        return `
          background-color: #4FC5F6;
        `;
      case '.pdf':
        return `
          background-color: #A53BF5;
        `;
      case '.mp3':
        return `
          background-color: #E34D67;
        `;
      case '.psd':
        return `
          background-color: #21B7C5;
        `;
      default:
        return `
        background-color: #4CC521;
        `;
    }
  }}
`;
