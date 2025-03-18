const GridLayout = () => {
  return (
    <div className="flex justify-center items-center min-h-screen">
    <div
      className="grid duration-200 overflow-hidden"
      style={{
        maxHeight: '679.2px',
        gap: '12px',
        gridTemplateRows: 'repeat(34, 31.2px)',
        gridTemplateColumns: 'repeat(24, 24px)',
      }}
    >
      <a
        href="#"
        className="hover:opacity-80 duration-200 relative w-full h-full rounded-2xl lg:rounded-3xl select-none pointer-events-none overflow-hidden"
        style={{
          gridArea: '1 / 1 / 17 / 9',
          backgroundColor: 'rgb(247, 247, 247)',
        }}
      >
        <img src="https://landing.impo.app/_next/image?url=%2Fassets%2Fimages%2FappFeatures%2F1%2Fdesktop%2F1.webp&w=384&q=75" alt="" />
        <div className="absolute left-0 right-0 bottom-0 flex flex-col gap-1 p-4 lg:p-6">
          <p>بی بی چک</p>
        </div>
      </a>
      <a
        href="#"
        className="hover:opacity-80 duration-200 relative w-full h-full rounded-2xl lg:rounded-3xl select-none pointer-events-none overflow-hidden"
        style={{
          gridArea: '1 / 9 / 9 / 17',
          backgroundColor: 'rgb(247, 247, 247)',
        }}
      >
        <img src="https://landing.impo.app/_next/image?url=%2Fassets%2Fimages%2FappFeatures%2F1%2Fdesktop%2F2.webp&w=384&q=75" alt="" />
      </a>
      <a
        href="#"
        className="hover:opacity-80 duration-200 relative w-full h-full rounded-2xl lg:rounded-3xl select-none pointer-events-none overflow-hidden"
        style={{
          gridArea: '1 / 17 / 9 / 25',
          backgroundColor: 'rgb(247, 247, 247)',
        }}
      >
        <img src="https://landing.impo.app/_next/image?url=%2Fassets%2Fimages%2FappFeatures%2F1%2Fdesktop%2F3.webp&w=1080&q=75" alt="" />
      </a>
      <a
        href="#"
        className="hover:opacity-80 duration-200 relative w-full h-full rounded-2xl lg:rounded-3xl select-none pointer-events-none overflow-hidden"
        style={{
          gridArea: '9 / 9 / 17 / 25',
          backgroundColor: 'rgb(247, 247, 247)',
        }}
      >
        <img src="" alt="" />
      </a>
    </div>
  </div>
  );
};

export default GridLayout;