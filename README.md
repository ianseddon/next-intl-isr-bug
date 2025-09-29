# next-intl-bug-repro-app-router

Reproduction of an issue with ISR when using `next-intl` with:

```typescript
{
	locales: ["en"],
	defaultLocale: "en",

	localePrefix: "as-needed",
	localeDetection: false,
}
```

## Behavior

`/[category]/page.tsx` is SSG, and works as expected.
`/[category]/[slug]/page.tsx` should be ISR and is indicated as such in the `next build` output

However, at runtime returns `Cache-Control: private, no-cache, no-store, max-age=0, must-revalidate`
