document.getElementById('category-form').addEventListener('submit', async (e) =>{
    e.preventDefault();
    const name = document.getElementById('category').value;
    console.log('Category to add:', name);

    await fetch('/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
    });
});