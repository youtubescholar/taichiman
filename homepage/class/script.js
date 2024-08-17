
// JavaScript for handling main category accordion panels
document.querySelectorAll('.accordion-button').forEach(button => {
    button.setAttribute('aria-expanded', 'false'); // Initialize ARIA attribute

    button.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', String(!isExpanded));
        const panelContent = this.nextElementSibling;

        if (isExpanded) {
            panelContent.style.maxHeight = null; // Close the panel
            panelContent.classList.remove('active');
        } else {
            panelContent.style.maxHeight = panelContent.scrollHeight + "px"; // Open the panel
            panelContent.classList.add('active');
        }
    });
});

// JavaScript for handling nested accordion panels within each category
document.querySelectorAll('.sub-accordion').forEach(button => {
    button.setAttribute('aria-expanded', 'false'); // Initialize ARIA attribute

    button.addEventListener('click', function() {
        const isExpanded = this.getAttribute('aria-expanded') === 'true';
        this.setAttribute('aria-expanded', String(!isExpanded));
        const subPanelContent = this.nextElementSibling;

        if (isExpanded) {
            subPanelContent.style.maxHeight = null; // Close the panel
            subPanelContent.classList.remove('active');
        } else {
            subPanelContent.style.maxHeight = subPanelContent.scrollHeight + "px"; // Open the panel
            subPanelContent.classList.add('active');
        }
    });
});
