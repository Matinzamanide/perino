const Header = () => {
    return ( 
        <header
  className="fixed top-0 left-0 right-0 w-full px-[16px] lg:px-[120px] flex items-end justify-center h-[72px] lg:h-[96px] mx-auto z-20"
  style={{ maxWidth: "2000px" }}
>
  <div
    className="relative w-full max-w-[1120px] h-[56px] lg:h-[80px] flex items-center lg:justify-between rounded-full px-4 lg:px-8 shadow-[0_0_16px_0_#6c23371f]"
    style={{ backgroundColor: "#FFFFFF" }}
  >
    {/* Menu Icon */}
    <div className="relative flex items-center z-20">
      <div className="w-6 h-6 flex items-center justify-center ml-4 cursor-pointer">
        <svg
          className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium w-7 h-auto fill-black"
          focusable="false"
          aria-hidden="true"
          viewBox="0 0 24 24"
          data-testid="MenuIcon"
        >
          <path d="M3 18h18v-2H3zm0-5h18v-2H3zm0-7v2h18V6z"></path>
        </svg>
      </div>
      {/* Logo */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 86 41"
        className="w-[43px] h-auto pointer-events-none"
        style={{ fill: "#F24F7A" }}
      >
        {/* Add your SVG paths here */}
      </svg>
      <div
        className="w-[1px] h-3 mx-2"
        style={{ backgroundColor: "#EFEFEF" }}
      ></div>
      <p
        className="select-none"
        style={{
          color: "#7E7E7E",
          fontWeight: 600,
          fontSize: "13px",
          lineHeight: "160%",
          letterSpacing: "-0.195px",
        }}
      >
        دوستته، مشاورته، مراقبته
      </p>
    </div>

    {/* Dropdown Menu */}
    <div
      className="w-full absolute top-0 left-0 right-0 flex flex-col rounded-b-3xl px-4 duration-100 overflow-hidden z-10"
      style={{
        marginTop: "24px",
        backgroundColor: "#FFFFFF",
        paddingTop: 0,
        maxHeight: 0,
        boxShadow: "none",
      }}
    >
      {/* Links */}
      {[
        { label: "صفحه اصلی", href: "/" },
        { label: "مجله سلامت", href: "https://impo.app/blogs" },
        { label: "ایمپو آقایان", href: "https://impo.app/men" },
        { label: "همدلی", href: "https://impo.app/sympathy" },
        { label: "تقویم قاعدگی", href: "/tracker" },
        { label: "فرصت‌های شغلی", href: "https://impo.app/careers" },
      ].map((item, index) => (
        <a
          key={index}
          aria-label="HeaderMobileLinks"
          style={{
            opacity: 0,
            height: "68px",
            backgroundColor: "#F7F7F7",
          }}
          className="hover:opacity-80 duration-200 rounded-full flex items-center mb-4 px-4"
          href={item.href}
        >
          <p
            className="select-none"
            style={{
              color: "#000000",
              fontWeight: 600,
              fontSize: "16px",
              lineHeight: "140%",
              letterSpacing: "-0.24px",
            }}
          >
            {item.label}
          </p>
        </a>
      ))}
    </div>
  </div>
</header>
     );
}
 
export default Header;