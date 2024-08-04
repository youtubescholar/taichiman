<script>
document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.querySelectorAll(".accordion-button");
    accordions.forEach(function(btn) {
        btn.addEventListener("click", function() {
            const panel = this.nextElementSibling;
            const isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            if (isExpanded) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px"; // Ensure scrollHeight is calculated correctly
            }
        });
    });
});

</script>
