import React from "react";

const Gallabox = () => {
  React.useEffect(() => {
    (function (w, d, s, u) {
      w.gbwawc = {
        url: u,
        options: {
          waId: "+91 9199955502",
          siteName: "Carvibes",
          siteTag: "Usually Reply in 15 Minutes",
          siteLogo:
            "https://res.cloudinary.com/dd0nu3k5p/image/upload/v1691349695/Mingmorsels_large_h7qd6k.svg",
          widgetPosition: "RIGHT",
          triggerMessage: "",
          welcomeMessage:
            " Hello, have an idea to Customize your car , we are here to elevate your ride with premium car accessories",
          brandColor: "#25D366",
          messageText: "I am interested in",
          replyOptions: ["Infotainment System", "Audio Systems", "PPF Body Wrap", "Alloy Wheels", "Seat Covers", "Android System Bluepunk", "360 Degree Camera"],
        },
      };
      var h = d.getElementsByTagName(s)[0],
        j = d.createElement(s);
      j.async = true;
      j.src = u + "/whatsapp-widget.min.js?_=" + Math.random();
      h.parentNode.insertBefore(j, h);
    })(window, document, "script", "https://waw.gallabox.com");
  }, []);

  return null;
};

export default Gallabox;
