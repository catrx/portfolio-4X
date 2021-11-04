import React, { memo } from 'react';

import { useTheme } from 'react-jss';
import { getHexFromPaletteColor } from '../../utils/styles/styles_utils';


const FooterComponent = () => {
    const theme = useTheme();
    const mainColor = getHexFromPaletteColor(theme, 'dark');

    return (
        <div className={'w-full pb-20 px-7 mt-20 flex flex-col justify-center md:flex-row text-white'} style={{backgroundColor: mainColor}}>

        </div>
    );
};

export const Footer = memo(FooterComponent);
