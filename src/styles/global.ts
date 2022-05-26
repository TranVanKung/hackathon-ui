import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: var(--text-font) !important;
    font-size: 60%;
    width: 100%;
    max-width: 100vw;
    margin: 0;
    padding: 0;
    
    @media only screen and (max-width: 1400px) {
      font-size: 60%;
    }

    @media only screen and (min-width: 1400px) {
      font-size: 62.5%;
    }
  }

  * {
    box-sizing: border-box;
  }

  /* thay đổi màu mặc định khi kéo chọn vùng chữ của trình duyệt */
  ::selection {
    background: var(--color-primary) !important;
  }

  ::-moz-selection { /* Code for Firefox */
    background: var(--color-primary) !important;
  }

  :root {
    --text-font: Montserrat, sans-serif;
    --text-font-secondary: "Open Sans", sans-serif;
    --color-text: #383c40;
    --color-text-secondary: #6E6B7B;
    --color-primary: rgba(79, 70, 229, 1);
    --color-primary-light: #867ae9;
    --color-text-white-light: rgb(242, 242, 230);
    --color-text-white: rgb(255, 255, 255);
    --color-secondary: #ff7600;
    --color-gray: #6e6b7b;
    --color-background: #f2f2f2;
    --color-dark: rgba(0, 0, 0, 0.05);
    --color-blue: #004FAAA6;
    --color-error: #FF6767;
    --background-success: rgba(127, 200, 169, 0.2);
    --background-error: rgba(255, 103, 103, 0.2);

    --color-background-white: rgb(255, 255, 255);
    --color-background-dark: rgba(48, 48, 48, 0.4);
    --color-background-gray: rgba(32, 32, 32, 0.8);
    --color-background-primary: rgba(133,122,233,0.15);
    --box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.05);
    --box-shadow-large: 0px 0px 20px rgba(0, 0, 0, 0.1);
    --border-radius: 0.6rem;
    --border-radius-1: 1rem;
    --padding: 1.5rem 2rem;
    --padding-taller: 2.5rem 2rem;
    --padding-wider: 1.5rem 3rem;
    --padding-small: 1.5rem 2rem;
    --padding-page: 2rem 3rem;
    --padding-page-small: 2rem 1.5rem;
    --margin-bottom: 1.5rem;
    --margin-bottom-small: 1rem;
    --margin-bottom-large: 2.5rem;
    --margin-right: 1.5rem;
    --margin-right-small: 1rem;
    --margin-left: 1.5rem;
    --margin-left-small: 1rem;
    --margin-top: 1.5rem;
    --margin-top-small: 1rem;
    --margin-top-large: 2rem;
  }

  .delete-button {
    background: var(--color-error) !important;
    color: white !important;

    &:hover {
      color: white;
    }
  }

  .custom-input {
    background-color: rgba(133, 122, 233, 0.15) !important;
    border-radius: 0.4rem !important;
    font-weight: 500 !important;
    border: 1px solid transparent !important;
    box-shadow: none !important;
    font-size: 1.5rem !important;

    @media only screen and (max-width: 834px) {
      font-size: 1.4rem;
    }

    @media only screen and (max-width: 550px) {
      font-size: 1.3rem;
    }

    input {
      font-weight: 500 !important;
      font-size: 1.5rem !important;
      background: transparent !important;

      @media only screen and (max-width: 834px) {
        font-size: 1.4rem;
      }

      @media only screen and (max-width: 550px) {
        font-size: 1.3rem;
      }
    }

    &:hover, &:focus {
      border: 1px solid var(--color-primary) !important;
    }

    &[disabled] {
      color: var(--color-text-secondary) !important;
    }
  }

  .custom-form-item {
    margin-bottom: var(--margin-bottom);
  }

  .custom-input-number {
    width: 100% !important;
    background-color: rgba(133, 122, 233, 0.15) !important;
    border-radius: 0.4rem !important;
    border: 1px solid transparent !important;
    box-shadow: none !important;
    font-size: 1.5rem !important;

    @media only screen and (max-width: 834px) {
      font-size: 1.4rem;
    }

    @media only screen and (max-width: 550px) {
      font-size: 1.3rem;
    }

    &:hover, &:focus {
      border: 1px solid var(--color-primary) !important;
    }

    &.ant-input-number-disabled {
      background: var(--color-background-gray) !important;

      &:hover, &:focus {
        border: 1px solid transparent!important;
      }
    }
  }

  .custom-date-picker {
    background-color: rgba(133, 122, 233, 0.15) !important;
    border-radius: 0.4rem !important;
    outline: none !important;
    border: 1px solid transparent !important;
    
    
    .ant-picker-input * {
      font-size: 1.3rem !important;

      @media only screen and (max-width: 834px) {
        font-size: 1.2rem;
      }

      @media only screen and (max-width: 550px) {
        font-size: 1.2rem;
      }
    }
  }

  .custom-select {
    width: 100%;
    font-size: 1.5rem;
    border: 1px solid transparent;

    @media only screen and (max-width: 834px) {
      font-size: 1.4rem;
    }

    @media only screen and (max-width: 550px) {
      font-size: 1.3rem;
    }
    
    .ant-select-selector {
      border: 1px solid transparent !important;
      outline: none !important;
      border-radius: 0.4rem !important;
      box-shadow: none !important;
      background-color: rgba(133, 122, 233, 0.15) !important;
    }

    &.ant-select-disabled {
      background: var(--color-background-gray) !important;
      border-radius: 0.4rem !important;

      .ant-select-selector {
        background: transparent !important;
      }
    }
  }
`;

export { GlobalStyle };
