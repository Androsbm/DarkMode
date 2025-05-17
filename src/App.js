<<<<<<< HEAD
// Version 2 -  Dark Mode With Bug
=======
// Version 3 - With Dark Mode, Bug Fixed
>>>>>>> bugfix-save-settings
import React, { useState, useEffect } from 'react';
import './App.css';
function App() {
    const [darkMode, setDarkMode] = useState(false);
    const [settings, setSettings] = useState({ username: '', email: '' });

    // Load settings from localStorage
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);

    useEffect(() => {
        const savedSettings = JSON.parse(localStorage.getItem('settings'));
        const savedDarkMode = JSON.parse(localStorage.getItem('darkMode'));

        if (savedSettings) setSettings(savedSettings);
        if (savedDarkMode !== null) setDarkMode(savedDarkMode);
    }, []);

    // Apply dark mode class
    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, [darkMode]);

    // Handle form submission
    const handleSave = (e) => {
        e.preventDefault();
        localStorage.setItem('settings', JSON.stringify(settings));
        localStorage.setItem('darkMode', JSON.stringify(darkMode)); // Save dark mode state
        alert('Settings saved!');
    };

    return (
        <div className="App p-6">
            <h1 className="text-2xl mb-4">User Settings</h1>
            <button
                onClick={() => setDarkMode(!darkMode)}
                className="mb-4 bg-gray-200 dark:bg-gray-600 p-2 rounded-xl"
            >
                Toggle Dark Mode
            </button>
            <form onSubmit={handleSave} className="p-4 rounded-xl bg-gray-100 dark:bg-gray-700">
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
