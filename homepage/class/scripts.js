<script>
document.addEventListener('DOMContentLoaded', function() {
    const accordions = document.querySelectorAll('.accordion-button');
    accordions.forEach(button => {
        button.addEventListener('click', function() {
            const expanded = button.getAttribute('aria-expanded') === 'true' || false;
            const content = document.getElementById(button.getAttribute('aria-controls'));

            // Toggle expanded state
            button.setAttribute('aria-expanded', !expanded);
            content.style.display = expanded ? 'none' : 'block'; // Toggle display
        });
    });
});
</script>
