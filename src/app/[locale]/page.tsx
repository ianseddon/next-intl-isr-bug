import { setRequestLocale } from "next-intl/server";

export default async function IndexPage({ params }: PageProps<"/[locale]">) {
	const { locale } = await params;

	setRequestLocale(locale);

	return <h1>Index</h1>;
}
