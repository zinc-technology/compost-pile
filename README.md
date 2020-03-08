# Shithole: Shut Up and Flush Some Money

Capital is shit. Flush it down the Shithole.

We compost the shit, turn it into fertilizer and distribute it to members of under-capitalized communities through
no-strings-attached microloans and paid apprenticeships.

## Contributing

Shithole is a kinda-but-not-really tongue-in-cheek side project. Contributions
are _welcome and appreciated_, but I am unlikely to take the time to optimize for
collaboration unless this takes off. You can see more in
[CONTRIBUTING.md][contributing].

That said, I'll have CI running tests and the documentation I feel like writing,
but that's about it.

## Design

People subscribe to flush some of their ~~money~~ shit down the shithole every
month. That shit ferments for ~6 months, during which the Shitter may request a
refund, which will be granted with no questions asked. Once six months have
passed, the shit turns into fertilizer.

This fertilizer is distributed to members of under-capitalized communities
through no-strings attached microloans or paid software apprenticeships through
[ZTI][zti-twitter].

[zti-twitter]: https://twitter.com/ZincTechnology

## Architecture

There are two modules that make up Shithole: [`api`][api] and [`www`][www].

- [`api`][api] is a Ruby on Rails backend for processing the payment
  information, handling form submissions, exposing raw data for accountability
  purposes, etc.
- [`www`][www] is a static site that provides the stripe payment form, call to
  action, accountability data, etc.

[api]: ./api/
[www]: ./www/

### Dependencies

Shithole depends on the following programs which must be installed manually:

- PostgreSQL (We recommend [Postgres.app][postgres-app] for macOS)
- Redis (We recommend [Homebrew to install Redis][homebrew-redis])
- (we recommend using a language manager like [asdf][asdf], [rbenv][rbenv], or
  [nodenv][nodenv])
  - Ruby 2.7 (We recommend [rbenv][rbenv] or [asdf][asdf])
  - Node 12.16 (We recommend [nodenv][nodenv] or [asdf][asdf])

[postgres-app]: https://postgresapp.com/
[homebrew-redis]: https://formulae.brew.sh/formula/redis
[rbenv]: https://github.com/rbenv/rbenv
[nodenv]: https://github.com/nodenv/nodenv
[asdf]: https://asdf-vm.com/#/

## License

Shithole is licensed under the [Prosperity Public License][prosperity-license].
See [LICENSE.md][license] for more details.

[contributing]: ./CONTRIBUTING.md
[license]: ./LICENSE.md
[prosperity-license]: https://prosperitylicense.com/
