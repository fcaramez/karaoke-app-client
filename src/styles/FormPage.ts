import styled from "styled-components";

const FormPage: any = styled.div`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto";
    width: 390px;
    min-height: 100vh;
    text-align: center;
    display: flex;
    flex-flow: column wrap;
    align-items: center;
    justify-content: center;
  }

  .list {
    align-items: center;
    justify-content: center;
  }

  h1 {
    font-size: 2rem;
    font-weight: 1000;
    line-height: 3rem;
    font-family: "Roboto";
  }

  a {
    text-align: center;
  }
  .Auth-form-container {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
  }

  .Auth-form {
    width: 420px;
    box-shadow: rgb(0 0 0 / 16%) 1px 1px 10px;
    padding-top: 30px;
    padding-bottom: 20px;
    border-radius: 8px;
    background-color: white;
  }

  .Auth-form-content {
    padding-left: 10vw;
    padding-right: 10vw;
  }

  .Auth-form-title {
    text-align: center;
    margin-bottom: 1em;
    font-size: 24px;
    color: rgb(34, 34, 34);
    font-weight: 800;
  }

  label {
    font-size: 14px;
    font-weight: 600;
    color: black;
  }
`;

export default FormPage;
