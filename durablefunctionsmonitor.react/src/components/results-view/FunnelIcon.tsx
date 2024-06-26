// Copyright (c) Microsoft Corporation.
// Licensed under the MIT license.

import * as React from 'react';

import { SvgIcon } from '@mui/material';

export class FunnelIcon extends React.Component {

    render(): JSX.Element {
        return (
            <SvgIcon style={{ width: 18, height: 18 }}>
                <g><path d="M0,0h24 M24,24H0" fill="none" /><path d="M7,6h10l-5.01,6.3L7,6z M4.25,5.61C6.27,8.2,10,13,10,13v6c0,0.55,0.45,1,1,1h2c0.55,0,1-0.45,1-1v-6 c0,0,3.72-4.8,5.74-7.39C20.25,4.95,19.78,4,18.95,4H5.04C4.21,4,3.74,4.95,4.25,5.61z" /><path d="M0,0h24v24H0V0z" fill="none" /></g>
            </SvgIcon>
        );
    }
}