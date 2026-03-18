import fs from 'fs';
import path from 'path';

function walkDir(dir: string, fileList: string[] = []) {
    if (!fs.existsSync(dir)) return fileList;
    const files = fs.readdirSync(dir);
    
    for (const file of files) {
        if (file === 'node_modules' || file === '.next' || file === 'public') continue;
        
        const filePath = path.join(dir, file);
        if (fs.statSync(filePath).isDirectory()) {
            walkDir(filePath, fileList);
        } else if (file.endsWith('.tsx') || file.endsWith('.ts')) {
            fileList.push(filePath);
        }
    }
    
    return fileList;
}

const pages = walkDir(path.join(process.cwd(), 'src', 'app'));
let hasErrors = false;

for (const page of pages) {
    const content = fs.readFileSync(page, 'utf-8');
    
    if (content.includes('{{city}}') && !content.includes('injectCity') && !content.includes('deepInjectCity') && !content.includes('injectAll')) {
        console.error(`Error: File ${page} contains {{city}} but does not call injection system.`);
        hasErrors = true;
    }
}

if (hasErrors) {
    process.exit(1);
} else {
    console.log("0 uninjected placeholders found");
}
