/* ============================================================================
 *  25 Tunes to Know — song data (Side A: Bass · Side B: Guitar)
 * ============================================================================
 *
 *  This is the only file you edit to change the songs or header copy.
 *
 *  Each side (bass / guitar) has:
 *    tabLabel – the text on its switcher button
 *    title    – the big headline shown when that side is active
 *    subhead  – the line under the headline
 *    playlist – Spotify playlist URL for the header button ("" hides the button)
 *    songs    – the countdown, in order (first = #1)
 *
 *  Each song is:
 *    {
 *      id:       "3n3Ppam7vgaVa1iaRUc9Lp",   // Spotify TRACK id — from a track's
 *                                             //   share link: open.spotify.com/track/<ID>
 *                                             //   (keep the part after /track/, before "?")
 *      title:    "Song name",
 *      artist:   "Artist",
 *      analysis: "Why it matters — a sentence or two.",
 *      tab:      "",   // optional exact Ultimate Guitar tab URL.
 *                      //   Blank ⇒ auto UG search for "<artist> <title> <instrument>".
 *    }
 *
 *  Leave id as "" to show a placeholder card (no player).
 * ==========================================================================*/

const SECTIONS = {

  /* ---- Side A · Bass ----------------------------------------------------- */
  bass: {
    tabLabel: "Side A · Bass",
    subhead: "Master your bass face while learning these essential grooves. Some are hard to learn but all are fun to play!",
    playlist: "https://open.spotify.com/playlist/6DWblW9d44zSp3zHBcA3KR",
    songs: [
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
    ],
  },

  /* ---- Side B · Guitar --------------------------------------------------- */
  /* Placeholder scaffold: replace with the real 25 guitar songs (same shape
     as the bass list above), and add the guitar playlist URL. */
  guitar: {
    tabLabel: "Side B · Guitar",
    subhead: "Turn up the volume to 11 with these classic guitar tracks. Learn a handful of chords and you'll be able to play most songs out there!",
    playlist: "https://open.spotify.com/playlist/1wHuNOuYScGEJJBRBZUbM9",
    /* Shown as a card above the songs on this side.
       Each chord's frets are low E → high e: -1 = don't play, 0 = open string,
       1+ = fret number. These draw the mini chord diagrams. */
    intro: {
      title: "Start here: lock down these chords",
      text: "Get these eight under your fingers and you've unlocked about 90% of the songs out there — including most of the list below.",
      chords: [
        { name: "G",  frets: [3, 2, 0, 0, 0, 3] },
        { name: "C",  frets: [-1, 3, 2, 0, 1, 0] },
        { name: "D",  frets: [-1, -1, 0, 2, 3, 2] },
        { name: "Em", frets: [0, 2, 2, 0, 0, 0] },
        { name: "Am", frets: [-1, 0, 2, 2, 1, 0] },
        { name: "A",  frets: [-1, 0, 2, 2, 2, 0] },
        { name: "E",  frets: [0, 2, 2, 1, 0, 0] },
        { name: "Dm", frets: [-1, -1, 0, 2, 3, 1] },
      ],
    },
    songs: [
      { id: "5CQ30WqJwcep0pYcV4AMNc", title: "Stairway to Heaven", artist: "Led Zeppelin",
        analysis: "The fingerpicked intro is the rite of passage for guitarists — arpeggios that build into one of the greatest solos ever recorded. Learn it in pieces; it teaches a little of everything.", tab: "" },

      { id: "5dOR5PYfqQNLru3cMuwYg8", title: "Dust in the Wind", artist: "Kansas",
        analysis: "The classic Travis-picking study: thumb and fingers rolling steadily through simple shapes. Once this pattern clicks, a whole world of fingerstyle opens up.", tab: "" },

      { id: "3pRaLNL3b8x5uBOcsgvdqM", title: "Hallelujah", artist: "Jeff Buckley",
        analysis: "Gentle 6/8 arpeggios where every note of the chord gets to ring. A masterclass in touch, patience, and letting space do the emotional work.", tab: "" },

      { id: "6mFkJmJqdDVQ1REhVfGgd1", title: "Wish You Were Here", artist: "Pink Floyd",
        analysis: "That opening riff weaves single notes through open G and Em shapes — chords you already know from the primer above. Loose, singable, and endlessly satisfying.", tab: "" },

      { id: "48UPSzbZjgc449aqz8bxox", title: "Californication", artist: "Red Hot Chili Peppers",
        analysis: "A clean, melodic two-chord picking pattern that proves electric guitar doesn't have to be loud to be memorable. Great for practicing smooth chord-to-chord motion.", tab: "" },

      { id: "5ghIJDpPoe3CfHMGu71E6T", title: "Smells Like Teen Spirit", artist: "Nirvana",
        analysis: "Four power chords and a wall of attitude — the riff that made a generation pick up guitar. Learn the quiet-verse/loud-chorus trick; it's the whole grunge playbook.", tab: "" },

      { id: "5wj4E6IsrVtn8IBJQOd0Cl", title: "Wonderwall", artist: "Oasis",
        analysis: "The campfire classic: capo on, keep two fingers planted, and let the top strings ring through every chord. It's the payoff for learning Em, G, D, and A.", tab: "" },

      { id: "7iN1s7xHE4ifF5povM6A48", title: "Let It Be", artist: "The Beatles",
        analysis: "C, G, Am, F — the four-chord progression that powers half of popular music, in its most famous form. Proof that the primer chords above really do unlock everything.", tab: "" },

      { id: "5jgFfDIR6FR0gvlA56Nakr", title: "Blackbird", artist: "The Beatles",
        analysis: "McCartney's fingerpicking étude — two moving voices over an open-string drone. Slow at first, hypnotic once it flows, and gorgeous forever after.", tab: "" },

      { id: "28cnXtME493VX9NOw9cIUh", title: "Hurt", artist: "Johnny Cash",
        analysis: "Three sparse chords, barely strummed — and one of the most devastating recordings ever made. The lesson: what you leave out matters more than what you play.", tab: "" },

      { id: "3PQLYVskjUeRmRIfECsL0X", title: "No Woman, No Cry", artist: "Bob Marley & The Wailers",
        analysis: "C, G, Am, F again — this time with reggae's off-beat upstroke skank. Learn to feel beats 2 and 4 and your rhythm hand levels up for good.", tab: "" },

      { id: "7f8fIUg4Dgch0I8wjSpkFa", title: "Can't Help Falling in Love", artist: "Elvis Presley",
        analysis: "Slow 6/8 arpeggios through gentle open shapes — the song every room goes quiet for. A beautiful first 'performance piece' once the chords are steady.", tab: "" },

      { id: "40riOy7x9W7GXjyGp4pjAv", title: "Hotel California", artist: "Eagles",
        analysis: "A hypnotic chord cycle under one of rock's great harmonized twin-guitar solos. The verse chords are a workout; the ending duel is a destination.", tab: "" },

      { id: "1aUTJpaxVd8LpUfbb19wZH", title: "Yellow", artist: "Coldplay",
        analysis: "Big open-position chords with ringing color notes and a steady, washy strum. A great study in making simple shapes sound huge.", tab: "" },

      { id: "70LcF31zb1H0PyJoS1Sx1r", title: "Creep", artist: "Radiohead",
        analysis: "Four chords, one famous move: major sliding to minor right when the lyric turns. Plus the crunching pre-chorus stabs — the most satisfying noise a beginner can make.", tab: "" },

      { id: "2aoo2jlRnM3A0NyLQqMN2f", title: "All Along the Watchtower", artist: "Jimi Hendrix",
        analysis: "A three-chord loop you already know from the primer, transformed by Hendrix into a monument. Study how rhythm playing and lead playing blur into one voice.", tab: "" },

      { id: "7yq4Qj7cqayVTp3FF9CWbm", title: "Riptide", artist: "Vance Joy",
        analysis: "Am, G, C around and around with a bouncy strum — three primer chords and you're playing the whole song tonight. Instant-gratification fuel for practice.", tab: "" },

      { id: "2ihCaVdNZmnHZWt0fvAM7B", title: "Little Talks", artist: "Of Monsters and Men",
        analysis: "Simple chords driven by dynamics — soft picking in the verses, big stabs on the horn hits. A fun study in making acoustic strumming feel like a full band.", tab: "" },

      { id: "1Y373MqadDRtclJNdnUXVc", title: "Paranoid", artist: "Black Sabbath",
        analysis: "The galloping power-chord riff that basically invented metal rhythm guitar. Builds downpicking stamina fast — and sounds great even played slowly.", tab: "" },

      { id: "4sojCCLEco1pqIEujphKHe", title: "House of the Rising Sun", artist: "The Animals",
        analysis: "The arpeggio starter kit: Am, C, D, F, E rolled one note at a time in waltz time. Every chord is in the primer above — this song is why you learned them.", tab: "" },

      { id: "34gCuhDGsG4bRPIf9bb02f", title: "Thinking Out Loud", artist: "Ed Sheeran",
        analysis: "A soulful groove built on muted, percussive strumming — the 'heartbeat' feel matters more than the (easy) chords. Great for learning to strum like a drummer.", tab: "" },

      { id: "7jGzYUZ2Bgg8BDfYlQRfn8", title: "Wild Thing", artist: "The Troggs",
        analysis: "A, D, E — three primer chords, maximum swagger, and quite possibly the first song ever assigned to a beginner. Learn it in ten minutes; play it forever.", tab: "" },

      { id: "6YIggUJW3ttAAPRdnki8RM", title: "Disarm", artist: "The Smashing Pumpkins",
        analysis: "Huge acoustic strums under bells and strings — the same few shapes hit with real drama. A lesson in playing simply but meaning it.", tab: "" },

      { id: "6A6bRcB9OYABkhvWI4Rt9m", title: "Everlong (Acoustic)", artist: "Foo Fighters",
        analysis: "Drop the low string to D and the whole song sits under two fingers. This stripped version shows how a driving rhythm part can carry a song on its own.", tab: "" },

      { id: "5B8Pnf983pH6AnYxlDtlT0", title: "Before You Accuse Me", artist: "Bo Diddley",
        analysis: "A 12-bar blues classic — the same foundation as the bass side's closer, now under your fingers as chords and shuffle rhythm. Learn this form and you can jam with anyone, anywhere.", tab: "" },
    ],
  },

};
