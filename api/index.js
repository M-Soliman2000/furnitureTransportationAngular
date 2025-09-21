// api/index.js - Vercel serverless function entry point
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
import { readFileSync } from 'fs';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Import the Angular server
let server;
try {
  const serverPath = join(__dirname, '../dist/furniture-transportation-angular/server/main.js');
  server = await import(serverPath);
} catch (error) {
  console.error('Failed to load server:', error);
}

export default async function handler(req, res) {
  if (!server) {
    return res.status(500).json({ error: 'Server not loaded' });
  }
  
  // Use the server's default export or the app
  const app = server.default || server.app || server;
  
  if (typeof app === 'function') {
    return app(req, res);
  }
  
  // If it's an Express app, handle it
  if (app && app.handle) {
    return app.handle(req, res);
  }
  
  return res.status(500).json({ error: 'Invalid server configuration' });
}