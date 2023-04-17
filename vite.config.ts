/// <reference types="vitest" />

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	test: {
		name: 'ui-unit-tests',
		globals: true,
		environment: 'jsdom',
		setupFiles: './src/tests/setupTests.ts'
	}
});

/**
 import { defineConfig, mergeConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
	viteConfig,
	defineConfig({
		test: {
			name: 'ui-unit-tests',
			root: './src', // TODO: set to the desired components tree
			exclude: ['packages/template/*'],
			globals: true,
			setupFiles: './src/tests/setupFiles.js',
			environment: 'jsdom'
		}
	})
);

 */
