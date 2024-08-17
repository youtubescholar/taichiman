// Main category panels
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', function() {
        var panelContent = this.nextElementSibling;
        if (panelContent.style.maxHeight) {
            panelContent.style.maxHeight = null;
            panelContent.style.opacity = 0;
        } else {
            panelContent.style.maxHeight = panelContent.scrollHeight + "px";
            panelContent.style.opacity = 1;
        }
    });
});

// Nested question panels within each category
document.querySelectorAll('.sub-accordion').forEach(button => {
    button.addEventListener('click', function() {
        var subPanelContent = this.nextElementSibling;
        if (subPanelContent.style.maxHeight) {
            subPanelContent.style.maxHeight = null;
            subPanelContent.style.opacity = 0;
        } else {
            subPanelContent.style.maxHeight = subPanelContent.scrollHeight + "px";
            subPanelContent.style.opacity = 1;
        }
    });
});
