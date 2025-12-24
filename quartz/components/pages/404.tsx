const NotFound: QuartzComponent = ({ cfg }: QuartzComponentProps) => {
  const url = new URL(`https://${cfg.baseUrl ?? "example.com"}`)
  const baseDir = url.pathname

  return (
    <article class="popover-hint">
      <h1>404</h1>
      <p>{i18n(cfg.locale).pages.error.notFound}</p>

      {/* 👇 Your custom line */}
      <p>This page has yet to be written...</p>

      <a href={baseDir}>{i18n(cfg.locale).pages.error.home}</a>
    </article>
  )
}
