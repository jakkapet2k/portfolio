import { ImageResponse } from "next/og";

export const size = {
  width: 32,
  height: 32,
};
export const contentType = "image/png";

async function loadFont() {
  const css = await fetch(
    "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@1,700",
    { headers: { "User-Agent": "Mozilla/5.0 (Windows NT 6.1) AppleWebKit/534.54.16" } },
  ).then((res) => res.text());

  const urlMatch = css.match(/src:\s*url\(([^)]+)\)/);
  if (!urlMatch) throw new Error("Font URL not found");

  return fetch(urlMatch[1]).then((res) => res.arrayBuffer());
}

export default async function Icon() {
  const font = await loadFont();

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "transparent",
        }}
      >
        <span
          style={{
            fontSize: 30,
            fontFamily: "Playfair Display",
            fontWeight: 700,
            fontStyle: "italic",
            color: "#ffb109",
            lineHeight: 1,
          }}
        >
          J
        </span>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Playfair Display",
          data: font,
          style: "italic",
          weight: 700,
        },
      ],
    },
  );
}
