// Version 1 - Without Dark Mode
import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
    const [settings, setSettings] = useState({ username: '', email: '' });

    useEffect(() => {
        const savedSettings = JSON.parse(localStorage.getItem('settings'));
        if (savedSettings) {
            setSettings(savedSettings);
        }
    }, []);

    const handleSave = (e) => {
        e.preventDefault();
        localStorage.setItem('settings', JSON.stringify(settings));
        alert('Settings saved!');
    };

    return (
        <div className="App p-6">
            <h1 className="text-2xl mb-4">User Settings</h1>
            <form onSubmit={handleSave} className="p-4 rounded-xl bg-gray-100">
                <label className="block mb-2">
                    Username:
                    <input
                        type="text"
                        value={settings.username}
                        onChange={(e) => setSettings({ ...settings, username: e.target.value })}
                        className="w-full p-2 rounded-lg mb-2"
                    />
                </label>
                <label className="block mb-2">
                    Email:
                    <input
                        type="email"
                        value={settings.email}
                        onChange={(e) => setSettings({ ...settings, email: e.target.value })}
                        className="w-full p-2 rounded-lg mb-4"
                    />
                </label>
                <button type="submit" className="bg-blue-500 text-white py-2 px-4 rounded-xl">
                    Save Settings
                </button>
            </form>
        </div>
    );
}

export { App }
