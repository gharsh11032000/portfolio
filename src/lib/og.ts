/**
 * Loads the avatar bundled with the OG image routes as a data URL, so the
 * images render without fetching from the deployed site.
 */
export async function getAvatarDataUrl() {
  try {
    const buffer = await fetch(
      new URL("../../public/harsh-gupta.jpg", import.meta.url)
    ).then((res) => res.arrayBuffer());
    let binary = "";
    const bytes = new Uint8Array(buffer);
    for (let i = 0; i < bytes.length; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return `data:image/jpeg;base64,${btoa(binary)}`;
  } catch (error) {
    console.error("Failed to load avatar:", error);
    return undefined;
  }
}
