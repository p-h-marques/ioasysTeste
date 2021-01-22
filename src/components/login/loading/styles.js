import styled from 'styled-components'

export const LoadingStyles = styled.div`
	z-index: 9999;
	position: absolute;
	width: 100vw;
	height: 100vh;
	backdrop-filter: blur(1px);
    background-color: rgba(255, 255, 255, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;

    @keyframes imgLoading{
        from    {transform: rotate(0deg)}
        to      {transform: rotate(360deg)}
    }

    img{
        width: 132px;
        height: 132px;
        animation-name: imgLoading;
        animation-duration: 0.8s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

`