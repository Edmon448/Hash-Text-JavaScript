async function hashInput() {
    const inputText = document.getElementById('inputText').value;
    const hashBuffer = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(inputText));
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
    document.getElementById('hashOutput').textContent = hashHex;
}