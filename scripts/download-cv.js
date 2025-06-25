const https = require('https');
const fs = require('fs');
const path = require('path');

// URL of the CV PDF on GitHub
const url = 'https://raw.githubusercontent.com/maxsherman1/latex-cv/refs/heads/main/outputs/en_software.pdf';
// Destination path to save the PDF
const dest = path.join('public', 'resume', 'en_software.pdf');

// Ensure the destination directory exists
const destDir = path.dirname(dest);
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

// Download the file
https.get(url, (response) => {
    // Check if the content type indicates a PDF or a generic binary stream
    const contentType = response.headers['content-type'] || '';
    if (!contentType.includes('application/pdf') && !contentType.includes('application/octet-stream')) {
        console.error('Unexpected content type:', contentType);
        console.error('The downloaded file may not be a valid PDF.');
        return;
    } else if (contentType.includes('application/octet-stream')) {
        console.log('Content type is application/octet-stream, proceeding with download and validation.');
    }

    const file = fs.createWriteStream(dest);
    response.pipe(file);
    file.on('finish', () => {
        file.close();
        // Basic validation to check if the file starts with PDF header
        fs.readFile(dest, (err, data) => {
            if (err) {
                console.error('Error reading downloaded file for validation:', err.message);
                return;
            }
            const header = data.slice(0, 5).toString();
            if (header.startsWith('%PDF-')) {
                console.log('CV PDF downloaded successfully to', dest);
            } else {
                console.error('Downloaded file is not a valid PDF. File does not start with PDF header.');
                fs.unlink(dest, (unlinkErr) => {
                    if (unlinkErr) {
                        console.error('Error deleting invalid file:', unlinkErr.message);
                    }
                });
            }
        });
    });
    file.on('error', (err) => {
        console.error('Error writing file:', err.message);
    });
});
