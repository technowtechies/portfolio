import React from "react";

const Gallabox = () => {
  React.useEffect(() => {
    (function (w, d, s, u) {
      w.gbwawc = {
        url: u,
        options: {
          waId: "+91 8884102020",
          siteName: "mingmorsels",
          siteTag: "Usually reply in 15 minutes",
          siteLogo:
            "https://res.cloudinary.com/dd0nu3k5p/image/upload/v1691349695/Mingmorsels_large_h7qd6k.svg",
          widgetPosition: "RIGHT",
          triggerMessage: "",
          welcomeMessage:
            "Our products are made with the highest quality ingredients with best in industry standard practices.",
          brandColor: "#25D366",
          messageText: "I am interested in",
          replyOptions: ["Cookies", "Muffins", "Call back"],
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
