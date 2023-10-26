import React from 'react';
import {SliderThumb} from '@mui/material/Slider';

interface AirbnbThumbComponentProps extends React.HTMLAttributes<unknown> {
}

export function Fast24ThumbComponent(props: AirbnbThumbComponentProps) {
    const {children, ...other} = props;
    return (
        <SliderThumb {...other}>
            {children}
            <span className="airbnb-bar"/>
            <span className="airbnb-bar"/>
            <span className="airbnb-bar"/>
        </SliderThumb>
    );
}