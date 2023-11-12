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
            "https://s3-alpha-sig.figma.com/img/f22f/bd9f/10507b295a63295a49f6c6446b5149e7?Expires=1700438400&Signature=ABK11kzC8wF28xTrD9osrezqiEnzbqRjHjOoJI40gnDHzg3uyfRQXC1SOsF-uA0kspqQQ01soJFOVKRQwYvhu98FDrmIg0gFN6cjFKx3jg8BqNIahYsRGL0hIF5qy7s5rLtqXmQImUsrQDZyA2YcsTCgBne6632OxcI0R4l1YSFuHH9sx2N-WzsPjmtDMOYptX9WY4utpdVg739aVGfennZhgVYTKSwmnYnmvsv9MFrxYcZurqeNDslQqTpdp~EpZKI51yj89LRqdYDqvY-vqgtHUG46x1wxl~fxVPNPn8B-RjELEeEKjLXhJuAeliH8eLgSOHId-ZuvtzLVkQpkuw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
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
