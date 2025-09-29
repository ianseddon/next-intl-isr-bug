import { Locale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";

async function getArticle(slug: string) {
	// Some database data which is too numerous to generate statically.
	const articles: Record<string, string> = {
		first: "This is the first article",
		second: "This is the second article",
	};

	return articles[slug] ?? null;
}

export const revalidate = 64800;

export async function generateStaticParams() {
	return [];
}

export default async function Page({
	params,
}: PageProps<"/[locale]/[category]/[slug]">) {
	const { slug, locale } = await params;

	setRequestLocale(locale as Locale);

	const article = getArticle(slug);
	if (!article) throw notFound();

	return <p>{article}</p>;
}
