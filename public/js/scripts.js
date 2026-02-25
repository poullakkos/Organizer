document.getElementById('category-form').addEventListener('submit', async (e) =>{
    e.preventDefault();
    const categoryInput = document.getElementById('category')
    const name = categoryInput.value;
    console.log('Category to add:', name);

    const response = await fetch('/categories', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name })
    });
    if (response.ok) {
        categoryInput.value = '';
    } else {
        alert('Error adding category');
    }
});

document.querySelector('.delete-categories')
    .addEventListener('click', deleteCategories);

export async function deleteCategories() {
    try {
        const response =await fetch('/categories', {
            method: 'DELETE'
        });
        if (response.ok) {
            console.log('Categories deleted successfully');
        } else {
            alert('Error deleting categories');
        }
    } catch (err) {
        console.error('Error deleting categories:', err);
    }
}

