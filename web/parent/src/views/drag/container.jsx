import React, { memo } from 'react';
import { SourceBox } from './SourceBox';
import CardItem from './cardItem'
import { StatefulTargetBox as TargetBox } from './TargetBox';
import { Colors } from './Colors';
export const Container = memo(function Container() {
    return (<>
        <div style={{ overflow: 'hidden', clear: 'both', margin: '-.5rem' }}>
            <div style={{ float: 'left' }}>
                <SourceBox color={Colors.BLUE}>
                    <CardItem title="卡片一" content="测试一"></CardItem>
                    <CardItem title="卡片二" content="测试二"></CardItem>
                </SourceBox>
            </div>

            <div style={{ float: 'left', marginLeft: '5rem', marginTop: '.5rem' }}>
                <TargetBox />
            </div>
        </div>
    </>);
});
