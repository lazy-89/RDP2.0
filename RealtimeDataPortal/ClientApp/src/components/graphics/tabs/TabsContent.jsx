import { useState } from 'react';
import { HeaderGraphics, Graphic, Settings, TabsHeader } from "../Index";

import './tabs.sass';

const TabContent = ({ attributesGraphic, tabName, activeTab, index, tabsNames, setActiveTab, isScale, setIsScale, isVisibleTable, setIsVisibleTable }) => {
    const [date, setDate] = useState({
        start: null,
        end: null
    });

    const parameter = attributesGraphic.filter(item => item.typeName === tabName);

    const graphic = parameter.map(item =>
        <Graphic key={item.tagId} attributes={item} index={index} date={date} isScale={isScale} isVisibleTable={isVisibleTable}/>);

    return (
        <div className={`tab-content ${activeTab === index ? 'tab-content_visible' : null}`}>
            <div className='tab-content__header'>
                <HeaderGraphics name={attributesGraphic[0]?.name} />

                <Settings calendar={parameter[0].calendar} setDate={setDate} isScale={isScale} setIsScale={setIsScale}
                    isVisibleTable={isVisibleTable} setIsVisibleTable={setIsVisibleTable} />
            </div>
            <TabsHeader tabsNames={tabsNames} activeTab={activeTab} setActiveTab={setActiveTab} />
            {graphic}
        </div>
    );
}

export default TabContent;