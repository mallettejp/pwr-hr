import React from 'react';
import Container from '@material-ui/core/Container';
import styled from 'styled-components';

const StyledContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  height: 100vh;
  overflow: hidden;
  @supports (height: var(--)) {
    height: var(--viewport-height);
  }
`;

const Layout = ({ children }) => {
  /* Fix the 100vh "bug" in iOS Safari */
  const updateViewportHeight = () => {
    // Set --viewport-height variable to current window height
    document.documentElement.style.setProperty(
      '--viewport-height',
      `${window.innerHeight}px`
    );
  };

  React.useEffect(() => {
    window.addEventListener('resize', updateViewportHeight);
    // Must run once initially
    updateViewportHeight();
    return () => {
      window.removeEventListener('resize', updateViewportHeight);
    };
  }, []);

  return <StyledContainer maxWidth="xl">{children}</StyledContainer>;
};

export default Layout;
