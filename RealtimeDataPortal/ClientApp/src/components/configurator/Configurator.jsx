import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";

import { useRequest } from "../../hooks/useRequest";
import AppPreloader from "../loader/appPreloader";
import ErrorsPage from '../errors-page/ErrorsPage';
import { AddChangeFolder } from '.';



const Configurator = () => {
    const { id, operation } = useParams();
    const { request, proccess, setProccess, error } = useRequest();
    const [componentInfo, setComponentInfo] = useState({});

    function form(componentInfo) {
        switch (operation) {
            case 'add-folder':
                return <AddChangeFolder componentInfo={componentInfo} type="add" />;
            case 'change-folder':
                return <AddChangeFolder componentInfo={componentInfo} type="change" />;
            default:
                return null;
        }
    }

    useEffect(() => {
        request(`GetComponentInformation?id=${id}`)
            .then(componentInfo => {
                setComponentInfo(componentInfo);
                setProccess('confirmed');
            })
        //eslint-disable-next-line
    }, [id, operation])

    switch (proccess) {
        case 'loading':
            return <AppPreloader height />;
        case 'confirmed':
            return form(componentInfo);
        case 'error':
            return <ErrorsPage {...error} />;
        default:
            return null;
    }
}

export default Configurator;