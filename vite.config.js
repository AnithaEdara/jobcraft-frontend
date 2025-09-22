import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './job-craft',
  server: {
    port: 3000, // change this to the port number you want to use
    host: true  // this enables access from your AWS public DNS
  }
})
