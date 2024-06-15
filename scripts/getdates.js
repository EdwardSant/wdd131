// Get the current year
const currentYear = new Date().getFullYear();

// Output the current year in the footer's first paragraph
const currentYearSpan = document.getElementById("currentyear");
if (currentYearSpan) {
    currentYearSpan.textContent = currentYear;
}

// Get the date the document was last modified
const lastModified = document.lastModified;

// Output the last modified date in the second paragraph
const lastModifiedParagraph = document.getElementById("lastModified");
if (lastModifiedParagraph) {
    lastModifiedParagraph.textContent = "Last modified: " + lastModified;
}

