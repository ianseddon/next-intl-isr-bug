import { categories } from "./data";

export async function generateStaticParams() {
	return categories.map((category) => ({ category }));
}

export default async function CategoryLayout({
	children,
	params,
}: LayoutProps<"/[locale]/[category]">) {
	const { category } = await params;

	return (
		<>
			<h2>Category: {category}</h2>
			{children}
		</>
	);
}
