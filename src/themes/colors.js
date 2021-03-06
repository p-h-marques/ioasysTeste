const colors = {
    white:           '#d8d8d8',
    whiteTwo:        '#ffffff',
    darkIndigo:      '#1a0e49',
    warmGrey:        '#8d8c8c',
    charcoalGreyTwo: '#403e4d',
    greyish:         '#b5b4b4',
    mediumPink:      '#ee4c77',
    charcoalGrey:    '#383743',
    black54:         'rgba(0, 0, 0, 0.54)',
    nightBlue:       '#0d0430',
    background:      '#eeecdb',
    blue:            '#57bbbc',
    danger:          '#ff0f44',
    claret:          '#991237'
}

const gradients = {
    pink: 'linear-gradient(90deg, #e44974, #bd3c67)'
}

const texts = {
    style11: `
        font-size: 1.6rem;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: -1.2px;
        text-align: center;
        color: ${colors.charcoalGrey};
    `,
    style6: `
        font-size: 1.875rem;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: ${colors.darkIndigo};
    `,
    style7: `
        font-size: 1.5rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: ${colors.warmGrey};
    `,
    style8: `
        font-size: 1.125rem;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: ${colors.warmGrey};
    `
}

export {colors, gradients, texts}