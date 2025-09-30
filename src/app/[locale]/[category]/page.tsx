import Link from "next/link";
import { notFound } from "next/navigation";
import { categories } from "./data";

export default async function CategoryPage({
	params,
}: PageProps<"/[locale]/[category]">) {
	const { category } = await params;

	if (!categories.includes(category)) throw notFound();

	return (
		<>
			<h1>Articles in {category}</h1>
			<Link href={`/${category}/first`}>First article</Link>
			<Link href={`/${category}/second`}>Second article</Link>
		</>
	);
}
