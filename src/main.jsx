import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { BrowserRouter } from 'react-router-dom';
import { UserProvider } from './components/UserContext.jsx';
import { TopicProvider } from './components/TopicContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
	<BrowserRouter>
		<TopicProvider>
			<UserProvider>
				<App />
			</UserProvider>
		</TopicProvider>
	</BrowserRouter>
);
