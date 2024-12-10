const API_URL = 'http://localhost:3000/api/v1';

const getProgress = async () => {
    try {
        const response = await fetch(`${API_URL}/progress`);
        if (!response.ok) throw new Error('Failed to fetch progress');
        return await response.json();
    } catch (err) {
        console.error('Error fetching progress:', err.message);
        throw err;
    }
};

const updateProgress = async (percentage) => {
    try {
        const response = await fetch(`${API_URL}/progress`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ percentage }),
        });
        if (!response.ok) throw new Error('Failed to update progress');
        return await response.json();
    } catch (err) {
        console.error('Error updating progress:', err.message);
        throw err;
    }
};

const renderProgress = async () => {
    const progressBar = document.getElementById('progress-bar');
    try {
        const { percentage } = await getProgress();
        progressBar.style.width = `${percentage}%`;
        progressBar.textContent = `${percentage}% completed`;
    } catch (err) {
        progressBar.textContent = 'Error loading progress';
    }
};

document.getElementById('update-progress').addEventListener('click', async () => {
    try {
        const newPercentage = Math.floor(Math.random() * 100) + 1; // Генерация нового процента
        await updateProgress(newPercentage);
        renderProgress();
    } catch (err) {
        console.error('Error during progress update:', err.message);
    }
});

renderProgress();