import { title } from 'process';
import Navigation from './components/Navigation';
import { Metadata } from 'next';
import Logo from './components/Logo';

export const metadata: Metadata = {
	title: 'The Wild Oasis',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body>
				<header>
					<Logo />
				</header>
				<Navigation />
				<main>{children}</main>
				<footer>Jakob Douglas &copy; 2024</footer>
			</body>
		</html>
	);
}
