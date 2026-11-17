type JsonLdProps = { data: Record<string, unknown> };

/** Safely serializes Schema.org data into the initial server-rendered HTML. */
export default function JsonLd({ data }: JsonLdProps) {
  const json = JSON.stringify(data).replace(/</g, '\\u003c');
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />;
}
