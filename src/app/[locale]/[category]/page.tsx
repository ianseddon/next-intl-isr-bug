import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { categories } from "./data";
import { Link } from "@/i18n/navigation";

export default async function CategoryPage({
	params,
}: PageProps<"/[locale]/[category]">) {
	const { category, locale } = await params;

	setRequestLocale(locale as Locale);

	if (!categories.includes(category)) throw notFound();

	return (
		<>
			<h1>Articles in {category}</h1>
			<Link href={`/${category}/first`}>First article</Link>
			<Link href={`/${category}/second`}>Second article</Link>
		</>
	);
}
