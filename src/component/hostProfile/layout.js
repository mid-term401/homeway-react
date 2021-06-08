import React from "react";
import styled from "styled-components";

const AppContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 100px;
`;

const Layout = ({ children }) => {
  return <AppContent>{children}</AppContent>;
};

export default Layout;
