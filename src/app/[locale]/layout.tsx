export async function generateStaticParams() {
	return [{ locale: "en" }];
}

export default async function LocaleLayout({
	children,
	params,
}: LayoutProps<"/[locale]">) {
	return (
		<html lang="en">
			<head>
				<title>next-intl-bug-repro-app-router</title>
			</head>
			<body>{children}</body>
		</html>
	);
}
