import styled from "styled-components";

export const Style = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  margin: 0;
  padding: 0 30px 0 30px;
  z-index: 99;
  width: 250px;
  border-bottom: 1px solid #c4c4c4;
  align-items: center;
  display: flex;
  flex-direction: column;
  background-color: #56b6f7;
  border: 0px solid #dae1e7;
  box-shadow: 2px 1px 5px 0px rgba(0, 0, 0, 0.2);
  /* background-color: #768ef0; */
  .user {
    background-color: #fff;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  li {
    list-style: none;
  }
  .logout {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 10px 40px 10px 40px;
    background-color: #000;
    color: #f2f7ff;
    border: 0;
    border-radius: 25px;
    :hover {
      box-shadow: 3px 4px 5px 0px rgba(0, 0, 0, 0.5);
    }
  }
  .logout-container {
    position: fixed;
    bottom: 10px;
  }
  .link-custom {
    color: #a0a4ad;
    text-decoration: none;
  }
`;
