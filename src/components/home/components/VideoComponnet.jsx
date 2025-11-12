"use client";
import { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

import ideaBaazLogo from "../../../../public/images/hero/ideabaazlogo.svg";
import ZeeLogo from "../../../../public/images/hero/zee.png";

export default function VideoComponent() {
  const playerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const desiredPlaybackRate = 0.8;
    const iframeId = "hero-video-iframe";

    const applyPlaybackPreferences = (player) => {
      if (!player) return;

      const availableRates =
        typeof player.getAvailablePlaybackRates === "function"
          ? player.getAvailablePlaybackRates()
          : [];

      let selectedRate = desiredPlaybackRate;
      if (Array.isArray(availableRates) && availableRates.length > 0) {
        selectedRate = availableRates.reduce((closest, rate) => {
          const closestDiff = Math.abs(closest - desiredPlaybackRate);
          const candidateDiff = Math.abs(rate - desiredPlaybackRate);
          return candidateDiff < closestDiff ? rate : closest;
        }, availableRates[0]);
      }

      if (typeof player.setPlaybackRate === "function")
        player.setPlaybackRate(selectedRate);
      if (typeof player.seekTo === "function") player.seekTo(0, true);
      if (typeof player.playVideo === "function") player.playVideo();
    };

    const onPlayerReady = (event) => {
      if (typeof event.target.mute === "function") event.target.mute();
      applyPlaybackPreferences(event.target);
    };

    const onPlayerStateChange = (event) => {
      if (
        window?.YT?.PlayerState &&
        event.data === window.YT.PlayerState.ENDED
      ) {
        event.target.seekTo?.(0);
        event.target.playVideo?.();
      }
    };

    const createPlayer = () => {
      if (!window?.YT?.Player || playerRef.current) {
        if (playerRef.current) applyPlaybackPreferences(playerRef.current);
        return;
      }
      playerRef.current = new window.YT.Player(iframeId, {
        events: { onReady: onPlayerReady, onStateChange: onPlayerStateChange },
      });
    };

    if (window?.YT?.Player) {
      createPlayer();
    } else {
      const scriptId = "youtube-iframe-api";
      if (!document.getElementById(scriptId)) {
        const script = document.createElement("script");
        script.id = scriptId;
        script.src = "https://www.youtube.com/iframe_api";
        document.body.appendChild(script);
      }

      const prevCallback = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        if (prevCallback) prevCallback();
        createPlayer();
      };
    }

    return () => {
      if (playerRef.current?.destroy) playerRef.current.destroy();
      playerRef.current = null;
    };
  }, []);

  return (
    <section>
      <div className="flex  w-full flex-col items-center justify-center px-4 py-12 text-center text-white md:max-h-[200vh]">
        {/* Video Section */}
        <div className=" bg-gradient-to-b from-white to-black rounded-xl flex w-full justify-center p-[0.75px]">
          <div className="relative bg-black aspect-video w-[100%] max-w-[1000px] overflow-hidden rounded-xl shadow-lg md:w-[600px]">
            <iframe
              id="hero-video-iframe"
              src="https://www.youtube.com/embed/4LnGQ-JTGcs?autoplay=1&mute=1&loop=1&playlist=4LnGQ-JTGcs&controls=0&modestbranding=1&rel=0&playsinline=1&fs=0&disablekb=1&enablejsapi=1"
              className="pointer-events-none h-full w-full border-0"
              allow="autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            />

            {/* Gradient Overlay */}
            <div className="absolute bottom-0 left-0 right-0 top-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />

            <Image
              src={ideaBaazLogo}
              alt="IdeaBaaz Logo"
              className="absolute left-4 top-4 w-[40px] md:left-6 md:top-6 md:w-[60px]"
            />

            {/* Bottom Text Overlay */}
            <div className="absolute bottom-0 left-0 right-0 flex flex-col items-start p-3 md:p-5">
              <h4 className=" w-[60%] text-[10px] text-left  font-medium md:w-[50%] md:text-lg">
                VendiBite Featured on IdeaBaaz
              </h4>
              <p className=" mb-2 md:mb-4 text-left text-[8px] leading-3 font-light md:text-[10px]">
                Showcasing India’s innovation in unmanned access technology.
              </p>
              <div className="flex items-center gap-2">
                <button
                  onClick={() =>
                    window.open(
                      "https://www.zee5.com/tv-shows/details/ideabaaz/0-6-4z5840913",
                      "_blank"
                    )
                  }
                  className="rounded-md bg-[#B73601] px-2 py-1 text-[8px] underline decoration-[0.5px] text-white font-light md:px-4 md:py-1 md:text-[10px]"
                >
                  Watch Now
                </button>
                <div className="flex items-center gap-2">
                  <span className="opacity-80 text-[8px] md:text-[10px]">
                    Only on
                  </span>
                  <Image
                    src={ZeeLogo}
                    alt="Zee Logo"
                    className="w-[40px] md:w-[50px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
