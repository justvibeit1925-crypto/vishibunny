export type Photo = {
  src: string
  alt: string
  caption: string
}

export const photos: Record<string, Photo> = {
  sistaContacts: {
    src: '/images/sista-contacts.png',
    alt: 'Chat contact list showing FAVIE SISTAAAA and lobly SISTAAA',
    caption: 'saved you as FAVIE SISTAAAA ♡',
  },
  meYouUs: {
    src: '/images/me-you-us.png',
    alt: 'Chat showing a ME YOU US edit with the message SISTAAAA ME MADE THIS',
    caption: 'ME + YOU = US 🐰🐥',
  },
  stickerWar: {
    src: '/images/sticker-war.png',
    alt: 'Meme chat bubbles: No you are wrong / I think this is right',
    caption: 'proof of our chaos 😭',
  },
  birthday: {
    src: '/images/birthday-message.png',
    alt: 'Long purple birthday message from Mubi to Vishi',
    caption: 'happiest bday my only sistaaa 💜',
  },
  vishiSelfie: {
    src: '/images/vishi-selfie.png',
    alt: 'Selfie of Vishi in a pink outfit with round glasses',
    caption: 'my cutest Vishii bro ♡',
  },
  vishiCrown: {
    src: '/images/vishi-crown.png',
    alt: 'Dreamy selfie of Vishi with a hair accessory',
    caption: 'the cutest bean fr 🌷',
  },
}
