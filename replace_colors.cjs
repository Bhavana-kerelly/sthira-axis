const fs = require('fs');
const path = require('path');

const directory = 'c:/Users/bhava/Downloads/sthira-axis/sthira-axis/src';

const replacements = [
  // index.css variables
  { from: /--color-ivory:\s*#[a-fA-F0-9]{6}/g, to: '--color-ivory: #F7F6F1' },
  { from: /--color-green:\s*#[a-fA-F0-9]{6}/g, to: '--color-green: #080808' },
  { from: /--color-stone:\s*#[a-fA-F0-9]{6}/g, to: '--color-stone: #EAE8E0' },
  { from: /--color-neutral:\s*#[a-fA-F0-9]{6}/g, to: '--color-neutral: #BDBBB3' },
  { from: /--color-parchment:\s*#[a-fA-F0-9]{6}/g, to: '--color-parchment: #F2F1EC' },
  { from: /--color-dark:\s*#[a-fA-F0-9]{6}/g, to: '--color-dark: #080808' },
  { from: /--color-gold:\s*#[a-fA-F0-9]{6}/g, to: '--color-gold: #DC9E1F' },

  // Hardcoded hex colors
  // Greens / Darks
  { from: /#183c32/gi, to: '#080808' },
  { from: /#1c221f/gi, to: '#080808' },
  { from: /#2b3a32/gi, to: '#11110F' },
  { from: /#111714/gi, to: '#080808' },
  { from: /#1a211e/gi, to: '#080808' },
  { from: /#18201c/gi, to: '#080808' },
  { from: /#111413/gi, to: '#080808' },
  { from: /#222b26/gi, to: '#171715' },
  { from: /#34433a/gi, to: '#20201D' },
  { from: /#4a5a51/gi, to: '#2A2925' },

  // Lights
  { from: /#f6f3ed/gi, to: '#F7F6F1' },
  { from: /#f4f0e8/gi, to: '#F7F6F1' },
  { from: /#e8e4df/gi, to: '#F2F1EC' },
  { from: /#f3f0e8/gi, to: '#F7F6F1' },
  { from: /#ddd9cf/gi, to: '#EAE8E0' },
  { from: /#cfc8bc/gi, to: '#EAE8E0' },
  
  // Golds
  { from: /#cfa86e/gi, to: '#DC9E1F' },
  { from: /#b89a62/gi, to: '#DC9E1F' },

  // Neutrals / Greys
  { from: /#777b72/gi, to: '#BDBBB3' },
  { from: /#8e887e/gi, to: '#BDBBB3' },

  // RGBA replacements
  // Green rgba(24, 60, 50, ...) -> rgba(8, 8, 8, ...)
  { from: /rgba\(\s*24\s*,\s*60\s*,\s*50\s*,/g, to: 'rgba(8, 8, 8,' },
  // Green rgba(17, 23, 20, ...) -> rgba(8, 8, 8, ...)
  { from: /rgba\(\s*17\s*,\s*23\s*,\s*20\s*,/g, to: 'rgba(8, 8, 8,' },
  // Green rgba(61, 78, 69, ...) -> rgba(17, 17, 15, ...)
  { from: /rgba\(\s*61\s*,\s*78\s*,\s*69\s*,/g, to: 'rgba(17, 17, 15,' },
  // Green rgba(5, 8, 7, ...) -> rgba(8, 8, 8, ...)
  { from: /rgba\(\s*5\s*,\s*8\s*,\s*7\s*,/g, to: 'rgba(8, 8, 8,' },
  // Green rgba(11, 18, 15, ...) -> rgba(17, 17, 17, ...)
  { from: /rgba\(\s*11\s*,\s*18\s*,\s*15\s*,/g, to: 'rgba(17, 17, 17,' },
  
  // Gold rgba(184, 154, 98, ...) -> rgba(220, 158, 31, ...)
  { from: /rgba\(\s*184\s*,\s*154\s*,\s*98\s*,/g, to: 'rgba(220, 158, 31,' },
  
  // Light rgba(246, 243, 237, ...) -> rgba(247, 246, 241, ...)
  { from: /rgba\(\s*246\s*,\s*243\s*,\s*237\s*,/g, to: 'rgba(247, 246, 241,' },
  // Light rgba(244, 240, 232, ...) -> rgba(247, 246, 241, ...)
  { from: /rgba\(\s*244\s*,\s*240\s*,\s*232\s*,/g, to: 'rgba(247, 246, 241,' },

];

function processDirectory(dir) {
  const files = fs.readdirSync(dir);
  for (const file of files) {
    const fullPath = path.join(dir, file);
    if (fs.statSync(fullPath).isDirectory()) {
      processDirectory(fullPath);
    } else if (fullPath.endsWith('.css') || fullPath.endsWith('.jsx')) {
      let content = fs.readFileSync(fullPath, 'utf8');
      let modified = false;
      
      for (const { from, to } of replacements) {
        if (from.test(content)) {
          content = content.replace(from, to);
          modified = true;
        }
      }
      
      if (modified) {
        fs.writeFileSync(fullPath, content, 'utf8');
        console.log(`Updated ${fullPath}`);
      }
    }
  }
}

processDirectory(directory);
console.log('Done replacing colors.');
