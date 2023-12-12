// cheatsheet.js
document.addEventListener('DOMContentLoaded', function() {
    const rows = document.querySelectorAll('#cheatTable tr');

    rows.forEach(function(row, index) {
        if (index !== 0) { // Skip the header row
            row.addEventListener('mouseover', function() {
                row.style.backgroundColor = '#f0f0f0'; // Change background color on mouseover
            });

            row.addEventListener('mouseout', function() {
                row.style.backgroundColor = ''; // Restore default background color on mouseout
            });
        }
    });
});
