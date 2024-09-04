import React from "react";
import Copyright from "../components/Copyright";
import Header from "../components/Header";
import "./AlbumsPage.scss";

export const BUCKET_NAME = "terrance-files";
export const ALBUMS = [
  {
    title: "yosemite half dome",
    subtitle: "aug 2024",
    s3Prefix: "yosemite_half_dome",
  },
  {
    title: "iceland 2",
    subtitle: "jul 2024",
    s3Prefix: "iceland_2",
  },
  {
    title: "yosemite fire falls",
    subtitle: "feb 2023",
    s3Prefix: "yosemite_fire_falls",
  },
];

export const AlbumsPage = () => {
  return (
    <div id="albums-page">
      {/* Top Splash */}
      <div id="frame-1">
        <Header />
      </div>

      <div class="content">
        {ALBUMS.map((album) => (
          <Album {...album} />
        ))}
      </div>
      <Copyright />
    </div>
  );
};

const Album = (album) => {
  return (
    <div
      className="album"
      onClick={() => (window.location.href = `/#/photos/${album.s3Prefix}`)}
    >
      <img
        src={`https://${BUCKET_NAME}.s3.us-west-2.amazonaws.com/photography/${album.s3Prefix}/cover.jpg`}
      />
      <div className="album-title">
        <h2>{album.title}</h2>
        <h3>{album.subtitle}</h3>
      </div>
    </div>
  );
};
