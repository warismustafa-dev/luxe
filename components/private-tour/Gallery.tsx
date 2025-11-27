import React, { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';

const Gallery = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => {
      setCurrentTime(video.currentTime);
      setProgress((video.currentTime / video.duration) * 100);
    };

    const updateDuration = () => {
      setDuration(video.duration);
    };

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', updateDuration);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', updateDuration);
    };
  }, []);

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleMuteUnmute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const handleFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      }
    }
  };

  const handleVideoEnded = () => {
    setIsPlaying(false);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  // Gallery images
  const images = [
    {
      src: "/assets/images/Gallery-img2.jpg",
      alt: "Fireworks"
    },
    {
      src: "/assets/images/Gallery-img3.jpg",
      alt: "Concert"
    },
    {
      src: "/assets/images/Gallery-img4.jpg",
      alt: "Food"
    },
    {
      src: "/assets/images/Gallery-img5.jpg",
      alt: "Carnival ride"
    }
  ];

  return (
    <section className="section-padding bg-luxe-black">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="text-center mb-12">
          <h2 className="luxe-heading-1 text-white uppercase">GALLERY</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 w-full">
          {/* Column 1: Video */}
          <div className="relative w-full aspect-square sm:aspect-[2/3] md:aspect-[2/4] rounded-luxe-2xl overflow-hidden bg-black">
            <video
              ref={videoRef}
              className="w-full h-full object-cover"
              onEnded={handleVideoEnded}
              poster="/assets/images/Gallery-img1.jpg"
            >
              <source src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
            {/* Video Controls Overlay */}
            <div className="absolute bottom-0 left-0 right-0 px-4 pb-4">
              {/* Progress Bar */}
              <div className="w-full bg-white/30 rounded-full h-1 mb-3">
                <div
                  className="bg-white h-1 rounded-full transition-all duration-100"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
              {/* Control Buttons */}
              <div className="flex items-center space-x-3">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handlePlayPause}
                  className="w-8 h-8 bg-transparent hover:bg-white/20 text-white rounded-full p-0"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleMuteUnmute}
                  className="w-8 h-8 bg-transparent hover:bg-white/20 text-white rounded-full p-0"
                >
                  {isMuted ? <VolumeX className="w-4 h-4" /> : <Volume2 className="w-4 h-4" />}
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={handleFullscreen}
                  className="w-8 h-8 bg-transparent hover:bg-white/20 text-white rounded-full p-0"
                >
                  <Maximize className="w-4 h-4" />
                </Button>
                <div className="ml-2">
                  <span className="text-white text-sm">
                    {formatTime(currentTime)}
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Column 2: Fireworks */}
          <div className="w-full aspect-square sm:aspect-[2/3] md:aspect-[2/4] rounded-luxe-2xl overflow-hidden">
            <img src={images[0].src} alt={images[0].alt} className="w-full h-full object-cover" />
          </div>
          {/* Column 3: Two stacked images, together fill the column height */}
          <div className="w-full aspect-[2/3] md:aspect-auto h-full grid grid-rows-2 gap-6 rounded-luxe-2xl overflow-hidden">
            <div className="w-full h-full rounded-luxe-2xl overflow-hidden">
              <img src={images[1].src} alt={images[1].alt} className="w-full h-full object-cover rounded-luxe-2xl" />
            </div>
            <div className="w-full h-full rounded-luxe-2xl overflow-hidden">
              <img src={images[2].src} alt={images[2].alt} className="w-full h-full object-cover rounded-luxe-2xl" />
            </div>
          </div>
          {/* Column 4: Carnival ride with overlay button */}
          <div className="relative w-full aspect-square sm:aspect-[2/3] md:aspect-[2/4] rounded-luxe-2xl overflow-hidden">
            <img src={images[3].src} alt={images[3].alt} className="w-full h-full object-cover" />
            {/* Show All Photos Button Overlay */}
            <div className="absolute inset-0 flex items-center justify-center">
              <Button className="bg-white/80 hover:bg-white text-black font-medium px-6 py-3 rounded-full text-base flex items-center space-x-2 shadow-lg">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 002 2z" />
                </svg>
                <span>Show All Photos</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;