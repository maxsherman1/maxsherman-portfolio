const https = require('https');
const fs = require('fs');
const path = require('path');

// URL of the CV PDF on GitHub
const url = 'https://github.com/maxsherman1/latex-cv/blob/main/outputs/en_software.pdf?raw=true';
// Destination path to save the PDF
const dest = path.join('public', 'resume', 'en_software.pdf');

// Ensure the destination directory exists
const destDir = path.dirname(dest);
if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

// Download the file
https.get(url, (response) => {
    // Check if the request was redirected (GitHub raw URLs often redirect)
    if (response.statusCode === 302 || response.statusCode === 301) {
        https.get(response.headers.location, (redirectResponse) => {
            const file = fs.createWriteStream(dest);
            redirectResponse.pipe(file);
            file.on('finish', () => {
                file.close();
                console.log('CV PDF downloaded successfully to', dest);
            });
        }).on('error', (err) => {
            console.error('Error downloading the redirected file:', err.message);
        });
    } else {
        const file = fs.createWriteStream(dest);
        response.pipe(file);
        file.on('finish', () => {
            file.close();
            console.log('CV PDF downloaded successfully to', dest);
        });
    }
}).on('error', (err) => {
    console.error('Error downloading the file:', err.message);
});
