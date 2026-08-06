/* ============================================================================
 *  25 Tunes to Know on Bass — song data
 * ============================================================================
 *
 *  This is the only file you edit to change the songs. Each song is one object,
 *  in countdown order (the first one shows as #1):
 *
 *    {
 *      id:       "3n3Ppam7vgaVa1iaRUc9Lp",   // Spotify TRACK id — from a track's
 *                                             //   share link: open.spotify.com/track/<ID>
 *                                             //   (keep only the part after /track/,
 *                                             //    before any "?")
 *      title:    "Song name",
 *      artist:   "Artist",
 *      analysis: "Why this bassline matters — a sentence or two.",
 *      tab:      "",   // optional: paste an exact Ultimate Guitar tab URL here.
 *                      //   If blank, a UG search link is built automatically.
 *    }
 *
 *  The track ids below were matched from your "Bass in Yo Face" playlist, and
 *  the "analysis" notes are starter drafts — edit them to make them yours.
 *  Leave an id as "" to show a placeholder card instead of a player.
 * ==========================================================================*/

const PLAYLIST_URL = "https://open.spotify.com/playlist/6DWblW9d44zSp3zHBcA3KR";

const SONGS = [
  { id: "2eF8pWbiivYsYRpbntYsnc", title: "Signed, Sealed, Delivered (I'm Yours)", artist: "Stevie Wonder",
    analysis: "A joyful Motown groove where the bass bounces and never sits still under the horns. Great for hearing how a busy, syncopated line can still lock a whole band together.", tab: "" },

  { id: "4N0TP4Rmj6QQezWV88ARNJ", title: "Superstition", artist: "Stevie Wonder",
    analysis: "The low end here is pure funk pocket — Stevie played most of it himself, and it sits perfectly behind the beat. Learn it to feel how space and repetition are what make funk hit.", tab: "" },

  { id: "0d28khcov6AiegSCpG5TuT", title: "Feel Good Inc.", artist: "Gorillaz",
    analysis: "That deep, elastic bassline basically is the song's hook — simple, dubby, and enormous. A perfect early lesson that a great bass part doesn't need many notes.", tab: "" },

  { id: "3dPQuX8Gs42Y7b454ybpMR", title: "Seven Nation Army", artist: "The White Stripes",
    analysis: "Technically it's a guitar through an octave pedal, but it's the first riff almost every bassist learns and it sounds massive on bass. A confidence-builder to start with.", tab: "" },

  { id: "4cDMYi7G5Ht846U9oyWySM", title: "Come Together", artist: "The Beatles",
    analysis: "Paul McCartney's slinky, swampy bass is the spine of the song and one of the most recognizable lines in rock. Study how melodic and vocal a bass part can be.", tab: "" },

  { id: "72IGjRtsOv6kde11MBDALW", title: "Penny Lane", artist: "The Beatles",
    analysis: "McCartney at his most melodic — the bass practically sings its own counter-melody under the tune. A masterclass in playing melody, not just root notes.", tab: "" },

  { id: "0ofHAoxe9vBkTCp2UQIavz", title: "Dreams", artist: "Fleetwood Mac",
    analysis: "John McVie's steady, hypnotic groove holds the whole song in place while everything else floats above it. Proof that simple and solid is a superpower.", tab: "" },

  { id: "0q21FNwES2bbtcduB6kjEU", title: "Dancing in the Moonlight", artist: "King Harvest",
    analysis: "A breezy, bouncing bassline that keeps the song feeling light and warm. Good practice for a smooth, even eighth-note feel.", tab: "" },

  { id: "7J1uxwnxfQLu4APicE5Rnj", title: "Billie Jean", artist: "Michael Jackson",
    analysis: "Louis Johnson's bassline is one of the most iconic ever recorded — that relentless figure basically defines the song. Learn it and you'll understand what players mean by 'the pocket'.", tab: "" },

  { id: "3S2R0EVwBSAVMd5UMgKTL0", title: "Thriller", artist: "Michael Jackson",
    analysis: "Another tight, funky Louis Johnson groove that's endlessly danceable. Great for locking in with drum-machine precision.", tab: "" },

  { id: "5vdp5UmvTsnMEMESIF2Ym7", title: "Another One Bites the Dust", artist: "Queen",
    analysis: "John Deacon built the whole song around this bassline, and it's one of the most famous in history. A must-know study in disco-funk feel and knowing when to rest.", tab: "" },

  { id: "0vFOzaXqZHahrZp6enQwQb", title: "Money", artist: "Pink Floyd",
    analysis: "Roger Waters' bass riff struts in an unusual 7/4 time — count it out and it'll teach you to feel odd time signatures. Recognizable from the very first note.", tab: "" },

  { id: "3LRJbFT9rKoKv4aW7PuBJC", title: "Longview", artist: "Green Day",
    analysis: "Mike Dirnt's rubbery, walking bassline carries the whole verse and is a rite of passage for punk bassists. Fun, and surprisingly tricky to keep clean.", tab: "" },

  { id: "3SdTKo2uVsxFblQjpScoHy", title: "Stand By Me", artist: "Ben E. King",
    analysis: "The gentle walking bassline is the heartbeat of the song and one of the most-covered lines around. A perfect gateway to feeling how bass and drums lock together.", tab: "" },

  { id: "0Mtap72W3ryybPdvsGBTy7", title: "Iron Man", artist: "Black Sabbath",
    analysis: "Geezer Butler doubles Tony Iommi's monster riff, and playing it teaches the power of heavy, deliberate bass. Slow, mean, and very satisfying.", tab: "" },

  { id: "2fuCquhmrzHpu5xcA1ci9x", title: "Under Pressure", artist: "Queen & David Bowie",
    analysis: "John Deacon's six-note riff might be the most famous in rock (yes, the one Vanilla Ice later borrowed). Simple to play, impossible to forget.", tab: "" },

  { id: "57Xjny5yNzAcsxnusKmAfA", title: "Reptilia", artist: "The Strokes",
    analysis: "Nikolai Fraiture's driving, melodic bassline is the engine of the song and a great intro to modern indie-rock bass. Steady eighth-notes with attitude.", tab: "" },

  { id: "6cgACzCw1TtkZx7hMxEPsl", title: "Bombtrack", artist: "Rage Against the Machine",
    analysis: "Tim Commerford kicks the whole song off with a snaking, funky-metal bass figure. Learn it to feel how bass can be heavy and slippery at once.", tab: "" },

  { id: "7w87IxuO7BDcJ3YUqCyMTT", title: "Pumped Up Kicks", artist: "Foster the People",
    analysis: "That clean, catchy bass hook basically carries the tune — few notes, maximum earworm. Great for practicing tone and feel over flash.", tab: "" },

  { id: "2dCmGcEOQrMQhMMS8Vj7Ca", title: "Super Freak", artist: "Rick James",
    analysis: "The two-note funk riff is so iconic it launched a second hit when MC Hammer sampled it. Pure proof that simplicity plus attitude equals a classic.", tab: "" },

  { id: "6we13PM5Nbcw57rzSkT7Mx", title: "Can't Stop", artist: "Red Hot Chili Peppers",
    analysis: "Flea's syncopated, punchy bassline is a workout in tight funk-rock rhythm. Once it's under your fingers, your timing will level up.", tab: "" },

  { id: "48UPSzbZjgc449aqz8bxox", title: "Californication", artist: "Red Hot Chili Peppers",
    analysis: "Here Flea shows restraint — a melodic, supportive line that serves the song instead of showing off. A lesson in taste over chops.", tab: "" },

  { id: "3whRKAOlJ0M3banzcChvQv", title: "Get Up Offa That Thing", artist: "James Brown",
    analysis: "Pure James Brown funk, where the bass locks into a relentless one-chord groove. Learn it to understand that funk is about feel, not notes.", tab: "" },

  { id: "2gTIfTr9XOv7Brek0785J9", title: "Cuerpo y Alma", artist: "Esperanza Spalding",
    analysis: "Spalding sings while playing intricate upright bass, showing the instrument as a lead, melodic voice. Aspirational listening for where bass can eventually go.", tab: "" },

  { id: "5DjnapHOsR30xp0MJaj4u9", title: "Sweet Home Chicago", artist: "The Blues Brothers",
    analysis: "A classic 12-bar blues shuffle — the foundation every bassist should know cold. Master this feel and you can sit in with almost any blues band.", tab: "" },
];
