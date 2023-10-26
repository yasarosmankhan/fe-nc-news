import { createContext, useState } from 'react';
import React from 'react';

export const TopicContext = createContext();

export const TopicProvider = ({ children }) => {
	const [selectedTopic, setSelectedTopic] = useState(null);

	return (
		<TopicContext.Provider value={{ selectedTopic, setSelectedTopic }}>
			{children}
		</TopicContext.Provider>
	);
};
