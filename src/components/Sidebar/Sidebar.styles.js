import styled from "@emotion/styled";

export const SidebarContainer = styled.div`
  width: ${(p) => (p.isSidebarOpen ? "20%" : "5%")};
  max-width: 250px;
  min-width: 80px;
  background-image: linear-gradient(
      315deg,
      rgba(179, 246, 216, 0.8) 0%,
      rgba(82, 167, 193, 0.8) 74%
    ),
    url(${(p) => p.backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  color: rgba(255, 255, 255);
  position: relative;
  transition: 0.2s ease-in all;
`;

export const SidebarHeader = styled.h3`
  padding: 25px 0;
  text-align: center;
  letter-spacing: 6px;
  font-family: ${(p) => p.font};
`;

export const MenuItemContainer = styled.div``;

// Menu items -------------------------------------------------------------
export const MenuItem = styled.div`
  ${(p) =>
    !p.isSidebarOpen &&
    `
    text-align: center;
    ${p.selected && "background-color: rgba(0, 0, 0, 0.6)"};
  `};
  padding: 5px 20px;
  font-weight: 600;
  color: ${(p) => (p.selected ? "rgba(255, 255, 255)" : "rgba(19, 15, 64)")};
  font-family: ${(p) => p.font};
  white-space: nowrap;
  position: relative;
  transition: 0.2s ease-in all;

  :hover {
    color: rgba(255, 255, 255);
    transition: 0.1s ease-in all;
  }

  ::after {
    content: "";
    border: 1px solid
      ${(p) => (p.selected ? "rgba(255, 255, 255)" : "rgba(225, 112, 85)")};
    display: ${(p) =>
      p.isSidebarOpen && p.selected && p.isOpen ? "none" : "block"};
    margin: 8px 0px 4px;
    transition: 0.1s ease-in all;
  }

  ${(p) =>
    !p.selected &&
    `
    :hover {
      &:after {
        border: 1px solid #ebbba7;
        transition: .1s ease-in all;
      }
    }
  `}
`;

export const Text = styled.p`
  display: ${(p) => (p.isSidebarOpen ? "inline" : "none")};
`;

export const Icon = styled.img`
  ${(p) =>
    p.isSidebarOpen &&
    `padding-right: 20px; transition: 0.2s ease-in padding-right`};
  height: 16px;
  width: 16px;
  color: #fff;
`;

// Toggler -----------------------------------------------------------------------------
export const TogglerContainer = styled.div`
  position: absolute;
  width: 30%;
  bottom: 2.5%;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export const Toggler = styled.div`
  height: 40px;
  cursor: pointer;
  position: relative;

  ::after {
    content: "";
    position: absolute;
    left: 0;
    top: 0.25em;
    height: 0.1em;
    width: 100%;
    background: #fff;
    box-shadow: 0 0.75em 0 0 #fff, 0 1.5em 0 0 #fff;
  }
`;
