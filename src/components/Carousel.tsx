import React from 'react'
import { useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import styled from "styled-components";
import { SelectorButton } from './CarouselSelectorButton';


interface props {
    slides: React.FC[];
    interval?: number;
}

const CarouselContainer = styled.div`
width: 100%;
height: 100%;
z-index: 14;
position: relative;
`

const SlideContainer = styled.div`
width: 100%;
height: 100%;
`

const SelectorButtonContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
width: 5%;
position: absolute;
bottom: 0;
left: 47.5%;
`

export const Carousel: React.FC<props> = ({ slides, interval = 1000000}) => {
    const [current, setCurrent] = React.useState(0);
    const length = slides.length;

    const nextSlide = (): void => {
        setCurrent(current === length - 1 ? 0 : current + 1);
    }

    const prevSlide = (): void => {
        setCurrent(current === 0 ? length -1 : current - 1);
    }

    const handlers = useSwipeable({
        onSwipedLeft(e) {   
            nextSlide();
        },
        onSwipedRight(e) {
            prevSlide();
        },
        trackMouse: true,
        trackTouch: true,
        delta: 10
    });

    useEffect(() => {
        const id = setInterval(() => {
            nextSlide()
        }, interval)
        return () => clearInterval(id);
    })

    return (
        <CarouselContainer {...handlers}>
            <SlideContainer>
                {
                    slides.map((Slide, id) => {
                        if (id === current){
                            return <Slide key={id}/>
                        }
                        return ''
                    })
                }
            </SlideContainer>
            <SelectorButtonContainer>
                { 
                    slides.map((Slide, index) => {
                        return <SelectorButton
                        value={index}
                        selected={index === current}
                        onClick={(e) => setCurrent(e)}
                        key={index}
                    /> 
                    })
                }
            </SelectorButtonContainer>
        </CarouselContainer>
    )
}