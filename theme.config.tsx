import React from 'react';
import { DocsThemeConfig } from 'nextra-theme-docs';
import { SponsorNavBtn } from './components/sponsor-nav-btn';
import { Footer } from './components/footer';

const config: DocsThemeConfig = {
	logo: (
		<span className="text-2xl font-medium nx-text-primary-600">
			Intento
		</span>
	),
	logoLink: '/',
	project: {
		link: 'https://github.com/oconva/intento-docs',
	},
	chat: {
		icon: <SponsorNavBtn variant="outline"></SponsorNavBtn>,
		link: 'https://github.com/sponsors/oconva',
	},
	docsRepositoryBase: 'https://github.com/oconva/intento-docs/tree/main',
	footer: {
		text: 'QvikChat - A project by Oconva',
		component: <Footer />,
	},
	sidebar: {
		defaultMenuCollapseLevel: 1,
	},
	primaryHue: 179,
	primarySaturation: 30,
	useNextSeoProps: () => {
		return {
			titleTemplate: '%s - QvikChat',
		};
	},
	head: (
		<>
			<meta name="description" content="QvikChat - A project by Oconva" />
			<meta name="twitter:card" content="" />
			<meta name="twitter:site" content="" />
			<meta name="og:title" content="QvikChat" />
			<meta
				name="og:description"
				content="QvikChat - A project by Oconva"
			/>
			<meta
				name="apple-mobile-web-app-title"
				content="QvikChat - A project by Oconva"
			/>
			<link rel="icon" href="icon.ico" />
			<link rel="mask-icon" href="icon.ico" color="#000000" />
			<link rel="apple-touch-icon" type="image/svg+xml" href="icon.ico" />
		</>
	),
};

export default config;
