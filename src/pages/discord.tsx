import { useEffect } from "react";

const DiscordPage: React.FC = () => {
  useEffect(() => {
    // Cambia este enlace por el enlace real de tu página de Discord
    window.location.href = "https://discord.gg/BrhTYUUsJk";
  }, []);

  return <p>Redirigiendo a Discord...</p>;
};

export default DiscordPage;
