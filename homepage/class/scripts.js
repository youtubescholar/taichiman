<script>

document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', () => {
        const accordionContent = button.nextElementSibling;
        button.setAttribute('aria-expanded', button.getAttribute('aria-expanded') === 'false' ? 'true' : 'false');
        accordionContent.hidden = !accordionContent.hidden;
    });
});

</script>
