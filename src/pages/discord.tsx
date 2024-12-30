import { useEffect } from "react";
import Head from "next/head";

const DiscordPage: React.FC = () => {
  useEffect(() => {
    // Redirige al enlace de Discord
    window.location.href = "https://discord.com/invite/BrhTYUUsJk";
  }, []);

  return (
    <>
      <Head>
        <link rel="icon" href="/discord-icon.ico" /> {/* Cambia el favicon */}
        <title>Redirigiendo a Discord...</title>
      </Head>
      <p>Redirigiendo a Discord...</p>
    </>
  );
};

export default DiscordPage;
