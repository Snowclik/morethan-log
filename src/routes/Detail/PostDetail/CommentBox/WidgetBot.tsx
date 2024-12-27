import React from "react";
import WidgetBot from "@widgetbot/react-embed";

type Props = {
  server: string;
  channel: string;
};

const WidgetBotComponent: React.FC<Props> = ({ server, channel }) => {
  return (
    <div>
      <WidgetBot
        server={server}
        channel={channel}
        style={{ width: "100%", height: "600px" }} // Ajusta según necesites
      />
    </div>
  );
};

export default WidgetBotComponent;
