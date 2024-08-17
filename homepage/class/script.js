
// Main category panels
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('active');
        var panelContent = this.nextElementSibling;
        panelContent.style.display = panelContent.style.display === 'block' ? 'none' : 'block';
    });
});

// Nested question panels within each category
document.querySelectorAll('.sub-accordion').forEach(button => {
    button.addEventListener('click', function() {
        this.classList.toggle('active');
        var subPanelContent = this.nextElementSibling;
        subPanelContent.style.display = subPanelContent.style.display === 'block' ? 'none' : 'block';
    });
});
