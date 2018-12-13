import posed from 'react-pose';

export const Input = posed.input({
    focusable: true,
    init: {
        width: '150px'
    },
    focus: {
        width: '300px'
    }
});

