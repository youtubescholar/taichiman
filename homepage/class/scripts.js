<script>
document.addEventListener('DOMContentLoaded', function() {
    var accordions = document.querySelectorAll(".accordion-button");
    accordions.forEach(function(btn) {
        btn.addEventListener("click", function() {
            var panel = this.nextElementSibling;
            var isExpanded = this.getAttribute('aria-expanded') === 'true';
            this.setAttribute('aria-expanded', !isExpanded);
            if (panel.style.maxHeight) {
                panel.style.maxHeight = null;
            } else {
                panel.style.maxHeight = panel.scrollHeight + "px";
            }
        });
    });
});
</script>
