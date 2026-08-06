/* ============================================================================
 *  25 Tunes to Know on Bass — song data
 * ============================================================================
 *
 *  This is the only file you edit to change the songs. When the real songs are
 *  added, this holds one object per song, in countdown order (first = #1):
 *
 *    {
 *      id:       "3n3Ppam7vgaVa1iaRUc9Lp",   // Spotify TRACK id — from a track's
 *                                             //   share link: open.spotify.com/track/<ID>
 *                                             //   (keep only the part after /track/ and
 *                                             //    before any "?")
 *      title:    "Song name",
 *      artist:   "Artist",
 *      analysis: "Why this bassline matters — a sentence or two.",
 *      tab:      "",   // optional: paste an exact Ultimate Guitar tab URL here.
 *                      //   If left blank, a UG search link is built automatically
 *                      //   from the title + artist.
 *    }
 *
 *  Leave id as "" to show a placeholder card (no player).
 * ==========================================================================*/

const PLAYLIST_URL = "https://open.spotify.com/playlist/6DWblW9d44zSp3zHBcA3KR";

/* Placeholder scaffold: 25 empty cards so the layout can be previewed.
   This gets replaced with the real 25 songs once they're provided. */
const SONGS = Array.from({ length: 25 }, function (_, i) {
  return {
    id: "",
    title: "Bass song #" + (i + 1),
    artist: "",
    analysis: "Your “what to know” note for this bassline will go here — a sentence or two on why it matters and what to listen for.",
    tab: "",
  };
});
