function calculateCoins() {
    const servers = document.getElementById('servers').value;
    const memory = document.getElementById('memory').value;
    const storage = document.getElementById('storage').value;
    const cpu = document.getElementById('cpu').value;

    const serversCoins = servers * 50;
    
    // Convert memory to GB if more than 1000 MB
    const memoryGB = (memory > 1000) ? (memory / 1000).toFixed(2) + ' GB' : memory + ' MB';
    const memoryCoins = memory * 1;
    
    // Convert storage to GB if more than 1000 MB
    const storageGB = (storage > 1000) ? (storage / 1000).toFixed(2) + ' GB' : storage + ' MB';
    const storageCoins = storage * 0.25;
    
    const cpuCoins = cpu * 1;

    const totalCoins = serversCoins + memoryCoins + storageCoins + cpuCoins;
    const cost = totalCoins / 100; // Cost: 1$ per 100 coins

    document.getElementById('serversValue').textContent = servers;
    document.getElementById('memoryValue').textContent = memoryGB;
    document.getElementById('storageValue').textContent = storageGB;
    document.getElementById('cpuValue').textContent = cpu;
    document.getElementById('totalCoins').textContent = totalCoins.toFixed(2);
    document.getElementById('cost').textContent = '$' + cost.toFixed(2);
}

calculateCoins(); // Initial calculation on page load
