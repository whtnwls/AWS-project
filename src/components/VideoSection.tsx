import type { VideoLink } from "../types";

function Embed({
  id,
  title,
  start,
}: {
  id: string;
  title: string;
  start?: number;
}) {
  const params = new URLSearchParams();
  if (start && start > 0) params.set("start", String(start));
  const query = params.toString();
  return (
    <div className="video-embed">
      <iframe
        src={`https://www.youtube-nocookie.com/embed/${id}${
          query ? `?${query}` : ""
        }`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      />
    </div>
  );
}

function LinkRow({ video }: { video: VideoLink }) {
  return (
    <a
      className="video-link"
      href={video.url}
      target="_blank"
      rel="noopener noreferrer"
    >
      <span className="video-link__yt">YouTube</span>
      <span className="video-link__text">{video.title}</span>
      <span className="video-link__arrow" aria-hidden>
        ↗
      </span>
    </a>
  );
}

export function VideoSection({ videos }: { videos?: VideoLink[] }) {
  if (!videos || videos.length === 0) return null;

  return (
    <section className="videos">
      <h2 className="videos__title">관련 영상</h2>
      {videos.map((v, i) => (
        <div key={i}>
          {/* youtubeId가 있으면 페이지에서 바로 재생, 항상 링크도 함께 제공 */}
          {v.youtubeId && (
            <Embed id={v.youtubeId} title={v.title} start={v.startSeconds} />
          )}
          <LinkRow video={v} />
        </div>
      ))}
    </section>
  );
}
