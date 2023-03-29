import { Podcast } from '../types/Podcast'
import { PodcastDetail } from '../types/PodcastDetail'

export const mockPodcast: Podcast = {
  'im:name': {
    label: 'The Joe Budden Podcast',
  },
  'im:image': [
    {
      label:
        'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/55x55bb.png',
      attributes: {
        height: '55',
      },
    },
    {
      label:
        'https://is5-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/60x60bb.png',
      attributes: {
        height: '60',
      },
    },
    {
      label:
        'https://is1-ssl.mzstatic.com/image/thumb/Podcasts113/v4/f2/21/fa/f221fabd-017f-5125-633b-f1fe4f39802a/mza_182995249085044287.jpg/170x170bb.png',
      attributes: {
        height: '170',
      },
    },
  ],
  summary: {
    label:
      'Tune into Joe Budden and his friends. Follow along the crazy adventures of these very random friends.',
  },
  'im:price': {
    label: 'Get',
    attributes: {
      amount: '0',
      currency: 'USD',
    },
  },
  'im:contentType': {
    attributes: {
      term: 'Podcast',
      label: 'Podcast',
    },
  },
  title: {
    label: 'The Joe Budden Podcast - The Joe Budden Network',
  },
  link: {
    attributes: {
      rel: 'alternate',
      type: 'text/html',
      href: 'https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2',
    },
  },
  id: {
    label:
      'https://podcasts.apple.com/us/podcast/the-joe-budden-podcast/id1535809341?uo=2',
    attributes: {
      'im:id': '1535809341',
    },
  },
  'im:artist': {
    label: 'The Joe Budden Network',
  },
  category: {
    attributes: {
      'im:id': '1310',
      term: 'Music',
      scheme: 'https://podcasts.apple.com/us/genre/podcasts-music/id1310?uo=2',
      label: 'Music',
    },
  },
  'im:releaseDate': {
    label: '2023-03-22T00:00:00-07:00',
    attributes: {
      label: 'March 22, 2023',
    },
  },
}

export const mockEpisodes: PodcastDetail['results'] = [
  {
    country: 'USA',
    collectionViewUrl:
      'https://itunes.apple.com/us/podcast/drink-champs/id1096830182?mt=2&uo=4',
    trackTimeMillis: 6203000,
    feedUrl:
      'https://www.omnycontent.com/d/playlist/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/df6d181a-09ea-4bf2-adc6-ae33005f650d/podcast.rss',
    closedCaptioning: 'none',
    collectionId: 1096830182,
    collectionName: 'Drink Champs',
    artworkUrl60:
      'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/1c/e3/d3/1ce3d3e2-f777-5f5c-ecef-ceae87572ce2/mza_10237783600134710505.jpg/60x60bb.jpg',
    artistViewUrl:
      'https://itunes.apple.com/us/artist/interval-presents/284341002?mt=2&uo=4',
    contentAdvisoryRating: 'Explicit',
    trackViewUrl:
      'https://podcasts.apple.com/us/podcast/episode-356-w-joe-budden/id1096830182?i=1000605680464&uo=4',
    episodeUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/ea8a9b2f-2d94-441e-9e30-afce00fdb496/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    trackId: 1000605680464,
    trackName: 'Episode 356 w/ Joe Budden',
    description:
      'N.O.R.E. & DJ EFN are the Drink Champs. In this episode the Champs chop it up with the one and only, Joe Budden! Drink Champs Alumni, Joe Budden joins us once again to talk about everything! Joe shares stories of his career in Hip-Hop and Podcasting, past relationships, and much much more!Lots of great stories that you don’t want to miss!!Make some noise for Joe Budden!!! 💐💐💐🏆🏆🏆\n\n*Subscribe to Patreon NOW for exclusive content, discount codes, M&G’s + more:  🏆*\n\nhttps://www.patreon.com/drinkchamps\n\n*Listen and subscribe at https://www.drinkchamps.com\n\n Follow Drink Champs:\n\nhttps://www.instagram.com/drinkchamps\n\nhttps://www.twitter.com/drinkchamps\n\nhttps://www.facebook.com/drinkchamps\n\nhttps://www.youtube.com/drinkchamps\n\n DJ EFN\n\nhttps://www.crazyhood.com\n\nhttps://www.instagram.com/whoscrazy\n\nhttps://www.twitter.com/djefn\n\nhttps://www.facebook.com/crazyhoodproductions\n\n N.O.R.E.\n\nhttps://www.instagram.com/therealnoreaga\n\nhttps://www.twitter.com/noreaga\n\n*Check out our Culture Cards NFT project by joining The Culture Cards Discord: 👇*\nSee omnystudio.com/listener for privacy information.',
    episodeFileExtension: 'mp3',
    previewUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/ea8a9b2f-2d94-441e-9e30-afce00fdb496/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    artistIds: [284341002],
    releaseDate: '2023-03-24T07:01:00Z',
    shortDescription: '',
    episodeContentType: 'audio',
    artworkUrl600:
      'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/1c/e3/d3/1ce3d3e2-f777-5f5c-ecef-ceae87572ce2/mza_10237783600134710505.jpg/600x600bb.jpg',
    kind: 'podcast-episode',
    wrapperType: 'podcastEpisode',
    artworkUrl160:
      'https://is1-ssl.mzstatic.com/image/thumb/Podcasts116/v4/1c/e3/d3/1ce3d3e2-f777-5f5c-ecef-ceae87572ce2/mza_10237783600134710505.jpg/160x160bb.jpg',
    episodeGuid: 'ea8a9b2f-2d94-441e-9e30-afce00fdb496',
    genres: [
      {
        name: 'Music',
        id: '1310',
      },
    ],
  },
  {
    country: 'USA',
    collectionViewUrl:
      'https://itunes.apple.com/us/podcast/drink-champs/id1096830182?mt=2&uo=4',
    trackTimeMillis: 7292000,
    feedUrl:
      'https://www.omnycontent.com/d/playlist/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/df6d181a-09ea-4bf2-adc6-ae33005f650d/podcast.rss',
    closedCaptioning: 'none',
    collectionId: 1096830182,
    collectionName: 'Drink Champs',
    artworkUrl60:
      'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/f0/61/0b/f0610b70-d2b6-afdc-3248-a124c68d2b00/mza_9458038826289430981.jpg/60x60bb.jpg',
    artistViewUrl:
      'https://itunes.apple.com/us/artist/interval-presents/284341002?mt=2&uo=4',
    contentAdvisoryRating: 'Explicit',
    trackViewUrl:
      'https://podcasts.apple.com/us/podcast/episode-355-w-the-isley-brothers/id1096830182?i=1000604611557&uo=4',
    episodeUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/1492d1bc-b01b-45d9-8334-afc701176655/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    trackId: 1000604611557,
    trackName: 'Episode 355 w/ The Isley Brothers',
    description:
      'N.O.R.E. & DJ EFN are the Drink Champs. In this episode the Champs chop it up with the legends themselves, The Isley Brothers! The iconic group share stories of their journey than spans nearly seven decades! The brothers share stories of Stevie Wonder, Michael Jackson, The Beatles, creating classic records and much much more! Lots of great stories that you don’t want to miss!!Make some noise!!! 💐💐💐🏆🏆🏆\n\n*Subscribe to Patreon NOW for exclusive content, discount codes, M&G’s + more:  🏆*\n\nhttps://www.patreon.com/drinkchamps\n\n*Listen and subscribe at https://www.drinkchamps.com\n\n Follow Drink Champs:\n\nhttps://www.instagram.com/drinkchamps\n\nhttps://www.twitter.com/drinkchamps\n\nhttps://www.facebook.com/drinkchamps\n\nhttps://www.youtube.com/drinkchamps\n\n DJ EFN\n\nhttps://www.crazyhood.com\n\nhttps://www.instagram.com/whoscrazy\n\nhttps://www.twitter.com/djefn\n\nhttps://www.facebook.com/crazyhoodproductions\n\n N.O.R.E.\n\nhttps://www.instagram.com/therealnoreaga\n\nhttps://www.twitter.com/noreaga\n\n*Check out our Culture Cards NFT project by joining The Culture Cards Discord: 👇*\nSee omnystudio.com/listener for privacy information.',
    episodeFileExtension: 'mp3',
    previewUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/1492d1bc-b01b-45d9-8334-afc701176655/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    artistIds: [284341002],
    releaseDate: '2023-03-17T07:01:00Z',
    shortDescription: '',
    episodeContentType: 'audio',
    artworkUrl600:
      'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/f0/61/0b/f0610b70-d2b6-afdc-3248-a124c68d2b00/mza_9458038826289430981.jpg/600x600bb.jpg',
    kind: 'podcast-episode',
    wrapperType: 'podcastEpisode',
    artworkUrl160:
      'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/f0/61/0b/f0610b70-d2b6-afdc-3248-a124c68d2b00/mza_9458038826289430981.jpg/160x160bb.jpg',
    episodeGuid: '1492d1bc-b01b-45d9-8334-afc701176655',
    genres: [
      {
        name: 'Music',
        id: '1310',
      },
    ],
  },
  {
    country: 'USA',
    collectionViewUrl:
      'https://itunes.apple.com/us/podcast/drink-champs/id1096830182?mt=2&uo=4',
    trackTimeMillis: 10721000,
    feedUrl:
      'https://www.omnycontent.com/d/playlist/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/df6d181a-09ea-4bf2-adc6-ae33005f650d/podcast.rss',
    closedCaptioning: 'none',
    collectionId: 1096830182,
    collectionName: 'Drink Champs',
    artworkUrl60:
      'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/ad/fb/8f/adfb8ff8-8fda-58ec-3799-161b8cc63f13/mza_14518892150608657232.jpg/60x60bb.jpg',
    artistViewUrl:
      'https://itunes.apple.com/us/artist/interval-presents/284341002?mt=2&uo=4',
    contentAdvisoryRating: 'Explicit',
    trackViewUrl:
      'https://podcasts.apple.com/us/podcast/episode-354-w-crazy-legs/id1096830182?i=1000603563825&uo=4',
    episodeUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/d14ee1ee-ad20-47e3-bc6b-afc10007ef9d/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    trackId: 1000603563825,
    trackName: 'Episode 354 w/ Crazy Legs',
    description:
      'N.O.R.E. & DJ EFN are the Drink Champs. In this episode the Champs chop it up with the legendary Crazy Legs! From the legendary Rock Steady Crew, Crazy Legs shares his journey in hip-hop. Crazy Legs breaks down the origins of the terms “Break Dancing” & “B-Boy”. Crazy Legs shares stories of Wild Style, Rock Steady Crew and much much more! Lots of great stories that you don’t want to miss!!Make some noise!!! 💐💐💐🏆🏆🏆\n\n*Subscribe to Patreon NOW for exclusive content, discount codes, M&G’s + more:  🏆*\n\nhttps://www.patreon.com/drinkchamps\n\n*Listen and subscribe at https://www.drinkchamps.com\n\n Follow Drink Champs:\n\nhttps://www.instagram.com/drinkchamps\n\nhttps://www.twitter.com/drinkchamps\n\nhttps://www.facebook.com/drinkchamps\n\nhttps://www.youtube.com/drinkchamps\n\n DJ EFN\n\nhttps://www.crazyhood.com\n\nhttps://www.instagram.com/whoscrazy\n\nhttps://www.twitter.com/djefn\n\nhttps://www.facebook.com/crazyhoodproductions\n\n N.O.R.E.\n\nhttps://www.instagram.com/therealnoreaga\n\nhttps://www.twitter.com/noreaga\n\n*Check out our Culture Cards NFT project by joining The Culture Cards Discord: 👇*\nSee omnystudio.com/listener for privacy information.',
    episodeFileExtension: 'mp3',
    previewUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/d14ee1ee-ad20-47e3-bc6b-afc10007ef9d/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    artistIds: [284341002],
    releaseDate: '2023-03-10T08:01:00Z',
    shortDescription: '',
    episodeContentType: 'audio',
    artworkUrl600:
      'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/ad/fb/8f/adfb8ff8-8fda-58ec-3799-161b8cc63f13/mza_14518892150608657232.jpg/600x600bb.jpg',
    kind: 'podcast-episode',
    wrapperType: 'podcastEpisode',
    artworkUrl160:
      'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/ad/fb/8f/adfb8ff8-8fda-58ec-3799-161b8cc63f13/mza_14518892150608657232.jpg/160x160bb.jpg',
    episodeGuid: 'd14ee1ee-ad20-47e3-bc6b-afc10007ef9d',
    genres: [
      {
        name: 'Music',
        id: '1310',
      },
    ],
  },
  {
    country: 'USA',
    collectionViewUrl:
      'https://itunes.apple.com/us/podcast/drink-champs/id1096830182?mt=2&uo=4',
    trackTimeMillis: 8854000,
    feedUrl:
      'https://www.omnycontent.com/d/playlist/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/df6d181a-09ea-4bf2-adc6-ae33005f650d/podcast.rss',
    closedCaptioning: 'none',
    collectionId: 1096830182,
    collectionName: 'Drink Champs',
    artworkUrl60:
      'https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/20/fb/d8/20fbd840-c5f6-a47e-8de0-51d037ae6c75/mza_16108528387981318837.jpg/60x60bb.jpg',
    artistViewUrl:
      'https://itunes.apple.com/us/artist/interval-presents/284341002?mt=2&uo=4',
    contentAdvisoryRating: 'Explicit',
    trackViewUrl:
      'https://podcasts.apple.com/us/podcast/episode-353-family-episode-w-cnn-the-smoke-champs/id1096830182?i=1000602623601&uo=4',
    episodeUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/c35bd766-0327-4ca8-aa83-afb9001d319f/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    trackId: 1000602623601,
    trackName:
      'Episode 353 “Family Episode” w/ CNN, the Smoke Champs crew, Supa Cindy and the Drink Champs familia',
    description:
      'N.O.R.E. & DJ EFN are the Drink Champs. In this episode the Champs and the fam sit down and have a great time!This episode is all about the family! We’re joined by Capone, Supa Cindy, the Smoke Champs crew and the Drink Champs familia! Lots of great stories that you don’t want to miss!!Make some noise!!! 💐💐💐🏆🏆🏆\n\n*Subscribe to Patreon NOW for exclusive content, discount codes, M&G’s + more:  🏆*\n\nhttps://www.patreon.com/drinkchamps\n\n*Listen and subscribe at https://www.drinkchamps.com\n\n Follow Drink Champs:\n\nhttps://www.instagram.com/drinkchamps\n\nhttps://www.twitter.com/drinkchamps\n\nhttps://www.facebook.com/drinkchamps\n\nhttps://www.youtube.com/drinkchamps\n\n DJ EFN\n\nhttps://www.crazyhood.com\n\nhttps://www.instagram.com/whoscrazy\n\nhttps://www.twitter.com/djefn\n\nhttps://www.facebook.com/crazyhoodproductions\n\n N.O.R.E.\n\nhttps://www.instagram.com/therealnoreaga\n\nhttps://www.twitter.com/noreaga\n\n*Check out our Culture Cards NFT project by joining The Culture Cards Discord: 👇*\nSee omnystudio.com/listener for privacy information.',
    episodeFileExtension: 'mp3',
    previewUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/c35bd766-0327-4ca8-aa83-afb9001d319f/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    artistIds: [284341002],
    releaseDate: '2023-03-03T11:00:00Z',
    shortDescription: '',
    episodeContentType: 'audio',
    artworkUrl600:
      'https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/20/fb/d8/20fbd840-c5f6-a47e-8de0-51d037ae6c75/mza_16108528387981318837.jpg/600x600bb.jpg',
    kind: 'podcast-episode',
    wrapperType: 'podcastEpisode',
    artworkUrl160:
      'https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/20/fb/d8/20fbd840-c5f6-a47e-8de0-51d037ae6c75/mza_16108528387981318837.jpg/160x160bb.jpg',
    episodeGuid: 'c35bd766-0327-4ca8-aa83-afb9001d319f',
    genres: [
      {
        name: 'Music',
        id: '1310',
      },
    ],
  },
  {
    country: 'USA',
    collectionViewUrl:
      'https://itunes.apple.com/us/podcast/drink-champs/id1096830182?mt=2&uo=4',
    trackTimeMillis: 9870000,
    feedUrl:
      'https://www.omnycontent.com/d/playlist/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/df6d181a-09ea-4bf2-adc6-ae33005f650d/podcast.rss',
    closedCaptioning: 'none',
    collectionId: 1096830182,
    collectionName: 'Drink Champs',
    artworkUrl60:
      'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/fc/9c/fd/fc9cfd4a-93b6-9692-07a8-c575ac36bbb4/mza_14300855494944205072.jpg/60x60bb.jpg',
    artistViewUrl:
      'https://itunes.apple.com/us/artist/interval-presents/284341002?mt=2&uo=4',
    contentAdvisoryRating: 'Explicit',
    trackViewUrl:
      'https://podcasts.apple.com/us/podcast/episode-352-w-george-clinton/id1096830182?i=1000601397930&uo=4',
    episodeUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/2aca79ed-f40d-4cc1-a16c-afb2011a9735/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    trackId: 1000601397930,
    trackName: 'Episode 352 w/ George Clinton',
    description:
      'N.O.R.E. & DJ EFN are the Drink Champs. In this episode the Champs chop it up with the iconic, George Clinton!\nGeorge Clinton aka The Atomic Dog joins us as he shares stories from his historic career in music. George gives us so much game and shares stories about Prince, sampling music, his thoughts on Elvis and much much more!\nLots of great stories that you don’t want to miss!!\nMake some noise for George Clinton!!! 💐💐💐🏆🏆🏆\n\n*Subscribe to Patreon NOW for exclusive content, discount codes, M&G’s + more:  🏆*\n\nhttps://www.patreon.com/drinkchamps\n\n*Listen and subscribe at https://www.drinkchamps.com\n\n Follow Drink Champs:\n\nhttps://www.instagram.com/drinkchamps\n\nhttps://www.twitter.com/drinkchamps\n\nhttps://www.facebook.com/drinkchamps\n\nhttps://www.youtube.com/drinkchamps\n\n DJ EFN\n\nhttps://www.crazyhood.com\n\nhttps://www.instagram.com/whoscrazy\n\nhttps://www.twitter.com/djefn\n\nhttps://www.facebook.com/crazyhoodproductions\n\n N.O.R.E.\n\nhttps://www.instagram.com/therealnoreaga\n\nhttps://www.twitter.com/noreaga\n\n*Check out our Culture Cards NFT project by joining The Culture Cards Discord: 👇*\n\nhttps://discord.gg/theculturecards\nSee omnystudio.com/listener for privacy information.',
    episodeFileExtension: 'mp3',
    previewUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/2aca79ed-f40d-4cc1-a16c-afb2011a9735/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    artistIds: [284341002],
    releaseDate: '2023-02-24T08:00:00Z',
    shortDescription: '',
    episodeContentType: 'audio',
    artworkUrl600:
      'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/fc/9c/fd/fc9cfd4a-93b6-9692-07a8-c575ac36bbb4/mza_14300855494944205072.jpg/600x600bb.jpg',
    kind: 'podcast-episode',
    wrapperType: 'podcastEpisode',
    artworkUrl160:
      'https://is1-ssl.mzstatic.com/image/thumb/Podcasts126/v4/fc/9c/fd/fc9cfd4a-93b6-9692-07a8-c575ac36bbb4/mza_14300855494944205072.jpg/160x160bb.jpg',
    episodeGuid: '2aca79ed-f40d-4cc1-a16c-afb2011a9735',
    genres: [
      {
        name: 'Music',
        id: '1310',
      },
    ],
  },
  {
    country: 'USA',
    collectionViewUrl:
      'https://itunes.apple.com/us/podcast/drink-champs/id1096830182?mt=2&uo=4',
    trackTimeMillis: 11168000,
    feedUrl:
      'https://www.omnycontent.com/d/playlist/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/df6d181a-09ea-4bf2-adc6-ae33005f650d/podcast.rss',
    closedCaptioning: 'none',
    collectionId: 1096830182,
    collectionName: 'Drink Champs',
    artworkUrl60:
      'https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/14/e3/47/14e34799-421a-c242-5b67-1ad753ceeb0b/mza_16301894267974865804.jpg/60x60bb.jpg',
    artistViewUrl:
      'https://itunes.apple.com/us/artist/interval-presents/284341002?mt=2&uo=4',
    contentAdvisoryRating: 'Explicit',
    trackViewUrl:
      'https://podcasts.apple.com/us/podcast/episode-351-w-michael-blackson/id1096830182?i=1000600128503&uo=4',
    episodeUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/af711c29-e004-47d1-8540-afab00fc2266/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    trackId: 1000600128503,
    trackName: 'Episode 351 w/ Michael Blackson',
    description:
      'N.O.R.E. & DJ EFN are the Drink Champs. In this episode the Champs chop it up with comedy legend Michael Blackson!Michael Blackson shares his journey in life and comedy. Michael shares stories about building schools, cracking jokes, Next Friday (the movie) and much much more! Lots of great stories that you don’t want to miss!!Make some noise!!! 💐💐💐🏆🏆🏆\n\n*Subscribe to Patreon NOW for exclusive content, discount codes, M&G’s + more:  🏆*\n\nhttps://www.patreon.com/drinkchamps\n\n*Listen and subscribe at https://www.drinkchamps.com\n\n Follow Drink Champs:\n\nhttps://www.instagram.com/drinkchamps\n\nhttps://www.twitter.com/drinkchamps\n\nhttps://www.facebook.com/drinkchamps\n\nhttps://www.youtube.com/drinkchamps\n\n DJ EFN\n\nhttps://www.crazyhood.com\n\nhttps://www.instagram.com/whoscrazy\n\nhttps://www.twitter.com/djefn\n\nhttps://www.facebook.com/crazyhoodproductions\n\n N.O.R.E.\n\nhttps://www.instagram.com/therealnoreaga\n\nhttps://www.twitter.com/noreaga\n\n*Check out our Culture Cards NFT project by joining The Culture Cards Discord: 👇*\n\nhttps://discord.gg/theculturecards\nSee omnystudio.com/listener for privacy information.',
    episodeFileExtension: 'mp3',
    previewUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/af711c29-e004-47d1-8540-afab00fc2266/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    artistIds: [284341002],
    releaseDate: '2023-02-17T08:00:00Z',
    shortDescription: '',
    episodeContentType: 'audio',
    artworkUrl600:
      'https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/14/e3/47/14e34799-421a-c242-5b67-1ad753ceeb0b/mza_16301894267974865804.jpg/600x600bb.jpg',
    kind: 'podcast-episode',
    wrapperType: 'podcastEpisode',
    artworkUrl160:
      'https://is3-ssl.mzstatic.com/image/thumb/Podcasts116/v4/14/e3/47/14e34799-421a-c242-5b67-1ad753ceeb0b/mza_16301894267974865804.jpg/160x160bb.jpg',
    episodeGuid: 'af711c29-e004-47d1-8540-afab00fc2266',
    genres: [
      {
        name: 'Music',
        id: '1310',
      },
    ],
  },
  {
    country: 'USA',
    collectionViewUrl:
      'https://itunes.apple.com/us/podcast/drink-champs/id1096830182?mt=2&uo=4',
    trackTimeMillis: 10116000,
    feedUrl:
      'https://www.omnycontent.com/d/playlist/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/df6d181a-09ea-4bf2-adc6-ae33005f650d/podcast.rss',
    closedCaptioning: 'none',
    collectionId: 1096830182,
    collectionName: 'Drink Champs',
    artworkUrl60:
      'https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/20/d1/04/20d104a9-ffa0-83b4-ea09-004e9ea48c02/mza_3986351716056405447.jpg/60x60bb.jpg',
    artistViewUrl:
      'https://itunes.apple.com/us/artist/interval-presents/284341002?mt=2&uo=4',
    contentAdvisoryRating: 'Explicit',
    trackViewUrl:
      'https://podcasts.apple.com/us/podcast/episode-350-w-luenell/id1096830182?i=1000598993451&uo=4',
    episodeUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/05278356-0482-4fa6-82f7-afa300fab956/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    trackId: 1000598993451,
    trackName: 'Episode 350 w/ Luenell',
    description:
      'N.O.R.E. & DJ EFN are the Drink Champs. In this episode the Champs chop it up with the legendary Luenell!Luenell shares stories of her career, her passion for comedy, working with Rihanna and Savage X Fenty and much much more! Lots of great stories that you don’t want to miss!!Make some noise!!! 💐💐💐🏆🏆🏆\n\n*Subscribe to Patreon NOW for exclusive content, discount codes, M&G’s + more:  🏆*\n\nhttps://www.patreon.com/drinkchamps\n\n*Listen and subscribe at https://www.drinkchamps.com\n\n Follow Drink Champs:\n\nhttps://www.instagram.com/drinkchamps\n\nhttps://www.twitter.com/drinkchamps\n\nhttps://www.facebook.com/drinkchamps\n\nhttps://www.youtube.com/drinkchamps\n\n DJ EFN\n\nhttps://www.crazyhood.com\n\nhttps://www.instagram.com/whoscrazy\n\nhttps://www.twitter.com/djefn\n\nhttps://www.facebook.com/crazyhoodproductions\n\n N.O.R.E.\n\nhttps://www.instagram.com/therealnoreaga\n\nhttps://www.twitter.com/noreaga\n\n*Check out our Culture Cards NFT project by joining The Culture Cards Discord: 👇*\n\nhttps://discord.gg/theculturecards\nSee omnystudio.com/listener for privacy information.',
    episodeFileExtension: 'mp3',
    previewUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/05278356-0482-4fa6-82f7-afa300fab956/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    artistIds: [284341002],
    releaseDate: '2023-02-10T08:00:00Z',
    shortDescription: '',
    episodeContentType: 'audio',
    artworkUrl600:
      'https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/20/d1/04/20d104a9-ffa0-83b4-ea09-004e9ea48c02/mza_3986351716056405447.jpg/600x600bb.jpg',
    kind: 'podcast-episode',
    wrapperType: 'podcastEpisode',
    artworkUrl160:
      'https://is2-ssl.mzstatic.com/image/thumb/Podcasts126/v4/20/d1/04/20d104a9-ffa0-83b4-ea09-004e9ea48c02/mza_3986351716056405447.jpg/160x160bb.jpg',
    episodeGuid: '05278356-0482-4fa6-82f7-afa300fab956',
    genres: [
      {
        name: 'Music',
        id: '1310',
      },
    ],
  },
  {
    country: 'USA',
    collectionViewUrl:
      'https://itunes.apple.com/us/podcast/drink-champs/id1096830182?mt=2&uo=4',
    trackTimeMillis: 8223000,
    feedUrl:
      'https://www.omnycontent.com/d/playlist/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/df6d181a-09ea-4bf2-adc6-ae33005f650d/podcast.rss',
    closedCaptioning: 'none',
    collectionId: 1096830182,
    collectionName: 'Drink Champs',
    artworkUrl60:
      'https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/2d/d7/fb/2dd7fbb4-2785-0ebd-548a-ed18e3e32f84/mza_18209096644027179754.jpg/60x60bb.jpg',
    artistViewUrl:
      'https://itunes.apple.com/us/artist/interval-presents/284341002?mt=2&uo=4',
    contentAdvisoryRating: 'Explicit',
    trackViewUrl:
      'https://podcasts.apple.com/us/podcast/episode-349-w-t-i-terrence-j-and-joseph-sikora-movie/id1096830182?i=1000597832947&uo=4',
    episodeUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/955eec29-182c-453c-bdc2-af9d010bcea2/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    trackId: 1000597832947,
    trackName:
      'Episode 349 w/ T.I., Terrence J and Joseph Sikora (Movie cast of “FEAR”)',
    description:
      'N.O.R.E. & DJ EFN are the Drink Champs. In this episode the Champs chop it up with T.I., Terrence J and Joseph Sikora! Starring in the recently released horror film “FEAR” T.I., Terrence J and Joseph Sikora are here for a good time! The guys share stories from their individual careers, their experinces filming “FEAR” and much much more! Lots of great stories that you don’t want to miss!!Make some noise!!! 💐💐💐🏆🏆🏆\n\n*Subscribe to Patreon NOW for exclusive content, discount codes, M&G’s + more:  🏆*\n\nhttps://www.patreon.com/drinkchamps\n\n*Listen and subscribe at https://www.drinkchamps.com\n\n Follow Drink Champs:\n\nhttps://www.instagram.com/drinkchamps\n\nhttps://www.twitter.com/drinkchamps\n\nhttps://www.facebook.com/drinkchamps\n\nhttps://www.youtube.com/drinkchamps\n\n DJ EFN\n\nhttps://www.crazyhood.com\n\nhttps://www.instagram.com/whoscrazy\n\nhttps://www.twitter.com/djefn\n\nhttps://www.facebook.com/crazyhoodproductions\n\n N.O.R.E.\n\nhttps://www.instagram.com/therealnoreaga\n\nhttps://www.twitter.com/noreaga\n\n*Check out our Culture Cards NFT project by joining The Culture Cards Discord: 👇*\n\nhttps://discord.gg/theculturecards\nSee omnystudio.com/listener for privacy information.',
    episodeFileExtension: 'mp3',
    previewUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/955eec29-182c-453c-bdc2-af9d010bcea2/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    artistIds: [284341002],
    releaseDate: '2023-02-03T08:00:00Z',
    shortDescription: '',
    episodeContentType: 'audio',
    artworkUrl600:
      'https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/2d/d7/fb/2dd7fbb4-2785-0ebd-548a-ed18e3e32f84/mza_18209096644027179754.jpg/600x600bb.jpg',
    kind: 'podcast-episode',
    wrapperType: 'podcastEpisode',
    artworkUrl160:
      'https://is3-ssl.mzstatic.com/image/thumb/Podcasts126/v4/2d/d7/fb/2dd7fbb4-2785-0ebd-548a-ed18e3e32f84/mza_18209096644027179754.jpg/160x160bb.jpg',
    episodeGuid: '955eec29-182c-453c-bdc2-af9d010bcea2',
    genres: [
      {
        name: 'Music',
        id: '1310',
      },
    ],
  },
  {
    country: 'USA',
    collectionViewUrl:
      'https://itunes.apple.com/us/podcast/drink-champs/id1096830182?mt=2&uo=4',
    trackTimeMillis: 10881000,
    feedUrl:
      'https://www.omnycontent.com/d/playlist/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/df6d181a-09ea-4bf2-adc6-ae33005f650d/podcast.rss',
    closedCaptioning: 'none',
    collectionId: 1096830182,
    collectionName: 'Drink Champs',
    artworkUrl60:
      'https://is5-ssl.mzstatic.com/image/thumb/Podcasts116/v4/24/05/f0/2405f04e-6bad-f863-70fe-fdc6fb4ca151/mza_12674787786719608653.jpg/60x60bb.jpg',
    artistViewUrl:
      'https://itunes.apple.com/us/artist/interval-presents/284341002?mt=2&uo=4',
    contentAdvisoryRating: 'Explicit',
    trackViewUrl:
      'https://podcasts.apple.com/us/podcast/episode-348-w-my-expert-opinion/id1096830182?i=1000596871596&uo=4',
    episodeUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/0c49f38b-632c-4f63-838e-af95010a5c6c/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    trackId: 1000596871596,
    trackName: 'Episode 348 w/ My Expert Opinion',
    description:
      'N.O.R.E. & DJ EFN are the Drink Champs. In this episode the Champs chop it up with My Expert Opinion! Math Hoffa, Mr. Mecc, Sean Bigga & Michael Smith-Baker talk careers, battle rap and much more! Lots of great stories that you don’t want to miss!!Make some noise!!! 💐💐💐🏆🏆🏆\n\nMake some noise!!! 💐💐💐🏆🏆🏆\n\n*Subscribe to Patreon NOW for exclusive content, discount codes, M&G’s + more:  🏆*\n\nhttps://www.patreon.com/drinkchamps\n\n*Listen and subscribe at https://www.drinkchamps.com\n\n Follow Drink Champs:\n\nhttps://www.instagram.com/drinkchamps\n\nhttps://www.twitter.com/drinkchamps\n\nhttps://www.facebook.com/drinkchamps\n\nhttps://www.youtube.com/drinkchamps\n\n DJ EFN\n\nhttps://www.crazyhood.com\n\nhttps://www.instagram.com/whoscrazy\n\nhttps://www.twitter.com/djefn\n\nhttps://www.facebook.com/crazyhoodproductions\n\n N.O.R.E.\n\nhttps://www.instagram.com/therealnoreaga\n\nhttps://www.twitter.com/noreaga\n\n*Check out our Culture Cards NFT project by joining The Culture Cards Discord: 👇*\n\nhttps://discord.gg/theculturecards\nSee omnystudio.com/listener for privacy information.',
    episodeFileExtension: 'mp3',
    previewUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/0c49f38b-632c-4f63-838e-af95010a5c6c/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    artistIds: [284341002],
    releaseDate: '2023-01-27T08:00:00Z',
    shortDescription: '',
    episodeContentType: 'audio',
    artworkUrl600:
      'https://is5-ssl.mzstatic.com/image/thumb/Podcasts116/v4/24/05/f0/2405f04e-6bad-f863-70fe-fdc6fb4ca151/mza_12674787786719608653.jpg/600x600bb.jpg',
    kind: 'podcast-episode',
    wrapperType: 'podcastEpisode',
    artworkUrl160:
      'https://is5-ssl.mzstatic.com/image/thumb/Podcasts116/v4/24/05/f0/2405f04e-6bad-f863-70fe-fdc6fb4ca151/mza_12674787786719608653.jpg/160x160bb.jpg',
    episodeGuid: '0c49f38b-632c-4f63-838e-af95010a5c6c',
    genres: [
      {
        name: 'Music',
        id: '1310',
      },
    ],
  },
  {
    country: 'USA',
    collectionViewUrl:
      'https://itunes.apple.com/us/podcast/drink-champs/id1096830182?mt=2&uo=4',
    trackTimeMillis: 8992000,
    feedUrl:
      'https://www.omnycontent.com/d/playlist/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/df6d181a-09ea-4bf2-adc6-ae33005f650d/podcast.rss',
    closedCaptioning: 'none',
    collectionId: 1096830182,
    collectionName: 'Drink Champs',
    artworkUrl60:
      'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/40/7c/f8/407cf85e-d530-a278-20f0-6ab70343d505/mza_16740295589263874165.jpg/60x60bb.jpg',
    artistViewUrl:
      'https://itunes.apple.com/us/artist/interval-presents/284341002?mt=2&uo=4',
    contentAdvisoryRating: 'Explicit',
    trackViewUrl:
      'https://podcasts.apple.com/us/podcast/episode-347-w-jt-money/id1096830182?i=1000595621367&uo=4',
    episodeUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/94a8e860-e550-4a00-a4a0-af90000f4690/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    trackId: 1000595621367,
    trackName: 'Episode 347 w/ JT Money',
    description:
      'N.O.R.E. & DJ EFN are the Drink Champs. In this episode the Champs chop it up with the legendary JT Money.\n\nFrom the almighty Poison Clan, JT Money shares stories about his journey & career.\n\nJT talks about the early days of Poison Clan, connecting with Uncle Luke, meeting with Tupac and much much more!\n\nLots of great stories that you don’t want to miss!!\n\nMake some noise!!! 💐💐💐🏆🏆🏆\n\n*Subscribe to Patreon NOW for exclusive content, discount codes, M&G’s + more:  🏆*\n\nhttps://www.patreon.com/drinkchamps\n\n \n\n*Listen and subscribe at https://www.drinkchamps.com\n\n Follow Drink Champs:\n\nhttps://www.instagram.com/drinkchamps\n\nhttps://www.twitter.com/drinkchamps\n\nhttps://www.facebook.com/drinkchamps\n\nhttps://www.youtube.com/drinkchamps\n\n DJ EFN\n\nhttps://www.crazyhood.com\n\nhttps://www.instagram.com/whoscrazy\n\nhttps://www.twitter.com/djefn\n\nhttps://www.facebook.com/crazyhoodproductions\n\n N.O.R.E.\n\nhttps://www.instagram.com/therealnoreaga\n\nhttps://www.twitter.com/noreaga\n\n*Check out our Culture Cards NFT project by joining The Culture Cards Discord: 👇*\n\nhttps://discord.gg/theculturecards\nSee omnystudio.com/listener for privacy information.',
    episodeFileExtension: 'mp3',
    previewUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/94a8e860-e550-4a00-a4a0-af90000f4690/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    artistIds: [284341002],
    releaseDate: '2023-01-20T08:00:00Z',
    shortDescription: '',
    episodeContentType: 'audio',
    artworkUrl600:
      'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/40/7c/f8/407cf85e-d530-a278-20f0-6ab70343d505/mza_16740295589263874165.jpg/600x600bb.jpg',
    kind: 'podcast-episode',
    wrapperType: 'podcastEpisode',
    artworkUrl160:
      'https://is3-ssl.mzstatic.com/image/thumb/Podcasts113/v4/40/7c/f8/407cf85e-d530-a278-20f0-6ab70343d505/mza_16740295589263874165.jpg/160x160bb.jpg',
    episodeGuid: '94a8e860-e550-4a00-a4a0-af90000f4690',
    genres: [
      {
        name: 'Music',
        id: '1310',
      },
    ],
  },
  {
    country: 'USA',
    collectionViewUrl:
      'https://itunes.apple.com/us/podcast/drink-champs/id1096830182?mt=2&uo=4',
    trackTimeMillis: 10070000,
    feedUrl:
      'https://www.omnycontent.com/d/playlist/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/df6d181a-09ea-4bf2-adc6-ae33005f650d/podcast.rss',
    closedCaptioning: 'none',
    collectionId: 1096830182,
    collectionName: 'Drink Champs',
    artworkUrl60:
      'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/08/c7/80/08c78068-1374-eb04-6d95-127039b0a91b/mza_7951338553730567689.jpg/60x60bb.jpg',
    artistViewUrl:
      'https://itunes.apple.com/us/artist/interval-presents/284341002?mt=2&uo=4',
    contentAdvisoryRating: 'Explicit',
    trackViewUrl:
      'https://podcasts.apple.com/us/podcast/episode-346-w-amber-rose-murda-mook-and-loaded-lux/id1096830182?i=1000591098107&uo=4',
    episodeUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/bf47ff44-3bba-4f67-8977-af730100e30d/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    trackId: 1000591098107,
    trackName:
      'Episode 346 w/ Amber Rose, Murda Mook and Loaded Lux (24K Christmas Special)',
    description:
      'N.O.R.E. & DJ EFN are the Drink Champs. In this episode the Champs chop it up with Amber Rose, Murda Mook and Loaded Lux!\n\nCelebrate the holidays with the us & the family for a memorable Holiday episode filmed @Klub24Miami 🔥\n\nLots of great stories that you don’t want to miss!!\n\nMake some noise!!! 💐💐💐🏆🏆🏆\n\n \n\n*Subscribe to Patreon NOW for exclusive content, discount codes, M&G’s + more:  🏆*\n\nhttps://www.patreon.com/drinkchamps\n\n \n\n*Listen and subscribe at https://www.drinkchamps.com\n\n Follow Drink Champs:\n\nhttps://www.instagram.com/drinkchamps\n\nhttps://www.twitter.com/drinkchamps\n\nhttps://www.facebook.com/drinkchamps\n\nhttps://www.youtube.com/drinkchamps\n\n DJ EFN\n\nhttps://www.crazyhood.com\n\nhttps://www.instagram.com/whoscrazy\n\nhttps://www.twitter.com/djefn\n\nhttps://www.facebook.com/crazyhoodproductions\n\n N.O.R.E.\n\nhttps://www.instagram.com/therealnoreaga\n\nhttps://www.twitter.com/noreaga\n\n*Check out our Culture Cards NFT project by joining The Culture Cards Discord: 👇*\n\nhttps://discord.gg/theculturecards\nSee omnystudio.com/listener for privacy information.',
    episodeFileExtension: 'mp3',
    previewUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/bf47ff44-3bba-4f67-8977-af730100e30d/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    artistIds: [284341002],
    releaseDate: '2022-12-23T11:00:00Z',
    shortDescription: '',
    episodeContentType: 'audio',
    artworkUrl600:
      'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/08/c7/80/08c78068-1374-eb04-6d95-127039b0a91b/mza_7951338553730567689.jpg/600x600bb.jpg',
    kind: 'podcast-episode',
    wrapperType: 'podcastEpisode',
    artworkUrl160:
      'https://is4-ssl.mzstatic.com/image/thumb/Podcasts113/v4/08/c7/80/08c78068-1374-eb04-6d95-127039b0a91b/mza_7951338553730567689.jpg/160x160bb.jpg',
    episodeGuid: 'bf47ff44-3bba-4f67-8977-af730100e30d',
    genres: [
      {
        name: 'Music',
        id: '1310',
      },
    ],
  },
  {
    country: 'USA',
    collectionViewUrl:
      'https://itunes.apple.com/us/podcast/drink-champs/id1096830182?mt=2&uo=4',
    trackTimeMillis: 15876000,
    feedUrl:
      'https://www.omnycontent.com/d/playlist/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/df6d181a-09ea-4bf2-adc6-ae33005f650d/podcast.rss',
    closedCaptioning: 'none',
    collectionId: 1096830182,
    collectionName: 'Drink Champs',
    artworkUrl60:
      'https://is4-ssl.mzstatic.com/image/thumb/Podcasts123/v4/35/16/27/35162761-8c17-427e-f3b6-7d3c35d1e565/mza_11995100628346448301.jpg/60x60bb.jpg',
    artistViewUrl:
      'https://itunes.apple.com/us/artist/interval-presents/284341002?mt=2&uo=4',
    contentAdvisoryRating: 'Explicit',
    trackViewUrl:
      'https://podcasts.apple.com/us/podcast/episode-345-w-earn-your-leisure-and-19keys/id1096830182?i=1000590387486&uo=4',
    episodeUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/6e1dc94d-0941-4d3d-af1a-af6d000c6d3c/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    trackId: 1000590387486,
    trackName: 'Episode 345 w/ Earn Your Leisure and 19KEYS',
    description:
      'N.O.R.E. & DJ EFN are the Drink Champs. In this episode the Champs chop it up with the one and only Earn Your Leisure and 19KEYS!\n\nRashad Bilal and Troy Millings (of Earn Your Leisure) and 19KEYS join us for an episode of financial enlightenment!\n\nThe guys talk about the importance of having a network, financial literacy, stock market and much much more!\n\nLots of great stories that you don’t want to miss!!\n\nMake some noise!!! 💐💐💐🏆🏆🏆\n\n \n\n*Subscribe to Patreon NOW for exclusive content, discount codes, M&G’s + more:  🏆*\n\nhttps://www.patreon.com/drinkchamps\n\n \n\n*Listen and subscribe at https://www.drinkchamps.com\n\n Follow Drink Champs:\n\nhttps://www.instagram.com/drinkchamps\n\nhttps://www.twitter.com/drinkchamps\n\nhttps://www.facebook.com/drinkchamps\n\nhttps://www.youtube.com/drinkchamps\n\n DJ EFN\n\nhttps://www.crazyhood.com\n\nhttps://www.instagram.com/whoscrazy\n\nhttps://www.twitter.com/djefn\n\nhttps://www.facebook.com/crazyhoodproductions\n\n N.O.R.E.\n\nhttps://www.instagram.com/therealnoreaga\n\nhttps://www.twitter.com/noreaga\n\n \n\n*Check out our Culture Cards NFT project by joining The Culture Cards Discord: 👇*\n\nhttps://discord.gg/theculturecards\nSee omnystudio.com/listener for privacy information.',
    episodeFileExtension: 'mp3',
    previewUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/6e1dc94d-0941-4d3d-af1a-af6d000c6d3c/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    artistIds: [284341002],
    releaseDate: '2022-12-16T12:00:00Z',
    shortDescription: '',
    episodeContentType: 'audio',
    artworkUrl600:
      'https://is4-ssl.mzstatic.com/image/thumb/Podcasts123/v4/35/16/27/35162761-8c17-427e-f3b6-7d3c35d1e565/mza_11995100628346448301.jpg/600x600bb.jpg',
    kind: 'podcast-episode',
    wrapperType: 'podcastEpisode',
    artworkUrl160:
      'https://is4-ssl.mzstatic.com/image/thumb/Podcasts123/v4/35/16/27/35162761-8c17-427e-f3b6-7d3c35d1e565/mza_11995100628346448301.jpg/160x160bb.jpg',
    episodeGuid: '6e1dc94d-0941-4d3d-af1a-af6d000c6d3c',
    genres: [
      {
        name: 'Music',
        id: '1310',
      },
    ],
  },
  {
    country: 'USA',
    collectionViewUrl:
      'https://itunes.apple.com/us/podcast/drink-champs/id1096830182?mt=2&uo=4',
    trackTimeMillis: 4568000,
    feedUrl:
      'https://www.omnycontent.com/d/playlist/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/df6d181a-09ea-4bf2-adc6-ae33005f650d/podcast.rss',
    closedCaptioning: 'none',
    collectionId: 1096830182,
    collectionName: 'Drink Champs',
    artworkUrl60:
      'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/9f/9f/3d/9f9f3d59-e221-66f3-457b-f71eed3517ec/mza_7008881149463769807.jpg/60x60bb.jpg',
    artistViewUrl:
      'https://itunes.apple.com/us/artist/interval-presents/284341002?mt=2&uo=4',
    contentAdvisoryRating: 'Explicit',
    trackViewUrl:
      'https://podcasts.apple.com/us/podcast/episode-344-stockx-golf-invitational/id1096830182?i=1000589583477&uo=4',
    episodeUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/f700ce8f-b8d4-41c1-9199-af66000ef922/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    trackId: 1000589583477,
    trackName: 'Episode 344 “StockX Golf Invitational”',
    description:
      "N.O.R.E. & DJ EFN are the Drink Champs. In this episode the Champs are hanging out at the StockX Golf Invitational sponsored by D'usse!\n\nWe chop it up with Nigel Sylvester, Steelo Brim, JR Smith and Ben Baller!\n\nLots of great stories that you don’t want to miss!!\n\nMake some noise!!! 💐💐💐🏆🏆🏆\n\n \n\n*Subscribe to Patreon NOW for exclusive content, discount codes, M&G’s + more:  🏆*\n\nhttps://www.patreon.com/drinkchamps\n\n \n\n*Listen and subscribe at https://www.drinkchamps.com\n\n Follow Drink Champs:\n\nhttps://www.instagram.com/drinkchamps\n\nhttps://www.twitter.com/drinkchamps\n\nhttps://www.facebook.com/drinkchamps\n\nhttps://www.youtube.com/drinkchamps\n\n DJ EFN\n\nhttps://www.crazyhood.com\n\nhttps://www.instagram.com/whoscrazy\n\nhttps://www.twitter.com/djefn\n\nhttps://www.facebook.com/crazyhoodproductions\n\n N.O.R.E.\n\nhttps://www.instagram.com/therealnoreaga\n\nhttps://www.twitter.com/noreaga\n\n \n\n*Check out our Culture Cards NFT project by joining The Culture Cards Discord: 👇*\n\nhttps://discord.gg/theculturecards\n\n \nSee omnystudio.com/listener for privacy information.",
    episodeFileExtension: 'mp3',
    previewUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/f700ce8f-b8d4-41c1-9199-af66000ef922/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    artistIds: [284341002],
    releaseDate: '2022-12-09T11:00:00Z',
    shortDescription: '',
    episodeContentType: 'audio',
    artworkUrl600:
      'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/9f/9f/3d/9f9f3d59-e221-66f3-457b-f71eed3517ec/mza_7008881149463769807.jpg/600x600bb.jpg',
    kind: 'podcast-episode',
    wrapperType: 'podcastEpisode',
    artworkUrl160:
      'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/9f/9f/3d/9f9f3d59-e221-66f3-457b-f71eed3517ec/mza_7008881149463769807.jpg/160x160bb.jpg',
    episodeGuid: 'f700ce8f-b8d4-41c1-9199-af66000ef922',
    genres: [
      {
        name: 'Music',
        id: '1310',
      },
    ],
  },
  {
    country: 'USA',
    collectionViewUrl:
      'https://itunes.apple.com/us/podcast/drink-champs/id1096830182?mt=2&uo=4',
    trackTimeMillis: 8038000,
    feedUrl:
      'https://www.omnycontent.com/d/playlist/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/df6d181a-09ea-4bf2-adc6-ae33005f650d/podcast.rss',
    closedCaptioning: 'none',
    collectionId: 1096830182,
    collectionName: 'Drink Champs',
    artworkUrl60:
      'https://is5-ssl.mzstatic.com/image/thumb/Podcasts123/v4/e5/21/25/e5212588-8809-d3e7-50ba-2186ec3de4ae/mza_16615873152418691079.jpg/60x60bb.jpg',
    artistViewUrl:
      'https://itunes.apple.com/us/artist/interval-presents/284341002?mt=2&uo=4',
    contentAdvisoryRating: 'Explicit',
    trackViewUrl:
      'https://podcasts.apple.com/us/podcast/episode-343-w-rowdy-rebel/id1096830182?i=1000588483610&uo=4',
    episodeUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/73fb0b42-54dd-418c-b2ab-af5e00e9e970/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    trackId: 1000588483610,
    trackName: 'Episode 343 w/ Rowdy Rebel',
    description:
      'N.O.R.E. & DJ EFN are the Drink Champs. In this episode we chop it up with the one and only Rowdy Rebel!\n\nRowdy joins us and shares his journey. Rowdy shares stories of meeting Fat Joe, being a sports fan, and willing to go 1 on 1 verse Drake, Durk or Jim Jones in a basketball game! 😆 🏀 \n\nLots of great stories that you don’t want to miss!!\n\nMake some noise for Rowdy Rebel!!! 💐💐💐🏆🏆🏆\n\n \n\n*Subscribe to Patreon NOW for exclusive content, discount codes, M&G’s + more:  🏆*\n\nhttps://www.patreon.com/drinkchamps\n\n \n\n*Listen and subscribe at https://www.drinkchamps.com\n\n Follow Drink Champs:\n\nhttps://www.instagram.com/drinkchamps\n\nhttps://www.twitter.com/drinkchamps\n\nhttps://www.facebook.com/drinkchamps\n\nhttps://www.youtube.com/drinkchamps\n\n DJ EFN\n\nhttps://www.crazyhood.com\n\nhttps://www.instagram.com/whoscrazy\n\nhttps://www.twitter.com/djefn\n\nhttps://www.facebook.com/crazyhoodproductions\n\n N.O.R.E.\n\nhttps://www.instagram.com/therealnoreaga\n\nhttps://www.twitter.com/noreaga\n\n*Check out our Culture Cards NFT project by joining The Culture Cards Discord: 👇*\n\nhttps://discord.gg/theculturecards\nSee omnystudio.com/listener for privacy information.',
    episodeFileExtension: 'mp3',
    previewUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/73fb0b42-54dd-418c-b2ab-af5e00e9e970/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    artistIds: [284341002],
    releaseDate: '2022-12-02T11:00:00Z',
    shortDescription: '',
    episodeContentType: 'audio',
    artworkUrl600:
      'https://is5-ssl.mzstatic.com/image/thumb/Podcasts123/v4/e5/21/25/e5212588-8809-d3e7-50ba-2186ec3de4ae/mza_16615873152418691079.jpg/600x600bb.jpg',
    kind: 'podcast-episode',
    wrapperType: 'podcastEpisode',
    artworkUrl160:
      'https://is5-ssl.mzstatic.com/image/thumb/Podcasts123/v4/e5/21/25/e5212588-8809-d3e7-50ba-2186ec3de4ae/mza_16615873152418691079.jpg/160x160bb.jpg',
    episodeGuid: '73fb0b42-54dd-418c-b2ab-af5e00e9e970',
    genres: [
      {
        name: 'Music',
        id: '1310',
      },
    ],
  },
  {
    country: 'USA',
    collectionViewUrl:
      'https://itunes.apple.com/us/podcast/drink-champs/id1096830182?mt=2&uo=4',
    trackTimeMillis: 8884000,
    feedUrl:
      'https://www.omnycontent.com/d/playlist/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/df6d181a-09ea-4bf2-adc6-ae33005f650d/podcast.rss',
    closedCaptioning: 'none',
    collectionId: 1096830182,
    collectionName: 'Drink Champs',
    artworkUrl60:
      'https://is4-ssl.mzstatic.com/image/thumb/Podcasts123/v4/fd/1f/76/fd1f763c-2650-df0b-3252-c0198babb388/mza_7860348482437061459.jpg/60x60bb.jpg',
    artistViewUrl:
      'https://itunes.apple.com/us/artist/interval-presents/284341002?mt=2&uo=4',
    contentAdvisoryRating: 'Explicit',
    trackViewUrl:
      'https://podcasts.apple.com/us/podcast/episode-342-w-bill-bellamy/id1096830182?i=1000587474083&uo=4',
    episodeUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/c5af1d76-dacf-4090-aa20-af560036da54/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    trackId: 1000587474083,
    trackName: 'Episode 342 w/ Bill Bellamy',
    description:
      'N.O.R.E. & DJ EFN are the Drink Champs. In this episode we chop it up with the one and only Bill Bellamy! \n\nBill joins us for a great convo as he shares his journey, stories from the classic movie “How To Be A Player”, his time on MTV and much much more!\n\nLots of great topics that you don’t want to miss!!\n\nMake some noise for Bill Bellamy!!! 💐💐💐🏆🏆🏆\n\n \n\n*Subscribe to Patreon NOW for exclusive content, discount codes, M&G’s + more:  🏆*\n\nhttps://www.patreon.com/drinkchamps\n\n \n\n*Listen and subscribe at https://www.drinkchamps.com\n\n Follow Drink Champs:\n\nhttps://www.instagram.com/drinkchamps\n\nhttps://www.twitter.com/drinkchamps\n\nhttps://www.facebook.com/drinkchamps\n\nhttps://www.youtube.com/drinkchamps\n\n DJ EFN\n\nhttps://www.crazyhood.com\n\nhttps://www.instagram.com/whoscrazy\n\nhttps://www.twitter.com/djefn\n\nhttps://www.facebook.com/crazyhoodproductions\n\n N.O.R.E.\n\nhttps://www.instagram.com/therealnoreaga\n\nhttps://www.twitter.com/noreaga\n\n \n\n*Check out our Culture Cards NFT project by joining The Culture Cards Discord: 👇*\n\nhttps://discord.gg/theculturecards\nSee omnystudio.com/listener for privacy information.',
    episodeFileExtension: 'mp3',
    previewUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/c5af1d76-dacf-4090-aa20-af560036da54/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    artistIds: [284341002],
    releaseDate: '2022-11-25T11:00:00Z',
    shortDescription: '',
    episodeContentType: 'audio',
    artworkUrl600:
      'https://is4-ssl.mzstatic.com/image/thumb/Podcasts123/v4/fd/1f/76/fd1f763c-2650-df0b-3252-c0198babb388/mza_7860348482437061459.jpg/600x600bb.jpg',
    kind: 'podcast-episode',
    wrapperType: 'podcastEpisode',
    artworkUrl160:
      'https://is4-ssl.mzstatic.com/image/thumb/Podcasts123/v4/fd/1f/76/fd1f763c-2650-df0b-3252-c0198babb388/mza_7860348482437061459.jpg/160x160bb.jpg',
    episodeGuid: 'c5af1d76-dacf-4090-aa20-af560036da54',
    genres: [
      {
        name: 'Music',
        id: '1310',
      },
    ],
  },
  {
    country: 'USA',
    collectionViewUrl:
      'https://itunes.apple.com/us/podcast/drink-champs/id1096830182?mt=2&uo=4',
    trackTimeMillis: 9916000,
    feedUrl:
      'https://www.omnycontent.com/d/playlist/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/df6d181a-09ea-4bf2-adc6-ae33005f650d/podcast.rss',
    closedCaptioning: 'none',
    collectionId: 1096830182,
    collectionName: 'Drink Champs',
    artworkUrl60:
      'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/49/f7/a1/49f7a1f3-320c-2f23-b181-8824c545c249/mza_461422989268433039.jpg/60x60bb.jpg',
    artistViewUrl:
      'https://itunes.apple.com/us/artist/interval-presents/284341002?mt=2&uo=4',
    contentAdvisoryRating: 'Explicit',
    trackViewUrl:
      'https://podcasts.apple.com/us/podcast/episode-341-w-michael-eric-dyson/id1096830182?i=1000586693128&uo=4',
    episodeUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/5c97a681-0941-42f3-a696-af500151f3e1/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    trackId: 1000586693128,
    trackName: 'Episode 341 w/ Michael Eric Dyson',
    description:
      'N.O.R.E. & DJ EFN are the Drink Champs. In this episode we chop it up with the one and only Michael Eric Dyson!\n\nMichael Eric Dyson shares his story as an ordained minister, American academic, author, professor and more.\n\nListen as we discuss topics about poverty, economic policies, racism, and much much more!\n\nLots of great topics that you don’t want to miss!!\n\nMake some noise for Michael Eric Dyson!!! 💐💐💐🏆🏆🏆\n\n \n\n*Subscribe to Patreon NOW for exclusive content, discount codes, M&G’s + more:  🏆*\n\nhttps://www.patreon.com/drinkchamps\n\n \n\n*Listen and subscribe at https://www.drinkchamps.com\n\n Follow Drink Champs:\n\nhttps://www.instagram.com/drinkchamps\n\nhttps://www.twitter.com/drinkchamps\n\nhttps://www.facebook.com/drinkchamps\n\nhttps://www.youtube.com/drinkchamps\n\n DJ EFN\n\nhttps://www.crazyhood.com\n\nhttps://www.instagram.com/whoscrazy\n\nhttps://www.twitter.com/djefn\n\nhttps://www.facebook.com/crazyhoodproductions\n\n N.O.R.E.\n\nhttps://www.instagram.com/therealnoreaga\n\nhttps://www.twitter.com/noreaga\n\n \n\n*Check out our Culture Cards NFT project by joining The Culture Cards Discord: 👇*\n\nhttps://discord.gg/theculturecards\nSee omnystudio.com/listener for privacy information.',
    episodeFileExtension: 'mp3',
    previewUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/5c97a681-0941-42f3-a696-af500151f3e1/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    artistIds: [284341002],
    releaseDate: '2022-11-18T10:30:00Z',
    shortDescription: '',
    episodeContentType: 'audio',
    artworkUrl600:
      'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/49/f7/a1/49f7a1f3-320c-2f23-b181-8824c545c249/mza_461422989268433039.jpg/600x600bb.jpg',
    kind: 'podcast-episode',
    wrapperType: 'podcastEpisode',
    artworkUrl160:
      'https://is2-ssl.mzstatic.com/image/thumb/Podcasts113/v4/49/f7/a1/49f7a1f3-320c-2f23-b181-8824c545c249/mza_461422989268433039.jpg/160x160bb.jpg',
    episodeGuid: '5c97a681-0941-42f3-a696-af500151f3e1',
    genres: [
      {
        name: 'Music',
        id: '1310',
      },
    ],
  },
  {
    country: 'USA',
    collectionViewUrl:
      'https://itunes.apple.com/us/podcast/drink-champs/id1096830182?mt=2&uo=4',
    trackTimeMillis: 9682000,
    feedUrl:
      'https://www.omnycontent.com/d/playlist/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/df6d181a-09ea-4bf2-adc6-ae33005f650d/podcast.rss',
    closedCaptioning: 'none',
    collectionId: 1096830182,
    collectionName: 'Drink Champs',
    artworkUrl60:
      'https://is4-ssl.mzstatic.com/image/thumb/Podcasts123/v4/94/a9/c9/94a9c99c-2025-b47f-ea96-d0f7ca9e2b40/mza_29106051191354682.jpg/60x60bb.jpg',
    artistViewUrl:
      'https://itunes.apple.com/us/artist/interval-presents/284341002?mt=2&uo=4',
    contentAdvisoryRating: 'Explicit',
    trackViewUrl:
      'https://podcasts.apple.com/us/podcast/episode-340-w-bobby-shmurda/id1096830182?i=1000585861192&uo=4',
    episodeUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/83d0a685-ee8c-426c-8054-af49018a9af1/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    trackId: 1000585861192,
    trackName: 'Episode 340 w/ Bobby Shmurda',
    description:
      'N.O.R.E. & DJ EFN are the Drink Champs. In this episode we chop it up with the one and only Bobby Shmurda!\n\nBobby joins us and shares his journey in music. With its highs and lows, Bobby shares stories about his career, serving time in prison, making hit records and much much more!\n\nLots of great stories that you don’t want to miss!!\n\nMake some noise!!! 💐💐💐🏆🏆🏆\n\n \n\n*Subscribe to Patreon NOW for exclusive content, discount codes, M&G’s + more:  🏆*\n\nhttps://www.patreon.com/drinkchamps\n\n \n\n*Listen and subscribe at https://www.drinkchamps.com\n\n Follow Drink Champs:\n\nhttps://www.instagram.com/drinkchamps\n\nhttps://www.twitter.com/drinkchamps\n\nhttps://www.facebook.com/drinkchamps\n\nhttps://www.youtube.com/drinkchamps\n\n DJ EFN\n\nhttps://www.crazyhood.com\n\nhttps://www.instagram.com/whoscrazy\n\nhttps://www.twitter.com/djefn\n\nhttps://www.facebook.com/crazyhoodproductions\n\n N.O.R.E.\n\nhttps://www.instagram.com/therealnoreaga\n\nhttps://www.twitter.com/noreaga\n\n \n\n*Check out our Culture Cards NFT project by joining The Culture Cards Discord: 👇*\n\nhttps://discord.gg/theculturecards\nSee omnystudio.com/listener for privacy information.',
    episodeFileExtension: 'mp3',
    previewUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/83d0a685-ee8c-426c-8054-af49018a9af1/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    artistIds: [284341002],
    releaseDate: '2022-11-11T11:00:00Z',
    shortDescription: '',
    episodeContentType: 'audio',
    artworkUrl600:
      'https://is4-ssl.mzstatic.com/image/thumb/Podcasts123/v4/94/a9/c9/94a9c99c-2025-b47f-ea96-d0f7ca9e2b40/mza_29106051191354682.jpg/600x600bb.jpg',
    kind: 'podcast-episode',
    wrapperType: 'podcastEpisode',
    artworkUrl160:
      'https://is4-ssl.mzstatic.com/image/thumb/Podcasts123/v4/94/a9/c9/94a9c99c-2025-b47f-ea96-d0f7ca9e2b40/mza_29106051191354682.jpg/160x160bb.jpg',
    episodeGuid: '83d0a685-ee8c-426c-8054-af49018a9af1',
    genres: [
      {
        name: 'Music',
        id: '1310',
      },
    ],
  },
  {
    country: 'USA',
    collectionViewUrl:
      'https://itunes.apple.com/us/podcast/drink-champs/id1096830182?mt=2&uo=4',
    trackTimeMillis: 6806000,
    feedUrl:
      'https://www.omnycontent.com/d/playlist/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/df6d181a-09ea-4bf2-adc6-ae33005f650d/podcast.rss',
    closedCaptioning: 'none',
    collectionId: 1096830182,
    collectionName: 'Drink Champs',
    artworkUrl60:
      'https://is4-ssl.mzstatic.com/image/thumb/Podcasts123/v4/94/27/6a/94276a87-a3c9-0fe6-af2d-587cf5f08420/mza_13282111597492911256.jpg/60x60bb.jpg',
    artistViewUrl:
      'https://itunes.apple.com/us/artist/interval-presents/284341002?mt=2&uo=4',
    contentAdvisoryRating: 'Explicit',
    trackViewUrl:
      'https://podcasts.apple.com/us/podcast/episode-339-w-derek-jeter/id1096830182?i=1000585063505&uo=4',
    episodeUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/86b45f73-e31b-4640-b8aa-af4201258eda/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    trackId: 1000585063505,
    trackName: 'Episode 339 w/ Derek Jeter',
    description:
      'N.O.R.E. & DJ EFN are the Drink Champs. In this episode we chop it up with Mr. November himself, Derek Jeter! \n\nCaptain Clutch joins us as he shares stories of his Hall of Fame career.\n\nThe 5x World Series Champion spent his entire 20 year career with the NY Yankees. Jeter shares stories of the 1998 Yankees, his relationship with A-Rod, being inducted into the HOF and much much more!\n\nLots of great stories that you don’t want to miss!!\n\nMake some noise for Derek Jeter!!! 💐💐💐🏆🏆🏆\n\n \n\n*Subscribe to Patreon NOW for exclusive content, discount codes, M&G’s + more:  🏆*\n\nhttps://www.patreon.com/drinkchamps\n\n \n\n*Listen and subscribe at https://www.drinkchamps.com\n\n Follow Drink Champs:\n\nhttps://www.instagram.com/drinkchamps\n\nhttps://www.twitter.com/drinkchamps\n\nhttps://www.facebook.com/drinkchamps\n\nhttps://www.youtube.com/drinkchamps\n\n DJ EFN\n\nhttps://www.crazyhood.com\n\nhttps://www.instagram.com/whoscrazy\n\nhttps://www.twitter.com/djefn\n\nhttps://www.facebook.com/crazyhoodproductions\n\n N.O.R.E.\n\nhttps://www.instagram.com/therealnoreaga\n\nhttps://www.twitter.com/noreaga\n\n \n\n*Check out our Culture Cards NFT project by joining The Culture Cards Discord: 👇*\n\nhttps://discord.gg/theculturecards\n\n \nSee omnystudio.com/listener for privacy information.',
    episodeFileExtension: 'mp3',
    previewUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/86b45f73-e31b-4640-b8aa-af4201258eda/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    artistIds: [284341002],
    releaseDate: '2022-11-04T10:00:00Z',
    shortDescription: '',
    episodeContentType: 'audio',
    artworkUrl600:
      'https://is4-ssl.mzstatic.com/image/thumb/Podcasts123/v4/94/27/6a/94276a87-a3c9-0fe6-af2d-587cf5f08420/mza_13282111597492911256.jpg/600x600bb.jpg',
    kind: 'podcast-episode',
    wrapperType: 'podcastEpisode',
    artworkUrl160:
      'https://is4-ssl.mzstatic.com/image/thumb/Podcasts123/v4/94/27/6a/94276a87-a3c9-0fe6-af2d-587cf5f08420/mza_13282111597492911256.jpg/160x160bb.jpg',
    episodeGuid: '86b45f73-e31b-4640-b8aa-af4201258eda',
    genres: [
      {
        name: 'Music',
        id: '1310',
      },
    ],
  },
  {
    country: 'USA',
    collectionViewUrl:
      'https://itunes.apple.com/us/podcast/drink-champs/id1096830182?mt=2&uo=4',
    trackTimeMillis: 7805000,
    feedUrl:
      'https://www.omnycontent.com/d/playlist/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/df6d181a-09ea-4bf2-adc6-ae33005f650d/podcast.rss',
    closedCaptioning: 'none',
    collectionId: 1096830182,
    collectionName: 'Drink Champs',
    artworkUrl60:
      'https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/50/d8/c6/50d8c6f9-ff11-81a1-9bff-5ea547568226/mza_9118359192078336759.jpg/60x60bb.jpg',
    artistViewUrl:
      'https://itunes.apple.com/us/artist/interval-presents/284341002?mt=2&uo=4',
    contentAdvisoryRating: 'Explicit',
    trackViewUrl:
      'https://podcasts.apple.com/us/podcast/episode-338-w-jeezy/id1096830182?i=1000584219431&uo=4',
    episodeUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/5ec96ebb-04fb-47e6-8e8a-af3c002fe509/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    trackId: 1000584219431,
    trackName: 'Episode 338 w/ Jeezy',
    description:
      'N.O.R.E. & DJ EFN are the Drink Champs. In this episode we chop it up with the legend himself and Drink Champs Alumni, Jeezy!\n\nThe Snowman visits once again and brings the SNOFALL.\n\nJeezy shares stories of his journey, giving away hundreds of thousands of mixtapes for free, driving Ferrari’s before the fame, working with Diddy, and much much more! \n\nJeezy also talks about his new project w/ DJ DRAMA titled “SNOFALL”. Available now!\n\nLots of great stories that you don’t want to miss!!\n\nMake some noise for Jeezy!!! 💐💐💐🏆🏆🏆\n\n \n\n*Subscribe to Patreon NOW for exclusive content, discount codes, M&G’s + more:  🏆*\n\nhttps://www.patreon.com/drinkchamps\n\n \n\nListen and subscribe at https://www.drinkchamps.com\n\n Follow Drink Champs:\n\nhttps://www.instagram.com/drinkchamps\n\nhttps://www.twitter.com/drinkchamps\n\nhttps://www.facebook.com/drinkchamps\n\nhttps://www.youtube.com/drinkchamps\n\n DJ EFN\n\nhttps://www.crazyhood.com\n\nhttps://www.instagram.com/whoscrazy\n\nhttps://www.twitter.com/djefn\n\nhttps://www.facebook.com/crazyhoodproductions\n\n N.O.R.E.\n\nhttps://www.instagram.com/therealnoreaga\n\nhttps://www.twitter.com/noreaga\n\n \n\n*Check out our Culture Cards NFT project by joining The Culture Cards Discord: 👇*\n\nhttps://discord.gg/theculturecards\nSee omnystudio.com/listener for privacy information.',
    episodeFileExtension: 'mp3',
    previewUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/5ec96ebb-04fb-47e6-8e8a-af3c002fe509/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    artistIds: [284341002],
    releaseDate: '2022-10-28T10:00:00Z',
    shortDescription: '',
    episodeContentType: 'audio',
    artworkUrl600:
      'https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/50/d8/c6/50d8c6f9-ff11-81a1-9bff-5ea547568226/mza_9118359192078336759.jpg/600x600bb.jpg',
    kind: 'podcast-episode',
    wrapperType: 'podcastEpisode',
    artworkUrl160:
      'https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/50/d8/c6/50d8c6f9-ff11-81a1-9bff-5ea547568226/mza_9118359192078336759.jpg/160x160bb.jpg',
    episodeGuid: '5ec96ebb-04fb-47e6-8e8a-af3c002fe509',
    genres: [
      {
        name: 'Music',
        id: '1310',
      },
    ],
  },
  {
    country: 'USA',
    collectionViewUrl:
      'https://itunes.apple.com/us/podcast/drink-champs/id1096830182?mt=2&uo=4',
    trackTimeMillis: 8490000,
    feedUrl:
      'https://www.omnycontent.com/d/playlist/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/df6d181a-09ea-4bf2-adc6-ae33005f650d/podcast.rss',
    closedCaptioning: 'none',
    collectionId: 1096830182,
    collectionName: 'Drink Champs',
    artworkUrl60:
      'https://is5-ssl.mzstatic.com/image/thumb/Podcasts123/v4/fc/6e/e0/fc6ee03a-f9cb-073e-0688-26ca6d15d773/mza_5887076058537157240.jpg/60x60bb.jpg',
    artistViewUrl:
      'https://itunes.apple.com/us/artist/interval-presents/284341002?mt=2&uo=4',
    contentAdvisoryRating: 'Explicit',
    trackViewUrl:
      'https://podcasts.apple.com/us/podcast/episode-337-w-quavo-and-takeoff/id1096830182?i=1000583411241&uo=4',
    episodeUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/668d52e7-68af-4204-a7d1-af3401833e95/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    trackId: 1000583411241,
    trackName: 'Episode 337 w/ Quavo and TakeOff',
    description:
      'N.O.R.E. & DJ EFN are the Drink Champs. In this episode we chop it up with Quavo and TakeOff!\n\nOriginally from the group Migos - Quavo & TakeOff stop by to share their journey!\n\nThe guys share stories of the Migos culture they’ve built, working with a variety of artists, their new album, VERZUZ and much much more!\n\nLots of great stories that you don’t want to miss!!\n\nMake some noise!!! 💐💐💐🏆🏆🏆\n\n \n\n*Subscribe to Patreon NOW for exclusive content, discount codes, M&G’s + more:  🏆*\n\nhttps://www.patreon.com/drinkchamps\n\n \n\nListen and subscribe at https://www.drinkchamps.com\n\n Follow Drink Champs:\n\nhttps://www.instagram.com/drinkchamps\n\nhttps://www.twitter.com/drinkchamps\n\nhttps://www.facebook.com/drinkchamps\n\nhttps://www.youtube.com/drinkchamps\n\n DJ EFN\n\nhttps://www.crazyhood.com\n\nhttps://www.instagram.com/whoscrazy\n\nhttps://www.twitter.com/djefn\n\nhttps://www.facebook.com/crazyhoodproductions\n\n N.O.R.E.\n\nhttps://www.instagram.com/therealnoreaga\n\nhttps://www.twitter.com/noreaga\n\n \n\n*Check out our Culture Cards NFT project by joining The Culture Cards Discord: 👇*\n\nhttps://discord.gg/theculturecards\nSee omnystudio.com/listener for privacy information.',
    episodeFileExtension: 'mp3',
    previewUrl:
      'https://chrt.fm/track/BE7515/traffic.omny.fm/d/clips/e73c998e-6e60-432f-8610-ae210140c5b1/9ff2dac3-12fd-4561-b512-ae33005f64f5/668d52e7-68af-4204-a7d1-af3401833e95/audio.mp3?utm_source=Podcast&in_playlist=df6d181a-09ea-4bf2-adc6-ae33005f650d',
    artistIds: [284341002],
    releaseDate: '2022-10-21T10:00:00Z',
    shortDescription: '',
    episodeContentType: 'audio',
    artworkUrl600:
      'https://is5-ssl.mzstatic.com/image/thumb/Podcasts123/v4/fc/6e/e0/fc6ee03a-f9cb-073e-0688-26ca6d15d773/mza_5887076058537157240.jpg/600x600bb.jpg',
    kind: 'podcast-episode',
    wrapperType: 'podcastEpisode',
    artworkUrl160:
      'https://is5-ssl.mzstatic.com/image/thumb/Podcasts123/v4/fc/6e/e0/fc6ee03a-f9cb-073e-0688-26ca6d15d773/mza_5887076058537157240.jpg/160x160bb.jpg',
    episodeGuid: '668d52e7-68af-4204-a7d1-af3401833e95',
    genres: [
      {
        name: 'Music',
        id: '1310',
      },
    ],
  },
]
