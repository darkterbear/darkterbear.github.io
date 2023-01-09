import React from "react";
import "./BlogPage.scss";

export const BlogPage = () => {
  return (
    <div id="blog-page">
      {/* Top Splash */}
      <div id="frame-1">
        <a href="/">
          <h3 id="header" class="white">
            terrance li
          </h3>
        </a>
        <div class="content">
          <img
            id="illustration"
            src="https://files.terranceli.com/server.png"
          />
          <h1 class="title">terrance's blog</h1>
        </div>
      </div>

      <div class="content">
        <div class="article">
          <span>December 15th, 2021</span>
          <h1>
            <a href="/blog/building-mahjong">Building Mahjong</a>
          </h1>
          <p>
            As the boredom of quarantine sets in, I embarked on a project to
            build multiplayer Mahjong as a web app so I can play with my
            friends. Read about the rules, my design, and some challenges of the
            implementation!{" "}
          </p>
        </div>
        <div class="article">
          <span>August 25th, 2020</span>
          <h1>
            <a href="/blog/building-a-drone">Building a drone</a>
          </h1>
          <p>
            Follow along as I take you through my experience of building my own
            drone! This also serves as a tutorial if you want to replicate this
            work.
          </p>
        </div>
        <div class="article">
          <span>August 6th, 2020</span>
          <h1>
            <a href="/blog/my-futureforce-internship-experience">
              My Futureforce internship experience
            </a>
          </h1>
          <p>
            This summer (2020), I worked at Salesforce as a Futureforce intern
            for the Communities Cloud Runtime team! Read about my experience, my
            project, and everything I learned.
          </p>
        </div>
        <div class="article">
          <span>June 6th, 2020</span>
          <h1>
            <a href="/blog/basic-ubuntu-server-security">
              Basic Ubuntu server security
            </a>
          </h1>
          <p>
            After setting up an Ubuntu server, there are many steps you can take
            to lock it down and discourage attacks. We'll go over some of the
            basic steps you can do to improve your server's security.
          </p>
        </div>
        <div class="article">
          <span>May 10th, 2020</span>
          <h1>
            <a href="/blog/ubuntu-server-setup-with-do">
              Ubuntu server setup with DigitalOcean
            </a>
          </h1>
          <p>
            When we talk about the "cloud" and the services that run on the
            Internet such as Facebook and Twitter, we cannot avoid talking about{" "}
            <b>servers</b>. Servers interact with clients over the Internet to
            provide different services, such as streaming videos, hosting
            gameplay, and serving content. In this tutorial, you'll learn how to
            set up your very own server with <b>DigitalOcean</b>, a
            cloud-hosting provider!
          </p>
        </div>
      </div>
      <p id="copyright">Copyright © Terrance Li 2022</p>
    </div>
  );
};
