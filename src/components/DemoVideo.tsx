"use client";

export default function DemoVideo() {
  return (
    <div className="w-full flex justify-center items-center py-10 px-4">
      <div className="w-full max-w-4xl">
        
        <h2 className="text-2xl md:text-3xl font-bold text-white text-center mb-6">
          🎥 Demo Video
        </h2>

        <div className="w-full aspect-video rounded-2xl overflow-hidden border border-white/10 shadow-lg">
          <iframe
            src="https://www.youtube.com/embed/VP1rFacoOb0"
            title="Demo Video"
            className="w-full h-full"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </div>
  );
}
