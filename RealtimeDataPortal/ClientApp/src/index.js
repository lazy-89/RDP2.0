import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { MantineProvider } from "@mantine/core";

import 'bootstrap/dist/css/bootstrap.css';
import "./index.sass"

import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';
import { NotificationsProvider } from '@mantine/notifications';
import { ModalsProvider } from '@mantine/modals';

const baseUrl = document.getElementsByTagName('base')[0].getAttribute('href');
const rootElement = document.getElementById('root');

ReactDOM.render(
	<MantineProvider theme={{
		fontFamily: 'Roboto'
	}}>
		<NotificationsProvider>
			<ModalsProvider>
				<BrowserRouter basename={baseUrl}>
					<StrictMode>
						<App />
					</StrictMode>
				</BrowserRouter>
			</ModalsProvider>
		</NotificationsProvider>
	</MantineProvider>,
	rootElement);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://cra.link/PWA
serviceWorkerRegistration.unregister();

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
