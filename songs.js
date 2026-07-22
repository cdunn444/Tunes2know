/* ==========================================================================
 *  YOUR SONGS  —  this is the only file you need to edit to add songs.
 * ==========================================================================
 *
 *  Each song is one { ... } block with:
 *
 *    id     – the Spotify track ID. Get it from a song's share link:
 *               https://open.spotify.com/track/3n3Ppam7vgaVa1iaRUc9Lp
 *                                              ^^^^^^^^^^^^^^^^^^^^^^ <- this part
 *             (In Spotify: right-click a song → Share → Copy Song Link,
 *              then keep only the code between "/track/" and any "?".)
 *
 *    note   – one or two sentences on why the song matters. This shows
 *             above the player. This is the important part!
 *
 *    title  – (optional) the song name, just so the list is easy to scan.
 *    artist – (optional) the artist name.
 *
 *  To add a song: copy a { ... } block, paste it into the right list below,
 *  then change the id and note. Keep the commas between blocks.
 *
 *  Leave id as "" to show a friendly placeholder instead of a player.
 * ========================================================================== */

const SONGS = {

  /* ---- To Know ---------------------------------------------------------- */
  know: [
    {
      id: "",
      title: "Your first “to know” song",
      artist: "",
      note: "Example — replace me. Paste a Spotify track ID above, then write one or two sentences on why this song is essential to know.",
    },
  ],

  /* ---- Learn on Bass ---------------------------------------------------- */
  bass: [
    {
      id: "",
      title: "Your first bass song",
      artist: "",
      note: "Example — replace me. A great bass line to learn, and a sentence on why it’s a good one to start with.",
    },
  ],

  /* ---- Learn on Guitar -------------------------------------------------- */
  guitar: [
    {
      id: "",
      title: "Your first guitar song",
      artist: "",
      note: "Example — replace me. A guitar part worth getting under your fingers, and why it’s worth the effort.",
    },
  ],

};
