export default function DemoVideo() {
  return (
    <div className="max-w-5xl mx-auto px-5 py-10">
      <h2 className="text-2xl font-bold text-center mb-6 text-white">
        Watch Demo Video
      </h2>

      <div className="relative w-full" style={{ paddingTop: "56.25%" }}>
        <iframe
          className="absolute top-0 left-0 w-full h-full rounded-xl"
          src="https://www.youtube.com/embed/VP1rFacoOb0"
          title="Metamerge Demo Video"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
