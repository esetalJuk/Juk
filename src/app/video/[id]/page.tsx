import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Section } from "@/components/ui/section";

export const metadata: Metadata = {
  title: "Video",
  robots: {
    index: false,
    follow: false,
    nocache: true,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

const VIMEO_ID_PATTERN = /^\d+$/;

export default async function VideoPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  if (!VIMEO_ID_PATTERN.test(id)) {
    notFound();
  }

  return (
    <div className="pb-24 pt-32 sm:pt-40">
      <Section>
        <div className="mx-auto max-w-4xl">
          <div className="relative aspect-video w-full overflow-hidden border border-line-strong bg-tinta-raised">
            <iframe
              src={`https://player.vimeo.com/video/${id}`}
              title="Video"
              className="absolute inset-0 h-full w-full"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </Section>
    </div>
  );
}
