import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  display: flex;
  justify-content: center;  
  font-size: 3rem;
  font-weight: bold;  
`;

const Header = () => {
    return (        
        <StyledHeader data-testid="product-page-heading">
            Jungle river - Products
        </StyledHeader>           
    );
}

export default Header;
