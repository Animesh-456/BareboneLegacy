// src/GroupChat.js
import React from 'react';

const messages = [
    { id: 1, text: 'Hello!', user: 'User A' },
    { id: 2, text: 'Hey there!', user: 'User B' },
    { id: 3, text: 'How are you?', user: 'User C' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 1, text: 'Hello!', user: 'User A' },
    { id: 2, text: 'Hey there!', user: 'User B' },
    { id: 3, text: 'How are you?', user: 'User C' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 1, text: 'Hello!', user: 'User A' },
    { id: 2, text: 'Hey there!', user: 'User B' },
    { id: 3, text: 'How are you?', user: 'User C' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 1, text: 'Hello!', user: 'User A' },
    { id: 2, text: 'Hey there!', user: 'User B' },
    { id: 3, text: 'How are you?', user: 'User C' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
    { id: 4, text: 'I am doing great!', user: 'User A' },
];

const chat = () => {
    return (
        <div className="flex flex-col h-screen">
            <div className="flex-grow bg-gray-100 p-4">
                <div className="bg-white p-4 rounded-lg shadow-md h-full">
                    <div className="mb-4 h-96 overflow-y-auto">
                        {/* Use 'h-96' and 'overflow-y-auto' to make the container scrollable */}
                        {messages.map((message) => (
                            <div key={message.id} className="mb-2">
                                <span className="font-bold">{message.user}: </span>
                                <span>{message.text}</span>
                            </div>
                        ))}
                    </div>
                    <div className="flex">
                        <input
                            type="text"
                            className="flex-grow border rounded-l-lg p-2"
                            placeholder="Type your message..."
                        />
                        <button className="bg-blue-500 text-white px-4 rounded-r-lg">
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default chat;
