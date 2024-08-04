<script>
document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.accordion-button');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const content = document.getElementById(this.getAttribute('aria-controls'));
            const expanded = this.getAttribute('aria-expanded') === 'true';

            // Toggle expanded attribute
            this.setAttribute('aria-expanded', !expanded);
            
            // Toggle content visibility
            content.hidden = expanded;
        });
    });
});
</script>
