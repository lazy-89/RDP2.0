import { useState, useCallback } from 'react';

export const useRequest = () => {
    const [proccess, setProccess] = useState('loading');
    const [error, setError] = useState({
        statusCode: 204,
        statusText: 'No Content',
        message: 'Нет данных'
    });

    const request = useCallback(
        async (controllerMethod, method = 'GET', body = null, headers = { 'Content-Type': 'application/json' }) => {

            // Так как приложении при публикации кладется в папку, а не в корень
            const url = window.location.href.includes("localhost") ?
                `rdp/${controllerMethod}` :
                `${window.location.origin}/RealtimeDataPortal/rdp/${controllerMethod}`;

            try {
                const response = await fetch(url, { method, body, headers });
                const data = await response.json();

                if (!response.ok) {
                    setError({
                        statusCode: response.status,
                        statusText: response.statusText,
                        message: data.message
                    })
                    throw new Error();
                }

                return data;
            } catch {
                setProccess('error');
                return {};
            }
        }, []);

    return { proccess, setProccess, error, request };
}