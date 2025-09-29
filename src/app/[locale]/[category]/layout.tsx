import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { categories } from "./data";

export async function generateStaticParams() {
	return categories.map((category) => ({ category }));
}

export default async function CategoryLayout({
	children,
	params,
}: LayoutProps<"/[locale]/[category]">) {
	const { category, locale } = await params;

	setRequestLocale(locale as Locale);

	return (
		<>
			<h2>Category: {category}</h2>
			{children}
		</>
	);
}
