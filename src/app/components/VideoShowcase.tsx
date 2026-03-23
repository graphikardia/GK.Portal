'use client';

import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Play, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useTheme } from '../../lib/ThemeContext';
import { cn } from '../../lib/utils';

const videos = [
  '/videos/SaveGram.App_AQM4LTk5Bilmviu1M7upEtc5kGRFhuU8QNlFPSlowsI_NrK5mq7HGCwa1l8PzVkWokGYiBTyvNInrBWbeKfm9m5PTpGt7eEbrNHTZhM.mp4',
  '/videos/SaveGram.App_AQMKlFKhcpbQUwf9yr5MhNgj_F8X9UVzm9MA3E6jkjdKV6Ju_Ftx5KxtNuO9mY04giZE3UKQiE23lJ-mnIEt4nmRW-NIJxLuETVqzpA.mp4',
  '/videos/SaveGram.App_AQMkndN3oOED1CUipzJY8SOu8OOOCpLQ8NY5H95JBEpkNWI35s_LoPixfN1s8p4l4BS5e3m9bW-7fKnEHtIXcOxGldW_oHxIJnWaiFU.mp4',
  '/videos/SaveGram.App_AQMKoovkpYmFmUT3dRBrh9rTIWAo7n9pepUO5eInxZ6N5XBEhcnxdGcf2mHv6_3XRjttfyBKj9k_Z9tNHNExKpzdk15ZRo-kcGCHg5c.mp4',
  '/videos/SaveGram.App_AQMuUAi5G5tOnJvyUJXrQCqIqLB3xfl9BEyvUeBbVWqlicZ9t0Ex_MwtCFRQDIhhmtyfaNARzPm9pDqYjLDTCaSnsGT4dulN-oA6OOM.mp4',
  '/videos/SaveGram.App_AQMxcn6Ygdj9oFOMW18P94wKjl9rScMo2_FtlzjCV6pm-HMEXybJukXfGOSw812mwD4p4DwGwDvoC_436dpP5kYq8eV5qKGKKjQMgh0.mp4',
  '/videos/SaveGram.App_AQNvzIpkdz7hs1qs1Kbmlk6iVnD77RFMAl2ryXODknJe6KYQ6DIqn29hPI-C-WDZ3G3lg_1d-j5W2H_UE7BHcEwNLHYYMD1X6-beSj8.mp4',
  '/videos/SaveGram.App_AQO2lKpNYIAichb86UzJb_XkXt6w8Y3YxKu-vCvz4eARHwlfPpkFP-_nfiRtA5O8f953UKMuhBQDMjtdS2fFmVZrlqxVwZI7g1y8Xqs.mp4',
  '/videos/SaveGram.App_AQOuOZszB7C96_r2QCzhU9qdcMPSRz_njgwbCHmY-DmEzpwfQJo0_LJ3-rZ4lXAoT5e1x8NpeWYC5hBVt9UhtfSK0Y1UB1Ck3pK64KQ.mp4',
  '/videos/SaveGram.App_AQP6zm3vr1jzOlNJHDHHU762SsFaKjR4A8t7fKM2KA8EcB0HgJ72OgSde9IlXg6os--vDNb2ryR20P2aikfkDhlSdO6OT--mkymsC60.mp4',
  '/videos/SaveGram.App_AQP7urKjFAwdUcqPRIMmREY_X7YCMwMjkzhqGAVUtDAQenbNXT_DaJyjvNcAlv09pkeYi6Y_-sA1pe-6lZvKLhOt_KtB1E_jebVo8EY.mp4',
  '/videos/SaveGram.App_AQPnx1KBSym2DD9HpvOPcb8tsK6iDWoK7K_k0-LIff2TakWKSqq2SFHhs6rhVyfa6Vfo_vljySSnI54iojKyPheYhkbh-O5ocK_i2IY.mp4',
];

export function VideoShowcase() {
  const { isDark } = useTheme();
  const [activeVideo, setActiveVideo] = useState<number | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setActiveVideo(index);
  };

  const closeLightbox = () => setActiveVideo(null);

  const nextVideo = () => {
    const next = (currentIndex + 1) % videos.length;
    setCurrentIndex(next);
    setActiveVideo(next);
  };

  const prevVideo = () => {
    const prev = (currentIndex - 1 + videos.length) % videos.length;
    setCurrentIndex(prev);
    setActiveVideo(prev);
  };

  return (
    <section className="py-32 px-6">
      <div className="max-w-[1800px] mx-auto">
        <div className="mb-16 flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <span className="font-mono text-[10px] uppercase tracking-[0.5em] text-purple-500 mb-4 block">[Reel Edit Showcase]</span>
            <h2 className="text-[8vw] md:text-[5vw] leading-[0.9] font-black uppercase italic tracking-tighter">
              Recent<span className="text-purple-500">.</span>Work
            </h2>
          </div>
          <p className="text-sm font-mono uppercase tracking-widest opacity-50 max-w-md">
            Curated viral content — aggressive edits, trending hooks, maximum retention
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
          {videos.map((video, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className={cn(
                "relative aspect-[9/16] cursor-pointer overflow-hidden group",
                isDark ? "bg-zinc-900" : "bg-zinc-100"
              )}
              onClick={() => openLightbox(index)}
            >
              <video
                src={video}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                muted
                loop
                playsInline
                onMouseEnter={(e) => (e.currentTarget as HTMLVideoElement).play()}
                onMouseLeave={(e) => {
                  const v = e.currentTarget as HTMLVideoElement;
                  v.pause();
                  v.currentTime = 0;
                }}
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors flex items-center justify-center">
                <div className="opacity-0 group-hover:opacity-100 transition-opacity">
                  <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center border border-white/30">
                    <Play className="text-white fill-white ml-1" size={20} />
                  </div>
                </div>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/70">
                  Project {String(index + 1).padStart(2, '0')}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {activeVideo !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[300] bg-black/95 backdrop-blur-sm flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
            onClick={closeLightbox}
          >
            <X className="text-white" size={24} />
          </button>

          <button
            className="absolute left-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); prevVideo(); }}
          >
            <ChevronLeft className="text-white" size={32} />
          </button>

          <button
            className="absolute right-6 top-1/2 -translate-y-1/2 p-4 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            onClick={(e) => { e.stopPropagation(); nextVideo(); }}
          >
            <ChevronRight className="text-white" size={32} />
          </button>

          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className="w-full max-w-lg aspect-[9/16]"
            onClick={(e) => e.stopPropagation()}
          >
            <video
              ref={videoRef}
              src={videos[currentIndex]}
              className="w-full h-full object-contain rounded-lg"
              controls
              autoPlay
            />
          </motion.div>

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-mono text-[10px] uppercase tracking-widest text-white/50">
            {String(currentIndex + 1).padStart(2, '0')} / {String(videos.length).padStart(2, '0')}
          </div>
        </motion.div>
      )}
    </section>
  );
}
