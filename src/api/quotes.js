/**
 * Mocking client-server processing
 */
const _quotes = [
  {'author': 'Rupaul', 'quote': 'If you can’t love yourself how in the hell you gonna love somebody else.'},
  {'author': 'Rupaul', 'quote': 'What other people think of you is none of your business.'},
  {'author': 'Rupaul', 'quote': 'Throwing shade takes a bit of creativity, being a bitch takes none'},
  {'author': 'Rupaul', 'quote': 'She done already done had herses'},
  {'author': 'Rupaul', 'quote': 'Look at me — a big old black man under all of this makeup, and if I can look beautiful, so can you'},
  {'author': 'Rupaul', 'quote': 'When you become the image of your own imagination, it’s the most powerful thing you could ever do.'},
  {'author': 'Rupaul', 'quote': 'Expectations lead to resentments and when you allow people to just be themselves the relationship can really grow'},
  {'author': 'Rupaul', 'quote': 'Dont F*** it up!'}
]

export default {
  getQuotes (cb) {
    setTimeout(() => cb(_quotes), 1500)
  }
}
