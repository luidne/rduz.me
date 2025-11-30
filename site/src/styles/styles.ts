import { createGlobalStyle } from "styled-components";

export const Styles = createGlobalStyle`

    :root {
        --bg-primary: #ffffff;
        --bg-secondary: #f1f2f3;
        --text-primary: #18216d;
        --text-secondary: #2e186a;
        --border-color: #6b6bff;
        --shadow-color: rgba(46, 24, 106, 0.1);
    }

    [data-theme='dark'] {
        --bg-primary: #000000;
        --bg-secondary: #2d2d2d;
        --text-primary: #e0e0e0;
        --text-secondary: #b8b8ff;
        --border-color: #f1f2f3;
        --shadow-color: rgba(107, 107, 255, 0.2);
    }

    body,
    html,
    a {
        font-family: 'JetBrains Mono', monospace;
        font-weight: 400;
    }


    body {
        margin:0;
        padding:0;
        border: 0;
        outline: 0;
        background: var(--bg-primary);
        color: var(--text-primary);
        overflow-x: hidden;
        transition: background-color 0.3s ease, color 0.3s ease;
    }

    a:hover {
        color: var(--text-primary);
    }

    input,
    textarea {
        border-radius: 4px;
        border: 0;
        background: var(--bg-secondary);
        color: var(--text-primary);
        transition: all 0.3s ease-in-out;  
        outline: none;
        width: 100%;  
        padding: 1rem 1.25rem;

        :focus-within {
            background: var(--bg-primary);
            box-shadow: var(--border-color) 0px 0px 0px 1px;
        }
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        font-family: 'JetBrains Mono', monospace;
        font-weight: 700;
        color: var(--text-primary);
        line-height: 1.18;
    }

    h1 {
        font-size: 56px;
        font-weight: 600;

        @media only screen and (max-width: 890px) {
          font-size: 47px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 32px;
        }
    }

    h2 {
        font-size: 48px;
        letter-spacing: -3px;

        @media only screen and (max-width: 890px) {
          font-size: 40px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 28px;
        }
    }

    h3 {
        font-size: 40px;
        letter-spacing: -3px;

        @media only screen and (max-width: 890px) {
          font-size: 34px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 24px;
        }
    }

    h4 {
        font-size: 32px;
        letter-spacing: -3px;

        @media only screen and (max-width: 890px) {
          font-size: 28px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 22px;
        }
    }

    h5 {
        font-size: 24px;

        @media only screen and (max-width: 890px) {
          font-size: 22px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 20px;
        }
    }

    h6 {
        font-size: 20px;

        @media only screen and (max-width: 890px) {
          font-size: 18px;
        }
      
        @media only screen and (max-width: 414px) {
          font-size: 16px;
        }
    }

    p {
        color: var(--text-primary);
        font-size: 21px;        
        line-height: 1.41;
    }

    a {
        text-decoration: none;
        outline: none;
        color: var(--text-secondary);

        :hover {
            color: var(--text-secondary);
        }
    }
    
    *:focus {
        outline: none;
    }

    .about-block-image svg {
        text-align: center;
    }

    .ant-drawer-body {
        display: flex;
        flex-direction: column;
        text-align: left;
        padding-top: 1.5rem;
        background: var(--bg-primary);
        color: var(--text-primary);
    }

    .ant-drawer-content-wrapper {
        width: 300px !important;
    }

    .ant-drawer-content {
        background: var(--bg-primary);
        color: var(--text-primary);
    }

    .ant-drawer-mask {
        background: rgba(0, 0, 0, 0.45);
    }
`;
