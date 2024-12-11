import { getName } from '@tauri-apps/api/app';
const appName = await getName();

console.log(`Hello, ${appName}!`);