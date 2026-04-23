// styles.js
export const styles = `
    body {
        margin: 0;
        padding: 0;
        background-color: #000;
        overflow: hidden;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
    }

    #gameCanvas {
        border: 4px solid #ffffff33;
        box-shadow: 0 0 20px rgba(0,0,0,0.5);
        background: linear-gradient(to bottom, #001f3f, #0074D9);
    }

    #ui {
        position: absolute;
        top: 10%;
        font-family: 'Courier New', Courier, monospace;
        color: #fff;
        font-size: 2rem;
        text-shadow: 2px 2px #000;
        pointer-events: none;
    }
`;
