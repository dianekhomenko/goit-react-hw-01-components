import styled from 'styled-components';

export const Status = styled.span`
  color: ${p => {
    return p.online ? 'green' : 'red';
  }};
`;